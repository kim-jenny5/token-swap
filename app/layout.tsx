import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Jenny Kim - fun.xyz Take Home Assessment',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='h-screen w-screen antialiased'>{children}</body>
		</html>
	);
}
