import { ADD_VALUES, ADD_PRODUCT, EDIT_PRODUCT } from "./products.constant";
import { initial } from "./products.state";

export function reduce(state = initial, action) {
  switch (action.type) {
    case ADD_VALUES:
      let newState = {
        ...state,
        values: {
          ...state.values,
          [action.payload.name]: action.payload.value,
        },
      };
      return {
        ...newState,
        values: {
          ...newState.values,
          finalprice:(newState.values.price-(newState.values.price*newState.values.discount)/100)*newState.values.count
        },
      };
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, { ...state.values , id :state.product.length }],
        values: {},
      };
    case EDIT_PRODUCT:
      return{
        ...state,
        product:state.product
      }  

    default:
      return state;
  }
}
