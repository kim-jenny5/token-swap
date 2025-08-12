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
			className='rounded-2xl bg-gradient-to-br from-lime-300 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white uppercase hover:from-lime-400 hover:to-blue-700'
		>
			Swap
		</button>
	);
}
