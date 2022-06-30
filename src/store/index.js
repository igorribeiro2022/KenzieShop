import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./modules/Cart/reducer";
import productsReducer from "./modules/Products/reducer";

const reducers = combineReducers({ product: productsReducer, cart: cartReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
