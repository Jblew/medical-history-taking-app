import { HistoryRecord } from "../../../model/HistoryRecord";
export declare class HistoryApiHelper {
    private static LC_COMMON_KEY;
    static save(record: HistoryRecord): Promise<void>;
    static load(path: string): Promise<HistoryRecord>;
}
