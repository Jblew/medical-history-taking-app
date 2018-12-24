<template>
<div id="history-view">
<v-content>
    <history-view-card :color="green" dark="true" title="Oczy">
        [ generated text ]
    </history-view-card>
</v-content>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { HistoryModule } from "store/modules/history/HistoryModule";
import { s } from "store/store";
import * as _ from "lodash";
import { d, assertString, formatBigInt, timeDifferenceStr } from "util/util";

import HistoryViewCard from "components/history/HistoryViewCard.vue";

export default Vue.extend({
    props: [],
    data() {v
        return {
            dialog: false,
        };
    },
    methods: {
    },
    computed: {
    },
    components: {
        HistoryViewCard,
    },
});
</script>

<style>
</style>
