const welcome = () => {
    console.log("Witam wszystkich serdecznie");
}


const lenghtElement = document.querySelector(".js-lenght");
const rollElement = document.querySelector(".js-roll");
const formElement = document.querySelector(".js-form");
const redElement = document.querySelector(".js-red");
const greenElement = document.querySelector(".js-green");
const blueElement = document.querySelector(".js-blue");
const greyElement = document.querySelector(".js-grey");
const rollPayElement = document.querySelector(".js-rollPay");
const buttonElement = document.querySelector(".js-button");
const buttonSendElement = document.querySelector(".js-buttonSend");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const lenght = lenghtElement.value;
    const roll = lenght / 66;
    rollElement.innerText = Math.ceil(roll);

})

formElement.addEventListener("input", (event) => {
    event.preventDefault();

    const red = redElement.value;
    const green = greenElement.value;
    const blue = blueElement.value;
    const grey = greyElement.value;



    const rollPay = green * 20 + red * 20 + blue * 25 + grey * 23;
    rollPayElement.innerText = (rollPay);

})

buttonElement.addEventListener("click", () => {
    rollElement.innerText = (0);
    rollPayElement.innerText = (0);
})

buttonSendElement.addEventListener("click", () => {
    rollPayElement.submit;
})