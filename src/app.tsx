import { useState } from "react";
import {
	Button,
	Card,
	FileUpload,
	ImagePreview,
	Input,
	SlideButton,
} from "./components";
import "./index.scss";
function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [file, setFile] = useState<string | undefined>();
	const [fileName, setFileName] = useState<string>("");
	const [inputValue, setInputValue] = useState<string>("");
	function handleChange(event) {
		setFile(URL.createObjectURL(event.target.files[0]));
		setFileName(event.target.files[0].name);
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
					uploadText={fileName}
					accepts="image/*"
					onChange={handleChange}
				/>
				<ImagePreview
					image={file ? file : "src/assets/images/red-panda.jpg"}
					alt="Upload Image"
					width="400px"
				/>
				<Input
					id="inputId"
					label="Optional Label:"
					value={inputValue}
					setValue={setInputValue}
				/>
				<Button
					text="Click me"
					onClick={(): void => {
						alert("Button clicked!");
					}}
				/>
				<Card
					title="Red Panda"
					description={
						inputValue
							? inputValue
							: "This is an editable text field. You can change the text to anything you like."
					}
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
