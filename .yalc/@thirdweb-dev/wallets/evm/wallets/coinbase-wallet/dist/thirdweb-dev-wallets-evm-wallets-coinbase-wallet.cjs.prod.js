'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var twConnector = require('../../../../dist/tw-connector-a7cbec67.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-97ab6a6c.cjs.prod.js');
var buffer = require('buffer');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-5131251f.cjs.prod.js');
require('../../../../dist/checkPrivateRedeclaration-fd0a01ed.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');

if (typeof window !== "undefined") {
  // Coinbase SDK uses Buffer for rendering the QRCode which requires a global polyfill
  window.Buffer = buffer.Buffer;
}
class CoinbaseWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractBrowserWallet {
  get walletName() {
    return "Coinbase Wallet";
  }
  constructor(options) {
    super(CoinbaseWallet.id, options);
    defineProperty._defineProperty(this, "connector", void 0);
    defineProperty._defineProperty(this, "coinbaseConnector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        CoinbaseWalletConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/coinbase-wallet/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet.cjs.prod.js'); });
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
      this.connector = new twConnector.WagmiAdapter(cbConnector);
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
defineProperty._defineProperty(CoinbaseWallet, "meta", {
  iconURL: "ipfs://QmcJBHopbwfJcLqJpX2xEufSS84aLbF7bHavYhaXUcrLaH/coinbase.svg",
  name: "Coinbase Wallet"
});
defineProperty._defineProperty(CoinbaseWallet, "id", "coinbaseWallet");

exports.CoinbaseWallet = CoinbaseWallet;
