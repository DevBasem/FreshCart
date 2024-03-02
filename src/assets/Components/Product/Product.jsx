import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Spacer,
} from "@nextui-org/react";
import { Image as NextUIImage } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToUserCartAsync } from "../../Store/cartSlice";
import { addToUserWishListAsync } from "../../Store/wishlistSlice";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import "./Product.css";

export default function Product({
	productTitle,
	productBrand,
	productPrice,
	productRating,
	productSold,
	productImage,
	ProductId,
}) {
	const dispatch = useDispatch();
	const [addCartLoading, setaddCartLoading] = useState(false);
	const [addWishlistLoading, setaddWishlistLoading] = useState(false);

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

	const handleAddToWishlist = async (ProductId) => {
		// Set loading to true while waiting for the server response
		setaddWishlistLoading(true);

		try {
			// Dispatch the addToUserWishlistAsync action
			await dispatch(addToUserWishListAsync(ProductId));
		} finally {
			// Set loading to false regardless of success or failure
			setaddWishlistLoading(false);
		}
	};

	return (
		<>
			<Card className="py-4 hover:transition-all hover:shadow-2xl">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<p className="text-tiny uppercase font-bold">
						{productBrand}
					</p>
					<small className="text-default-500">
						{productSold} sold
					</small>
					<h4 className="font-bold text-large">
						{truncateTitle(productTitle, 3)}
					</h4>
					<div className="flex justify-between w-full">
						<div>
							<p className="font-medium">{productPrice} EGP</p>
						</div>
						<div className="flex items-center gap-1 font-medium">
							<p>{productRating}</p>
							<FaStar className="text-yellow-400" />
						</div>
					</div>
				</CardHeader>

				<Link to={"/Product_details/" + ProductId}>
					<CardBody className="overflow-visible py-2">
						<NextUIImage
							alt="Card background"
							className="z-0 object-contain aspect-ratio-img rounded-xl"
							src={productImage}
						/>
					</CardBody>
				</Link>

				<CardFooter>
					<Button
						radius="full"
						size="lg"
						fullWidth={true}
						className="font-medium"
						onClick={() => handleAddToCart(ProductId)}
						isLoading={addCartLoading}
					>
						{addCartLoading ? "Processing" : "Add to Cart"}
					</Button>
					<Spacer x={2} />
					<Button
						radius="full"
						size="lg"
						className="font-medium"
						onClick={() => handleAddToWishlist(ProductId)}
						isLoading={addWishlistLoading}
						isIconOnly
					>
						<FaHeart />
					</Button>
				</CardFooter>
			</Card>
		</>
	);
}
