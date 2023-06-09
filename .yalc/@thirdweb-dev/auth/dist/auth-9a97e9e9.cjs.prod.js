'use strict';

var auth = require('./auth-d33692f5.cjs.prod.js');
var ethers = require('ethers');

function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

const arbitrum = {
  id: 42161,
  name: "Arbitrum One",
  network: "arbitrum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://arbitrum-mainnet.infura.io/v3"],
      webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://arb1.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://arb1.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Arbiscan",
      url: "https://arbiscan.io"
    },
    default: {
      name: "Arbiscan",
      url: "https://arbiscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7654707
    }
  }
};
const arbitrumGoerli = {
  id: 421613,
  name: "Arbitrum Goerli",
  network: "arbitrum-goerli",
  nativeCurrency: {
    name: "Arbitrum Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://arb-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://arbitrum-goerli.infura.io/v3"],
      webSocket: ["wss://arbitrum-goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Arbiscan",
      url: "https://goerli.arbiscan.io/"
    },
    default: {
      name: "Arbiscan",
      url: "https://goerli.arbiscan.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 88114
    }
  },
  testnet: true
};
const avalanche = {
  id: 43114,
  name: "Avalanche",
  network: "avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: {
      http: ["https://api.avax.network/ext/bc/C/rpc"]
    },
    public: {
      http: ["https://api.avax.network/ext/bc/C/rpc"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "SnowTrace",
      url: "https://snowtrace.io"
    },
    default: {
      name: "SnowTrace",
      url: "https://snowtrace.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11907934
    }
  }
};
const avalancheFuji = {
  id: 43113,
  name: "Avalanche Fuji",
  network: "avalanche-fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"]
    },
    public: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io"
    },
    default: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7096959
    }
  },
  testnet: true
};
const bsc = {
  id: 56,
  name: "BNB Smart Chain",
  network: "bsc",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/bsc"]
    },
    public: {
      http: ["https://rpc.ankr.com/bsc"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "BscScan",
      url: "https://bscscan.com"
    },
    default: {
      name: "BscScan",
      url: "https://bscscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15921452
    }
  }
};
const bscTestnet = {
  id: 97,
  name: "Binance Smart Chain Testnet",
  network: "bsc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    default: {
      http: ["https://bsc-testnet.public.blastapi.io"]
    },
    public: {
      http: ["https://bsc-testnet.public.blastapi.io"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "BscScan",
      url: "https://testnet.bscscan.com"
    },
    default: {
      name: "BscScan",
      url: "https://testnet.bscscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 17422483
    }
  },
  testnet: true
};
const fantom = {
  id: 250,
  name: "Fantom",
  network: "fantom",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/fantom"]
    },
    public: {
      http: ["https://rpc.ankr.com/fantom"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "FTMScan",
      url: "https://ftmscan.com"
    },
    default: {
      name: "FTMScan",
      url: "https://ftmscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 33001987
    }
  }
};
const fantomTestnet = {
  id: 4002,
  name: "Fantom Testnet",
  network: "fantom-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.fantom.network"]
    },
    public: {
      http: ["https://rpc.testnet.fantom.network"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "FTMScan",
      url: "https://testnet.ftmscan.com"
    },
    default: {
      name: "FTMScan",
      url: "https://testnet.ftmscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 8328688
    }
  }
};
const goerli = {
  id: 5,
  network: "goerli",
  name: "Goerli",
  nativeCurrency: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://eth-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://goerli.infura.io/v3"],
      webSocket: ["wss://goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    },
    public: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6507670
    }
  },
  testnet: true
};
const mainnet = {
  id: 1,
  network: "homestead",
  name: "Ethereum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://mainnet.infura.io/v3"],
      webSocket: ["wss://mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://cloudflare-eth.com"]
    },
    public: {
      http: ["https://cloudflare-eth.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://etherscan.io"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
};
const optimism = {
  id: 10,
  name: "Optimism",
  network: "optimism",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://opt-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://opt-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://optimism-mainnet.infura.io/v3"],
      webSocket: ["wss://optimism-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://mainnet.optimism.io"]
    },
    public: {
      http: ["https://mainnet.optimism.io"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://optimistic.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://optimistic.etherscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 4286263
    }
  }
};
const optimismGoerli = {
  id: 420,
  name: "Optimism Goerli",
  network: "optimism-goerli",
  nativeCurrency: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://opt-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://opt-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://optimism-goerli.infura.io/v3"],
      webSocket: ["wss://optimism-goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://goerli.optimism.io"]
    },
    public: {
      http: ["https://goerli.optimism.io"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 49461
    }
  },
  testnet: true
};
const polygon = {
  id: 137,
  name: "Polygon",
  network: "matic",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://polygon-mainnet.infura.io/v3"],
      webSocket: ["wss://polygon-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://polygon-rpc.com"]
    },
    public: {
      http: ["https://polygon-rpc.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://polygonscan.com"
    },
    default: {
      name: "PolygonScan",
      url: "https://polygonscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  }
};
const polygonMumbai = {
  id: 80001,
  name: "Polygon Mumbai",
  network: "maticmum",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mumbai.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mumbai.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://polygon-mumbai.infura.io/v3"],
      webSocket: ["wss://polygon-mumbai.infura.io/ws/v3"]
    },
    default: {
      http: ["https://matic-mumbai.chainstacklabs.com"]
    },
    public: {
      http: ["https://matic-mumbai.chainstacklabs.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    },
    default: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  },
  testnet: true
};

/**
 * @public
 * @deprecated - use the chainId number directly instead
 */
let ChainId;

/**
 * @public
 * @deprecated - thirdweb now supports all evm chains, for a list of chain install the @thirdweb-dev/chains package
 */
(function (ChainId) {
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
})(ChainId || (ChainId = {}));
/**
 * @public
 * @deprecated - thirdweb now supports all evm chains, for a list of chain install the @thirdweb-dev/chains package
 */
[ChainId.Mainnet, ChainId.Goerli, ChainId.Polygon, ChainId.Mumbai, ChainId.Fantom, ChainId.FantomTestnet, ChainId.Avalanche, ChainId.AvalancheFujiTestnet, ChainId.Optimism, ChainId.OptimismGoerli, ChainId.Arbitrum, ChainId.ArbitrumGoerli, ChainId.BinanceSmartChainMainnet, ChainId.BinanceSmartChainTestnet];
const DEFAULT_API_KEY = "c6634ad2d97b74baf15ff556016830c251050e6c36b9da508ce3ec80095d3dc1";
function getRpcUrl(chainId) {
  return `https://${chainId}.rpc.thirdweb.com/${DEFAULT_API_KEY}`;
}
function enhanceChain(chain) {
  const twRPC = getRpcUrl(chain.id);
  return {
    ...chain,
    rpcUrls: {
      ...chain.rpcUrls,
      default: {
        ...chain.rpcUrls.default,
        http: [twRPC, ...chain.rpcUrls.default.http]
      },
      public: {
        ...chain.rpcUrls.public,
        http: [twRPC, ...(chain.rpcUrls.public?.http || [])]
      }
    }
  };
}
const supportedChains = {
  [ChainId.Mainnet]: enhanceChain(mainnet),
  [ChainId.Goerli]: enhanceChain(goerli),
  [ChainId.Polygon]: enhanceChain(polygon),
  [ChainId.Mumbai]: enhanceChain(polygonMumbai),
  [ChainId.Avalanche]: enhanceChain(avalanche),
  [ChainId.AvalancheFujiTestnet]: enhanceChain(avalancheFuji),
  [ChainId.Fantom]: enhanceChain(fantom),
  [ChainId.FantomTestnet]: enhanceChain(fantomTestnet),
  [ChainId.Arbitrum]: enhanceChain(arbitrum),
  [ChainId.ArbitrumGoerli]: enhanceChain(arbitrumGoerli),
  [ChainId.Optimism]: enhanceChain(optimism),
  [ChainId.OptimismGoerli]: enhanceChain(optimismGoerli),
  [ChainId.BinanceSmartChainMainnet]: enhanceChain(bsc),
  [ChainId.BinanceSmartChainTestnet]: enhanceChain(bscTestnet)
};
Object.values(supportedChains);

const EIP1271_ABI = ["function isValidSignature(bytes32 _message, bytes _signature) public view returns (bytes4)"];
const EIP1271_MAGICVALUE = "0x1626ba7e";
const checkContractWalletSignature = async (message, signature, address, chainId) => {
  const rpcUrl = supportedChains[chainId]?.rpcUrls.default.http[0];
  if (!rpcUrl) {
    return false;
  }
  const provider = new ethers.ethers.providers.JsonRpcProvider(rpcUrl);
  const walletContract = new ethers.ethers.Contract(address, EIP1271_ABI, provider);
  const hashMessage = ethers.ethers.utils.hashMessage(message);
  try {
    const res = await walletContract.isValidSignature(hashMessage, signature);
    return res === EIP1271_MAGICVALUE;
  } catch {
    return false;
  }
};
var _signer = /*#__PURE__*/new WeakMap();
class SignerWallet {
  constructor(signer) {
    auth._defineProperty(this, "type", "evm");
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _signer, signer);
  }
  async getAddress() {
    return _classPrivateFieldGet(this, _signer).getAddress();
  }
  async getChainId() {
    return _classPrivateFieldGet(this, _signer).getChainId();
  }
  async signMessage(message) {
    return await _classPrivateFieldGet(this, _signer).signMessage(message);
  }
  async verifySignature(message, signature, address, chainId) {
    const messageHash = ethers.ethers.utils.hashMessage(message);
    const messageHashBytes = ethers.ethers.utils.arrayify(messageHash);
    const recoveredAddress = ethers.ethers.utils.recoverAddress(messageHashBytes, signature);
    if (recoveredAddress === address) {
      return true;
    }

    // Check if the address is a smart contract wallet
    if (chainId !== undefined) {
      try {
        const isValid = await checkContractWalletSignature(message, signature, address, chainId || 1);
        return isValid;
      } catch {
        // no-op
      }
    }
    return false;
  }
}
class PrivateKeyWallet extends SignerWallet {
  constructor(privateKey) {
    super(new ethers.ethers.Wallet(privateKey));
  }
}

const wallet = new SignerWallet(ethers.ethers.Wallet.createRandom());
const authMap = new Map();
async function verifyLogin(domain, payload, options) {
  let auth$1;
  if (!authMap.has(domain)) {
    auth$1 = new auth.ThirdwebAuth(wallet, domain);
    authMap.set(domain, auth$1);
  } else {
    auth$1 = authMap.get(domain);
  }
  try {
    const address = await auth$1.verify(payload, options);
    return {
      address,
      error: undefined
    };
  } catch (err) {
    return {
      address: undefined,
      error: err.message
    };
  }
}

exports.PrivateKeyWallet = PrivateKeyWallet;
exports.SignerWallet = SignerWallet;
exports.checkContractWalletSignature = checkContractWalletSignature;
exports.verifyLogin = verifyLogin;
