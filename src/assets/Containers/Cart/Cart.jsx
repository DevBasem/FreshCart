import {
	CheckIcon,
	ClockIcon,
	QuestionMarkCircleIcon,
	XMarkIcon,
} from "@heroicons/react/20/solid";
import UniversalLoading from "../../Components/UniversalLoading/UniversalLoading";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { initializeUserCartAsync } from "../../Store/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Cart() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [cartOwner, setCartOwner] = useState("");
	const [products, setProducts] = useState([]);
	const [productsCost, setProductsCost] = useState("");
	const [cartDataLoading, setCartDataLoading] = useState(false);
	const [removeAllLoading, setRemoveAllLoading] = useState(false);
	const [subTotal, setSubTotal] = useState(0);
	const [shipping, setShipping] = useState(0);
	const [tax, setTax] = useState(0);

	async function getCartData() {
		setCartDataLoading(true);
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
					// Append cart data to an object
					// Map the products and update the state once
					console.log(responseData.data);
					const mappedProducts = responseData.data.products.map(
						(item) => ({
							id: item.product.id,
							name: item.product.title,
							href: "#",
							price: item.price,
							count: item.count,
							inStock: true,
							imageSrc: item.product.imageCover,
							imageAlt: item.product.title,
						})
					);
					setProducts(mappedProducts);
					setProductsCost(responseData.data.totalCartPrice);
					setSubTotal((responseData.data.totalCartPrice * 7) / 100);
					setShipping((responseData.data.totalCartPrice * 4) / 100);
					setTax((responseData.data.totalCartPrice * 2) / 100);

					setCartOwner(responseData.data._id);
				}
			} else {
				// Handle errors for non-successful responses
				const errorData = await response.json();
				console.log(errorData);
			}
		} catch (error) {
			// Handle network or other errors
			console.error("failed(network):", error.message);
		} finally {
			setCartDataLoading(false);
		}
	}

	async function incrementProductCount(productId, productCount) {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === productId
					? { ...product, incrementLoading: true }
					: product
			)
		);
		try {
			// Make an HTTP request to your backend endpoint
			const count = productCount + 1;
			const response = await fetch(
				`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						token: Cookies.get("loginToken"),
					},
					body: JSON.stringify({ count }),
				}
			);

			// Check if the request was successful
			if (response.ok) {
				const responseData = await response.json();

				if (responseData.status === "success") {
					// Append cart data to an object
					// Map the products and update the state once
					const mappedProducts = responseData.data.products.map(
						(item) => ({
							id: item.product.id,
							name: item.product.title,
							href: "#",
							price: item.price,
							count: item.count,
							inStock: true,
							imageSrc: item.product.imageCover,
							imageAlt: item.product.title,
						})
					);

					setProducts(mappedProducts);
					setProducts(mappedProducts);
					setProductsCost(responseData.data.totalCartPrice);
					setSubTotal((responseData.data.totalCartPrice * 7) / 100);
					setShipping((responseData.data.totalCartPrice * 4) / 100);
					setTax((responseData.data.totalCartPrice * 2) / 100);
				}
			} else {
				// Handle errors for non-successful responses
				const errorData = await response.json();
				console.log(errorData);
			}
		} catch (error) {
			// Handle network or other errors
			console.error("failed(network):", error.message);
		} finally {
			setProducts((prevProducts) =>
				prevProducts.map((product) =>
					product.id === productId
						? { ...product, incrementLoading: false }
						: product
				)
			);
		}
	}

	async function decrementProductCount(productId, productCount) {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === productId
					? { ...product, decrementLoading: true }
					: product
			)
		);
		try {
			let count = productCount;

			if (productCount > 1) {
				count = productCount - 1;
			}
			// Make an HTTP request to your backend endpoint
			const response = await fetch(
				`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						token: Cookies.get("loginToken"),
					},
					body: JSON.stringify({ count }),
				}
			);

			// Check if the request was successful
			if (response.ok) {
				const responseData = await response.json();

				if (responseData.status === "success") {
					// Append cart data to an object
					// Map the products and update the state once
					const mappedProducts = responseData.data.products.map(
						(item) => ({
							id: item.product.id,
							name: item.product.title,
							href: "#",
							price: item.price,
							count: item.count,
							inStock: true,
							imageSrc: item.product.imageCover,
							imageAlt: item.product.title,
						})
					);

					setProducts(mappedProducts);
					setProducts(mappedProducts);
					setProductsCost(responseData.data.totalCartPrice);
					setSubTotal((responseData.data.totalCartPrice * 7) / 100);
					setShipping((responseData.data.totalCartPrice * 4) / 100);
					setTax((responseData.data.totalCartPrice * 2) / 100);
				}
			} else {
				// Handle errors for non-successful responses
				const errorData = await response.json();
				console.log(errorData);
			}
		} catch (error) {
			// Handle network or other errors
			console.error("failed(network):", error.message);
		} finally {
			setProducts((prevProducts) =>
				prevProducts.map((product) =>
					product.id === productId
						? { ...product, decrementLoading: false }
						: product
				)
			);
		}
	}

	async function removeProduct(productId) {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === productId
					? { ...product, removeProductLoading: true }
					: product
			)
		);
		try {
			// Make an HTTP request to your backend endpoint
			const response = await fetch(
				`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
				{
					method: "DELETE",
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
					// Append cart data to an object
					// Map the products and update the state once
					const mappedProducts = responseData.data.products.map(
						(item) => ({
							id: item.product.id,
							name: item.product.title,
							href: "#",
							price: item.price,
							count: item.count,
							inStock: true,
							imageSrc: item.product.imageCover,
							imageAlt: item.product.title,
						})
					);

					setProducts(mappedProducts);
					dispatch(initializeUserCartAsync());
					setProducts(mappedProducts);
					setProductsCost(responseData.data.totalCartPrice);
					setSubTotal((responseData.data.totalCartPrice * 7) / 100);
					setShipping((responseData.data.totalCartPrice * 4) / 100);
					setTax((responseData.data.totalCartPrice * 2) / 100);
				}
			} else {
				// Handle errors for non-successful responses
				const errorData = await response.json();
				console.log(errorData);
			}
		} catch (error) {
			// Handle network or other errors
			console.error("failed(network):", error.message);
		} finally {
			setProducts((prevProducts) =>
				prevProducts.map((product) =>
					product.id === productId
						? { ...product, removeProductLoading: false }
						: product
				)
			);
		}
	}

	async function removeAll() {
		setRemoveAllLoading(true);
		try {
			// Make an HTTP request to your backend endpoint
			const response = await fetch(
				"https://ecommerce.routemisr.com/api/v1/cart",
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						token: Cookies.get("loginToken"),
					},
				}
			);

			// Check if the request was successful
			if (response.ok) {
				const responseData = await response.json();

				if (responseData.message === "success") {
					// Append cart data to an object
					// Map the products and update the state once
					console.log(responseData.data);
					const mappedProducts = [];

					setProducts(mappedProducts);
					dispatch(initializeUserCartAsync());
					setProducts(mappedProducts);
					setProductsCost(0);
					setSubTotal(0);
					setShipping(0);
					setTax(0);
				}
			} else {
				// Handle errors for non-successful responses
				const errorData = await response.json();
				console.log(errorData);
			}
		} catch (error) {
			// Handle network or other errors
			console.error("failed(network):", error.message);
		} finally {
			setRemoveAllLoading(false);
		}
	}

	useEffect(() => {
		getCartData();
	}, []);

	if (cartDataLoading) {
		return <UniversalLoading />;
	}

	function goToAddress(id) {
		navigate("/Address/" + id);
	}

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Shopping Cart
					</h1>

					{products.length > 0 ? (
						<Button
							size="md"
							color="danger"
							radius="lg"
							variant="flat"
							endContent={
								<FaTrash
									className="h-5 w-5"
									aria-hidden="true"
								/>
							}
							onClick={() => removeAll()}
							isLoading={removeAllLoading}
						>
							<span className="sr-only">Remove</span>
							Remove All
						</Button>
					) : (
						""
					)}
				</div>
				<form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
					<section
						aria-labelledby="cart-heading"
						className="lg:col-span-7"
					>
						<h2 id="cart-heading" className="sr-only">
							Items in your shopping cart
						</h2>

						<ul
							role="list"
							className="divide-y divide-gray-200 border-b border-t border-gray-200"
						>
							{products.length === 0 ? (
								<div className="h-[57vh] grid place-content-center">
									<p className="font-medium text-2xl text-gray-500 flex gap-2 items-center">
										<span>Cart is empty</span>
										<MdOutlineRemoveShoppingCart className="text-4xl" />
									</p>
								</div>
							) : (
								""
							)}
							{products.map((product, productIdx) => (
								<li
									key={product.id}
									className="flex py-6 sm:py-10"
								>
									<div className="flex-shrink-0">
										<img
											src={product.imageSrc}
											alt={product.imageAlt}
											className="h-24 w-24 rounded-md object-contain object-center sm:h-48 sm:w-48"
										/>
									</div>

									<div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
										<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
											<div>
												<div className="flex justify-between">
													<h3 className="text-sm">
														<a
															href={product.href}
															className="font-medium text-gray-700 hover:text-gray-800"
														>
															{product.name}
														</a>
													</h3>
												</div>
												<p className="mt-1 text-sm font-medium text-gray-900">
													{product.price}
												</p>
											</div>

											<div className="mt-4 sm:mt-0 sm:pr-9">
												<label
													htmlFor={`quantity-${productIdx}`}
													className="sr-only"
												>
													Quantity, {product.name}
												</label>

												<div className="flex items-center gap-2">
													<Button
														size="sm"
														radius="lg"
														variant="ghost"
														isIconOnly
														onClick={() =>
															incrementProductCount(
																product.id,
																product.count
															)
														}
														isLoading={
															product.incrementLoading
														}
													>
														<FaPlus className="opacity-70" />
													</Button>
													<Button
														size="sm"
														radius="lg"
														variant={
															product.count === 1
																? "flat"
																: "ghost"
														}
														isIconOnly
														isDisabled={
															product.count === 1
																? true
																: false
														}
														onClick={() =>
															decrementProductCount(
																product.id,
																product.count
															)
														}
														isLoading={
															product.decrementLoading
														}
													>
														<FaMinus className="opacity-70" />
													</Button>
													<div className="bg-default-200 px-3 py-1 rounded-xl">
														<p>{product.count}</p>
													</div>
												</div>

												<div className="absolute right-0 top-0">
													<Button
														size="sm"
														radius="lg"
														variant="ghost"
														color={
															product.removeProductLoading
																? "danger"
																: "default"
														}
														isIconOnly
														onClick={() =>
															removeProduct(
																product.id
															)
														}
														isLoading={
															product.removeProductLoading
														}
													>
														<span className="sr-only">
															Remove
														</span>
														<XMarkIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</Button>
												</div>
											</div>
										</div>

										<p className="mt-4 flex space-x-2 text-sm text-gray-700">
											{product.inStock ? (
												<CheckIcon
													className="h-5 w-5 flex-shrink-0 text-green-500"
													aria-hidden="true"
												/>
											) : (
												<ClockIcon
													className="h-5 w-5 flex-shrink-0 text-gray-300"
													aria-hidden="true"
												/>
											)}

											<span>
												{product.inStock
													? "In stock"
													: `Ships in ${product.leadTime}`}
											</span>
										</p>
									</div>
								</li>
							))}
						</ul>
					</section>

					{/* Order summary */}
					<section
						aria-labelledby="summary-heading"
						className="sticky top-20 mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
					>
						<h2
							id="summary-heading"
							className="text-lg font-medium text-gray-900"
						>
							Order summary
						</h2>

						<dl className="mt-6 space-y-4">
							<div className="flex items-center justify-between">
								<dt className="text-sm text-gray-600">
									Subtotal
								</dt>
								<dd className="text-sm font-medium text-gray-900">
									{`${subTotal} EGP`}
								</dd>
							</div>
							<div className="flex items-center justify-between border-t border-gray-200 pt-4">
								<dt className="flex items-center text-sm text-gray-600">
									<span>Shipping estimate</span>
									<a
										href="#"
										className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">
											Learn more about how shipping is
											calculated
										</span>
										<QuestionMarkCircleIcon
											className="h-5 w-5"
											aria-hidden="true"
										/>
									</a>
								</dt>
								<dd className="text-sm font-medium text-gray-900">
									{`${shipping} EGP`}
								</dd>
							</div>
							<div className="flex items-center justify-between border-t border-gray-200 pt-4">
								<dt className="flex text-sm text-gray-600">
									<span>Tax estimate</span>
									<a
										href="#"
										className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">
											Learn more about how tax is
											calculated
										</span>
										<QuestionMarkCircleIcon
											className="h-5 w-5"
											aria-hidden="true"
										/>
									</a>
								</dt>
								<dd className="text-sm font-medium text-gray-900">
									{`${tax} EGP`}
								</dd>
							</div>
							<div className="flex items-center justify-between border-t border-gray-200 pt-4">
								<dt className="text-base font-medium text-gray-900">
									Order total
								</dt>
								<dd className="text-base font-medium text-gray-900">
									{`${productsCost} EGP`}
								</dd>
							</div>
						</dl>

						<div className="mt-6">
							<Button
								radius="full"
								size="lg"
								fullWidth={true}
								className="font-medium"
								onClick={() => goToAddress(cartOwner)}
								// isLoading={addCartLoading}
							>
								{/* {addCartLoading ? "Processing" : "Add to Cart"} */}
								Checkout
							</Button>
						</div>
					</section>
				</form>
			</div>
		</div>
	);
}
