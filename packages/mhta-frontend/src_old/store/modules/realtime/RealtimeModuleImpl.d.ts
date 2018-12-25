import { Module } from "vuex";
import { RealtimeModule as Me } from "./RealtimeModule";
export declare namespace RealtimeModuleImpl {
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
