'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Search, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface SearchBarProps {
	onSearch?: (query: string) => void;
	placeholder?: string;
	className?: string;
	debounceDelay?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
	onSearch,
	placeholder = 'Search for Star Wars characters...',
	className = '',
	debounceDelay = 500,
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [searchQuery, setSearchQuery] = useState(
		searchParams.get('search') || ''
	);
	const [isSearching, setIsSearching] = useState(false);
	const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

	// Perform the actual search
	const performSearch = useCallback(
		(query: string) => {
			if (onSearch) {
				onSearch(query);
			} else {
				const params = new URLSearchParams(searchParams);
				if (query) {
					params.set('search', query);
					params.set('page', '1'); // Reset to first page on new search
				} else {
					params.delete('search');
				}
				router.push(`/?${params.toString()}`);
			}
			setIsSearching(false);
		},
		[onSearch, router, searchParams]
	);

	// Debounced search effect
	useEffect(() => {
		// Clear any existing timer
		if (debounceTimerRef.current) {
			clearTimeout(debounceTimerRef.current);
		}

		// Don't search if the query matches what's in the URL (initial load)
		if (searchQuery === searchParams.get('search')) {
			return;
		}

		// Set searching state if there's a query
		if (searchQuery) {
			setIsSearching(true);
		}

		// Set up new debounce timer
		debounceTimerRef.current = setTimeout(() => {
			performSearch(searchQuery);
		}, debounceDelay);

		// Cleanup function
		return () => {
			if (debounceTimerRef.current) {
				clearTimeout(debounceTimerRef.current);
			}
		};
	}, [searchQuery, debounceDelay]); // Removed performSearch from dependencies to avoid re-creating timer

	// Handle form submission (immediate search)
	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();

			// Clear any pending debounce timer
			if (debounceTimerRef.current) {
				clearTimeout(debounceTimerRef.current);
			}

			// Perform search immediately
			performSearch(searchQuery);
		},
		[searchQuery, performSearch]
	);

	const handleClear = () => {
		// Clear any pending debounce timer
		if (debounceTimerRef.current) {
			clearTimeout(debounceTimerRef.current);
		}

		setSearchQuery('');
		setIsSearching(false);

		if (onSearch) {
			onSearch('');
		} else {
			const params = new URLSearchParams(searchParams);
			params.delete('search');
			router.push(`/?${params.toString()}`);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
			<div className='relative flex-1'>
				<Input
					type='text'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder={placeholder}
					className='pr-10 pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500'
				/>
				<Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400' />
				<div className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2'>
					{isSearching && (
						<Loader2 className='h-4 w-4 text-yellow-500 animate-spin' />
					)}
					{searchQuery && !isSearching && (
						<button
							type='button'
							onClick={handleClear}
							className='text-gray-400 hover:text-white transition-colors'>
							<X className='h-4 w-4' />
						</button>
					)}
				</div>
			</div>
			<Button
				type='submit'
				className='bg-yellow-500 hover:bg-yellow-600 text-black font-semibold'
				disabled={isSearching}>
				Search
			</Button>
		</form>
	);
};

export default SearchBar;
