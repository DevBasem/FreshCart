import { HeroSlider } from "../../Components/HeroSlider/HeroSlider.jsx";
import Categories from "../../Containers/Categories/Categories.jsx";
import Products from "../../Containers/Products/Products.jsx";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop.jsx";
import "./HomeLayout.css";

export default function HomeLayout() {
	ScrollToTop();

	return (
		<>
			<HeroSlider />
			<Categories />
			<Products />
		</>
	);
}
