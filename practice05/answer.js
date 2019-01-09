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
*/
function findMultiple(){
    for(var i =1; i <= 100; i++){// go through the loop 1-100
    if(i % 3 === 0 || i % 5 ===0){// multiple of 3 and 5 
       console.log("Fizz Buzz",i);
        }
        else if( i % 3 ===0){
            console.log("Fizz", i);
        } else {
            console.log("Buzz", i);
        }
    }
    return i;
}
 console.log(findMultiple());