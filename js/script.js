{
    const welcome = () => {
        console.log("Witam Wsyztskich Bardzo serdecznie!");
    }
    welcome();

    const button = document.querySelector(".button");
    const themeName = document.querySelector(".themeName");
    const body = document.querySelector(".body");

    button.addEventListener("click", () => {
      body.classList.toggle("body--dark");

        if (body.classList.contains("body--dark")) {

            themeName.innerText = "jasne";
        } else {
            themeName.innerText = "ciemne";
        }
    });

}
