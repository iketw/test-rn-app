import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { W as WagmiAdapter } from '../../../../dist/tw-connector-d83550c7.esm.js';
import { a as AbstractBrowserWallet } from '../../../../dist/base-def6ac05.esm.js';
import { Buffer } from 'buffer';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-fb5087d9.esm.js';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';

if (typeof window !== "undefined") {
  // Coinbase SDK uses Buffer for rendering the QRCode which requires a global polyfill
  window.Buffer = Buffer;
}
class CoinbaseWallet extends AbstractBrowserWallet {
  get walletName() {
    return "Coinbase Wallet";
  }
  constructor(options) {
    super(CoinbaseWallet.id, options);
    _defineProperty(this, "connector", void 0);
    _defineProperty(this, "coinbaseConnector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        CoinbaseWalletConnector
      } = await import('../../../connectors/coinbase-wallet/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet.esm.js');
      const cbConnector = new CoinbaseWalletConnector({
        chains: this.chains,
        options: {
          appName: this.options.dappMetadata.name,
          reloadOnDisconnect: false,
          darkMode: this.options.theme === "dark",
          headlessMode: true
        }
      });
      cbConnector.on("connect", () => {});
      this.coinbaseConnector = cbConnector;
      this.connector = new WagmiAdapter(cbConnector);
    }
    return this.connector;
  }
  async getQrCode() {
    await this.getConnector();
    if (!this.coinbaseConnector) {
      throw new Error("Coinbase connector not initialized");
    }
    return this.coinbaseConnector.getQrCode();
  }
}
_defineProperty(CoinbaseWallet, "meta", {
  iconURL: "ipfs://QmcJBHopbwfJcLqJpX2xEufSS84aLbF7bHavYhaXUcrLaH/coinbase.svg",
  name: "Coinbase Wallet"
});
_defineProperty(CoinbaseWallet, "id", "coinbaseWallet");

export { CoinbaseWallet };
