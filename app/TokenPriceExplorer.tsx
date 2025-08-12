'use client';

import { useState } from 'react';
import Confiatti from './Confiatti';
import { TOKENS, Token, findNextToken } from './Token';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';
import TokenPanel from './TokenPanel';

type TokenPriceExplorerProps = {
	tokenInfo: Record<string, { name: string; unitPrice: number }>;
};

export default function TokenPriceExplorer({ tokenInfo }: TokenPriceExplorerProps) {
	const [usdInput, setUsdInput] = useState<string>('');
	const [sourceToken, setSourceToken] = useState<Token>(TOKENS[0].symbol);
	const [targetToken, setTargetToken] = useState<Token>(TOKENS[2].symbol);

	const usd = Number(usdInput) || 0;
	const sourceTokenUnitPrice = tokenInfo[sourceToken]?.unitPrice;
	const targetTokenUnitPrice = tokenInfo[targetToken]?.unitPrice;
	const sourceTokenVal = sourceTokenUnitPrice ? usd / sourceTokenUnitPrice : 0;
	const targetTokenVal = targetTokenUnitPrice ? usd / targetTokenUnitPrice : 0;

	const invalidToken = !sourceToken || !targetToken;

	const switchToken = () => {
		if (invalidToken) return;
		const originalSourceToken = sourceToken;
		setSourceToken(targetToken);
		setTargetToken(originalSourceToken);
	};

	const handleSourceChange = (newSource: Token) => {
		if (!tokenInfo[newSource]) return;
		if (newSource === targetToken) setTargetToken(findNextToken(targetToken));
		setSourceToken(newSource);
	};

	const handleTargetChange = (newTarget: Token) => {
		if (!tokenInfo[newTarget]) return;
		if (newTarget === sourceToken) setSourceToken(findNextToken(sourceToken));
		setTargetToken(newTarget);
	};

	return (
		<div className='space-y-5 text-white'>
			{invalidToken && (
				<div className='rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80'>
					Some tokens aren’t available right now.
				</div>
			)}
			<div className='flex items-center justify-between gap-x-5'>
				<TokenPanel
					tokenVal={sourceTokenVal}
					tokenSymbol={sourceToken as Token}
					tokenName={tokenInfo[sourceToken]?.name}
					onChangeFn={(token) => handleSourceChange(token as Token)}
				/>
				<button
					onClick={switchToken}
					disabled={invalidToken}
					className='rounded-2xl border border-white/10 bg-white/20 p-2.5 text-white/80 hover:bg-white/10 focus:outline-none'
				>
					<ArrowsRightLeftIcon width={20} height={20} />
				</button>
				<TokenPanel
					tokenVal={targetTokenVal}
					tokenSymbol={targetToken as Token}
					tokenName={tokenInfo[targetToken]?.name}
					alignment='end'
					onChangeFn={(token) => handleTargetChange(token as Token)}
				/>
			</div>
			<div className='flex items-center justify-between gap-x-4'>
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
