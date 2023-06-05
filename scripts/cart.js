function addToCart() {
    let emptyMessage = document.getElementById("cart-empty");
    emptyMessage.classList.add("hide");
    let notification = document.getElementById("cart-notification");
    notification.classList.remove("hide");
    let cartContainer = document.getElementById("cart-container");
    cartContainer.classList.remove("hide");
}

function clearCart() {
    let emptyMessage = document.getElementById("cart-empty");
    emptyMessage.classList.remove("hide");
    let notification = document.getElementById("cart-notification");
    notification.classList.add("hide");
    let cartContainer = document.getElementById("cart-container");
    cartContainer.classList.add("hide");
}
