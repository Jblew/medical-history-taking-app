import { Serializable } from "../util/serialization/Serializable";
import { Serializer } from "../util/serialization/Serializer";
export declare class Patient implements Serializable {
    private id;
    private name;
    constructor(patientData: Patient.IPatientV1);
    getId(): string;
    getName(): string;
    getSerialized(): Patient.IPatientV1;
}
export declare namespace Patient {
    interface IPatientV1 {
        id: string;
        name: string;
    }
    const serializer: Serializer<Patient>;
}
