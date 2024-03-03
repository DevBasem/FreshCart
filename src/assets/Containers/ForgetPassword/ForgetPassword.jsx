/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "../../Store/emailSlice";
import { Input, Button, Link } from "@nextui-org/react";
import FreshCartLogo from "../../Images/freshcart-logo.svg";
import { useFormik } from "formik";
import "./ForgetPassword.css";

export default function ForgetPassword() {
	const navigateToVerifyEmail = useNavigate();
	const [backendErrorMsg, setBackendErrorMsg] = useState("");
	const [backendSuccessMsg, setbackendSuccessMsg] = useState("");
	const [signInLoading, setSignInLoading] = useState(false);
	const dispatch = useDispatch();

	async function submitForgetPassword(values) {
		try {
			setSignInLoading(true);
			// Make an HTTP request to your backend endpoint
			const response = await fetch(
				"https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
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
				// Clear the backend error message state
				console.log(responseData);
				setBackendErrorMsg("");
				setbackendSuccessMsg(responseData.message);
				if (responseData.statusMsg === "success") {
					dispatch(setEmail(values.email));
					// Delay the redirection
					setTimeout(() => {
						navigateToVerifyEmail("/Email_ownership");
					}, 1000);
				}
			} else {
				// Handle errors for non-successful responses
				const errorData = await response.json();
				setbackendSuccessMsg("");
				setBackendErrorMsg(errorData.message);
			}
		} catch (error) {
			// Handle network or other errors
			console.error("failed(network):", error.message);
		} finally {
			setSignInLoading(false);
		}
	}

	const ForgotPasswordData = useFormik({
		initialValues: {
			email: "",
		},
		onSubmit: (values) => {
			submitForgetPassword(values);
		},
	});

	return (
		<div className="form-width h-[90vh] flex flex-col justify-center mx-auto">
			<div className="flex justify-center pb-4">
				<img className="h-10" src={FreshCartLogo} alt="logo" />
			</div>
			<form
				onSubmit={ForgotPasswordData.handleSubmit}
				className="flex flex-col gap-4 px-4 pb-8 pt-4 form-bg shadow-lg rounded-md"
			>
				<div>
					<h2 className="font-medium text-2xl">
						Forgot your password?
					</h2>
				</div>
				<div>
					<p className="text-small">
						Type in your email in the field below and we will send
						you a code to reset your password.
					</p>
				</div>
				<div className="flex w-full">
					<Input
						type="email"
						variant="flat"
						label="Email"
						id="email"
						name="email"
						value={ForgotPasswordData.values.email}
						onChange={ForgotPasswordData.handleChange}
						onBlur={ForgotPasswordData.handleBlur}
					/>
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
						{signInLoading ? "Processing" : "Send Code"}
					</Button>
				</div>
				<p className="text-medium text-zinc-600">
					<Link
						href="/Signin"
						className="text-blue-900 font-medium hover:underline"
						aria-label="Sign in"
					>
						Back to Login
					</Link>
				</p>
			</form>
		</div>
	);
}
