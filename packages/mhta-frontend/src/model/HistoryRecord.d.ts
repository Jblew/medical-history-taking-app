import { ExaminationEntry } from "./ExaminationEntry";
export interface HistoryRecord {
    path: string;
    entries: ExaminationEntry[];
}
export declare namespace HistoryRecord {
    function validate(record: HistoryRecord): void;
    function getDefault(path: string): HistoryRecord;
}
