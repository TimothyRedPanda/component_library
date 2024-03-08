import { Button } from "./components/button";
import { SlideButton } from "./components/slide-button";
import "./index.scss";

function App() {
	return (
		<>
			<div className="wrapper">
				<SlideButton />
				<Button>Button</Button>
			</div>
		</>
	);
}

export default App;
