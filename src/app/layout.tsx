import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Star Wars Explorer',
	description:
		'Explore the Star Wars universe - characters, planets, and more!',
	keywords: 'Star Wars, characters, planets, movies, API',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='dark'>
			<body className={inter.className}>
				<Providers>
					<div className='min-h-screen'>
						<Header />
						<main className='container mx-auto px-4 py-8'>
							{children}
						</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
