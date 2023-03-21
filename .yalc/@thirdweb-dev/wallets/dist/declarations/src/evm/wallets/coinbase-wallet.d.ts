import type { CoinbaseWalletConnector } from "../connectors/coinbase-wallet";
import { TWConnector } from "../interfaces/tw-connector";
import { AbstractBrowserWallet, WalletOptions } from "./base";
export type CoinbaseWalletOptions = WalletOptions<{
    theme?: "light" | "dark";
}>;
export declare class CoinbaseWallet extends AbstractBrowserWallet<{
    theme?: "light" | "dark";
}> {
    connector?: TWConnector;
    coinbaseConnector?: CoinbaseWalletConnector;
    static meta: {
        iconURL: string;
        name: string;
    };
    static id: "coinbaseWallet";
    get walletName(): "Coinbase Wallet";
    constructor(options: CoinbaseWalletOptions);
    protected getConnector(): Promise<TWConnector>;
    getQrCode(): Promise<string | null>;
}
//# sourceMappingURL=coinbase-wallet.d.ts.map