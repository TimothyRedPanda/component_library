import { motion } from "framer-motion";
import { useState } from "react";
import { Button, SlideButton } from "../../components";
import "./webcam.scss";

function Webcam(props: {
	width: number;
}) {
	const [isOpen, setIsOpen] = useState(false);
	function closeCam() {
		const video = document.getElementById("videoCam") as HTMLVideoElement;
		if ("srcObject" in video) {
			video.srcObject = null;
			setIsOpen(false);
		}
	}
	function stopAudio() {
		const video = document.getElementById("videoCam") as HTMLVideoElement;
		const audioTracks = (video.srcObject as MediaStream).getAudioTracks();
		for (const track of audioTracks) {
			if (track.enabled) {
				track.enabled = false;
			} else {
				track.enabled = true;
			}
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
		<main className="webcam-container">
			<motion.video
				id="videoCam"
				autoPlay
				width={props.width}
				animate={{
					scaleY: isOpen ? 1 : 0,
					backgroundColor: isOpen ? "#000" : "#fff",
					scaleX: isOpen ? 1 : 0,
				}}
				transition={{ duration: 0.35 }}
			>
				<track kind="captions" />
			</motion.video>

			<div className="button-container">
				<Button text="Open Webcam" onClick={openCam} />
				<Button text="Close Webcam" onClick={closeCam} />
			</div>
			<SlideButton onClick={stopAudio} />
		</main>
	);
}

export default Webcam;
