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
	const targetTokenVal = usd * (sourceTokenUnitPrice / targetTokenUnitPrice);

	return (
		<>
			<h1 className='text-2xl tracking-tight'>Token Price Explorer</h1>
			{/* <CoinChips onClick={setSourceToken} /> */}
			<div className='flex h-full max-h-1/2 w-full items-center justify-between gap-x-12'>
				{/* <LeftPanel /> */}
				<div className='flex h-full w-1/2 flex-col justify-center rounded-lg bg-white p-6 shadow'>
					<form className='flex gap-x-6'>
						<label htmlFor='usdInput' className='sr-only'>
							Input in USD
						</label>
						<input
							required
							id='usdInput'
							type='number'
							inputMode='decimal'
							placeholder='0.000'
							value={usdInput}
							onChange={(e) => setUsdInput(e.target.value)}
							className='font-numerical arrowless w-full max-w-fit border-b border-slate-200 text-2xl focus:outline-none'
						/>
						<div className='rounded bg-slate-100 p-1.5 text-sm'>
							<label htmlFor='sourceToken' className='sr-only'>
								Source Token
							</label>
							<select
								id='sourceToken'
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
					</form>
				</div>
				<button onClick={swap} className='rounded-full p-2.5 hover:bg-sky-200'>
					<ArrowsRightLeftIcon width={25} height={25} />
				</button>
				{/* <RightPanel /> */}
				<div className='flex h-full w-1/2 flex-col justify-center rounded-lg bg-white p-6 shadow'>
					<form className='flex gap-x-6'>
						<div className='font-numerical text-2xl'>{targetTokenVal.toFixed(4)}</div>
						<div className='rounded bg-slate-100 p-1.5 text-sm'>
							<label htmlFor='targetToken' className='sr-only'>
								Target Token
							</label>
							<select
								id='targetToken'
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
					</form>
				</div>
			</div>
		</>
	);
}
