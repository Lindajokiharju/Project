/* class Product{
    constructor(name, price, size, color, image, url){
        this.name = name;
        this.price = price;
        this.size = size;
        this.color = color;
        this.image = image;
        this.url = url;
        this.button = "<input type='button' class='addToList' name='add to list' data-object='" + JSON.stringify(this) + "' value='click'></input>";
    }
} */

var button = document.getElementById('addToWishlist');

var wishes;
if (localStorage.getItem('wishes') == null) { 
wishes = []
} else { 
    wishes = JSON.parse(localStorage.getItem('wishes'))
}
/* CART LIST: var cart;
if (localStorage.getItem('cart') == null) { 
cart = []
} else { 
    cart = JSON.parse(localStorage.getItem('cart'))
} */
console.log(wishes);
    button.addEventListener('click', function(e){

        // Push wish to array
        wishes.push ({
            name: "ProductID"
        });
        var listString = JSON.stringify(wishes);
        localStorage.setItem('wishes', listString);

        // Save list to localstorage, but remember to parse it to json first
        console.log(this);
    }); 
    





