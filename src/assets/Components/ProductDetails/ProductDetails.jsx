import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { addToUserCartAsync } from "../../Store/cartSlice";
import { Button } from "@nextui-org/react";
import { StarIcon } from "@heroicons/react/20/solid";
import {
	CurrencyDollarIcon,
	GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import UniversalLoading from "../UniversalLoading/UniversalLoading";
import "./ProductDetails.css";

export default function ProductDetails() {
	const productId = useParams();
	const dispatch = useDispatch();
	const [addCartLoading, setaddCartLoading] = useState(false);
	console.log(productId);

	async function getProductDetails() {
		try {
			const response = await fetch(
				`https://ecommerce.routemisr.com/api/v1/products/${productId.id}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.status}`);
			}

			const responseData = await response.json();
			console.log(responseData);
			return responseData.data;
		} catch (error) {
			console.error("Failed to fetch data:", error.message);
			throw error;
		}
	}

	const { data: productDetails, isLoading } = useQuery(
		"productDetails",
		getProductDetails,
		{ cacheTime: 0 }
	);

	console.log(productDetails);

	if (isLoading || !productDetails) {
		return <UniversalLoading />;
	}

	const productimages = [];

	for (let i = 0; i < productDetails.images.length; i++) {
		productimages.push({
			id: i + 2,
			imageSrc: productDetails.images[i],
			imageAlt: "Back of women's Basic Tee in black.",
			primary: false,
		});
	}

	const truncateTitle = (title, numWords) => {
		const words = title.split(" ");
		return words.length > numWords
			? words.slice(0, numWords).join(" ") + "..."
			: title;
	};

	const handleAddToCart = async (ProductId) => {
		// Set loading to true while waiting for the server response
		setaddCartLoading(true);

		try {
			// Dispatch the addToUserCartAsync action
			await dispatch(addToUserCartAsync(ProductId));
		} finally {
			// Set loading to false regardless of success or failure
			setaddCartLoading(false);
		}
	};

	console.log(productimages);

	const product = {
		name: productDetails.title,
		price: `${productDetails.price} EGP`,
		rating: productDetails.ratingsAverage,
		reviewCount: productDetails.ratingsQuantity,
		href: "#",
		breadcrumbs: [
			{ id: 1, name: productDetails.brand.name, href: "#" },
			{ id: 2, name: productDetails.category.name, href: "#" },
		],
		images: [
			{
				id: 1,
				imageSrc: productDetails.imageCover,
				imageAlt: productDetails.slug,
				primary: true,
			},
			...productimages,
		],
		description: `
			<p>${productDetails.description}</p>
		`,
		details: [
			"Only the best materials",
			"Ethically and locally made",
			"Pre-washed and pre-shrunk",
			"Machine wash cold with similar colors",
		],
	};

	const policies = [
		{
			name: "International delivery",
			icon: GlobeAmericasIcon,
			description: "Get your order in 2 years",
		},
		{
			name: "Loyalty rewards",
			icon: CurrencyDollarIcon,
			description: "Don't look at other tees",
		},
	];

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<>
			<div className="bg-white px-2">
				<div className="pb-16 pt-6 sm:pb-24">
					<nav
						aria-label="Breadcrumb"
						className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
					>
						<ol role="list" className="flex items-center space-x-4">
							{product.breadcrumbs.map((breadcrumb) => (
								<li key={breadcrumb.id}>
									<div className="flex items-center">
										<a
											href={breadcrumb.href}
											className="mr-4 text-sm font-medium text-gray-900"
										>
											{breadcrumb.name}
										</a>
										<svg
											viewBox="0 0 6 20"
											aria-hidden="true"
											className="h-5 w-auto text-gray-300"
										>
											<path
												d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
												fill="currentColor"
											/>
										</svg>
									</div>
								</li>
							))}
							<li className="text-sm">
								<a
									href={product.href}
									aria-current="page"
									className="font-medium text-gray-500 hover:text-gray-600"
								>
									{truncateTitle(productDetails.title, 3)}
								</a>
							</li>
						</ol>
					</nav>
					<div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
						<div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
							<div className="lg:col-span-5 lg:col-start-8">
								<div className="flex justify-between">
									<h1 className="text-xl font-medium text-gray-900">
										{product.name}
									</h1>
									<p className="text-xl font-medium text-gray-900">
										{product.price}
									</p>
								</div>
								{/* Reviews */}
								<div className="mt-4">
									<h2 className="sr-only">Reviews</h2>
									<div className="flex items-center">
										<p className="text-sm text-gray-700">
											{product.rating}
											<span className="sr-only">
												{" "}
												out of 5 stars
											</span>
										</p>
										<div className="ml-1 flex items-center">
											{[0, 1, 2, 3, 4].map((rating) => (
												<StarIcon
													key={rating}
													className={classNames(
														product.rating > rating
															? "text-yellow-400"
															: "text-gray-200",
														"h-5 w-5 flex-shrink-0"
													)}
													aria-hidden="true"
												/>
											))}
										</div>
										<div
											aria-hidden="true"
											className="ml-4 text-sm text-gray-300"
										>
											·
										</div>
										<div className="ml-4 flex">
											<a
												href="#"
												className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
											>
												See all {product.reviewCount}{" "}
												reviews
											</a>
										</div>
									</div>
								</div>
							</div>

							{/* Image gallery */}
							<div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
								<h2 className="sr-only">Images</h2>

								<div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
									{product.images.map((image) => (
										<img
											key={image.id}
											src={image.imageSrc}
											alt={image.imageAlt}
											className={classNames(
												image.primary
													? "lg:col-span-2 lg:row-span-2"
													: "hidden lg:block",
												"rounded-lg"
											)}
										/>
									))}
								</div>
							</div>

							<div className="mt-8 lg:col-span-5">
								{/* Product details */}
								<div className="mt-10">
									<h2 className="text-sm font-medium text-gray-900">
										Description
									</h2>

									<div
										className="prose prose-sm mt-4 text-gray-500"
										dangerouslySetInnerHTML={{
											__html: product.description,
										}}
									/>
								</div>

								<div className="mt-8 border-t border-gray-200 pt-8">
									<h2 className="text-sm font-medium text-gray-900">
										Fabric &amp; Care
									</h2>

									<div className="prose prose-sm mt-4 text-gray-500">
										<ul role="list">
											{product.details.map((item) => (
												<li key={item}>{item}</li>
											))}
										</ul>
									</div>
								</div>

								<form className="mt-8">
									<Button
										radius="full"
										size="lg"
										fullWidth={true}
										className="font-medium"
										onClick={() =>
											handleAddToCart(productId.id)
										}
										isLoading={addCartLoading}
									>
										{addCartLoading
											? "Processing"
											: "Add to Cart"}
									</Button>
								</form>

								{/* Policies */}
								<section
									aria-labelledby="policies-heading"
									className="mt-10"
								>
									<h2
										id="policies-heading"
										className="sr-only"
									>
										Our Policies
									</h2>

									<dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
										{policies.map((policy) => (
											<div
												key={policy.name}
												className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
											>
												<dt>
													<policy.icon
														className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
														aria-hidden="true"
													/>
													<span className="mt-4 text-sm font-medium text-gray-900">
														{policy.name}
													</span>
												</dt>
												<dd className="mt-1 text-sm text-gray-500">
													{policy.description}
												</dd>
											</div>
										))}
									</dl>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
