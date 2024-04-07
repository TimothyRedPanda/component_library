import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import panda from "../../../panda.config.json";

const StyledCard = styled(motion.div)`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
 	align-items: center;
    background: ${panda.color.secondary};
    border: 2px solid ${panda.color.secondary};
    border-radius: 1rem;
    -webkit-box-shadow: -4px 21px 51px -5px rgba(0,0,0,0.5);
    -moz-box-shadow: -4px 21px 51px -5px rgba(0,0,0,0.5);
    box-shadow: -4px 21px 51px -5px rgba(0,0,0,0.5);
    color: ${panda.color.primary};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: fit-content;
    text-align: center;
    width: 300px;
`;
const StyledImage = styled.img`
	width: 100%;
    border-radius: 1rem 1rem 0rem 0rem;
`;
const StyledDescription = styled.p`
	padding: 0rem 0.5rem 0.5rem 0.5rem;
    text-align: left;
    font-size: ${panda.fonts.sizes.medium};
`;

const StyledTitle = styled.h2`
	font-size: ${panda.fonts.sizes.large};
    border-bottom: 2px;
    padding: 0.2rem 0.2rem 0rem 0.2rem;
`;

const StyledLink = styled.a`
	text-decoration: none`;
function Card(props: {
	link: string;
	title: string;
	description: string;
	image: string;
}) {
	return (
		<>
			<StyledLink href={props.link} target="_blanc">
				<AnimatePresence>
					<StyledCard
						initial={{ rotate: 0, scale: 1, opacity: 0.8 }}
						whileHover={{ rotate: 5, filter: "blur(0px)", opacity: 1 }}
						whileTap={{ scale: 0.95 }}
						exit={{ rotate: 0, scale: 1, opacity: 0.8 }}
						transition={{ duration: 0.25, type: "spring", stiffness: 200 }}
					>
						<StyledImage src={props.image} alt={props.title} />
						<StyledTitle>{props.title}</StyledTitle>
						<StyledDescription>{props.description}</StyledDescription>
					</StyledCard>
				</AnimatePresence>
			</StyledLink>
		</>
	);
}

export default Card;
