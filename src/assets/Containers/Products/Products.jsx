/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "react-query";
import Product from "../../Components/Product/Product";
import ProductSkeleton from "../../Components/ProductSkeleton/ProductSkeleton";
import "./Products.css";

export default function Products() {
	async function getAllProducts() {
		try {
			const response = await fetch(
				"https://ecommerce.routemisr.com/api/v1/products",
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
			return responseData.data;
		} catch (error) {
			console.error("Failed to fetch data:", error.message);
			throw error;
		}
	}

	const { data: allProducts, isLoading } = useQuery(
		"allProducts",
		getAllProducts
	);

	return (
		<div className="py-8">
			<div className="px-6 w-fit mb-8">
				<h2 className="text-2xl font-semibold text-gray-800">
					All Products
				</h2>
				<div className="title-bar__products mt-1"></div>
			</div>
			<div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-3 lg-md:grid-cols-4">
				{isLoading
					? // Display skeletons 10 while products are loading
					  Array.from({ length: 10 }).map((_, index) => (
							<ProductSkeleton key={index} />
					  ))
					: // Display actual products when they are loaded
					  allProducts.map((item) => (
							<Product
								key={item._id}
								productTitle={item.title}
								productBrand={item.brand.name}
								productSold={item.sold}
								productPrice={item.price}
								productRating={item.ratingsAverage}
								productImage={item.imageCover}
								ProductId={item._id}
							/>
					  ))}
			</div>
		</div>
	);
}
