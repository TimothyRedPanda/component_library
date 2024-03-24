import { motion } from "framer-motion";
import "./fileupload.scss";

const inputTransition = { transition: 0.25, ease: "easeInOut" };
const inputVariants = { y: -5, backgroundColor: "#db8758", color: "#fff" };
function FileUpload(props: {
	accepts?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	uploadText: string;
}) {
	return (
		<motion.label
			className="file-label"
			htmlFor="fileUpload"
			whileHover={inputVariants}
			transition={inputTransition}
			whileTap={{ scaleX: 0.95 }}
		>
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
