$(document).ready(function() {
  $("button#register").click(function(){
  $(".signup").show();
  $(".intro").hide();
  $(".pic").hide();
    });
  $("button#apply").click(function(){
    $(".signup").hide();
    $(".intro").show();
    $(".pic").show();
  })

$("button#login").click(function(){
  $(".intro").hide();
  $(".homerandom").show();
  $(".pic").hide();
  $("#enter-login").hide();
  $("#leave-login").show();
});
$("button#search").click(function(){
$(".search").show();
});
$("#enter-login").click(function(){
  $(".intro").show();
});
$("#home1").click(function(){
  $(".pic").show();
  $(".homerandom").hide();
  $("#return").show();
});
$("#leave-login").click(function(){
  $(".pic").show();
  $("#leave-login").hide();
  $(".homerandom").hide();
  $("#enter-login").show();
  $("#return").hide();
});

$("button#return").click(function(){
  $(".homerandom").show();
  $(".pic").hide();
});

var ShoppingCart = (function($) {
  "use strict";

  // Cahce necesarry DOM Elements
  var productsEl = document.querySelector(".products"),
      cartEl =     document.querySelector(".shopping-cart-list"),
      productQuantityEl = document.querySelector(".product-quantity"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      totalPriceEl = document.querySelector(".total-price");

  // Fake JSON data array here should be API call
  var products = [
    {
      id: 0,
      name: "CLARKS",
      description: "ORIGINAL CLARKS,STILL IN GOOD CONDITION.",
      imageUrl: "img/orishoes.jpeg",
      price:1000,
    },
    {
      id: 1,
      name: "A TRIBAL PRINT SCARF",
      description: "A TRIBAL PRINT SCARF ,STILL IN GOOD CONDITION,AND STILL AS GOOD AS KNEW",
      imageUrl: "img/oriscarf.jpeg",
      price: 500,
    },
    {
      id: 2,
      name: " BAG AND MARVIN",
      description: "UNISEX BAG AND MARVIN FOR COLD WEATHER, ONLY AT =KSH 2200(BOTH)",
      imageUrl: "img/bag.jpeg",
      price: 2200,
    },
    {
      id: 3,
      name: "BAG",
      description: "UNISEX HIKING BAG  ONLY AT =KSH 2000 (NEGOTIABLE)",
      imageUrl: "img/bag2.jpeg",
      price: 2000,
    },
    {
      id: 4,
      name: "SHIRT",
      description: "LUMBER JACK CHECKED SHIRT AT ONLY =KSH 1000 (NEGOTIABLE)",
      imageUrl: "img/checked.jpeg",
      price: 1000,
    },
    {
      id: 5,
      name: "MALE CLARKS",
      description: "MALE CLARKS IN GOOD CONDITION ONLY AT =KSH 1500",
      imageUrl: "img/viatu.jpeg",
      price: 1500,
    }
  ],
      productsInCart = [];

  // Pretty much self explanatory function. NOTE: Here I have used template strings (ES6 Feature)
  var generateProductList = function() {
    products.forEach(function(item) {
      var productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = `<div class="product-image">
                                <img src="${item.imageUrl}" alt="${item.name}">
                             </div>
                             <div class="product-name"><span>Product:</span> ${item.name}</div>
                             <div class="product-description"><span>Description:</span> ${item.description}</div>
                             <div class="product-price"><span>Price:</span> ${item.price} KSH</div>
                             <div class="product-add-to-cart">
                               <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
                             </div>
                          </div>
`;

productsEl.appendChild(productEl);
    });
  }

  // Like one before and I have also used ES6 template strings
  var generateCartList = function() {

    cartEl.innerHTML = "";

    productsInCart.forEach(function(item) {
      var li = document.createElement("li");
      li.innerHTML = `${item.quantity} ${item.product.name} - KSH${item.product.price * item.quantity}`;
      cartEl.appendChild(li);
    });

    productQuantityEl.innerHTML = productsInCart.length;

    generateCartButtons()
  }


  // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
  var generateCartButtons = function() {
    if(productsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block"
      totalPriceEl.innerHTML = " ksh " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  }

  // Setting up listeners for click event on all products and Empty Cart button as well
  var setupListeners = function() {
    productsEl.addEventListener("click", function(event) {
      var el = event.target;
      if(el.classList.contains("add-to-cart")) {
       var elId = el.dataset.id;
       addToCart(elId);
      }
    });

    emptyCartEl.addEventListener("click", function(event) {
      if(confirm("Are you sure?")) {
        productsInCart = [];
      }
      generateCartList();
    });
  }

  // Adds new items or updates existing one in productsInCart array
  var addToCart = function(id) {
    var obj = products[id];
    if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
      productsInCart.push({product: obj, quantity: 1});
    } else {
      productsInCart.forEach(function(item) {
        if(item.product.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  }


  // This function checks if project is already in productsInCart array
  var productFound = function(productId) {
    return productsInCart.find(function(item) {
      return item.product.id === productId;
    });
  }

  var calculateTotalPrice = function() {
    return productsInCart.reduce(function(total, item) {
      return total + (item.product.price *  item.quantity);
    }, 0);
  }

  // This functon starts the whole application
  var init = function() {
    generateProductList();
    setupListeners();
  }

  // Exposes just init function to public, everything else is private
  return {
    init: init
  };

  // I have included jQuery although I haven't used it
})(jQuery);

ShoppingCart.init();

    });
