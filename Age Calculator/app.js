let input = document.querySelector("input");
let ageCalculate = document.querySelector("#agecalculate");
let text = document.querySelector("#para")

ageCalculate.addEventListener("click",
    function calculate() {
        let getDOB = new Date(input.value)
        let currentDate = new Date()
        let finalAge = currentDate.getFullYear() - getDOB.getFullYear()
        let month = currentDate.getMonth() - getDOB.getMonth()
        if (month < 0 || month === 0 && currentDate.getDate() < getDOB.getDate()) {
            finalAge--;
        }

        let m1 = getDOB.getMonth() + 1;
        let m2 = currentDate.getMonth() + 1;
        let m3 = 0
        if (m2 > m1) {
            m3 = m2 - m1
        } else {
            m3 = (11 - m1) + m2

        }

        let d1 = getDOB.getDate();
        let d2 = currentDate.getDate();

        let d3;

        if (d2 >= d1) {

            d3 = d2 - d1;
        } else {

            let prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
            d3 = prevMonthLastDay - d1 + d2;
        }



        text.innerText = `You Are ${finalAge} Year ${m3} Month ${d3} days Old `
    }

)




