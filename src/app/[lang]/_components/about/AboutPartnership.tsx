"use client";

import Image from "next/image";
import NorrButton from "@/components/ui/buttons/NorrButton";
import { useEffect, useState } from "react";
import { getImageUrl } from "@/constants/firebase";

type AboutPartnershipProps = {
	title: string;
	description: string;
	services: string[];
};

const AboutPartnership = ({ title, description, services }: AboutPartnershipProps) => {
		const [imageUrl, setImageUrl] = useState<string | null>(null);
		const isUsingEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true";
	
		useEffect(() => {
			getImageUrl("/content/bridge_truck.jpg").then(setImageUrl);
		}, []);


	return (
		<section className="py-16 md:py-24 bg-brand-off-black text-brand-off-white border-b-2 border-brand-red">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left content */}
					<div>
						<h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-brand-red">
							{title}
						</h2>
						<p className="text-base md:text-lg text-brand-off-white/80 leading-relaxed mb-12">
							{description}
						</p>

						{/* Services in 2 columns */}
						<div className="grid grid-cols-2 gap-8 mb-12">
							{services.map((service, index) => (
								<div key={index}>
									<p className="font-serif text-lg md:text-xl font-bold">{service}</p>
								</div>
							))}
						</div>

						{/* CTA Button */}
						<NorrButton
							variant="primary"
							size="lg"
							className="flex items-center gap-2"
						>
							Kontakta oss för samarbete →
						</NorrButton>
					</div>

					{/* Right image */}
					{imageUrl && (
						<div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
							<Image
								src={imageUrl}
								alt="Team collaboration"
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

export default AboutPartnership;
