import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem:
    typeof window !== "undefined" && localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  cartTotal: 0,
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    addCartWithQuantity: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += action.payload.cartQuantity;
      } else {
        const tempProduct = { ...action.payload };
        state.cartItem.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    removeItem: (state, action) => {
      const updateCart = state.cartItem.filter(
        (item) => item._id !== action.payload._id
      );

      state.cartItem = updateCart;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (state) => state._id === action.payload._id
      );

      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const updateCart = state.cartItem.filter(
          (item) => item._id !== action.payload._id
        );

        state.cartItem = updateCart;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    getTotal: (state, action) => {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotal = total;
    },
    clearCart: (state, action) => {
      (state = state.cartItem = []),
        (state.cartTotal = 0),
        (state.cartTotalQuantity = 0);
    },
  },
});

export const {
  addCart,
  addCartWithQuantity,
  removeItem,
  decreaseCart,
  getTotal,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
