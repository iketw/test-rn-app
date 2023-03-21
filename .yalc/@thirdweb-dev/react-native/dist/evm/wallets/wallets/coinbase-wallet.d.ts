import type { CoinbaseWalletConnector, CoinbaseWalletConnectorOptions } from "../connectors/coinbase-wallet";
import { AbstractBrowserWallet, TWConnector, WalletOptions } from "@thirdweb-dev/wallets";
type CoinbaseWalletOptions = Omit<WalletOptions<CoinbaseWalletConnectorOptions>, "callbackURL" | "walletStorage">;
export declare class CoinbaseWallet extends AbstractBrowserWallet<CoinbaseWalletConnectorOptions> {
    static meta: {
        id: string;
        name: string;
        iconURL: string;
    };
    connector?: TWConnector;
    coinbaseConnector?: CoinbaseWalletConnector;
    provider?: CoinbaseWalletConnector["provider"];
    static id: "coinbaseWallet";
    get walletName(): "Coinbase Wallet";
    constructor(options: CoinbaseWalletOptions);
    protected getConnector(): Promise<TWConnector>;
}
export {};
