/*write a function that takes in a string as a parameter 
/create a container to split the words into individual words split 
iterate through the string 
take a look at the first char of each word charAt() /  and remove the first character /shift 
and move it to the back of the word 
add 'ay' to the end of the word .push()
or use  
*/
var myString = "Hello my name is Stu";

function changeToPigLatin(str){
        var splitStr = str.split(' ');// "hello", "my", "name", "is", "stu";
    for(var i=0; i< str.length; i++){
        var currentIndex= str[i];
        var firstChar = str[i].charAt(0);
        if(firstChar){
            str[i].shift();
           str[i].push('ay');
        }
    }
    return str[i];
}
console.log(changeToPigLatin(myString));