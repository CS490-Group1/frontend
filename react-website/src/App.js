// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import VehiclesPage from "./VehiclesPage";
import PartsPage from "./PartsPage";
import ServicesPage from "./ServicesPage";
import AccountPage from "./AccountPage";
import Navigation from "./Navigation";

const App = () => {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/vehicles" element={<VehiclesPage />} />
				<Route path="/parts" element={<PartsPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/myaccount" element={<AccountPage />} />
			</Routes>
		</Router>
	);
};

export default App;
