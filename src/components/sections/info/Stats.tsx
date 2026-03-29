import { useEffect, useState } from "react";
import Image from "next/image";
import { useMobileStore } from "@/lib/store/useMobileStore";
import { getImageUrl } from "@/constants/firebase";

type Props = {
	dict: {
		titles: {
			1: string;
			2: string;
			3: string;
		};
	};
};

type StatsProps = {
	title: string;
	heading: string;
}
const textSection = ({ title, heading }: StatsProps) => {
	return(
		<div className="flex flex-col items-left w-full px-4">
				<h2 className="font-serif font-bold text-7xl text-brand-red">{heading.toUpperCase()}</h2>
				<p className="font-sans text-brand-blue text-2xl">{title.toUpperCase()}</p>
		</div>
	);
}

const Stats = ({ dict }: Props) => {
	const [imageUrl, setImageUrl] = useState<string>("");
	const isMobile = useMobileStore((state) => state.isMobile);
	const isUsingEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true";

	useEffect(() => {
		getImageUrl("/front_pages/ettan.webp").then(setImageUrl);
	}, []);

	return (
		<div className="flex flex-col items-center gap-16 w-full xl:flex-row md:border-b-2 md:h-calc[100vh-6rem] border-brand-red py-16 md:px-16 overflow-hidden">
			<div className="felx flex-col gap-16 md:flex-row flex items-center w-full justify-center">
				{textSection({ title: dict.titles[1], heading: "3600+" })}
				{textSection({ title: dict.titles[2], heading: "08" })}
				{textSection({ title: dict.titles[3], heading: "100%" })}
			</div>

			{imageUrl && (
				<Image
				src={imageUrl}
				alt="Image of the front page of Norrkatalogen #4 2025"
				width={isMobile ? 350 : 400}
				height={isMobile ? 491 : 310}
				className="rounded-md rotate-4"
				unoptimized={isUsingEmulator}
				/>
			)}
			</div>
	);
};

export default Stats;