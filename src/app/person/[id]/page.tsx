'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { swAPI } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import {
	ArrowLeft,
	Calendar,
	Eye,
	Palette,
	Ruler,
	User,
	Weight,
} from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

export default function PersonDetailPage() {
	const params = useParams();
	const router = useRouter();
	const personId = params.id as string;

	const { data: person, isLoading: personLoading } = useQuery({
		queryKey: ['person', personId],
		queryFn: () => swAPI.getPerson(personId),
	});

	if (personLoading) {
		return (
			<div className='max-w-6xl mx-auto space-y-8'>
				<Skeleton className='h-12 w-32' />
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					<Skeleton className='h-96' />
					<div className='lg:col-span-2 space-y-4'>
						<Skeleton className='h-8 w-3/4' />
						<Skeleton className='h-20 w-full' />
						<Skeleton className='h-40 w-full' />
					</div>
				</div>
			</div>
		);
	}

	if (!person) {
		return (
			<div className='text-center py-12'>
				<p className='text-red-400 text-lg'>Character not found</p>
				<Button onClick={() => router.push('/')} className='mt-4'>
					Return to Home
				</Button>
			</div>
		);
	}

	const props = person.properties;

	return (
		<div className='max-w-6xl mx-auto space-y-8'>
			{/* Back Button */}
			<Button
				onClick={() => router.back()}
				variant='ghost'
				className='text-gray-300 hover:text-yellow-400'>
				<ArrowLeft className='mr-2 h-4 w-4' />
				Back to Characters
			</Button>

			{/* Main Content */}
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
				{/* Character Image */}
				<div className='lg:col-span-1'>
					<Card className='overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700'>
						<div className='relative'>
							<Image
								src={
									'https://images.unsplash.com/photo-1756745678586-ffea7c66aeb2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								alt={props?.name as string}
								className='w-full h-[500px] object-cover'
								width={500}
								height={500}
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent' />
							<div className='absolute bottom-4 left-4 right-4'>
								<h1 className='text-4xl font-bold text-white mb-2'>
									{props?.name}
								</h1>
							</div>
						</div>
					</Card>
				</div>

				{/* Character Details */}
				<div className='lg:col-span-2 space-y-6'>
					{/* Basic Info */}
					<Card className='bg-gray-900/50 border-gray-700'>
						<CardHeader>
							<CardTitle className='text-2xl text-yellow-400'>
								Basic Information
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div className='flex items-center gap-3'>
									<Calendar className='w-5 h-5 text-yellow-500' />
									<div>
										<p className='text-sm text-gray-400'>
											Birth Year
										</p>
										<p className='text-white font-medium'>
											{props?.birth_year}
										</p>
									</div>
								</div>
								<div className='flex items-center gap-3'>
									<User className='w-5 h-5 text-yellow-500' />
									<div>
										<p className='text-sm text-gray-400'>Gender</p>
										<p className='text-white font-medium capitalize'>
											{props?.gender}
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Physical Characteristics */}
					<Card className='bg-gray-900/50 border-gray-700'>
						<CardHeader>
							<CardTitle className='text-2xl text-yellow-400'>
								Physical Characteristics
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
								<div className='text-center p-4 bg-gray-800/50 rounded-lg'>
									<Ruler className='w-6 h-6 text-blue-400 mx-auto mb-2' />
									<p className='text-sm text-gray-400'>Height</p>
									<p className='text-xl font-bold text-white'>
										{props?.height} cm
									</p>
								</div>
								<div className='text-center p-4 bg-gray-800/50 rounded-lg'>
									<Weight className='w-6 h-6 text-green-400 mx-auto mb-2' />
									<p className='text-sm text-gray-400'>Mass</p>
									<p className='text-xl font-bold text-white'>
										{props?.mass} kg
									</p>
								</div>
								<div className='text-center p-4 bg-gray-800/50 rounded-lg'>
									<Eye className='w-6 h-6 text-purple-400 mx-auto mb-2' />
									<p className='text-sm text-gray-400'>Eye Color</p>
									<p className='text-xl font-bold text-white capitalize'>
										{props?.eye_color}
									</p>
								</div>
								<div className='text-center p-4 bg-gray-800/50 rounded-lg'>
									<Palette className='w-6 h-6 text-orange-400 mx-auto mb-2' />
									<p className='text-sm text-gray-400'>Hair Color</p>
									<p className='text-xl font-bold text-white capitalize'>
										{props?.hair_color}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
