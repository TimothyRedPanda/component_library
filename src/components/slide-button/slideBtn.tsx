import React, { useState } from "react";
import { motion } from "framer-motion";
import "./slideBtn.scss";

function slideBtn() {
	const [isOn, setIsOn] = useState(false);
	const toggleSwitch = () => {
		setIsOn(!isOn);
	};

	const switchTransition = {
		duration: 0.35,
		ease: "easeInOut",
	};

	return (
		<>
			<motion.div
				className="slideContainer"
				data-isOn={isOn}
				onClick={toggleSwitch}
				animate={{
					backgroundColor: isOn ? "#fce7d2" : "#9c1a04",
				}}
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
