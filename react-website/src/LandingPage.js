// LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import carImage from "./car.png";

const LandingPage = () => {
	return (
		<div className="container">
			<div className="left-div">
				<h1>Toyota Haven</h1>
				<p>
					Welcome to Toyota Haven, where you can find a wide variety of Toyota
					vehicles to suit your needs.
				</p>
				<Link to="/vehicles">
					<button>Browse</button>
				</Link>
			</div>
			<div className="right-div">
				<img src={carImage} alt="Car" />
			</div>
		</div>
	);
};

export default LandingPage;
