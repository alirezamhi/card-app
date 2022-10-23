import { ADD_VALUES ,ADD_PRODUCT, EDIT_PRODUCT } from "./products.constant";

export function change(name,value) {
    return {
        type:ADD_VALUES,
        payload:{
            name,value
        }
    }
}
export function pushproduct() {
    return{
        type:ADD_PRODUCT
    }
}
export function editproduct(value) {
    return {
        type:EDIT_PRODUCT,
        payload:{
            id : value
        }
    }
}