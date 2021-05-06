function checkCashRegister(price, cash, cid) {
  const values = [ // provides the value per unit of each bill/coin type
    { name: "ONE HUNDRED", val: 100 },
    { name: "TWENTY", val: 20 },
    { name: "TEN", val: 10 },
    { name: "FIVE", val: 5 },
    { name: "ONE", val: 1 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ]
  const change = cid.map(i=>i) // To return when changeDue == total Available 
  const sortedArr = cid.reverse() // Order highest first 
  const cashTill = sortedArr.map(arr =>{ // create array to track the change of value for each bill/coin available for change
    return arr
  })
  
  let changeDue = cash - price // starting change due, used to track current change left to pay

  // Calculate and return the two basic outcomes--------------------------------------------
  const changeArr = sortedArr.map(arr => arr[1])
  const totalAvailable = changeArr.reduce((a,b) => a+b)
  // console.log(totalAvailable)
  // console.log(changeDue)

  if(totalAvailable < changeDue){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  if(totalAvailable == changeDue){
    console.log('Closed', change)
    return {status: "CLOSED", change: change}
  }
  // ---------------------------------------------------------------------------------------
  // Main Logic for calculating change
  let tempArr = []
  const finalArr = []

  const names = finalArr.map(name =>{ // can use to identify if exists in finalArr
    return name[0]
  })
  
  const converter = () => {
    
    if(changeDue > 0){
      values.map(obj => {
        if(obj.val <= changeDue){
          cashTill.forEach(arr => {
            if(arr[0] == obj.name && tempArr.length == 0 && arr[1] >= obj.val){ // Needs to be more than or equal too...this is the bug to sort
              tempArr.push(obj)
            }
          })
        }
      })
    }
  if(tempArr.length){
    let array = Object.values(tempArr[0]) // Now tempArr[0].value is to be added to finalArr ------------
   
// If array[0] bill/coin type exists in finalArr
    if(tempArr.length && names.includes(array[0])){
      finalArr.forEach(arr =>{ // This section to go in the main if
        if(arr[0] == array[0]){
          arr[1] = arr[1] + array[1] // Debit finalArr ----------------- 
          console.log('----------------finalArr updated:',arr)

          cashTill.forEach(i => {
            if(i[0] == array[0]){
              i[1] = i[1] - array[1] // Credit cashTill------------
              console.log('----------------cashTill updated:',i)
            }
          })
        }
      })
      changeDue = (changeDue - array[1]).toFixed(2) // ChangeDue has been updated-------------
      
      if(changeDue > 0){ // If change still owed, run the function again
      console.log('-----------------------running again ', changeDue, ' change still owed')
      tempArr = []
        converter()
      }
    }
// If array[0] bill/coin type does not already exist in finalArr
    if(tempArr.length && array.length && names.indexOf(array[0]) == -1){
      names.push(array[0])
      finalArr.push(array) // Debit finalArr-------------------
      cashTill.forEach(i => {
        if(i[0] == array[0]){
          i[1] = i[1] - array[1] // Credit cashTill------------
          console.log('----------------New bill/coin added and cashTill updated:',i)
        }
      })
      changeDue = (changeDue - array[1]).toFixed(2) // ChangeDue has been updated-------------
      if(changeDue > 0){ // If change still owed, run the function again
      console.log('-----------------------running again ', changeDue, ' change still owed')
      tempArr = []
        converter()
      }
    }
  }
  }
  converter(changeDue)
  console.log('finshed', finalArr)
  if(changeDue > 0){return {status: "INSUFFICIENT_FUNDS", change: []}}
  return {status: "OPEN", change: finalArr}
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);