/*

Build a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

- Write a function that takes no parameters
- The function should output the numbers 1 through 100, following the rules from above
-go through an array of num between 1 through 100
-create a container that stores the num that is a multiple of three
-if the num is a multiple of three print out fizz
-create a container that stores the num that is a multiple of five
-if the num is a multiple of five print out buzz
-create a conditional statement that compares both the num that is a multiple of three and five 
// */
// function findMultiple(){
//     for(var i =1; i <= 100; i++){// go through the loop 1-100
//     if(i % 3 === 0 && i % 5 ===0){// multiple of 3 and 5 
//        console.log("Fizz Buzz",i);
//         }
//         else if( i % 3 ===0){
//             console.log("Fizz", i);
//         } else {
//             console.log("Buzz", i);
//         }
//     }
//     return i;
// }
//  console.log(findMultiple(30));


//Example: Harmless Ransom Note:

// function harmlessRansomNotes(noteText, magazineText){
//     var noteArray  = noteText.split('');// will split the note text into each word
//     var magazineArr= magazineText.split('');// will split the magazineText into each word 
//     var magazineObj = {};
//     //using a hash table 
//     magazineArr.forEach(word => {// go through the magazine model and check if the word is in the object
//         if(!magazineObj[word]) magazineObj[word]= 0;// if the current word is not on the magazine object
//         magazineObj[word]++;
//     });
    
//     var noteIsPossible= true;
//     noteArray.forEach(word => {
//         if(magazineObj[word]){
//             magazineObj[word]--;
//             if(magazine[word] < 0 )noteIsPossible = false;
//         } 
//         else {
//             noteIsPossible = false;
//         }
//     })

   
// }

//This is a time complexity is O (n) linear time complexity

function checkNotesFromMagazine(noteText, magazineText){
    var noteArr = noteText.split('');
    var magazineArr = magazineText.split('');
    var magazineObj = {};

    magazineArr.forEach(word =>{
        if(!magazineObj[word]) magazineObj[word] = 0
        magazineObj[word]++;
    });

    var noteIsThere= true;
    noteArr.forEach(word=>{
        if(!magazineObj[word]){
            magazineObj[word]--;
            if(magazineObj[word] < 0) noteIsThere= false;
        }
        else {
            noteIsThere= true;
        }
    })
    return noteIsThere;
  
}
console.log(checkNotesFromMagazine('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));

