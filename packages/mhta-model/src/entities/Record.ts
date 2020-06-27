import * as uuid from "uuid";
import ow from "ow";

import { Serializable } from "../util/serialization/Serializable";
import { Serializer } from "../util/serialization/Serializer";
import { Serialized } from "../util/serialization/Serialized";

/**
 * A pojo for Record that keeps the data integrity
 */
export class RecordPOJO<T_DESCRIPTOR extends object, T_DATA extends object> {
  protected id: string;
  protected examinationId: string;
  protected descriptor: T_DESCRIPTOR;
  protected data: T_DATA;

  protected constructor(recordData: Record.IRecordV1<T_DESCRIPTOR, T_DATA>) {
    this.id = recordData.id;
    this.examinationId = recordData.examinationId;
    this.descriptor = recordData.descriptor;
    this.data = recordData.data;

    ow(this.id, ow.string.nonEmpty.label("RecordPOJO.id"));
    ow(this.examinationId, ow.string.nonEmpty.label("RecordPOJO.examinationId"));
    ow(this.descriptor, ow.object.label("RecordPOJO.descriptor"));
    ow(this.data, ow.object.label("RecordPOJO.data"));
  }

  public getId(): string {
    return this.id;
  }

  public getExaminationId(): string {
    return this.examinationId;
  }

  public getDescriptor(): T_DESCRIPTOR {
    return this.descriptor;
  }

  public getData(): T_DATA {
    return this.data;
  }
}

/**
 * A serializable (versioned) extension of RecordPOJO
 */
export class Record<T_DESCRIPTOR extends object, T_DATA extends object> extends RecordPOJO<T_DESCRIPTOR, T_DATA> {
  private static ENTITY = "record";

  public constructor(params: Record.IRecordV1<T_DESCRIPTOR, T_DATA>) {
    super(params);
  }

  public serialize(): Record.IRecordV1<T_DESCRIPTOR, T_DATA> & Serialized {
    return {
      __e: Record.ENTITY,
      __v: "1",
      id: this.id,
      examinationId: this.examinationId,
      descriptor: this.descriptor,
      data: this.data
    };
  }

  public static deserialize<T_DESCRIPTOR extends object, T_DATA extends object>(
    serializedObj: Record.IRecordV1<T_DESCRIPTOR, T_DATA> & Serialized
  ): Record<T_DESCRIPTOR, T_DATA> {
    ow(serializedObj.__e, ow.string.equals(Record.ENTITY).label("serializedObj.__e"));
    ow(serializedObj.__v, ow.string.equals("1").label("serializedObj.__v"));
    return new Record(serializedObj);
  }
}

export namespace Record {
  export interface IRecordV1<T_DESCRIPTOR extends object, T_DATA extends object> {
    id: string;
    examinationId: string;
    descriptor: T_DESCRIPTOR;
    data: T_DATA;
  }
}
