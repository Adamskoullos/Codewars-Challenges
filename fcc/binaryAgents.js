function binaryAgent(str) {

    const arr1 = str.split(' ')
    // console.log(arr1)
  
    const newArr = []
    arr1.map(char => {
      newArr.push(String.fromCharCode(parseInt(char, 2)))
    })
  
    const finalStr = newArr.join('')
    console.log(finalStr)
    return finalStr;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");