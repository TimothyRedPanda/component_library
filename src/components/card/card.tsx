import { AnimatePresence, motion } from "framer-motion";
import "./card.scss";

function Card(props: {
	link: string;
	title: string;
	description: string;
	image: string;
}) {
	return (
		<>
			<a href={props.link} target="_blanc">
				<AnimatePresence>
					<motion.div
						initial={{ rotate: 0, scale: 1, opacity: 0.8 }}
						whileHover={{ rotate: 5, filter: "blur(0px)", opacity: 1 }}
						whileTap={{ scale: 0.95 }}
						exit={{ rotate: 0, scale: 1, opacity: 0.8 }}
						transition={{ duration: 0.25, type: "spring", stiffness: 200 }}
						className="card-container"
					>
						<img className="card-img" src={props.image} alt={props.title} />
						<h2 className="card-title">{props.title}</h2>
						<p className="card-description">{props.description}</p>
					</motion.div>
				</AnimatePresence>
			</a>
		</>
	);
}

export default Card;
