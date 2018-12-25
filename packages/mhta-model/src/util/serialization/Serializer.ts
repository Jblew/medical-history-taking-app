import ow from "ow";

import { Serializable } from "./Serializable";
import { VersionSerializer } from "./VersionSerializer";

export class Serializer<T extends Serializable> {
    private versions: VersionSerializer<T> [];
    private entityName: string;

    public constructor(entityName: string, versions: VersionSerializer<T> []) {
        ow(entityName, ow.string.nonEmpty.label("entityName"));
        ow(versions, ow.array.minLength(1).ofType(ow.object).label("versions"));

        this.entityName = entityName;
        this.versions = versions;
    }

    public fromJSON(jsonStr: string): T {
        const obj = JSON.parse(jsonStr) as SerializedObject;
        ow(obj.__serializerVersion, ow.number.equal(1).label("Serializer.fromJSON(): obj.__serializerVersion"));
        ow(obj.__entity, ow.string.equals(this.entityName).label("Serializer.fromJSON(): obj.__entity"));
        ow(obj.__versionId, ow.string.oneOf(this.versions.map(v => v.versionId))
            .label("Serializer.fromJSON(): obj.__versionId")
        );

        const versionSerializersMatched: VersionSerializer<T> []
            = this.versions.filter(vs => vs.versionId === obj.__versionId);
        if (versionSerializersMatched.length === 0)
            throw new Error("No serializer found for version #" + obj.__versionId + " of entity " + this.entityName);
        return versionSerializersMatched[0].fromObject(obj);
    }

    public toJSON(t: T): string {
        const latestVersionSerializer: VersionSerializer<T> = this.versions[this.versions.length - 1];
        const serializedObj: SerializedObject = {
            __serializerVersion: 1,
            __entity: this.entityName,
            __versionId: latestVersionSerializer.versionId,
            ... latestVersionSerializer.toObject(t)
        };
        return JSON.stringify(serializedObj);
    }
}

export type SerializedObject = object & {
    __serializerVersion: 1,
    __entity: string;
    __versionId: string;
};