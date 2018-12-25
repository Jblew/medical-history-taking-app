import * as uuid from "uuid";
import ow from "ow";

import { Serializable } from "../util/serialization/Serializable";
import { Serializer } from "../util/serialization/Serializer";

export class Patient implements Serializable {
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

    public getSerialized(): Patient.IPatientV1 {
        return {
            id: this.id,
            name: this.name
        };
    }
}

export namespace Patient {
    export interface IPatientV1 {
        id: string;
        name: string;
    }

    export const serializer = new Serializer<Patient>("patient", [
        {
            versionId: "1",
            fromObject(obj: object): Patient {
                const patientV1: IPatientV1 = obj as Patient.IPatientV1;
                return new Patient(patientV1);
            },
            toObject(obj: Patient): object {
                return obj.getSerialized();
            }
        }
    ]);
}