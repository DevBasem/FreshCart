/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Link } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import FreshCartLogo from "../../Images/freshcart-logo.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";

export default function Register() {
	const navigateToSignIn = useNavigate();
	const [backendErrorMsg, setBackendErrorMsg] = useState("");
	const [backendSuccessMsg, setbackendSuccessMsg] = useState("");
	const [signUpLoading, setSignUpLoading] = useState(false);

	async function submitRegistrationData(values) {
		try {
			setSignUpLoading(true);
			// Make an HTTP request to your backend endpoint
			const response = await fetch(
				"https://ecommerce.routemisr.com/api/v1/auth/signup",
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
				setBackendErrorMsg("");
				setbackendSuccessMsg("Registration Successful");
				if (responseData.message === "success") {
					// Delay the redirection for 2 seconds (adjust as needed)
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
			console.error("Registration failed(network):", error.message);
		} finally {
			setSignUpLoading(false);
		}
	}

	const RegistrationData = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			rePassword: "",
			phone: "",
		},
		validationSchema,
		onSubmit: (values) => {
			submitRegistrationData(values);
		},
	});

	function validationSchema() {
		const emailRegex = /[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}/;
		const egyptianPhoneNumberRegex = /^(010|011|012|015)\d{8}$/;

		const schema = new Yup.object({
			name: Yup.string().min(2).max(20).required(),
			email: Yup.string()
				.email()
				.matches(emailRegex, "email must be a valid email")
				.required(),
			password: Yup.string().min(6).required(),
			rePassword: Yup.string()
				.oneOf(
					[Yup.ref("password")],
					"Oops! The passwords you entered don't match. Please try again."
				)
				.required(),
			phone: Yup.string().matches(egyptianPhoneNumberRegex).required(),
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
				onSubmit={RegistrationData.handleSubmit}
				className="flex flex-col gap-4 px-4 pb-8 pt-4 form-bg shadow-lg rounded-md"
			>
				<div>
					<h2 className="font-medium text-2xl">Create Account</h2>
				</div>
				<div className="flex w-full">
					<Input
						className={{
							errorMessage: ["text-5xl, text-blue-700"],
						}}
						type="text"
						variant="flat"
						color={
							RegistrationData.errors.name &&
							RegistrationData.touched.name
								? "danger"
								: RegistrationData.touched.name
								? "success"
								: "default"
						}
						isInvalid={
							RegistrationData.errors.name &&
							RegistrationData.touched.name
						}
						isRequired
						errorMessage={
							RegistrationData.touched.name &&
							RegistrationData.errors.name
						}
						label="Name"
						id="name"
						name="name"
						value={RegistrationData.values.name}
						onChange={RegistrationData.handleChange}
						onBlur={RegistrationData.handleBlur}
					/>
				</div>
				<div className="flex w-full">
					<Input
						type="email"
						variant="flat"
						color={
							RegistrationData.errors.email &&
							RegistrationData.touched.email
								? "danger"
								: RegistrationData.touched.email
								? "success"
								: "default"
						}
						isInvalid={
							RegistrationData.errors.email &&
							RegistrationData.touched.email
						}
						isRequired
						errorMessage={
							RegistrationData.touched.email &&
							RegistrationData.errors.email
						}
						label="Email"
						id="email"
						name="email"
						value={RegistrationData.values.email}
						onChange={RegistrationData.handleChange}
						onBlur={RegistrationData.handleBlur}
					/>
				</div>
				<div className="flex w-full">
					<Input
						label="Password"
						variant="flat"
						color={
							RegistrationData.errors.password &&
							RegistrationData.touched.password
								? "danger"
								: RegistrationData.touched.password
								? "success"
								: "default"
						}
						isInvalid={
							RegistrationData.errors.password &&
							RegistrationData.touched.password
						}
						isRequired
						errorMessage={
							RegistrationData.touched.password &&
							RegistrationData.errors.password
						}
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
						value={RegistrationData.values.password}
						onChange={RegistrationData.handleChange}
						onBlur={RegistrationData.handleBlur}
					/>
				</div>
				<div className="flex w-full">
					<Input
						label="RePassword"
						variant="flat"
						color={
							RegistrationData.errors.rePassword &&
							RegistrationData.touched.rePassword
								? "danger"
								: RegistrationData.touched.rePassword
								? "success"
								: "default"
						}
						isInvalid={
							RegistrationData.errors.rePassword &&
							RegistrationData.touched.rePassword
						}
						isRequired
						errorMessage={
							RegistrationData.touched.rePassword &&
							RegistrationData.errors.rePassword
						}
						placeholder="Enter your password"
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
						value={RegistrationData.values.rePassword}
						onChange={RegistrationData.handleChange}
						onBlur={RegistrationData.handleBlur}
					/>
				</div>
				<div className="flex w-full">
					<Input
						type="tel"
						variant="flat"
						color={
							RegistrationData.errors.phone &&
							RegistrationData.touched.phone
								? "danger"
								: RegistrationData.touched.phone
								? "success"
								: "default"
						}
						isInvalid={
							RegistrationData.errors.phone &&
							RegistrationData.touched.phone
						}
						isRequired
						errorMessage={
							RegistrationData.touched.phone &&
							RegistrationData.errors.phone
						}
						label="Phone"
						id="phone"
						name="phone"
						value={RegistrationData.values.phone}
						onChange={RegistrationData.handleChange}
						onBlur={RegistrationData.handleBlur}
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
						isLoading={signUpLoading}
						isDisabled={
							RegistrationData.dirty && RegistrationData.isValid
								? false
								: true
						}
					>
						{signUpLoading ? "Processing" : "Create an account"}
					</Button>
				</div>
				<p className="text-medium text-zinc-600">
					Already have an account?{" "}
					<Link
						href="/Signin"
						className="text-blue-900 font-medium hover:underline"
						aria-label="Login"
					>
						Login here
					</Link>
				</p>
			</form>
		</div>
	);
}
