For Developers Readme see - developers readme folder - in the github repository.

Version 0.2.7 - (Bug fixes and card now has a width property for easy customization) The Styled Version - Styled Components introduced - along with a config for customization of colors.

Red Panda Components -
This is a component library being maintained by Timothy Bridge.
Currently a student at School of Code. To install - 

    npm i red-panda-components framer-motion styled-components

This will install red-panda-components into your project and also the framer-motion and sass dependencies. Currently it is a Typescript React library.

As part of the NPM package there should be a panda.config.json - 
this is where you can control - 
color (primary and secondary colors) 
/ padding 
/ border-radius (standard size and large i.e. round edges on buttons) 
/ fonts (small / medium / large i.e. for the fontSize props below)

More to follow. Let us know if you have any questions - Find us on LinkedIn - Timothy Bridge

To import into your react project -
    
    import { Button, SlideButton, Card, Input, FileUpload, ImagePreview, Webcam } from "red-panda-components";


	<Button 
		text="Your Text" 
		onClick={() => {your click event}}
	/>
	
	<SlideButton 
		onClick={() => {your click event}}
	>
	
	<FileUpload 
		uploadText="Your text" 
		accepts="What you want to upset for upload" 
		onChange="Your change event" 
		width="Your width"
	/>

	<ImagePreview 
		image="Your image link" 
		alt="Your Image alt text" 
		width="Your width"
	/>

	<Input
		id="input ID"
		label="Optional Label:"
		value= "Input value"
		setValue="Your choice of how to set function"
		fontSize="small or medium or large - see panda.config.json"
	/>

	<Card
		title="Your title"
		description="Your description"
		image="Your image link"
		link="Your link - link the card to something i.e. website"
		width="Your width"
	/>

	<Webcam
		width = "Your width for webcam display"
	/>





