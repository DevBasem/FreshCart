import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import "./Category.css";

export default function Category({ categoryTitle, categoryImage }) {
	return (
		<div className="categorie w-fit flex gap-6 flex-col items-center">
			<Card className="py-4 mx-2 my-2 hover:transition-all hover:shadow-2xl">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<h2 className="font-bold text-base">{categoryTitle}</h2>
				</CardHeader>

				<CardBody className="overflow-visible py-2">
					<Image
						alt={categoryTitle}
						className="z-0 w-full h-full object-cover aspect-ratio-img rounded-xl"
						src={categoryImage}
					/>
				</CardBody>
			</Card>
		</div>
	);
}
