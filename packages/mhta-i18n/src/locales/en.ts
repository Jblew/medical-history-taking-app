import { LocaleMessages } from "../type-model/LocaleMessages";
import { Locale } from "../type-model/Locale";
import { LocaleCode } from "../type-model/LocaleCode";

const messages: LocaleMessages = {
  ui: {
    navigation: {
      dashboard: "dashboard",
      about: "about",
      patients: "patients",
      examination: "examination"
    }
  }
};

const locale_en: Locale = {
  code: LocaleCode.EN,
  messages: messages
};

const locale_en_frozen: Locale = Object.freeze(locale_en);
export default locale_en_frozen;
