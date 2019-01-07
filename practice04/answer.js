/*create a function that takes in one parameter 
create a container to store the new array 
create a container to store the comparative index array 
//iterate through the array and compare of the current array is either bigger or smaller than the comparative index array 
//if true, create a temp variable and set that temp variable to the the current index
and set the current index to the be the next index over ex: a[i+1];
set the next index over to be the temp variable 
//switch the comparative statement to be true ;
*/


// function sortTheArray (arr){
//     var swap;
//     do{
//         swap= false;
//     for(var i= 0; i<arr.length; i++){
//       var currentArray = arr[i];
//       if(currentArray && arr[i +1] && currentArray > arr[i+1]){
//         swap(arr, i, i+1);
//         swap=true;
//       }
//     }
//     } while(swap);
//    return arr;
// }
// console.log(sortTheArray(sortArray.slice()));

// function sortTheArray(arr){
//     var output=[];
//     for(var i =0; i < arr.length; i++){
//         if(arr[i] >arr[i+1]){
//             output.push(arr[i])
//         } else {
//             var temp = arr[i];
//             arr[i] =arr[i+1];
//             arr[i+1] = temp;
//         }
//     }
//     return output;
// }
function swap(arr, i,j){
    var temp= arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var sortArray= ['1', 'happy,','caring', '4', 'mouse ', 'dog'];
function sortTheArray(arr){
    for(var i =0 ; i< arr.length; i++){
        for(var j=1; j<arr.length; j++){
            if(arr[j-1]> arr[j]){
                swap(arr, j-1, j);
            }
        }
    }
    return arr;
}
console.log(sortTheArray(sortArray.slice()));