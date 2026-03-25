import "server-only";

const dictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  sv: () => import("@/messages/sv.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale => locale in dictionaries;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
