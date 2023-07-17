let theme_selector = document.getElementById("theme-selector"); //get the selector element from html to detect theme changes
let theme = localStorage.getItem("theme");


// Path: js\script.js
theme_selector.addEventListener("change", function () {
    let theme = theme_selector.value;
    if (theme == "cyan") {
        localStorage.setItem("theme","cyan");
    } else if (theme == "crimson") {
        localStorage.setItem("theme","crimson");
    } else if (theme == "butter") {
        localStorage.setItem("theme","butter");
    }
    change_theme(theme);
});

change_theme = (theme) => {
    if (theme == "cyan") {
        document.getElementById("theme").setAttribute("href", "css/theme-cyan.css");
    } else if (theme == "crimson") {
        document.getElementById("theme").setAttribute("href", "css/theme-crimson.css");
    } else if (theme == "butter") {
        document.getElementById("theme").setAttribute("href", "css/theme-butter.css");
    }
    theme_selector.value = theme;
}

change_theme(theme); //change theme on page load