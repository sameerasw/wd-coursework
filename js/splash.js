let logo = document.getElementById("logo_splash");
let title = document.getElementById("details");

window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        logo.classList.add("logo-animation");
        setTimeout(() => {
            title.classList.add("title-animation");
            setTimeout(() => {
                window.location.href = "./home.html";
            }
            , 4000);
        }, 1000);
    }, 1000);
}
);