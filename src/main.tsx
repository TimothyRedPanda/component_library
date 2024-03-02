import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/button/button";
import "./index.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<Button />
		</React.StrictMode>,
	);
}
