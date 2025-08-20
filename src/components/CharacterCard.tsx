'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Person } from '@/types';
import { Calendar, Globe, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CharacterCardProps {
	character: Person;
	loading?: boolean;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
	character,
	loading,
}) => {
	const router = useRouter();

	if (loading) {
		return (
			<Card className='h-full hover:shadow-lg transition-all duration-300'>
				<CardHeader className='relative'>
					<Skeleton className='h-48 w-full rounded-lg' />
				</CardHeader>
				<CardContent className='space-y-2'>
					<Skeleton className='h-6 w-3/4' />
					<Skeleton className='h-4 w-1/2' />
					<Skeleton className='h-4 w-2/3' />
				</CardContent>
			</Card>
		);
	}

	const handleClick = () => {
		router.push(`/character/${character.uid}`);
	};

	return (
		<Card
			className='h-full hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700'
			onClick={handleClick}>
			<CardHeader className='relative p-0'>
				<div className='relative h-64 overflow-hidden bg-gradient-to-t from-black/60 to-transparent'>
					{/* <Image
						src={getCharacterImageUrl(characterId)}
						alt={character.name}
						width={500}
						height={500}
						className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
						onError={handleImageError}
					/> */}
					<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
					<div className='absolute bottom-4 left-4 right-4'>
						<CardTitle className='text-2xl font-bold text-white mb-1'>
							{character.name}
						</CardTitle>
					</div>
				</div>
			</CardHeader>
			<CardContent className='p-4 space-y-3'>
				{character.properties && (
					<>
						<div className='flex items-center gap-2 text-sm text-gray-300'>
							<User className='w-4 h-4 text-yellow-500' />
							<span>{character.properties.gender}</span>
						</div>
						<div className='flex items-center gap-2 text-sm text-gray-300'>
							<Calendar className='w-4 h-4 text-yellow-500' />
							<span>Born: {character.properties.birth_year}</span>
						</div>
						{character.properties.homeworldDetails && (
							<div className='flex items-center gap-2 text-sm text-gray-300'>
								<Globe className='w-4 h-4 text-yellow-500' />
								<span>
									{character.properties.homeworldDetails.name}
								</span>
							</div>
						)}
						<div className='flex flex-wrap gap-2 mt-3'>
							{character.properties.height !== 'unknown' && (
								<Badge
									variant='secondary'
									className='bg-yellow-500/20 text-yellow-300 border-yellow-500/50'>
									{character.properties.height} cm
								</Badge>
							)}
							{character.properties.mass !== 'unknown' && (
								<Badge
									variant='secondary'
									className='bg-blue-500/20 text-blue-300 border-blue-500/50'>
									{character.properties.mass} kg
								</Badge>
							)}
						</div>
					</>
				)}
			</CardContent>
		</Card>
	);
};
