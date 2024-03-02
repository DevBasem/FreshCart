import { MainNav } from "../../Components/MainNav/MainNav.jsx";
import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer.jsx";

export default function HomeLayout() {
	return (
		<>
			<MainNav />
			<div className="bottom-16 rounded-full translate-x-1/2"></div>
			<Toaster position="bottom-center" richColors />
			<Outlet />
			<Footer />
		</>
	);
}
