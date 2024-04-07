import { motion } from "framer-motion";
import "./button.scss";

const buttonTransition = { transition: 0.25, ease: "easeInOut" };
const buttonVariants = {
	y: -5,
	backgroundColor: "hsl(22, 65%, 60%)",
	color: "hsl(0, 0%, 95%)",
};

function Button(props: { text: string; onClick: () => void }) {
	return (
		<>
			<motion.button
				onClick={props.onClick}
				className="styledBtn"
				whileHover={buttonVariants}
				transition={buttonTransition}
				whileTap={{ scale: 0.95 }}
			>
				{props.text}
			</motion.button>
		</>
	);
}

export default Button;
