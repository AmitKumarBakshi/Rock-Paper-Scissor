let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userCurrentScore = document.querySelector("#user-score");
const computerCurrentScore = document.querySelector("#computer-score");

const computerPlay = ()=>{
    const options = ["Rock","Paper","Scissor"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const Draw = ()=>{
    msg.innerText = "Draw Game. Play again";
    msg.style.backgroundColor = "#1C352D";
}

const showWinner = (userWin,user_Choice,computer_Choice)=>{
    if(userWin){
        userScore++;
        userCurrentScore.innerText = userScore;
        msg.innerText = `You Win! Your ${user_Choice} beats ${computer_Choice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerCurrentScore.innerText = computerScore;
        msg.innerText = `You Lost. ${computer_Choice} beats your ${user_Choice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (user_Choice)=>{
const computer_Choice = computerPlay();
 if(computer_Choice === user_Choice){
    //draw
    Draw();
 }
 else{
    let userWin = true;
    if(user_Choice === "Rock"){
        //paper or scissor
        userWin = computer_Choice ==="Paper" ? false : true;
    }
    else if(user_Choice === "Paper"){
        //rock or scissor
        userWin = computer_Choice === "Scissor" ? false : true;
    }
    else if(user_Choice === "Scissor"){
        //rock or paper
        userWin = computer_Choice === "Rock" ? false : true;
    }

    showWinner(userWin,user_Choice,computer_Choice);
 }

}
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const user_Choice = choice.getAttribute("id");
        playGame(user_Choice);
    });
});