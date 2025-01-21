let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let game = document.querySelector(".game")
let container = document.querySelector(".container")

let turnx = true;
let count = 0;



const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

const resetGame = () => {
    turnx = true;
    count = 0;
    msgContainer.classList.add("hide");
    container.classList.remove("gamehide")
    enableBoxes()


}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnx) {
            box.innerText = "X"
            turnx = false;
        } else {
            box.innerText = "O"
            turnx = true;
        }
        box.disabled = true;
        count++;

        checkWinner()

        let isWinner = checkWinner()

        if (count === 9 && !isWinner) {
            gameDraw()
        }


    })

})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const gameDraw = () => {
    msg.innerText = `Game was a Draw! Restart Game`;
    msgContainer.classList.remove("hide");
    container.classList.add("gamehide")
    disableBoxes()
}




const showWinner = (winner) => {
    msg.innerText = `Congratulations! The Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
    container.classList.add("gamehide")
    disableBoxes()
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val)
            }
        }
    }
}



resetBtn.addEventListener("click", resetGame)
newGame.addEventListener("click", resetGame)