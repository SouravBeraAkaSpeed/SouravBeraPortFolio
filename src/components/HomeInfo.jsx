import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
	<div className="info-box">
		<p className="font-medium sm:text-xl  text-center">{text}</p>
		<Link className="neo-brutalism-white neo-btn" to={link}>
			{btnText}
			<img src={arrow} className="w-4 h-4 object-contain" />
		</Link>
	</div>
);
const renderObject = {
	1: (
		<h1
			className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue
                py-4 px-8 text-white mx-5"
		>
			Hi, I am <span className="font-semibold">Sourav Bera</span>👋
			<br />A Full Stack Web and App Developer with expertise in AI/ML and
			Blockchain from India
		</h1>
	),
	2: (
		<InfoBox
			text="worked with many companies and picked up my skills along the way"
			link="/about"
			btnText="Learn More"
		/>
	),
	3: (
		<InfoBox
			text="Led multiple projects to success over the years . Curious about the impact?"
			link="/projects"
			btnText="Visit my portfolio"
		/>
	),
	4: (
		<InfoBox
			text="Need a project done or looking for a dev? My Software developement company is just
            a few keystrokes away"
			link="/contact"
			btnText="Let's talk"
		/>
	),
};

const HomeInfo = ({ currentStage }) => {
	return renderObject[currentStage] || null;
};

export default HomeInfo;
