'use client';

import HomePageSkeleton from '@/components/HomePageSkeleton';
import Pagination from '@/components/Pagination';
import PersonCard from '@/components/PersonCard';
import SearchBar from '@/components/SearchBar';
import { swAPI } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { Rocket } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

export default function HomePage() {
	const searchParams = useSearchParams();
	const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
	const [search, setSearch] = useState(searchParams.get('search') || '');
	const [limit, setLimit] = useState(Number(searchParams.get('limit')) || 5);

	useEffect(() => {
		const pageParam = Number(searchParams.get('page')) || 1;
		const searchParam = searchParams.get('search') || '';
		const limitParam = Number(searchParams.get('limit')) || 8;
		setPage(pageParam);
		setSearch(searchParam);
		setLimit(limitParam);
	}, [searchParams]);

	const { data, isLoading, error } = useQuery({
		queryKey: ['people', page, search, limit],
		queryFn: () => swAPI.getPeoples(page, search, limit),
	});

	return (
		<div className='space-y-8'>
			{/* Hero Section */}
			<div className='relative rounded-2xl overflow-hidden bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-8 mb-8'>
				<div className='absolute inset-0 bg-black/50' />
				<div className='relative z-10'>
					<h1 className='text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
						Explore the Galaxy
					</h1>
					<p className='text-xl text-gray-300 mb-6'>
						Discover characters from a galaxy far, far away...
					</p>
					<div className='flex items-center gap-2 text-yellow-400'>
						<Rocket className='w-5 h-5' />
						<span className='text-sm'>
							Search through {data?.total || 0} characters
						</span>
					</div>
				</div>
			</div>

			{/* Search Bar */}
			<div className='max-w-2xl mx-auto'>
				<Suspense fallback={<div className='text-3xl'>...Loading</div>}>
					<SearchBar />
				</Suspense>
			</div>

			{/* Results */}
			{error ? (
				<div className='text-center py-12'>
					<p className='text-red-400 text-lg'>
						Failed to load characters. Please try again.
					</p>
				</div>
			) : isLoading ? (
				<HomePageSkeleton />
			) : data?.results && data.results.length > 0 ? (
				<>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
						{data.results.map((person) => (
							<PersonCard key={person.uid} {...person} />
						))}
					</div>

					{data.totalPages > 1 && (
						<Suspense
							fallback={<div className='text-3xl'>...Loading</div>}>
							<Pagination
								currentPage={page}
								totalPages={data.totalPages}
							/>
						</Suspense>
					)}
				</>
			) : (
				<div className='text-center py-12'>
					<p className='text-gray-400 text-lg'>
						No characters found. Try a different search term.
					</p>
				</div>
			)}
		</div>
	);
}
