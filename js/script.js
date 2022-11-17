console.log("Witam Wsyztskich Bardzi serdecznie!");
let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    if (body.classList.contains("body--dark")) {
        themeName.innerText = "jasne";
    } else {
        themeName.innerText = "ciemne";
    }
});


