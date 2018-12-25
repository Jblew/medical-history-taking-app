import { Module } from "vuex";
import { StatusModule as Me } from "./StatusModule";
export declare namespace StatusModuleImpl {
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
