import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/navigation/header/Header";
// import Footer from "@/components/navigation/footer/footer";
import { getDictionary } from "@/i18n/dictionaries";
import ModalWrapper from "@/components/ui/ModalWrapper";
import ContactForm from "@/components/ui/forms/ContactForm";
import Footer from "@/components/navigation/footer/footer";

type Locale = "en" | "sv";

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>;

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const metadataByLocale: Record<Locale, Metadata> = {
  en: {
    title: "Norrkatalogen",
    description:
      "Reach over 3600 trucking companies in northern Sweden with Norrkatalogen, the magazine for the northern Swedish trucking industry.",
  },
  sv: {
    title: "Norrkatalogen",
    description:
      "Nå över 3600 företag inom akeribranschen i norra Sverige med Norrkatalogen, Tidningen för åkerinäringen i norrland.",
  },
};

function isLocale(value: string): value is Locale {
  return value === "en" || value === "sv";
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return metadataByLocale[lang];
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${workSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header lang={lang} labels={dict.navbar} />
        {children}
        <Footer lang={lang} dict={dict.footer} />
		{/* <ModalWrapper onClose={() => {}}>
			<ContactForm messages={dict}/>
		</ModalWrapper> */}

      </body>
    </html>
  );
}
