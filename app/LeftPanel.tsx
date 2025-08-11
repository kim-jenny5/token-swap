'use client';

import { useState, useEffect } from 'react';
import { TOKENS } from './Token';

export default function LeftPanel() {
	const [usdInput, setUsdInput] = useState<string>('');
	const [sourceToken, setSourceToken] = useState<string>(TOKENS[0].symbol);

	return (
		<div className='h-full w-1/2 rounded-lg bg-white p-6 shadow'>
			<form className='flex h-full flex-col justify-evenly'>
				<div className='w-fit self-end rounded bg-slate-100 p-1.5 text-sm'>
					<label htmlFor='sourceToken' className='sr-only'>
						Source Token
					</label>
					<select
						id='sourceToken'
						className='focus:outline-0'
						onChange={(e) => setSourceToken(e.target.value)}
					>
						{TOKENS.map(({ symbol: token }, idx) => (
							<option key={idx} defaultValue={sourceToken} value={token}>
								{token}
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
