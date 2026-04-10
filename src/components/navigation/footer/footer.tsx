"use client";
import Link from "next/link";
import Image from "next/image";
import { useModalStore } from "@/lib/store/useModalStore";
import PrivacyPolicyModal from "@/components/ui/PrivacyPolicyModal";

type Props = {
	lang: "en" | "sv";
	dict: {
		labels: {
			contact: string;
			privacy: string;
			terms: string;
			home: string;
			email: string;
			phone: string;
			about: string;
			phoneNumber: string;
		};
		privacyPolicy: {
			title: string;
			lastUpdated: string;
			sections: Array<{
				heading: string;
				content: string;
			}>;
		};
	};
};

const Footer = ({ lang, dict }: Props) => {
	const { openModal } = useModalStore();

	return (
		<>
			<footer className="flex items-center justify-evenly md:flex-row flex-col gap-4 md:gap-8 py-6 bg-brand-off-black text-brand-off-white">
				<Link href={`/${lang}`} aria-label={`Norrkatalogen - ${dict.labels.home}`}>
					<Image src="/NorrkatalogenWhite.svg" alt="" width={180} height={50} />
					<p className="text-xs text-gray-400">
						Norrkatalogen 2026 all rights reserved
					</p>
				</Link>
				<div className="flex gap-6 flex-col md:flex-row items-center">
					<Link href={`/${lang}/contact`} className="text-xl text-gray-400 hover:text-gray-200">
						{dict.labels.contact}
					</Link>
					<Link href={`/${lang}/about`} className="text-xl text-gray-400 hover:text-gray-200">
						{dict.labels.about}
					</Link>
					<button 
						onClick={openModal}
						className="text-xl text-gray-400 hover:text-gray-200 cursor-pointer" 
					>
						{dict.labels.privacy}
					</button>
				</div>
				<div className="flex flex-col">
					<a
						href="mailto:kontakt@norrkatalogen.se"
						target="_blank"
						rel="noopener noreferrer"
						className="text-lg text-gray-400 hover:text-gray-200"
					>
						{dict.labels.email}: kontakt@norrkatalogen.se
					</a>
					<a href={`tel:${dict.labels.phoneNumber}`} className="text-lg text-gray-400 hover:text-gray-200">
						{dict.labels.phone}: {dict.labels.phoneNumber}
					</a>
				</div>
			</footer>
			<PrivacyPolicyModal dict={{ privacyPolicy: dict.privacyPolicy }} />
		</>
	);
};

export default Footer;
