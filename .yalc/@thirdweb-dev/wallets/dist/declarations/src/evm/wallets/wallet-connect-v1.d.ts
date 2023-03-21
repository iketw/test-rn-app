import type WalletConnectProvider from "../connectors/wallet-connect-v1/walletconnect-legacy-provider";
import { TWConnector } from "../interfaces/tw-connector";
import { AbstractBrowserWallet, WalletOptions } from "./base";
export type WalletConnectV1Options = {
    qrcode?: boolean;
} & ConstructorParameters<typeof WalletConnectProvider>[0];
export declare class WalletConnectV1 extends AbstractBrowserWallet<WalletConnectV1Options> {
    #private;
    connector?: TWConnector;
    static id: "walletConnectV1";
    static meta: {
        name: string;
        iconURL: string;
    };
    get walletName(): string;
    constructor(options: WalletOptions<WalletConnectV1Options>);
    protected getConnector(): Promise<TWConnector>;
}
//# sourceMappingURL=wallet-connect-v1.d.ts.map