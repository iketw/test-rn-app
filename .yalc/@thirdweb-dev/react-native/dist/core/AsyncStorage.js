import { MMKV } from "react-native-mmkv";
const PREFIX = "__TW__";
export class AsyncLocalStorage {
    constructor(name) {
        this.name = name;
        this.asyncStorage = new MMKV();
    }
    getItem(key) {
        const item = this.asyncStorage.getString(`${PREFIX}/${this.name}/${key}`) || null;
        return Promise.resolve(item);
    }
    setItem(key, value) {
        return Promise.resolve(this.asyncStorage.set(`${PREFIX}/${this.name}/${key}`, value));
    }
    removeItem(key) {
        return Promise.resolve(this.asyncStorage.delete(`${PREFIX}/${this.name}/${key}`));
    }
}
export class noopStorage {
    getItem(key) {
        return Promise.resolve(key);
    }
    setItem(key, value) {
        console.log(key, value);
        return Promise.resolve();
    }
    removeItem(key) {
        console.log(key);
        return Promise.resolve();
    }
}
export function createAsyncLocalStorage(name) {
    return new AsyncLocalStorage(name);
}
