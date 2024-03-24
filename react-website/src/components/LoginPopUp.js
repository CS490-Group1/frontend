import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./LoginPopUp.css";

export default function LoginPopUp() {
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<>
			<button onClick={toggleModal} className="btn-modal">
				Log In
			</button>

			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>

					<div className="modal-content">
						<head className="modal-header">
							<h2>Log In</h2>
						</head>
						<form className="loginForm">
							<input type="text" placeholder="Email" />
							<input type="password" placeholder="Password" />
							<button className="loginBtn">Log In</button>
						</form>
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
