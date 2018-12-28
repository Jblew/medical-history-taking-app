import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";
import { locales } from "mhta-i18n";

Vue.use(VueI18n);

const messages: LocaleMessages = {
  en: locales.en.messages as { [x: string]: any },
  pl: locales.pl.messages as { [x: string]: any }
};

export default new VueI18n({
  locale: "pl",
  messages: messages
});
