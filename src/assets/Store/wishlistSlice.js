import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import Cookies from "js-cookie";

const initialState = {
	wishlistCount: 0,
	loading: false, // Add loading state
	error: null, // Add error state
};

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

				localStorage.setItem(
					"wishlistIds",
					JSON.stringify(responseData.data)
				);

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
	dispatch(setLoading(true)); // Set loading to true before making the request
	try {
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

		if (response.ok) {
			const responseData = await response.json();
			if (responseData.status === "success") {
				const wishlistIds = responseData.data.reduce((ids, product) => {
					ids.push(product._id);
					return ids;
				}, []);

				localStorage.setItem(
					"wishlistIds",
					JSON.stringify(wishlistIds)
				);
				dispatch(initializeWishList(responseData.count));
			}
		} else {
			const errorData = await response.json();
			console.log(errorData);
			dispatch(initializeWishList(0));
			dispatch(setError("Failed to initialize wishlist"));
		}
	} catch (error) {
		console.error("failed(network):", error.message);
		dispatch(setError("Network error"));
	} finally {
		dispatch(setLoading(false)); // Set loading to false after the request is complete
	}
};

const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		initializeWishList: (state, action) => {
			return {
				...state,
				wishlistCount: action.payload,
				error: null, // Reset error state on successful initialization
			};
		},
		addToUserWishList: (state, action) => {
			return {
				...state,
				wishlistCount: action.payload,
				error: null, // Reset error state on successful addition
			};
		},
		setLoading: (state, action) => {
			return {
				...state,
				loading: action.payload,
			};
		},
		setError: (state, action) => {
			return {
				...state,
				error: action.payload,
				loading: false, // Set loading to false on error
			};
		},
	},
});

export const { addToUserWishList, initializeWishList, setLoading, setError } =
	wishlistSlice.actions;
export default wishlistSlice.reducer;
