import { COINS, Token } from './TokenPriceExplorer';

// export const COINS = ['USDC', 'USDT', 'ETH', 'WBTC'] as const;

type CoinChipsProps = {
	onClick: (coin: Token) => void;
};

export default function CoinChips({ onClick }: CoinChipsProps) {
	return (
		<div className='flex gap-x-8'>
			{COINS.map((coin) => (
				<button
					key={coin}
					onClick={() => onClick(coin)}
					className='rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 active:bg-blue-800'
				>
					{coin}
				</button>
			))}
		</div>
	);
}
