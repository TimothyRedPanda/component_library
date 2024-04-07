import styled from "styled-components";
import { motion } from "framer-motion";
import config from "../../panda.config.json";

function Title() {
	const Title = styled.h1`
        color: ${config.text};
        background-color: ${config.background};
        border: 1px solid ${config.accent};
        user-select: none;
        padding: ${config.padding};
        border-radius: ${config.borderRadius};
        
    `;

	return <Title>This is a test of styled-components</Title>;
}

export default Title;
