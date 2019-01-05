var myArray = ['bug', 'insect', 'mammal', 'reptile',
 'mammoth', 'turtles'];

 //create a function that takes in two parameters 
 //create a container storing the new array
 //iterate through the array 
 //create a container storing the current index of array
 //create a container storing the length of current index
 //compare the current index with the str length
 var findBiggerWord= biggerWords('bat'. myArray);
 function biggerWords(str, arr){
     var wordLength = str.length;
     var outputArray =[];
     for(var i =0; i< arr.length; i++){
         var currentWord= arr[i];
         var currentWordLength = currentWord.length;
         if(wordLength < currentWordLength){
             outputArray.push(currentWordLength[i]);
         }
     }
     return outputArray;
 }
console.log('biggest word is' , findBiggerWord);