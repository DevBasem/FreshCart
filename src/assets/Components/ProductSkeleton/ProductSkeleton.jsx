import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Skeleton,
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";
import productImage from "../../Images/categorie-images/test1.jpeg";
import "./ProductSkeleton.css";

export default function ProductSkeleton() {
	return (
		<>
			<Card className="py-4 w-fit hover:transition-all hover:shadow-2xl">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<Skeleton className="rounded-lg mb-1">
						<p className="text-tiny uppercase font-bold">DEFACTO</p>
					</Skeleton>

					<Skeleton className="rounded-lg mb-1">
						<small className="text-default-500">4871 sold</small>
					</Skeleton>

					<Skeleton className="rounded-lg mb-1">
						<h4 className="font-bold text-large">Woman Shawl</h4>
					</Skeleton>

					<div className="flex justify-between w-full">
						<Skeleton className="rounded-lg mb-1">
							<div>
								<p className="font-medium">149 EGP</p>
							</div>
						</Skeleton>
						<Skeleton className="rounded-lg mb-1">
							<div className="flex items-center gap-1 font-medium">
								<p>4.8</p>
								<FaStar className="text-yellow-400" />
							</div>
						</Skeleton>
					</div>
				</CardHeader>

				<CardBody className="overflow-visible py-2">
					<Skeleton className="rounded-lg mb-1">
						<Image
							alt="Card background"
							className="object-contain rounded-xl"
							src={productImage}
						/>
					</Skeleton>
				</CardBody>

				<CardFooter>
					<Skeleton className="rounded-lg mb-1">
						<Button
							radius="full"
							size="lg"
							fullWidth={true}
							className="font-medium"
						>
							Add to Cart
						</Button>
					</Skeleton>
				</CardFooter>
			</Card>
		</>
	);
}
