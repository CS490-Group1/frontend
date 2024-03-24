import {
	faCircleXmark,
	faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
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
							<h2>Logging In</h2>
						</head>
						<div className="loginForm">
							<input
								className="emailInput"
								type="text"
								placeholder="Email"
							></input>
							<input type="text" placeholder="Password"></input>
							<button className="loginBtn">Log In</button>
						</div>
						<div className="close-modal" onClick={toggleModal}>
							<FontAwesomeIcon icon={faRectangleXmark} size="xl" />
						</div>
						{/* <button className="close-modal" onClick={toggleModal}>
							X
						</button> */}
					</div>
				</div>
			)}
		</>
	);
}
