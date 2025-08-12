import { Token } from './Token';
import TokenMenu from './TokenMenu';

type TokenPanelProps = {
	tokenVal: number;
	tokenSymbol: Token;
	tokenName: string;
	alignment?: 'start' | 'end';
	onChangeFn: (token: Token) => void;
};

export default function TokenPanel({
	tokenVal,
	tokenSymbol,
	tokenName,
	alignment = 'start',
	onChangeFn,
}: TokenPanelProps) {
	const formatTokenVal = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 4,
	});

	return (
		<div className={`flex w-full flex-col gap-y-2 items-${alignment}`}>
			<div className='flex items-center gap-x-2 text-white'>
				<span className='text-base font-semibold'>{tokenName}</span>
			</div>
			<div className='flex w-full max-w-2xs items-end justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3'>
				<span className='font-numerical w-full truncate overflow-hidden text-3xl text-ellipsis text-white'>
					{formatTokenVal.format(tokenVal)}
				</span>
				<TokenMenu tokenSymbol={tokenSymbol} onChangeFn={onChangeFn} />
			</div>
		</div>
	);
}
