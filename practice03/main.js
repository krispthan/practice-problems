var arrayMultiData = ['true',true,'1',5,'happy','4', false, 10, 'eat'];
//create an object
//iterate through the object
//create three different array



function createMultiArray(array){
    var newObject1={
        string:[],
        number:[],
        boolean:[]
    }
    var currentIndex = null;
    var findTypeOf ="";
    for(var i=0; i<array.length; i++){
        currentIndex= array[i];
        findTypeOf =typeof(currentIndex);
        switch (findTypeOf){
            case "number":
            newObject1.number.push(currentIndex);
            break;
            case "string":
            newObject1.string.push(currentIndex);
            break;
            case "boolean":
            newObject1.boolean.push(currentIndex);
        }
    }
    return newObject1;
}
var newObject2=createMultiArray(arrayMultiData);
console.log(createMultiArray(arrayMultiData));