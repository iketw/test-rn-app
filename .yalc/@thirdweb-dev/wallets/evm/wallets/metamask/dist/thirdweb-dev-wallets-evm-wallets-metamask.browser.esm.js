import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { a as AbstractBrowserWallet, c as createAsyncLocalStorage } from '../../../../dist/base-0e9eea02.browser.esm.js';
import { W as WagmiAdapter } from '../../../../dist/tw-connector-443c384d.browser.esm.js';
import '../../../../dist/classPrivateMethodGet-9d546189.browser.esm.js';
import '../../../../dist/checkPrivateRedeclaration-3aaaa21d.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import 'eventemitter3';

class MetaMask extends AbstractBrowserWallet {
  get walletName() {
    return "MetaMask";
  }
  constructor(options) {
    super(MetaMask.id, options);
    _defineProperty(this, "connector", void 0);
    _defineProperty(this, "connectorStorage", void 0);
    _defineProperty(this, "isInjected", void 0);
    _defineProperty(this, "walletConnectConnector", void 0);
    this.connectorStorage = options.connectorStorage || createAsyncLocalStorage("connector");
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
        } = await import('../../../connectors/metamask/dist/thirdweb-dev-wallets-evm-connectors-metamask.browser.esm.js');
        const metamaskConnector = new MetaMaskConnector({
          chains: this.chains,
          connectorStorage: this.connectorStorage,
          options: {
            shimDisconnect: true
          }
        });
        this.connector = new WagmiAdapter(metamaskConnector);
      } else {
        const {
          WalletConnectV1Connector
        } = await import('../../../connectors/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.browser.esm.js');
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
        this.connector = new WagmiAdapter(walletConnectConnector);
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
_defineProperty(MetaMask, "meta", {
  name: "Metamask",
  iconURL: "ipfs://QmZZHcw7zcXursywnLDAyY6Hfxzqop5GKgwoq8NB9jjrkN/metamask.svg"
});
_defineProperty(MetaMask, "id", "metamask");

export { MetaMask };
