/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-unescaped-entities */
import Category from "../../Components/Category/Category";
import { useState } from "react";
import { useQuery } from "react-query";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import "./AllCategories.css";
import UniversalLoading from "../../Components/UniversalLoading/UniversalLoading";

export default function AllCategories() {
	const [searchQuery, setSearchQuery] = useState("");

	async function getAllCategories() {
		try {
			const response = await fetch(
				"https://ecommerce.routemisr.com/api/v1/categories",
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

	const { data: allCategories, isLoading } = useQuery(
		"allCategories",
		getAllCategories
	);

	const handleSearchInputChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const filteredCategories = allCategories
		? allCategories.filter((category) =>
				category.name.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: [];

	if (isLoading) return <UniversalLoading />;

	return (
		<div>
			<div className="py-8">
				<div className="px-6 mb-8 flex justify-between flex-wrap-reverse gap-4">
					<div>
						<h2 className="text-2xl font-semibold text-gray-800">
							All Categories
						</h2>
						<div className="title-bar__products mt-1"></div>
					</div>
					<div className="w-80">
						<Input
							label="Search"
							radius="md"
							placeholder="Type to search..."
							value={searchQuery}
							onChange={handleSearchInputChange}
							startContent={
								<SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
							}
						/>
					</div>
				</div>

				{filteredCategories.length === 0 && !isLoading ? (
					<div className="h-[30vh] grid place-content-center">
						<p className="font-medium text-2xl text-gray-500">
							<span>Category Not Found</span>
						</p>
					</div>
				) : (
					""
				)}

				<div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-3 lg-md:grid-cols-4">
					{filteredCategories.map((item) => (
						<Category
							key={item._id}
							categoryTitle={item.name}
							categoryImage={item.image}
							categoryId={item._id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
