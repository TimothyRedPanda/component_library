import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import panda from "../../../panda.config.json";

const StyledSlideButton = styled(motion.div)`
    align-items: center;
    background-color: ${panda.color.secondary};
    border: 2px solid ${panda.color.primary};
    border-radius: 3rem;
    cursor: pointer;
    display: flex;
    height: 2rem;
    justify-content: flex-start;
    width: 4rem;

&[data-ison="true"] {
    justify-content: flex-end;
}`;

const StyledSlideBtn = styled(motion.div)`
    aspect-ratio: 1/1;
    background-color: ${panda.color.primary};
    border: 2px solid ${panda.color.secondary};
    border-radius: ${panda.box.radiusLarge};
    cursor: pointer;
    height: 100%;
    outline: none;`;

function SlideButton(props: { onClick?: () => void }) {
	const [on, setIsOn] = useState(false);
	const toggleSwitch = () => {
		setIsOn(!on);
	};

	const switchTransition = {
		duration: 0.35,
		ease: "easeInOut",
	};

	return (
		<>
			<StyledSlideButton
				className="slideContainer"
				data-ison={on}
				onClickCapture={props.onClick}
				onClick={toggleSwitch}
				animate={{
					backgroundColor: on
						? `${panda.color.secondary}`
						: `${panda.color.primary}`,
				}}
			>
				<StyledSlideBtn
					className="slideBtn"
					layout
					transition={switchTransition}
				/>
			</StyledSlideButton>
		</>
	);
}

export default SlideButton;
