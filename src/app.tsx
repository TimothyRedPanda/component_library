import { Button, Card, Input, SlideButton, FileUpload } from "./components";
import { useState } from "react";
import "./index.scss";
function App() {
	const [darkMode, setDarkMode] = useState(false);
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
				<FileUpload uploadText="Upload File" accepts="image/*" />
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
					image="src\assets\images\red-panda.jpg"
					link="https://www.chewedleashphotography.com"
				/>
				<Card
					title="Lemur"
					description="Everything on this card is editable including the image, title and description. The card itself is a link (editable as well)."
					image="src\assets\images\Lemur.jpg"
					link="https://www.chewedleashphotography.com"
				/>
			</div>
		</>
	);
}

export default App;
