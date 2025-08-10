import CoinButtons from './CoinButtons';
import ConversionWindow from './ConversionWindow';

export default function Home() {
	return (
		<main className='mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center'>
			<div className='flex h-4/5 w-full flex-col items-center justify-center gap-y-8 rounded bg-sky-50 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-2xl tracking-tight'>Token Price Explorer</h1>
				<CoinButtons />
				<div className='flex h-full max-h-1/2 w-full justify-between gap-x-12'>
					<ConversionWindow />
					<ConversionWindow />
				</div>
			</div>
		</main>
	);
}
