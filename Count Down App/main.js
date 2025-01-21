const endDate = "22 Feb 2025 11:59:59 PM"
const inputs = document.querySelectorAll("input")

function updateTime() {
    let now = new Date()
    let str = `${now}`;
    let strArr = str.split(' ')
    let strSli = strArr.slice(0, 5)
    let join = strSli.join(' ')
    document.getElementById("samay").innerText = `${join}`
}
setInterval(updateTime, 1000)

clock = () => {
    let end = new Date(endDate);
    let now = new Date();
    let diff = (end - now) / 1000;
    let day = Math.floor(diff / 3600 / 24)

    if (diff < 0) return;
    inputs[0].value = `${day}`
    let hours = Math.floor(diff / 3600) % 24;
    inputs[1].value = `${hours}`
    let min = Math.floor(diff / 60) % 60;
    inputs[2].value = `${min}`
    let sec = Math.floor(diff % 60);
    inputs[3].value = `${sec}`
}
clock()

setInterval(
    () => {
        clock()
    }, 1000
)


