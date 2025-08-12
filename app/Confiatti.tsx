'use client';

import { useEffect, useRef } from 'react';
import JSConfetti from 'js-confetti';

export default function Confiatti() {
	const confiattiRef = useRef<JSConfetti | null>(null);

	useEffect(() => {
		const confiatti = new JSConfetti();
		confiattiRef.current = confiatti;

		return () => confiatti.clearCanvas();
	}, []);

	const playConfiatti = async () =>
		await confiattiRef.current?.addConfetti({
			emojis: ['💸', '🤑', '💥', '✨', '💫', '💚'],
			emojiSize: 25,
		});

	return (
		<button
			onClick={playConfiatti}
			className='rounded-full bg-blue-600 px-3 py-1.5 font-semibold tracking-tight text-white uppercase hover:bg-blue-700 active:bg-blue-800'
		>
			Swap
		</button>
	);
}
