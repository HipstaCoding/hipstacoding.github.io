import React, { useEffect, useState } from "react";
import styled from "styled-components";
import speaker from "../images/speaker.jpg";
import {
	MAX_MEDIA_WIDTH,
	CIRCLE_DIAMETER,
	MIN_CIRCLE_DIAMETER,
} from "../config";

const Speaker = styled.button`
	border: none;
	outline: none;
	will-change: transform;
	transform: scale(1);
	width: ${CIRCLE_DIAMETER}px;
	height: ${CIRCLE_DIAMETER}px;
	border-radius: ${CIRCLE_DIAMETER}px;
	background-image: url(${speaker});
	background-repeat: no-repeat;
	background-size: contain;
	background-color: black;
	position: relative;
	color: black;

	@media (max-width: ${MAX_MEDIA_WIDTH}px) {
		width: ${MIN_CIRCLE_DIAMETER}px;
		height: ${MIN_CIRCLE_DIAMETER}px;
		border-radius: ${MIN_CIRCLE_DIAMETER}px;
	}
`;

export const SpeakerPlayer = ({ player, children }) => {
	const [scale, setScale] = useState(1);

	useEffect(() => {
		player.subscribe(arr => {
			const basses = arr.slice(10);
			const avgSum =
				basses.reduce((acc, curr) => {
					let scale = (curr / 255) * 0.4;
					scale = scale < 0 ? 1 : scale;
					return acc + scale;
				}, 0) / basses.length;
			setScale(avgSum + 1);
		});
	}, []);

	const play = () => player.play();

	return (
		<Speaker
			style={{ transform: `scale(${scale})` }}
			onClick={play}
		>
			{children}
		</Speaker>
	);
};
