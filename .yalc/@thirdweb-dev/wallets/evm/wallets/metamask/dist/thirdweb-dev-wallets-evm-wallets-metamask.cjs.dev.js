'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-c4b4a0d5.cjs.dev.js');
var twConnector = require('../../../../dist/tw-connector-7917f56a.cjs.dev.js');
require('../../../../dist/classPrivateMethodGet-13694527.cjs.dev.js');
require('../../../../dist/checkPrivateRedeclaration-09e2947a.cjs.dev.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('ethers');
require('eventemitter3');

class MetaMask extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractBrowserWallet {
  get walletName() {
    return "MetaMask";
  }
  constructor(options) {
    super(MetaMask.id, options);
    defineProperty._defineProperty(this, "connector", void 0);
    defineProperty._defineProperty(this, "connectorStorage", void 0);
    defineProperty._defineProperty(this, "isInjected", void 0);
    defineProperty._defineProperty(this, "walletConnectConnector", void 0);
    this.connectorStorage = options.connectorStorage || evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.createAsyncLocalStorage("connector");
    this.isInjected = options.isInjected || false;
  }
  async getConnector() {
    if (!this.connector) {
      // if metamask is injected, use the injected connector
      // otherwise, use the wallet connect connector for using the metamask app on mobile via QR code scan

      if (this.isInjected) {
        // import the connector dynamically
        const {
          MetaMaskConnector
        } = await Promise.resolve().then(function () { return require('../../../connectors/metamask/dist/thirdweb-dev-wallets-evm-connectors-metamask.cjs.dev.js'); });
        const metamaskConnector = new MetaMaskConnector({
          chains: this.chains,
          connectorStorage: this.connectorStorage,
          options: {
            shimDisconnect: true
          }
        });
        this.connector = new twConnector.WagmiAdapter(metamaskConnector);
      } else {
        const {
          WalletConnectV1Connector
        } = await Promise.resolve().then(function () { return require('../../../connectors/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.cjs.dev.js'); });
        const walletConnectConnector = new WalletConnectV1Connector({
          chains: this.chains,
          storage: this.connectorStorage,
          options: {
            clientMeta: {
              name: this.options.dappMetadata.name,
              description: this.options.dappMetadata.description || "",
              url: this.options.dappMetadata.url,
              icons: []
            },
            qrcode: false
          }
        });

        // need to save this for getting the QR code URI
        this.walletConnectConnector = walletConnectConnector;
        this.connector = new twConnector.WagmiAdapter(walletConnectConnector);
      }
    }
    return this.connector;
  }

  /**
   * connect to wallet with QR code
   *
   * @example
   * ```typescript
   * metamask.connectWithQrCode({
   *  chainId: 1,
   *  onQrCodeUri(qrCodeUri) {
   *    // render the QR code with `qrCodeUri`
   *  },
   *  onConnected(accountAddress)  {
   *    // update UI to show connected state
   *  },
   * })
   * ```
   */
  async connectWithQrCode(options) {
    await this.getConnector();
    const wcConnector = this.walletConnectConnector;
    if (!wcConnector) {
      throw new Error("WalletConnect connector not found");
    }
    const wcProvider = await wcConnector.getProvider();

    // set a listener for display_uri event
    wcProvider.connector.on("display_uri", (error, payload) => {
      options.onQrCodeUri(payload.params[0]);
    });

    // trigger the display_uri event to get the QR code
    await wcProvider.enable();
    // connected to app here

    // trigger connect flow
    this.connect({
      chainId: options.chainId
    }).then(options.onConnected);
  }
}
defineProperty._defineProperty(MetaMask, "meta", {
  name: "Metamask",
  iconURL: "ipfs://QmZZHcw7zcXursywnLDAyY6Hfxzqop5GKgwoq8NB9jjrkN/metamask.svg"
});
defineProperty._defineProperty(MetaMask, "id", "metamask");

exports.MetaMask = MetaMask;
