import { motion } from "framer-motion";
import { useState } from "react";
import SvgComponent from "./fileIcon";
import "./fileupload.scss";

const inputTransition = { transition: 0.25, ease: "easeInOut" };
const inputVariants = { y: -5, backgroundColor: "#db8758", color: "#fff" };
function FileUpload(props: {
	accepts?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	uploadText: string;
}) {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<motion.label
			className="file-label"
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
				<SvgComponent isHovered={isHovered} />
			</div>
			{props.uploadText}
			<input
				id="fileUpload"
				type="file"
				accept={props.accepts}
				onChange={props.onChange}
			/>
		</motion.label>
	);
}

export default FileUpload;
