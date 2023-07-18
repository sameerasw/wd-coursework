let form = document.getElementsByClassName("form__bg")[0];

let cursor = document.getElementById("cursor");

form.addEventListener("mouseover", function () {
    cursor.classList.add("cursor-hover");
}
);

form.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor-hover");
}
);
