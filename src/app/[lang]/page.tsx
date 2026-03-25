import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import Header from "@components/navigation/header/Header";

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
      <Header lang={lang} labels={dict.navbar} />
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24 bg-brand-off-white text-brand-off-black">
        <h1 className="font-sans text-9xl text-center">{dict.home.headline}</h1>
        <p className="font-sans text-lg text-center max-w-2xl">{dict.home.description}</p>
      </main>
    </>
  );
}
