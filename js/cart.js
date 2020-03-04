
/* global Cart */

'use strict';
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var newCart = [];
console.log('xxxxxxx', newCart);

function loadCart() {
    var obj = localStorage.getItem('productorders');
    if(obj) {
     newCart = JSON.parse(obj);
     console.log('kjjjj',newCart);
     
     render2();
    }
  }
  loadCart();

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  // loadCart();
  clearCart();
  showCart();
}
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}
function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}
// This will initialize the page and draw the cart on screen
renderCart();
function render2() {
  var ulE1 = document.getElementById('summary');
  for (var i =0; i<newCart.length ; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${newCart[i].Item} has ${newCart[i].Number}`;
    ulE1.appendChild(liE1);
}
}