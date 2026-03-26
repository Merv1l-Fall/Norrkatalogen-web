import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import HeroSection from "@/components/sections/hero/Hero";
import InfoSection from "@/components/sections/info/Info";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function LocalizedHome({ params }: Props) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-6 bg-brand-off-white text-brand-off-black">
		 <HeroSection lang={lang} dict={dict.hero} />
		 <InfoSection dict={dict.info} />
      </main>
    </>
  );
}
