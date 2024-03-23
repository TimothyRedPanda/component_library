For Developers Readme see - developers readme folder - in the github repository.

Version 0.1.4 - onClick functionality added to all button components -

	onClick={() => {alert("Button CLicked")}}

For example.

Also add a custom file upload button -

	<FileUpload uploadText="Upload File" accepts="image/*" />

It takes uploadText and accepts as properties. The accepts property is optional - in this example we are limiting the button to showing image files.

Version 0.1.3 - README updated for Input component.

Version 0.1.2 - Input component added -
	
	<Input id="inputId" label="Optional Label:" />

Version 0.1.1 - Small import fix.

Version 0.0.9 - Card component added -

    <SlideButton />
	<Button text="Click me" />
	<Card
		title="Your Title Here"
		description="Everything on this card is editable including the image, title and description. The card itself is a link (editable as well)."
		image="Path to your image here"
		link="Your link here"
	/>

Red Panda Components -
This is a component library being maintained by Timothy Bridge.
Currently a student at School of Code. To install - 

    npm i red-panda-components framer-motion sass

This will install red-panda-components into your project and also the framer-motion and sass dependencies. Currently it is a Typescript React library.

To import into your react project -
    
    import { Button, SlideButton, Card, Input, FileUpload } from "red-panda-components";
