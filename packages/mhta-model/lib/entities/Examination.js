"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ow_1 = require("ow");
const Serializer_1 = require("../util/serialization/Serializer");
const Record_1 = require("./Record");
class Examination {
    constructor(examinationData) {
        this.id = examinationData.id;
        this.patientId = examinationData.patientId;
        this.timestamp = examinationData.timestamp;
        this.records = examinationData.records;
        ow_1.default(this.id, ow_1.default.string.nonEmpty.label("Examination.id"));
        ow_1.default(this.patientId, ow_1.default.string.nonEmpty.label("Examination.patientId"));
        ow_1.default(this.timestamp, ow_1.default.number.greaterThan(0).label("Examination.timestamp"));
        ow_1.default(this.records, ow_1.default.array.ofType(ow_1.default.object.instanceOf(Record_1.Record)).label("Examination.timestamp"));
    }
    getId() {
        return this.id;
    }
    getPatientId() {
        return this.patientId;
    }
    getDate() {
        return new Date(this.timestamp);
    }
    getSerialized() {
        return {
            id: this.id,
            patientId: this.patientId,
            timestamp: this.timestamp,
            records: this.records
        };
    }
}
exports.Examination = Examination;
(function (Examination) {
    Examination.serializer = new Serializer_1.Serializer("examination", [
        {
            versionId: "1",
            fromObject(obj) {
                const examinationV1 = obj;
                return new Examination(examinationV1);
            },
            toObject(obj) {
                return obj.getSerialized();
            }
        }
    ]);
})(Examination = exports.Examination || (exports.Examination = {}));
//# sourceMappingURL=Examination.js.map