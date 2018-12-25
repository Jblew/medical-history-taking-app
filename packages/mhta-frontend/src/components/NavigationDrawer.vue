<template>
    <v-list dense>
        <template v-for="item in items">
        <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
        >
            <v-flex xs6>
            <v-subheader v-if="item.heading">
                {{ item.heading }}
            </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
        </v-layout>
        <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
        >
            <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>
                {{ item.text }}
                </v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            @click="alert('hehe')"
            >
            <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                {{ child.text }}
                </v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list-group>
        <v-list-tile v-else @click="alert('hehe2')" :key="item.text">
            <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
            <v-list-tile-title>
                {{ item.text }}
            </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        </template>
    </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import { s } from "../store/store";
import * as _ from "lodash";
import { d, assertString, formatBigInt, timeDifferenceStr } from "../util/util";

export default Vue.extend({
    props: [],
    data() {
        return {
            items: [
                { icon: 'contacts', text: 'Contacts' },
                { icon: 'history', text: 'Frequently contacted' },
                { icon: 'content_copy', text: 'Duplicates' },
                {
                icon: 'keyboard_arrow_up',
                'icon-alt': 'keyboard_arrow_down',
                text: 'Labels',
                model: true,
                children: [
                    { icon: 'add', text: 'Create label' }
                ]
                },
                {
                icon: 'keyboard_arrow_up',
                'icon-alt': 'keyboard_arrow_down',
                text: 'More',
                model: false,
                children: [
                    { text: 'Import' },
                    { text: 'Export' },
                    { text: 'Print' },
                    { text: 'Undo changes' },
                    { text: 'Other contacts' }
                ]
                },
                { icon: 'settings', text: 'Settings' },
                { icon: 'chat_bubble', text: 'Send feedback' },
                { icon: 'help', text: 'Help' },
                { icon: 'phonelink', text: 'App downloads' },
                { icon: 'keyboard', text: 'Go to the old version' }
            ]
        };
    },
    methods: {
    },
    computed: {
    },
    components: {
    },
});
</script>

<style>
</style>
