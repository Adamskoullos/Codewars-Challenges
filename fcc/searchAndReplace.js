function myReplace(str, before, after) {
  
    let upper = /^[A-Z]/;
    let lower = /^[a-z]/;
  
    if(upper.test(before)){
      let newStr = after[0].toUpperCase();
      let finalStr = after.replace(after[0],newStr);
      console.log(str.replace(before, finalStr));
      return str.replace(before, finalStr);
    }
    if(lower.test(before)){
      let newStr = after[0].toLowerCase();
      let finalStr = after.replace(after[0],newStr);
      console.log(str.replace(before, finalStr));
      return str.replace(before, finalStr);
    }
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
  myReplace("I think we should look up there", "up", "Down");
  myReplace("Let us get back to more Coding", "Coding", "algorithms");
  