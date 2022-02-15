//Items can be deleted from the cart.
function addOrRemoveItemsFromCart(action) {
    let container = '';

 if (action == "remove") {
        container = getDiv("cart");

        takeAction(container)
    };
}
