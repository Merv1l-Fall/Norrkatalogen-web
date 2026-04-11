"use client";
import AboutHero from "./about/AboutHero";
import AboutFocus from "./about/AboutFocus";
import AboutQuote from "./about/AboutQuote";
import AboutPartnership from "./about/AboutPartnership";

type AboutDict = {
	title: string;
	headline: string;
	intro: {
		title: string;
		description: string;
	};
	focus: {
		title: string;
		description: string;
	};
	sections: {
		title: string;
		intro: string;
		items: string[];
	};
	content: {
		title: string;
		items: string[];
	};
	publications: {
		title: string;
		description: string;
		cta: string;
		ctaDescription: string;
	};
	downloads: {
		utfallGuide: string;
		publicationSchedule: string;
	};
	expertise: {
		title: string;
		description: string;
		services: string[];
	};
};

type Props = {
	dict: AboutDict;
};

const AboutContent = ({ dict }: Props) => {
	const handlePdfDownload = () => {
		// This is for scaleability - in the future we might want to track downloads or generate PDFs dynamically
		console.log("PDF download initiated - link to be added");
	};

	return (
		<main className="min-h-screen bg-brand-off-white">
			<AboutHero headline={dict.headline} description={dict.intro.description} />

			<AboutFocus
				focusTitle={dict.focus.title}
				focusDescription={dict.focus.description}
				introDescription={dict.intro.description}
				publicationsDescription={dict.publications.description}
				publicationsCta={dict.publications.cta}
				sectionsTitle={dict.sections.title}
				sectionsItems={dict.sections.items}
				downloadUtfallLabel={dict.downloads.utfallGuide}
				downloadScheduleLabel={dict.downloads.publicationSchedule}
				onPdfDownload={handlePdfDownload}
			/>

			<AboutPartnership 
				title={dict.expertise.title}
				description={dict.expertise.description}
				services={dict.expertise.services}
			/>
		</main>
	);
};

export default AboutContent;
