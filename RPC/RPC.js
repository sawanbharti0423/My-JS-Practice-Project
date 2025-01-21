let userScore = 0;
let comScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let userScorePara = document.querySelector("#user-score")
let comScorePara = document.querySelector("#computer-score")

const geCompChoice = () => {
    let options = ["rock", "paper", "scissors"]
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}

const gameDraw = () => {
    msg.innerText = "Game was Draw"
    msg.style.backgroundColor = "orange"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `Congratulation! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = `Opps! ${compChoice} Beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
    }

}

const playGame = (userChoice) => {
    console.log("userchoice =", userChoice)
    // generate Computer choice
    const compChoice = geCompChoice()
    console.log("computer choice =", compChoice)

    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice == "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice)
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})