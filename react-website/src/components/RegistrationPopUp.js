import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RegistrationPopUp.css";
import "./awsbtn.css";
import { phoneNumberAutoFormat } from "./phoneNumberAutoFormat";

export default function RegistrationPopUp() {
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
		setFirstName("");
		setLastName("");
		setDOB("");
		setEmail("");
		setPassword("");
		setLicense("");
		setPhone("");
	};

	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [dob, setDOB] = useState(new Date());
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [drivers_license, setLicense] = useState("");
	const [phone, setPhone] = useState("");

	const [success, setSuccess] = useState(false);

	return (
		<>
			<button onClick={toggleModal} className="btn-modal">
				Register
			</button>

			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay2"></div>

					<div className="modal-content">
						<div className="modal-header">
							<h2>Create Account</h2>
						</div>
						<form className="registrationForm">
							<input
								type="text"
								placeholder="First Name"
								value={first_name}
								onChange={(e) =>
									setFirstName(e.target.value.replace(/[^a-zA-Z]/gi, ""))
								}
								required
							/>
							<input
								type="text"
								placeholder="Last Name"
								value={last_name}
								onChange={(e) =>
									setLastName(e.target.value.replace(/[^a-zA-Z]/gi, ""))
								}
								required
							/>
							<div className="datePicker">
								<DatePicker
									fixedHeight
									placeholderText="Date Of Birth (MM/DD/YYYY)"
									selected={dob}
									onChange={(e) => {
										setDOB(
											e.toLocaleDateString("en-US", {
												year: "numeric",
												month: "2-digit",
												day: "2-digit",
											})
										);
									}}
									showYearDropdown
									dateFormatCalendar="MMMM"
									yearDropdownItemNumber={150}
									scrollableYearDropdown
									maxDate={new Date()}
									required
								/>
							</div>
							<input
								type="text"
								placeholder="Email"
								value={email}
								onChange={(e) =>
									setEmail(e.target.value.replace(/[^a-zA-Z0-9\-+~_@.]/gi, ""))
								}
								required
							/>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<input
								type="text"
								placeholder="Driver's License Number"
								value={drivers_license}
								onChange={(e) =>
									setLicense(e.target.value.replace(/[^a-zA-Z0-9]/gi, ""))
								}
								required
							/>
							<input
								type="tel"
								placeholder="Phone Number"
								value={phone}
								onChange={(e) =>
									setPhone(phoneNumberAutoFormat(e.target.value))
								}
								maxLength={12}
							/>
						</form>
						<div className="registerBtn">
							<AwesomeButtonProgress
								type="primary"
								onPress={async (call, next) => {
									const response = await fetch("/register", {
										method: "POST",
										headers: {
											"Content-Type": "application/json",
										},
										body: JSON.stringify({
											first_name,
											last_name,
											dob,
											email,
											password,
											drivers_license,
											phone,
										}),
									});
									if (response.ok) {
										setTimeout(() => {
											next(true, "Created!");
										}, 1000);
										setSuccess(true);
									} else {
										setTimeout(() => {
											next(false, response.get("statusText"));
										}, 1000);
									}
									if (success) {
										// if registration was successful, redirect user to homepage.
									}
								}}
							>
								Create Account
							</AwesomeButtonProgress>
						</div>
						<div className="close-modal" onClick={toggleModal}>
							<FontAwesomeIcon icon={faRectangleXmark} size="xl" />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
