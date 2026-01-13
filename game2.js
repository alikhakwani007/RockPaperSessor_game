let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b13";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        // console.log("You win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }else{
        // console.log("You lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose $${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    // console.log("user choice is = ", userChoice);
    //Generate comp choice
    const compChoice = gencompChoice();
    // console.log("computer choice is ", compChoice);

    if(userChoice === compChoice){
        //Draw
        drawGame();
    } else{
        let userWin = true;
        if( userChoice === "rock") {
            //scissor, paper
           userWin = compChoice === "paper" ? false: true;
        } else if( userChoice === "paper") {
            // scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        }else {
            // paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})