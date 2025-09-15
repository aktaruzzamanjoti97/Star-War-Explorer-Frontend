// app/person/layout.tsx
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Suspense fallback={<div className='p-8 text-gray-400'>Loading…</div>}>
			{children}
		</Suspense>
	);
}
