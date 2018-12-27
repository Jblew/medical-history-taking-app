import * as uuid from "uuid";
import ow from "ow";

import { Serializable } from "../util/serialization/Serializable";
import { Serializer } from "../util/serialization/Serializer";
import { Serialized } from "../util/serialization/Serialized";

export class Record implements Serializable {
    private static ENTITY = "record";

    private id: string;
    private examinationId: string;
    private appletName: string;

    public constructor(recordData: Record.IRecordV1) {
        this.id = recordData.id;
        this.examinationId = recordData.examinationId;
        this.appletName = recordData.appletName;

        ow(this.id, ow.string.nonEmpty.label("Record.id"));
        ow(this.examinationId, ow.string.nonEmpty.label("Record.examinationId"));
        ow(this.appletName, ow.string.nonEmpty.label("Record.appletName"));
    }

    public getId(): string {
        return this.id;
    }

    public getExaminationId(): string {
        return this.examinationId;
    }

    public getAppletName(): Date {
        return new Date(this.appletName);
    }

    public serialize(): Record.IRecordV1 & Serialized {
        return {
            __e: Record.ENTITY,
            __v: "1",
            id: this.id,
            examinationId: this.examinationId,
            appletName: this.appletName
        };
    }

    public static deserialize(serializedObj: Record.IRecordV1 & Serialized): Record {
        ow(serializedObj.__e, ow.string.equals(Record.ENTITY).label("serializedObj.__e"));
        ow(serializedObj.__v, ow.string.equals("1").label("serializedObj.__v"));
        return new Record(serializedObj);
    }
}

export namespace Record {
    export interface IRecordV1 {
        id: string;
        examinationId: string;
        appletName: string;
    }
}