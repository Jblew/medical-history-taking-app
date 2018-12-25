import { Serializable } from "../util/serialization/Serializable";
import { Serializer } from "../util/serialization/Serializer";
export declare class Record implements Serializable {
    private id;
    private examinationId;
    private appletName;
    constructor(recordData: Record.IRecordV1);
    getId(): string;
    getExaminationId(): string;
    getAppletName(): Date;
    getSerialized(): Record.IRecordV1;
}
export declare namespace Record {
    interface IRecordV1 {
        id: string;
        examinationId: string;
        appletName: string;
    }
    const serializer: Serializer<Record>;
}
