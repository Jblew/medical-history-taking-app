import * as uuid from "uuid";
import ow from "ow";

import { Serializable } from "../util/serialization/Serializable";
import { Serializer } from "../util/serialization/Serializer";
import { Record } from "./Record";

export class Examination implements Serializable {
    private id: string;
    private patientId: string;
    private timestamp: number; // ms
    private records: Record [];

    public constructor(examinationData: Examination.IExaminationV1) {
        this.id = examinationData.id;
        this.patientId = examinationData.patientId;
        this.timestamp = examinationData.timestamp;
        this.records = examinationData.records;

        ow(this.id, ow.string.nonEmpty.label("Examination.id"));
        ow(this.patientId, ow.string.nonEmpty.label("Examination.patientId"));
        ow(this.timestamp, ow.number.greaterThan(0).label("Examination.timestamp"));
        ow(this.records, ow.array.ofType(ow.object.instanceOf(Record)).label("Examination.timestamp"));
    }

    public getId(): string {
        return this.id;
    }

    public getPatientId(): string {
        return this.patientId;
    }

    public getDate(): Date {
        return new Date(this.timestamp);
    }

    public getSerialized(): Examination.IExaminationV1 {
        return {
            id: this.id,
            patientId: this.patientId,
            timestamp: this.timestamp,
            records: this.records
        };
    }
}

export namespace Examination {
    export interface IExaminationV1 {
        id: string;
        patientId: string;
        timestamp: number;
        records: Record [];
    }

    export const serializer = new Serializer<Examination>("examination", [
        {
            versionId: "1",
            fromObject(obj: object): Examination {
                const examinationV1: IExaminationV1 = obj as Examination.IExaminationV1;
                return new Examination(examinationV1);
            },
            toObject(obj: Examination): object {
                return obj.getSerialized();
            }
        }
    ]);
}