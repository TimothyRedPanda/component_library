import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/button/button.tsx";
import SlideBtn from "./components/slide-button/slideBtn.tsx";
import "./index.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<Button>Red Panda</Button>
			<SlideBtn />
		</React.StrictMode>,
	);
}
