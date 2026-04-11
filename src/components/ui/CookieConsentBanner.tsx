'use client';

import { useCookieStore } from '@/lib/store/useCookieStore';
import { useEffect, useState } from 'react';

type Props = {
	dict: {
		cookies: {
			title: string;
			description: string;
			acceptButton: string;
			rejectButton: string;
		};
	};
};

const CookieConsentBanner = ({ dict }: Props) => {
	const { hasConsented, acceptCookies, rejectCookies } = useCookieStore();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted || hasConsented) return null;

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-brand-off-black text-brand-off-white p-4 md:p-6 shadow-lg z-40">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div className="flex-1">
					<h3 className="font-semibold text-lg mb-2">{dict.cookies.title}</h3>
					<p className="text-sm text-gray-300">{dict.cookies.description}</p>
				</div>

				<div className="flex gap-3 flex-shrink-0">
					<button
						onClick={rejectCookies}
						className="px-4 py-2 text-sm font-medium border border-gray-400 text-gray-300 hover:text-white hover:border-white rounded transition"
					>
						{dict.cookies.rejectButton}
					</button>
					<button
						onClick={acceptCookies}
						className="px-4 py-2 text-sm font-medium bg-brand-red hover:bg-red-700 text-white rounded transition"
					>
						{dict.cookies.acceptButton}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CookieConsentBanner;
