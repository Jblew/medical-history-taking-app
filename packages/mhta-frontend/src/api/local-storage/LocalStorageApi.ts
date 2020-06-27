export interface LocalStorageApi {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export namespace LocalStorageApi {
  export const SYMBOL = Symbol.for("LocalStorageApi");
}
