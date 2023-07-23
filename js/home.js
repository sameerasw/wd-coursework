let article_card = document.getElementsByClassName("wrapper")[0];
let links_card = document.getElementsByClassName("wrapper")[1];
let sitemap = document.getElementsByClassName("wrapper")[2];
let cursor1 = document.getElementById("cursor");
let article1 = document.getElementById("article1");
let article2 = document.getElementById("article2");
let article3 = document.getElementById("article3");
let article4 = document.getElementById("article4");
let game_card = document.getElementById("game__banner");
let movie__gallery = document.getElementById("movie__gallery");
let shop = document.getElementById("shop");
let rate = document.getElementById("rate");



function mouseover(element, cursor) {
    element.addEventListener("mouseover", function () {
        cursor1.classList.add("cursor-hover");
    }
    );
    element.addEventListener("mouseout", function () {
        cursor1.classList.remove("cursor-hover");
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
mouseover(links_card, cursor);
mouseover(sitemap, cursor);
visit(article1, "./subpages/article-what-is-imax.html");
visit(article2, "./subpages/article-special-effects-in-movies.html");
visit(article3, "./subpages/article-why-watch-movies.html");
visit(article4, "./subpages/article-review-web.html");
visit(game__banner, "./quiz.html");
visit(movie__gallery, "./gallery.html");
visit(shop, "./shop.html");
visit(rate, "./comments.html");
