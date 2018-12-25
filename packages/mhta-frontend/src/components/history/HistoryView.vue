<template>
<div id="history-view">
<v-content>
    <v-container fluid fill-height grid-list-lg>
        <!--<v-layout align-space-between justify-start column fill-height/>
            <section>
        </v-layout>-->
        <v-layout row wrap>
            <history-view-card color="green" dark="true" title="Główne dolegliwości i wnioski">
                Badanie podmiotowe oczu: Wywiad od pacjenta. Badanie przedmiotowe: w badaniu przedmiotowym 
                        zbadano a, b, c. Stwierdzono następujące odchylenia od normy: asymetria oka prawego.
            </history-view-card>
            <history-view-card color="light-blue" dark="true" title="Wcześniejsza historia medyczna">
                Badanie podmiotowe oczu: Wywiad od pacjenta. Badanie przedmiotowe: w badaniu przedmiotowym 
                        zbadano a, b, c. Stwierdzono następujące odchylenia od normy: asymetria oka prawego.
            </history-view-card>
            <history-view-card color="black" dark="true" title="Sytuacja prawna">

            </history-view-card>
            <history-view-card color="primary" dark="true" title="Oczy">
                Badanie podmiotowe oczu: Wywiad od pacjenta. Badanie przedmiotowe: w badaniu przedmiotowym 
                        zbadano a, b, c. Stwierdzono następujące odchylenia od normy: asymetria oka prawego.
            </history-view-card>
        </v-layout>
    </v-container>
</v-content>

<v-btn fab bottom right color="accent" dark fixed @click.stop="addSection()">
    <v-icon>add</v-icon>
</v-btn>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { HistoryModule } from "../../store/modules/history/HistoryModule";
import { s } from "../../store/store";
import * as _ from "lodash";
import { d, assertString, formatBigInt, timeDifferenceStr } from "../../util/util";

import HistoryViewCard from "./HistoryViewCard.vue";

export default Vue.extend({
    props: [],
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        addSection() {

        }
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
