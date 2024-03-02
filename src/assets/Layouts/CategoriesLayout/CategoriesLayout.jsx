import AllCategories from "../../Containers/AllCategories/AllCategories";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import "./CategoriesLayout.css";

export default function CategoriesLayout() {
	ScrollToTop();

	return (
		<div>
			<AllCategories />
		</div>
	);
}
