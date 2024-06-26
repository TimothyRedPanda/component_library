import React, { useState } from "react";
import {
	Button,
	Card,
	FileUpload,
	ImagePreview,
	Input,
	SlideButton,
	Webcam,
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
			<div className="wrapper">
				<section
					className="container-sections"
					style={{
						backgroundColor: darkMode
							? "hsl(202, 65%, 10%)"
							: "hsl(202, 65%, 95%)",
					}}
				>
					<SlideButton
						onClick={() => {
							darkMode ? setDarkMode(false) : setDarkMode(true);
						}}
					/>
				</section>
				<section className="container-sections">
					<Button
						text="Click me"
						onClick={(): void => {
							alert("Button clicked!");
						}}
					/>
				</section>
				<section className="container-sections">
					<FileUpload
						uploadText={fileName}
						accepts="image/*"
						onChange={handleChange}
						width="4rem"
					/>
				</section>
				<section className="container-sections">
					<ImagePreview
						image={file ? file : "src/assets/images/red-panda.jpg"}
						alt="Upload Image"
						width="300px"
					/>
				</section>
				<section className="container-sections">
					<Input
						id="inputId"
						label="Optional Label:"
						value={inputValue}
						setValue={setInputValue}
					/>
				</section>
				<section className="container-sections">
					<Card
						title={fileName ? fileName : "Red Panda"}
						description={
							inputValue
								? inputValue
								: "This is an editable text field. You can change the text to anything you like."
						}
						image={file ? file : "src/assets/images/red-panda.jpg"}
						link="https://www.chewedleashphotography.com"
						width="400px"
					/>
				</section>
				<section className="container-sections">
					<Webcam width={350} />
				</section>
			</div>
		</>
	);
}

export default App;
