let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let back = document.querySelector("#back")

function accessGranted() {
    let box = document.querySelector(".box");
    let access = document.querySelector(".access")
    box.classList.add("d-none");
    access.classList.remove("d-none")
}

function gettingData() {
    let inputValue = input.value;
    let search = document.querySelector("#searching");
    let uFound = document.querySelector("#u-found");
    let pwd = document.querySelector("#f-data")
    let done = document.querySelector("#pwd-done")

    search.innerText = `Searching for ${inputValue}...`

    setTimeout(() => {
        uFound.innerText = "Username Match Successful."
    }, 3000)

    setTimeout(() => {
        pwd.innerText = "Fetching Password..."
    }, 4000)

    setTimeout(() => {
        done.innerText = "Password found successfully"
    }, 7000)

    setTimeout(() => {
        accessGranted()
    }, 9000)

}

function backAgain() {
    let box = document.querySelector(".box");
    let access = document.querySelector(".access");
    let search = document.querySelector("#searching");
    let uFound = document.querySelector("#u-found");
    let pwd = document.querySelector("#f-data");
    let done = document.querySelector("#pwd-done");

    // Hide the access section and show the box section
    box.classList.remove("d-none");
    access.classList.add("d-none");

    // Clear all the previous data
    search.innerText = "";
    uFound.innerText = "";
    pwd.innerText = "";
    done.innerText = "";

    // Optionally clear the input field as well
    input.value = "";

}

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        gettingData();
    }
});


btn.addEventListener("click",
    function final() {
        let inputValue = input.value;
        if (inputValue === "") {
            alert("Please Write Something in input")
        } else {

            gettingData()
        }
    })
back.addEventListener("click", backAgain)

