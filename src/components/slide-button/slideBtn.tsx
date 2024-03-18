import { motion } from "framer-motion";
import React, { useState } from "react";
import "./slideBtn.scss";

function SlideButton() {
	const [on, setison] = useState(false);
	const toggleSwitch = () => {
		setison(!on);
	};

	const switchTransition = {
		duration: 0.35,
		ease: "easeInOut",
	};

	return (
		<>
			<motion.div
				className="slideContainer"
				data-ison={on}
				onClick={toggleSwitch}
				animate={{
					backgroundColor: on ? "#fff" : "#db8758",
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
