import { useState } from "react";
import "./input.scss";

function Input(props: {
	id: string;
	label?: string;
	value: string;
	setValue: (value: string) => void;
}) {
	return (
		<div className="input-container">
			<label htmlFor={props.id}>{props.label}</label>
			<input
				className="input-field"
				id={props.id}
				type="text"
				value={props.value}
				onChange={(e) => props.setValue(e.target.value)}
			/>
		</div>
	);
}

export default Input;
