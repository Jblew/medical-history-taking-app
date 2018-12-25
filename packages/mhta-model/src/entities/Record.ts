import * as uuid from "uuid";
import ow from "ow";

import { Serializable } from "../util/serialization/Serializable";
import { Serializer } from "../util/serialization/Serializer";

export class Record implements Serializable {
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

    public getSerialized(): Record.IRecordV1 {
        return {
            id: this.id,
            examinationId: this.examinationId,
            appletName: this.appletName
        };
    }
}

export namespace Record {
    export interface IRecordV1 {
        id: string;
        examinationId: string;
        appletName: string;
    }

    export const serializer = new Serializer<Record>("record", [
        {
            versionId: "1",
            fromObject(obj: object): Record {
                const recordV1: IRecordV1 = obj as Record.IRecordV1;
                return new Record(recordV1);
            },
            toObject(obj: Record): object {
                return obj.getSerialized();
            }
        }
    ]);
}