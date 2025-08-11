'use client';

import { useState, useEffect } from 'react';
import { COINS } from './TokenPriceExplorer';

export default function LeftPanel() {
	const [usdInput, setUsdInput] = useState<string>('');
	const [sourceCoin, setSourceCoin] = useState<string>(COINS[0]);

	// useEffect(() => {
	// 	console.log(usdInput, sourceCoin);
	// }, [usdInput, sourceCoin]);

	return (
		<div className='h-full w-1/2 rounded-lg bg-white p-6 shadow'>
			<form className='flex h-full flex-col justify-evenly'>
				<div className='w-fit self-end rounded bg-slate-100 p-1.5 text-sm'>
					<label htmlFor='sourceCoin' className='sr-only'>
						Source Coin
					</label>
					<select
						id='sourceCoin'
						className='focus:outline-0'
						onChange={(e) => setSourceCoin(e.target.value)}
					>
						{COINS.map((coin, idx) => (
							<option key={idx} defaultValue={sourceCoin} value={coin}>
								{coin}
							</option>
						))}
					</select>
				</div>
				<label htmlFor='usdInput' className='sr-only'>
					Input in USD
				</label>
				<input
					required
					id='usdInput'
					type='number'
					inputMode='decimal'
					placeholder='0.00'
					value={usdInput}
					onChange={(e) => setUsdInput(e.target.value)}
					className='arrowless border-b text-2xl focus:outline-none'
				/>
			</form>
		</div>
	);
}
