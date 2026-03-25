import type { Metadata } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

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

  return (
    <html
      lang={lang}
      className={`${workSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
