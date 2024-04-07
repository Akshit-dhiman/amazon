export const cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveLocal() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    const existingItemIndex = cart.findIndex((item) => item.productId === productId);

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity++;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
    saveLocal();
}

