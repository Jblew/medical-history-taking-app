import Vue from "vue";
import Vuetify from "vuetify";
import WebFontLoader from "webfontloader";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Vuetify
Vue.use(Vuetify);
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader

// Mixins
import "./components/common/common_components";
import "./filters";
import "./i18n";

new Vue({
  router,
  store,
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
