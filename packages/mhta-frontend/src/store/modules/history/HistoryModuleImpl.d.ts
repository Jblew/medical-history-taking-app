import { Module } from "vuex";
import { HistoryModule as Me } from "./HistoryModule";
export declare namespace HistoryModuleImpl {
    const state: Me.State;
    const persistentPaths: string[];
    /**
     * Getters
     */
    class Getters {
    }
    /**
     * Module
     */
    const module: Module<Me.State, any>;
}
