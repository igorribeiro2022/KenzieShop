
import { REMOVE_CART } from "./actionTypes";
import { ADD_CART } from "./actionTypes";

export function removeToCart(listProduct) {
    return ({
        type: REMOVE_CART,
        listProduct,
    })
};

export function addToCart(listProduct) {
    return ({
        type: ADD_CART,
        listProduct,
    })
};
