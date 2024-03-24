import "./imagePreview.scss";
import { easeInOut, motion } from "framer-motion";

function ImagePreview(props: {
	image: string;
	alt: string;
	width: string;
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
				style={{ width: `${props.width}` }}
			/>
		</>
	);
}

export default ImagePreview;
