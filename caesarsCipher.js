function rot13(str) {
  
    //Transform all the letters to capital letters
    str = str.toUpperCase();

    //Transform the string into an array
    var strArray = str.split("");

    //I create an array of the alphabet
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    //I create an array of the encrypted alphabet
    const cipher = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];

    //Iterate through all the elements of the word 
    for (var i=0; i<strArray.length; i++){      //Iterates through the alphabet
        for (var j=0; j<alphabet.length; j++){  //Iterates through the encrypted alphabet
            if (strArray[i] == alphabet[j]){     //When it finds the letter in the alphabet array, it's converted into the 
                strArray[i] = cipher[j];        //letter of the same index at the encrypted array
                break;
            }
        }
    }

    //Finally, convert the array into a string
    const decryptedWord = strArray.join("");

    return decryptedWord;
  }
  
  rot13("SERR PBQR PNZC");