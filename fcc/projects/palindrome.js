function palindrome(str) {

    // Remove whitespace, punctuation, symbols (non-alphanumeric characters)
    // turn to lowercase, save reverse and check for match
    const str1 = str.replace(/[\W_]/g, '').toLowerCase()
    const str2 = str1.split('').reverse().join('')
    console.log(str1)
    console.log(str2)
    console.log(str1 == str2)
  
    return str1 == str2;
  }
  
  
  
  palindrome("_eye");