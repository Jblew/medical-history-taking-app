import { Module } from "vuex";
import { RulesetsModule as Me } from "./RulesetsModule";
export declare namespace RulesetsModuleImpl {
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
