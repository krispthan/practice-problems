
//frequency map
//create an object literal; 
// iterate through the array of object 
// set a container to store highest word count and word appear most often
//iterate through the object 
//check if each indexes in the objects of array is higher than the highest word count,
//if the word is higher than the word count, then set it equal to the highestword count
//and set the words appear most often to the current index
var animalArray= ['dog','cat','dog','pig','canary','cat','dog']



  
  function countOccurences(wordOfArray){
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
    // var wordAppearsMostOften = "";  
    var keyArray = Object.keys(inputObject);
 for(var i=0; i< keyArray.length; i++){
    var currentKeyArray = keyArray[i];  
    if(inputObject[currentKeyArray] > highestWordCount){
        highestWordCount = inputObject[currentKeyArray];
        // wordAppearsMostOften= currentKeyArray;
    }
 }
 return highestWordCount;
}
// wordOfOccurances(animalArray);

//Word Lengths:
//create a container that stores the length of each value of word 

var arrayOfWords=['happy','mad','angry','hungry', 'sad'];


function wordLengths(arr){
    var output=[];
    for(var i =0; i<arr.length; i++){
        var currentWord = arr[i];
        var currentNumChar= currentWord.length;
        output.push(currentNumChar);
    }
    return arr;
}
wordLengths(arrayOfWords);
//iterate through the array 
//get the min number in an array Math.min
//get the max number in an array Math.max
//get the average number in an array using reduce()
var numArray= [5,-5,15,25,12,2];
function getMinMaxMean(arr){
    var findMin=Math.min(...arr);
    var findMax= Math.max(...arr);
    var findTotal = arr.reduce(findSum);
    var findLength= arr.length;
    var findAverage = findTotal/findLength;
  return (findMin, findAverage,findMax); 
    }

getMinMaxMean(numArray);

function findSum(a,b){
    return a+b;
}
findSum(numArray);

//frequency map
//create an object literal
//iterate through the array of keys 
//add some key pair values in the object

var numArray2=[4,6,3,4,3,6,6,7];
function findMode(arr){
    var numObject={};
    for(var i=0; i<arr.length; i++){
        var currentNum = arr[i];
        if(numObject[currentNum]){
            numObject[currentNum]++;
        } else {
            numObject[currentNum]=1;
        }
    }
    var highestNumCount = 0;
    var highestNum ="";
    var keyObject = Object.keys(numObject);
    for(var i=0; i<keyObject.length; i++){
        var currentKeyObject = keyObject[i];
        if(numObject[currentKeyObject] > highestNumCount){
            highestNumCount = numObject[currentKeyObject];
            highestNum = currentKeyObject;
    }
    }
    return highestNum;
}
findMode(numArray2);

var aStringOfWords ="The quick brown fox jumped over the lazy dog";
function findLongestWordLength(str) {
      var strSplit = str.split(' ');
    var currentWordCount = 0;
     var theWord= null;
  for(var i= 0; i < strSplit.length; i++){
    var currentWord= strSplit[i];
    if(strSplit[i].length > currentWordCount){
      currentWordCount = strSplit[i].length;
      theWord =strSplit[i];
    }
  }
  return currentWordCount;
}
findLongestWordLength(aStringOfWords);