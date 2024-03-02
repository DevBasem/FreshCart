/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "react-query";
import Slider from "react-slick";
import Category from "../../Components/Category/Category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Categories.css";

export default function Categories() {
	const settings = {
		slidesToShow: 5,
		slidesToScroll: 5,
		infinite: true,
		arrows: false,
		autoplay: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 685,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

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

	const { data: allCategories } = useQuery("allCategories", getAllCategories);

	return (
		<div className="mt-8">
			<div className="px-6 w-fit">
				<h2 className="text-2xl font-semibold text-gray-800">
					Today's Popular Categories
				</h2>
				<div className="title-bar mt-1"></div>
			</div>
			<Slider className="mt-4" {...settings}>
				{allCategories?.map((item) => (
					<div key={item._id} className="!flex justify-center">
						<Category
							categoryTitle={item.name}
							categoryImage={item.image}
							categoryId={item._id}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}
