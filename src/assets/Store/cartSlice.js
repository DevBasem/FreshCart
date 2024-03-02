import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "sonner";

// Action creator for asynchronous addToCart
export const addToUserCartAsync = (productId) => async (dispatch) => {
	try {
		console.log(Cookies.get("loginToken"));
		// Make an HTTP request to your backend endpoint
		const response = await fetch(
			"https://ecommerce.routemisr.com/api/v1/cart",
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
				// Dispatch the addToUserCart action with the updated numOfCartItems
				dispatch(addToUserCart(responseData.numOfCartItems));
				// Update cookies with the new numOfCartItems
				Cookies.set("numOfCartItems", responseData.numOfCartItems);

				toast.success("Product added successfully", {
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

// Action creator for asynchronous initializeUserCart
export const initializeUserCartAsync = () => async (dispatch) => {
	try {
		// Make an HTTP request to your backend endpoint
		const response = await fetch(
			"https://ecommerce.routemisr.com/api/v1/cart",
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

			if (responseData.status === "success") {
				// Dispatch the initializeUserCart action with the updated numOfCartItems
				dispatch(initializeUserCart(responseData.numOfCartItems));
			}
		} else {
			// Handle errors for non-successful responses
			const errorData = await response.json();
			console.log(errorData);
			dispatch(initializeUserCart(0));
		}
	} catch (error) {
		// Handle network or other errors
		console.error("failed(network):", error.message);
	}
};

const cartSlice = createSlice({
	name: "cart",
	initialState: 0,
	reducers: {
		// Get state with the received numOfCartItems
		initializeUserCart: (state, action) => {
			return action.payload;
		},
		// Update state with the received numOfCartItems
		addToUserCart: (state, action) => {
			return action.payload;
		},
	},
});

export const { addToUserCart, initializeUserCart } = cartSlice.actions;
export default cartSlice.reducer;
