'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateMethodGet = require('../../../../dist/classPrivateMethodGet-5131251f.cjs.prod.js');
var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-422af97a.cjs.prod.js');
var twConnector = require('../../../../dist/tw-connector-a7cbec67.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-97ab6a6c.cjs.prod.js');
require('../../../../dist/checkPrivateRedeclaration-fd0a01ed.cjs.prod.js');
require('eventemitter3');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');

var _walletConnectConnector = /*#__PURE__*/new WeakMap();
var _provider = /*#__PURE__*/new WeakMap();
var _onConnect = /*#__PURE__*/new WeakMap();
var _onDisconnect = /*#__PURE__*/new WeakMap();
var _onChange = /*#__PURE__*/new WeakMap();
var _onMessage = /*#__PURE__*/new WeakMap();
var _setupListeners = /*#__PURE__*/new WeakSet();
var _removeListeners = /*#__PURE__*/new WeakSet();
class WalletConnectV1 extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractBrowserWallet {
  get walletName() {
    return classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector)?.walletName || "WalletConnect";
  }
  constructor(options) {
    super(options.walletId || WalletConnectV1.id, options);
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _removeListeners);
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _setupListeners);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _walletConnectConnector, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    defineProperty._defineProperty(this, "connector", void 0);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onConnect, {
      writable: true,
      value: data => {
        classPrivateFieldSet._classPrivateFieldSet(this, _provider, data.provider);
        if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider)) {
          throw new Error("WalletConnect provider not found after connecting.");
        }
      }
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onDisconnect, {
      writable: true,
      value: () => {
        classPrivateMethodGet._classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
      }
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onChange, {
      writable: true,
      value: async payload => {
        if (payload.chain) ; else if (payload.account) ;
      }
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onMessage, {
      writable: true,
      value: payload => {
        switch (payload.type) {
          case "request": // open wallet after request is sent
          case "add_chain": // open wallet after chain is added
          case "switch_chain":
            // open wallet after chain is switched
            this.emit("open_wallet");
            break;
          case "display_uri":
            this.emit("open_wallet", payload.data);
            break;
        }
      }
    });
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        WalletConnectV1Connector
      } = await Promise.resolve().then(function () { return require('../../../connectors/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.cjs.prod.js'); });
      classPrivateFieldSet._classPrivateFieldSet(this, _walletConnectConnector, new WalletConnectV1Connector({
        chains: this.chains,
        storage: this.walletStorage,
        options: {
          qrcode: this.options.qrcode,
          clientMeta: {
            description: this.options.dappMetadata.description || "",
            url: this.options.dappMetadata.url,
            icons: [this.options.dappMetadata.logoUrl || ""],
            name: this.options.dappMetadata.name
          }
        }
      }));
      this.connector = new twConnector.WagmiAdapter(classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector));
      classPrivateFieldSet._classPrivateFieldSet(this, _provider, await classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).getProvider());
      classPrivateMethodGet._classPrivateMethodGet(this, _setupListeners, _setupListeners2).call(this);
    }
    return this.connector;
  }
}
function _setupListeners2() {
  if (!classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector)) {
    return;
  }
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).on("connect", classPrivateFieldSet._classPrivateFieldGet(this, _onConnect));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).on("disconnect", classPrivateFieldSet._classPrivateFieldGet(this, _onDisconnect));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).on("change", classPrivateFieldSet._classPrivateFieldGet(this, _onChange));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).on("message", classPrivateFieldSet._classPrivateFieldGet(this, _onMessage));
}
function _removeListeners2() {
  if (!classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector)) {
    return;
  }
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).removeListener("connect", classPrivateFieldSet._classPrivateFieldGet(this, _onConnect));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).removeListener("disconnect", classPrivateFieldSet._classPrivateFieldGet(this, _onDisconnect));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).removeListener("change", classPrivateFieldSet._classPrivateFieldGet(this, _onChange));
  classPrivateFieldSet._classPrivateFieldGet(this, _walletConnectConnector).removeListener("message", classPrivateFieldSet._classPrivateFieldGet(this, _onMessage));
}
defineProperty._defineProperty(WalletConnectV1, "id", "walletConnectV1");
defineProperty._defineProperty(WalletConnectV1, "meta", {
  name: "Wallet Connect",
  iconURL: "ipfs://QmX58KPRaTC9JYZ7KriuBzeoEaV2P9eZcA3qbFnTHZazKw/wallet-connect.svg"
});

exports.WalletConnectV1 = WalletConnectV1;
