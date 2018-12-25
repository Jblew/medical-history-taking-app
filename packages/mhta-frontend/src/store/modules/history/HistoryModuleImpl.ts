import { MutationTree, ActionTree, GetterTree, Module } from "vuex";
import { HistoryApiHelper } from "./HistoryApiHelper";
import { HistoryModule as Me } from "./HistoryModule";
import { d, assertString } from "../../../util/util";
import ow from "ow";
import { HistoryRecord } from "../../../model/HistoryRecord";

export namespace HistoryModuleImpl {

    export const state: Me.State = {
        loading: false,
        error: "",
        record: HistoryRecord.getDefault("/"),
    };
    Me.validateState(state);
    export const persistentPaths: string [] = [
        
    ];




    /**
     * Mutations
     */
    // do not export as these mutations are private
    class Mutations {
        public static setLoading =  Me.localName("setLoading");
        public static setError = Me.localName("setError");
        public static setRecord = Me.localName("setRecord");
    }

    const mutations: MutationTree<Me.State> = {
        [Mutations.setLoading](
            state: Me.State, payload: boolean,
        ) {
            ow(payload, ow.boolean.label("payload"));

            state.loading = payload;
            Me.validateState(state);
        },

        [Mutations.setError](
            state: Me.State, payload: string,
        ) {
            ow(payload, ow.string.label("payload"));

            state.error = payload;
            Me.validateState(state);
        },

        [Mutations.setRecord](
            state: Me.State, payload: HistoryRecord | undefined,
        ) {
            ow(payload, ow.any(ow.undefined, ow.object.label("payload")));
            if (payload) HistoryRecord.validate(payload);

            state.record = payload;
            Me.validateState(state);
        },
    };

    /**
     * Actions
     */
    class PrivateActions {
    }

    const actions: ActionTree<Me.State, Me.State> = {
        [Me.Actions.initialize]: (
            { commit, dispatch, state }, payload: {},
        ): void => {
            
        },

        [Me.Actions.setPath]: (
            { commit, dispatch, state }, payload: string,
        ): void => {
            
        },
    };


    /**
     * Getters
     */
    export class Getters {

    };

    const getters: GetterTree<Me.State, Me.State> = {
    };


    /**
     * Module
     */
    export const module: Module<Me.State, any> = {
        state: state,
        mutations: mutations,
        actions: actions,
        getters: getters
    };
};
