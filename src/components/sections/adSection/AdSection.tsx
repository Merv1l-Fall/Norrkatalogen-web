"use client";

import Image from "next/image";
import { getImageUrl } from "@/constants/firebase";
import { useEffect, useState } from "react";

type props = {
	dict: {
		title: string;
		quote: string;
		frontCoversAlt: string;
	}
}

const AdSection = ({ dict }: props) => {
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const isUsingEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true";

	useEffect(() => {
		getImageUrl("/front_pages/omslagen.webp").then(setImageUrl);
	}, []);

	return (
		<section className="flex flex-col bg-brand-blue items-center gap-8 w-full px-4 py-16 border-b-2 border-brand-red">
			<div className="flex flex-col items-center gap-8 max-w-5xl">
				<h2 className="text-4xl italic text-brand-off-white font-serif font-semibold">{dict.title}</h2>
				<p className="text-xl text-brand-off-white max-w-4xl border-l-4 border-brand-red pl-4 py-4 font-sans">{dict.quote}</p>
				{imageUrl && (
					<div className="w-full mt-8">
						<Image
							src={imageUrl}
							alt={dict.frontCoversAlt}
							width={400}
							height={300}
							className=""
							priority={false}
							unoptimized={isUsingEmulator}
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default AdSection;