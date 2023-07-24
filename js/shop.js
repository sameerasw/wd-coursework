// shopping cart

// https://www.digitalocean.com/community/tutorials/understanding-map-and-set-objects-in-javascript
const products = [
    {
        // index 0
        image: "resources/img/shop/movie-1.png",
        title: "Sonic: The Hedgehog 2",
        price: 2000,
    },
    {
        // index 1
        image: "resources/img/shop/movie-2.png",
        title: "Morbius",
        price: 1000,
    },
    {
        // index 2
        image: "resources/img/shop/movie-3.png",
        title: "Adam Project",
        price: 900,
    },
    {
        // index 3
        image: "resources/img/shop/movie-4.png",
        title: "Free Guy",
        price: 2500,
    },
    {
        // index 4
        image: "resources/img/shop/movie-5.png",
        title: "Batman",
        price: 2000,
    },
    {
        // index 5
        image: "resources/img/shop/movie-6.png",
        title: "Uncharted",
        price: 2000,
    },
    {
        // index 6
        image: "resources/img/shop/movie-7.png",
        title: "Death on the nile",
        price: 900,
    },
    {
        // index 7
        image: "resources/img/shop/movie-8.png",
        title: "The Kingsman",
        price: 2500,
    },
    {
        // index 8
        image: "resources/img/shop/movie-9.png",
        title: "The Northman",
        price: 3000,
    },
    {
        // index 9
        image: "resources/img/shop/movie-10.png",
        title: "Memory",
        price: 2500,
    },
    {
        // index 10,
        image: "resources/img/shop/movie-11.png",
        title: "Multiverse of Madness",
        price: 1000,
    },
]

const category = [...new Set(products.map((item) =>
    {return item}))]
    
    let index = 0;
document.getElementById("main").innerHTML = category.map((item) =>
{
    var {image,title,price} = item;
    return(
        `<div class = 'box'>
            <img src=${image} alt="Movie">
            <h3>${title}</h3>
            <h4>LKR: ${price}</h4>
            <div class="cart">` +
                    "<i class='bx bx-cart' title='Buy Now' onclick='addtocart("+(index++)+")'> </i>" +
            `</div>
        </div>` 
    );
}).join('')



var cart = [];

function addtocart(cartIcon){
    cart.push({...category[cartIcon]});
    displaycart();
    localStorage.setItem("cart", JSON.stringify(cart));
}

function delElement(cartIcon){
    cart.splice(cartIcon,1);
    displaycart();
}

function displaycart(cartIcon){

    let j = 0; total = 0;

    document.getElementById("count").innerHTML = cart.length;
    document.getElementById("total").innerHTML = "LKR: " + 0 +".00";

    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML = "Your Cart is empty";
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) =>
        {
            var {image, title, price} = items;

            total = total+price;
            document.getElementById("total").innerHTML = "LKR: " + total + " .00";

            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size: 13px;'>${title}</p>
                <p style='font-size: 13px;'>LKR: ${price}.00</p>` +
                "<i class='bx bx-trash' style='color: gold;' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}

function checkout(){
    const totalPrice = document.getElementById("total").innerHTML;

    let popup = document.getElementById("popup");
    let close = document.getElementById("close");

    totalPrice;

    if(totalPrice == "LKR: 0.00"){
        popup.classList.add("open-popup-field");
        close.addEventListener("click", function(){
            popup.classList.remove("open-popup-field");
        }
        );

    }
    else {
        // go to checkout page;
        window.open("./subpages/check_out.html", "_blank");
        //clear cart
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        //save the total to local storage
        localStorage.setItem("total", JSON.stringify(totalPrice).split('"')[1]);
        location.reload();
    }
}

let history = localStorage.getItem("cart");

if(history){
    cart = JSON.parse(history);
    displaycart();
}