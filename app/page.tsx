import { getTokenInfo } from './Token';
import TokenPriceExplorer from './TokenPriceExplorer';

const tokenInfo = await getTokenInfo();

export default function Home() {
	return (
		<div className='h-full w-full bg-black'>
			<main className='mx-auto flex h-full w-full max-w-3xl items-center justify-center px-4'>
				<div className='relative w-full justify-center rounded-3xl bg-white/10 p-4 inset-ring-2 inset-ring-white/25 backdrop-blur-xl sm:p-6 lg:p-8'>
					<div className='absolute inset-0 -z-10 rounded-3xl border border-transparent bg-gradient-to-tr from-white/15 via-white/10 to-white/30' />
					<TokenPriceExplorer tokenInfo={tokenInfo} />
				</div>
			</main>
		</div>
	);
}
