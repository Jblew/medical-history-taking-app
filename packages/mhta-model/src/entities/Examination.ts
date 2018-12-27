import * as uuid from "uuid";
import ow from "ow";

import { Serializable } from "../util/serialization/Serializable";
import { Record } from "./Record";
import { Serialized } from "../util/serialization/Serialized";

export class Examination implements Serializable {
    private static ENTITY = "examination";

    private id: string;
    private patientId: string;
    private timestamp: number; // ms
    private records: Record [];

    public constructor(examinationData: Examination.IExaminationV1) {
        this.id = examinationData.id;
        this.patientId = examinationData.patientId;
        this.timestamp = examinationData.timestamp;
        this.records = examinationData.records.map(serializedRecord => Record.deserialize(serializedRecord));

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

    public serialize(): Examination.IExaminationV1 & Serialized {
        return {
            __e: Examination.ENTITY,
            __v: "1",
            id: this.id,
            patientId: this.patientId,
            timestamp: this.timestamp,
            records: this.records.map(record => record.serialize())
        };
    }

    public static deserialize(serializedObj: Examination.IExaminationV1 & Serialized): Examination {
        ow(serializedObj.__e, ow.string.equals(Examination.ENTITY).label("serializedObj.__e"));
        ow(serializedObj.__v, ow.string.equals("1").label("serializedObj.__v"));
        return new Examination(serializedObj);
    }
}

export namespace Examination {
    export interface IExaminationV1 {
        id: string;
        patientId: string;
        timestamp: number;
        records: (Record.IRecordV1 & Serialized) [];
    }
}