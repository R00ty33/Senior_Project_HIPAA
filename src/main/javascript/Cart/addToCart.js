//Items can be added from the cart.
function addOrRemoveItemsFromCart(action) {
    let container = '';

    if (action == "add") {
        container = getDiv("items");

        takeAction(container)
    }
}
