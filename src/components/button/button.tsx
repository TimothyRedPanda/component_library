import { easeInOut, motion, spring, transform } from "framer-motion";
import styled from "styled-components";
import panda from "../../../panda.config.json";

const RedPandaBtn = styled(motion.button)`
	 background-color: ${panda.primary};
    border: 2px solid ${panda.secondary};
    border-radius: 3rem;
    cursor: pointer;
    font-size: 1.5rem;
    padding: ${panda.padding};
    white-space: nowrap;
`;

function Button(props: { text: string; onClick: () => void }) {
	return (
		<>
			<RedPandaBtn
				onClick={props.onClick}
				className="styledBtn"
				whileHover={{
					y: "-10px",
					backgroundColor: `${panda.secondary}`,
					color: `${panda.primary}`,
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
