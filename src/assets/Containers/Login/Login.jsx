/* eslint-disable no-useless-escape */
import React, { useCallback, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Input, Button, Checkbox, Link } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import FreshCartLogo from "../../Images/freshcart-logo.svg";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import "./Login.css";

export default function Login() {
	const navigateToSignIn = useNavigate();
	const [backendErrorMsg, setBackendErrorMsg] = useState("");
	const [backendSuccessMsg, setbackendSuccessMsg] = useState("");
	const [signInLoading, setSignInLoading] = useState(false);
	const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);
	const [isSelected, setIsSelected] = React.useState(false);
	const isAuthenticated = !!Cookies.get("loginToken");
	const isAlreadyLoggedIn = localStorage.getItem("isLoggedIn") === "true";

	const submitLoginData = useCallback(
		async (values) => {
			try {
				setSignInLoading(true);
				// Make an HTTP request to your backend endpoint
				const response = await fetch(
					"https://ecommerce.routemisr.com/api/v1/auth/signin",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(values),
					}
				);

				// Check if the request was successful
				if (response.ok) {
					const responseData = await response.json();
					console.log(responseData);
					// Clear the backend error message state
					setBackendErrorMsg("");
					setbackendSuccessMsg("Login Successful");
					if (responseData.message === "success") {
						// Delay the redirection
						setTimeout(() => {
							navigateToSignIn("/Home");
						}, 1000);
					}

					// Save the user token in cookies
					Cookies.set("loginToken", responseData.token, {
						expires: 7,
					});

					// Save the user login in cookies if "Remember me" is checked
					if (isSelected) {
						console.log("Setting isLoggedIn in localStorage");
						localStorage.setItem("isLoggedIn", "true");
					}
				} else {
					// Handle errors for non-successful responses
					const errorData = await response.json();
					setbackendSuccessMsg("");
					setBackendErrorMsg(errorData.message);
				}
			} catch (error) {
				// Handle network or other errors
				console.error("Login failed(network):", error.message);
			} finally {
				setSignInLoading(false);
			}
		},
		[
			navigateToSignIn,
			setSignInLoading,
			setBackendErrorMsg,
			setbackendSuccessMsg,
			isSelected,
		]
	);

	const LoginData = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			submitLoginData(values);
		},
	});

	const handleRememberMeChange = () => {
		setIsSelected(!isSelected);
	};

	const togglePasswordVisibility = () =>
		setPasswordIsVisible(!passwordIsVisible);

	if (isAuthenticated && isAlreadyLoggedIn) {
		return <Navigate to="/Home" />;
	}

	return (
		<div className="form-width h-[90vh] flex flex-col justify-center mx-auto">
			<div className="flex justify-center pb-4">
				<img className="h-10" src={FreshCartLogo} alt="logo" />
			</div>
			<form
				onSubmit={LoginData.handleSubmit}
				className="flex flex-col gap-4 px-4 pb-8 pt-4 form-bg shadow-lg rounded-md"
			>
				<div>
					<h2 className="font-medium text-2xl">
						Sign in to your account
					</h2>
				</div>
				<div className="flex w-full">
					<Input
						type="email"
						variant="flat"
						label="Email"
						id="email"
						name="email"
						value={LoginData.values.email}
						onChange={LoginData.handleChange}
						onBlur={LoginData.handleBlur}
					/>
				</div>
				<div className="flex w-full">
					<Input
						label="Password"
						variant="flat"
						placeholder="Enter your password"
						endContent={
							<button
								className="focus:outline-none"
								type="button"
								onClick={togglePasswordVisibility}
							>
								{passwordIsVisible ? (
									<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
								) : (
									<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
								)}
							</button>
						}
						type={passwordIsVisible ? "text" : "password"}
						id="password"
						name="password"
						value={LoginData.values.password}
						onChange={LoginData.handleChange}
						onBlur={LoginData.handleBlur}
					/>
				</div>
				<div className="flex w-full">
					<Checkbox
						classNames={{
							wrapper: "border-2 border-gray-200",
							label: ["text-blue-900 font-medium"],
						}}
						isSelected={isSelected}
						onValueChange={handleRememberMeChange}
					>
						Remember me
					</Checkbox>
					<Link
						className="ms-auto text-blue-900 font-medium hover:underline"
						href="/Forgot_password"
					>
						Forgot password?
					</Link>
				</div>
				{backendSuccessMsg && (
					<div className="flex w-full">
						<p className="text-center flex-1 text-small text-success-600 rounded-full bg-success-100 py-1">
							{backendSuccessMsg}
						</p>
					</div>
				)}
				{backendErrorMsg && (
					<div className="flex w-full">
						<p className="text-center flex-1 text-small text-danger-500 rounded-full bg-danger-100 py-1">
							{backendErrorMsg}
						</p>
					</div>
				)}
				<div className="flex w-full">
					<Button
						fullWidth={true}
						size="lg"
						color="primary"
						type="submit"
						isLoading={signInLoading}
					>
						{signInLoading ? "Processing" : "Sign in"}
					</Button>
				</div>
				<p className="text-medium text-zinc-600">
					Don’t have an account yet?{" "}
					<Link
						href="/Signup"
						className="text-blue-900 font-medium hover:underline"
						aria-label="Sign up"
					>
						Sign up
					</Link>
				</p>
			</form>
		</div>
	);
}
