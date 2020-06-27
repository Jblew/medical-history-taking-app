import { Container } from "inversify";
import { LocalStorageApi } from "./api/local-storage/LocalStorageApi";
import { LocalStorageApiAdapter } from "./api/local-storage/LocalStorageApiAdapter";

const iocContainer = new Container();
iocContainer.bind<LocalStorageApi>(LocalStorageApi.SYMBOL).to(LocalStorageApiAdapter);

export { iocContainer };
