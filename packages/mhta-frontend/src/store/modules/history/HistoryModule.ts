import ow from "ow";
import { HistoryRecord } from "../../../model/HistoryRecord";

export namespace HistoryModule {
    export const modulePathName = "history";
    export function localName(name: string) {
        return modulePathName + "_" + name;
    }

    export interface State {
        loading: boolean;
        error: string;
        record: HistoryRecord | undefined;
    }
    export function validateState(state: State) {
        ow(state.loading, ow.boolean.label("state.loading"));
        ow(state.error, ow.string.label("state.error"));
        if (state.record) HistoryRecord.validate(state.record);
    }

    export class Actions {
        public static initialize = localName("initialize");
        public static setPath = localName("setPath");
    }
}