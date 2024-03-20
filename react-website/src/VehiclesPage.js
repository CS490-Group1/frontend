// VehiclesPage.js
import React from "react";
import "./VehiclesPage.css"; // Import the CSS file
// Import your car images
import carImage1 from "./cars/car1.png";
import carImage2 from "./cars/car2.png";
import carImage3 from "./cars/car3.png";
import carImage4 from "./cars/car4.png";
import carImage5 from "./cars/car5.png";
import carImage6 from "./cars/car6.png";

const VehiclesPage = () => {
	// Hardcoded data for 6 cars
	const vehicles = [
		{
			name: "Car 1",
			description: "This is car 1",
			image: carImage1,
			filter: {
				bodyStyle: "Sedan",
				model: "Model 1",
				mpg: "30",
				exteriorColor: "Red",
				fuelType: "Gasoline",
				price: "$20000",
				interiorColor: "Black",
			},
		},
		{
			name: "Car 2",
			description: "This is car 2",
			image: carImage2,
			filter: {
				bodyStyle: "SUV",
				model: "Model 2",
				mpg: "25",
				exteriorColor: "Blue",
				fuelType: "Diesel",
				price: "$25000",
				interiorColor: "Grey",
			},
		},
		{
			name: "Car 3",
			description: "This is car 3",
			image: carImage3,
			filter: {
				bodyStyle: "Sedan",
				model: "Model 3",
				mpg: "35",
				exteriorColor: "White",
				fuelType: "Gasoline",
				price: "$30000",
				interiorColor: "Black",
			},
		},
		{
			name: "Car 4",
			description: "This is car 4",
			image: carImage4,
			filter: {
				bodyStyle: "SUV",
				model: "Model 4",
				mpg: "20",
				exteriorColor: "Black",
				fuelType: "Diesel",
				price: "$35000",
				interiorColor: "White",
			},
		},
		{
			name: "Car 5",
			description: "This is car 5",
			image: carImage5,
			filter: {
				bodyStyle: "Sedan",
				model: "Model 5",
				mpg: "40",
				exteriorColor: "Green",
				fuelType: "Gasoline",
				price: "$40000",
				interiorColor: "Black",
			},
		},
		{
			name: "Car 6",
			description: "This is car 6",
			image: carImage6,
			filter: {
				bodyStyle: "SUV",
				model: "Model 6",
				mpg: "30",
				exteriorColor: "Yellow",
				fuelType: "Diesel",
				price: "$45000",
				interiorColor: "Grey",
			},
		},
	];

	return (
		<div className="vehicles-container">
			<div className="filter-div">
				<h2>Filter</h2>
				<form>
					<label>
						Body Style:
						<select>
							<option value="Sedan">Sedan</option>
							<option value="SUV">SUV</option>
						</select>
					</label>
					<label>
						Model:
						<input type="text" />
					</label>
					<label>
						MPG:
						<input type="number" />
					</label>
					<label>
						Exterior Color:
						<input type="text" />
					</label>
					<label>
						Fuel Type:
						<select>
							<option value="Gasoline">Gasoline</option>
							<option value="Diesel">Diesel</option>
						</select>
					</label>
					<label>
						Price:
						<input type="number" />
					</label>
					<label>
						Interior Color:
						<input type="text" />
					</label>
					{/* Add more filters as needed */}
				</form>
			</div>
			<div className="vehicles-div">
				{vehicles.map((vehicle) => (
					<div className="vehicle-card" key={vehicle.name}>
						<img src={vehicle.image} alt="Car" />
						<h3>{vehicle.name}</h3>
						<p>{vehicle.description}</p>
						<p>{vehicle.filter.bodyStyle}</p>
						<p>{vehicle.filter.model}</p>
						<p>{vehicle.filter.mpg}</p>
						<p>{vehicle.filter.exteriorColor}</p>
						<p>{vehicle.filter.fuelType}</p>
						<p>{vehicle.filter.price}</p>
						<p>{vehicle.filter.interiorColor}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default VehiclesPage;
