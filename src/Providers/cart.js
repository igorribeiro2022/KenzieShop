import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export function CartProvider({ children }) {

    const cartLocal = JSON.parse(localStorage.getItem("cartAppleStore")) || []
    const [cart, setCart] = useState(cartLocal);

    function addToCart(item) {
        setCart([...cart, item]);
        localStorage.setItem("cartAppleStore", JSON.stringify([...cart, item]))
    };

    function removeFromCart(item) {
        const newcart = cart.filter((prod) => prod.name !== item.name);
        setCart(newcart);
        localStorage.setItem("cartAppleStore", JSON.stringify(newcart))
        
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}
