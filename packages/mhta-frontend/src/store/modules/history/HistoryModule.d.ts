import { HistoryRecord } from "../../../model/HistoryRecord";
export declare namespace HistoryModule {
    const modulePathName = "history";
    function localName(name: string): string;
    interface State {
        loading: boolean;
        error: string;
        record: HistoryRecord | undefined;
    }
    function validateState(state: State): void;
    class Actions {
        static initialize: string;
        static setPath: string;
    }
}
