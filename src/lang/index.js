import Vue from "vue";
import VueI18n from "vue-i18n";
import store from '@/store/store'
import elEn from "element-ui/lib/locale/lang/en";
import elZh from "element-ui/lib/locale/lang/zh-CN";
import zh from "./zh";
import en from "./en";

Vue.use(VueI18n);

const messages = {
  zh: {
    ...zh,
    ...elZh
  },
  en: {
    ...en,
    ...elEn
  }
};
const i18n = new VueI18n({
  locale: store.state.lang,
  messages
});

export default i18n