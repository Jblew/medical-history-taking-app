import { EffectuatedWiseOperation } from "steem-wise-core";
export declare namespace StatusModule {
    const modulePathName = "status";
    function localName(name: string): string;
    interface State {
        accountStats: {
            loadedFor: string;
            voting: {
                loading: boolean;
                value: boolean;
                error: string;
            };
            delegating: {
                loading: boolean;
                value: boolean;
                error: string;
            };
            supporting: {
                loading: boolean;
                value: boolean;
                error: string;
            };
        };
        generalStats: {
            loading: boolean;
            error: string;
            voters: number;
            delegators: number;
            operations: number;
        };
        latestOperations: {
            loading: boolean;
            error: string;
            operations: EffectuatedWiseOperation[];
        };
    }
    function validateState(state: State): void;
    class Actions {
        static initialize: string;
        static setAccountName: string;
    }
}
