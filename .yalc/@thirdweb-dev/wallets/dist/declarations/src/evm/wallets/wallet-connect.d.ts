import { TWConnector } from "../interfaces/tw-connector";
import { AbstractBrowserWallet, WalletOptions } from "./base";
export type WalletConnectOptions = {
    projectId: string;
    qrcode?: boolean;
};
export declare class WalletConnect extends AbstractBrowserWallet<WalletConnectOptions> {
    #private;
    connector?: TWConnector;
    static id: "walletConnect";
    static meta: {
        name: string;
        iconURL: string;
    };
    get walletName(): "WalletConnect";
    constructor(options: WalletOptions<WalletConnectOptions>);
    protected getConnector(): Promise<TWConnector>;
}
//# sourceMappingURL=wallet-connect.d.ts.map