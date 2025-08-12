import { Token } from './Token';
import TokenMenu from './TokenMenu';

type TokenPanelProps = {
	tokenVal: number;
	selectedToken: Token;
	onChangeFn: (token: Token) => void;
};

export default function TokenPanel({ tokenVal, selectedToken, onChangeFn }: TokenPanelProps) {
	return (
		<div className='flex max-w-2xs grow items-end justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3'>
			<span className='font-numerical text-3xl leading-none text-white'>{tokenVal.toFixed(4)}</span>
			<TokenMenu selectedToken={selectedToken} onChangeFn={onChangeFn} />
		</div>
	);
}
