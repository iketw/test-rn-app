import { AsyncStorage } from "../../core";
import { TWConnector } from "../interfaces/tw-connector";
import { AbstractWallet } from "./abstract";
import { AbstractBrowserWallet, WalletOptions } from "./base";
import { Chain } from "@thirdweb-dev/chains";
import { ethers } from "ethers";
export type DeviceWalletOptions = {
    chain?: Chain;
    storageType?: "asyncStore" | "credentialStore";
    storage?: AsyncStorage;
    wallet?: AbstractDeviceWallet;
};
export type DeviceWalletConnectionArgs = {
    password: string;
};
export declare class DeviceBrowserWallet extends AbstractBrowserWallet<DeviceWalletOptions, DeviceWalletConnectionArgs> {
    #private;
    connector?: TWConnector;
    static id: "deviceWallet";
    options: WalletOptions<DeviceWalletOptions>;
    static meta: {
        name: string;
        iconURL: string;
    };
    get walletName(): "Device Wallet";
    constructor(options: WalletOptions<DeviceWalletOptions>);
    protected getConnector(): Promise<TWConnector>;
    initializeWallet(wallet?: AbstractDeviceWallet): AbstractDeviceWallet;
    getWalletData(): Promise<DeviceWalletData | null>;
    static getAddressStorageKey(): string;
    static getDataStorageKey(): string;
}
export declare abstract class AbstractDeviceWallet extends AbstractWallet {
    protected wallet?: ethers.Wallet;
    protected options: DeviceWalletImplOptions;
    constructor(options: DeviceWalletImplOptions);
    getSigner(provider?: ethers.providers.Provider): Promise<ethers.Signer>;
    getSavedWalletAddress(): Promise<string | null>;
    getWalletData(): Promise<DeviceWalletData | null>;
    abstract generateNewWallet(): Promise<string>;
    abstract loadSavedWallet(password: string): Promise<string>;
    abstract save(password: string): Promise<void>;
    abstract export(password: string): Promise<string>;
}
export declare class DeviceWalletImpl extends AbstractDeviceWallet {
    static fromAsyncStorage(storage: AsyncStorage): DeviceWalletImpl;
    static fromCredentialStore(): DeviceWalletImpl;
    constructor(options: DeviceWalletImplOptions);
    generateNewWallet(): Promise<string>;
    loadSavedWallet(password: string): Promise<string>;
    save(password: string): Promise<void>;
    export(password: string): Promise<string>;
}
export type DeviceWalletData = {
    address: string;
    encryptedData: string;
};
export interface IDeviceWalletStore {
    getWalletData(): Promise<DeviceWalletData | null>;
    storeWalletData(data: DeviceWalletData): Promise<void>;
}
export type DeviceWalletImplOptions = {
    storage: IDeviceWalletStore;
};
//# sourceMappingURL=device-wallet.d.ts.map