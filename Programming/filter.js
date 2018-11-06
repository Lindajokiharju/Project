class Product{
    constructor(name, price, size, color, image, url){
        this.name = name;
        this.price = price;
        this.size = size;
        this.color = color;
        this.image = image;
        this.url = url;
    }
}

function myFunction() {
    // Declare variables
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

function myFilter(){
    //declare variables
    var input = document.getElementById()
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Create an empty list for products
var products = [];

// Add four new products using our class in the top of the file
products.push(new Product("Biker Boots", 800, ["37", "38", "39"], "Black", "images/biker.jpg", "bikerboots.html"));
products.push(new Product("Sporty Sneaks", 600, ["37", "38", "39"], "White", "images/sneakers.png", "sportysneaks.html"));
products.push(new Product("Basic Ballerinas", 700, ["37", "38", "39"], "Nude", "images/ballerinas.png", "basicballerinas.html"));
products.push(new Product("Pointed heels", 700, ["37", "38", "40"], "Multicolor", "images/heels.png", "pointedheels.html"));

// Get the content holder for products
var contentHolder = document.getElementById("products");

// Get dropdown value
var colorDropdown = document.getElementById("colorInput");

var colorInput = "";

colorDropdown.addEventListener("change", function(){
    colorInput = this.value;
    renderProducts();
});


renderProducts();

function renderProducts(){
    // Bind a variable to the empty html
    var html = "";

    // Loop through the products one by one
    for(i=0; i < products.length; i++){

        // An example of a filter --> filtering by color
        if(products[i].color == colorInput || colorInput == ""){
            html += "<div class='product'><a href='" + products[i].url + "'><img src='" + products[i].image + "' /></a><div class='name'><p>" + products[i].name + "</p></div></div><div class='price'><p>" + products[i].price + "</p></div></div>";
        }
           
        if(products[i].size == sizeInput || sizeInput == ""){
            html += "<div class='product'><a href='" + products[i].url + "'><img src='" + products[i].image + "' /></a><div class='name'><p>" + products[i].name + "</p></div></div><div class='price'><p>" + products[i].price + "</p></div></div>";
        }

        //Another filter for filtering by price
        if(products[i].price == priceInput || priceInput == "") {
            html += "<div class='product'><a href='" + products[i].url + "'><img scr='" + products[i].image + "' /></a><div class='price'><p>" + products[i].name + "</p><p>" + products[i].price + "</p></div></div>";
        }
    }
    contentHolder.innerHTML = html;
}


