function steamrollArray(arr, finalArr = []) {

    arr.forEach(item => {
      if(Array.isArray(item)){
        steamrollArray(item, finalArr)
      } else{
        finalArr.push(item)
      }
    })
    console.log(finalArr)
    return finalArr;
  }
  
  steamrollArray([1, {}, [3, [[4]]]]);

  