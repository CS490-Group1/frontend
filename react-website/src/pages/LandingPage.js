import runner from "../cars/runner.png";
import sequoia from "../cars/sequoia.png";
import supra from "../cars/supra.png";
import tundra from "../cars/tundra.png";
import LoginPopUp from "../components/LoginPopUp";
import RegistrationPopUp from "../components/RegistrationPopUp";
import "./LandingPage.css";

export default function LandingPage() {
	return (
		<div className="_00Landing__00Landing">
			<div className="HeadingFrame">
				<span className="Heading">Toyota Haven</span>
				<span className="Description">Step into your ultimate vehicle</span>
			</div>
			<div className="ImageFrame">
				<img className="_04_sequoia1" src={sequoia} alt="" />
				<img className="_03_4runner1" src={runner} alt="" />
				<img className="_02_tundra1" src={tundra} alt="" />
				<img className="_01_grSupra1" src={supra} alt="" />
				<div className="RegisterFrame">
					<RegistrationPopUp />
				</div>
				<div className="LogInFrame">
					<LoginPopUp />
				</div>
			</div>
		</div>
	);
}
