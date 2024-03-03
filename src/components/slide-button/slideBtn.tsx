import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import "./slideBtn.scss";

function slideBtn() {
	const [isOn, setIsOn] = useState(false);
	const toggleSwitch = () => {
		setIsOn(!isOn);
	};

	const switchTransition = {
		duration: 0.25,
		ease: "easeInOut",
	};

	return (
		<>
			<motion.div
				className="slideContainer"
				data-isOn={isOn}
				onClick={toggleSwitch}
			>
				<motion.button
					className="slideBtn"
					layout
					transition={switchTransition}
				/>
			</motion.div>
		</>
	);
}

export default slideBtn;
