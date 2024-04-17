import styled from "styled-components";
import panda from "../../../panda.config.json";

const InputContainer = styled.div`
	display: flex;
    justify-content: center;
    flex-flow: column;
    color: ${panda.color.secondary};
    gap: 10px;
    text-align: center;
`;
const InputField = styled.input`
  	padding: 1rem;
    text-align: center;
    border-radius: 3rem;
    outline: none;
    border: none;
    color: ${panda.color.primary};
    background-color: ${panda.color.secondary};
`;

function Input(props: {
	id: string;
	label?: string;
	value?: string;
	setValue?: (value: string) => void;
}) {
	return (
		<InputContainer>
			<label htmlFor={props.id}>{props.label}</label>
			<InputField
				className="input-field"
				id={props.id}
				type="text"
				value={props.value}
				onChange={(e) => props.setValue ? props.setValue(e.target.value) : console.log("No Value")}
			/>
		</InputContainer>
	);
}

export default Input;
