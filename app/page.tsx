import { getAssetErc20ByChainAndSymbol, getAssetPriceInfo } from '@funkit/api-base';
import TokenPriceExplorer from './TokenPriceExplorer';

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
				<TokenPriceExplorer />
			</div>
		</main>
	);
}
