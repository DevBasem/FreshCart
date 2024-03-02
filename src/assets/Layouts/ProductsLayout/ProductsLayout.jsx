import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import Products from "../../Containers/Products/Products";
import "./ProductsLayout.css";

export default function ProductsLayout() {
	ScrollToTop();

	return (
		<>
			<Products />
		</>
	);
}
