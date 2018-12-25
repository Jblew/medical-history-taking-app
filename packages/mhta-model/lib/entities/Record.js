"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ow_1 = require("ow");
const Serializer_1 = require("../util/serialization/Serializer");
class Record {
    constructor(recordData) {
        this.id = recordData.id;
        this.examinationId = recordData.examinationId;
        this.appletName = recordData.appletName;
        ow_1.default(this.id, ow_1.default.string.nonEmpty.label("Record.id"));
        ow_1.default(this.examinationId, ow_1.default.string.nonEmpty.label("Record.examinationId"));
        ow_1.default(this.appletName, ow_1.default.string.nonEmpty.label("Record.appletName"));
    }
    getId() {
        return this.id;
    }
    getExaminationId() {
        return this.examinationId;
    }
    getAppletName() {
        return new Date(this.appletName);
    }
    getSerialized() {
        return {
            id: this.id,
            examinationId: this.examinationId,
            appletName: this.appletName
        };
    }
}
exports.Record = Record;
(function (Record) {
    Record.serializer = new Serializer_1.Serializer("record", [
        {
            versionId: "1",
            fromObject(obj) {
                const recordV1 = obj;
                return new Record(recordV1);
            },
            toObject(obj) {
                return obj.getSerialized();
            }
        }
    ]);
})(Record = exports.Record || (exports.Record = {}));
//# sourceMappingURL=Record.js.map