import { TOKENS, Token } from './Token';

type CoinChipsProps = {
	onClick: (token: Token) => void;
};

export default function CoinChips({ onClick }: CoinChipsProps) {
	return (
		<div className='flex gap-x-8'>
			{TOKENS.map(({ symbol: token }) => (
				<button
					key={token}
					onClick={() => onClick(token)}
					className='rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 active:bg-blue-800'
				>
					{token}
				</button>
			))}
		</div>
	);
}
