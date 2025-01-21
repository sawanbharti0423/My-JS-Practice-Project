const counter = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const style = e.currentTarget.classList

    if (style.contains('increase')) {
      count++
    }
    else if (style.contains('decrease')) {
      count--;
    }

    counter.textContent = count
  })
});

