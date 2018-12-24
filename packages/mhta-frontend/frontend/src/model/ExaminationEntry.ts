import ow from "ow";

export interface ExaminationEntry {
    type: ExaminationEntryType;
}

export namespace ExaminationEntry {
    const commonPath = "ExaminationEntry.validate().record";
    export function validate(entry: ExaminationEntry) {
        ow(entry.type, ow.string.nonEmpty.label(commonPath + ".type"));
    }
}

export type ExaminationEntryType
     = "custom";