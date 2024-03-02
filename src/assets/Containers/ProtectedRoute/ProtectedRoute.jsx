import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import "./ProtectedRoute.css";

export default function ProtectedRoute({ children }) {
	const token = Cookies.get("loginToken");
	const isAuthenticated = !!token;

	try {
		jwtDecode(token);
	} catch (error) {
		Cookies.remove("loginToken");
		return <Navigate to="/Signin" />;
	}

	if (isAuthenticated) return children;
	return <Navigate to="/Signin" />;
}
