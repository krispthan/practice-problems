//create a function that takes in one parameter
//create a counter;
//iterate through each number in the array
//check if all  elements in the array are numbers;
// if so add it up;
var numArray = [2,3,4,5,6,7,8,9,1,22,33,44,55,66,77,88,99,100];
var total = sumArray(numArray);
function sumArray(arr){
    var counter = 0;
    for(var i= 0; i < arr.length; i++){
        var currentIndex = arr[i];
            counter += currentIndex;
            console.log("The counter is" + counter);
        }
        return counter;
    }
   


function fitWithinVal(){

}


//create a function with a parameters
//iterate through the list of names 
//check the length of each name 
//create a variable for the index of each name 
//check to see if the words are less or equal to the given number  
var namesArr= ['Kim','Peter','Casey','Paula','Sam', 'Pam', 'Steven']
var nameLength = 3;


var getShortNames=getAllNamesShorterThan(namesArr, nameLength);
function getAllNamesShorterThan(arr,desiredLength){
    var output= [];
 for(var i =0; i < arr.length; i++){
     var currentIndex = arr[i];
     var currentNameLength = currentIndex.length; 
     if(desiredLength >= currentNameLength){
       output.push(currentIndex);
     }
 }
 return output;

}

var person1=
[{'familyName' : 'Paschal',
'givenName': 'Daniel',
'greeting': 'Mr.',
'age': 43,
'height' : 185,
'colors': {'eye': 'blue','hair': 'brown'},
'home address': {'streetNumber': '9200',
'streetName':
 'Irvine Center Drive',
 'state':'CA',
 'zip': 92618,
 'city': 'Irvine'}}];
var person2=
 [{'familyName' : 'McGee',
 'givenName': 'Chuckles',
 'greeting':
  'Miss.',
  'age': 28,
  'height' : 165,
  'colors': {'eye': 'green','hair': 'green'},
  'home address': {'streetNumber': '12345',
  'streetName': 'Any St',
  'state': 'Mo',
  'zip': 63102,
  'city': 'Kansas City'}}]

  //first locate each of  values in each object 
  //join the values together followed by a comma

function makeLabel(){
  return `${person1[0].greeting} ${person1[0].givenName} ${person1[0].familyName}
${person1[0]["home address"].streetNumber} ${person1[0]["home address"].streetName}
${person1[0]["home address"].city}, ${person1[0]["home address"].state} ${person1[0]["home address"].zip}`;
  

}

console.log(makeLabel());