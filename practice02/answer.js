/*write a function that can take in one parameter
create a new container to store new array 
iterate through each index in the array starting from the end of the array 
ex: var i = arr.length - 1 
create a container that stores the current index of the array 
return the array
*/


var reverseArray=[ 2,3,4,5,6,'howdy', 'car',];


function reverseTheArray (arr){
    var output=[];
    for(var i=arr.length-1; i>= 0; i--){
        var currentIndex = arr[i];
         output.push(currentIndex);
    }
    return output;
}
var reverseMe = console.log(reverseTheArray(reverseArray));