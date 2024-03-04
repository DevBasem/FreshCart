/* eslint-disable no-useless-escape */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import "./AddressCreds.css";

export default function AddressCreds() {
	const [checkoutLoading, setCheckoutLoading] = useState(false);
	const { id } = useParams();

	async function checkout(cartId, shippingAddress) {
		setCheckoutLoading(true);
		try {
			const response = await fetch(
				`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://devbasem.github.io/FreshCart/#/`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						token: Cookies.get("loginToken"),
					},
					body: JSON.stringify(shippingAddress),
				}
			);

			if (response.ok) {
				const responseData = await response.json();
				console.log("Checkout successful:", responseData);
				window.location.href = responseData.session.url;
			} else {
				const errorData = await response.json();
				console.error("Checkout failed:", errorData);
			}
		} catch (error) {
			console.error("Checkout failed:", error.message);
		} finally {
			setCheckoutLoading(false);
		}
	}

	const AddressData = useFormik({
		initialValues: {
			details: "",
			phone: "",
			city: "",
		},
		onSubmit: (values) => {
			checkout(id, values);
		},
	});

	return (
		<div className="form-width mx-auto min-h-[80vh] flex flex-col justify-center">
			<form
				onSubmit={AddressData.handleSubmit}
				className="flex flex-col gap-4 px-4 pb-8 pt-4 form-bg shadow-lg rounded-md"
			>
				<div>
					<h2 className="font-medium text-2xl">
						Enter the following details
					</h2>
				</div>
				<div className="flex w-full">
					<Input
						type="textarea"
						variant="flat"
						label="Address"
						id="details"
						name="details"
						value={AddressData.values.details}
						onChange={AddressData.handleChange}
						onBlur={AddressData.handleBlur}
					/>
				</div>
				<div className="flex w-full">
					<Input
						type="tel"
						variant="flat"
						label="Phone"
						id="phone"
						name="phone"
						value={AddressData.values.phone}
						onChange={AddressData.handleChange}
						onBlur={AddressData.handleBlur}
					/>
				</div>
				<div className="flex w-full">
					<Input
						type="text"
						variant="flat"
						label="City"
						id="city"
						name="city"
						value={AddressData.values.city}
						onChange={AddressData.handleChange}
						onBlur={AddressData.handleBlur}
					/>
				</div>

				<div className="flex w-full">
					<Button
						fullWidth={true}
						size="lg"
						color="primary"
						type="submit"
						isLoading={checkoutLoading}
					>
						{checkoutLoading ? "Processing" : "Next Step"}
					</Button>
				</div>
			</form>
		</div>
	);
}
