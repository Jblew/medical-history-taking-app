export interface ExaminationEntry {
    type: ExaminationEntryType;
}
export declare namespace ExaminationEntry {
    function validate(entry: ExaminationEntry): void;
}
export declare type ExaminationEntryType = "custom";
