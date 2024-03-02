/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import NotFoundErrorSvg from "../../Images/NotFound-image/error.svg";
import "./NotFound.css";

export default function NotFound() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<div className="flex justify-center">
						<img
							className="block w-100"
							src={NotFoundErrorSvg}
							alt="Page Not Found"
						/>
					</div>
					<p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
						Something's missing.
					</p>
					<p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
						Sorry, we can't find that page. You'll find lots to
						explore on the home page.{" "}
					</p>
					<Link
						to="/Home"
						className="inline-flex text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-lime-900 my-4"
					>
						Go Back
					</Link>
				</div>
			</div>
		</section>
	);
}
