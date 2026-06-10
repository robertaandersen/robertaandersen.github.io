import { createContext, useContext, useState, ReactNode } from 'react';
import is from './is.json';
import en from './en.json';

type Language = 'is' | 'en';
type Translations = typeof is;

const translations: Record<Language, Translations> = { is, en };

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}>({ lang: 'is', setLang: () => {}, t: is });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('is');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
