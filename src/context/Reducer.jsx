
export  const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADDING_TO_CART":
            return { ...state, cart: [ ...state.cart, { ...action.payload, quanity: 1}]};
        case "REMOVING_FROM_CART":
            return { ...state, 
            cart: state.cart.filter((c) => c.id !== action.payload.id),};
        default:
            return state;
    }
  }
