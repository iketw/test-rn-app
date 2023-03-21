import { ExtraCoreWalletOptions } from "@thirdweb-dev/react-core";
import type { DeviceWalletOptions as DeviceWalletCoreOptions, WalletConnectOptions, WalletConnectV1Options, WalletOptions } from "@thirdweb-dev/wallets";
import { DeviceBrowserWallet as DeviceWalletCore, WalletConnect as WalletConnectCore, WalletConnectV1 as WalletConnectV1Core } from "@thirdweb-dev/wallets";
type WC1Options = Omit<WalletOptions<WalletConnectV1Options>, "qrcode" | "walletStorage"> & ExtraCoreWalletOptions;
export declare class MetaMaskWallet extends WalletConnectV1Core {
    static meta: {
        id: string;
        name: string;
        iconURL: string;
        links: {
            native: string;
            universal: string;
        };
    };
    constructor(options: WC1Options);
    _onWCOpenWallet(uri?: string): void;
}
export declare class RainbowWallet extends WalletConnectV1Core {
    static meta: {
        id: string;
        name: string;
        iconURL: string;
        links: {
            native: string;
            universal: string;
        };
    };
    constructor(options: WC1Options);
    _onWCOpenWallet(uri?: string): void;
}
type WC2Options = Omit<WalletOptions<WalletConnectOptions>, "projectId" | "qrcode" | "walletStorage">;
export declare class TrustWallet extends WalletConnectCore {
    static meta: {
        id: string;
        name: string;
        iconURL: string;
        links: {
            native: string;
            universal: string;
        };
    };
    constructor(options: WC2Options);
    _onWCOpenWallet(uri?: string): void;
}
type DeviceWalletOptions = Omit<WalletOptions<DeviceWalletCoreOptions>, "storage" | "storageType" | "walletStorage"> & ExtraCoreWalletOptions;
export declare class DeviceWallet extends DeviceWalletCore {
    constructor(options: DeviceWalletOptions);
    static getStoredData(): Promise<string | null>;
    static getStoredAddress(): Promise<string | null>;
}
export {};
