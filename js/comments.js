let form__bg = document.getElementsByClassName("form__bg")[0];
let form = document.getElementById("form");
let cursor = document.getElementById("cursor");

form__bg.addEventListener("mouseover", function () {
    cursor.classList.add("cursor-hover");
}
);

form__bg.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor-hover");
}
);

//display thank you on form submission
form.addEventListener("submit", function () {
    document.getElementById("form").style.display = "none";
    //display a alert saying thank you
    alert("Thank you for your feedback!");
    document.querySelector("h1").innerHTML = "Thank you for your feedback!";
}
);