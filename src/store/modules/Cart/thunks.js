import { removeToCart } from "./actions";
import { addToCart } from "./actions";

export function removeFromCartThunk(produto) {
    
    return (dispatch, getState) => {
        const { cart } = getState();

        const listCart = cart.filter(elem => elem.id !== produto.id)
        localStorage.setItem("listCartApple", JSON.stringify(listCart))

        dispatch(removeToCart(listCart));
    };
};

export function addToCartThunk(produto) {
    
    return (dispatch, getState) => {
        const { cart } = getState();
        const listCart = [...cart, produto];
        localStorage.setItem("listCartApple", JSON.stringify(listCart))
        dispatch(addToCart(listCart));
    };
};


