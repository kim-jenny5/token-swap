'use client';

import { useState } from 'react';
import CoinChips from './CoinChips';
import { TOKENS } from './Token';
// import LeftPanel from './LeftPanel';
// import RightPanel from './RightPanel';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

type TokenPriceExplorerProps = {
	tokenInfo: Record<string, number>;
};

export default function TokenPriceExplorer({ tokenInfo }: TokenPriceExplorerProps) {
	const [usdInput, setUsdInput] = useState<string>('');
	const [sourceToken, setSourceToken] = useState<string>(TOKENS[0].symbol);
	const [targetToken, setTargetToken] = useState<string>(TOKENS[2].symbol);

	const swap = () => {
		const originalSourceToken = sourceToken;
		setSourceToken(targetToken);
		setTargetToken(originalSourceToken);
	};

	const usd = Number(usdInput) || 0;
	const sourceTokenUnitPrice = tokenInfo[sourceToken];
	const targetTokenUnitPrice = tokenInfo[targetToken];
	const sourceTokenVal = usd / sourceTokenUnitPrice;
	const targetTokenVal = usd / targetTokenUnitPrice;

	return (
		<>
			<h1 className='text-2xl tracking-tight'>Token Price Explorer</h1>
			{/* <CoinChips onClick={setSourceToken} /> */}
			<form className='flex gap-x-6'>
				<label htmlFor='usdInput' className='sr-only'>
					Input in USD
				</label>
				<div className='flex items-center justify-center'>
					<span className='pr-2 text-lg'>$</span>
					<input
						required
						id='usdInput'
						type='number'
						inputMode='decimal'
						placeholder='0.00'
						value={usdInput}
						onChange={(e) => setUsdInput(e.target.value)}
						className='font-numerical arrowless w-1/3 border-b border-slate-200 text-2xl focus:outline-none'
					/>
					<span className='text-sm'>USD</span>
				</div>
			</form>
			<div className='flex h-full max-h-1/2 w-full items-center justify-between gap-x-12'>
				{/* <LeftPanel /> */}
				<div className='flex h-full w-1/2 flex-col justify-center rounded-lg bg-white p-6 shadow'>
					<div className='flex justify-center gap-x-8'>
						<div className='font-numerical text-2xl'>{sourceTokenVal.toFixed(4)}</div>
						<div className='rounded bg-slate-100 p-1.5 text-sm'>
							<select
								value={sourceToken}
								onChange={(e) => setSourceToken(e.target.value)}
								className='focus:outline-0'
							>
								{TOKENS.map(({ symbol: token }, idx) => (
									<option key={idx} value={token}>
										{token}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<button onClick={swap} className='rounded-full p-2.5 hover:bg-blue-200'>
					<ArrowsRightLeftIcon width={25} height={25} />
				</button>
				{/* <RightPanel /> */}
				<div className='flex h-full w-1/2 flex-col justify-center rounded-lg bg-white p-6 shadow'>
					<div className='flex justify-center gap-x-8'>
						<div className='font-numerical text-2xl'>{targetTokenVal.toFixed(4)}</div>
						<div className='rounded bg-slate-100 p-1.5 text-sm'>
							<select
								value={targetToken}
								onChange={(e) => setTargetToken(e.target.value)}
								className='focus:outline-0'
							>
								{TOKENS.map(({ symbol: token }, idx) => (
									<option key={idx} value={token}>
										{token}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</div>
			<button className='rounded-full bg-blue-600 px-3 py-1.5 font-semibold tracking-tight text-white uppercase hover:bg-blue-700 active:bg-blue-800'>
				Swap
			</button>
		</>
	);
}
