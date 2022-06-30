import { REMOVE_CART } from "./actionTypes";
import { ADD_CART } from "../Cart/actionTypes";



const listCart = JSON.parse(localStorage.getItem("listCartApple")) || []
function cartReducer(state = listCart, action) {
    switch (action.type) {
        case REMOVE_CART:
            return action.listProduct;

        case ADD_CART:
            return action.listProduct;

        default:
            return state;
    }
};

export default cartReducer;




