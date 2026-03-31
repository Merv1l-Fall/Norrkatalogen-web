type props = {
	dict: {
		title: string;
		quote: string;
	}
}

const AdSection = ({ dict }: props) => {
	return (
		<section className="flex flex-col bg-brand-blue items-center gap-8 w-full px-4 py-16 border-b-2 border-brand-red">
			<div className="flex flex-col items-left gap-8">
			<h2 className="text-4xl italic text-brand-off-white font-serif font-semibold">{dict.title}</h2>
			<p className="text-xl text-brand-off-white max-w-4xl border-l-4 border-brand-red pl-4 py-4 font-sans">{dict.quote}</p>
			</div>
		</section>
	);
};

export default AdSection;