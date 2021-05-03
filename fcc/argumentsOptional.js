function addTogether(...arg) {
    
    if(arg.length == 1 && typeof(arg[0]) === 'number'){
      
      const num1 = arg[0];
  
      const add = (...arg2) => {
        if(arg2.length == 1 && typeof(arg2[0]) === 'number'){
          return num1 + arg2[0];
        }
      }
      return add;
    }
  
    if(typeof(arg[0]) === 'number' && typeof(arg[1]) === 'number'){
      
      const result = arg[0] + arg[1];
      return result;
    }
    
    return undefined;
  }
//   First if statement is true
  console.log(addTogether(7)(7));
//   Second if statement is true
  console.log(addTogether(5,7));
//   Return undefined if any item is not a true number
  console.log(addTogether(10, [1,2,3]));
  console.log(addTogether("http://bit.ly/IqT6zt"));
  console.log(addTogether(10, '3'));


