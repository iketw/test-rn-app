import { noopStorage } from "../../../core/AsyncStorage";
import { AbstractBrowserWallet, WagmiAdapter, } from "@thirdweb-dev/wallets";
export class CoinbaseWallet extends AbstractBrowserWallet {
    get walletName() {
        return "Coinbase Wallet";
    }
    constructor(options) {
        super(CoinbaseWallet.id, {
            ...options,
            callbackURL: new URL("https://thirdweb.com"),
            walletStorage: new noopStorage(),
            walletId: "coinbase",
        });
    }
    async getConnector() {
        if (!this.connector) {
            // import the connector dynamically
            const { CoinbaseWalletConnector: CoinbaseWalletConnector } = await import("../connectors/coinbase-wallet");
            const cbConnector = new CoinbaseWalletConnector({
                chains: this.chains,
                options: {
                    ...this.options,
                },
            });
            cbConnector.on("connect", () => { });
            this.coinbaseConnector = cbConnector;
            this.connector = new WagmiAdapter(cbConnector);
            this.provider = await this.coinbaseConnector.getProvider();
        }
        return this.connector;
    }
}
CoinbaseWallet.meta = {
    id: "coinbase",
    name: "Coinbase Wallet",
    iconURL: "ipfs://QmRz8mF7sW7sXJ4oLhWhYDcouwB2zGzvdfJCtVmdkTUWma/18060234.png",
};
CoinbaseWallet.id = "coinbaseWallet";
