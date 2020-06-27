import ow from "ow";

import { EntityStore } from "./EntityStore";
import { HasId } from "./HasId";

export class LocalStorageEntityStore<T extends HasId> implements EntityStore<T> {
  private readonly entityName: string;
  private readonly localStorageKey: string;
  private internalEntityCache: Map<string, T>;

  private constructor(entityName: string) {
    ow(entityName, ow.string.label("entityName"));
    this.entityName = entityName;
    this.localStorageKey = "karolina_mhta_frontend_" + this.entityName;
    this.internalEntityCache = this.loadMapFromLocalStorageOrCreateEmpty();
  }

  private loadMapFromLocalStorageOrCreateEmpty(): Map<string, T> {
    const loadedRawStore: string | null = localStorage.getItem(this.localStorageKey);
    if (loadedRawStore) {
      return new Map(JSON.parse(loadedRawStore));
    } else {
      return new Map();
    }
  }

  private updateLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(Array.from(this.internalEntityCache.entries())));
  }

  public static ForEntityNamed(entityName: string) {
    return new this(entityName);
  }

  public async getAll(): Promise<T[]> {
    return Array.from(this.internalEntityCache.values());
  }

  public async getById(id: string): Promise<T | undefined> {
    ow(id, ow.string.nonEmpty.label("id"));
    return this.internalEntityCache.get(id);
  }

  public async put(t: T) {
    ow(t.id, ow.string.nonEmpty.label("t.id"));
    this.internalEntityCache.set(t.id, t);
    this.updateLocalStorage();
  }

  public async delete(t: T) {
    ow(t.id, ow.string.nonEmpty.label("t.id"));
    this.internalEntityCache.delete(t.id);
    this.updateLocalStorage();
  }
}
