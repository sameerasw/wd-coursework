let article1 = document.getElementsByClassName("wrapper")[0];

article1.addEventListener("click", function () {
    window.location.href = "./subpages/article-what-is-imax.html";
}
);

let cursor = document.getElementById("cursor");

article1.addEventListener("mouseover", function () {
    cursor.classList.add("cursor-hover");
}
);

article1.addEventListener("mouseout", function () {
    cursor.classList.remove("cursor-hover");
}
);