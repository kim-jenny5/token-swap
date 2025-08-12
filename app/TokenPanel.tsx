import { TOKENS } from './Token';

type TokenPanelProps = {
	tokenVal: number;
	selectedToken: string;
	onChangeFn: (token: string) => void;
};

export default function TokenPanel({ tokenVal, selectedToken, onChangeFn }: TokenPanelProps) {
	return (
		<div className='flex grow items-end justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3'>
			<span className='font-numerical text-3xl leading-none text-white'>{tokenVal.toFixed(4)}</span>
			<select
				value={selectedToken}
				onChange={(e) => onChangeFn(e.target.value)}
				className='rounded-md border border-white/10 bg-white/5 px-2 py-1 text-sm text-white outline-none'
			>
				{TOKENS.map(({ symbol: token }) => (
					<option key={token} value={token} className='bg-black'>
						{token}
					</option>
				))}
			</select>
		</div>
	);
}
