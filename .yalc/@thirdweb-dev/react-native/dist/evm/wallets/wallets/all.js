import { createAsyncLocalStorage } from "../../../core/AsyncStorage";
import { TW_WC_PROJECT_ID } from "../../constants/walletConnect";
import { formatDisplayUri } from "../../utils/uri";
import { DeviceBrowserWallet as DeviceWalletCore, WalletConnect as WalletConnectCore, WalletConnectV1 as WalletConnectV1Core, } from "@thirdweb-dev/wallets";
import { Linking } from "react-native";
import { AsyncWalletStorage, DeviceWalletImpl } from "./device-wallet";
export class MetaMaskWallet extends WalletConnectV1Core {
    constructor(options) {
        const storage = createAsyncLocalStorage("metamask");
        super({
            ...options,
            walletId: "metamask",
            walletStorage: storage,
            qrcode: false,
        });
        this.on("open_wallet", this._onWCOpenWallet);
        this.on("disconnect", () => {
            this.removeListener("open_wallet", this._onWCOpenWallet);
        });
    }
    _onWCOpenWallet(uri) {
        const links = MetaMaskWallet.meta.links;
        if (uri) {
            const fullUrl = formatDisplayUri(uri, links);
            Linking.openURL(fullUrl);
        }
        else {
            const fullUrl = formatDisplayUri("", links);
            Linking.openURL(fullUrl);
        }
    }
}
MetaMaskWallet.meta = {
    id: "metamask",
    name: "MetaMask",
    iconURL: "https://registry.walletconnect.org/v2/logo/md/5195e9db-94d8-4579-6f11-ef553be95100",
    links: {
        native: "metamask:",
        universal: "https://metamask.app.link",
    },
};
// Rainbow ----------------------------------------
export class RainbowWallet extends WalletConnectV1Core {
    constructor(options) {
        const storage = createAsyncLocalStorage("rainbow");
        super({
            ...options,
            walletId: "rainbow",
            walletStorage: storage,
            qrcode: false,
        });
        this.on("open_wallet", this._onWCOpenWallet);
        this.on("disconnect", () => {
            this.removeListener("open_wallet", this._onWCOpenWallet);
        });
    }
    _onWCOpenWallet(uri) {
        const links = RainbowWallet.meta.links;
        if (uri) {
            const fullUrl = formatDisplayUri(uri, links);
            Linking.openURL(fullUrl);
        }
        else {
            const fullUrl = formatDisplayUri("", links);
            Linking.openURL(fullUrl);
        }
    }
}
RainbowWallet.meta = {
    id: "rainbow",
    name: "Rainbow",
    iconURL: "https://registry.walletconnect.org/v2/logo/md/7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500",
    links: {
        native: "rainbow:",
        universal: "https://rnbwapp.com",
    },
};
export class TrustWallet extends WalletConnectCore {
    constructor(options) {
        const storage = createAsyncLocalStorage("trustwallet");
        super({
            ...options,
            walletId: "trust",
            qrcode: false,
            projectId: TW_WC_PROJECT_ID,
            walletStorage: storage,
        });
        this.on("open_wallet", this._onWCOpenWallet);
        this.on("disconnect", () => {
            this.removeListener("open_wallet", this._onWCOpenWallet);
        });
    }
    _onWCOpenWallet(uri) {
        const links = TrustWallet.meta.links;
        if (uri) {
            const fullUrl = formatDisplayUri(uri, links);
            Linking.openURL(fullUrl);
        }
        else {
            const fullUrl = formatDisplayUri("", links);
            Linking.openURL(fullUrl);
        }
    }
}
TrustWallet.meta = {
    id: "trust",
    name: "Trust Wallet",
    iconURL: "https://registry.walletconnect.org/v2/logo/md/0528ee7e-16d1-4089-21e3-bbfb41933100",
    links: {
        native: "trust:",
        universal: "https://link.trustwallet.com",
    },
};
// Device Wallet ----------------------------------------
const deviceWalletStorage = createAsyncLocalStorage("deviceWallet");
export class DeviceWallet extends DeviceWalletCore {
    constructor(options) {
        super({
            ...options,
            storage: deviceWalletStorage,
            storageType: "asyncStore",
            walletStorage: deviceWalletStorage,
            wallet: new DeviceWalletImpl({
                storage: new AsyncWalletStorage(),
            }),
        });
    }
    static getStoredData() {
        const key = DeviceWalletCore.getDataStorageKey();
        return deviceWalletStorage.getItem(key);
    }
    static getStoredAddress() {
        const key = DeviceWalletCore.getAddressStorageKey();
        return deviceWalletStorage.getItem(key);
    }
}
