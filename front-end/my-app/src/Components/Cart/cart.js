/*This will implement the cart function for the website. I have not coded in
javascript so this will be interesting. Looking to Google for help.
Source: https://www.section.io/engineering-education/javascript-shopping-cart-
using-arrays-and-objects/,  */

//Will need to import functions
import addToCart;
import deleteFromCart;
import sumItems;
import cartOperability;
import displayShoppingCart;

/*Cart will pull from a source?*/
let cart = [];

//Calls the function below
addOrRemoveItemsFromCart('add');
addOrRemoveItemsFromCart('remove');


/*The following three functions are going to be used to create the shopping
list and shopping cart. Don't know if seperate files should be made for them
or not. */

/*To append a new node to parent node.*/
function appendNode(parent, element) {
    parent.appendChild(element);
};

/*Returns div element with the id of a container.*/
function getDiv(container) {
    return document.getElementById(container);
};

/*Creates a new node and returns it. */
function createNode(node) {
    let element = document.createElement(node);
    return element;
};
