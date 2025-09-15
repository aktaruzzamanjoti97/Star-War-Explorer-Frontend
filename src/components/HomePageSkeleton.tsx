import { Card, CardContent, CardHeader } from './ui/card';
import { Skeleton } from './ui/skeleton';

const HomePageSkeleton = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
			{[...Array(8)].map((_, i) => (
				<div key={i}>
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
				</div>
			))}
		</div>
	);
};

export default HomePageSkeleton;
