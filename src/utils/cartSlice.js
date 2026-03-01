import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {

        addCartItem: function(state, action) {
            state.items.push(action.payload);
        },

        removeCartItem: function(state, action) {
            state.items.pop();
        },
        clearCartItem: function(state,action) {
            state.items.length=0;
        }

    }
});

export const { addCartItem, removeCartItem, clearCartItem } = cartSlice.actions;

export default cartSlice.reducer;