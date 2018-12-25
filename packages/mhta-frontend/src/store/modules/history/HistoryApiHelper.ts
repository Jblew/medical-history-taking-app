import Axios from "axios";
import ow from "ow";
import { d } from "../../../util/util";
import { HistoryRecord } from "../../../model/HistoryRecord";

export class HistoryApiHelper {
    private static LC_COMMON_KEY: string = "mhta_";

    public static async save(record: HistoryRecord) {
        HistoryRecord.validate(record);

        localStorage.setItem(HistoryApiHelper.LC_COMMON_KEY + record.path, JSON.stringify(record));
    }

    public static async load(path: string): Promise<HistoryRecord> {
        ow(path, ow.string.nonEmpty.label("path"));

        const loadedStr = localStorage.getItem(HistoryApiHelper.LC_COMMON_KEY + path);
        if (!loadedStr) return HistoryRecord.getDefault(path);
        else {
            const loadedRecord: HistoryRecord = JSON.parse(loadedStr);
            HistoryRecord.validate(loadedRecord);
            return loadedRecord;
        }
    }
}