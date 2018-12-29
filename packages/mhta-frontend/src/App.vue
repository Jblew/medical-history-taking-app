<template>
  <v-app id="inspire app" dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list dense>
        <material-drawer-tile-router to="/" icon="dashboard">{{ text.dashboard | capitalize }}</material-drawer-tile-router>
        <material-drawer-tile-router to="/patients" icon="list">{{ text.patients | capitalize }}</material-drawer-tile-router>
        <material-drawer-tile-router
          to="/examination"
          icon="assignment"
        >{{ text.examination | capitalize }}</material-drawer-tile-router>
        <material-drawer-tile-router to="/about" icon="copyright">{{ text.about | capitalize }}</material-drawer-tile-router>
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
// @ts-check

import Vue from "vue";
import { config, i18n } from "./global";

export default Vue.extend({
  props: [],
  data() {
    return {
      text: {
        dashboard: i18n.localize(l => l.ui.navigation.dashboard),
        patients: i18n.localize(l => l.ui.navigation.patients),
        examination: i18n.localize(l => l.ui.navigation.examination),
        about: i18n.localize(l => l.ui.navigation.about)
      },
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