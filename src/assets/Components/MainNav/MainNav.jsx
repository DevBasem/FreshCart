import React, { useEffect, useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Badge,
	Divider,
} from "@nextui-org/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initializeUserCartAsync } from "../../Store/cartSlice";
import { initializeWishListAsync } from "../../Store/wishlistSlice";
import Cookies from "js-cookie";
import { FreshCartLogo } from "./FreshCartLogo";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import "./MainNav.css";

export function MainNav() {
	const navigate = useNavigate();
	const cartCount = useSelector((state) => state.cart);
	const wishlistCount = useSelector((state) => state.wishlist);
	console.log("wishlistCount in MainNav:", wishlistCount);
	const dispatch = useDispatch();

	// Function to handle Cart navgiation
	const goToCart = () => {
		// Redirect to the Cart page
		navigate("/Cart");
	};

	// Function to handle Wishlist navgiation
	const goToWishlist = () => {
		// Redirect to the Wishlist page
		navigate("/Wishlist");
	};

	// Function to handle sign-out
	const signOut = () => {
		// Clear user authentication state
		localStorage.removeItem("isLoggedIn");
		Cookies.remove("loginToken");
		Cookies.remove("rememberMe");

		// Redirect to the sign-in page
		navigate("/Signin");
	};

	const location = useLocation();

	const [isMenuOpen, setIsMenuOpen] = React.useReducer(
		(current) => !current,
		false
	);

	const [justifyContent, setJustifyContent] = useState("center");

	useEffect(() => {
		const handleResize = () => {
			// Change the screen width threshold as needed
			const screenWidth = window.innerWidth;
			if (screenWidth <= 1024) {
				setJustifyContent("start");
			} else {
				setJustifyContent("center");
			}
		};

		const handleScroll = () => {
			// Close the menu only if it is currently open
			if (isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		// Initial setup
		handleResize();

		// Event listener for window resize
		window.addEventListener("resize", handleResize);

		// Event listener for scroll
		window.addEventListener("scroll", handleScroll);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isMenuOpen]);

	useEffect(() => {
		// Dispatch the initializeUserCartAndWishListData action when the component mounts
		dispatch(initializeUserCartAsync());
		dispatch(initializeWishListAsync());
	}, [dispatch]);

	const menuItems = ["Home", "Products", "Categories", "Brands"];

	return (
		<Navbar
			className="bg-slate-100 bg-opacity-50"
			maxWidth="full"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			shouldHideOnScroll="true"
		>
			<NavbarContent justify={justifyContent}>
				<NavbarBrand>
					<Link className="text-lg" color="foreground" href="/Home">
						<FreshCartLogo />
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden lg:flex gap-4" justify="center">
				<NavbarItem isActive={location.pathname === `/Home`}>
					<Link className="text-lg" color="foreground" href="/Home">
						Home
					</Link>
				</NavbarItem>
				<NavbarItem isActive={location.pathname === `/Products`}>
					<Link
						className="text-lg"
						color="foreground"
						href="/Products"
					>
						Products
					</Link>
				</NavbarItem>
				<NavbarItem isActive={location.pathname === `/Categories`}>
					<Link
						className="text-lg"
						color="foreground"
						href="/Categories"
					>
						Categories
					</Link>
				</NavbarItem>
				<NavbarItem isActive={location.pathname === `/Brands`}>
					<Link className="text-lg" color="foreground" href="/Brands">
						Brands
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="end">
				<div className="h-4/6">
					<Divider orientation="vertical" />
				</div>
				<NavbarItem>
					<a
						className="text-lg focus:outline-offset-4"
						color="foreground"
						href="https://www.instagram.com"
						target="_blank"
					>
						<FaInstagram />
					</a>
				</NavbarItem>
				<NavbarItem>
					<a
						className="text-lg focus:outline-offset-4"
						color="foreground"
						href="https://www.facebook.com"
						target="_blank"
					>
						<FaFacebook />
					</a>
				</NavbarItem>
				<NavbarItem>
					<a
						className="text-lg focus:outline-offset-4"
						color="foreground"
						href="https://www.tiktok.com"
						target="_blank"
					>
						<FaTiktok />
					</a>
				</NavbarItem>
				<NavbarItem>
					<a
						className="text-lg focus:outline-offset-4"
						color="foreground"
						href="https://www.twitter.com"
						target="_blank"
					>
						<FaTwitter />
					</a>
				</NavbarItem>
				<NavbarItem>
					<a
						className="text-lg focus:outline-offset-4"
						color="foreground"
						href="https://www.linkedin.com"
						target="_blank"
					>
						<FaLinkedin />
					</a>
				</NavbarItem>
				<NavbarItem>
					<a
						className="text-lg focus:outline-offset-4"
						color="foreground"
						href="https://www.youtube.com"
						target="_blank"
					>
						<FaYoutube />
					</a>
				</NavbarItem>
				<div className="h-4/6">
					<Divider orientation="vertical" />
				</div>
			</NavbarContent>

			<NavbarContent justify="center">
				<NavbarItem>
					<button
						className="focus:outline-offset-8"
						onClick={goToCart}
					>
						<Badge
							color={cartCount ? "success" : "default"}
							content={cartCount}
							size="sm"
							shape="rectangle"
							variant={cartCount ? "shadow" : "flat"}
							showOutline="false"
						>
							<FaCartPlus className="text-large me-2 mt-2" />
						</Badge>
					</button>
				</NavbarItem>
				<NavbarItem>
					<button
						className="focus:outline-offset-8"
						onClick={goToWishlist}
					>
						<Badge
							color={wishlistCount ? "danger" : "default"}
							content={wishlistCount}
							size="sm"
							shape="rectangle"
							variant={wishlistCount ? "shadow" : "flat"}
							showOutline="false"
						>
							<FaHeart className="text-large me-2 mt-2" />
						</Badge>
					</button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex" justify="center">
				<NavbarItem>
					<Button
						className="text-medium lg-md:-me-4 text-foreground-900`"
						color="danger"
						radius="large"
						onClick={signOut}
						variant="light"
					>
						Sign Out
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="center">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="h-10 lg-md:hidden"
				/>
			</NavbarContent>

			<NavbarMenu className="bg-slate-100 bg-opacity-50 overflow-y-hidden">
				{menuItems.map((item, index) => (
					<NavbarMenuItem
						key={`${item}-${index}`}
						isActive={location.pathname === `/${item}`}
					>
						<Link
							color="foreground"
							className="w-full"
							href={`/${item}`}
							size="lg"
							onPress={() => setIsMenuOpen()}
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}

				<ul className="flex flex-wrap gap-4">
					<NavbarMenuItem className="me-auto hidden max-sm:flex">
						<button
							className="w-full text-danger-500"
							onClick={signOut}
							size="lg"
						>
							Sign Out
						</button>
					</NavbarMenuItem>

					<ul className="hidden max-sm:flex gap-4">
						<NavbarMenuItem className="flex items-center">
							<a
								color="foreground"
								href="https://www.instagram.com"
								target="_blank"
							>
								<FaInstagram />
							</a>
						</NavbarMenuItem>

						<NavbarMenuItem className="flex items-center">
							<a
								color="foreground"
								href="https://www.facebook.com"
								target="_blank"
							>
								<FaFacebook />
							</a>
						</NavbarMenuItem>

						<NavbarMenuItem className="flex items-center">
							<a
								color="foreground"
								href="https://www.tiktok.com"
								target="_blank"
							>
								<FaTiktok />
							</a>
						</NavbarMenuItem>

						<NavbarMenuItem className="flex items-center">
							<a
								color="foreground"
								href="https://www.twitter.com"
								target="_blank"
							>
								<FaTwitter />
							</a>
						</NavbarMenuItem>

						<NavbarMenuItem className="flex items-center">
							<a
								color="foreground"
								href="https://www.linkedin.com"
								target="_blank"
							>
								<FaLinkedin />
							</a>
						</NavbarMenuItem>

						<NavbarMenuItem className="flex items-center">
							<a
								color="foreground"
								href="https://www.youtube.com"
								target="_blank"
							>
								<FaYoutube />
							</a>
						</NavbarMenuItem>
					</ul>
				</ul>
			</NavbarMenu>
		</Navbar>
	);
}
