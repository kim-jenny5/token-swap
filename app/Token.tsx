import { getAssetErc20ByChainAndSymbol, getAssetPriceInfo } from '@funkit/api-base';

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

export const getTokenInfo = async () => {
	try {
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

		return tokenInfo;
	} catch (error) {
		throw new Error(`Failed to fetch token info: ${error}`);
	}
};
