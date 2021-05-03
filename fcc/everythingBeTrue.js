function truthCheck(collection, pre) {
  
  

    const result = collection.every(obj => {
     return obj[pre]
    })
   
    console.log(result)
    return result;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");