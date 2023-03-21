'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-d86606c4.cjs.dev.js');
var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-c4b4a0d5.cjs.dev.js');
var evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract = require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
var chains = require('@thirdweb-dev/chains');
var ethers = require('ethers');
require('../../../../dist/checkPrivateRedeclaration-09e2947a.cjs.dev.js');
require('../../../../dist/classPrivateMethodGet-13694527.cjs.dev.js');
require('eventemitter3');

// no need for prefixing here - AsyncStorage is already namespaced
const STORAGE_KEY_DATA = "data";
const STORAGE_KEY_ADDR = "address";
var _walletImpl = /*#__PURE__*/new WeakMap();
class DeviceBrowserWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractBrowserWallet {
  get walletName() {
    return "Device Wallet";
  }
  constructor(options) {
    super(DeviceBrowserWallet.id, {
      ...options,
      shouldAutoConnect: false // TODO figure the autoconnect flow
    });
    defineProperty._defineProperty(this, "connector", void 0);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _walletImpl, {
      writable: true,
      value: void 0
    });
    defineProperty._defineProperty(this, "options", void 0);
    this.options = options;
    classPrivateFieldSet._classPrivateFieldSet(this, _walletImpl, this.initializeWallet(options.wallet));
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        DeviceWalletConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/device-wallet/dist/thirdweb-dev-wallets-evm-connectors-device-wallet.cjs.dev.js'); });
      const wallet = classPrivateFieldSet._classPrivateFieldGet(this, _walletImpl);
      if (!wallet) {
        throw new Error("Wallet not initialized");
      }
      this.connector = new DeviceWalletConnector({
        chain: this.options.chain || chains.Ethereum,
        wallet,
        chains: this.options.chains || evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.thirdwebChains
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
        return DeviceWalletImpl.fromAsyncStorage(this.options.storage || evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.createAsyncLocalStorage("deviceWallet"));
      case "credentialStore":
        return DeviceWalletImpl.fromCredentialStore();
      default:
        // default to local storage
        return DeviceWalletImpl.fromAsyncStorage(this.options.storage || evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.createAsyncLocalStorage("deviceWallet"));
    }
  }
  getWalletData() {
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _walletImpl)) {
      throw new Error("Wallet not initialized");
    }
    return classPrivateFieldSet._classPrivateFieldGet(this, _walletImpl).getWalletData();
  }
  static getAddressStorageKey() {
    return STORAGE_KEY_ADDR;
  }
  static getDataStorageKey() {
    return STORAGE_KEY_DATA;
  }
}
defineProperty._defineProperty(DeviceBrowserWallet, "id", "deviceWallet");
defineProperty._defineProperty(DeviceBrowserWallet, "meta", {
  name: "Device Wallet",
  iconURL: "ipfs://QmcNddbYBuQKiBFnPcxYegjrX6S6z9K1vBNzbBBUJMn2ox/device-wallet.svg"
});
class AbstractDeviceWallet extends evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract.AbstractWallet {
  constructor(options) {
    super();
    defineProperty._defineProperty(this, "wallet", void 0);
    defineProperty._defineProperty(this, "options", void 0);
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
    const wallet = ethers.ethers.Wallet.createRandom();
    this.wallet = wallet;
    return wallet.address;
  }
  async loadSavedWallet(password) {
    const data = await this.options.storage.getWalletData();
    if (!data) {
      throw new Error("No saved wallet");
    }
    const wallet = await ethers.ethers.Wallet.fromEncryptedJson(data.encryptedData, password);
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
    defineProperty._defineProperty(this, "storage", void 0);
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
    defineProperty._defineProperty(this, "container", void 0);
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

exports.AbstractDeviceWallet = AbstractDeviceWallet;
exports.DeviceBrowserWallet = DeviceBrowserWallet;
exports.DeviceWalletImpl = DeviceWalletImpl;
