let turn = "X";
let btn = document.getElementById("btn")



const changeTurn = () => {
  return turn === "X" ? "O" : "X";
}

const checkWin = () => {
  let boxes = document.querySelectorAll(".box");
  let boxText = Array.from(boxes).map(box => box.querySelector(".boxtext").innerText);

  const checkWinPattern = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
  ]

  for (let pattern of checkWinPattern) {
    const [a, b, c] = pattern;
    if (boxText[a] && boxText[a] === boxText[b] && boxText[a] === boxText[c]) {
      let winner = document.getElementsByClassName("winner")[0];
      let main = document.getElementsByClassName("main")[0];
      let gameContainer = document.getElementsByClassName("game-container")[0];
      gameContainer.classList.add("d-none")
      main.classList.remove("d-none")
      winner.innerText = `${boxText[a]} is Winner!`
      return
    }
  }

  if (!boxText.includes("")) {
    let winner = document.getElementsByClassName("winner")[0];
    let main = document.getElementsByClassName("main")[0];
    let gameContainer = document.getElementsByClassName("game-container")[0];
    gameContainer.classList.add("d-none")
    main.classList.remove("d-none")
    winner.innerText = `It's a Draw Match!`
    return
  }


}

let boxes = document.querySelectorAll(".box")
boxes.forEach(element => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn()
      checkWin()
    }
  })

})

document.getElementById("btn").addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  boxtexts.forEach(boxtext => boxtext.innerText = "");
  turn = "X";
});

document.getElementsByClassName("restart")[0].addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  boxtexts.forEach(boxtext => boxtext.innerText = "");
  turn = "X";
  let main = document.getElementsByClassName("main")[0];
  let gameContainer = document.getElementsByClassName("game-container")[0];
  gameContainer.classList.remove("d-none")
  main.classList.add("d-none")
})