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
		assetErc20.map(async ({ address, chain, symbol, name }) => {
			const token = await getAssetPriceInfo({
				chainId: chain,
				assetTokenAddress: address,
				apiKey: process.env.API_KEY as string,
			});

			return [
				symbol,
				{
					name: name,
					unitPrice: token.unitPrice,
				},
			];
		})
	)
);

export default function Home() {
	return (
		<div className='h-full w-full bg-black'>
			<main className='mx-auto flex h-full w-full max-w-3xl items-center justify-center px-4'>
				<div className='relative w-full justify-center rounded-3xl bg-white/5 p-4 inset-ring-2 inset-ring-white/25 backdrop-blur-xl sm:p-6 lg:p-8'>
					<div className='absolute inset-0 -z-10 rounded-3xl border border-transparent bg-gradient-to-tr from-white/30 via-white/10 to-white/20' />
					<TokenPriceExplorer tokenInfo={tokenInfo} />
				</div>
			</main>
		</div>
	);
}
