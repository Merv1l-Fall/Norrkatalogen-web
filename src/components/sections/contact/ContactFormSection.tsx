"use client";

import { FC, useState, useEffect } from "react";
import ContactForm from "@/components/ui/forms/ContactForm";
import MagazineInterestForm from "@/components/ui/forms/MagazineInterestForm";
import { useMobileStore } from "@/lib/store/useMobileStore";
import type { ValidationMessages } from "@/components/ui/forms/validationSchemas";
import Image from "next/image";
import { getImageUrl } from "@/constants/firebase";

interface ContactFormSectionProps {
	dict: any;
	contactDict: {
		title: string;
		contactFormTitle: string;
		contactFormDescription?: string;
		magazineTitle: string;
		magazineDescription?: string;
	};
}

const ContactFormSection: FC<ContactFormSectionProps> = ({ dict, contactDict }) => {
	const isMobile = useMobileStore((state) => state.isMobile);
	const [imageUrl, setImageUrl] = useState<string>("");
	const isUsingEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true";

	useEffect(() => {
		getImageUrl("/front_pages/omslagen.webp").then(setImageUrl);
	}, []);

	// Create the ValidationMessages object with the forms property
	const messages: ValidationMessages = {
		forms: dict.forms,
	};

	return (
		<section className="w-full py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center">
			<div className="w-full max-w-7xl">
				{/* Section Title */}
				<div className="mb-12 text-center">
					<h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-brand-off-black">{contactDict.title}</h1>
				</div>

				{/* Forms Container - Responsive Layout */}
				<div className={`grid gap-8 ${isMobile ? "grid-cols-1" : "md:grid-cols-2"}`}>
					{/* Contact Form Column */}
					<div className="flex flex-col">
						<div className="mb-6">
							<h2 className="text-2xl font-bold font-serif text-brand-off-black mb-2">
								{contactDict.contactFormTitle}
							</h2>
							{contactDict.contactFormDescription && (
								<p className="text-gray-700 text-sm font-sans">{contactDict.contactFormDescription}</p>
							)}
						</div>
						<ContactForm messages={messages} />
					</div>

					{/* Magazine Interest Form Column */}
					<div className="flex flex-col">
						<div className="mb-6">
							<h2 className="text-2xl font-bold font-serif text-brand-off-black mb-2">
								{contactDict.magazineTitle}
							</h2>
							{contactDict.magazineDescription && (
								<p className="text-gray-700 text-sm font-sans">{contactDict.magazineDescription}</p>
							)}
						</div>
						<MagazineInterestForm messages={messages} />
						{/* Decorative Image */}
						<div className="mt-8 flex">
							<Image
								src={imageUrl}
								alt="Magazine covers"
								width={450}
								height={200}
								className="object-cover"
								unoptimized={isUsingEmulator}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactFormSection;
