import { ethers } from "ethers";
import { AbstractDeviceWallet, DeviceWalletData, IDeviceWalletStore, DeviceWalletImplOptions } from "@thirdweb-dev/wallets";
export declare class DeviceWalletImpl extends AbstractDeviceWallet {
    constructor(options: DeviceWalletImplOptions);
    getSigner(provider?: ethers.providers.Provider): Promise<ethers.Signer>;
    getSavedWalletAddress(): Promise<string | null>;
    generateNewWallet(): Promise<string>;
    loadSavedWallet(password: string): Promise<string>;
    save(password: string): Promise<void>;
    export(password: string): Promise<string>;
    getWalletData(): Promise<DeviceWalletData | null>;
}
export declare class AsyncWalletStorage implements IDeviceWalletStore {
    getWalletData(): Promise<DeviceWalletData | null>;
    storeWalletData(data: DeviceWalletData): Promise<void>;
}
