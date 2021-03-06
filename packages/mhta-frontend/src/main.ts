import Vue from "vue";
import Vuetify from "vuetify";
import WebFontLoader from "webfontloader";
import App from "./App.vue";
import router from "./router";
import { store, Actions, s } from "./store/store";

Vue.config.productionTip = false;

// Vuetify
Vue.use(Vuetify);
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
import "firebaseui/dist/firebaseui.css";

// Mixins
import "./components/common/common_components";
import "./filters";
import "./i18n";
import { routes } from "./routes";
import { AuthModule } from "./store/modules/auth/AuthModule";

new Vue({
  router,
  store,
  render: h => h(App),
  computed: {
    authState(): AuthModule.AuthState {
      return s(this.$store).state.auth.state;
    }
  },
  watch: {
    authState(oldAuthState, authState) {
      if (authState === AuthModule.AuthState.NOTAUTHENTICATED) {
        console.log("Main: user not authenticated");
        this.$router.push(routes.auth.path);
      }
    }
  },
  created() {
    this.$store.dispatch(Actions.initialize);
  },
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
