type AboutQuoteProps = {
	quote: string;
};

const AboutQuote = ({ quote }: AboutQuoteProps) => {
	return (
		<section className="py-16 md:py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl">
					<div className="pl-6 md:pl-8 border-l-4 border-brand-red">
						<p className="text-2xl md:text-3xl font-serif italic text-gray-800">
							"{quote}"
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutQuote;
