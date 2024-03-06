import { motion } from "framer-motion";
import "./button.scss";

const buttonTransition = { transition: 0.25, ease: "easeInOut" };
const buttonVariants = { y: -5, backgroundColor: "#db8758", color: "#fff" };

function Button({ children }: { children: React.ReactNode }) {
	return (
		<>
			<motion.button
				className="styledBtn"
				whileHover={buttonVariants}
				transition={buttonTransition}
				whileTap={{ scale: 0.95 }}
			>
				{children}
			</motion.button>
		</>
	);
}

export default Button;
