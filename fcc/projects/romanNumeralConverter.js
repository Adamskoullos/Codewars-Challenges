function convertToRoman(num) {
    const buildingBlocks = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const numArr = []
    let tempArr = []
    const romanNum = []
  
    const createNumArr = (num) => {
      if(num > 0){
        buildingBlocks.forEach(decNum => {
          if(decNum <= num){
            tempArr.push(decNum)
          }
        })
        numArr.push(tempArr[0])
        num = num - tempArr[0]
        tempArr = []
        
        createNumArr(num)
      }
    }
    createNumArr(num)
  
    numArr.forEach(number => {
        if(number == 1000){romanNum.push('M')}
        if(number == 900){romanNum.push('CM')}
        if(number == 500){romanNum.push('D')}
        if(number == 400){romanNum.push('CD')}
        if(number == 100){romanNum.push('C')}
        if(number == 90){romanNum.push('XC')}
        if(number == 50){romanNum.push('L')}
        if(number == 40){romanNum.push('XL')}
        if(number == 10){romanNum.push('X')}
        if(number == 9){romanNum.push('IX')}
        if(number == 5){romanNum.push('V')}
        if(number == 4){romanNum.push('IV')}
        if(number == 1){romanNum.push('I')}
      })
  
    console.log(romanNum.join(''))
    return romanNum.join('');
  }
  
  convertToRoman(3999);