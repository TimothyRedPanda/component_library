import { motion } from "framer-motion";
import "./imagePreview.scss";

function ImagePreview(props: {
	image: string;
	alt: string;
	width: string;
	height?: string;
}) {
	return (
		<>
			<motion.img
				whileHover={{
					transition: { duration: 0.35 },
					scale: 1.2,
				}}
				className="image-preview"
				src={props.image}
				alt={props.alt}
				style={{ width: `${props.width}`, height: `${props.height}` }}
			/>
		</>
	);
}

export default ImagePreview;
