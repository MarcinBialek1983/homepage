{
    const welcom = () => {
        console.log("Witam wszystkich")
    };

    const toggleBackground = () => {

            const body = document.querySelector(".js-body");
            const buttonText = document.querySelector(".js-changeButtonText");

            body.classList.toggle("body-dark");

            buttonText.innerHTML = body.classList.contains("body--dark") ? "jasne" : "ciemne";
        }
        const init = () => {
            const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");

            changeBackgroundButton.addEventListener("click", toggleBackground);

            welcom();
        };
        init();
    }
        