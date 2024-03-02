import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import Cookies from "js-cookie";

// Action creator for asynchronous addToUserWishList
export const addToUserWishListAsync = (productId) => async (dispatch) => {
	try {
		// Make an HTTP request to your backend endpoint
		const response = await fetch(
			"https://ecommerce.routemisr.com/api/v1/wishlist",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					token: Cookies.get("loginToken"),
				},
				body: JSON.stringify({ productId }),
			}
		);

		// Check if the request was successful
		if (response.ok) {
			const responseData = await response.json();

			console.log(responseData);

			if (responseData.status === "success") {
				console.log(responseData);
				// Dispatch the addToUserWishList action with the updated numOfWishListItems
				dispatch(addToUserWishList(responseData.data.length));

				toast("Product added successfully to your wishlist", {
					duration: 4000,
				});
			}
		} else {
			// Handle errors for non-successful responses
			const errorData = await response.json();
			console.log(errorData);
		}
	} catch (error) {
		// Handle network or other errors
		console.error("failed(network):", error.message);
	}
};

// Action creator for asynchronous initializeWishList
export const initializeWishListAsync = () => async (dispatch) => {
	try {
		// Make an HTTP request to your backend endpoint
		const response = await fetch(
			"https://ecommerce.routemisr.com/api/v1/wishlist",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					token: Cookies.get("loginToken"),
				},
			}
		);

		// Check if the request was successful
		if (response.ok) {
			const responseData = await response.json();
			console.log(responseData);
			if (responseData.status === "success") {
				// Dispatch the initializeUserWishList action with the updated numOfWishListItems
				console.log(responseData);
				dispatch(initializeWishList(responseData.count));
			}
		} else {
			// Handle errors for non-successful responses
			const errorData = await response.json();
			console.log(errorData);
			dispatch(initializeWishList(0));
		}
	} catch (error) {
		// Handle network or other errors
		console.error("failed(network):", error.message);
	}
};

const wishlistSlice = createSlice({
	name: "wishlist",
	initialState: 0,
	reducers: {
		// Get state with the received numOfWishlistItems
		initializeWishList: (state, action) => {
			return action.payload;
		},
		// Update state with the received numOfWishlistItems
		addToUserWishList: (state, action) => {
			return action.payload;
		},
	},
});

export const { addToUserWishList, initializeWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
