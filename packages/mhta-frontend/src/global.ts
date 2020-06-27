import { I18n, chooseLocaleBasingOnRequestParams } from "./i18n";

export const i18n = new I18n(chooseLocaleBasingOnRequestParams());
export { I18n } from "./i18n";

export { config } from "./config";

export { s } from "./store/store";
