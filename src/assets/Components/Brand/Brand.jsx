import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Card,
	CardBody,
	CardHeader,
	Image,
	Button,
	useDisclosure,
} from "@nextui-org/react";
import "./Brand.css";

export default function Brand({ brandName, brandImage }) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<Card className="py-4 hover:transition-all hover:shadow-2xl">
				<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
					<h2 className="font-bold text-large">{brandName}</h2>
				</CardHeader>

				<button onClick={onOpen}>
					<CardBody className="overflow-visible h-full py-2">
						<Image
							alt="Card background"
							className="z-0 object-contain rounded-xl"
							src={brandImage}
						/>
					</CardBody>
				</button>
			</Card>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								{brandName}
							</ModalHeader>
							<ModalBody>
								<div className="flex justify-center">
									<Image
										alt="Card background"
										className="z-0 object-contain rounded-xl"
										src={brandImage}
									/>
								</div>
								<p>
									Magna exercitation reprehenderit magna aute
									tempor cupidatat consequat elit dolor
									adipisicing. Mollit dolor eiusmod sunt ex
									incididunt cillum quis. Velit duis sit
									officia eiusmod Lorem aliqua enim laboris do
									dolor eiusmod. Et mollit incididunt nisi
									consectetur esse laborum eiusmod pariatur
									proident Lorem eiusmod et. Culpa deserunt
									nostrud ad veniam.
								</p>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="light"
									onPress={onClose}
								>
									Close
								</Button>
								<Button color="primary" onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
