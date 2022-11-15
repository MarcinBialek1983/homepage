let lenghtElement = document.querySelector(".js-lenght");
let rollElement = document.querySelector(".js-roll");
let formElement = document.querySelector(".js-form");
let redElement = document.querySelector(".js-red");
let greenElement = document.querySelector(".js-green");
let blueElement = document.querySelector(".js-blue");
let greyElement = document.querySelector(".js-grey");
let rollPayElement = document.querySelector(".js-rollPay");
let buttonElement = document.querySelector(".js-button");
let buttonSendElement = document.querySelector(".js-buttonSend");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let lenght = lenghtElement.value;
    let roll = lenght / 66;
    rollElement.innerText = Math.ceil(roll);

})

formElement.addEventListener("input", (event) => {
    event.preventDefault();

    let red = redElement.value;
    let green = greenElement.value;
    let blue = blueElement.value;
    let grey = greyElement.value;



    let rollPay = green * 20 + red * 20 + blue * 25 + grey * 23;
    rollPayElement.innerText = (rollPay);

})

buttonElement.addEventListener("click", () => {
    rollElement.innerText = (0);
    rollPayElement.innerText = (0);
})

buttonSendElement.addEventListener("click", () => {
    rollPayElement.submit;
})