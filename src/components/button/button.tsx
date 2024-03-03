import { motion } from "framer-motion";
import "./button.scss";

const buttonText = "Button";
const buttonTransition = { transition: 0.25, ease: "easeInOut" };
const buttonVariants = { y: -5, backgroundColor: "#9c1a04", color: "#fce7d2" };

function button() {
	return (
		<>
			<motion.button
				className="styledBtn"
				whileHover={buttonVariants}
				transition={buttonTransition}
				whileTap={{ scale: 0.95 }}
			>
				{buttonText}
			</motion.button>
		</>
	);
}

export default button;
