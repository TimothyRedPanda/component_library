import { SlideButton, Button } from "./components";
import "./index.scss";

function App() {
	return (
		<>
			<div className="wrapper">
				<SlideButton />
				<Button text="Click me" />
			</div>
		</>
	);
}

export default App;
