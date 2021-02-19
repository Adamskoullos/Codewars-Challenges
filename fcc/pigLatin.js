function translatePigLatin(str) {

    let consonant = /^[cpglshw]+/gi;
    let vowel = /^[euioa]/gi;
   
    if(vowel.test(str)){
      let newWord = str.split('');
      //console.log(newWord);
      let newWord2 = [...newWord,'w','a','y'].join('');
      console.log(newWord2);
      return newWord2;
    }
    if(consonant.test(str)){ 
      //console.log(str);
      let cons = str.match(consonant).join().split('');
      let conLength = str.match(consonant).join().split('').length;
      //console.log(cons);
      //console.log(conLength);
      let tempArr = str.split('');
      for(let i = 0; i < conLength; i++){
        tempArr.shift();
      };
      let finalArr = [...tempArr,...cons,'a','y'].join('');
      console.log(finalArr);
      return finalArr;
    }
    if(!vowel.test(str) || !consonant.test(str)){
      let finalStr = [...str,'ay'].join('');
      console.log(finalStr);
      return finalStr;
    }
  }
  
  translatePigLatin("rhythm");
  translatePigLatin("paragraphs");
  translatePigLatin("glove");
  translatePigLatin("algorithm");
  translatePigLatin("eight");
  translatePigLatin("schwartz");