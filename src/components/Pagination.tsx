'use client';

import { Button } from '@/components/ui/button';
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handlePageChange = (page: number) => {
		if (page < 1 || page > totalPages) return;

		if (onPageChange) {
			onPageChange(page);
		} else {
			const params = new URLSearchParams(searchParams);
			params.set('page', page.toString());
			router.push(`/?${params.toString()}`);
		}
	};

	const renderPageNumbers = () => {
		const pages = [];
		const maxVisible = 5;
		let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
		const end = Math.min(totalPages, start + maxVisible - 1);

		if (end - start < maxVisible - 1) {
			start = Math.max(1, end - maxVisible + 1);
		}

		for (let i = start; i <= end; i++) {
			pages.push(
				<Button
					key={i}
					variant={i === currentPage ? 'default' : 'outline'}
					size='sm'
					onClick={() => handlePageChange(i)}
					className={
						i === currentPage
							? 'bg-yellow-500 hover:bg-yellow-600 text-black'
							: 'border-gray-700 text-gray-300 hover:bg-gray-800'
					}>
					{i}
				</Button>
			);
		}

		return pages;
	};

	return (
		<Suspense fallback={<div>...Loading</div>}>
			<div className='flex items-center justify-center gap-2 mt-8'>
				<Button
					variant='outline'
					size='sm'
					onClick={() => handlePageChange(1)}
					disabled={currentPage === 1}
					className='border-gray-700 text-gray-300 hover:bg-gray-800 disabled:opacity-50'>
					<ChevronsLeft className='h-4 w-4' />
				</Button>
				<Button
					variant='outline'
					size='sm'
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className='border-gray-700 text-gray-300 hover:bg-gray-800 disabled:opacity-50'>
					<ChevronLeft className='h-4 w-4' />
				</Button>

				{renderPageNumbers()}

				<Button
					variant='outline'
					size='sm'
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className='border-gray-700 text-gray-300 hover:bg-gray-800 disabled:opacity-50'>
					<ChevronRight className='h-4 w-4' />
				</Button>
				<Button
					variant='outline'
					size='sm'
					onClick={() => handlePageChange(totalPages)}
					disabled={currentPage === totalPages}
					className='border-gray-700 text-gray-300 hover:bg-gray-800 disabled:opacity-50'>
					<ChevronsRight className='h-4 w-4' />
				</Button>
			</div>
		</Suspense>
	);
};

export default Pagination;
