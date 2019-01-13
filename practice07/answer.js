/*write a function that takes in a string as a parameter 
/create a container to split the words into individual words split 
iterate through the string 
take a look at the first char of each word charAt() /  and remove the first character /shift 
and move it to the back of the word 
add 'ay' to the end of the word .push()
or use  
*/


// function changeToPigLatin(str){
//         var splitStr = str.split(' ');// "hello", "my", "name", "is", "stu";
//     for(var i=0; i< splitStr.length; i++){
//         var charToAdd= 'ay'
//         var currentIndex= splitStr[i];
//        var takeFirstChar= currentIndex.substr(1);//ello
//        //add the first char to the back of 
//        var addCharToBack =t
//      var finalWord=  takeFirstChar = takeFirstChar + charToAdd;//o/elloay 
//      finalWord+= takeFirstChar;
//     //    myNewString.push(takeFirstChar);
//     //    myNewString.join(" "
      
//         }
//         return finalWord;
//     }
    
  


//create an array of the words
//iterate through each character of the word 
// create a container that stores the individual first character to be taken off //shift
//take that same character and push it to the back of the word 
//add "ay"to the back of the word replace method
// combine the characters back into a string 

// var myString = "Hello my name is Stu";

// function piglatin(str){
//     var strSplit = str.split(' ');
//     for( var i = 0; i< strSplit.length; i++){
//       for(var j =0; j< strSplit[i].length; j++){
//             var currentIndex= strSplit[j];
//             var currentIndex = 
      
//       }

   
//     }

// }
// console.log(piglatin(myString));

//Reverse Array 
var sentence = "Howdy, how are you?"
function reverseStringInArray (string){
  var returnString = "";
    for(var i=0; i<string.length; i++){
      var splitString= string.split(" ");
    }
    for(var j=0; j<splitString.length;j++){
      var currentIndex= splitString[j];
      var splitWord= currentIndex.split("");
      var reverseString = splitWord.reverse();
      returnString += reverseString.join("").toString() + " ";  
    }
   return returnString;
  }

  reverseStringInArray(sentence);

console.log(reverseStringInArray(sentence));


