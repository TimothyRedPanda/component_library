import { motion } from "framer-motion";
import { useState } from "react";
import SvgComponent from "./fileIcon";
import styled from "styled-components";
import panda from "../../../panda.config.json";

const inputTransition = { transition: 0.25, ease: "easeInOut" };
const inputVariants = {
	y: -5,
	backgroundColor: `${panda.color.secondary}`,
	color: `${panda.color.primary}`,
};

function FileUpload(props: {
	accepts?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	uploadText: string;
	width?: string;
}) {
	const [isHovered, setIsHovered] = useState(false);
	const FileLabel = styled(motion.label)`
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    background: ${panda.color.secondary};
    padding: 1%;
    color: ${panda.color.primary};
    border: 2px solid ${panda.color.secondary};
    border-radius: ${panda.box.radiusLarge};
    cursor: pointer;
`;
	const StyledInput = styled.input`
    display: none;
	padding: 2rem;
	`;
	return (
		<FileLabel
			htmlFor="fileUpload"
			onMouseOver={() => {
				setIsHovered(true);
			}}
			onMouseOut={() => {
				setIsHovered(false);
			}}
			whileHover={inputVariants}
			transition={inputTransition}
			whileTap={{ scaleX: 0.95 }}
		>
			<div className="file-icon">
				<SvgComponent width={props.width} isHovered={isHovered} />
			</div>
			{props.uploadText}
			<StyledInput
				id="fileUpload"
				type="file"
				accept={props.accepts}
				onChange={props.onChange}
			/>
		</FileLabel>
	);
}

export default FileUpload;
