import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib";
import { defineQuery } from "next-sanity";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactContent from "../_components/ContactContent";
import { Metadata } from "next";

type Props = {
	params: Promise<{ lang: string }>;
};

type Locale = "en" | "sv";

const CONTACT_QUERY = defineQuery(`
  *[_type == "settings" && _id == "settings-" + $lang][0] {
    contact,
    forms,
  }
`);

function isLocale(value: string): value is Locale {
	return value === "en" || value === "sv";
}

export const metadata: Metadata = {
	title: "Contact | Norrkatalogen",
	description: "Contact us or sign up for our magazine",
};

export default async function ContactPage({ params }: Props) {
	const { lang } = await params;

	if (!isLocale(lang)) {
		notFound();
	}

	const { data: content } = await sanityFetch({
		query: CONTACT_QUERY,
		params: { lang },
		tags: ['settings'],
	});

	if (!content) {
		notFound();
	}

	return (
		<ContactContent lang={lang} dict={content}>
			<ContactFormSection dict={content} contactDict={content.contact} />
		</ContactContent>
	);
}
