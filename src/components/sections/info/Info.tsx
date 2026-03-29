"use client";
import Stats from "./Stats";
import TextSection from "./TextSection";

type Props = {
	dict: {
		titles: {
			1: string;
			2: string;
			3: string;
		};
		title: string;
		description: string;
		subTitle: string;
		subDescription: string;
		title2: string;
		description2: string;
	};
};

const InfoSection = ({ dict }: Props) => {

		const textSectionDict = {
		title: dict.title,
		description: dict.description,
		title2: dict.title2,
		description2: dict.description2,
	}

	const statsSectionDict = {
		titles: dict.titles
	}
	return (
		<section className="bg-brand-off-white flex flex-col text-brand-off-black w-full px-4">
			<Stats dict={statsSectionDict} />
			<TextSection dict={textSectionDict} />
		</section>
	);
};

export default InfoSection;
