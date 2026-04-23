
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib";
import { defineQuery } from "next-sanity";
import AboutContent from "../_components/AboutContent";

type Props = {
	params: Promise<{ lang: string }>;
};

type Locale = "en" | "sv";

const ABOUT_QUERY = defineQuery(`
  *[_type == "settings" && _id == "settings-" + $lang][0].about
`);

function isLocale(value: string): value is Locale {
	return value === "en" || value === "sv";
}

export default async function LocalizedAboutPage({ params }: Props) {
	const { lang } = await params;

	if (!isLocale(lang)) {
		notFound();
	}

	const { data: about } = await sanityFetch({
		query: ABOUT_QUERY,
		params: { lang },
		tags: ['settings'],
	});

	if (!about) {
		notFound();
	}

	return <AboutContent dict={about} />;
}