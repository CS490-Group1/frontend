import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./RegistrationPopUp.css";

export default function RegistrationPopUp() {
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<>
			<button onClick={toggleModal} className="btn-modal">
				Register
			</button>

			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>

					<div className="modal-content">
						<head className="modal-header">
							<h2>Create Account</h2>
						</head>
						<div className="registrationForm">
							<input type="text" placeholder="First Name" />
							<input type="text" placeholder="Last Name" />
							<input
								type="text"
								placeholder="Date Of Birth (MM/DD/YYYY)"
								onfocus="(this.type = 'date')"
							/>
							<input type="text" placeholder="Email" />
							<input type="password" placeholder="Password" />
							<button className="registerBtn">Register</button>
						</div>
						<div className="close-modal" onClick={toggleModal}>
							<FontAwesomeIcon icon={faRectangleXmark} size="xl" />
						</div>

						{/* Alternative Close Button:
						<button className="close-modal" onClick={toggleModal}>
							X
						</button> */}
					</div>
				</div>
			)}
		</>
	);
}
