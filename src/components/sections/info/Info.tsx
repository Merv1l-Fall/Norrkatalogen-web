type Props = {
	dict: {
		title: string;
		description: string;
		subTitle: string;
		subDescription: string;
	};
};

const InfoSection = ({ dict }: Props) => {
	return (
		<section className="bg-brand-off-white flex flex-col items-center gap-30 py-16 px-4 text-brand-off-black h-[calc(100vh-6rem)]">
			<div className="flex justify-space-between items-center w-full md:flex-row flex-col gap-8 md:border-b-2 border-brand-red pb-8">
				<h2 className="text-4xl sm:text-4xl md:text-5xl font-bold font-serif color-brand-off-black max-w-2xl border-b-1 border-dotted border-brand-red md:border-b-0">
					
					{dict.title}
				</h2>

				<p className="text-xl">{dict.description}</p>
			</div>
			<div className="flex justify-space-between items-center w-full md:flex-row flex-col gap-8">
				<h2 className="text-4xl sm:text-4xl md:text-5xl font-bold font-serif color-brand-off-black max-w-2xl border-b-1 border-dotted border-brand-red md:border-b-0">
					
					{dict.subTitle}
				</h2>

				<p className="text-xl">{dict.subDescription}</p>
			</div>
		</section>
	);
};

export default InfoSection;
