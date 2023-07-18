let article_card = document.getElementsByClassName("wrapper")[0];
let game_card = document.getElementsByClassName("wrapper")[1];
let cursor = document.getElementById("cursor");
let article1 = document.getElementById("article1");
let article2 = document.getElementById("article2");
let article3 = document.getElementById("article3");
let article4 = document.getElementById("article4");



function mouseover(element, cursor) {
    element.addEventListener("mouseover", function () {
        cursor.classList.add("cursor-hover");
    }
    );
    element.addEventListener("mouseout", function () {
        cursor.classList.remove("cursor-hover");
    }
    );
}

function visit(element,link) {
    element.addEventListener("click", function () {
        window.location.href = link;
    }
    );
}

mouseover(article_card, cursor);
mouseover(game_card, cursor);
visit(article1, "./subpages/article-what-is-imax.html");
visit(article2, "./subpages/article-top-movies.html");
visit(article3, "./subpages/article-why-watch-movies.html");
visit(article4, "./subpages/article-what-is-3d.html");
visit(game_card, "./quiz.html");
