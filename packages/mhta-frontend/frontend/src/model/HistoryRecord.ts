import ow from "ow";

import { ExaminationEntry } from "./ExaminationEntry";
import { nestValidate } from "../util/util";


export interface HistoryRecord {
    path: string;
    entries: ExaminationEntry [];
}

export namespace HistoryRecord {
    const commonPath = "Historyrecord.validate().record";
    export function validate(record: HistoryRecord) {
        ow(record.path, ow.string.nonEmpty.label(commonPath + ".path"));
        ow(record.entries, ow.array.label(commonPath + ".entries")
            .ofType(ow.object.is(e => nestValidate(() => ExaminationEntry.validate(e as ExaminationEntry)))));
    }

    export function getDefault(path: string): HistoryRecord {
        const def: HistoryRecord = {
            path: path,
            entries: []
        };
        HistoryRecord.validate(def);
        return def;
    }
}