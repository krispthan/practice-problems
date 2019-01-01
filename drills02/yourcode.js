
//frequency map
//create an object literal; 
// iterate through the array of object 
// set a container to store highest word count and word appear most often
//iterate through the object 
//check if each indexes in the objects of array is higher than the highest word count,
//if the word is higher than the word count, then set it equal to the highestword count
//and set the words appear most often to the current index
var animalArray= ['dog','cat','dog','pig','canary','cat','dog']

function wordOfOccurances(wordOfArray){
    var inputObject={};
    for(var i =0; i<wordOfArray.length; i++){
        var currentAnimal = wordOfArray[i];
        if(inputObject[currentAnimal]){
            inputObject[currentAnimal]++;
        } else{
            inputObject[currentAnimal]= 1;
        }
    }   
    var highestWordCount = 0;
    var wordAppearsMostOften = "";  
    var keyArray = Object.keys(inputObject);
 for(var i=0; i< keyArray.length; i++){
    var currentKeyArray = keyArray[i];  
    if(inputObject[currentKeyArray] > highestWordCount){
        highestWordCount = inputObject[currentKeyArray];
        wordAppearsMostOften= currentKeyArray;
    }
 }
 return wordAppearsMostOften;
}
wordOfOccurances(animalArray);



function wordLengths(){

}

function getMinMaxMean(){

}

function findMode(){

}
