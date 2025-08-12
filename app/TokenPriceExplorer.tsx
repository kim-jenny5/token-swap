'use client';

import { useState } from 'react';
import Confiatti from './Confiatti';
import { TOKENS, Token, findNextToken, formatTokenVal } from './Token';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';
import TokenPanel from './TokenPanel';

type TokenPriceExplorerProps = {
	tokenInfo: Record<string, { name: string; unitPrice: number }> | null;
};

export default function TokenPriceExplorer({ tokenInfo }: TokenPriceExplorerProps) {
	const [usdInput, setUsdInput] = useState<string>('');
	const [sourceToken, setSourceToken] = useState<Token>(TOKENS[0].symbol);
	const [targetToken, setTargetToken] = useState<Token>(TOKENS[2].symbol);

	const usd = Number(usdInput) || 0;
	const sourceTokenName = tokenInfo?.[sourceToken]?.name;
	const targetTokenName = tokenInfo?.[targetToken]?.name;
	const sourceTokenUnitPrice = tokenInfo?.[sourceToken]?.unitPrice ?? 0;
	const targetTokenUnitPrice = tokenInfo?.[targetToken]?.unitPrice ?? 0;
	const sourceTokenVal = sourceTokenUnitPrice ? usd / sourceTokenUnitPrice : 0;
	const targetTokenVal = targetTokenUnitPrice ? usd / targetTokenUnitPrice : 0;
	const sourceTargetRate =
		sourceTokenUnitPrice && targetTokenUnitPrice && sourceTokenUnitPrice / targetTokenUnitPrice;

	const invalid = !sourceToken || !targetToken || tokenInfo === null;

	const switchToken = () => {
		if (invalid) return;
		const originalSourceToken = sourceToken;
		setSourceToken(targetToken);
		setTargetToken(originalSourceToken);
	};

	const handleSourceChange = (newSource: Token) => {
		if (!tokenInfo?.[newSource]) return;
		if (newSource === targetToken) setTargetToken(findNextToken(targetToken));
		setSourceToken(newSource);
	};

	const handleTargetChange = (newTarget: Token) => {
		if (!tokenInfo?.[newTarget]) return;
		if (newTarget === sourceToken) setSourceToken(findNextToken(sourceToken));
		setTargetToken(newTarget);
	};

	return (
		<div className='space-y-5 text-white'>
			<div className='text-end text-sm font-semibold text-white/50 uppercase'>
				Token Price Explorer
			</div>
			{invalid && (
				<div className='rounded-2xl border border-yellow-50/50 bg-yellow-50/25 px-3 py-2 text-sm text-white'>
					⚠️ Token prices are currently unavailable. Conversions will not reflect live data.
				</div>
			)}
			<div className='mb-2.5 flex items-center justify-between text-white'>
				{sourceTokenName && <span className='text-base font-semibold'>{sourceTokenName}</span>}
				{targetTokenName && <span className='text-base font-semibold'>{targetTokenName}</span>}
			</div>
			<div className='flex items-center justify-between gap-x-6'>
				<TokenPanel
					tokenVal={sourceTokenVal}
					tokenSymbol={sourceToken as Token}
					onChangeFn={(token) => handleSourceChange(token as Token)}
				/>
				<button
					onClick={switchToken}
					className='rounded-2xl border border-white/10 bg-white/20 p-2.5 text-white/80 hover:bg-white/10 focus:outline-none'
				>
					<ArrowsRightLeftIcon width={20} height={20} />
				</button>
				<TokenPanel
					tokenVal={targetTokenVal}
					tokenSymbol={targetToken as Token}
					alignment='end'
					onChangeFn={(token) => handleTargetChange(token as Token)}
				/>
			</div>
			{sourceTargetRate && (
				<div className='text-center text-sm text-white/70'>
					1 {sourceToken} ≈ {formatTokenVal.format(sourceTargetRate)} {targetToken}
				</div>
			)}
			<div className='flex items-center justify-between gap-x-4'>
				<label htmlFor='usdInput' className='sr-only'>
					USD Input
				</label>
				<div className='flex w-full items-center gap-x-2 rounded-2xl border border-white/10 bg-black/30 px-3 py-2'>
					<span className='text-white/70'>$</span>
					<input
						id='usdInput'
						type='number'
						placeholder='0.00'
						inputMode='decimal'
						value={usdInput}
						onChange={(e) => setUsdInput(e.target.value)}
						className='arrowless w-full text-lg text-white outline-none'
					/>
					<span className='text-white/70'>USD</span>
				</div>
				<Confiatti />
			</div>
		</div>
	);
}
