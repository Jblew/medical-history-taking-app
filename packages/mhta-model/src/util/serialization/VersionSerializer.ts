
export interface VersionSerializer<T> {
    versionId: string;
    toObject(t: T): object;
    fromObject(o: object): T;
}