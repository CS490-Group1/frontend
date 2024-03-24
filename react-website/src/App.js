// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import AccountPage from "./pages/AccountPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import PartsPage from "./pages/PartsPage";
import ServicesPage from "./pages/ServicesPage";
import VehiclesPage from "./pages/VehiclesPage";

const App = () => {
	return (
		<Router>
			<Navigation />
			<Routes>
				{/* Homepage should path to "/home" and landing page should path to "/" once official landing page is established. */}
				<Route path="/landing" element={<LandingPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/vehicles" element={<VehiclesPage />} />
				<Route path="/parts" element={<PartsPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/myaccount" element={<AccountPage />} />
			</Routes>
		</Router>
	);
};

export default App;
