
export  const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADDING_TO_CART":
            return { ...state, cart: [ ...state.cart, { ...action.payload, quanity: 1}]};
        case "REMOVING_FROM_CART":
            return { ...state, 
            cart: state.cart.filter((c) => c.id !== action.payload.id),};
        case "CHANGE_QTY_ITEM":
            return { ...state, 
            cart: state.cart.filter((c) => c.id === action.payload.id ? c.quanity=action.payload.quanity : c.quanity),};
        default:
            return state;
    }
  }

  export const filterReducer = (state,action) =>{
    switch (action.type) {
        case "FILTER_BY_CAMISETA":
            return { ...state, camisetas: !state.camisetas};
        case "CLEAR_FILTERS":
            return {
                camisetas: false,
            }
        default:
            return state;
    }
  }
