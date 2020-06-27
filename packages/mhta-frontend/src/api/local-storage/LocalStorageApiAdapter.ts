import { LocalStorageApi } from "./LocalStorageApi";
import { injectable } from "inversify";

@injectable()
export class LocalStorageApiAdapter implements LocalStorageApi {
  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
