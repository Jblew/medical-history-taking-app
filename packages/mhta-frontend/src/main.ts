import Vue from "vue";
import Vuetify from "vuetify";
import WebFontLoader from "webfontloader";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import store from "./store";

import "./components/common/common_components";
import "./filters";

Vue.config.productionTip = false;

// Vuetify
Vue.use(Vuetify);
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted() {
    WebFontLoader.load({
      google: {
        families: ["Roboto:100,300,400,500,700,900"]
      },
      active: this.setFontLoaded
    });
  },
  methods: {
    setFontLoaded() {
      this.$emit("font-loaded");
    }
  }
}).$mount("#app");
