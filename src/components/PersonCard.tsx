'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge, Globe } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface PersonCardProps {
	uid: string;
	name: string;
	url: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ uid, name, url }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/person/${uid}`);
	};

	return (
		<Card
			className='h-full hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700'
			onClick={handleClick}>
			<CardHeader className='relative p-0'>
				<div className='relative h-64 overflow-hidden bg-gradient-to-t from-black/60 to-transparent'>
					<Image
						src={
							'https://images.unsplash.com/photo-1756745678586-ffea7c66aeb2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						alt='Alt'
						width={500}
						height={500}
						className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
					<div className='absolute bottom-4 left-4 right-4'>
						<CardTitle className='text-2xl font-bold text-white mb-1'>
							{name}
						</CardTitle>
					</div>
				</div>
			</CardHeader>
			<CardContent className='p-4 space-y-3'>
				<div className='flex items-center gap-2 text-sm text-gray-300'>
					<Globe className='w-4 h-4 text-yellow-500' />
					<span>{url}</span>
				</div>
				<div className='flex flex-wrap gap-2 mt-3'>
					<Badge className='bg-yellow-500/20 text-yellow-300 border-yellow-500/50'>
						{url} cm
					</Badge>
					<Badge className='bg-blue-500/20 text-blue-300 border-blue-500/50'>
						{url} kg
					</Badge>
				</div>
			</CardContent>
		</Card>
	);
};

export default PersonCard;
