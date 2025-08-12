import { getAssetErc20ByChainAndSymbol, getAssetPriceInfo } from '@funkit/api-base';

// hardcoded for simplicity sake to run this project locally
const API_KEY = 'Z9SZaOwpmE40KX61mUKWm5hrpGh7WHVkaTvQJpQk';

export const TOKENS = [
	{ symbol: 'USDC', chainId: '1' },
	{ symbol: 'USDT', chainId: '137' },
	{ symbol: 'ETH', chainId: '8453' },
	{ symbol: 'WBTC', chainId: '1' },
] as const;

export type Token = (typeof TOKENS)[number]['symbol'];

export const findNextToken = (otherToken: Token) => {
	const symbols = TOKENS.map((token) => token.symbol);
	const idx = symbols.indexOf(otherToken);
	return symbols[(idx + 1) % symbols.length];
};

export const formatTokenVal = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 0,
	maximumFractionDigits: 4,
});

export const getTokenInfo = async () => {
	try {
		const assetErc20 = await Promise.all(
			TOKENS.map(({ symbol, chainId }) =>
				getAssetErc20ByChainAndSymbol({
					chainId: chainId,
					symbol: symbol,
					apiKey: API_KEY,
				})
			)
		);

		const tokenInfo = Object.fromEntries(
			await Promise.all(
				assetErc20.map(async ({ address, chain, symbol, name }) => {
					const token = await getAssetPriceInfo({
						chainId: chain,
						assetTokenAddress: address,
						apiKey: API_KEY,
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

		return tokenInfo;
	} catch (error) {
		console.log('Failed to fetch token info:', error);
		return null;
	}
};
