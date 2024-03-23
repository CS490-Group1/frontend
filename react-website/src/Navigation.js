// Navigation.js
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import logo from "./logo.png";

const Navigation = () => {
	const location = useLocation();

	return (
		<nav>
			<ul className="navbar">
				<li className="navbar-item logo">
					<img src={logo} alt="Logo" />
				</li>
				<li className="navbar-item">
					<NavLink
						to="/myaccount"
						className={location.pathname === "/myaccount" ? "active" : ""}
					>
						My Account <span></span>
					</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink
						to="/services"
						className={location.pathname === "/services" ? "active" : ""}
					>
						Services <span></span>
					</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink
						to="/parts"
						className={location.pathname === "/parts" ? "active" : ""}
					>
						Parts <span></span>
					</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink
						to="/vehicles"
						className={location.pathname === "/vehicles" ? "active" : ""}
					>
						Vehicles <span></span>
					</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
						Home <span></span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
