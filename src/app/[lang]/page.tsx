import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib";
import { defineQuery } from "next-sanity";
import HeroSection from "@/components/sections/hero/Hero";
import InfoSection from "@/components/sections/info/Info";
import HomeContent from "./_components/HomeContent";
import AdSection from "@/components/sections/adSection/AdSection";

type Props = {
  params: Promise<{ lang: string }>;
};

type Locale = "en" | "sv";

// Query for home page sections
const HOME_CONTENT_QUERY = defineQuery(`
  *[_type == "settings" && _id == "settings-" + $lang][0] {
    hero,
    info,
    adSection,
  }
`);

function isLocale(value: string): value is Locale {
  return value === "en" || value === "sv";
}

export default async function LocalizedHome({ params }: Props) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const { data: content } = await sanityFetch({
    query: HOME_CONTENT_QUERY,
    params: { lang },
    tags: ['settings'],
  });

  if (!content) {
    notFound();
  }

  return (
    <HomeContent lang={lang} dict={{ ...content }}>
      <HeroSection lang={lang} dict={content.hero} />
      <InfoSection dict={content.info} />
      <AdSection dict={content.adSection} />
    </HomeContent>
  );
}
