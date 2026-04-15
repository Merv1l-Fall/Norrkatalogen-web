"use client";

import { FC, useState, useEffect } from "react";
import ContactForm from "@/components/ui/forms/ContactForm";
import MagazineInterestForm from "@/components/ui/forms/MagazineInterestForm";
import { useMobileStore } from "@/lib/store/useMobileStore";
import type { ValidationMessages } from "@/components/ui/forms/validationSchemas";
import type { ContactFormData, MagazineInterestFormData } from "@/components/ui/forms/types";
import { getImageUrl } from "@/constants/firebase";

interface ContactFormSectionProps {
	dict: any;
	contactDict: {
		title: string;
		contactFormTitle: string;
		contactFormDescription?: string;
		magazineTitle: string;
		magazineDescription?: string;
		email: string;
		phone: string;
	};
}

const ContactFormSection: FC<ContactFormSectionProps> = ({ dict, contactDict }) => {
	const isMobile = useMobileStore((state) => state.isMobile);
	const [imageUrl, setImageUrl] = useState<string>("");
	const isUsingEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true";
	const [contactLoading, setContactLoading] = useState(false);
	const [magazineLoading, setMagazineLoading] = useState(false);
	const [contactSuccess, setContactSuccess] = useState(false);
	const [magazineSuccess, setMagazineSuccess] = useState(false);
	const [contactError, setContactError] = useState<string | null>(null);
	const [magazineError, setMagazineError] = useState<string | null>(null);

	useEffect(() => {
		getImageUrl("/front_pages/omslagen.webp").then(setImageUrl);
	}, []);

	// Create the ValidationMessages object with the forms property
	const messages: ValidationMessages = {
		forms: dict.forms,
	};

	const handleContactSubmit = async (data: ContactFormData) => {
		setContactLoading(true);
		setContactError(null);
		setContactSuccess(false);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.error || "Failed to send message");
			}

			setContactSuccess(true);
			// Clear success message after 3 seconds
			setTimeout(() => setContactSuccess(false), 3000);
		} catch (error) {
			setContactError(error instanceof Error ? error.message : "An error occurred");
			// Clear error after 5 seconds
			setTimeout(() => setContactError(null), 5000);
		} finally {
			setContactLoading(false);
		}
	};

	const handleMagazineSubmit = async (data: MagazineInterestFormData) => {
		setMagazineLoading(true);
		setMagazineError(null);
		setMagazineSuccess(false);

		try {
			const response = await fetch("/api/magazine-interest", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.error || "Failed to send submission");
			}

			setMagazineSuccess(true);
			// Clear success message after 3 seconds
			setTimeout(() => setMagazineSuccess(false), 3000);
		} catch (error) {
			setMagazineError(error instanceof Error ? error.message : "An error occurred");
			// Clear error after 5 seconds
			setTimeout(() => setMagazineError(null), 5000);
		} finally {
			setMagazineLoading(false);
		}
	};

	return (
		<section className="w-full py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center">
			<div className="w-full max-w-7xl">
				{/* Section Title */}
				<div className="mb-12 text-center">
					<h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-brand-off-black">
						{contactDict.title}
					</h1>
				</div>

				{/* Forms Container - Responsive Layout */}
				<div className={`grid gap-32 ${isMobile ? "grid-cols-1" : "md:grid-cols-2"}  px-12 md:px-0`}>
					{/* Contact Form Column */}
					<div className="flex flex-col items-center md:items-start md:items-start border-b-2 border-brand-red pb-8 md:border-b-0 md:pb-0">
						<div className="mb-6">
							<h2 className="text-2xl font-bold font-serif text-brand-off-black mb-2">
								{contactDict.contactFormTitle}
							</h2>
							{contactDict.contactFormDescription && (
								<p className="text-gray-700 text-sm font-sans">{contactDict.contactFormDescription}</p>
							)}
						</div>
						<ContactForm 
							messages={messages} 
							onSubmit={handleContactSubmit}
							isLoading={contactLoading}
						/>
						{contactSuccess && (
							<div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
								{dict.forms.feedback.messageSent}
							</div>
						)}
						{contactError && (
							<div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
								{contactError}
							</div>
						)}
						<div className="flex flex-col justify-center mt-6 ">
							<a
								href="mailto:kontakt@norrkatalogen.se"
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg text-gray hover:text-gray-600 border-b border-gray-400 w-max"
							>
								{contactDict.email}: kontakt@norrkatalogen.se
							</a>
							<a href="tel:+46724034112" className="text-lg text-gray hover:text-gray-600 border-b border-gray-400 w-max mt-2">
								{contactDict.phone}: +46 72 403 41 12
							</a>
						</div>
					</div>

					{/* Magazine Interest Form Column */}
					<div className="flex flex-col items-center ">
						<div className="mb-6">
							<h2 className="text-2xl font-bold font-serif text-brand-off-black mb-2">
								{contactDict.magazineTitle}
							</h2>
							{contactDict.magazineDescription && (
								<p className="text-gray-700 text-sm font-sans">{contactDict.magazineDescription}</p>
							)}
						</div>
						<MagazineInterestForm 
							messages={messages} 
							onSubmit={handleMagazineSubmit}
							isLoading={magazineLoading}
						/>
						{magazineSuccess && (
							<div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
								{dict.forms.feedback.submissionSent}
							</div>
						)}
						{magazineError && (
							<div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
								{magazineError}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactFormSection;
