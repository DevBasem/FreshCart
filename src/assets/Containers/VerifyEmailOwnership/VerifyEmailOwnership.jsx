/* eslint-disable no-useless-escape */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Link } from "@nextui-org/react";
import FreshCartLogo from "../../Images/freshcart-logo.svg";
import { useFormik } from "formik";
import "./VerifyEmailOwnership.css";

export default function VerifyEmailOwnership() {
	const navigateToResetPassword = useNavigate();
	const [backendErrorMsg, setBackendErrorMsg] = useState("");
	const [backendSuccessMsg, setbackendSuccessMsg] = useState("");
	const [verificationLoading, setVerificationLoading] = useState(false);

	async function submitResetCode(values) {
		try {
			setVerificationLoading(true);
			// Make an HTTP request to your backend endpoint
			const response = await fetch(
				"https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
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
				setbackendSuccessMsg("Correct Code");
				if (responseData.status === "Success") {
					// Delay the redirection for 1 seconds
					setTimeout(() => {
						navigateToResetPassword("/Reset_password");
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
		}
		setVerificationLoading(false);
	}

	const VerificationCode = useFormik({
		initialValues: {
			resetCode: "",
		},
		onSubmit: (values) => {
			submitResetCode(values);
		},
	});

	return (
		<div className="form-width mx-auto">
			<div className="flex justify-center pb-4">
				<img className="h-10" src={FreshCartLogo} alt="logo" />
			</div>
			<form
				onSubmit={VerificationCode.handleSubmit}
				className="flex flex-col gap-4 px-4 pb-8 pt-4 form-bg shadow-lg rounded-md"
			>
				<div>
					<h2 className="font-medium text-2xl">Email Verification</h2>
				</div>

				<div>
					<p className="text-small">
						Please check your email for the verification code and
						enter it below.
					</p>
				</div>

				<div className="flex w-full">
					<Input
						type="tel"
						variant="flat"
						isRequired
						label="Code"
						id="resetCode"
						name="resetCode"
						value={VerificationCode.values.resetCode}
						onChange={VerificationCode.handleChange}
						onBlur={VerificationCode.handleBlur}
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
						isLoading={verificationLoading}
						isDisabled={
							VerificationCode.dirty && VerificationCode.isValid
								? false
								: true
						}
					>
						{verificationLoading ? "Processing" : "Verify Code"}
					</Button>
				</div>
				<p className="text-medium text-zinc-600">
					<Link
						href="/Forgot_password"
						className="text-blue-900 font-medium hover:underline"
						aria-label="Login"
					>
						Go Back
					</Link>
				</p>
			</form>
		</div>
	);
}
