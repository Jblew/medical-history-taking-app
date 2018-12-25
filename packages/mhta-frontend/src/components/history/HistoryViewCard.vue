<template>
    <v-flex xs12>
        <!-- color="blue-grey darken-2" class="white- -text" -->
        <v-card :color="color" :dark="dark" theme="light" class="elevation-2">
            <v-card-title>
                <div>
                    <h3 class="headline mb-0">{{ title }}</h3>
                    <span>
                        <slot></slot>
                    </span>
                </div>
            </v-card-title>
        </v-card>
    </v-flex>
</template>

<script lang="ts">
import Vue from "vue";
import { HistoryModule } from "../../store/modules/history/HistoryModule";
import { s } from "../../store/store";
import * as _ from "lodash";
import { d, assertString, formatBigInt, timeDifferenceStr } from "../../util/util";

export default Vue.extend({
    props: [ "color", "dark", "title" ],
    data() {
        return {
        };
    },
    methods: {
        addSection() {

        }
    },
    computed: {
    },
    components: {
    },
});
</script>

<style>

</style>
