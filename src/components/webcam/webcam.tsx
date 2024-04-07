import { motion } from "framer-motion";
import { useState } from "react";
import { SlideButton } from "../../components";
import styled from "styled-components";
import panda from "../../../panda.config.json";

const VideoCam = styled(motion.video)`
 	aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 2rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border: ${panda.color.secondary} solid 2px;
    transition: all 0.35s ease-in-out;
`;

const ButtonContainer = styled.div`
  	display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

function Webcam(props: {
	width: number;
	height?: number;
}) {
	const [isOpen, setIsOpen] = useState(false);
	function closeCam() {
		const video = document.getElementById("videoCam") as HTMLVideoElement;
		if ("srcObject" in video) {
			video.srcObject = null;
			setIsOpen(false);
		}
	}
	function openCam() {
		const All_mediaDevices = navigator.mediaDevices;
		All_mediaDevices.getUserMedia({
			audio: true,
			video: true,
		})
			.then((vidStream) => {
				const video = document.getElementById("videoCam") as HTMLVideoElement;
				if ("srcObject" in video) {
					video.srcObject = vidStream;
				}
				video.onloadedmetadata = () => {
					video.play();
					setIsOpen(true);
				};
			})
			.catch((err) => {
				alert("Can't access webcam");
				console.log(err);
			});
	}
	return (
		<ButtonContainer>
			<VideoCam
				id="videoCam"
				autoPlay
				width={props.width}
				height={props.height}
				animate={{
					scaleY: isOpen ? 1 : 0,
					backgroundColor: isOpen ? "#000" : "#fff",
					scaleX: isOpen ? 1 : 0,
				}}
				transition={{ duration: 0.35 }}
			>
				<track kind="captions" />
			</VideoCam>
			<div>
				<SlideButton onClick={isOpen ? closeCam : openCam} />
			</div>
		</ButtonContainer>
	);
}

export default Webcam;
