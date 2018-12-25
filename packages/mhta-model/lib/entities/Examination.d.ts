import { Serializable } from "../util/serialization/Serializable";
import { Serializer } from "../util/serialization/Serializer";
import { Record } from "./Record";
export declare class Examination implements Serializable {
    private id;
    private patientId;
    private timestamp;
    private records;
    constructor(examinationData: Examination.IExaminationV1);
    getId(): string;
    getPatientId(): string;
    getDate(): Date;
    getSerialized(): Examination.IExaminationV1;
}
export declare namespace Examination {
    interface IExaminationV1 {
        id: string;
        patientId: string;
        timestamp: number;
        records: Record[];
    }
    const serializer: Serializer<Examination>;
}
