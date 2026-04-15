type Props = {
	dict: {
		title: string;
		description: string;
		title2: string;
		description2: string;
	};
};

const TextSection = ({ dict }: Props) => {
	return (
		<>
			<div className="flex justify-evenly w-full flex-col gap-8 py-8 md:flex-row">
				<div className="flex w-full md:flex-row flex-col gap-8  pb-8 md:h-full">
					<div className="flex flex-col gap-4 h-full items-left">
						<h3 className="text-4xl sm:text-4xl md:ml-4 md:text-5xl font-serif text-brand-off-black max-w-xl border-b-2 border-brand-blue md:width-1/2 pb-1">
							{dict.title}
						</h3>

						<p className="text-xl text-brand-soft-gray max-w-4xl md:ml-4 ">{dict.description}</p>
					</div>
				</div>
				<div className="flex w-full md:flex-row flex-col gap-8 pb-8 md:h-full">
					<div className="flex flex-col gap-4 h-full items-left">
						<h3 className="text-4xl sm:text-4xl md:ml-4 md:text-5xl font-serif text-brand-off-black max-w-xl border-b-2 border-brand-blue md:width-1/2 pb-1">
							{dict.title2}
						</h3>

						<p className="text-xl text-brand-soft-gray max-w-4xl md:ml-4 ">{dict.description2}</p>
					</div>
				</div>
			</div>
			<div >

			</div>
		</>
	);
};

export default TextSection;
