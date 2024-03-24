import React, { useState } from "react";
import "./LoginPopUp.css";

export default function Modal() {
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
						<div className="loginForm">
							<input
								className="emailInput"
								type="text"
								placeholder="Email"
							></input>
							<input type="text" placeholder="Password"></input>
							<button className="loginBtn">Log In</button>
						</div>
						<button className="close-modal" onClick={toggleModal}>
							X
						</button>
					</div>
				</div>
			)}
		</>
	);
}
