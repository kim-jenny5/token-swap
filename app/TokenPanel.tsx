import { TOKENS } from './Token';

type TokenPanelProps = {
	tokenVal: number;
	selectedToken: string;
	onChangeFn: (token: string) => void;
};

export default function TokenPanel({ tokenVal, selectedToken, onChangeFn }: TokenPanelProps) {
	console.log(typeof tokenVal);
	console.log(typeof selectedToken);
	console.log(typeof onChangeFn);

	return (
		<div className='flex h-full w-1/2 flex-col justify-center rounded-lg bg-white p-6 shadow'>
			<div className='flex justify-center gap-x-8'>
				<div className='font-numerical text-2xl'>{tokenVal.toFixed(4)}</div>
				<div className='rounded bg-slate-100 p-1.5 text-sm'>
					<select
						value={selectedToken}
						onChange={(e) => onChangeFn(e.target.value)}
						className='focus:outline-0'
					>
						{TOKENS.map(({ symbol: token }, idx) => (
							<option key={idx} value={token}>
								{token}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
}
