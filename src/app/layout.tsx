import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
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
						<header className='sticky top-0 z-50 backdrop-blur-lg bg-black/50 border-b border-gray-800'>
							<div className='container mx-auto px-4 py-4'>
								<div className='flex items-center justify-between'>
									<Link href='/' className='flex items-center gap-2'>
										<div className='text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent'>
											STAR WARS
										</div>
										<div className='text-xl text-gray-400'>
											Explorer
										</div>
									</Link>
									<nav className='flex items-center gap-6'>
										<Link
											href='/'
											className='text-gray-300 hover:text-yellow-400 transition-colors'>
											Characters
										</Link>
										<a
											href='/about'
											className='text-gray-300 hover:text-yellow-400 transition-colors'>
											About
										</a>
									</nav>
								</div>
							</div>
						</header>
						<main className='container mx-auto px-4 py-8'>
							{children}
						</main>
						<footer className='border-t border-gray-800 mt-16'>
							<div className='container mx-auto px-4 py-8'>
								<div className='text-center text-gray-400 text-sm'>
									<p>
										© 2024 Star Wars Explorer. Data provided by SWAPI.
									</p>
									<p className='mt-2'>May the Force be with you.</p>
								</div>
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
