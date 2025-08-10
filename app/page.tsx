import CoinButtons from './CoinButtons';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

import { getAssetErc20ByChainAndSymbol, getAssetPriceInfo } from '@funkit/api-base';

const tokenInfo = await getAssetErc20ByChainAndSymbol({
	chainId: '1',
	symbol: 'USDC',
	apiKey: process.env.API_KEY as string,
});

const price = await getAssetPriceInfo({
	chainId: '1',
	assetTokenAddress: tokenInfo.address,
	apiKey: process.env.API_KEY as string,
});

console.log('TOKEN INFO', tokenInfo);
console.log('PRICE', price);

export default function Home() {
	return (
		<main className='mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center'>
			<div className='flex h-4/5 w-full flex-col items-center justify-center gap-y-8 rounded bg-sky-50 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-2xl tracking-tight'>Token Price Explorer</h1>
				<CoinButtons />
				<div className='flex h-full max-h-1/2 w-full items-center justify-between gap-x-12'>
					<LeftPanel />
					<button className='cursor-pointer rounded-full p-2.5 hover:bg-sky-200'>
						<ArrowsRightLeftIcon width={25} height={25} />
					</button>
					<RightPanel />
				</div>
			</div>
		</main>
	);
}
