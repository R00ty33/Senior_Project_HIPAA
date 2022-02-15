// Displays the shopping list
function displayItems(items, container) {
    let items_container = getDiv(container);
    items_container.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        let item_node = createNode("li");
        item_node.setAttribute("id", item.id);

        if (item.count > 0) {
            item_node.innerHTML = `${item.name}
            <span id="badge">${item.count}</span>`;
            appendNode(items_container, item_node);
        }
    }
}
