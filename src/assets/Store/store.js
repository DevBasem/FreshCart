import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./emailSlice";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

const store = configureStore({
	reducer: {
		email: emailReducer,
		cart: cartReducer,
		wishlist: wishlistReducer,
	},
});

export default store;
