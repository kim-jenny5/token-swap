import { getAssetErc20ByChainAndSymbol, getAssetPriceInfo } from '@funkit/api-base';
import { TOKENS } from './Token';
import TokenPriceExplorer from './TokenPriceExplorer';

const assetErc20 = await Promise.all(
	TOKENS.map(({ symbol, chainId }) =>
		getAssetErc20ByChainAndSymbol({
			chainId: chainId,
			symbol: symbol,
			apiKey: process.env.API_KEY as string,
		})
	)
);

const tokenInfo = Object.fromEntries(
	await Promise.all(
		assetErc20.map(async ({ address, chain, symbol }) => {
			const token = await getAssetPriceInfo({
				chainId: chain,
				assetTokenAddress: address,
				apiKey: process.env.API_KEY as string,
			});

			return [symbol, token.unitPrice];
		})
	)
);

export default function Home() {
	return (
		<main className='mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center'>
			<div className='flex h-4/5 w-full flex-col items-center justify-center gap-y-8 rounded bg-blue-50 px-4 sm:px-6 lg:px-8'>
				<TokenPriceExplorer tokenInfo={tokenInfo} />
			</div>
		</main>
	);
}
