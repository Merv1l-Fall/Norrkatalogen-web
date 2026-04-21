import type { Metadata, Viewport } from "next";
import { Newsreader, Work_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/navigation/header/Header";
// import Footer from "@/components/navigation/footer/footer";
import { getDictionary } from "@/i18n/dictionaries";
import Footer from "@/components/navigation/footer/footer";
import CookieConsentBanner from "@/components/ui/CookieConsentBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

const metadataByLocale: Record<Locale, Metadata> = {
  en: {
    title: "Norrkatalogen",
    description:
      "Reach over 2300 trucking companies in northern Sweden with Norrkatalogen, the magazine for the northern Swedish trucking industry.",
  },
  sv: {
    title: "Norrkatalogen",
    description:
      "Nå över 2300 företag inom åkeribranschen i norra Sverige med Norrkatalogen, Tidningen för åkerinäringen i Norrland.",
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

  return {
    ...metadataByLocale[lang],
  };
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/NorrkatalogenBlack.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/NorrkatalogenWhite.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header lang={lang} labels={dict.navbar} />
        {children}
        <Footer lang={lang} dict={{ ...dict.footer, privacyPolicy: dict.privacyPolicy }} />
        <CookieConsentBanner dict={{ cookies: dict.cookies }} />
        <SpeedInsights />
      </body>
    </html>
  );
}
