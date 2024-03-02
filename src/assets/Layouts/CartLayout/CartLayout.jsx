import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import Cart from "../../Containers/Cart/Cart";
import "./CartLayout.css";

export default function CartLayout() {
	ScrollToTop();
	return <Cart />;
}
