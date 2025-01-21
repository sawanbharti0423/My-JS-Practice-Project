const upperCase = "ABCDEFGHIHKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghihklmnopqrstuvwxyz"
const number = "1234567890"
const symbol = "~!@#$%^&*();:<>?\/+="

const passStatus = document.getElementById("pwdstatus")
const passBox = document.getElementById("pass-box")
const totalChr = document.getElementById("total-num");
const upperInput = document.getElementById("uppr-case");
const lowerInput = document.getElementById("lower-case");
const numInput = document.getElementById("number");
const symbolInput = document.getElementById("symbol");


const getRandomData = (dateSet) => {
    return dateSet[Math.floor(Math.random() * dateSet.length)]
}

const generatePwd = (password = "") => {
    let totalLength = parseInt(totalChr.value);
    if (upperInput.checked) {
        password += getRandomData(upperCase)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerCase)
    }
    if (numInput.checked) {
        password += getRandomData(number)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbol)
    }
    if (password.length < totalLength) {
        return generatePwd(password)
    }
    passBox.innerText = truncateString(password, totalChr.value)
    if (upperInput.checked) {
        passStatus.innerText = "Poor Password"
    }
    if (lowerInput.checked) {
        passStatus.innerText = "Good Password"
    }
    if (numInput.checked) {
        passStatus.innerText = "Best Password"
    }
    if (symbolInput.checked) {
        passStatus.innerText = "Strong Password"
    }

}

generatePwd()


document.getElementById("generate-pass").addEventListener("click", function () {
    generatePwd();
})

function truncateString(str, length) {

    if (str.length > length) {
        let subStr = str.substring(0, length)
        return subStr;
    } else {

        return str;
    }
}