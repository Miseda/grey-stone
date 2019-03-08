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
      name: "Oxford",

      imageUrl: "shoes/1.jpg",
      price: 700,
    },
    {
      id: 1,
      name: "Derby",

      imageUrl: "shoes/2.jpg",
      price: 300,
    },
    {
      id: 2,
      name: "Brogue",

      imageUrl: "shoes/3.jpg",
      price: 1400,
    },
    {
      id: 3,
      name: "Monk Strap",

      imageUrl:"shoes/4.jpg",
      price: 900,
    },
    {
      id: 4,
      name: "Loafer",

      imageUrl: "shoes/shoe1.jpg",
      price: 599,
    },
    {
      id: 6,
      name: "Chukka",

      imageUrl: "shoes/shoe2.jpg",
      price: 499,
    },
    {
      id: 7,
      name: "Chelsea boot",

      imageUrl: "shoes/shoe3.jpg",
      price: 499,
    },
    {
      id: 8,
      name: "plain toe",

      imageUrl: "shoes/shoe4.jpg",
      price: 499,
    },
    {
      id: 9,
      name: "captoe",

      imageUrl: "shoes/shoe5.jpg",
      price: 499,
    } ,
    {
          id: 10,
          name: "wingtip",
          description: ".",
          imageUrl: "shoes/shoe6.jpg",
          price: 400,
        },
        {
          id: 11,
          name: "semi blogue",

          imageUrl: "shoes/shoe7.jpg",
          price: 500,
        },
        {
          id: 12,
          name: "full brogue",

          imageUrl: "shoes/shoe8.jpg",
          price: 400,
        },
        {
          id: 13,
          name: "quarter brogue",

          imageUrl: "..shoes/shoe9.jpg",
          price: 400,
        },
        {
          id: 14,
          name: "longwing brogues",

          imageUrl: "shoes/shoe10.jpg",
          price: 450,
        },
        {
          id: 15,
          name: "whole cut",

          imageUrl: "shoes/shoe11.jpg",
          price: 400,
        },
        {
          id: 16,
          name: "round toe",

          imageUrl: "shoes/shoe12.jpg",
          price:600,
        },
        {
          id: 17,
          name: "chisel toe",

          imageUrl: "shoes/shoe13.jpg",
          price: 200,
        },
        {
          id: 18,
          name: "tassels",

          imageUrl: "shoes/shoe14.jpg",
          price: 300,
        }
        ,
        {
          id: 19,
          name: "denims",

          imageUrl: "denims/d.jpg",
          price: 300,
        }
        ,
        {
          id: 20,
          name: "denims",

          imageUrl: "denims/e.jpg",
          price: 300,
        }
        ,
        {
          id: 21,
          name: "denims",

          imageUrl: "denims/i.jpg",
          price: 300,
        }
        ,
        {
          id: 22,
          name: "denims",

          imageUrl: "denims/m.jpg",
          price: 300,
        }
        ,
        {
          id: 23,
          name: "denims",

          imageUrl: "denims/n.jpg",
          price: 300,
        }
        ,
        {
          id: 24,
          name: "denims",

          imageUrl: "denims/s.jpg",
          price: 300,
        }
        ,
        {
          id: 25,
          name: "t-shirt",

          imageUrl: "tshirt/1.jpg",
          price: 300,
        }
        ,
        {
          id: 26,
          name: "t-shirt",

          imageUrl: "tshirt/2.jpg",
          price: 300,
        }
        ,
        {
          id: 27,
          name: "t-shirt",

          imageUrl: "tshirt/3.jpg",
          price: 300,
        }
        ,
        {
          id: 28,
          name: "t-shirt",

          imageUrl: "tshirt/4.jpg",
          price: 300,
        }
        ,
        {
          id: 29,
          name: "t-shirt",

          imageUrl: "tshirt/5.jpg",
          price: 300,
        }
        ,
        {
          id: 30,
          name: "t-shirt",

          imageUrl: "tshirt/6.jpg",
          price: 300,
        }
        ,
        {
          id: 31,
          name: "t-shirt",

          imageUrl: "tshirt/7.jpg",
          price: 300,
        }
        ,
        {
          id: 32,
          name: "t-shirt",

          imageUrl: "tshirt/8.jpg",
          price: 300,
        }
        ,
        {
          id: 33,
          name: "t-shirt",

          imageUrl: "tshirt/9.jpg",
          price: 300,
        }
        ,
        {
          id: 34,
          name: "t-shirt",

          imageUrl: "tshirt/10.jpg",
          price: 300,
        }
        ,
        {
          id: 35,
          name: "t-shirt",

          imageUrl: "tshirt/11.jpg",
          price: 300,
        }
        ,
        {
          id: 36,
          name: "t-shirt",

          imageUrl: "tshirt/12.jpg",
          price: 300,
        }
        ,
        {
          id: 37,
          name: "t-shirt",

          imageUrl: "tshirt/13.jpg",
          price: 300,
        }
        ,
        {
          id: 38,
          name: "t-shirt",

          imageUrl: "tshirt/14.jpg",
          price: 300,
        }
        ,
        {
          id: 39,
          name: "t-shirt",

          imageUrl: "tshirt/15.jpg",
          price: 300,
        }
        ,
        {
          id: 40,
          name: "t-shirt",

          imageUrl: "tshirt/16.jpg",
          price: 300,
        }
        ,
        {
          id: 41,
          name: "t-shirt",

          imageUrl: "tshirt/17.jpg",
          price: 300,
        }
        ,
        {
          id: 42,
          name: "t-shirt",

          imageUrl: "tshirt/18.jpg",
          price: 300,
        }
        ,
        {
          id: 43,
          name: "t-shirt",

          imageUrl: "tshirt/19.jpg",
          price: 300,
        }
        ,
        {
          id: 44,
          name: "t-shirt",

          imageUrl: "tshirt/20.jpg",
          price: 300,
        }
        ,
        {
          id: 45,
          name: "t-shirt",

          imageUrl: "tshirt/21.jpg",
          price: 300,
        }
        ,
        {
          id: 46,
          name: "t-shirt",

          imageUrl: "tshirt/22.jpg",
          price: 300,
        }
        ,
        {
          id: 47,
          name: "t-shirt",

          imageUrl: "tshirt/23.jpg",
          price: 300,
        }
        ,
        {
          id: 48,
          name: "t-shirt",

          imageUrl: "tshirt/24.jpg",
          price: 300,
        }
        ,
        {
          id: 49,
          name: "t-shirt",

          imageUrl: "tshirt/25.jpg",
          price: 300,
        }
        ,
        {
          id: 50,
          name: "t-shirt",

          imageUrl: "tshirt/26.jpg",
          price: 300,
        }
        ,
        {
          id: 51,
          name: "t-shirt",

          imageUrl: "tshirt/27.jpg",
          price: 300,
        }
        ,
        {
          id: 52,
          name: "t-shirt",

          imageUrl: "tshirt/28.jpg",
          price: 300,
        }
        ,
        {
          id: 53,
          name: "t-shirt",

          imageUrl: "tshirt/29.jpg",
          price: 300,
        }
        ,
        {
          id: 54,
          name: "t-shirt",

          imageUrl: "tshirt/30.jpg",
          price: 300,
        }
        ,
        {
          id: 55,
          name: "t-shirt",

          imageUrl: "tshirt/31.jpg",
          price: 300,
        }
        ,
        {
          id: 56,
          name: "t-shirt",

          imageUrl: "tshirt/32.jpg",
          price: 300,
        }
        ,
        {
          id: 57,
          name: "t-shirt",

          imageUrl: "tshirt/33.jpg",
          price: 300,
        }
        ,
        {
          id: 58,
          name: "t-shirt",

          imageUrl: "tshirt/34.jpg",
          price: 300,
        }
        ,
        {
          id: 59,
          name: "t-shirt",

          imageUrl: "tshirt/35.jpg",
          price: 300,
        }
        ,
        {
          id: 60,
          name: "t-shirt",

          imageUrl: "tshirt/36.jpg",
          price: 300,
        }
        ,
        {
          id: 61,
          name: "t-shirt",

          imageUrl: "tshirt/37.jpg",
          price: 300,
        }
        ,
        {
          id: 40,
          name: "t-shirt",

          imageUrl: "tshirt/38.jpg",
          price: 300,
        }
        ,
        {
          id: 62,
          name: "t-shirt",

          imageUrl: "tshirt/39.jpg",
          price: 300,
        }
        ,
        {
          id: 63,
          name: "t-shirt",

          imageUrl: "tshirt/40.jpg",
          price: 300,
        }
        ,
        {
          id: 64,
          name: "t-shirt",

          imageUrl: "tshirt/41.jpg",
          price: 300,
        }
        ,
        {
          id: 65,
          name: "t-shirt",

          imageUrl: "tshirt/42.jpg",
          price: 300,
        },
        {
          id: 66,
          name: "t-shirt",

          imageUrl: "tshirt/43.jpg",
          price: 300,
        },
        {
          id: 67,
          name: "t-shirt",

          imageUrl: "tshirt/44.jpg",
          price: 300,
        },
        {
          id: 68,
          name: "t-shirt",

          imageUrl: "tshirt/45.jpg",
          price: 300,
        },
        {
          id: 69,
          name: "t-shirt",

          imageUrl: "tshirt/46.jpg",
          price: 300,
        },
        {
          id: 70,
          name: "t-shirt",

          imageUrl: "tshirt/47.jpg",
          price: 300,
        },
        {
          id: 71,
          name: "t-shirt",

          imageUrl: "tshirt/48.jpg",
          price: 300,
        },
        {
          id: 72,
          name: "t-shirt",

          imageUrl: "tshirt/49.jpg",
          price: 300,
        },
        {
          id: 73,
          name: "t-shirt",

          imageUrl: "tshirt/50.jpg",
          price: 300,
        },
        {
          id: 74,
          name: "t-shirt",

          imageUrl: "tshirt/51.jpg",
          price: 300,
        },
        {
          id: 75,
          name: "t-shirt",

          imageUrl: "tshirt/52.jpg",
          price: 300,
        },
        {
          id: 76,
          name: "t-shirt",

          imageUrl: "tshirt/53.jpg",
          price: 300,
        },
        {
          id: 77,
          name: "t-shirt",

          imageUrl: "tshirt/54.jpg",
          price: 300,
        },
        {
          id: 78,
          name: "t-shirt",

          imageUrl: "tshirt/55.jpg",
          price: 300,
        },
        {
          id: 79,
          name: "t-shirt",

          imageUrl: "tshirt/56.jpg",
          price: 300,
        },
        {
          id: 80,
          name: "t-shirt",

          imageUrl: "tshirt/57.jpg",
          price: 300,
        },
        {
          id: 81,
          name: "t-shirt",

          imageUrl: "tshirt/58.jpg",
          price: 300,
        },
        {
          id: 82,
          name: "t-shirt",

          imageUrl: "tshirt/59.jpg",
          price: 300,
        },
        {
          id: 83,
          name: "t-shirt",

          imageUrl: "tshirt/60.jpg",
          price: 300,
        },
        {
          id: 84,
          name: "t-shirt",

          imageUrl: "tshirt/61.jpg",
          price: 300,
        },
        {
          id: 85,
          name: "t-shirt",

          imageUrl: "tshirt/62.jpg",
          price: 300,
        },
        {
          id: 86,
          name: "t-shirt",

          imageUrl: "tshirt/63.jpg",
          price: 300,
        },
        {
          id: 87,
          name: "t-shirt",

          imageUrl: "tshirt/64.jpg",
          price: 300,
        },
        {
          id: 88,
          name: "t-shirt",

          imageUrl: "tshirt/65.jpg",
          price: 300,
        },
        {
          id: 89,
          name: "t-shirt",

          imageUrl: "tshirt/66.jpg",
          price: 300,
        },
        {
          id: 90,
          name: "t-shirt",

          imageUrl: "tshirt/67.jpg",
          price: 300,
        }

  ],
      productsInCart = [];

  // Pretty much self explanatory function. NOTE: Here I have used template strings (ES6 Feature)
  var generateProductList = function() {
    products.forEach(function(item) {
      var productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = `<div class="product-image card booking-card">

                                <img src="${item.imageUrl}" class="card-img-top " alt="${item.name}">
                                <a href="#!">
                                   <div class="mask rgba-white-slight"></div>
                                </a>

                             <div class="card-body">
                             <ul class="list-unstyled list-inline my-2">
                               <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                               <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                               <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                               <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                               <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
                             </ul>
                             <ul>
                             <li class="list-inline-item mr-0"><div class="chili-pepper-text mb-0 product-price btn-md chip mr-0"><span ></span> ksh${item.price}</div></li>
                             <li class="list-inline-item mr-0"><div class="product-add-to-cart">
                              <a href="#0" class="button add-to-cart btn btn-primary btn-md chip mr-0"" data-id=${item.id}>Add to Cart</a>
                             </div></li>
                             </ul>
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
      li.innerHTML = `${item.quantity} ${item.product.name} - ksh${item.product.price * item.quantity}`;
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
      totalPriceEl.innerHTML = "ksh " + calculateTotalPrice();
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
