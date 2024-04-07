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
  	padding: ${panda.box.padding};
    text-align: center;
    border-radius: ${panda.box.radiusLarge};
    outline: none;
    border: none;
    color: ${panda.color.primary};
    background-color: ${panda.color.secondary};
`;

function Input(props: {
	id: string;
	label?: string;
	value: string;
	setValue: (value: string) => void;
	fontSize?: string;
}) {
	return (
		<InputContainer>
			<label htmlFor={props.id}>{props.label}</label>
			<InputField
				style={{
					fontSize:
						props.fontSize === "small"
							? panda.fonts.sizes.small
							: props.fontSize === "medium"
								? panda.fonts.sizes.medium
								: panda.fonts.sizes.large,
				}}
				className="input-field"
				id={props.id}
				type="text"
				value={props.value}
				onChange={(e) => props.setValue(e.target.value)}
			/>
		</InputContainer>
	);
}

export default Input;
