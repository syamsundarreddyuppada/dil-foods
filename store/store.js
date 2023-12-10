import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/store/productReducer/productReducer";
const store = configureStore({
  reducer: {
    productItems: productReducer,
  },
});

export default store
