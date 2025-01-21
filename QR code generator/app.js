// let input = document.querySelector("#url-text");
// let Image = document.querySelector("#qr-img");

// function generateCode() {
//     let inputValue = input.value;
//     if (inputValue) {
//         Image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputValue;

//         downloadLink.href = Image.src;
//     } else {
//         alert("Please enter a URL.");
//     }
// }

let input = document.querySelector("#url-text");
let image = document.querySelector("#qr-img");
let downloadLink = document.querySelector("#download-link");
let downloadBtn = document.querySelector("#download-btn");

function generateCode() {
    let inputValue = input.value;
    if (inputValue) {
        // Set the image source for the QR code
        let qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inputValue);
        image.src = qrCodeUrl;

        // Set the download link's href to the QR code URL
        downloadLink.href = qrCodeUrl;

        // Enable the download button by attaching the href to it
        downloadBtn.addEventListener("click", function () {
            // Trigger the download of the QR code image
            downloadLink.click();
        });
    } else {
        alert("Please enter a URL.");
    }
}
