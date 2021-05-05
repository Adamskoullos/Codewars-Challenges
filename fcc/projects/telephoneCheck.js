function telephoneCheck(str) {

    // create array of string numbers 
    const arr = [...str]
  
    // Extract all string numbers into seperate array to get length
    const numArr = arr.filter(num => {
      return !isNaN(num)
    })
  
    // If numbArr length lower than 10 digits return fales else run the regEx
    if(numArr.length >= 10){
  const regEx = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  
      const result = regEx.test(str)
      console.log(result)
      
      return result;
    }
    console.log(false)
    return false;
  }
  
    telephoneCheck("1 (555) 555-5555");