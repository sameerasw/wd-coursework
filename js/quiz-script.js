let startButton = document.querySelector(".start-btn");
let popupGuide = document.querySelector(".guide");
let exitButton = document.querySelector(".exit-btn");

startButton.onclick = () => {
    popupGuide.classList.add("active");
};

exitButton.onclick = () => {
    popupGuide.classList.remove("active");
}