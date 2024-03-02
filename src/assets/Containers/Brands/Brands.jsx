import { useQuery } from "react-query";
import UniversalLoading from "../../Components/UniversalLoading/UniversalLoading";
import Brand from "../../Components/Brand/Brand";
import "./Brands.css";

export default function Brands() {
	async function getAllBrands() {
		try {
			const response = await fetch(
				"https://ecommerce.routemisr.com/api/v1/brands",
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

	const { data: allBrands, isLoading } = useQuery("allBrands", getAllBrands);

	if (isLoading) return <UniversalLoading />;

	return (
		<div className="py-8">
			<div className="px-6 w-fit mb-8">
				<h2 className="text-2xl font-semibold text-gray-800">
					All Brands
				</h2>
				<div className="title-bar__products mt-1"></div>
			</div>
			<div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-3 lg-md:grid-cols-4">
				{allBrands?.map((item) => (
					<Brand
						key={item._id}
						brandName={item.name}
						brandImage={item.image}
						brandId={item._id}
					/>
				))}
			</div>
		</div>
	);
}
