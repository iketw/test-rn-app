import { ethers, utils } from "ethers";
import { AbstractDeviceWallet, } from "@thirdweb-dev/wallets";
import * as SecureStore from "expo-secure-store";
export class DeviceWalletImpl extends AbstractDeviceWallet {
    constructor(options) {
        super(options);
    }
    async getSigner(provider) {
        if (!this.wallet) {
            throw new Error("Wallet not initialized");
        }
        let wallet = this.wallet;
        if (provider) {
            wallet = wallet.connect(provider);
        }
        return wallet;
    }
    async getSavedWalletAddress() {
        const data = await this.options.storage.getWalletData();
        if (!data) {
            return null;
        }
        return data.address;
    }
    async generateNewWallet() {
        console.log("generate new");
        const random = utils.randomBytes(32);
        this.wallet = new ethers.Wallet(random);
        return this.wallet.address;
    }
    async loadSavedWallet(password) {
        console.log("load saved.password", password);
        const data = await this.options.storage.getWalletData();
        if (!data) {
            throw new Error("No saved wallet");
        }
        this.wallet = new ethers.Wallet(data.encryptedData);
        return this.wallet.address;
    }
    async save(password) {
        console.log("save.password", password);
        const wallet = (await this.getSigner());
        await this.options.storage.storeWalletData({
            address: wallet.address,
            encryptedData: wallet.privateKey,
        });
    }
    async export(password) {
        const wallet = (await this.getSigner());
        return wallet.encrypt(password);
    }
    getWalletData() {
        return this.options.storage.getWalletData();
    }
}
// no need for prefixing here - AsyncStorage is already namespaced
const STORAGE_KEY_DATA = "data";
const STORAGE_KEY_ADDR = "address";
export class AsyncWalletStorage {
    async getWalletData() {
        console.log("getWalletData");
        const [address, encryptedData] = await Promise.all([
            SecureStore.getItemAsync(STORAGE_KEY_ADDR),
            SecureStore.getItemAsync(STORAGE_KEY_DATA),
        ]);
        console.log("getWalletData", address, encryptedData);
        if (!address || !encryptedData) {
            return null;
        }
        return {
            address,
            encryptedData,
        };
    }
    async storeWalletData(data) {
        console.log("storeWalletData", data);
        await Promise.all([
            SecureStore.setItemAsync(STORAGE_KEY_ADDR, data.address),
            SecureStore.setItemAsync(STORAGE_KEY_DATA, data.encryptedData),
        ]);
    }
}
