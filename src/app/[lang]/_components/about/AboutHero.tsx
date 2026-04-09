"use client";
import { getImageUrl } from "@/constants/firebase";
import Image from "next/image";
import { useEffect, useState } from "react";

type AboutHeroProps = {
	headline: string;
	description: string;
};

const AboutHero = ({ headline, description }: AboutHeroProps) => {
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const isUsingEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true";

	useEffect(() => {
		getImageUrl("/content/truck_winter_day.jpg").then(setImageUrl);
	}, []);

	const highlightLastWord = (text: string) => {
	const words = text.split(" ");
	if (words.length === 0) return text;
	const lastWord = words.pop();
	const beforeLastWord = words.join(" ");
	return (
		<>
			{beforeLastWord && <>{beforeLastWord} </>}
			<span className="text-brand-red">{lastWord}</span>
		</>
	);
};
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Left content */}
					<div>
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-off-black mb-6 leading-tight">
							{highlightLastWord(headline)}
						</h1>
						<p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">{description}</p>
					</div>

					{/* Right image */}
					{imageUrl && (
						<div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
							<Image
								src={imageUrl}
								alt="Timbertruck in a winter landscape"
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
								unoptimized={isUsingEmulator}
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default AboutHero;
