import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from '../../../../dist/classPrivateMethodGet-9d546189.browser.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { b as _classPrivateFieldGet, _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet } from '../../../../dist/classPrivateFieldSet-eea39a9a.browser.esm.js';
import { W as WagmiAdapter } from '../../../../dist/tw-connector-443c384d.browser.esm.js';
import { a as AbstractBrowserWallet } from '../../../../dist/base-0e9eea02.browser.esm.js';
import '../../../../dist/checkPrivateRedeclaration-3aaaa21d.browser.esm.js';
import 'eventemitter3';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';

var _walletConnectConnector = /*#__PURE__*/new WeakMap();
var _provider = /*#__PURE__*/new WeakMap();
var _onConnect = /*#__PURE__*/new WeakMap();
var _onDisconnect = /*#__PURE__*/new WeakMap();
var _onChange = /*#__PURE__*/new WeakMap();
var _onMessage = /*#__PURE__*/new WeakMap();
var _setupListeners = /*#__PURE__*/new WeakSet();
var _removeListeners = /*#__PURE__*/new WeakSet();
class WalletConnectV1 extends AbstractBrowserWallet {
  get walletName() {
    return _classPrivateFieldGet(this, _walletConnectConnector)?.walletName || "WalletConnect";
  }
  constructor(options) {
    super(options.walletId || WalletConnectV1.id, options);
    _classPrivateMethodInitSpec(this, _removeListeners);
    _classPrivateMethodInitSpec(this, _setupListeners);
    _classPrivateFieldInitSpec(this, _walletConnectConnector, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "connector", void 0);
    _classPrivateFieldInitSpec(this, _onConnect, {
      writable: true,
      value: data => {
        _classPrivateFieldSet(this, _provider, data.provider);
        if (!_classPrivateFieldGet(this, _provider)) {
          throw new Error("WalletConnect provider not found after connecting.");
        }
      }
    });
    _classPrivateFieldInitSpec(this, _onDisconnect, {
      writable: true,
      value: () => {
        _classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
      }
    });
    _classPrivateFieldInitSpec(this, _onChange, {
      writable: true,
      value: async payload => {
        if (payload.chain) ; else if (payload.account) ;
      }
    });
    _classPrivateFieldInitSpec(this, _onMessage, {
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
      } = await import('../../../connectors/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.browser.esm.js');
      _classPrivateFieldSet(this, _walletConnectConnector, new WalletConnectV1Connector({
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
      this.connector = new WagmiAdapter(_classPrivateFieldGet(this, _walletConnectConnector));
      _classPrivateFieldSet(this, _provider, await _classPrivateFieldGet(this, _walletConnectConnector).getProvider());
      _classPrivateMethodGet(this, _setupListeners, _setupListeners2).call(this);
    }
    return this.connector;
  }
}
function _setupListeners2() {
  if (!_classPrivateFieldGet(this, _walletConnectConnector)) {
    return;
  }
  _classPrivateFieldGet(this, _walletConnectConnector).on("connect", _classPrivateFieldGet(this, _onConnect));
  _classPrivateFieldGet(this, _walletConnectConnector).on("disconnect", _classPrivateFieldGet(this, _onDisconnect));
  _classPrivateFieldGet(this, _walletConnectConnector).on("change", _classPrivateFieldGet(this, _onChange));
  _classPrivateFieldGet(this, _walletConnectConnector).on("message", _classPrivateFieldGet(this, _onMessage));
}
function _removeListeners2() {
  if (!_classPrivateFieldGet(this, _walletConnectConnector)) {
    return;
  }
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("connect", _classPrivateFieldGet(this, _onConnect));
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("disconnect", _classPrivateFieldGet(this, _onDisconnect));
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("change", _classPrivateFieldGet(this, _onChange));
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("message", _classPrivateFieldGet(this, _onMessage));
}
_defineProperty(WalletConnectV1, "id", "walletConnectV1");
_defineProperty(WalletConnectV1, "meta", {
  name: "Wallet Connect",
  iconURL: "ipfs://QmX58KPRaTC9JYZ7KriuBzeoEaV2P9eZcA3qbFnTHZazKw/wallet-connect.svg"
});

export { WalletConnectV1 };
