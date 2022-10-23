import { combineReducers } from "redux";
//Reducers 
import {reduce as productReducer} from "./products/products.reducer"

export const Reducers = combineReducers({
    productReducer
});