import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { label: "Indonesia", value: "id", icon: "/icons/flag_id.svg" },
  { label: "English", value: "en", icon: "/icons/flag_en.svg" },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const [currentLang, setCurrentLang] = useState(LANGS[1]); // Default ke English

  // Hanya dijalankan di client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const langStorage = localStorage.getItem("i18nextLng");
      if (langStorage) {
        const selectedLang = LANGS.find((_lang) => _lang.value === langStorage);
        if (selectedLang) setCurrentLang(selectedLang);
      }
    }
  }, []);

  const handleChangeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", newLang);
    }
    setCurrentLang(LANGS.find((_lang) => _lang.value === newLang));
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
