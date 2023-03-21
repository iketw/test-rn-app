import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from './classPrivateMethodGet-9d546189.browser.esm.js';
import { _ as _defineProperty } from './defineProperty-c8ecdc07.browser.esm.js';
import { Ethereum, Goerli, Polygon, Mumbai, Avalanche, AvalancheFuji, Fantom, FantomTestnet, Arbitrum, ArbitrumGoerli, Optimism, OptimismGoerli, Binance, BinanceTestnet } from '@thirdweb-dev/chains';
import { AbstractWallet } from '../evm/wallets/abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';

const PREFIX = "__TW__";
class AsyncLocalStorage {
  constructor(name) {
    _defineProperty(this, "name", void 0);
    this.name = name;
  }
  getItem(key) {
    return new Promise(res => {
      res(localStorage.getItem(`${PREFIX}/${this.name}/${key}`));
    });
  }
  setItem(key, value) {
    return new Promise((res, rej) => {
      try {
        localStorage.setItem(`${PREFIX}/${this.name}/${key}`, value);
        res();
      } catch (e) {
        rej(e);
      }
    });
  }
  removeItem(key) {
    return new Promise(res => {
      localStorage.removeItem(`${PREFIX}/${this.name}/${key}`);
      res();
    });
  }
}
function createAsyncLocalStorage(name) {
  return new AsyncLocalStorage(name);
}

/**
 * @public
 */
let ChainId = /*#__PURE__*/function (ChainId) {
  ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
  ChainId[ChainId["Goerli"] = 5] = "Goerli";
  ChainId[ChainId["Polygon"] = 137] = "Polygon";
  ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
  ChainId[ChainId["Fantom"] = 250] = "Fantom";
  ChainId[ChainId["FantomTestnet"] = 4002] = "FantomTestnet";
  ChainId[ChainId["Avalanche"] = 43114] = "Avalanche";
  ChainId[ChainId["AvalancheFujiTestnet"] = 43113] = "AvalancheFujiTestnet";
  ChainId[ChainId["Optimism"] = 10] = "Optimism";
  ChainId[ChainId["OptimismGoerli"] = 420] = "OptimismGoerli";
  ChainId[ChainId["Arbitrum"] = 42161] = "Arbitrum";
  ChainId[ChainId["ArbitrumGoerli"] = 421613] = "ArbitrumGoerli";
  ChainId[ChainId["BinanceSmartChainMainnet"] = 56] = "BinanceSmartChainMainnet";
  ChainId[ChainId["BinanceSmartChainTestnet"] = 97] = "BinanceSmartChainTestnet";
  return ChainId;
}({});

/**
 * @public
 */

/**
 * @public
 */
[ChainId.Mainnet, ChainId.Goerli, ChainId.Polygon, ChainId.Mumbai, ChainId.Fantom, ChainId.FantomTestnet, ChainId.Avalanche, ChainId.AvalancheFujiTestnet, ChainId.Optimism, ChainId.OptimismGoerli, ChainId.Arbitrum, ChainId.ArbitrumGoerli, ChainId.BinanceSmartChainMainnet, ChainId.BinanceSmartChainTestnet];
const supportedChains = {
  [ChainId.Mainnet]: Ethereum,
  [ChainId.Goerli]: Goerli,
  [ChainId.Polygon]: Polygon,
  [ChainId.Mumbai]: Mumbai,
  [ChainId.Avalanche]: Avalanche,
  [ChainId.AvalancheFujiTestnet]: AvalancheFuji,
  [ChainId.Fantom]: Fantom,
  [ChainId.FantomTestnet]: FantomTestnet,
  [ChainId.Arbitrum]: Arbitrum,
  [ChainId.ArbitrumGoerli]: ArbitrumGoerli,
  [ChainId.Optimism]: Optimism,
  [ChainId.OptimismGoerli]: OptimismGoerli,
  [ChainId.BinanceSmartChainMainnet]: Binance,
  [ChainId.BinanceSmartChainTestnet]: BinanceTestnet
};
const thirdwebChains = Object.values(supportedChains);

