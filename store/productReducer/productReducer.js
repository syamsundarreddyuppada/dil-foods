import { createSlice } from '@reduxjs/toolkit';

const productItemSlice = createSlice({
    name: 'products',
    initialState: {
        cartItems: [],
        favoriteItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },

        addToFavorite: (state, action) => {
            state.favoriteItems.push(action.payload);
        },
        assignCartData: (state, action) => {
            state.cartItems = action.payload;
        },

        assignFavoriteData: (state, action) => {
            state.favoriteItems = action.payload;
        },
    },
});

export const { addToCart, addToFavorite, assignCartData, assignFavoriteData } =
    productItemSlice.actions;

export default productItemSlice.reducer;
