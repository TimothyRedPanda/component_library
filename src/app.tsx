import { Button, Card, Input, SlideButton } from "./components";
import "./index.scss";

function App() {
	return (
		<>
			<div className="wrapper">
				<SlideButton />
				<Input id="inputId" label="Optional Label:" />
				<Button text="Click me" />
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
