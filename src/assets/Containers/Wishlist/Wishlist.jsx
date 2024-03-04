import { CheckIcon, ClockIcon, XMarkIcon } from "@heroicons/react/20/solid";
import UniversalLoading from "../../Components/UniversalLoading/UniversalLoading";
import { initializeWishListAsync } from "../../Store/wishlistSlice";
import { Button } from "@nextui-org/react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import "./Wishlist.css";

export default function Wishlist() {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);
	const [wishlistLoading, setWishlistLoading] = useState(false);

	async function getWishlistData() {
		try {
			setWishlistLoading(true);
			// Make an HTTP request to your backend endpoint
			const response = await fetch(
				`https://ecommerce.routemisr.com/api/v1/wishlist`,
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
					const mappedProducts = responseData.data.map((item) => ({
						id: item.id,
						name: item.title,
						href: "#",
						price: item.price,
						count: item.count,
						inStock: true,
						imageSrc: item.imageCover,
						imageAlt: item.title,
					}));

					setProducts(mappedProducts);
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
			setWishlistLoading(false);
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
				`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
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
					const remainingProductIds = responseData.data;
					setProducts((prevProducts) =>
						prevProducts.filter((product) =>
							remainingProductIds.includes(product.id)
						)
					);
					dispatch(initializeWishListAsync());
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

	useEffect(() => {
		getWishlistData();
	}, []);

	if (wishlistLoading) {
		return <UniversalLoading />;
	}

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					WishList
				</h1>

				<form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
					<section
						aria-labelledby="cart-heading"
						className="lg:col-span-7"
					>
						<h2 id="cart-heading" className="sr-only">
							Items in your Wish List
						</h2>

						<ul
							role="list"
							className="divide-y divide-gray-200 border-b border-t border-gray-200"
						>
							{products.length === 0 ? (
								<div className="h-[57vh] grid place-content-center">
									<p className="font-medium text-2xl text-gray-500 flex gap-2 items-center">
										<span>WishList is empty</span>
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
				</form>
			</div>
		</div>
	);
}
