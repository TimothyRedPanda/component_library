import { motion } from "framer-motion";
import "./button.scss";

const buttonText = "Button";
const buttonTransition = { transition: 0.25, ease: "easeInOut" };
const buttonVariants = { y: -5, backgroundColor: "#db8758", color: "#fff" };

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
