import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Provider as ReduxStore } from "react-redux";
import store from "./assets/Store/store.js";
import NotFoundLayout from "./assets/Layouts/NotFoundLayout/NotFoundLayout.jsx";
import ProtectedRoute from "./assets/Containers/ProtectedRoute/ProtectedRoute.jsx";
import MainLayout from "./assets/Layouts/MainLayout/MainLayout.jsx";
import HomeLayout from "./assets/Layouts/HomeLayout/HomeLayout.jsx";
import CartLayout from "./assets/Layouts/CartLayout/CartLayout.jsx";
import WishlistLayout from "./assets/Layouts/WishlistLayout/WishlistLayout.jsx";
import ProductsLayout from "./assets/Layouts/ProductsLayout/ProductsLayout.jsx";
import CategoriesLayout from "./assets/Layouts/CategoriesLayout/CategoriesLayout.jsx";
import BrandsLayout from "./assets/Layouts/BrandsLayout/BrandsLayout.jsx";
import ProductDetails from "./assets/Components/ProductDetails/ProductDetails.jsx";
import AddressCreds from "./assets/Containers/AddressCreds/AddressCreds.jsx";
import AuthLayout from "./assets/Layouts/AuthLayout/AuthLayout.jsx";
import Login from "./assets/Containers/Login/Login.jsx";
import Register from "./assets/Containers/Register/Register.jsx";
import ForgetPassword from "./assets/Containers/ForgetPassword/ForgetPassword.jsx";
import VerifyEmailOwnership from "./assets/Containers/VerifyEmailOwnership/VerifyEmailOwnership.jsx";
import ResetPassword from "./assets/Containers/ResetPassword/ResetPassword.jsx";
import OfflineState from "./assets/Components/OfflineState/OfflineState.jsx";
import "./App.css";

function App() {
	const navigate = useNavigate();

	return (
		<ReduxStore store={store}>
			<NextUIProvider navigate={navigate}>
				<Routes>
					<Route path="*" element={<NotFoundLayout />} />
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<MainLayout />
							</ProtectedRoute>
						}
					>
						<Route index={true} element={<HomeLayout />} />
						<Route path="Home" element={<HomeLayout />} />
						<Route path="Cart" element={<CartLayout />} />
						<Route path="Wishlist" element={<WishlistLayout />} />
						<Route path="Products" element={<ProductsLayout />} />
						<Route
							path="Categories"
							element={<CategoriesLayout />}
						/>
						<Route path="Brands" element={<BrandsLayout />} />
						<Route
							path="Product_details/:id"
							element={<ProductDetails />}
						/>
						<Route path="Address/:id" element={<AddressCreds />} />
					</Route>
					<Route path="/" element={<AuthLayout />}>
						<Route path="Signin" element={<Login />} />
						<Route path="Signup" element={<Register />} />
						<Route
							path="Forgot_password"
							element={<ForgetPassword />}
						/>
						<Route
							path="Email_ownership"
							element={<VerifyEmailOwnership />}
						/>
						<Route
							path="Reset_password"
							element={<ResetPassword />}
						/>
					</Route>
				</Routes>
				<OfflineState />
			</NextUIProvider>
		</ReduxStore>
	);
}

export default App;
