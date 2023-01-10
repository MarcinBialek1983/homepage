{
    const welcome = () => {
        console.log("Witam Wsyztskich Bardzo serdecznie!");
    };

    const toggleBackground = () => {
        const changeButtonText = document.querySelector(".js-changeButtonText");
        const body = document.querySelector(".body");

        body.classList.toggle("body--dark");

        changeButtonText.innerText = body.classList.contains("body--dark") ? "jasne" : "ciemne";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}



