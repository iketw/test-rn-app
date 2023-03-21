import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from '../../../../dist/classPrivateMethodGet-fb5087d9.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-0ee02dfd.esm.js';
import { W as WagmiAdapter } from '../../../../dist/tw-connector-d83550c7.esm.js';
import { a as AbstractBrowserWallet } from '../../../../dist/base-def6ac05.esm.js';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import 'eventemitter3';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';

var _walletConnectConnector = /*#__PURE__*/new WeakMap();
var _provider = /*#__PURE__*/new WeakMap();
var _maybeThrowError = /*#__PURE__*/new WeakMap();
var _onConnect = /*#__PURE__*/new WeakMap();
var _onDisconnect = /*#__PURE__*/new WeakMap();
var _onChange = /*#__PURE__*/new WeakMap();
var _onMessage = /*#__PURE__*/new WeakMap();
var _onSessionRequestSent = /*#__PURE__*/new WeakMap();
var _setupListeners = /*#__PURE__*/new WeakSet();
var _removeListeners = /*#__PURE__*/new WeakSet();
class WalletConnect extends AbstractBrowserWallet {
  get walletName() {
    return "WalletConnect";
  }
  constructor(options) {
    super(options.walletId || WalletConnect.id, options);
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
    _classPrivateFieldInitSpec(this, _maybeThrowError, {
      writable: true,
      value: error => {
        if (error) {
          throw error;
        }
      }
    });
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
          case "display_uri":
            this.emit("open_wallet", payload.data);
            break;
        }
      }
    });
    _classPrivateFieldInitSpec(this, _onSessionRequestSent, {
      writable: true,
      value: () => {
        // open wallet after request is sent
        this.emit("open_wallet");
      }
    });
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        WalletConnectConnector
      } = await import('../../../connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.esm.js');
      _classPrivateFieldSet(this, _walletConnectConnector, new WalletConnectConnector({
        chains: this.chains,
        options: {
          qrcode: this.options.qrcode,
          projectId: this.options.projectId,
          dappMetadata: this.options.dappMetadata,
          storage: this.walletStorage
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
  _classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
  _classPrivateFieldGet(this, _walletConnectConnector).on("connect", _classPrivateFieldGet(this, _onConnect));
  _classPrivateFieldGet(this, _walletConnectConnector).on("disconnect", _classPrivateFieldGet(this, _onDisconnect));
  _classPrivateFieldGet(this, _walletConnectConnector).on("change", _classPrivateFieldGet(this, _onChange));
  _classPrivateFieldGet(this, _walletConnectConnector).on("message", _classPrivateFieldGet(this, _onMessage));
  _classPrivateFieldGet(this, _provider)?.signer.client.on("session_request_sent", _classPrivateFieldGet(this, _onSessionRequestSent));
}
function _removeListeners2() {
  if (!_classPrivateFieldGet(this, _walletConnectConnector)) {
    return;
  }
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("connect", _classPrivateFieldGet(this, _onConnect));
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("disconnect", _classPrivateFieldGet(this, _onDisconnect));
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("change", _classPrivateFieldGet(this, _onChange));
  _classPrivateFieldGet(this, _walletConnectConnector).removeListener("message", _classPrivateFieldGet(this, _onMessage));
  _classPrivateFieldGet(this, _provider)?.signer.client.removeListener("session_request_sent", _classPrivateFieldGet(this, _onSessionRequestSent));
}
_defineProperty(WalletConnect, "id", "walletConnect");
_defineProperty(WalletConnect, "meta", {
  name: "Wallet Connect",
  iconURL: "ipfs://QmX58KPRaTC9JYZ7KriuBzeoEaV2P9eZcA3qbFnTHZazKw/wallet-connect.svg"
});

export { WalletConnect };
