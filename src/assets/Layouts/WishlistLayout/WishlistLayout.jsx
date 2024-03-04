import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import Wishlist from "../../Containers/Wishlist/Wishlist";
import "./WishlistLayout.css";

export default function WishlistLayout() {
	ScrollToTop();

	return (
		<>
			<Wishlist />
		</>
	);
}
