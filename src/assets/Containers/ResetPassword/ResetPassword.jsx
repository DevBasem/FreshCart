/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Input, Button, Link } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import FreshCartLogo from "../../Images/freshcart-logo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ResetPassword.css";

export default function ResetPassword() {
	const navigateToSignIn = useNavigate();
	const [backendErrorMsg, setBackendErrorMsg] = useState("");
	const [backendSuccessMsg, setbackendSuccessMsg] = useState("");
	const [resetPasswordLoading, setResetPasswordLoading] = useState(false);
	const email = useSelector((state) => state.email);

	console.log(email);

	async function submitRegistrationData(values) {
		try {
			setResetPasswordLoading(true);
			// Make an HTTP request to your backend endpoint
			const response = await fetch(
				"https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: values.email,
						newPassword: values.newPassword,
					}),
				}
			);

			// Check if the request was successful
			if (response.ok) {
				const responseData = await response.json();
				// Clear the backend error message state
				setBackendErrorMsg("");
				setbackendSuccessMsg(
					"Your password has been successfully reset"
				);
				// Delay the redirection for 2 seconds (adjust as needed)
				if (responseData) {
					setTimeout(() => {
						navigateToSignIn("/Signin");
					}, 2000);
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
		}
		setResetPasswordLoading(false);
	}

	const ResetPasswordData = useFormik({
		initialValues: {
			email: email,
			newPassword: "",
			rePassword: "",
		},
		validationSchema,
		onSubmit: (values) => {
			submitRegistrationData(values);
		},
	});

	function validationSchema() {
		const schema = new Yup.object({
			newPassword: Yup.string()
				.min(6)
				.required("New Password is required"),
			rePassword: Yup.string()
				.oneOf(
					[Yup.ref("newPassword")],
					"Oops! The passwords you entered don't match. Please try again."
				)
				.required("Confirm Password is required"),
		});

		return schema;
	}

	const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);
	const [RePasswordIsVisible, setRePasswordIsVisible] = React.useState(false);

	const togglePasswordVisibility = () =>
		setPasswordIsVisible(!passwordIsVisible);

	const toggleRePasswordVisibility = () =>
		setRePasswordIsVisible(!RePasswordIsVisible);

	return (
		<div className="form-width mx-auto">
			<div className="flex justify-center pb-4">
				<img className="h-10" src={FreshCartLogo} alt="logo" />
			</div>
			<form
				onSubmit={ResetPasswordData.handleSubmit}
				className="flex flex-col gap-4 px-4 pb-8 pt-4 form-bg shadow-lg rounded-md"
			>
				<div>
					<h2 className="font-medium text-2xl">Change Password</h2>
				</div>
				<div className="flex w-full">
					<Input
						label="New Password"
						variant="flat"
						color={
							ResetPasswordData.errors.newPassword &&
							ResetPasswordData.touched.newPassword
								? "danger"
								: ResetPasswordData.touched.newPassword
								? "success"
								: "default"
						}
						isInvalid={
							ResetPasswordData.errors.newPassword &&
							ResetPasswordData.touched.newPassword
						}
						isRequired
						errorMessage={
							ResetPasswordData.touched.newPassword &&
							ResetPasswordData.errors.newPassword
						}
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
						id="newPassword"
						name="newPassword"
						value={ResetPasswordData.values.newPassword}
						onChange={ResetPasswordData.handleChange}
						onBlur={ResetPasswordData.handleBlur}
					/>
				</div>
				<div className="flex w-full">
					<Input
						label="RePassword"
						variant="flat"
						color={
							ResetPasswordData.errors.rePassword &&
							ResetPasswordData.touched.rePassword
								? "danger"
								: ResetPasswordData.touched.rePassword
								? "success"
								: "default"
						}
						isInvalid={
							ResetPasswordData.errors.rePassword &&
							ResetPasswordData.touched.rePassword
						}
						isRequired
						errorMessage={
							ResetPasswordData.touched.rePassword &&
							ResetPasswordData.errors.rePassword
						}
						endContent={
							<button
								className="focus:outline-none"
								type="button"
								onClick={toggleRePasswordVisibility}
							>
								{RePasswordIsVisible ? (
									<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
								) : (
									<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
								)}
							</button>
						}
						type={RePasswordIsVisible ? "text" : "password"}
						id="rePassword"
						name="rePassword"
						value={ResetPasswordData.values.rePassword}
						onChange={ResetPasswordData.handleChange}
						onBlur={ResetPasswordData.handleBlur}
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
						isLoading={resetPasswordLoading}
						isDisabled={
							ResetPasswordData.dirty && ResetPasswordData.isValid
								? false
								: true
						}
					>
						{resetPasswordLoading ? "Processing" : "Reset Password"}
					</Button>
				</div>
				<p className="text-medium text-zinc-600">
					<Link
						href="/Signin"
						className="text-blue-900 font-medium hover:underline"
						aria-label="Login"
					>
						Back to login
					</Link>
				</p>
			</form>
		</div>
	);
}
