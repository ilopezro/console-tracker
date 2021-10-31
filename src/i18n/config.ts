import i18n from "i18next"
import pages from "i18n/en/pages"
import { initReactI18next } from "react-i18next"

export const resources = {
  en: {
    pages,
  },
}

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["pages"],
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
})
