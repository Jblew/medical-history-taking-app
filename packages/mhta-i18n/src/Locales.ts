import { Locale } from "./type-model/Locale";
import { LocaleCode } from "./type-model/LocaleCode";

import locale_en from "./locales/en";
import locale_pl from "./locales/pl";

const localesMap: Map<LocaleCode, Locale> = new Map();
localesMap.set(locale_en.code, locale_en);
localesMap.set(locale_pl.code, locale_pl);

export namespace Locales {
  export function getFallbackLocale(): Locale {
    return locale_en;
  }
  export function getMap(): ReadonlyMap<LocaleCode, Locale> {
    return localesMap as ReadonlyMap<LocaleCode, Locale>;
  }
}
