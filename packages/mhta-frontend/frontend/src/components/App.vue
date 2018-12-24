<!-- src/components/App.vue -->
<template>
    <v-app id="mhta" dark>
        <v-navigation-drawer
            fixed
            :clipped="$vuetify.breakpoint.mdAndUp"
            app
            v-model="drawer"
        >
            <navigation-drawer  />
        </v-navigation-drawer>
        
        <v-toolbar app dark color="primary" :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">Dr Rieux</span>
            </v-toolbar-title>
        </v-toolbar>

        <router-view></router-view>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationDrawer from "./NavigationDrawer.vue";
import TopToolbar from "./TopToolbar.vue";

export default Vue.extend({
    props: [],
    data() {
        return {
            drawer: null
        }
    },
    methods: {
    },
    computed: {
    },
    components: {
        NavigationDrawer,
        TopToolbar,
    },
});
</script>

<style>

</style>
