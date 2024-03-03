import { motion } from "framer-motion";
import "./button.scss";

const buttonText = "Button";

function button() {
	return (
		<>
			<motion.button
				className="styledBtn"
				whileHover={{ y: -5, backgroundColor: "#9c1a04", color: "#fce7d2" }}
				transition={{ transition: 0.25 }}
				whileTap={{ scale: 0.98 }}
			>
				{buttonText}
			</motion.button>
		</>
	);
}

export default button;
