import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./onyx.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">OnyxSoft</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./logo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">KIC</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
