export default function CoinButtons() {
	const coins = ['USDC', 'USDT', 'ETH', 'WBTC'];

	return (
		<div className='flex gap-x-8'>
			{coins.map((coin) => (
				<button className='cursor-pointer rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 active:bg-blue-800'>
					{coin}
				</button>
			))}
		</div>
	);
}
