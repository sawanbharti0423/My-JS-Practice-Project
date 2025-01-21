let input = document.getElementById("input-box");
let button = document.querySelectorAll("button");

let str = "";
let arr = Array.from(button);

arr.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {

        str = eval(str);

        if (str === Infinity || str === -Infinity || isNaN(str)) {
          str = "Error";
        }
        input.value = str;
      } catch (err) {
        str = "Error";
        input.value = str;
      }
    } else if (e.target.innerHTML == "AC") {
      str = ""
      input.value = str
    } else if (e.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1)
      input.value = str
    } else {
      str += e.target.innerHTML;
      input.value = str
    }
  })
})