type AboutFocusProps = {
	focusTitle: string;
	focusDescription: string;
	introDescription: string;
	publicationsDescription: string;
	publicationsCta: string;
	sectionsTitle: string;
	sectionsItems: string[];
	onPdfDownload: () => void;
};

const AboutFocus = ({
	focusTitle,
	focusDescription,
	introDescription,
	publicationsDescription,
	publicationsCta,
	sectionsTitle,
	sectionsItems,
	onPdfDownload,
}: AboutFocusProps) => {
	return (
		<section className="py-16 md:py-24 border-t border-b border-gray-200">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Left content */}
					<div>
						<h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-off-black mb-8 leading-tight">
							{focusTitle} bakom tekniken
						</h2>
						<p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
							{focusDescription}
						</p>
						<p className="text-sm md:text-base text-gray-600 leading-relaxed">
							{introDescription}
						</p>
					</div>

					{/* Right side - Calendar and sections */}
					<div className="space-y-6">
						{/* Calendar/Publications box */}
						<div className="bg-gray-100 p-6 md:p-8 rounded-lg text-center">
							<div className="text-4xl md:text-5xl font-serif font-bold text-brand-off-black mb-2">2026</div>
							<p className="text-sm md:text-base font-semibold text-gray-600  tracking-wider">
								{publicationsDescription}
							</p>
						</div>

				

						{/* Fixed sections */}
						<div className="bg-gray-100 p-6 md:p-8 rounded-lg">
							<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6">
								{sectionsTitle}
							</p>
							<div className="space-y-4">
								{sectionsItems.map((item, index) => (
									<div key={index} className="flex gap-4 items-start">
										<span className="font-serif text-2xl font-bold text-brand-red flex-shrink-0">
											{String(index + 1).padStart(2, "0")}
										</span>
										<p className="text-sm md:text-base text-gray-700 font-medium">{item}</p>
									</div>
								))}
							</div>
						</div>
								{/* Advertising button */}
						<button
							onClick={onPdfDownload}
							className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-6 md:py-8 px-6 rounded-lg transition font-semibold text-base md:text-lg flex flex-col items-center justify-center gap-2"
						>
							<div className="text-2xl">📄</div>
							{publicationsCta}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutFocus;
