let form = document.getElementById("form");
let popup = document.getElementById("popup");
let close = document.getElementById("close");

//display popup on form submission
form.addEventListener("submit", function(e){
    e.preventDefault();
    popup.classList.add("open-popup-field");
}
);

//redirect to home page on close
close.addEventListener("click", function(){
    popup.classList.remove("open-popup-field");
}
);