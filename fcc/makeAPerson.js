var Person = function(firstAndLast) {
    // Only change code below this line
    let fullName = firstAndLast
    
    let firstName = firstAndLast.split(' ')[0]
    
    let lastName = firstAndLast.split(' ')[1]
    // Complete the method below and implement the others similarly
    this.getFullName = () => {
      return fullName;
    };
  
    this.getFirstName = () => {
      return firstName;
    };
  
    this.getLastName = () => {
      return lastName;
    };
  
    this.setFullName = (firstAndLast) => {
      fullName = firstAndLast;
      firstName = firstAndLast.split(' ')[0]
      lastName = firstAndLast.split(' ')[1];
    };
  
    this.setFirstName = (first) => {
      firstName = first;
      fullName = `${first} ${lastName}`
    };
  
    this.setLastName = (last) => {
      lastName = last;
      fullName = `${firstName} ${last}`
    };
  
  };
  
  var bob = new Person('Bob Ross');
  
  console.log(bob.getFullName());
  bob.setFullName("Haskell Curry");
  console.log(bob.getFullName());
  console.log(bob.getFirstName());