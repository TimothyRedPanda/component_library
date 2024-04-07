import { motion } from "framer-motion";
import styled from "styled-components";
const StyledSvg = styled(motion.svg)`
	display: flex;
  	justify-content: center;
  	align-items: center;
  	aspect-ratio: 1/1;
	margin: 0.5rem;
	`;
const SvgComponent = (props: {
	isHovered: boolean;
	width?: string;
}) => {
	const transition = { duration: 0.35 };
	return (
		<StyledSvg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 449.01 530.01"
			style={{ width: props.width || "3rem" }}
		>
			<title>SVG</title>
			<defs>
				<style>
					{
						".cls-1{fill:#340701}.cls-1,.cls-2,.cls-3{stroke-width:0}.cls-4{stroke-width:10px}.cls-4,.cls-5,.cls-6{stroke:#db8758;stroke-miterlimit:10}.cls-4,.cls-6{fill:none;stroke-linecap:round; stroke:#db8758}.cls-2,.cls-5{fill:#db8758}.cls-3{fill:#fff}.cls-5,.cls-6{stroke-width:15px}"
					}
				</style>
			</defs>
			<g id="Shadow">
				<path
					d="M112.81 22.5H420.2c11.76 0 21.31 9.55 21.31 21.31V441.2c0 11.76-9.55 21.31-21.31 21.31H112.81c-11.76 0-21.31-9.55-21.31-21.31V43.81c0-11.76 9.55-21.31 21.31-21.31Z"
					className="cls-1"
				/>
				<path
					d="M420.19 30C427.8 30 434 36.19 434 43.81V441.2c0 7.61-6.19 13.81-13.81 13.81H112.81c-7.61 0-13.81-6.19-13.81-13.81V43.81C99 36.2 105.19 30 112.81 30H420.2m-.01-15H112.81C96.9 15 84 27.9 84 43.81V441.2c0 15.91 12.9 28.81 28.81 28.81H420.2c15.91 0 28.81-12.9 28.81-28.81V43.81c0-15.91-12.9-28.81-28.81-28.81h-.01Z"
					className="cls-1"
				/>
				<path
					d="M52.81 82.5H360.2c11.76 0 21.31 9.55 21.31 21.31V501.2c0 11.76-9.55 21.31-21.31 21.31H52.81c-11.76 0-21.31-9.55-21.31-21.31V103.81c0-11.76 9.55-21.31 21.31-21.31Z"
					className="cls-1"
				/>
				<path
					d="M360.19 90c7.61 0 13.81 6.19 13.81 13.81V501.2c0 7.61-6.19 13.81-13.81 13.81H52.81c-7.61 0-13.81-6.19-13.81-13.81V103.81C39 96.2 45.19 90 52.81 90H360.2m-.01-15H52.81C36.9 75 24 87.9 24 103.81V501.2c0 15.91 12.9 28.81 28.81 28.81H360.2c15.91 0 28.81-12.9 28.81-28.81V103.81c0-15.91-12.9-28.81-28.81-28.81h-.01Z"
					className="cls-1"
				/>
			</g>
			<g id="Back_File_Stroke">
				<path
					d="M98.81 7.5H406.2c11.76 0 21.31 9.55 21.31 21.31V426.2c0 11.76-9.55 21.31-21.31 21.31H98.81c-11.76 0-21.31-9.55-21.31-21.31V28.81c0-11.76 9.55-21.31 21.31-21.31Z"
					className="cls-3"
				/>
				<path
					d="M406.19 15C413.8 15 420 21.19 420 28.81V426.2c0 7.61-6.19 13.81-13.81 13.81H98.81c-7.61 0-13.81-6.19-13.81-13.81V28.81C85 21.2 91.19 15 98.81 15H406.2m-.01-15H98.81C82.9 0 70 12.9 70 28.81V426.2c0 15.91 12.9 28.81 28.81 28.81H406.2c15.91 0 28.81-12.9 28.81-28.81V28.81C435.01 12.9 422.11 0 406.2 0h-.01Z"
					className="cls-2"
				/>
			</g>
			<g id="Back_File_Writing">
				<motion.path
					initial={{ pathLength: 0.1 }}
					animate={{ pathLength: props.isHovered ? 1 : 0 }}
					transition={transition}
					d="M126 77.5h252.97M126 177.5h252.97M126 277.5h252.97M126 377.5h252.97"
					className="cls-6"
				/>
			</g>
			<g id="Front_File">
				<path
					d="M28.81 57.5H336.2c11.76 0 21.31 9.55 21.31 21.31V476.2c0 11.76-9.55 21.31-21.31 21.31H28.81c-11.76 0-21.31-9.55-21.31-21.31V78.81c0-11.76 9.55-21.31 21.31-21.31Z"
					className="cls-3"
				/>
				<path
					d="M336.19 65C343.8 65 350 71.19 350 78.81V476.2c0 7.61-6.19 13.81-13.81 13.81H28.81c-7.61 0-13.81-6.19-13.81-13.81V78.81C15 71.2 21.19 65 28.81 65H336.2m-.01-15H28.81C12.9 50 0 62.9 0 78.81V476.2c0 15.91 12.9 28.81 28.81 28.81H336.2c15.91 0 28.81-12.9 28.81-28.81V78.81c0-15.91-12.9-28.81-28.81-28.81h-.01Z"
					className="cls-2"
				/>
			</g>
			<g id="Front_File_Writing">
				<motion.path
					animate={{
						pathLength: props.isHovered ? 1 : 0,
					}}
					transition={transition}
					d="M56 327.5h252.97M56 124.5h252.97M56 427.5h252.97"
					className="cls-6"
				/>
			</g>
			<motion.path
				initial={{ pathLength: 0.1 }}
				animate={{ pathLength: props.isHovered ? 1 : 0 }}
				transition={transition}
				id="Front_File_Mouth"
				d="m159.98 261.77 44.35 5.56"
				className="cls-6"
			/>
			<g id="Front_File_Eyes">
				<motion.ellipse
					initial={{ scaleY: 0.1 }}
					animate={{ scaleY: props.isHovered ? 1 : 0.1 }}
					transition={transition}
					cx={112.5}
					cy={206.79}
					className="cls-5"
					rx={5}
					ry={10.71}
				/>
				<motion.ellipse
					initial={{ scaleY: 0.7 }}
					animate={{ scaleY: props.isHovered ? 1 : 0.7 }}
					transition={transition}
					cx={252.5}
					cy={206.79}
					className="cls-5"
					rx={5}
					ry={10.71}
				/>
			</g>
			<g id="Front_File_Brows">
				<motion.path
					initial={{ y: 0 }}
					animate={{ y: props.isHovered ? -20 : 0 }}
					transition={transition}
					d="M122.91 192.5h-20.86M262.91 171.5h-20.86"
					className="cls-4"
				/>
			</g>
		</StyledSvg>
	);
};
export default SvgComponent;
