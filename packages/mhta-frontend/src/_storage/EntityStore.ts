import { HasId } from "./HasId";

export interface EntityStore<T extends HasId> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | undefined>;
  put(t: T): Promise<void>;
  delete(t: T): Promise<void>;
}
