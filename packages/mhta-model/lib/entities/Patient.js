"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ow_1 = require("ow");
const Serializer_1 = require("../util/serialization/Serializer");
class Patient {
    constructor(patientData) {
        this.id = patientData.id;
        this.name = patientData.name;
        ow_1.default(this.id, ow_1.default.string.nonEmpty.label("Patient.id"));
        ow_1.default(this.name, ow_1.default.string.nonEmpty.label("Patient.name"));
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getSerialized() {
        return {
            id: this.id,
            name: this.name
        };
    }
}
exports.Patient = Patient;
(function (Patient) {
    Patient.serializer = new Serializer_1.Serializer("patient", [
        {
            versionId: "1",
            fromObject(obj) {
                const patientV1 = obj;
                return new Patient(patientV1);
            },
            toObject(obj) {
                return obj.getSerialized();
            }
        }
    ]);
})(Patient = exports.Patient || (exports.Patient = {}));
//# sourceMappingURL=Patient.js.map