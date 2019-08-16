// # javascript-review1-ct
//
// Problem 1:
// Put the start of your program in a main function. Create a two player game. Ask the first player to "Enter a number". The second player has to guess the number until they get the right number. After each guess let them know if they should go higher or lower.

var player1Number = prompt("Enter a number for them to guess");
var player2Guess = prompt("Enter a guess")
while(player1Number !== player2Guess)
{
    if(player2Guess < player1Number)
    {
        alert("Guess higher!!!");
    }
    else if(player2Guess > player1Number)
    {
        alert("Guess lower!!!!");
    }
    player2Guess = prompt("Try again")
}

alert("You win")

//
//     Problem 2:
// Put the start of your program in a main function. Create a class for a bank account user. Include name, address, and account balance. Create a function that can change the account balance. It WILL NOT be changed if you log it. Create 3 bank users and put them in an array. Print the name and balance of each person in a function.



//
//     Problem 3:
// Put the start of your program in a main function. Create a function that can translate five English words into Spanish words. You should be able to call your function from your main function.
