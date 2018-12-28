import { en } from "./locales/en";
import { pl } from "./locales/pl";
import { LangTypeModel } from "./locales/LangTypeModel";

//
// types
export type LocaleCode = "pl" | "en";
export interface Locale {
  code: LocaleCode;
  messages: LangTypeModel;
}

export interface Locales {
  en: Locale & { code: "en" };
  pl: Locale & { code: "pl" };
}

//
// locales
export const locales: Locales = {
  en: {
    code: "en",
    messages: en
  },
  pl: {
    code: "pl",
    messages: pl
  }
};

//
// export raw locales
export { en } from "./locales/en";
export { pl } from "./locales/pl";
