import "./mainNavigation.scss";

import Button from "../UI/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import { useState } from "react";

export default function MainNavigation() {
	const { openContactModal } = useModal();
	const [showNavMenu, setShowNavMenu] = useState(false);
	const handleShowNavMenu = () => {
		setShowNavMenu(!showNavMenu);
	};
	let linkClasses = "nav-link ";
	let navClasses = "nav-list ";

	if (showNavMenu) {
		linkClasses += "link-mobile ";
		navClasses += "menu-mobile ";
	}

	const getNavLinkClass = ({ isActive }) => {
		return isActive ? `${linkClasses} active` : linkClasses;
	};

	return (
		<header className="header">
			<nav className="nav-bar">
				<div className="logo">EVDM</div>
				<button
					onClick={handleShowNavMenu}
					className="menu-btn">
					<Icon icon={showNavMenu ? "ic:round-close" : "ic:round-menu"} />
				</button>

				<ul
					className={navClasses}
					onClick={handleShowNavMenu}>
					<li>
						<NavLink
							to="/"
							className={getNavLinkClass}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={getNavLinkClass}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/projects"
							className={getNavLinkClass}>
							Projects
						</NavLink>
					</li>
					<Button
					primary
						onClick={openContactModal}
						className={`contact-btn ${getNavLinkClass}`}>
						Contact
					</Button>
				</ul>
			</nav>
		</header>
	);
}
