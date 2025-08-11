'use client';

import { useState, useEffect } from 'react';
import CoinChips from './CoinChips';
// import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

export const COINS = ['USDC', 'USDT', 'ETH', 'WBTC'] as const;
export type Token = (typeof COINS)[number];

export default function TokenPriceExplorer() {
	const [usdInput, setUsdInput] = useState<string>('');
	const [sourceCoin, setSourceCoin] = useState<string>(COINS[0]);
	const [targetCoin, setTargetCoin] = useState<string>(COINS[2]);

	// useEffect(() => {
	// 	console.log('sourceCoin', sourceCoin);
	// }, [sourceCoin]);

	return (
		<>
			<h1 className='text-2xl tracking-tight'>Token Price Explorer</h1>
			<CoinChips onClick={setSourceCoin} />
			<div className='flex h-full max-h-1/2 w-full items-center justify-between gap-x-12'>
				{/* <LeftPanel /> */}
				<div className='h-full w-1/2 rounded-lg bg-white p-6 shadow'>
					<form className='flex h-full flex-col justify-evenly'>
						<div className='w-fit self-end rounded bg-slate-100 p-1.5 text-sm'>
							<label htmlFor='sourceCoin' className='sr-only'>
								Source Coin
							</label>
							<select
								id='sourceCoin'
								value={sourceCoin}
								onChange={(e) => setSourceCoin(e.target.value)}
								className='focus:outline-0'
							>
								{COINS.map((coin, idx) => (
									<option key={idx} value={coin}>
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
							className='font-numerical arrowless border-b text-2xl focus:outline-none'
						/>
					</form>
				</div>
				<button className='rounded-full p-2.5 hover:bg-sky-200'>
					<ArrowsRightLeftIcon width={25} height={25} />
				</button>
				{/* <RightPanel /> */}
				<div className='h-full w-1/2 rounded-lg bg-white p-6 shadow'>
					<form className='flex h-full flex-col justify-evenly'>
						<div className='w-fit self-end rounded bg-slate-100 p-1.5 text-sm'>
							<label htmlFor='sourceCoin' className='sr-only'>
								Source Coin
							</label>
							<select
								id='sourceCoin'
								value={targetCoin}
								onChange={(e) => setTargetCoin(e.target.value)}
								className='focus:outline-0'
							>
								{COINS.map((coin, idx) => (
									<option key={idx} value={coin}>
										{coin}
									</option>
								))}
							</select>
						</div>
						<div className='font-numerical text-2xl'>Converted value here</div>
					</form>
				</div>
			</div>
		</>
	);
}
