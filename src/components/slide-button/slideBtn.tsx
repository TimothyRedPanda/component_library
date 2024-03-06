import { motion } from "framer-motion";
import React, { useState } from "react";
import "./slideBtn.scss";

function SlideButton() {
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
					backgroundColor: isOn ? "#fff" : "#db8758",
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

export default SlideButton;
