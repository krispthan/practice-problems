
var changeMe= "the cat in the hat";
//input= changeMe sentence
//output= ascii characters all lowercase 
//iterate through each letter of the word 
//convert each character into ascii code 

function convertToAscii(sentence){
    var output ="";
    for(var i=0; i<sentence.length; i++){
        var currentIndex=sentence[i];
        var asciiCode = sentence.charCodeAt(i);
        output +=(asciiCode);
    }
    return output;
    
}
convertToAscii(changeMe);
