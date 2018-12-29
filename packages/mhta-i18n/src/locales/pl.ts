import { LocaleMessages } from "../type-model/LocaleMessages";
import { Locale } from "../type-model/Locale";
import { LocaleCode } from "../type-model/LocaleCode";

const messages: LocaleMessages = {
  ui: {
    navigation: {
      dashboard: "panel",
      about: "informacje",
      patients: "pacjenci",
      examination: "badania"
    }
  }
};

const locale_pl: Locale = {
  code: LocaleCode.PL,
  messages: messages
};

const locale_pl_frozen: Locale = Object.freeze(locale_pl);
export default locale_pl_frozen;
