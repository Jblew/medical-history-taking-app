import Vue from "vue";
import Vuex, { GetterTree, MutationTree } from "vuex";
import { Module, ModuleTree, ActionTree, Dispatch, Commit } from "vuex";
import createPersistedState from "vuex-persistedstate";

import { HistoryModule } from "./modules/history/HistoryModule";
import { HistoryModuleImpl } from "./modules/history/HistoryModuleImpl";

Vue.use(Vuex);

declare const __VERSION__: string;
export const PERSISTENCE_LOCALSTORAGE_KEY = "mhta_" + (__VERSION__ ? __VERSION__ : "");

/**
 * Root state types
 */
export interface RootState {
  unusedPathToBeSavedByTheVuexPersistedStateBecauseIfPathsArrayIsEmptyItSavesEverything: string;
  nowTimer: Date;
}
const state: RootState = {
  unusedPathToBeSavedByTheVuexPersistedStateBecauseIfPathsArrayIsEmptyItSavesEverything: "",
  nowTimer: new Date(),
};

export class Mutations {
  public static updateNowTimer = "updateNowTimer";
}
const mutations: MutationTree<RootState> = {
  [Mutations.updateNowTimer](state: RootState) {
    state.nowTimer = new Date;
  },
};

export class Actions {
  public static initialize: string = "initialize";
}
const actions: ActionTree<RootState, RootState> = {
  [Actions.initialize]: (
      { commit, dispatch, state }
  ): void => {
      dispatch(HistoryModule.Actions.initialize);

      setInterval(() => {
        commit("updateNowTimer")
      }, 1000)
  },
};


/**
 * Modules
 */
export interface Modules {
  [HistoryModule.modulePathName]: Module<HistoryModule.State, RootState>;
}
const modules: Modules & ModuleTree<RootState> = {
  [HistoryModule.modulePathName]: HistoryModuleImpl.module,
};

const persistentPaths: string [] = [];
persistentPaths.push("_prevent_empty_save");
HistoryModuleImpl.persistentPaths.forEach(persistentPath => persistentPaths.push(HistoryModule.modulePathName+ "." + persistentPath));


export type State = {
  [HistoryModule.modulePathName]: HistoryModule.State;
} & RootState;

/**
 * Store type guard
 */
export interface Store {
  state: State,
  dispatch: Dispatch,
  commit: Commit,
  getters: any
}

/**
 * This function allows proper store type resolution & guarding.
 * @param incognitoStore
 */
export function s(incognitoStore: any): Store {
  return incognitoStore as Store;
}



/**
 * Store
 */
console.log(persistentPaths);
export const store = new Vuex.Store<RootState>({
  strict: ( window.location.hostname === "localhost" ? true : false ),
  state: state,
  actions: actions,
  mutations: mutations,
  modules: modules,
  plugins: [
    createPersistedState({
      key: PERSISTENCE_LOCALSTORAGE_KEY,
      paths: persistentPaths,
    }),
  ],
});
