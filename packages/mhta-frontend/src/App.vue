<template>
  <v-app id="inspire app" dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list dense>
        <material-drawer-tile-router
          to="/"
          icon="dashboard"
        >{{ $t("ui.navigation.dashboard") | capitalize }}</material-drawer-tile-router>
        <material-drawer-tile-router
          to="/patients"
          icon="list"
        >{{ $t("ui.navigation.patients") | capitalize }}</material-drawer-tile-router>
        <material-drawer-tile-router
          to="/examination"
          icon="assignment"
        >{{ $t("ui.navigation.examination") | capitalize }}</material-drawer-tile-router>
        <material-drawer-tile-router
          to="/about"
          icon="copyright"
        >{{ $t("ui.navigation.about") | capitalize }}</material-drawer-tile-router>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018 - {{ year }} by {{ author }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { config } from "./config";

export default Vue.extend({
  props: [],
  data() {
    return {
      drawer: null,
      author: config.author,
      appTitle: config.appTitle
    };
  },
  methods: {},
  computed: {
    year: () => new Date().getFullYear()
  },
  components: {}
});
</script>

<style lang="scss" scoped>
</style>