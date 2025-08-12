import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { TOKENS, Token } from './Token';

type TokenMenuProps = {
	tokenSymbol: Token;
	onChangeFn: (token: Token) => void;
};

export default function TokenMenu({ tokenSymbol, onChangeFn }: TokenMenuProps) {
	return (
		<Menu as='div' className='relative inline-block text-left'>
			<MenuButton className='inline-flex items-center rounded-md border border-white/10 bg-white/10 px-2 py-1 text-sm text-white hover:bg-white/10 focus:outline-none'>
				{tokenSymbol}
			</MenuButton>
			<MenuItems
				transition
				className='absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md border border-white/10 bg-black/90 shadow-lg ring-1 ring-black/10 backdrop-blur-md focus:outline-none data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75'
			>
				<div className='p-1'>
					{TOKENS.map(({ symbol }) => (
						<MenuItem key={symbol}>
							{({ focus }) => (
								<button
									onClick={() => onChangeFn(symbol)}
									className={`w-full rounded px-3 py-1.5 text-left text-sm ${
										focus ? 'bg-white/20 text-white' : 'text-white/80'
									}`}
								>
									{symbol}
								</button>
							)}
						</MenuItem>
					))}
				</div>
			</MenuItems>
		</Menu>
	);
}
