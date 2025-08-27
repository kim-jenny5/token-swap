import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Token Swap',
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
