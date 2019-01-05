var arrayMultiData = ['true',true,'1',5,'happy','4', false, 10, 'eat'];
//create an object
//iterate through the object
//create three different array


function createMultiArray(arr){
    var multiObject= {};
    var strArray=[];
    var numArray=[];
    var booleanArray=[];
 for(var i =0; i<arr.length; i++){
     var currentIndex= arr[i];
      var findTypeOf = "";
      switch (findTypeOf){
          case "number":
         numArray.push(multiObject[currentIndex]);
         break;
         console.log("numArray", numArray);
          case "string":
          strArray.push(multiObject[currentIndex]);
          break;
          case "boolean":
          boolean.push(multiObject[currentIndex]);
          break;
          default:
           console.log('Error');
      }
 }
 return (numArray, strArray, booleanArray);
}
console.log(createMultiArray(arrayMultiData));