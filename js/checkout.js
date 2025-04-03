import {cart,removeFun,incFun,deccFun ,savetolocals} from "./cart.js";

//2
let dataCart=[
    {
        id:1,
        name: 'affogato',
        price: 6000
    },
    {
        id:2,
        name:'Espresso',
        price:2500
    },
    {
        id:3,
        name: 'Double Espresso',
        price:3500
    },
    {
        id:4,
        name: 'Americano',
        price:4000
    },
    {
        id:5,
        name: 'Cappuccino',
        price:4500
    },
    {
        id:6,
        name: 'Con Panna',
        price:3000
    },
    {
        id:7,
        name: 'Hot Chocolate',
        price:4000
    },
    {
        id:8,
        name: 'Turkish Cafe',
        price:3000
    },
    {
        id:9,
        name: 'Sahleb',
        price:4500
    },
    {
        id:10,
        name: 'macchiato',
        price:3000
    },
    {
        id:11,
        name: 'Romane',
        price:2500
        
    },
    {
        id:12,
        name: 'flat white',
        price:4000
    },
    {
        id:13,
        name: 'caramel macchiato ',
        price: 4500
    },
    {
        id:14,
        name:'Milk',
        price:2000
    },
    {
        id:15,
        name: 'Mocha hot drink',
        price:5000
    },
    {
        id:16,
        name: 'Lungo',
        price:3000
    },
    {
        id:17,
        name: 'white mocha',
        price:5000
    },
    {
        id:18,
        name: 'Latte طعم',
        price:5000
    },
    {
        id:22,
        name: 'Ice Café Latte',
        price:4500
    },
    {
        id:23,
        name: 'Ice Mocha',
        price:5000
    },
    {
        id:24,
        name: 'Ice latte طعم',
        price:5000
    },
    {
        id:25,
        name: 'Icecream',
        price:4500
    },
    {
        id:26,
        name: 'Iced spanish',
        price:5000
    },
    {
        id:27,
        name: 'Ice Pistacho',
        price: 5000
    },
    {
        id:28,
        name: 'Caverna ice mocha',
        price: 5000
    },
    {
        id:29,
        name: 'ice cappuccino',
        price: 4500
    },
    {
        id:32,
        name: 'Brownie espresso shake',
        price:4000
    },
    {
        id:33,
        name: 'Butterscotch espresso shake',
        price:4000
    },
    {
        id:34,
        name: 'Caramel espresso shake',
        price:4000
    },
    {
        id:35,
        name: 'Sahleb espresso shake',
        price:5000
    },
    {
        id:36,
        name: 'Lemonade espresso shake',
        price:5000
    },
    {
        id:37,
        name:'Vanilla Frappe',
        price:4500
    },
    {
        id:38,
        name:'Caramel Frappe',
        price:4500
    },
    {
        id:39,
        name:'Dark Frappe',
        price:4500
    },
    {
        id:40,
        name:'Nutella Frappe',
        price:5000
    },
    {
        id:41,
        name:'Strawberry Frappe',
        price:5000
    },
    {
        id:42,
        name:'Espresso Frappe',
        price:4500
    },

    {
        id:48,
        name:'Strawberry Milkshake',
        price:5000
    },
    {
        id:49,
        name:'Banana Milkshake',
        price:5500
    },
    {
        id:50,
        name:'Caramel Milkshake',
        price:5500
    },
    {
        id:51,
        name:'Caverna Milkshake',
        price:5000
    },
    {
        id:52,
        name:'Nutella Milkshake',
        price:5500
    },
    {
        id:53,
        name:'Lotus Milkshake',
        price:4500
    },
    {
        id:54,
        name:'Oreo Milkshake',
        price:5000
    },

    {
        id:56,
        name:'Starwberry smoothie',
        price:5000
    },
    {
        id:57,
        name:'Mango smoothie',
        price:5000
    },
    {
        id:58,
        name:'Pineapple smoothie',
        price:5000
    },
    {
        id:59,
        name:'Blueberry smoothie',
        price:5000
    },
    {
        id:61,
        name:'Arpicot dolers smoothie',
        price:5000
    },
    {
        id:62,
        name:'Gummy Jabuticaba smoothie',
        price:5000
    },
    {
        id:63,
        name:'Raspberry cherr smoothie',
        price:5000
    },
    {
        id:64,
        name:'Tropica smoothie',
        price:5000
    },
    {
        id:66,
        name:'Strawberry Mohito',
        price:4500
    },
    {
        id:67,
        name:'Blueberry mohito',
        price:4500
    },
    {
        id:68,
        name:'Mango mohito',
        price:4500
    },
    {
        id:69,
        name:'Passion Mohito',
        price:4500
    },
    {
        id:70,
        name:'cherry mohito',
        price:4500
    },
    {
        id:71,
        name:'Grenadine mohito',
        price:4500
    },
    {
        id:72,
        name:'Blue Cocktail mojito',
        price:4500
    },
    {
        id:73,
        name:'pomogranate mohito',
        price:4500
    },
    {
        id:74,
        name:'special mohito',
        price:4000
    },
    {
        id:76,
        name:'Lemon ice tea',
        price:4500
    },
    {
        id:77,
        name:'Peach ice tea',
        price:4500
    },
    {
        id:92,
        name:'Redbull mix energy',
        price:4500
    },
    {
        id:93,
        name:'Redbull Cocktail energy',
        price:5000
    },
    {
        id:94,
        name:'Redbull energy',
        price:3000
    },
    {
        id:95,
        name:'Blue Cocktail',
        price:5000
    },
    {
        id:96,
        name:'L.T.D',
        price:5000
    },
    {
        id:97,
        name:'White Voldemore',
        price:5000
    },
    {
        id:98,
        name:'make',
        price:5000
    },
    {
        id:99,
        name:'chersake',
        price:5000
    },
    
    {
        id:137,
        name:'orange',
        price:6000
    },
    {
        id:138,
        name:'Lemon and orange',
        price:5500
    },
    {
        id:139,
        name:'Espresso Orange',
        price:6000
    },
    {
        id:140,
        name:'pomogranate',
        price:6500
    },
    {
        id:141,
        name:'strawberry',
        price:5000
    },
    {
        id:152,
        name:'Tea',
        price:2000
    },
    {
        id:153,
        name:'green tea',
        price:2500
    },
    {
        id:159,
        name:'karak tea',
        price:3000
    },
    {
        id:160,
        name:'Caverna coffe',
        price:5000
    },
    {
        id:161,
        name:'maca',
        price:7000
    },
    {
        id:162,
        name:'cinnamon dolce',
        price:4000
    },
    {
        id:163,
        name:'latte hot drink',
        price:4500
    },
    {
        id:999,
        name:'Avacado',
        price:7000
    },
    {
        id:998,
        name:'Mango fresh juice',
        price:6000
    },
    {
        id:997,
        name:'cocktail fresh juice',
        price:5000
    },
    {
        id:996,
        name:'Banana and Milk',
        price:4000
    },
    {
        id:1000,
        name:'Nutella Crepe',
        price:5500
    },
    {
        id:1001,
        name:'Kinder Crepe',
        price:6000
    },
    {
        id:1002,
        name:'Pistacho Crepe',
        price:7000
    },
    {
        id:1003,
        name:'Lotus Crepe',
        price:4500
    },
    {
        id:2000,
        name:'Nutella mini pancake',
        price:5500
    },
    {
        id:2001,
        name:'Kinder mini pancake',
        price:6000
    },
    {
        id:2002,
        name:'Pistacho mini pancake',
        price:7000
    },
    {
        id:2003,
        name:'Lotus mini pancake',
        price:4500
    },
    {
        id:3000,
        name:'Nutella Waffle',
        price:5500
    },
    {
        id:3001,
        name:'Kinder Waffle',
        price:6000
    },
    {
        id:3002,
        name:'Pistacho Waffle',
        price:7000
    },
    {
        id:3003,
        name:'Lotus Waffle',
        price:4500
    },
    {
        id:4000,
        name:'Nutella Pancake',
        price:5500
    },
    {
        id:4001,
        name:'Kinder Pancake',
        price:6000
    },
    {
        id:4002,
        name:'Pistacho Pancake',
        price:7000
    },
    {
        id:4003,
        name:'Lotus Pancake',
        price:4500
    }
    
  ];
  //
  
  let htmlsum=``; // Initialize htmlsum as an empty string
  let totp=0;
  cart.forEach((cartitem) => {
      let matching;
  
      dataCart.forEach((product) => {
          if (product.id == cartitem.productid)
              matching = product;
      });
  
      if (matching) {
          htmlsum +=
          `
              <div class="l${matching.id}" id="xsmdiv"><div class="xsmdiv1"><div class="js-khalaf"><button class="js-max" data-es-id=${matching.id}><img src="img/plusicon.png" class="xsmm3"></button><button class="js-min" ><img src="img/minusicon.png" class="xsmm3"></button></div><p class="xmm1">${cartitem.quantity}</p> <p class="xmm2">${matching.name}</p> </div> <div class="pricet">${(matching.price*cartitem.quantity).toLocaleString()} IQD</div> </div>
          `;
          totp+=matching.price*cartitem.quantity;
          if (!isNaN(totp)) { // Check if 'totp' is a valid number
            document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        } else {
            console.error('Error: Invalid total price value.');
        }
      }
  });
