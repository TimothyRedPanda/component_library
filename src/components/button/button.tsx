import { easeInOut, motion } from "framer-motion";
import styled from "styled-components";
import panda from "../../../panda.config.json";

<<<<<<< HEAD
const buttonTransition = { transition: 0.25, ease: "easeInOut" };
const buttonVariants = {
	y: -5,
	backgroundColor: "hsl(22, 65%, 60%)",
	color: "hsl(0, 0%, 95%)",
};
=======
const RedPandaBtn = styled(motion.button)`
	 background-color: ${panda.color.primary};
    border: 2px solid ${panda.color.secondary};
    border-radius: 3rem;
    cursor: pointer;
    font-size: 1.5rem;
    padding: ${panda.box.padding};
    white-space: nowrap;
`;
>>>>>>> development

function Button(props: { text: string; onClick: () => void }) {
	return (
		<>
			<RedPandaBtn
				onClick={props.onClick}
				className="styledBtn"
				whileHover={{
					y: "-10px",
					backgroundColor: `${panda.color.secondary}`,
					color: `${panda.color.primary}`,
				}}
				transition={{ duration: 0.35, ease: easeInOut }}
				whileTap={{ scale: 0.95 }}
			>
				{props.text}
			</RedPandaBtn>
		</>
	);
}

export default Button;
