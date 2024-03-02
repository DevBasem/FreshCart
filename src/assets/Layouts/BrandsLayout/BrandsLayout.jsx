import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import Brands from "../../Containers/Brands/Brands";
import "./BrandsLayout.css";

export default function BrandsLayout() {
	ScrollToTop();

	return (
		<div>
			<Brands />
		</div>
	);
}
