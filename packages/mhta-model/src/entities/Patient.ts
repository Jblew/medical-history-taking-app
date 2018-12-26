import * as uuid from "uuid";
import ow from "ow";

import { Serializable } from "../util/serialization/Serializable";
import { Serializer } from "../util/serialization/Serializer";
import { Serialized } from "util/serialization/Serialized";

export class Patient implements Serializable {
    private static ENTITY = "patient";

    private id: string;
    private name: string;

    public constructor(patientData: Patient.IPatientV1) {
        this.id = patientData.id;
        this.name = patientData.name;

        ow(this.id, ow.string.nonEmpty.label("Patient.id"));
        ow(this.name, ow.string.nonEmpty.label("Patient.name"));
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public serialize(): Patient.IPatientV1 & Serialized {
        return {
            __e: Patient.ENTITY,
            __v: "1",
            id: this.id,
            name: this.name
        };
    }

    public static deserialize(serializedObj: Patient.IPatientV1 & Serialized): Patient {
        ow(serializedObj.__e, ow.string.equals(Patient.ENTITY).label("serializedObj.__e"));
        ow(serializedObj.__v, ow.string.equals("1").label("serializedObj.__v"));
        return new Patient(serializedObj);
    }
}

export namespace Patient {
    export interface IPatientV1 {
        id: string;
        name: string;
    }
}