import { motion } from "framer-motion";
import panda from "../../../panda.config.json";
import styled from "styled-components";

const StyledImage = styled(motion.img)`
    border-radius: ${panda.box.borderRadius};
    border: 2px solid ${panda.color.secondary};
    object-fit: cover;
    -webkit-box-shadow: -4px 21px 51px -5px rgba(0,0,0,0.5);
    -moz-box-shadow: -4px 21px 51px -5px rgba(0,0,0,0.5);
    box-shadow: -4px 21px 51px -5px rgba(0,0,0,0.5);
`;
function ImagePreview(props: {
	image: string;
	alt: string;
	width: string;
}) {
	return (
		<>
			<StyledImage
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
