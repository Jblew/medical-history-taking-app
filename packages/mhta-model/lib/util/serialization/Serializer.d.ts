import { Serializable } from "./Serializable";
import { VersionSerializer } from "./VersionSerializer";
export declare class Serializer<T extends Serializable> {
    private versions;
    private entityName;
    constructor(entityName: string, versions: VersionSerializer<T>[]);
    fromJSON(jsonStr: string): T;
    toJSON(t: T): string;
}
export declare type SerializedObject = object & {
    __serializerVersion: 1;
    __entity: string;
    __versionId: string;
};
