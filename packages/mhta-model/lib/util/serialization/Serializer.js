"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ow_1 = require("ow");
class Serializer {
    constructor(entityName, versions) {
        ow_1.default(entityName, ow_1.default.string.nonEmpty.label("entityName"));
        ow_1.default(versions, ow_1.default.array.minLength(1).ofType(ow_1.default.object).label("versions"));
        this.entityName = entityName;
        this.versions = versions;
    }
    fromJSON(jsonStr) {
        const obj = JSON.parse(jsonStr);
        ow_1.default(obj.__serializerVersion, ow_1.default.number.equal(1).label("Serializer.fromJSON(): obj.__serializerVersion"));
        ow_1.default(obj.__entity, ow_1.default.string.equals(this.entityName).label("Serializer.fromJSON(): obj.__entity"));
        ow_1.default(obj.__versionId, ow_1.default.string.oneOf(this.versions.map(v => v.versionId))
            .label("Serializer.fromJSON(): obj.__versionId"));
        const versionSerializersMatched = this.versions.filter(vs => vs.versionId === obj.__versionId);
        if (versionSerializersMatched.length === 0)
            throw new Error("No serializer found for version #" + obj.__versionId + " of entity " + this.entityName);
        return versionSerializersMatched[0].fromObject(obj);
    }
    toJSON(t) {
        const latestVersionSerializer = this.versions[this.versions.length - 1];
        const serializedObj = Object.assign({ __serializerVersion: 1, __entity: this.entityName, __versionId: latestVersionSerializer.versionId }, latestVersionSerializer.toObject(t));
        return JSON.stringify(serializedObj);
    }
}
exports.Serializer = Serializer;
//# sourceMappingURL=Serializer.js.map