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
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const eventTarget = event.target;
		const firstFile = eventTarget.files?.[0] as File;
		setFile(URL.createObjectURL(firstFile));
		setFileName(firstFile.name);
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
					title={fileName ? fileName : "Red Panda"}
					description={
						inputValue
							? inputValue
							: "This is an editable text field. You can change the text to anything you like."
					}
					image={file ? file : "src/assets/images/red-panda.jpg"}
					link="https://www.chewedleashphotography.com"
				/>
			</div>
		</>
	);
}

export default App;
