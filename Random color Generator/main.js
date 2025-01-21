const getColorCode = () => {
    let randomColor = Math.floor(Math.random() * 16777215)
    let randomCode = "#" + randomColor.toString(16);
    document.getElementById("codes").innerText = `${randomCode}`
    let bg = document.getElementById("main")
    bg.style.backgroundColor = `${randomCode}`
}

document.getElementById("btn").addEventListener("click", getColorCode)

getColorCode()