//rock, paper, scissors
//randomized computer (Computer/comPlayer)
//prompt player to enter rock paper or scissors (playerOne)
// return or console.log win, lose or tie
//play again??? y or n if y(y), repeat loop or if n, stop(false)


function rps(){
    function computer(){
        const game = ['rock', 'paper', 'scissors'];
        const random = game[Math.floor(Math.random() * 3)];//game.length only returns 'scissors'? (*3) worked 
        return random;
    }// this took waaaaay longer to figure out than anticipated, for some reason i kept getting the index of the random string vs the full word. 

    let player = prompt("Type rock, paper or scissor").toLowerCase();
    let comPlayer = computer();

    if(player === comPlayer){
        return "It's a Tie!"
    }
    else if(player === 'rock' && comPlayer === 'paper'){
        return "You Lose! You Picked: " + player + "Computer: " + computer;
    }
    else if(player === 'paper' && comPlayer === 'scissors'){
        return "You Lose! You Picked: " + player + "Computer: " + computer;
    }
    else if(player === 'scissors' && comPlayer === 'rock'){
        return "You Lose! You Picked: " + player + "Computer: " + computer;
    }
    else
    {
        return "You Win! You Picked: " + player + "Computer: " + computer; 
    }

//*This is my attempt at looping the game for the future*
/*function playAgain(){
    let y = yes;
    let n = no;
        prompt("Do you want to play again? Type Y or N").toLowerCase();
        if(y){
            rps();
        }
        else{
            return "Good Game!"
        } 
        
        if(!'y' || !'n'){
            return "please type y or n!"
        }
    }*/
}
rps();

