import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import HeroSection from "@/components/sections/hero/Hero";
import InfoSection from "@/components/sections/info/Info";
import HomeContent from "./_components/HomeContent";
import AdSection from "@/components/sections/adSection/AdSection";

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
    <HomeContent lang={lang} dict={dict}>
      <HeroSection lang={lang} dict={dict.hero} />
      <InfoSection dict={dict.info} />
      <AdSection dict={dict.adSection} />
    </HomeContent>
  );
}