//end of 2

  
  document.querySelector('.checkitems').innerHTML = htmlsum;
  console.log(cart);
  console.log(htmlsum);
//3
  document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-del-it'
    if (event.target && event.target.closest('.js-del-it')) {
        let button = event.target.closest('.js-del-it');
        let but = button.dataset.esId;
        let but2 = button.dataset.priSub;
        let but3 = Number(button.dataset.priDell);

        console.log(but);
        removeFun(but); // Assuming this function removes the item from cart array or whatever your data model is.
        document.querySelector(`.l${but}`).remove(); // Remove the item from the display

        totp -= Number(but2); // Subtract the item's price from the total
        document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: ${totp.toLocaleString()} IQD</div>`;

        // Update the cart count in localStorage
        let myVariable = localStorage.getItem('countcart');
        myVariable = parseInt(myVariable) - but3;
        localStorage.setItem('countcart', myVariable);
    }
});



  //end of 3
  

  //
  // Attach event listener for 'click' on the parent element
document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-max'
    if (event.target && event.target.closest('.js-max')) {
        let elcon = event.target.closest('.js-max').dataset.esId;
        let htmsummax = '';
        totp = 0; // Reset total price each time to calculate it properly

        // Loop through cart items
        cart.forEach((cartitem) => {
            let matching;
            
            // Find the matching product from the dataCart
            dataCart.forEach((product) => {
                if (product.id == cartitem.productid) {
                    matching = product;
                }
            });

            // If product found, increment quantity and rebuild the HTML for cart item
            if (matching) {
                if (matching.id == elcon) {
                 // Increment the quantity of the clicked item
                    incFun(elcon);
                }

                htmsummax += `
                    <div class="l${matching.id}" id="xsmdiv">
                        <div class="xsmdiv1">
                            <div class="js-khalaf">
                            <button class="js-max" data-es-id=${matching.id}>
                                <img src="img/plusicon.png" class="xsmm3">
                            </button>
                            <button class="js-min">
                                <img src="img/minusicon.png" class="xsmm3">
                            </button>
                            </div>
                            <p class="xmm1">${cartitem.quantity}</p> 
                            <p class="xmm2">${matching.name}</p>
                           
                        </div> 
                        <div class="pricet">${(matching.price * cartitem.quantity).toLocaleString()} IQD</div>
                    </div>
                `;

                // Update total price
                totp += matching.price * cartitem.quantity;
            }
        });

        // Update the cart display with the new content
        document.querySelector('.checkitems').innerHTML = htmsummax;

        // Update the total price display
        if (!isNaN(totp)) {
            document.querySelector('.hiawi').innerHTML = `<div class"hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        } else {
            console.error('Error: Invalid total price value.');
        }
    }
});

  



