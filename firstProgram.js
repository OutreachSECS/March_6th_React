//
// Write an HTML element where a user can put in a numerical value <- what element should we use?
/* 
    Get the user input
    

    Check to see if the input is divisible by 3, 5, or both 3 & 5 <- how do we do this?

    If divisible by 3, display 'Fizz' to the user
    If divisible by 5, display 'Buzz' to the user
    If divisible by 3 & 5, display 'FizzBuzz' to the user
        - How do we print an unknown value to an HTML element?

    If none of the conditions apply, print the number
*/

function myFunction () {
    let userInput = document.getElementById("numInput").value;

    let endResult;

    if (userInput % 3 == 0 && userInput % 5 == 0){
       endResult = 'FizzBuzz';
    } else if (userInput % 3 == 0){
        endResult = 'Fizz';
    } else if (userInput % 5 == 0){
        endResult = 'Buzz';
    } else {
        endResult = userInput;
    }

    document.getElementById("endResultText").innerHTML = endResult;
};