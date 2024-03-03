import { Outlet } from "react-router-dom";
import "./AuthLayout.css";

export default function AuthLayout() {
	return (
		<div className="h-screen bg-gradient-to-r from-slate-100 via-slate-300 to-green-300 background-animate">
			<Outlet />
		</div>
	);
}