let isClickedOnce = false;
// Attach event listener for 'click' on the parent element
document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-min'
    if (event.target && event.target.closest('.js-min')) {
        let elcon2 = event.target.closest('.js-min').dataset.esId;
        let htmsummin = ''; // Renamed variable
        totp = 0; // Reset total price each time to calculate it properly

        // Loop through cart items
        cart.forEach((cartitem) => {
            let matching;
            
            // Find the matching product from the dataCart
            dataCart.forEach((product) => {
                if (product.id == cartitem.productid) {
                    matching = product;
                }
            });

            // If product found, decrement quantity and rebuild the HTML for cart item
            if (matching) {
                if (matching.id == elcon2) {
                    if (cartitem.quantity == 1) {
                        removeFun(elcon2);
                        window.location.reload(true);
                        document.querySelector(`.l${elcon2}`).remove(); // Remove the item from the DOM
                        removeFun(elcon2);
                        if(cart.length === 0) {
                            const button123 = document.querySelector('.butex2');
                            button123.click();
                        }
                        document.querySelector(`.l${elcon2}`).remove();
                        removeFun(elcon2);
                        document.querySelector(`.l${elcon2}`).remove();
                        
                    } else if (cartitem.quantity > 1) {
                        // Decrement the quantity if greater than 1
                        deccFun(elcon2); // Decrement the quantity
                    }
                }
                totp += matching.price * cartitem.quantity;

                htmsummin += `
                    <div class="l${matching.id}" id="xsmdiv">
                        <div class="xsmdiv1">
                            <div class="js-khalaf">
                                <button class="js-max" data-es-id=${matching.id}>
                                    <img src="img/plusicon.png" class="xsmm3">
                                </button>
                                <button class="js-min" data-es-id=${matching.id}>
                                    <img src="img/minusicon.png" class="xsmm3">
                                </button>
                            </div>
                            <p class="xmm1">${cartitem.quantity}</p> 
                            <p class="xmm2">${matching.name}</p>
                        </div> 
                        <div class="pricet">${(matching.price * cartitem.quantity).toLocaleString()} IQD</div>
                    </div>
                `;

                // Update total price
                
                if (!isNaN(totp)) {
                    document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
                }
            }
        });

        // Update the cart display with the new content
        document.querySelector('.checkitems').innerHTML = htmsummin;

        // Update the total price display
        if (!isNaN(totp)) {
            document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        }
    }
});









  document.querySelector('.butex2').addEventListener('click',()=>{
    document.querySelector('.checkitems').innerHTML='';
    cart.length=0;
    document.querySelector('.hiawi').innerHTML='';
    savetolocals();
    let c123=0;
    localStorage.setItem("countcart",c123.toString());
  });

  
  
//

