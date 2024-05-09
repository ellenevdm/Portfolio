import "./navigation.scss";

import React, { useState } from "react";

import Button from "./Button.jsx";
import ContactModal from "../Contact/ContactSection.jsx";
import { Icon } from "@iconify/react";
import { NAVLINKS } from "../../data/data.js";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	const [mobile, setMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	function toggleModal() {
		setIsOpen(!isOpen);
	}

	return (
		<header className="header">
			<nav className="nav ">
				<h3 className="nav-logo">Ellené Van Der Meijden</h3>
				<div className="container">
					<div
						className={`nav-list ${mobile ? "nav-list-opened" : ""}`}
						onClick={() => setMobile(false)}
					>
						{NAVLINKS.map((link) => (
							<div key={link.id}>
								<NavLink
									to={link.path}
									className={`${link.className} ${
										mobile ? "nav-link-opened" : undefined
									} ${({ isActive }) => (isActive ? "active" : undefined)}
								`}
								>
									{link.name}
								</NavLink>
							</div>
						))}
						<Button
							className={`nav-link contact-button ${
								mobile ? "nav-link-opened" : undefined
							}`}
							onClick={toggleModal}
							text="CONTACT"
							primary={mobile ? false : true}
						/>

						{isOpen && (
							<ContactModal
								hideModal={toggleModal}
								isOpen={isOpen}
							/>
						)}
					</div>

					<Button
						className="menu-button"
						onClick={() => setMobile(!mobile)}
						icon={mobile ? "ic:round-close" : "ic:round-menu"}
						text=""
						primary
					/>
					{/* {mobile ? (
							<Icon
								icon="ic:round-close"
								width="1.2em"
								height="1.2em"
							/>
						) : (
							<Icon
								icon="ic:round-menu"
								width="1.2em"
								height="1.2em"
							/>
						)}
					</Button> */}
				</div>
			</nav>
		</header>
	);

	// return (
	// 	<nav className="nav container">
	// 		<h1 className="nav-Logo">Ellené van der Meijden</h1>

	// 		{isMobile && !isMenuOpen && (
	// 			<div
	// 				className="nav-toggle"
	// 				id="nav__toggle"
	// 				onClick={toggleMenu}
	// 			>
	// 				<Icon icon="icon-park-outline:application-menu" />
	// 			</div>
	// 		)}

	// 		{isMobile && isMenuOpen && (
	// 			<div
	// 				className={`nav-menu ${isMenuOpen ? "show-menu" : ""}`}
	// 				id="nav__menu"
	// 			>
	// 				<ul className="nav-list-mobile">
	// 					{NAVLINKS.map((link) => (
	// 						<li key={link.id}>
	// 							<NavLink
	// 								to={link.path}
	// 								className={({ isActive }) =>
	// 									isActive ? "mobile-active" : "mobile-link"
	// 								}
	// 								onClick={closeMobileMenu}
	// 								end
	// 							>
	// 								{link.name}
	// 							</NavLink>
	// 						</li>
	// 					))}
	// 				</ul>
	// 				<div
	// 					className="nav-close"
	// 					id="nav__close"
	// 					onClick={toggleMenu}
	// 				>
	// 					<Icon icon="icon-park-outline:close" />
	// 				</div>
	// 			</div>
	// 		)}
	// 		{!isMobile && (
	// 			<ul className="nav-list">
	// 				{NAVLINKS.map((link) => (
	// 					<li key={link.id}>
	// 						<NavLink
	// 							to={link.path}
	// 							className={({ isActive }) => (isActive ? "active" : "nav-link")}
	// 							end
	// 						>
	// 							{link.name}
	// 						</NavLink>
	// 					</li>
	// 				))}
	// 			</ul>
	// 		)}
	// 	</nav>
	// );
}
