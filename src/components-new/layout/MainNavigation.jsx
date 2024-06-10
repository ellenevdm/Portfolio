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
	let navClasses = "nav-elements ";

	if (showNavMenu) {
		linkClasses += "link-mobile ";
		navClasses += "menu-mobile ";
	}

	const getNavLinkClass = ({ isActive }) => {
		return isActive ? `${linkClasses} active` : linkClasses;
	};

	return (
		<header className="header">
			<nav className="container">
				<div className="logo">EVDM</div>
				<Button
					onClick={handleShowNavMenu}
					className="">
					<Icon icon={showNavMenu ? "ic:round-close" : "ic:round-menu"} />
				</Button>

				<div className={navClasses}>
					<ul>
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
					</ul>
					<Button
						onClick={openContactModal}
						className={getNavLinkClass}>
						Contact
					</Button>
				</div>
			</nav>
		</header>
	);
}

