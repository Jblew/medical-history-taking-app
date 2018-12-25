import { Module } from "vuex";
import { AuthModule as Me } from "./AuthModule";
export declare namespace AuthModuleImpl {
    /**
     * State
     */
    const state: Me.State;
    const persistentPaths: string[];
    /**
     * Module
     */
    const module: Module<Me.State, any>;
}
