import { Module, Dispatch, Commit } from "vuex";
import { HistoryModule } from "./modules/history/HistoryModule";
export declare const PERSISTENCE_LOCALSTORAGE_KEY: string;
/**
 * Root state types
 */
export interface RootState {
    unusedPathToBeSavedByTheVuexPersistedStateBecauseIfPathsArrayIsEmptyItSavesEverything: string;
    nowTimer: Date;
}
export declare class Mutations {
    static updateNowTimer: string;
}
export declare class Actions {
    static initialize: string;
}
/**
 * Modules
 */
export interface Modules {
    [HistoryModule.modulePathName]: Module<HistoryModule.State, RootState>;
}
export declare type State = {
    [HistoryModule.modulePathName]: HistoryModule.State;
} & RootState;
/**
 * Store type guard
 */
export interface Store {
    state: State;
    dispatch: Dispatch;
    commit: Commit;
    getters: any;
}
/**
 * This function allows proper store type resolution & guarding.
 * @param incognitoStore
 */
export declare function s(incognitoStore: any): Store;
export declare const store: import("vuex").Store<RootState>;
