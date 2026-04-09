
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import AboutContent from "../_components/AboutContent";

type Props = {
	params: Promise<{ lang: string }>;
};

export default async function LocalizedAboutPage({ params }: Props) {
	const { lang } = await params;

	if (!hasLocale(lang)) {
		notFound();
	}

	const dict = await getDictionary(lang);

	return <AboutContent dict={dict.about} />;
}