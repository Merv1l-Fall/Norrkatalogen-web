import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactContent from "../_components/ContactContent";
import { Metadata } from "next";

type Props = {
	params: Promise<{ lang: string }>;
};

export const metadata: Metadata = {
	title: "Contact | Norrkatalogen",
	description: "Contact us or sign up for our magazine",
};

export default async function ContactPage({ params }: Props) {
	const { lang } = await params;

	if (!hasLocale(lang)) {
		notFound();
	}

	const dict = await getDictionary(lang);

	return (
		<ContactContent lang={lang} dict={dict}>
			<ContactFormSection dict={dict} contactDict={dict.contact} />
		</ContactContent>
	);
}
