// function isPalindrome(string){
//     string = string.toLowercase();//turn the string into lowercase
//     var characterArr = string.split("");//create a character array
//     var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split("");
    
//     var lettersArr = [];
//     charactersArr.forEach(character => {
//         if(validCharacters.indexOf(character > -1){
//             lettersArr.push(character);
//         });
//         if(lettersArr.join('')=== lettersArr.reverse.join(''){
//             return true;
//         } else{
//             return false;
//         }
//       }
// }

function isItPalidrome(string){
    string = string.toLowerCase();
    var charactersArr= string.split("");
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split("");

    var lettersArr=[];
    charactersArr.forEach(character=> {
        if(validCharacters.indexOf(character >-1)){
            lettersArr.push(character);
        };
        if(lettersArr.join('') === lettersArr.reverse().join('')){
            return true;
        } else {
            return false;
        }
        return lettersArr;
    });
}
console.log(isItPalidrome("race car"));

//Example 2 : Ceasar Cipher
function caesarCipher(str,number){
    num = num % 26; 
    var lowerCaseString = str.lowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    var newString = '';
    for(var i =0; i < lowerCaseString.length; i++){
        var currentLetter = lowerCaseString[i];
        if(currentLetter === ''){
            newString+= currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + number;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex =  26 + newIndex;
        if(string[i] === string[i].toUpperCase(){
            newString += alphabet[newIndex].toUpperCase();
        }
        newString += alphabet[newIndex];
    }
}