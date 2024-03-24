import {
	Button,
	Card,
	Input,
	SlideButton,
	FileUpload,
	ImagePreview,
} from "./components";
import { useState } from "react";
import "./index.scss";
function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [file, setFile] = useState<string | undefined>();
	function handleChange(event) {
		console.log(event.target.files);
		setFile(URL.createObjectURL(event.target.files[0]));
	}
	return (
		<>
			<div
				className="wrapper"
				style={darkMode ? { background: "#fff" } : { background: "#000" }}
			>
				<SlideButton
					onClick={() => {
						darkMode ? setDarkMode(false) : setDarkMode(true);
					}}
				/>
				<FileUpload
					uploadText="Upload File: "
					accepts="image/*"
					onChange={handleChange}
				/>
				<ImagePreview
					image={file ? file : "src/assets/images/red-panda.jpg"}
					alt="Upload Image"
					width="300px"
				/>
				<Input id="inputId" label="Optional Label:" />
				<Button
					text="Click me"
					onClick={(): void => {
						alert("Button clicked!");
					}}
				/>
				<Card
					title="Red Panda"
					description="Everything on this card is editable including the image, title and description. The card itself is a link (editable as well)."
					image="src/assets/images/red-panda.jpg"
					link="https://www.chewedleashphotography.com"
				/>
				<Card
					title="Lemur"
					description="Everything on this card is editable including the image, title and description. The card itself is a link (editable as well)."
					image="src/assets/images/lemur.jpg"
					link="https://www.chewedleashphotography.com"
				/>
			</div>
		</>
	);
}

export default App;
