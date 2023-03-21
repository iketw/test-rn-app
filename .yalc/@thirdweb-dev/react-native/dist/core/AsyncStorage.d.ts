import { AsyncStorage as IAsyncStorage } from "@thirdweb-dev/wallets";
import { MMKV } from "react-native-mmkv";
export declare class AsyncLocalStorage implements IAsyncStorage {
    name: string;
    asyncStorage: MMKV;
    constructor(name: string);
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
}
export declare class noopStorage implements IAsyncStorage {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
}
export declare function createAsyncLocalStorage(name: string): AsyncLocalStorage;
