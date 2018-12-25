import { User } from "./User";
export declare namespace AuthModule {
    const modulePathName = "auth";
    function localName(name: string): string;
    interface State {
        username: string;
        user: User | undefined;
        loading: boolean;
        error: string;
    }
    function validateState(state: State): void;
    class Actions {
        static initialize: string;
        static saveSettings: string;
        static logout: string;
    }
    class Getters {
        static isLoggedIn: string;
    }
}
