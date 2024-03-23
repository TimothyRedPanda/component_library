import { useState } from "react";
import "./input.scss";

function Input(props: { id: string; label?: string }) {
	const [value, setValue] = useState("");
	return (
		<div className="input-container">
			<label htmlFor={props.id}>{props.label}</label>
			<input
				className="input-field"
				id={props.id}
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}

export default Input;
