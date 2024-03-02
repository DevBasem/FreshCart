import { useEffect } from "react";

export default function ScrollToTop() {
	useEffect(() => {
		window.scrollTo(0, 0);

		return () => {
			window.scrollTo(0, 0);
		};
	}, []);
}
