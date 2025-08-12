'use client';

import { useState } from 'react';
import Confiatti from './Confiatti';
// import CoinChips from './CoinChips';
import { TOKENS } from './Token';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';
import TokenPanel from './TokenPanel';

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
				<TokenPanel
					tokenVal={sourceTokenVal}
					selectedToken={sourceToken}
					onChangeFn={setSourceToken}
				/>
				<button onClick={swap} className='rounded-full p-2.5 hover:bg-blue-200'>
					<ArrowsRightLeftIcon width={25} height={25} />
				</button>
				<TokenPanel
					tokenVal={targetTokenVal}
					selectedToken={targetToken}
					onChangeFn={setTargetToken}
				/>
			</div>
			<Confiatti />
		</>
	);
}
