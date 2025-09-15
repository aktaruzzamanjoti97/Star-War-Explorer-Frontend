import Link from 'next/link';

const Header = () => {
	return (
		<header className='sticky top-0 z-50 backdrop-blur-lg bg-black/50 border-b border-gray-800'>
			<div className='container mx-auto px-4 py-4'>
				<div className='flex items-center justify-between'>
					<Link href='/' className='flex items-center gap-2'>
						<div className='text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent'>
							STAR WARS
						</div>
						<div className='text-xl text-gray-400'>Explorer</div>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
