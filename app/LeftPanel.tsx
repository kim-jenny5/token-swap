'use client';

import { useState } from 'react';

export default function LeftPanel() {
	const [usdInput, setUsdInput] = useState<string>('');

	return (
		<div className='h-full w-1/2 rounded-lg bg-white p-6 shadow'>
			<form>
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
					className='arrowless text-2xl focus:outline-none'
				/>
			</form>
		</div>
	);
}
