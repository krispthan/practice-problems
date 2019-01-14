
    
    //input= array  and "cat"
    //create a new array
    //iterate through the array go through each character 
    //compare a check with the current word "cat" for each character of the word 
    //if the character matches with the current word "cat", then push the character into a new array
    //return the new array


    
var wordsToCompare = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];

function compareTheWords(arr, word){
    var output=[];
for(var i = 0 ; i< arr.length; i++){
    var currentIndex= arr[i];
    currentIndex = currentIndex.split(""); 
    console.log(currentIndex); 
    for(var j=0; j<word.length; j++){
        var currentWord= word[j];
        currentWord = currentWord.split("");
        if(currentIndex[i] === currentWord[j]){
           output.push(currentIndex[i]);
        }
    }
   
}
return output;
}
  compareTheWords(wordsToCompare, "cat");






