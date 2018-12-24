/* tslint:disable no-console */
import { d } from "./util/util";
import { BuildContext } from "./BuildContext";


/**
 * Configuration
 */
BuildContext.failIfMissing();
console.log("medical-history-taking-app version: " + BuildContext.VERSION + ". Built at " + BuildContext.BUILDDATETIME);


/**
 * Import Vue & dependencies
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";

/**
 * Import components
 */
import App from "./components/App.vue";
import HistoryView from "./components/history/HistoryView.vue";
import NotFoundView from "./components/misc/NotFoundView.vue";
import { store, Actions } from "./store/store";


/**
 * Import global css
 */
import 'vuetify/dist/vuetify.min.css'


/**
 * Initialize dependencies
 */
Vue.use(Vuetify, {
    theme: {
        primary: "#795548",
        secondary: "#8D6E63",
        accent: "#FF5722",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50"
    }
});
Vue.use(VueRouter);


/**
 * Start app
 */
const router = new VueRouter({
    mode: (window.location.hostname === "localhost" ? "hash" : "history"),
    routes: [
        // history
        { path: '/', component: HistoryView },
        
        { path: '*', component: NotFoundView }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

const v = new Vue({
    el: "#app",
    store: store,
    router: router,
    render: h => h(App),
});


// initialize steemconnect & eventually login automatically
v.$store.dispatch(Actions.initialize);
