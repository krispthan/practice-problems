
var array="abc";

//create a function that takes a string of words or array 

//split word into individual character
//create a storage container for the new permutations 
//iterate through each index 
function getPermutation(word){
 var output=[];
 var splitWord= array.split("");
 var results = splitWord.shift();
 for(var i =0; i<results.length; i++){
     var currentIndex= results[i];
     var index =0;
     while(index <= results.length){
        var tempArray=results;
//         var currentLetter = splitWord.shift();
//         tempArray.splice(index, 0, currentLetter);
//         tempArray.push(tempArray);
//         index++;
//      }
//  }

}
getPermutation(array);
console.log(getPermutation(array));

//Second method 
//first create a function expression that can swap 

var swap = function (arr, index1,index2){
    var temp= arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
};

// var letsPermute = function(array, output,n){
//     n = n || array.length;
//     if(n===1){
//         output(array);
//     } else{
//         for(var i=0; i<= n; i+=1){
//             letsPermute(array,output,n);
//             if(n%2){
//                 var j=1;
//             } else {
//                 var j=i;
//             }
//             swap(array, j-1, n-i)
//         } 
 
//     }
// };