var _subscribeToEvents = /*#__PURE__*/new WeakSet();
class AbstractBrowserWallet extends AbstractWallet {
  getMeta() {
    return this.constructor.meta;
  }
  constructor(walletId, options) {
    super();
    _classPrivateMethodInitSpec(this, _subscribeToEvents);
    _defineProperty(this, "walletId", void 0);
    _defineProperty(this, "coordinatorStorage", void 0);
    _defineProperty(this, "walletStorage", void 0);
    _defineProperty(this, "chains", void 0);
    _defineProperty(this, "options", void 0);
    this.walletId = walletId;
    this.options = options;
    this.chains = options.chains || thirdwebChains;
    this.coordinatorStorage = options.coordinatorStorage || createAsyncLocalStorage("coordinator");
    this.walletStorage = options.walletStorage || createAsyncLocalStorage(this.walletId);
  }
  /**
   * connect to the wallet if the last connected wallet is this wallet and not already connected
   */
  async autoConnect() {
    const lastConnectedWalletName = await this.coordinatorStorage.getItem("lastConnectedWallet");

    // return if the last connected wallet is not this wallet
    if (lastConnectedWalletName !== this.walletId) {
      return;
    }
    const lastConnectionParams = await this.walletStorage.getItem("lastConnectedParams");
    let parsedParams;
    try {
      parsedParams = JSON.parse(lastConnectionParams);
    } catch {
      parsedParams = undefined;
    }

    // connect and return the account address
    return await this.connect(parsedParams);
  }

  /**
   * connect to the wallet
   */
  async connect(connectOptions) {
    const connector = await this.getConnector();
    _classPrivateMethodGet(this, _subscribeToEvents, _subscribeToEvents2).call(this, connector);
    const saveToStorage = async () => {
      // if explicitly set to false, do not save the params
      if (connectOptions?.saveParams === false) {
        return;
      }
      try {
        await this.walletStorage.setItem("lastConnectedParams", JSON.stringify(connectOptions));
        await this.coordinatorStorage.setItem("lastConnectedWallet", this.walletId);
      } catch (e) {
        console.error(e);
      }
    };
    const isConnected = await connector.isConnected();
    if (isConnected) {
      const address = await connector.getAddress();
      connector.setupListeners();
      await saveToStorage();

      // ensure that connector is connected to the correct chain
      if (connectOptions?.chainId) {
        await connector.switchChain(connectOptions?.chainId);
      }
      return address;
    } else {
      const address = await connector.connect(connectOptions);
      await saveToStorage();
      return address;
    }
  }
  async getSigner() {
    const connector = await this.getConnector();
    if (!connector) {
      throw new Error("Wallet not connected");
    }
    return await connector.getSigner();
  }
  async onDisconnect() {
    const lastConnectedWallet = await this.coordinatorStorage.getItem("lastConnectedWallet");
    if (lastConnectedWallet === this.walletId) {
      await this.coordinatorStorage.removeItem("lastConnectedWallet");
    }
  }
  async disconnect() {
    const connector = await this.getConnector();
    if (connector) {
      await connector.disconnect();
      connector.removeAllListeners();
      await this.onDisconnect();
    }
  }
  async switchChain(chainId) {
    const connector = await this.getConnector();
    if (!connector) {
      throw new Error("Wallet not connected");
    }
    if (!connector.switchChain) {
      throw new Error("Wallet does not support switching chains");
    }
    return await connector.switchChain(chainId);
  }
  async updateChains(chains) {
    this.chains = chains;
    const connector = await this.getConnector();
    connector.updateChains(chains);
  }
}
async function _subscribeToEvents2(connector) {
  console.log("subscribe to events", this.walletId);
  // subscribe to connector for events
  connector.on("connect", data => {
    console.log("save last connected", this.walletId);
    this.coordinatorStorage.setItem("lastConnectedWallet", this.walletId);
    this.emit("connect", {
      address: data.account,
      chainId: data.chain?.id
    });
    if (data.chain?.id) {
      this.walletStorage.setItem("lastConnectedChain", String(data.chain?.id));
    }
  });
  connector.on("change", data => {
    this.emit("change", {
      address: data.account,
      chainId: data.chain?.id
    });
    if (data.chain?.id) {
      this.walletStorage.setItem("lastConnectedChain", String(data.chain?.id));
    }
  });
  connector.on("message", data => {
    this.emit("message", data);
  });
  connector.on("disconnect", async () => {
    await this.onDisconnect();
    this.emit("disconnect");
  });
  connector.on("error", error => this.emit("error", error));
}
_defineProperty(AbstractBrowserWallet, "meta", void 0);

export { AsyncLocalStorage as A, AbstractBrowserWallet as a, createAsyncLocalStorage as c, thirdwebChains as t };
