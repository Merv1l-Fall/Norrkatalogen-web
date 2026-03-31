"use client";

import { useInitMobileDetection } from "@/lib/store/useMobileStore";
import React from "react";

type Props = {
	lang: string;
	dict: any;
	children: React.ReactNode;
};

export default function HomeContent({ lang, dict, children }: Props) {
	useInitMobileDetection();

	return (
		<main className="flex min-h-screen flex-col items-center bg-brand-off-white text-brand-off-black">
			{children}
		</main>
	);
}
