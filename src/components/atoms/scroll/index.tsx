'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
	containerRef?: React.RefObject<HTMLDivElement>;
	height?: number;
}

export default function ScrollProgress({ containerRef, height = 2 }: Props) {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const target = containerRef?.current || document.documentElement;
			const { scrollTop, scrollHeight, clientHeight } = target;
			const totalHeight = scrollHeight - clientHeight;

			// Evita NaN caso a página não tenha scroll
			const progress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
			setScrollProgress(progress);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Executa ao montar para ter o valor inicial correto

		return () => window.removeEventListener('scroll', handleScroll);
	}, [containerRef]);

	return <ProgressBar width={scrollProgress} height={height} />;
}

// Styled Components
const ProgressBar = styled.div<{ width: number; height: number }>`
	position: fixed;
	top: 0;
	left: 0;
	width: ${({ width }) => width}%;
	height: ${({ height }) => height}px;
	background-color: ${({ theme }) => theme.magenta}; 
	z-index: 99999;
	transition: width 0.3s ease-in-out;
`;
