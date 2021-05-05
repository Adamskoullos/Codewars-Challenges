function rot13(str) {
    const key = {
      'A': 'N',
      'B': 'O',
      'C': 'P',
      'D': 'Q',
      'E': 'R',
      'F': 'S',
      'G': 'T',
      'H': 'U',
      'I': 'V',
      'J': 'W',
      'K': 'X',
      'L': 'Y',
      'M': 'Z',
      'N': 'A',
      'O': 'B',
      'P': 'C',
      'Q': 'D',
      'R': 'E',
      'S': 'F',
      'T': 'G',
      'U': 'H',
      'V': 'I',
      'W': 'J',
      'X': 'K',
      'Y': 'L',
      'Z': 'M',
      ' ': ' ',
      '.': '.',
      '?': '?',
      '!': '!'
    }
  
    const arr = [...str]
    
    const arr2 = arr.map(letter => {
      return key[letter]
    })
    
    const washedString = arr2.join('')
    
    console.log(washedString)
    return washedString;
  }
  
  rot13("SERR PBQR PNZC");