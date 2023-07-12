let theme_selector = document.getElementById("theme-selector"); //get the selector element from html to detect theme changes

// Path: js\script.js
theme_selector.addEventListener("change", function () {
    let theme = theme_selector.value;
    if (theme == "cyan") {
        document.getElementById("theme").setAttribute("href", "css/theme-cyan.css");
    } else if (theme == "crimson") {
        document.getElementById("theme").setAttribute("href", "css/theme-crimson.css");
    } else if (theme == "butter") {
        document.getElementById("theme").setAttribute("href", "css/theme-butter.css");
    }
});