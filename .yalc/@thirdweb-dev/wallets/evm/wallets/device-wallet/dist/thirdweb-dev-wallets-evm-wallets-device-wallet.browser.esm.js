import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-eea39a9a.browser.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { a as AbstractBrowserWallet, t as thirdwebChains, c as createAsyncLocalStorage } from '../../../../dist/base-0e9eea02.browser.esm.js';
import { AbstractWallet } from '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import { Ethereum } from '@thirdweb-dev/chains';
import { ethers } from 'ethers';
import '../../../../dist/checkPrivateRedeclaration-3aaaa21d.browser.esm.js';
import '../../../../dist/classPrivateMethodGet-9d546189.browser.esm.js';
import 'eventemitter3';

// no need for prefixing here - AsyncStorage is already namespaced
const STORAGE_KEY_DATA = "data";
const STORAGE_KEY_ADDR = "address";
var _walletImpl = /*#__PURE__*/new WeakMap();
class DeviceBrowserWallet extends AbstractBrowserWallet {
  get walletName() {
    return "Device Wallet";
  }
  constructor(options) {
    super(DeviceBrowserWallet.id, {
      ...options,
      shouldAutoConnect: false // TODO figure the autoconnect flow
    });
    _defineProperty(this, "connector", void 0);
    _classPrivateFieldInitSpec(this, _walletImpl, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "options", void 0);
    this.options = options;
    _classPrivateFieldSet(this, _walletImpl, this.initializeWallet(options.wallet));
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        DeviceWalletConnector
      } = await import('../../../connectors/device-wallet/dist/thirdweb-dev-wallets-evm-connectors-device-wallet.browser.esm.js');
      const wallet = _classPrivateFieldGet(this, _walletImpl);
      if (!wallet) {
        throw new Error("Wallet not initialized");
      }
      this.connector = new DeviceWalletConnector({
        chain: this.options.chain || Ethereum,
        wallet,
        chains: this.options.chains || thirdwebChains
      });
    }
    return this.connector;
  }
  initializeWallet(wallet) {
    if (wallet) {
      return wallet;
    }
    switch (this.options.storageType) {
      case "asyncStore":
        return DeviceWalletImpl.fromAsyncStorage(this.options.storage || createAsyncLocalStorage("deviceWallet"));
      case "credentialStore":
        return DeviceWalletImpl.fromCredentialStore();
      default:
        // default to local storage
        return DeviceWalletImpl.fromAsyncStorage(this.options.storage || createAsyncLocalStorage("deviceWallet"));
    }
  }
  getWalletData() {
    if (!_classPrivateFieldGet(this, _walletImpl)) {
      throw new Error("Wallet not initialized");
    }
    return _classPrivateFieldGet(this, _walletImpl).getWalletData();
  }
  static getAddressStorageKey() {
    return STORAGE_KEY_ADDR;
  }
  static getDataStorageKey() {
    return STORAGE_KEY_DATA;
  }
}
_defineProperty(DeviceBrowserWallet, "id", "deviceWallet");
_defineProperty(DeviceBrowserWallet, "meta", {
  name: "Device Wallet",
  iconURL: "ipfs://QmcNddbYBuQKiBFnPcxYegjrX6S6z9K1vBNzbBBUJMn2ox/device-wallet.svg"
});
class AbstractDeviceWallet extends AbstractWallet {
  constructor(options) {
    super();
    _defineProperty(this, "wallet", void 0);
    _defineProperty(this, "options", void 0);
    this.options = options;
  }
  async getSigner(provider) {
    if (!this.wallet) {
      throw new Error("Wallet not initialized");
    }
    let wallet = this.wallet;
    if (provider) {
      wallet = wallet.connect(provider);
    }
    return wallet;
  }
  async getSavedWalletAddress() {
    const data = await this.options.storage.getWalletData();
    if (!data) {
      return null;
    }
    return data.address;
  }
  getWalletData() {
    return this.options.storage.getWalletData();
  }
}
class DeviceWalletImpl extends AbstractDeviceWallet {
  static fromAsyncStorage(storage) {
    return new DeviceWalletImpl({
      storage: new AsyncWalletStorage(storage)
    });
  }
  static fromCredentialStore() {
    return new DeviceWalletImpl({
      storage: new CredentialsStorage(navigator.credentials)
    });
  }
  constructor(options) {
    super(options);
  }
  async generateNewWallet() {
    const wallet = ethers.Wallet.createRandom();
    this.wallet = wallet;
    return wallet.address;
  }
  async loadSavedWallet(password) {
    const data = await this.options.storage.getWalletData();
    if (!data) {
      throw new Error("No saved wallet");
    }
    const wallet = await ethers.Wallet.fromEncryptedJson(data.encryptedData, password);
    this.wallet = wallet;
    return wallet.address;
  }
  async save(password) {
    const wallet = await this.getSigner();
    // reduce the scrypt cost to make it faster
    const options = {
      scrypt: {
        N: 1 << 32
      }
    };
    const encryptedData = await wallet.encrypt(password, options);
    await this.options.storage.storeWalletData({
      address: wallet.address,
      encryptedData
    });
  }
  async export(password) {
    const wallet = await this.getSigner();
    return wallet.encrypt(password);
  }
}
class AsyncWalletStorage {
  constructor(storage) {
    _defineProperty(this, "storage", void 0);
    this.storage = storage;
  }
  async getWalletData() {
    const [address, encryptedData] = await Promise.all([this.storage.getItem(STORAGE_KEY_ADDR), this.storage.getItem(STORAGE_KEY_DATA)]);
    if (!address || !encryptedData) {
      return null;
    }
    return {
      address,
      encryptedData
    };
  }
  async storeWalletData(data) {
    await Promise.all([this.storage.setItem(STORAGE_KEY_ADDR, data.address), this.storage.setItem(STORAGE_KEY_DATA, data.encryptedData)]);
  }
}
class CredentialsStorage {
  constructor(container) {
    _defineProperty(this, "container", void 0);
    this.container = container;
  }
  async getWalletData() {
    const credential = await this.container.get({
      password: true,
      unmediated: true
    });
    if (credential && "password" in credential) {
      return {
        address: credential.id,
        encryptedData: credential.password
      };
    }
    return null;
  }
  async storeWalletData(data) {
    if ("PasswordCredential" in window) {
      let credentialData = {
        id: data.address,
        password: data.encryptedData
      };
      const credential = await this.container.create({
        password: credentialData
      });
      if (!credential) {
        throw new Error("Credential not created");
      }
      await this.container.store(credential);
    } else {
      throw new Error("PasswordCredential not supported");
    }
  }
}

export { AbstractDeviceWallet, DeviceBrowserWallet, DeviceWalletImpl };
