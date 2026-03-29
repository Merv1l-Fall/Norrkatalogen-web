"use client";

import Image from "next/image";
import { getImageUrl } from "@/constants/firebase";
import { useEffect, useState } from "react";
import NorrButton from "@/components/ui/buttons/NorrButton";
import { useMobileStore } from "@/lib/store/useMobileStore";

type Props = {
	lang: "en" | "sv";
	dict: {
		heroTitle: string;
		heroDescription: string;
		cta: string;
	};
};

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

const HeroSection = ({ lang, dict }: Props) => {
	const [imageUrl, setImageUrl] = useState<string>("");
	const isMobile = useMobileStore((state) => state.isMobile);
	const isUsingEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true";

	useEffect(() => {
		getImageUrl("/heroes/truck_summer.webp").then(setImageUrl);
	}, []);

	return (
		<section className="bg-brand-off-black text-brand-off-white relative overflow-hidden flex items-center justify-center w-full py-16 h-[calc(100vh-6rem)] border-b-2 border-brand-red">
			{imageUrl && (
				<Image
					src={imageUrl}
					alt={lang === "en" ? "Timber truck in summer conditions" : "Timmerbil i en sommrig skog"}
					fill
					className="absolute inset-0 z-0"
					style={{ objectFit: "cover", objectPosition: isMobile ? "35%" : "center", filter: "brightness(0.6) " }}
					sizes="100%"
					unoptimized={isUsingEmulator}
					loading="eager"
				/>
			)}
			<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
			<div className="container md:mx-auto px-4 relative z-10 flex flex-col items-start  h-full">
				<div>
				<h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-serif mb-4 line-clamp-3 lg:max-w-3xl">{highlightLastWord(dict.heroTitle)}</h1>
				<p className="text-2xl mb-6">{dict.heroDescription}</p>
				</div>

				<NorrButton variant="primary" size="lg" className="mt-auto">
					{dict.cta}
				</NorrButton>
			</div>
		</section>
	);
};

export default HeroSection;