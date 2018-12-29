/**
 * i18n = The terms are frequently abbreviated to the numeronyms i18n (where 18 stands for the number of letters
 * between the first i and the last n in the word internationalization, a usage coined at Digital Equipment Corporation
 * in the 1970s or 1980s)[3][4] and L10n for localization, due to the length of the words.[5]
 * ~ https://en.wikipedia.org/wiki/Internationalization_and_localization
 */

import { Locale, LocaleMessages, Locales, LocaleCode } from "mhta-i18n";

export function chooseLocaleBasingOnRequestParams(): LocaleCode {
  return LocaleCode.PL;
}

export class I18n {
  private locale: Locale;

  public constructor(localeCode: LocaleCode) {
    const localeMap = Locales.getMap();
    this.locale = localeMap.get(localeCode) || Locales.getFallbackLocale();
  }

  public localize(transformFn: (l: I18n.Messages) => string): string {
    return transformFn(this.locale.messages);
  }
}

export namespace I18n {
  export type Messages = LocaleMessages;
}
