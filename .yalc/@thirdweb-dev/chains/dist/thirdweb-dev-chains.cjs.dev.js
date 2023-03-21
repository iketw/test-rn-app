'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var c1 = {
  "name": "Ethereum Mainnet",
  "chain": "ETH",
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "rpc": ["https://ethereum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com", "https://ethereum.publicnode.com"],
  "features": [{
    "name": "EIP1559"
  }, {
    "name": "EIP155"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://ethereum.org",
  "shortName": "eth",
  "chainId": 1,
  "networkId": 1,
  "slip44": 60,
  "ens": {
    "registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
  },
  "explorers": [{
    "name": "etherscan",
    "url": "https://etherscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ethereum"
};

var c2 = {
  "name": "Expanse Network",
  "chain": "EXP",
  "rpc": ["https://expanse-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node.expanse.tech"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Expanse Network Ether",
    "symbol": "EXP",
    "decimals": 18
  },
  "infoURL": "https://expanse.tech",
  "shortName": "exp",
  "chainId": 2,
  "networkId": 1,
  "slip44": 40,
  "testnet": false,
  "slug": "expanse-network"
};

var c3 = {
  "name": "Ropsten",
  "title": "Ethereum Testnet Ropsten",
  "chain": "ETH",
  "rpc": ["https://ropsten.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://ropsten.infura.io/v3/${INFURA_API_KEY}", "wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}"],
  "faucets": ["http://fauceth.komputing.org?chain=3&address=${ADDRESS}", "https://faucet.ropsten.be?${ADDRESS}"],
  "nativeCurrency": {
    "name": "Ropsten Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://github.com/ethereum/ropsten",
  "shortName": "rop",
  "chainId": 3,
  "networkId": 3,
  "ens": {
    "registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"
  },
  "explorers": [{
    "name": "etherscan",
    "url": "https://ropsten.etherscan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "ropsten"
};

var c4 = {
  "name": "Rinkeby",
  "title": "Ethereum Testnet Rinkeby",
  "chain": "ETH",
  "rpc": ["https://rinkeby.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rinkeby.infura.io/v3/${INFURA_API_KEY}", "wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}"],
  "faucets": ["http://fauceth.komputing.org?chain=4&address=${ADDRESS}", "https://faucet.rinkeby.io"],
  "nativeCurrency": {
    "name": "Rinkeby Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://www.rinkeby.io",
  "shortName": "rin",
  "chainId": 4,
  "networkId": 4,
  "ens": {
    "registry": "0xe7410170f87102df0055eb195163a03b7f2bff4a"
  },
  "explorers": [{
    "name": "etherscan-rinkeby",
    "url": "https://rinkeby.etherscan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "rinkeby"
};

var c5 = {
  "name": "Goerli",
  "title": "Ethereum Testnet Goerli",
  "chain": "ETH",
  "rpc": ["https://goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://goerli.infura.io/v3/${INFURA_API_KEY}", "wss://goerli.infura.io/v3/${INFURA_API_KEY}", "https://rpc.goerli.mudit.blog/"],
  "faucets": ["https://faucet.paradigm.xyz/", "http://fauceth.komputing.org?chain=5&address=${ADDRESS}", "https://goerli-faucet.slock.it?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"],
  "nativeCurrency": {
    "name": "Goerli Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://goerli.net/#about",
  "shortName": "gor",
  "chainId": 5,
  "networkId": 5,
  "ens": {
    "registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"
  },
  "explorers": [{
    "name": "etherscan-goerli",
    "url": "https://goerli.etherscan.io",
    "standard": "EIP3091"
  }],
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "testnet": true,
  "slug": "goerli"
};

var c6 = {
  "name": "Ethereum Classic Testnet Kotti",
  "chain": "ETC",
  "rpc": ["https://ethereum-classic-testnet-kotti.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://www.ethercluster.com/kotti"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kotti Ether",
    "symbol": "KOT",
    "decimals": 18
  },
  "infoURL": "https://explorer.jade.builders/?network=kotti",
  "shortName": "kot",
  "chainId": 6,
  "networkId": 6,
  "testnet": true,
  "slug": "ethereum-classic-testnet-kotti"
};

var c7 = {
  "name": "ThaiChain",
  "chain": "TCH",
  "rpc": ["https://thaichain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.dome.cloud", "https://rpc.thaichain.org"],
  "faucets": [],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "nativeCurrency": {
    "name": "ThaiChain Ether",
    "symbol": "TCH",
    "decimals": 18
  },
  "infoURL": "https://thaichain.io",
  "shortName": "tch",
  "chainId": 7,
  "networkId": 7,
  "explorers": [{
    "name": "Thaichain Explorer",
    "url": "https://exp.thaichain.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "thaichain"
};

var c8 = {
  "name": "Ubiq",
  "chain": "UBQ",
  "rpc": ["https://ubiq.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.octano.dev", "https://pyrus2.ubiqscan.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ubiq Ether",
    "symbol": "UBQ",
    "decimals": 18
  },
  "infoURL": "https://ubiqsmart.com",
  "shortName": "ubq",
  "chainId": 8,
  "networkId": 8,
  "slip44": 108,
  "explorers": [{
    "name": "ubiqscan",
    "url": "https://ubiqscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ubiq"
};

var c9 = {
  "name": "Ubiq Network Testnet",
  "chain": "UBQ",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ubiq Testnet Ether",
    "symbol": "TUBQ",
    "decimals": 18
  },
  "infoURL": "https://ethersocial.org",
  "shortName": "tubq",
  "chainId": 9,
  "networkId": 2,
  "testnet": true,
  "slug": "ubiq-network-testnet"
};

var c10 = {
  "name": "Optimism",
  "chain": "ETH",
  "rpc": ["https://optimism.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://mainnet.optimism.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://optimism.io",
  "shortName": "oeth",
  "chainId": 10,
  "networkId": 10,
  "explorers": [{
    "name": "etherscan",
    "url": "https://optimistic.etherscan.io",
    "standard": "EIP3091"
  }],
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "testnet": false,
  "slug": "optimism"
};

var c11 = {
  "name": "Metadium Mainnet",
  "chain": "META",
  "rpc": ["https://metadium.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.metadium.com/prod"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Metadium Mainnet Ether",
    "symbol": "META",
    "decimals": 18
  },
  "infoURL": "https://metadium.com",
  "shortName": "meta",
  "chainId": 11,
  "networkId": 11,
  "slip44": 916,
  "testnet": false,
  "slug": "metadium"
};

var c12 = {
  "name": "Metadium Testnet",
  "chain": "META",
  "rpc": ["https://metadium-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.metadium.com/dev"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Metadium Testnet Ether",
    "symbol": "KAL",
    "decimals": 18
  },
  "infoURL": "https://metadium.com",
  "shortName": "kal",
  "chainId": 12,
  "networkId": 12,
  "testnet": true,
  "slug": "metadium-testnet"
};

var c13 = {
  "name": "Diode Testnet Staging",
  "chain": "DIODE",
  "rpc": ["https://diode-testnet-staging.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://staging.diode.io:8443/", "wss://staging.diode.io:8443/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Staging Diodes",
    "symbol": "sDIODE",
    "decimals": 18
  },
  "infoURL": "https://diode.io/staging",
  "shortName": "dstg",
  "chainId": 13,
  "networkId": 13,
  "testnet": true,
  "slug": "diode-testnet-staging"
};

var c14 = {
  "name": "Flare Mainnet",
  "chain": "FLR",
  "icon": {
    "url": "ipfs://QmevAevHxRkK2zVct2Eu6Y7s38YC4SmiAiw9X7473pVtmL",
    "width": 382,
    "height": 382,
    "format": "png"
  },
  "rpc": ["https://flare.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://flare-api.flare.network/ext/C/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Flare",
    "symbol": "FLR",
    "decimals": 18
  },
  "infoURL": "https://flare.xyz",
  "shortName": "flr",
  "chainId": 14,
  "networkId": 14,
  "explorers": [{
    "name": "blockscout",
    "url": "https://flare-explorer.flare.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "flare"
};

var c15 = {
  "name": "Diode Prenet",
  "chain": "DIODE",
  "rpc": ["https://diode-prenet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://prenet.diode.io:8443/", "wss://prenet.diode.io:8443/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Diodes",
    "symbol": "DIODE",
    "decimals": 18
  },
  "infoURL": "https://diode.io/prenet",
  "shortName": "diode",
  "chainId": 15,
  "networkId": 15,
  "testnet": false,
  "slug": "diode-prenet"
};

var c16 = {
  "name": "Flare Testnet Coston",
  "chain": "FLR",
  "icon": {
    "url": "ipfs://QmW7Ljv2eLQ1poRrhJBaVWJBF1TyfZ8QYxDeELRo6sssrj",
    "width": 382,
    "height": 382,
    "format": "png"
  },
  "rpc": ["https://flare-testnet-coston.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://coston-api.flare.network/ext/bc/C/rpc"],
  "faucets": ["https://faucet.towolabs.com", "https://fauceth.komputing.org?chain=16&address=${ADDRESS}"],
  "nativeCurrency": {
    "name": "Coston Flare",
    "symbol": "CFLR",
    "decimals": 18
  },
  "infoURL": "https://flare.xyz",
  "shortName": "cflr",
  "chainId": 16,
  "networkId": 16,
  "explorers": [{
    "name": "blockscout",
    "url": "https://coston-explorer.flare.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "flare-testnet-coston"
};

var c17 = {
  "name": "ThaiChain 2.0 ThaiFi",
  "chain": "TCH",
  "rpc": ["https://thaichain-2-0-thaifi.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.thaifi.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Thaifi Ether",
    "symbol": "TFI",
    "decimals": 18
  },
  "infoURL": "https://exp.thaifi.com",
  "shortName": "tfi",
  "chainId": 17,
  "networkId": 17,
  "testnet": false,
  "slug": "thaichain-2-0-thaifi"
};

var c18 = {
  "name": "ThunderCore Testnet",
  "chain": "TST",
  "rpc": ["https://thundercore-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.thundercore.com"],
  "faucets": ["https://faucet-testnet.thundercore.com"],
  "nativeCurrency": {
    "name": "ThunderCore Testnet Token",
    "symbol": "TST",
    "decimals": 18
  },
  "infoURL": "https://thundercore.com",
  "shortName": "TST",
  "chainId": 18,
  "networkId": 18,
  "explorers": [{
    "name": "thundercore-blockscout-testnet",
    "url": "https://explorer-testnet.thundercore.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "thundercore-testnet"
};

var c19 = {
  "name": "Songbird Canary-Network",
  "chain": "SGB",
  "icon": {
    "url": "ipfs://QmXyvnrZY8FUxSULfnKKA99sAEkjAHtvhRx5WeHixgaEdu",
    "width": 382,
    "height": 382,
    "format": "png"
  },
  "rpc": ["https://songbird-canary-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://songbird-api.flare.network/ext/C/rpc", "https://sgb.ftso.com.au/ext/bc/C/rpc", "https://sgb.lightft.so/rpc", "https://sgb-rpc.ftso.eu"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Songbird",
    "symbol": "SGB",
    "decimals": 18
  },
  "infoURL": "https://flare.xyz",
  "shortName": "sgb",
  "chainId": 19,
  "networkId": 19,
  "explorers": [{
    "name": "blockscout",
    "url": "https://songbird-explorer.flare.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "songbird-canary-network"
};

var c20 = {
  "name": "Elastos Smart Chain",
  "chain": "ETH",
  "rpc": ["https://elastos-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.elastos.io/eth"],
  "faucets": ["https://faucet.elastos.org/"],
  "nativeCurrency": {
    "name": "Elastos",
    "symbol": "ELA",
    "decimals": 18
  },
  "infoURL": "https://www.elastos.org/",
  "shortName": "esc",
  "chainId": 20,
  "networkId": 20,
  "explorers": [{
    "name": "elastos esc explorer",
    "url": "https://esc.elastos.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "elastos-smart-chain"
};

var c21 = {
  "name": "Elastos Smart Chain Testnet",
  "chain": "ETH",
  "rpc": ["https://elastos-smart-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api-testnet.elastos.io/eth"],
  "faucets": ["https://esc-faucet.elastos.io/"],
  "nativeCurrency": {
    "name": "Elastos",
    "symbol": "tELA",
    "decimals": 18
  },
  "infoURL": "https://www.elastos.org/",
  "shortName": "esct",
  "chainId": 21,
  "networkId": 21,
  "explorers": [{
    "name": "elastos esc explorer",
    "url": "https://esc-testnet.elastos.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "elastos-smart-chain-testnet"
};

var c22 = {
  "name": "ELA-DID-Sidechain Mainnet",
  "chain": "ETH",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Elastos",
    "symbol": "ELA",
    "decimals": 18
  },
  "infoURL": "https://www.elastos.org/",
  "shortName": "eladid",
  "chainId": 22,
  "networkId": 22,
  "testnet": false,
  "slug": "ela-did-sidechain"
};

var c23 = {
  "name": "ELA-DID-Sidechain Testnet",
  "chain": "ETH",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Elastos",
    "symbol": "tELA",
    "decimals": 18
  },
  "infoURL": "https://elaeth.io/",
  "shortName": "eladidt",
  "chainId": 23,
  "networkId": 23,
  "testnet": true,
  "slug": "ela-did-sidechain-testnet"
};

var c24 = {
  "name": "KardiaChain Mainnet",
  "chain": "KAI",
  "icon": {
    "url": "ipfs://QmXoHaZXJevc59GuzEgBhwRSH6kio1agMRvL8bD93pARRV",
    "format": "png",
    "width": 297,
    "height": 297
  },
  "rpc": ["https://kardiachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.kardiachain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "KardiaChain",
    "symbol": "KAI",
    "decimals": 18
  },
  "infoURL": "https://kardiachain.io",
  "shortName": "kardiachain",
  "chainId": 24,
  "networkId": 0,
  "redFlags": ["reusedChainId"],
  "testnet": false,
  "slug": "kardiachain"
};

var c25 = {
  "name": "Cronos Mainnet Beta",
  "chain": "CRO",
  "rpc": ["https://cronos-beta.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm.cronos.org", "https://cronos-evm.publicnode.com"],
  "features": [{
    "name": "EIP1559"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "Cronos",
    "symbol": "CRO",
    "decimals": 18
  },
  "infoURL": "https://cronos.org/",
  "shortName": "cro",
  "chainId": 25,
  "networkId": 25,
  "explorers": [{
    "name": "Cronos Explorer",
    "url": "https://cronoscan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "cronos-beta"
};

var c26 = {
  "name": "Genesis L1 testnet",
  "chain": "genesis",
  "rpc": ["https://genesis-l1-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testrpc.genesisl1.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "L1 testcoin",
    "symbol": "L1test",
    "decimals": 18
  },
  "infoURL": "https://www.genesisl1.com",
  "shortName": "L1test",
  "chainId": 26,
  "networkId": 26,
  "explorers": [{
    "name": "Genesis L1 testnet explorer",
    "url": "https://testnet.genesisl1.org",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "genesis-l1-testnet"
};

var c27 = {
  "name": "ShibaChain",
  "chain": "SHIB",
  "rpc": ["https://shibachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.shibachain.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "SHIBA INU COIN",
    "symbol": "SHIB",
    "decimals": 18
  },
  "infoURL": "https://www.shibachain.net",
  "shortName": "shib",
  "chainId": 27,
  "networkId": 27,
  "explorers": [{
    "name": "Shiba Explorer",
    "url": "https://exp.shibachain.net",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "shibachain"
};

var c28 = {
  "name": "Boba Network Rinkeby Testnet",
  "chain": "ETH",
  "rpc": ["https://boba-network-rinkeby-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rinkeby.boba.network/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "BobaRinkeby",
  "chainId": 28,
  "networkId": 28,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://blockexplorer.rinkeby.boba.network",
    "standard": "none"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-4",
    "bridges": [{
      "url": "https://gateway.rinkeby.boba.network"
    }]
  },
  "testnet": true,
  "slug": "boba-network-rinkeby-testnet"
};

var c29 = {
  "name": "Genesis L1",
  "chain": "genesis",
  "rpc": ["https://genesis-l1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.genesisl1.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "L1 coin",
    "symbol": "L1",
    "decimals": 18
  },
  "infoURL": "https://www.genesisl1.com",
  "shortName": "L1",
  "chainId": 29,
  "networkId": 29,
  "explorers": [{
    "name": "Genesis L1 blockchain explorer",
    "url": "https://explorer.genesisl1.org",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "genesis-l1"
};

var c30 = {
  "name": "RSK Mainnet",
  "chain": "RSK",
  "rpc": ["https://rsk.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://public-node.rsk.co", "https://mycrypto.rsk.co"],
  "faucets": ["https://faucet.rsk.co/"],
  "nativeCurrency": {
    "name": "Smart Bitcoin",
    "symbol": "RBTC",
    "decimals": 18
  },
  "infoURL": "https://rsk.co",
  "shortName": "rsk",
  "chainId": 30,
  "networkId": 30,
  "slip44": 137,
  "explorers": [{
    "name": "RSK Explorer",
    "url": "https://explorer.rsk.co",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "rsk"
};

var c31 = {
  "name": "RSK Testnet",
  "chain": "RSK",
  "rpc": ["https://rsk-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://public-node.testnet.rsk.co", "https://mycrypto.testnet.rsk.co"],
  "faucets": ["https://faucet.rsk.co/"],
  "nativeCurrency": {
    "name": "Testnet Smart Bitcoin",
    "symbol": "tRBTC",
    "decimals": 18
  },
  "infoURL": "https://rsk.co",
  "shortName": "trsk",
  "chainId": 31,
  "networkId": 31,
  "explorers": [{
    "name": "RSK Testnet Explorer",
    "url": "https://explorer.testnet.rsk.co",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "rsk-testnet"
};

var c32 = {
  "name": "GoodData Testnet",
  "chain": "GooD",
  "rpc": ["https://gooddata-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://test2.goodata.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GoodData Testnet Ether",
    "symbol": "GooD",
    "decimals": 18
  },
  "infoURL": "https://www.goodata.org",
  "shortName": "GooDT",
  "chainId": 32,
  "networkId": 32,
  "testnet": true,
  "slug": "gooddata-testnet"
};

var c33 = {
  "name": "GoodData Mainnet",
  "chain": "GooD",
  "rpc": ["https://gooddata.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.goodata.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GoodData Mainnet Ether",
    "symbol": "GooD",
    "decimals": 18
  },
  "infoURL": "https://www.goodata.org",
  "shortName": "GooD",
  "chainId": 33,
  "networkId": 33,
  "testnet": false,
  "slug": "gooddata"
};

var c34 = {
  "name": "Dithereum Testnet",
  "chain": "DTH",
  "icon": {
    "url": "ipfs://QmSHN5GtRGpMMpszSn1hF47ZSLRLqrLxWsQ48YYdJPyjLf",
    "width": 500,
    "height": 500,
    "format": "png"
  },
  "rpc": ["https://dithereum-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node-testnet.dithereum.io"],
  "faucets": ["https://faucet.dithereum.org"],
  "nativeCurrency": {
    "name": "Dither",
    "symbol": "DTH",
    "decimals": 18
  },
  "infoURL": "https://dithereum.org",
  "shortName": "dth",
  "chainId": 34,
  "networkId": 34,
  "testnet": true,
  "slug": "dithereum-testnet"
};

var c35 = {
  "name": "TBWG Chain",
  "chain": "TBWG",
  "rpc": ["https://tbwg-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.tbwg.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TBWG Ether",
    "symbol": "TBG",
    "decimals": 18
  },
  "infoURL": "https://tbwg.io",
  "shortName": "tbwg",
  "chainId": 35,
  "networkId": 35,
  "testnet": false,
  "slug": "tbwg-chain"
};

var c36 = {
  "name": "Dxchain Mainnet",
  "chain": "Dxchain",
  "icon": {
    "url": "ipfs://QmYBup5bWoBfkaHntbcgW8Ji7ncad7f53deJ4Q55z4PNQs",
    "width": 128,
    "height": 128,
    "format": "png"
  },
  "rpc": ["https://dxchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.dxchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dxchain",
    "symbol": "DX",
    "decimals": 18
  },
  "infoURL": "https://www.dxchain.com/",
  "shortName": "dx",
  "chainId": 36,
  "networkId": 36,
  "explorers": [{
    "name": "dxscan",
    "url": "https://dxscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "dxchain"
};

var c37 = {
  "name": "SeedCoin-Network",
  "chain": "SeedCoin-Network",
  "rpc": ["https://seedcoin-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node.seedcoin.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "SeedCoin",
    "symbol": "SEED",
    "decimals": 18
  },
  "infoURL": "https://www.seedcoin.network/",
  "shortName": "SEED",
  "icon": {
    "url": "ipfs://QmSchLvCCZjBzcv5n22v1oFDAc2yHJ42NERyjZeL9hBgrh",
    "width": 64,
    "height": 64,
    "format": "png"
  },
  "chainId": 37,
  "networkId": 37,
  "testnet": false,
  "slug": "seedcoin-network"
};

var c38 = {
  "name": "Valorbit",
  "chain": "VAL",
  "rpc": ["https://valorbit.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.valorbit.com/v2"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Valorbit",
    "symbol": "VAL",
    "decimals": 18
  },
  "infoURL": "https://valorbit.com",
  "shortName": "val",
  "chainId": 38,
  "networkId": 38,
  "slip44": 538,
  "testnet": false,
  "slug": "valorbit"
};

var c39 = {
  "name": "Unicorn Ultra Testnet",
  "chain": "u2u",
  "rpc": ["https://unicorn-ultra-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.uniultra.xyz"],
  "faucets": ["https://faucet.uniultra.xyz"],
  "nativeCurrency": {
    "name": "Unicorn Ultra",
    "symbol": "U2U",
    "decimals": 18
  },
  "infoURL": "https://uniultra.xyz",
  "shortName": "u2u",
  "chainId": 39,
  "networkId": 39,
  "icon": {
    "url": "ipfs://QmcW64RgqQVHnNbVFyfaMNKt7dJvFqEbfEHZmeyeK8dpEa",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "icon": "u2u",
    "name": "U2U Explorer",
    "url": "https://testnet.uniultra.xyz",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "unicorn-ultra-testnet"
};

var c40 = {
  "name": "Telos EVM Mainnet",
  "chain": "TLOS",
  "rpc": ["https://telos-evm.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.telos.net/evm"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Telos",
    "symbol": "TLOS",
    "decimals": 18
  },
  "infoURL": "https://telos.net",
  "shortName": "TelosEVM",
  "chainId": 40,
  "networkId": 40,
  "explorers": [{
    "name": "teloscan",
    "url": "https://teloscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "telos-evm"
};

var c41 = {
  "name": "Telos EVM Testnet",
  "chain": "TLOS",
  "rpc": ["https://telos-evm-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.telos.net/evm"],
  "faucets": ["https://app.telos.net/testnet/developers"],
  "nativeCurrency": {
    "name": "Telos",
    "symbol": "TLOS",
    "decimals": 18
  },
  "infoURL": "https://telos.net",
  "shortName": "TelosEVMTestnet",
  "chainId": 41,
  "networkId": 41,
  "testnet": true,
  "slug": "telos-evm-testnet"
};

var c42 = {
  "name": "Kovan",
  "title": "Ethereum Testnet Kovan",
  "chain": "ETH",
  "rpc": ["https://kovan.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://kovan.poa.network", "http://kovan.poa.network:8545", "https://kovan.infura.io/v3/${INFURA_API_KEY}", "wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}", "ws://kovan.poa.network:8546"],
  "faucets": ["http://fauceth.komputing.org?chain=42&address=${ADDRESS}", "https://faucet.kovan.network", "https://gitter.im/kovan-testnet/faucet"],
  "nativeCurrency": {
    "name": "Kovan Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "explorers": [{
    "name": "etherscan",
    "url": "https://kovan.etherscan.io",
    "standard": "EIP3091"
  }],
  "infoURL": "https://kovan-testnet.github.io/website",
  "shortName": "kov",
  "chainId": 42,
  "networkId": 42,
  "testnet": true,
  "slug": "kovan"
};

var c43 = {
  "name": "Darwinia Pangolin Testnet",
  "chain": "pangolin",
  "rpc": ["https://darwinia-pangolin-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://pangolin-rpc.darwinia.network"],
  "faucets": ["https://docs.crab.network/dvm/wallets/dvm-metamask#apply-for-the-test-token"],
  "nativeCurrency": {
    "name": "Pangolin Network Native Token",
    "symbol": "PRING",
    "decimals": 18
  },
  "infoURL": "https://darwinia.network/",
  "shortName": "pangolin",
  "chainId": 43,
  "networkId": 43,
  "explorers": [{
    "name": "subscan",
    "url": "https://pangolin.subscan.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "darwinia-pangolin-testnet"
};

var c44 = {
  "name": "Darwinia Crab Network",
  "chain": "crab",
  "rpc": ["https://darwinia-crab-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://crab-rpc.darwinia.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Crab Network Native Token",
    "symbol": "CRAB",
    "decimals": 18
  },
  "infoURL": "https://crab.network/",
  "shortName": "crab",
  "chainId": 44,
  "networkId": 44,
  "explorers": [{
    "name": "subscan",
    "url": "https://crab.subscan.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "darwinia-crab-network"
};

var c45 = {
  "name": "Darwinia Pangoro Testnet",
  "chain": "pangoro",
  "rpc": ["https://darwinia-pangoro-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://pangoro-rpc.darwinia.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Pangoro Network Native Token",
    "symbol": "ORING",
    "decimals": 18
  },
  "infoURL": "https://darwinia.network/",
  "shortName": "pangoro",
  "chainId": 45,
  "networkId": 45,
  "explorers": [{
    "name": "subscan",
    "url": "https://pangoro.subscan.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "darwinia-pangoro-testnet"
};

var c46 = {
  "name": "Darwinia Network",
  "chain": "darwinia",
  "rpc": ["https://darwinia-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.darwinia.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Darwinia Network Native Token",
    "symbol": "RING",
    "decimals": 18
  },
  "infoURL": "https://darwinia.network/",
  "shortName": "darwinia",
  "chainId": 46,
  "networkId": 46,
  "explorers": [{
    "name": "subscan",
    "url": "https://darwinia.subscan.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "darwinia-network"
};

var c48 = {
  "name": "Ennothem Mainnet Proterozoic",
  "chain": "ETMP",
  "rpc": ["https://ennothem-proterozoic.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.etm.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ennothem",
    "symbol": "ETMP",
    "decimals": 18
  },
  "infoURL": "https://etm.network",
  "shortName": "etmp",
  "chainId": 48,
  "networkId": 48,
  "icon": {
    "url": "ipfs://QmT7DTqT1V2y42pRpt3sj9ifijfmbtkHN7D2vTfAUAS622",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "etmpscan",
    "url": "https://etmscan.network",
    "icon": "etmp",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ennothem-proterozoic"
};

var c49 = {
  "name": "Ennothem Testnet Pioneer",
  "chain": "ETMP",
  "rpc": ["https://ennothem-testnet-pioneer.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.pioneer.etm.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ennothem",
    "symbol": "ETMP",
    "decimals": 18
  },
  "infoURL": "https://etm.network",
  "shortName": "etmpTest",
  "chainId": 49,
  "networkId": 49,
  "icon": {
    "url": "ipfs://QmT7DTqT1V2y42pRpt3sj9ifijfmbtkHN7D2vTfAUAS622",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "etmp",
    "url": "https://pioneer.etmscan.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "ennothem-testnet-pioneer"
};

var c50 = {
  "name": "XinFin XDC Network",
  "chain": "XDC",
  "rpc": ["https://xinfin-xdc-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://erpc.xinfin.network", "https://rpc.xinfin.network", "https://rpc1.xinfin.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "XinFin",
    "symbol": "XDC",
    "decimals": 18
  },
  "infoURL": "https://xinfin.org",
  "shortName": "xdc",
  "chainId": 50,
  "networkId": 50,
  "icon": {
    "url": "ipfs://QmeRq7pabiJE2n1xU3Y5Mb4TZSX9kQ74x7a3P2Z4PqcMRX",
    "width": 1450,
    "height": 1450,
    "format": "png"
  },
  "explorers": [{
    "name": "xdcscan",
    "url": "https://xdcscan.io",
    "icon": "blocksscan",
    "standard": "EIP3091"
  }, {
    "name": "blocksscan",
    "url": "https://xdc.blocksscan.io",
    "icon": "blocksscan",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "xinfin-xdc-network"
};

var c51 = {
  "name": "XDC Apothem Network",
  "chain": "XDC",
  "rpc": ["https://xdc-apothem-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.apothem.network", "https://erpc.apothem.network"],
  "faucets": ["https://faucet.apothem.network"],
  "nativeCurrency": {
    "name": "XinFin",
    "symbol": "TXDC",
    "decimals": 18
  },
  "infoURL": "https://xinfin.org",
  "shortName": "txdc",
  "chainId": 51,
  "networkId": 51,
  "icon": {
    "url": "ipfs://QmeRq7pabiJE2n1xU3Y5Mb4TZSX9kQ74x7a3P2Z4PqcMRX",
    "width": 1450,
    "height": 1450,
    "format": "png"
  },
  "explorers": [{
    "name": "xdcscan",
    "url": "https://apothem.xinfinscan.com",
    "icon": "blocksscan",
    "standard": "EIP3091"
  }, {
    "name": "blocksscan",
    "url": "https://apothem.blocksscan.io",
    "icon": "blocksscan",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "xdc-apothem-network"
};

var c52 = {
  "name": "CoinEx Smart Chain Mainnet",
  "chain": "CSC",
  "rpc": ["https://coinex-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.coinex.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CoinEx Chain Native Token",
    "symbol": "cet",
    "decimals": 18
  },
  "infoURL": "https://www.coinex.org/",
  "shortName": "cet",
  "chainId": 52,
  "networkId": 52,
  "explorers": [{
    "name": "coinexscan",
    "url": "https://www.coinex.net",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "coinex-smart-chain"
};

var c53 = {
  "name": "CoinEx Smart Chain Testnet",
  "chain": "CSC",
  "rpc": ["https://coinex-smart-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.coinex.net/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CoinEx Chain Test Native Token",
    "symbol": "cett",
    "decimals": 18
  },
  "infoURL": "https://www.coinex.org/",
  "shortName": "tcet",
  "chainId": 53,
  "networkId": 53,
  "explorers": [{
    "name": "coinexscan",
    "url": "https://testnet.coinex.net",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "coinex-smart-chain-testnet"
};

var c54 = {
  "name": "Openpiece Mainnet",
  "chain": "OPENPIECE",
  "icon": {
    "url": "ipfs://QmVTahJkdSH3HPYsJMK2GmqfWZjLyxE7cXy1aHEnHU3vp2",
    "width": 250,
    "height": 250,
    "format": "png"
  },
  "rpc": ["https://openpiece.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.openpiece.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Belly",
    "symbol": "BELLY",
    "decimals": 18
  },
  "infoURL": "https://cryptopiece.online",
  "shortName": "OP",
  "chainId": 54,
  "networkId": 54,
  "explorers": [{
    "name": "Belly Scan",
    "url": "https://bellyscan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "openpiece"
};

var c55 = {
  "name": "Zyx Mainnet",
  "chain": "ZYX",
  "rpc": ["https://zyx.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-1.zyx.network/", "https://rpc-2.zyx.network/", "https://rpc-3.zyx.network/", "https://rpc-4.zyx.network/", "https://rpc-5.zyx.network/", "https://rpc-6.zyx.network/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Zyx",
    "symbol": "ZYX",
    "decimals": 18
  },
  "infoURL": "https://zyx.network/",
  "shortName": "ZYX",
  "chainId": 55,
  "networkId": 55,
  "explorers": [{
    "name": "zyxscan",
    "url": "https://zyxscan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "zyx"
};

var c56 = {
  "name": "Binance Smart Chain Mainnet",
  "chain": "BSC",
  "rpc": ["https://binance.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "wss://bsc-ws-node.nariox.org", "https://bsc.publicnode.com", "https://bsc-dataseed4.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed4.binance.org", "https://bsc-dataseed3.binance.org", "https://bsc-dataseed2.binance.org", "https://bsc-dataseed1.binance.org"],
  "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  "nativeCurrency": {
    "name": "Binance Chain Native Token",
    "symbol": "BNB",
    "decimals": 18
  },
  "infoURL": "https://www.binance.org",
  "shortName": "bnb",
  "chainId": 56,
  "networkId": 56,
  "slip44": 714,
  "explorers": [{
    "name": "bscscan",
    "url": "https://bscscan.com",
    "standard": "EIP3091"
  }],
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "testnet": false,
  "slug": "binance"
};

var c57 = {
  "name": "Syscoin Mainnet",
  "chain": "SYS",
  "rpc": ["https://syscoin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.syscoin.org", "wss://rpc.syscoin.org/wss"],
  "faucets": ["https://faucet.syscoin.org"],
  "nativeCurrency": {
    "name": "Syscoin",
    "symbol": "SYS",
    "decimals": 18
  },
  "infoURL": "https://www.syscoin.org",
  "shortName": "sys",
  "chainId": 57,
  "networkId": 57,
  "explorers": [{
    "name": "Syscoin Block Explorer",
    "url": "https://explorer.syscoin.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "syscoin"
};

var c58 = {
  "name": "Ontology Mainnet",
  "chain": "Ontology",
  "icon": {
    "url": "ipfs://bafkreigmvn6spvbiirtutowpq6jmetevbxoof5plzixjoerbeswy4htfb4",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "rpc": ["https://ontology.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://dappnode1.ont.io:20339", "http://dappnode2.ont.io:20339", "http://dappnode3.ont.io:20339", "http://dappnode4.ont.io:20339", "https://dappnode1.ont.io:10339", "https://dappnode2.ont.io:10339", "https://dappnode3.ont.io:10339", "https://dappnode4.ont.io:10339"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONG",
    "symbol": "ONG",
    "decimals": 18
  },
  "infoURL": "https://ont.io/",
  "shortName": "OntologyMainnet",
  "chainId": 58,
  "networkId": 58,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.ont.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ontology"
};

var c59 = {
  "name": "EOS Mainnet",
  "chain": "EOS",
  "rpc": ["https://eos.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.eosargentina.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EOS",
    "symbol": "EOS",
    "decimals": 18
  },
  "infoURL": "https://eoscommunity.org/",
  "shortName": "EOSMainnet",
  "chainId": 59,
  "networkId": 59,
  "explorers": [{
    "name": "bloks",
    "url": "https://bloks.eosargentina.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "eos"
};

var c60 = {
  "name": "GoChain",
  "chain": "GO",
  "rpc": ["https://gochain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.gochain.io"],
  "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  "nativeCurrency": {
    "name": "GoChain Ether",
    "symbol": "GO",
    "decimals": 18
  },
  "infoURL": "https://gochain.io",
  "shortName": "go",
  "chainId": 60,
  "networkId": 60,
  "slip44": 6060,
  "explorers": [{
    "name": "GoChain Explorer",
    "url": "https://explorer.gochain.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "gochain"
};

var c61 = {
  "name": "Ethereum Classic Mainnet",
  "chain": "ETC",
  "rpc": ["https://ethereum-classic.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://www.ethercluster.com/etc"],
  "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/?"],
  "nativeCurrency": {
    "name": "Ethereum Classic Ether",
    "symbol": "ETC",
    "decimals": 18
  },
  "infoURL": "https://ethereumclassic.org",
  "shortName": "etc",
  "chainId": 61,
  "networkId": 1,
  "slip44": 61,
  "explorers": [{
    "name": "blockscout",
    "url": "https://blockscout.com/etc/mainnet",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "ethereum-classic"
};

var c62 = {
  "name": "Ethereum Classic Testnet Morden",
  "chain": "ETC",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ethereum Classic Testnet Ether",
    "symbol": "TETC",
    "decimals": 18
  },
  "infoURL": "https://ethereumclassic.org",
  "shortName": "tetc",
  "chainId": 62,
  "networkId": 2,
  "testnet": true,
  "slug": "ethereum-classic-testnet-morden"
};

var c63 = {
  "name": "Ethereum Classic Testnet Mordor",
  "chain": "ETC",
  "rpc": ["https://ethereum-classic-testnet-mordor.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://www.ethercluster.com/mordor"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mordor Classic Testnet Ether",
    "symbol": "METC",
    "decimals": 18
  },
  "infoURL": "https://github.com/eth-classic/mordor/",
  "shortName": "metc",
  "chainId": 63,
  "networkId": 7,
  "testnet": true,
  "slug": "ethereum-classic-testnet-mordor"
};

var c64 = {
  "name": "Ellaism",
  "chain": "ELLA",
  "rpc": ["https://ellaism.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://jsonrpc.ellaism.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ellaism Ether",
    "symbol": "ELLA",
    "decimals": 18
  },
  "infoURL": "https://ellaism.org",
  "shortName": "ellaism",
  "chainId": 64,
  "networkId": 64,
  "slip44": 163,
  "testnet": false,
  "slug": "ellaism"
};

var c65 = {
  "name": "OKExChain Testnet",
  "chain": "okexchain",
  "rpc": ["https://okexchain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://exchaintestrpc.okex.org"],
  "faucets": ["https://www.okex.com/drawdex"],
  "nativeCurrency": {
    "name": "OKExChain Global Utility Token in testnet",
    "symbol": "OKT",
    "decimals": 18
  },
  "infoURL": "https://www.okex.com/okexchain",
  "shortName": "tokt",
  "chainId": 65,
  "networkId": 65,
  "explorers": [{
    "name": "OKLink",
    "url": "https://www.oklink.com/okexchain-test",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "okexchain-testnet"
};

var c66 = {
  "name": "OKXChain Mainnet",
  "chain": "okxchain",
  "rpc": ["https://okxchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://exchainrpc.okex.org", "https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff"],
  "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/?"],
  "nativeCurrency": {
    "name": "OKXChain Global Utility Token",
    "symbol": "OKT",
    "decimals": 18
  },
  "infoURL": "https://www.okex.com/okc",
  "shortName": "okt",
  "chainId": 66,
  "networkId": 66,
  "explorers": [{
    "name": "OKLink",
    "url": "https://www.oklink.com/en/okc",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "okxchain"
};

var c67 = {
  "name": "DBChain Testnet",
  "chain": "DBM",
  "rpc": ["https://dbchain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://test-rpc.dbmbp.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "DBChain Testnet",
    "symbol": "DBM",
    "decimals": 18
  },
  "infoURL": "http://test.dbmbp.com",
  "shortName": "dbm",
  "chainId": 67,
  "networkId": 67,
  "testnet": true,
  "slug": "dbchain-testnet"
};

var c68 = {
  "name": "SoterOne Mainnet",
  "chain": "SOTER",
  "rpc": ["https://soterone.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.soter.one"],
  "faucets": [],
  "nativeCurrency": {
    "name": "SoterOne Mainnet Ether",
    "symbol": "SOTER",
    "decimals": 18
  },
  "infoURL": "https://www.soterone.com",
  "shortName": "SO1",
  "chainId": 68,
  "networkId": 68,
  "testnet": false,
  "slug": "soterone"
};

var c69 = {
  "name": "Optimism Kovan",
  "title": "Optimism Testnet Kovan",
  "chain": "ETH",
  "rpc": ["https://optimism-kovan.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://kovan.optimism.io/"],
  "faucets": ["http://fauceth.komputing.org?chain=69&address=${ADDRESS}"],
  "nativeCurrency": {
    "name": "Kovan Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "explorers": [{
    "name": "etherscan",
    "url": "https://kovan-optimistic.etherscan.io",
    "standard": "EIP3091"
  }],
  "infoURL": "https://optimism.io",
  "shortName": "okov",
  "chainId": 69,
  "networkId": 69,
  "testnet": true,
  "slug": "optimism-kovan"
};

var c70 = {
  "name": "Hoo Smart Chain",
  "chain": "HSC",
  "rpc": ["https://hoo-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://http-mainnet.hoosmartchain.com", "https://http-mainnet2.hoosmartchain.com", "wss://ws-mainnet.hoosmartchain.com", "wss://ws-mainnet2.hoosmartchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Hoo Smart Chain Native Token",
    "symbol": "HOO",
    "decimals": 18
  },
  "infoURL": "https://www.hoosmartchain.com",
  "shortName": "hsc",
  "chainId": 70,
  "networkId": 70,
  "slip44": 1170,
  "explorers": [{
    "name": "hooscan",
    "url": "https://www.hooscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "hoo-smart-chain"
};

var c71 = {
  "name": "Conflux eSpace (Testnet)",
  "chain": "Conflux",
  "rpc": ["https://conflux-espace-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evmtestnet.confluxrpc.com"],
  "faucets": ["https://faucet.confluxnetwork.org"],
  "nativeCurrency": {
    "name": "CFX",
    "symbol": "CFX",
    "decimals": 18
  },
  "infoURL": "https://confluxnetwork.org",
  "shortName": "cfxtest",
  "chainId": 71,
  "networkId": 71,
  "icon": {
    "url": "ipfs://bafkreifj7n24u2dslfijfihwqvpdeigt5aj3k3sxv6s35lv75sxsfr3ojy",
    "width": 460,
    "height": 576,
    "format": "png"
  },
  "explorers": [{
    "name": "Conflux Scan",
    "url": "https://evmtestnet.confluxscan.net",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "conflux-espace-testnet"
};

var c72 = {
  "name": "DxChain Testnet",
  "chain": "DxChain",
  "rpc": ["https://dxchain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-http.dxchain.com"],
  "faucets": ["https://faucet.dxscan.io"],
  "nativeCurrency": {
    "name": "DxChain Testnet",
    "symbol": "DX",
    "decimals": 18
  },
  "infoURL": "https://testnet.dxscan.io/",
  "shortName": "dxc",
  "chainId": 72,
  "networkId": 72,
  "testnet": true,
  "slug": "dxchain-testnet"
};

var c73 = {
  "name": "FNCY",
  "chain": "FNCY",
  "rpc": ["https://fncy.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://fncy-seed1.fncy.world"],
  "faucets": ["https://faucet-testnet.fncy.world"],
  "nativeCurrency": {
    "name": "FNCY",
    "symbol": "FNCY",
    "decimals": 18
  },
  "infoURL": "https://fncyscan.fncy.world",
  "shortName": "FNCY",
  "chainId": 73,
  "networkId": 73,
  "icon": {
    "url": "ipfs://QmfXCh6UnaEHn3Evz7RFJ3p2ggJBRm9hunDHegeoquGuhD",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "explorers": [{
    "name": "fncy scan",
    "url": "https://fncyscan.fncy.world",
    "icon": "fncy",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "fncy"
};

var c74 = {
  "name": "IDChain Mainnet",
  "chain": "IDChain",
  "rpc": ["https://idchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://idchain.one/rpc/", "wss://idchain.one/ws/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EIDI",
    "symbol": "EIDI",
    "decimals": 18
  },
  "infoURL": "https://idchain.one/begin/",
  "shortName": "idchain",
  "chainId": 74,
  "networkId": 74,
  "icon": {
    "url": "ipfs://QmZVwsY6HPXScKqZCA9SWNrr4jrQAHkPhVhMWi6Fj1DsrJ",
    "width": 162,
    "height": 129,
    "format": "png"
  },
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.idchain.one",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "idchain"
};

var c75 = {
  "name": "Decimal Smart Chain Mainnet",
  "chain": "DSC",
  "rpc": ["https://decimal-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node.decimalchain.com/web3"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Decimal",
    "symbol": "DEL",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://decimalchain.com",
  "shortName": "DSC",
  "chainId": 75,
  "networkId": 75,
  "icon": {
    "url": "ipfs://QmSgzwKnJJjys3Uq2aVVdwJ3NffLj3CXMVCph9uByTBegc",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "explorers": [{
    "name": "DSC Explorer Mainnet",
    "url": "https://explorer.decimalchain.com",
    "icon": "dsc",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "decimal-smart-chain"
};

var c76 = {
  "name": "Mix",
  "chain": "MIX",
  "rpc": ["https://mix.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc2.mix-blockchain.org:8647"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mix Ether",
    "symbol": "MIX",
    "decimals": 18
  },
  "infoURL": "https://mix-blockchain.org",
  "shortName": "mix",
  "chainId": 76,
  "networkId": 76,
  "slip44": 76,
  "testnet": false,
  "slug": "mix"
};

var c77 = {
  "name": "POA Network Sokol",
  "chain": "POA",
  "rpc": ["https://poa-network-sokol.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sokol.poa.network", "wss://sokol.poa.network/wss", "ws://sokol.poa.network:8546"],
  "faucets": ["https://faucet.poa.network"],
  "nativeCurrency": {
    "name": "POA Sokol Ether",
    "symbol": "SPOA",
    "decimals": 18
  },
  "infoURL": "https://poa.network",
  "shortName": "spoa",
  "chainId": 77,
  "networkId": 77,
  "explorers": [{
    "name": "blockscout",
    "url": "https://blockscout.com/poa/sokol",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "poa-network-sokol"
};

var c78 = {
  "name": "PrimusChain mainnet",
  "chain": "PC",
  "rpc": ["https://primuschain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://ethnode.primusmoney.com/mainnet"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Primus Ether",
    "symbol": "PETH",
    "decimals": 18
  },
  "infoURL": "https://primusmoney.com",
  "shortName": "primuschain",
  "chainId": 78,
  "networkId": 78,
  "testnet": false,
  "slug": "primuschain"
};

var c79 = {
  "name": "Zenith Mainnet",
  "chain": "Zenith",
  "rpc": ["https://zenith.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://dataserver-us-1.zenithchain.co/", "https://dataserver-asia-3.zenithchain.co/", "https://dataserver-asia-4.zenithchain.co/", "https://dataserver-asia-2.zenithchain.co/", "https://dataserver-asia-5.zenithchain.co/", "https://dataserver-asia-6.zenithchain.co/", "https://dataserver-asia-7.zenithchain.co/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZENITH",
    "symbol": "ZENITH",
    "decimals": 18
  },
  "infoURL": "https://www.zenithchain.co/",
  "chainId": 79,
  "networkId": 79,
  "shortName": "zenith",
  "explorers": [{
    "name": "zenith scan",
    "url": "https://scan.zenithchain.co",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "zenith"
};

var c80 = {
  "name": "GeneChain",
  "chain": "GeneChain",
  "rpc": ["https://genechain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.genechain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "RNA",
    "symbol": "RNA",
    "decimals": 18
  },
  "infoURL": "https://scan.genechain.io/",
  "shortName": "GeneChain",
  "chainId": 80,
  "networkId": 80,
  "explorers": [{
    "name": "GeneChain Scan",
    "url": "https://scan.genechain.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "genechain"
};

var c81 = {
  "name": "Zenith Testnet (Vilnius)",
  "chain": "Zenith",
  "rpc": ["https://zenith-testnet-vilnius.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://vilnius.zenithchain.co/http"],
  "faucets": ["https://faucet.zenithchain.co/"],
  "nativeCurrency": {
    "name": "Vilnius",
    "symbol": "VIL",
    "decimals": 18
  },
  "infoURL": "https://www.zenithchain.co/",
  "chainId": 81,
  "networkId": 81,
  "shortName": "VIL",
  "explorers": [{
    "name": "vilnius scan",
    "url": "https://vilnius.scan.zenithchain.co",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "zenith-testnet-vilnius"
};

var c82 = {
  "name": "Meter Mainnet",
  "chain": "METER",
  "rpc": ["https://meter.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.meter.io"],
  "faucets": ["https://faucet.meter.io"],
  "nativeCurrency": {
    "name": "Meter",
    "symbol": "MTR",
    "decimals": 18
  },
  "infoURL": "https://www.meter.io",
  "shortName": "Meter",
  "chainId": 82,
  "networkId": 82,
  "explorers": [{
    "name": "Meter Mainnet Scan",
    "url": "https://scan.meter.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "meter"
};

var c83 = {
  "name": "Meter Testnet",
  "chain": "METER Testnet",
  "rpc": ["https://meter-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpctest.meter.io"],
  "faucets": ["https://faucet-warringstakes.meter.io"],
  "nativeCurrency": {
    "name": "Meter",
    "symbol": "MTR",
    "decimals": 18
  },
  "infoURL": "https://www.meter.io",
  "shortName": "MeterTest",
  "chainId": 83,
  "networkId": 83,
  "explorers": [{
    "name": "Meter Testnet Scan",
    "url": "https://scan-warringstakes.meter.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "meter-testnet"
};

var c85 = {
  "name": "GateChain Testnet",
  "chainId": 85,
  "shortName": "gttest",
  "chain": "GTTEST",
  "networkId": 85,
  "nativeCurrency": {
    "name": "GateToken",
    "symbol": "GT",
    "decimals": 18
  },
  "rpc": ["https://gatechain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.gatenode.cc"],
  "faucets": ["https://www.gatescan.org/testnet/faucet"],
  "explorers": [{
    "name": "GateScan",
    "url": "https://www.gatescan.org/testnet",
    "standard": "EIP3091"
  }],
  "infoURL": "https://www.gatechain.io",
  "testnet": true,
  "slug": "gatechain-testnet"
};

var c86 = {
  "name": "GateChain Mainnet",
  "chainId": 86,
  "shortName": "gt",
  "chain": "GT",
  "networkId": 86,
  "nativeCurrency": {
    "name": "GateToken",
    "symbol": "GT",
    "decimals": 18
  },
  "rpc": ["https://gatechain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm.gatenode.cc"],
  "faucets": ["https://www.gatescan.org/faucet"],
  "explorers": [{
    "name": "GateScan",
    "url": "https://www.gatescan.org",
    "standard": "EIP3091"
  }],
  "infoURL": "https://www.gatechain.io",
  "testnet": false,
  "slug": "gatechain"
};

var c87 = {
  "name": "Nova Network",
  "chain": "NNW",
  "icon": {
    "url": "ipfs://QmTTamJ55YGQwMboq4aqf3JjTEy5WDtjo4GBRQ5VdsWA6U",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://nova-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://connect.novanetwork.io", "https://0x57.redjackstudio.com", "https://rpc.novanetwork.io:9070"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Supernova",
    "symbol": "SNT",
    "decimals": 18
  },
  "infoURL": "https://novanetwork.io",
  "shortName": "nnw",
  "chainId": 87,
  "networkId": 87,
  "explorers": [{
    "name": "novanetwork",
    "url": "https://explorer.novanetwork.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "nova-network"
};

var c88 = {
  "name": "TomoChain",
  "chain": "TOMO",
  "rpc": ["https://tomochain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.tomochain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TomoChain",
    "symbol": "TOMO",
    "decimals": 18
  },
  "infoURL": "https://tomochain.com",
  "shortName": "tomo",
  "chainId": 88,
  "networkId": 88,
  "slip44": 889,
  "testnet": false,
  "slug": "tomochain"
};

var c89 = {
  "name": "TomoChain Testnet",
  "chain": "TOMO",
  "rpc": ["https://tomochain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.tomochain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TomoChain",
    "symbol": "TOMO",
    "decimals": 18
  },
  "infoURL": "https://tomochain.com",
  "shortName": "tomot",
  "chainId": 89,
  "networkId": 89,
  "slip44": 889,
  "testnet": true,
  "slug": "tomochain-testnet"
};

var c90 = {
  "name": "Garizon Stage0",
  "chain": "GAR",
  "icon": {
    "url": "ipfs://QmW3WRyuLZ95K8hvV2QN6rP5yWY98sSzWyVUxD2eUjXGrc",
    "width": 1024,
    "height": 613,
    "format": "png"
  },
  "rpc": ["https://garizon-stage0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://s0.garizon.net/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
  },
  "infoURL": "https://garizon.com",
  "shortName": "gar-s0",
  "chainId": 90,
  "networkId": 90,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.garizon.com",
    "icon": "garizon",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "garizon-stage0"
};

var c91 = {
  "name": "Garizon Stage1",
  "chain": "GAR",
  "icon": {
    "url": "ipfs://QmW3WRyuLZ95K8hvV2QN6rP5yWY98sSzWyVUxD2eUjXGrc",
    "width": 1024,
    "height": 613,
    "format": "png"
  },
  "rpc": ["https://garizon-stage1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://s1.garizon.net/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
  },
  "infoURL": "https://garizon.com",
  "shortName": "gar-s1",
  "chainId": 91,
  "networkId": 91,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.garizon.com",
    "icon": "garizon",
    "standard": "EIP3091"
  }],
  "parent": {
    "chain": "eip155-90",
    "type": "shard"
  },
  "testnet": false,
  "slug": "garizon-stage1"
};

var c92 = {
  "name": "Garizon Stage2",
  "chain": "GAR",
  "icon": {
    "url": "ipfs://QmW3WRyuLZ95K8hvV2QN6rP5yWY98sSzWyVUxD2eUjXGrc",
    "width": 1024,
    "height": 613,
    "format": "png"
  },
  "rpc": ["https://garizon-stage2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://s2.garizon.net/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
  },
  "infoURL": "https://garizon.com",
  "shortName": "gar-s2",
  "chainId": 92,
  "networkId": 92,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.garizon.com",
    "icon": "garizon",
    "standard": "EIP3091"
  }],
  "parent": {
    "chain": "eip155-90",
    "type": "shard"
  },
  "testnet": false,
  "slug": "garizon-stage2"
};

var c93 = {
  "name": "Garizon Stage3",
  "chain": "GAR",
  "icon": {
    "url": "ipfs://QmW3WRyuLZ95K8hvV2QN6rP5yWY98sSzWyVUxD2eUjXGrc",
    "width": 1024,
    "height": 613,
    "format": "png"
  },
  "rpc": ["https://garizon-stage3.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://s3.garizon.net/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
  },
  "infoURL": "https://garizon.com",
  "shortName": "gar-s3",
  "chainId": 93,
  "networkId": 93,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.garizon.com",
    "icon": "garizon",
    "standard": "EIP3091"
  }],
  "parent": {
    "chain": "eip155-90",
    "type": "shard"
  },
  "testnet": false,
  "slug": "garizon-stage3"
};

var c95 = {
  "name": "CryptoKylin Testnet",
  "chain": "EOS",
  "rpc": ["https://cryptokylin-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://kylin.eosargentina.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EOS",
    "symbol": "EOS",
    "decimals": 18
  },
  "infoURL": "https://www.cryptokylin.io/",
  "shortName": "KylinTestnet",
  "chainId": 95,
  "networkId": 95,
  "explorers": [{
    "name": "eosq",
    "url": "https://kylin.eosargentina.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "cryptokylin-testnet"
};

var c96 = {
  "name": "Bitkub Chain",
  "chain": "BKC",
  "icon": {
    "url": "ipfs://QmYFYwyquipwc9gURQGcEd4iAq7pq15chQrJ3zJJe9HuFT",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "rpc": ["https://bitkub-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.bitkubchain.io", "wss://wss.bitkubchain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitkub Coin",
    "symbol": "KUB",
    "decimals": 18
  },
  "infoURL": "https://www.bitkubchain.com/",
  "shortName": "bkc",
  "chainId": 96,
  "networkId": 96,
  "explorers": [{
    "name": "Bitkub Chain Explorer",
    "url": "https://bkcscan.com",
    "standard": "none",
    "icon": "bkc"
  }],
  "redFlags": ["reusedChainId"],
  "testnet": false,
  "slug": "bitkub-chain"
};

var c97 = {
  "name": "Binance Smart Chain Testnet",
  "chain": "BSC",
  "rpc": ["https://binance-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://data-seed-prebsc-2-s3.binance.org:8545", "https://data-seed-prebsc-1-s3.binance.org:8545", "https://data-seed-prebsc-2-s2.binance.org:8545", "https://data-seed-prebsc-1-s2.binance.org:8545", "https://data-seed-prebsc-2-s1.binance.org:8545", "https://data-seed-prebsc-1-s1.binance.org:8545"],
  "faucets": ["https://testnet.binance.org/faucet-smart"],
  "nativeCurrency": {
    "name": "Binance Chain Native Token",
    "symbol": "tBNB",
    "decimals": 18
  },
  "infoURL": "https://testnet.binance.org/",
  "shortName": "bnbt",
  "chainId": 97,
  "networkId": 97,
  "explorers": [{
    "name": "bscscan-testnet",
    "url": "https://testnet.bscscan.com",
    "standard": "EIP3091"
  }],
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "testnet": true,
  "slug": "binance-testnet"
};

var c99 = {
  "name": "POA Network Core",
  "chain": "POA",
  "rpc": ["https://poa-network-core.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://core.poa.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "POA Network Core Ether",
    "symbol": "POA",
    "decimals": 18
  },
  "infoURL": "https://poa.network",
  "shortName": "poa",
  "chainId": 99,
  "networkId": 99,
  "slip44": 178,
  "explorers": [{
    "name": "blockscout",
    "url": "https://blockscout.com/poa/core",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "poa-network-core"
};

var c100 = {
  "name": "Gnosis",
  "chain": "GNO",
  "icon": {
    "url": "ipfs://bafybeidk4swpgdyqmpz6shd5onvpaujvwiwthrhypufnwr6xh3dausz2dm",
    "width": 1800,
    "height": 1800,
    "format": "png"
  },
  "rpc": ["https://gnosis.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.gnosischain.com", "https://rpc.ankr.com/gnosis", "https://gnosischain-rpc.gateway.pokt.network", "https://gnosis-mainnet.public.blastapi.io", "wss://rpc.gnosischain.com/wss"],
  "faucets": ["https://gnosisfaucet.com", "https://faucet.gimlu.com/gnosis", "https://stakely.io/faucet/gnosis-chain-xdai", "https://faucet.prussia.dev/xdai"],
  "nativeCurrency": {
    "name": "xDAI",
    "symbol": "xDAI",
    "decimals": 18
  },
  "infoURL": "https://docs.gnosischain.com",
  "shortName": "gno",
  "chainId": 100,
  "networkId": 100,
  "slip44": 700,
  "explorers": [{
    "name": "gnosisscan",
    "url": "https://gnosisscan.io",
    "standard": "EIP3091"
  }, {
    "name": "blockscout",
    "url": "https://blockscout.com/xdai/mainnet",
    "icon": "blockscout",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "gnosis"
};

var c101 = {
  "name": "EtherInc",
  "chain": "ETI",
  "rpc": ["https://etherinc.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.einc.io/jsonrpc/mainnet"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EtherInc Ether",
    "symbol": "ETI",
    "decimals": 18
  },
  "infoURL": "https://einc.io",
  "shortName": "eti",
  "chainId": 101,
  "networkId": 1,
  "slip44": 464,
  "testnet": false,
  "slug": "etherinc"
};

var c102 = {
  "name": "Web3Games Testnet",
  "chain": "Web3Games",
  "icon": {
    "url": "ipfs://QmUc57w3UTHiWapNW9oQb1dP57ymtdemTTbpvGkjVHBRCo",
    "width": 192,
    "height": 192,
    "format": "png"
  },
  "rpc": ["https://web3games-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc-0.web3games.org/evm", "https://testnet-rpc-1.web3games.org/evm", "https://testnet-rpc-2.web3games.org/evm"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Web3Games",
    "symbol": "W3G",
    "decimals": 18
  },
  "infoURL": "https://web3games.org/",
  "shortName": "tw3g",
  "chainId": 102,
  "networkId": 102,
  "testnet": true,
  "slug": "web3games-testnet"
};

var c104 = {
  "name": "Kaiba Lightning Chain Testnet",
  "chain": "tKLC",
  "rpc": ["https://kaiba-lightning-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://klc.live/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kaiba Testnet Token",
    "symbol": "tKAIBA",
    "decimals": 18
  },
  "infoURL": "https://kaibadefi.com",
  "shortName": "tklc",
  "chainId": 104,
  "networkId": 104,
  "icon": {
    "url": "ipfs://bafybeihbsw3ky7yf6llpww6fabo4dicotcgwjpefscoxrppstjx25dvtea",
    "width": 932,
    "height": 932,
    "format": "png"
  },
  "explorers": [{
    "name": "kaibascan",
    "url": "https://kaibascan.io",
    "icon": "kaibascan",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "kaiba-lightning-chain-testnet"
};

var c105 = {
  "name": "Web3Games Devnet",
  "chain": "Web3Games",
  "icon": {
    "url": "ipfs://QmUc57w3UTHiWapNW9oQb1dP57ymtdemTTbpvGkjVHBRCo",
    "width": 192,
    "height": 192,
    "format": "png"
  },
  "rpc": ["https://web3games-devnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet.web3games.org/evm"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Web3Games",
    "symbol": "W3G",
    "decimals": 18
  },
  "infoURL": "https://web3games.org/",
  "shortName": "dw3g",
  "chainId": 105,
  "networkId": 105,
  "explorers": [{
    "name": "Web3Games Explorer",
    "url": "https://explorer-devnet.web3games.org",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "web3games-devnet"
};

var c106 = {
  "name": "Velas EVM Mainnet",
  "chain": "Velas",
  "icon": {
    "url": "ipfs://QmNXiCXJxEeBd7ZYGYjPSMTSdbDd2nfodLC677gUfk9ku5",
    "width": 924,
    "height": 800,
    "format": "png"
  },
  "rpc": ["https://velas-evm.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evmexplorer.velas.com/rpc", "https://explorer.velas.com/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Velas",
    "symbol": "VLX",
    "decimals": 18
  },
  "infoURL": "https://velas.com",
  "shortName": "vlx",
  "chainId": 106,
  "networkId": 106,
  "explorers": [{
    "name": "Velas Explorer",
    "url": "https://evmexplorer.velas.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "velas-evm"
};

var c107 = {
  "name": "Nebula Testnet",
  "chain": "NTN",
  "icon": {
    "url": "ipfs://QmeFaJtQqTKKuXQR7ysS53bLFPasFBcZw445cvYJ2HGeTo",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://nebula-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.rpc.novanetwork.io:9070"],
  "faucets": ["https://faucet.novanetwork.io"],
  "nativeCurrency": {
    "name": "Nebula X",
    "symbol": "NBX",
    "decimals": 18
  },
  "infoURL": "https://novanetwork.io",
  "shortName": "ntn",
  "chainId": 107,
  "networkId": 107,
  "explorers": [{
    "name": "nebulatestnet",
    "url": "https://explorer.novanetwork.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "nebula-testnet"
};

var c108 = {
  "name": "ThunderCore Mainnet",
  "chain": "TT",
  "rpc": ["https://thundercore.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.thundercore.com", "https://mainnet-rpc.thundertoken.net", "https://mainnet-rpc.thundercore.io"],
  "faucets": ["https://faucet.thundercore.com"],
  "nativeCurrency": {
    "name": "ThunderCore Token",
    "symbol": "TT",
    "decimals": 18
  },
  "infoURL": "https://thundercore.com",
  "shortName": "TT",
  "chainId": 108,
  "networkId": 108,
  "slip44": 1001,
  "explorers": [{
    "name": "thundercore-viewblock",
    "url": "https://viewblock.io/thundercore",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "thundercore"
};

var c110 = {
  "name": "Proton Testnet",
  "chain": "XPR",
  "rpc": ["https://proton-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://protontestnet.greymass.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Proton",
    "symbol": "XPR",
    "decimals": 4
  },
  "infoURL": "https://protonchain.com",
  "shortName": "xpr",
  "chainId": 110,
  "networkId": 110,
  "testnet": true,
  "slug": "proton-testnet"
};

var c111 = {
  "name": "EtherLite Chain",
  "chain": "ETL",
  "rpc": ["https://etherlite-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.etherlite.org"],
  "faucets": ["https://etherlite.org/faucets"],
  "nativeCurrency": {
    "name": "EtherLite",
    "symbol": "ETL",
    "decimals": 18
  },
  "infoURL": "https://etherlite.org",
  "shortName": "ETL",
  "chainId": 111,
  "networkId": 111,
  "icon": {
    "url": "ipfs://QmbNAai1KnBnw4SPQKgrf6vBddifPCQTg2PePry1bmmZYy",
    "width": 88,
    "height": 88,
    "format": "png"
  },
  "testnet": false,
  "slug": "etherlite-chain"
};

var c113 = {
  "name": "Dehvo",
  "chain": "Dehvo",
  "rpc": ["https://dehvo.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://connect.dehvo.com", "https://rpc.dehvo.com", "https://rpc1.dehvo.com", "https://rpc2.dehvo.com"],
  "faucets": ["https://buy.dehvo.com"],
  "nativeCurrency": {
    "name": "Dehvo",
    "symbol": "Deh",
    "decimals": 18
  },
  "infoURL": "https://dehvo.com",
  "shortName": "deh",
  "chainId": 113,
  "networkId": 113,
  "slip44": 714,
  "explorers": [{
    "name": "Dehvo Explorer",
    "url": "https://explorer.dehvo.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "dehvo"
};

var c114 = {
  "name": "Flare Testnet Coston2",
  "chain": "FLR",
  "icon": {
    "url": "ipfs://QmZhAYyazEBZSHWNQb9uCkNPq2MNTLoW3mjwiD3955hUjw",
    "width": 382,
    "height": 382,
    "format": "png"
  },
  "rpc": ["https://flare-testnet-coston2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://coston2-api.flare.network/ext/bc/C/rpc"],
  "faucets": ["https://coston2-faucet.towolabs.com"],
  "nativeCurrency": {
    "name": "Coston2 Flare",
    "symbol": "C2FLR",
    "decimals": 18
  },
  "infoURL": "https://flare.xyz",
  "shortName": "c2flr",
  "chainId": 114,
  "networkId": 114,
  "explorers": [{
    "name": "blockscout",
    "url": "https://coston2-explorer.flare.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "flare-testnet-coston2"
};

var c115 = {
  "name": "DeBank Testnet",
  "chain": "DeBank",
  "rpc": [],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmW9pBps8WHRRWmyXhjLZrjZJUe8F48hUu7z98bu2RVsjN",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://debank.com",
  "shortName": "debank-testnet",
  "chainId": 115,
  "networkId": 115,
  "explorers": [],
  "testnet": true,
  "slug": "debank-testnet"
};

var c116 = {
  "name": "DeBank Mainnet",
  "chain": "DeBank",
  "rpc": [],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmW9pBps8WHRRWmyXhjLZrjZJUe8F48hUu7z98bu2RVsjN",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://debank.com",
  "shortName": "debank-mainnet",
  "chainId": 116,
  "networkId": 116,
  "explorers": [],
  "testnet": false,
  "slug": "debank"
};

var c118 = {
  "name": "Arcology Testnet",
  "chain": "Arcology",
  "icon": {
    "url": "ipfs://QmRD7itMvaZutfBjyA7V9xkMGDtsZiJSagPwd3ijqka8kE",
    "width": 288,
    "height": 288,
    "format": "png"
  },
  "rpc": ["https://arcology-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.arcology.network/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Arcology Coin",
    "symbol": "Acol",
    "decimals": 18
  },
  "infoURL": "https://arcology.network/",
  "shortName": "arcology",
  "chainId": 118,
  "networkId": 118,
  "explorers": [{
    "name": "arcology",
    "url": "https://testnet.arcology.network/explorer",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "arcology-testnet"
};

var c119 = {
  "name": "ENULS Mainnet",
  "chain": "ENULS",
  "rpc": ["https://enuls.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evmapi.nuls.io", "https://evmapi2.nuls.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "NULS",
    "symbol": "NULS",
    "decimals": 18
  },
  "infoURL": "https://nuls.io",
  "shortName": "enuls",
  "chainId": 119,
  "networkId": 119,
  "icon": {
    "url": "ipfs://QmYz8LK5WkUN8UwqKfWUjnyLuYqQZWihT7J766YXft4TSy",
    "width": 26,
    "height": 41,
    "format": "svg"
  },
  "explorers": [{
    "name": "enulsscan",
    "url": "https://evmscan.nuls.io",
    "icon": "enuls",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "enuls"
};

var c120 = {
  "name": "ENULS Testnet",
  "chain": "ENULS",
  "rpc": ["https://enuls-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://beta.evmapi.nuls.io", "https://beta.evmapi2.nuls.io"],
  "faucets": ["http://faucet.nuls.io"],
  "nativeCurrency": {
    "name": "NULS",
    "symbol": "NULS",
    "decimals": 18
  },
  "infoURL": "https://nuls.io",
  "shortName": "enulst",
  "chainId": 120,
  "networkId": 120,
  "icon": {
    "url": "ipfs://QmYz8LK5WkUN8UwqKfWUjnyLuYqQZWihT7J766YXft4TSy",
    "width": 26,
    "height": 41,
    "format": "svg"
  },
  "explorers": [{
    "name": "enulsscan",
    "url": "https://beta.evmscan.nuls.io",
    "icon": "enuls",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "enuls-testnet"
};

var c121 = {
  "name": "Realchain Mainnet",
  "chain": "REAL",
  "rpc": ["https://realchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rcl-dataseed1.rclsidechain.com", "https://rcl-dataseed2.rclsidechain.com", "https://rcl-dataseed3.rclsidechain.com", "https://rcl-dataseed4.rclsidechain.com", "wss://rcl-dataseed1.rclsidechain.com/v1/", "wss://rcl-dataseed2.rclsidechain.com/v1/", "wss://rcl-dataseed3.rclsidechain.com/v1/", "wss://rcl-dataseed4.rclsidechain.com/v1/"],
  "faucets": ["https://faucet.rclsidechain.com"],
  "nativeCurrency": {
    "name": "Realchain",
    "symbol": "REAL",
    "decimals": 18
  },
  "infoURL": "https://www.rclsidechain.com/",
  "shortName": "REAL",
  "chainId": 121,
  "networkId": 121,
  "slip44": 714,
  "explorers": [{
    "name": "realscan",
    "url": "https://rclscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "realchain"
};

var c122 = {
  "name": "Fuse Mainnet",
  "chain": "FUSE",
  "rpc": ["https://fuse.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.fuse.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Fuse",
    "symbol": "FUSE",
    "decimals": 18
  },
  "infoURL": "https://fuse.io/",
  "shortName": "fuse",
  "chainId": 122,
  "networkId": 122,
  "icon": {
    "url": "ipfs://QmQg8aqyeaMfHvjzFDtZkb8dUNRYhFezPp8UYVc1HnLpRW/green.png",
    "format": "png",
    "width": 512,
    "height": 512
  },
  "testnet": false,
  "slug": "fuse"
};

var c123 = {
  "name": "Fuse Sparknet",
  "chain": "fuse",
  "rpc": ["https://fuse-sparknet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.fusespark.io"],
  "faucets": ["https://get.fusespark.io"],
  "nativeCurrency": {
    "name": "Spark",
    "symbol": "SPARK",
    "decimals": 18
  },
  "infoURL": "https://docs.fuse.io/general/fuse-network-blockchain/fuse-testnet",
  "shortName": "spark",
  "chainId": 123,
  "networkId": 123,
  "testnet": true,
  "icon": {
    "url": "ipfs://QmQg8aqyeaMfHvjzFDtZkb8dUNRYhFezPp8UYVc1HnLpRW/green.png",
    "format": "png",
    "width": 512,
    "height": 512
  },
  "slug": "fuse-sparknet"
};

var c124 = {
  "name": "Decentralized Web Mainnet",
  "shortName": "dwu",
  "chain": "DWU",
  "chainId": 124,
  "networkId": 124,
  "rpc": ["https://decentralized-web.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://decentralized-web.tech/dw_rpc.php"],
  "faucets": [],
  "infoURL": "https://decentralized-web.tech/dw_chain.php",
  "nativeCurrency": {
    "name": "Decentralized Web Utility",
    "symbol": "DWU",
    "decimals": 18
  },
  "testnet": false,
  "slug": "decentralized-web"
};

var c125 = {
  "name": "OYchain Testnet",
  "chain": "OYchain",
  "rpc": ["https://oychain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.oychain.io"],
  "faucets": ["https://faucet.oychain.io"],
  "nativeCurrency": {
    "name": "OYchain Token",
    "symbol": "OY",
    "decimals": 18
  },
  "infoURL": "https://www.oychain.io",
  "shortName": "OYchainTestnet",
  "chainId": 125,
  "networkId": 125,
  "slip44": 125,
  "explorers": [{
    "name": "OYchain Testnet Explorer",
    "url": "https://explorer.testnet.oychain.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "oychain-testnet"
};

var c126 = {
  "name": "OYchain Mainnet",
  "chain": "OYchain",
  "icon": {
    "url": "ipfs://QmXW5T2MaGHznXUmQEXoyJjcdmX7dhLbj5fnqvZZKqeKzA",
    "width": 677,
    "height": 237,
    "format": "png"
  },
  "rpc": ["https://oychain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.mainnet.oychain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OYchain Token",
    "symbol": "OY",
    "decimals": 18
  },
  "infoURL": "https://www.oychain.io",
  "shortName": "OYchainMainnet",
  "chainId": 126,
  "networkId": 126,
  "slip44": 126,
  "explorers": [{
    "name": "OYchain Mainnet Explorer",
    "url": "https://explorer.oychain.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "oychain"
};

var c127 = {
  "name": "Factory 127 Mainnet",
  "chain": "FETH",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Factory 127 Token",
    "symbol": "FETH",
    "decimals": 18
  },
  "infoURL": "https://www.factory127.com",
  "shortName": "feth",
  "chainId": 127,
  "networkId": 127,
  "slip44": 127,
  "testnet": false,
  "slug": "factory-127"
};

var c128 = {
  "name": "Huobi ECO Chain Mainnet",
  "chain": "Heco",
  "rpc": ["https://huobi-eco-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://http-mainnet.hecochain.com", "wss://ws-mainnet.hecochain.com"],
  "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  "nativeCurrency": {
    "name": "Huobi ECO Chain Native Token",
    "symbol": "HT",
    "decimals": 18
  },
  "infoURL": "https://www.hecochain.com",
  "shortName": "heco",
  "chainId": 128,
  "networkId": 128,
  "slip44": 1010,
  "explorers": [{
    "name": "hecoinfo",
    "url": "https://hecoinfo.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "huobi-eco-chain"
};

var c134 = {
  "name": "iExec Sidechain",
  "chain": "Bellecour",
  "icon": {
    "url": "ipfs://QmUYKpVmZL4aS3TEZLG5wbrRJ6exxLiwm1rejfGYYNicfb",
    "width": 155,
    "height": 155,
    "format": "png"
  },
  "rpc": ["https://iexec-sidechain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bellecour.iex.ec"],
  "faucets": [],
  "nativeCurrency": {
    "name": "xRLC",
    "symbol": "xRLC",
    "decimals": 18
  },
  "infoURL": "https://iex.ec",
  "shortName": "rlc",
  "chainId": 134,
  "networkId": 134,
  "explorers": [{
    "name": "blockscout",
    "url": "https://blockscout.bellecour.iex.ec",
    "icon": "blockscout",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "iexec-sidechain"
};

var c135 = {
  "name": "Alyx Chain Testnet",
  "chain": "Alyx Chain Testnet",
  "rpc": ["https://alyx-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.alyxchain.com"],
  "faucets": ["https://faucet.alyxchain.com"],
  "nativeCurrency": {
    "name": "Alyx Testnet Native Token",
    "symbol": "ALYX",
    "decimals": 18
  },
  "infoURL": "https://www.alyxchain.com",
  "shortName": "AlyxTestnet",
  "chainId": 135,
  "networkId": 135,
  "explorers": [{
    "name": "alyx testnet scan",
    "url": "https://testnet.alyxscan.com",
    "standard": "EIP3091"
  }],
  "icon": {
    "url": "ipfs://bafkreifd43fcvh77mdcwjrpzpnlhthounc6b4u645kukqpqhduaveatf6i",
    "width": 2481,
    "height": 2481,
    "format": "png"
  },
  "testnet": true,
  "slug": "alyx-chain-testnet"
};

var c137 = {
  "name": "Polygon Mainnet",
  "chain": "Polygon",
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "rpc": ["https://polygon.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://polygon-rpc.com/", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com", "https://polygon-bor.publicnode.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MATIC",
    "symbol": "MATIC",
    "decimals": 18
  },
  "infoURL": "https://polygon.technology/",
  "shortName": "matic",
  "chainId": 137,
  "networkId": 137,
  "slip44": 966,
  "explorers": [{
    "name": "polygonscan",
    "url": "https://polygonscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "polygon"
};

var c141 = {
  "name": "Openpiece Testnet",
  "chain": "OPENPIECE",
  "icon": {
    "url": "ipfs://QmVTahJkdSH3HPYsJMK2GmqfWZjLyxE7cXy1aHEnHU3vp2",
    "width": 250,
    "height": 250,
    "format": "png"
  },
  "rpc": ["https://openpiece-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.openpiece.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Belly",
    "symbol": "BELLY",
    "decimals": 18
  },
  "infoURL": "https://cryptopiece.online",
  "shortName": "OPtest",
  "chainId": 141,
  "networkId": 141,
  "explorers": [{
    "name": "Belly Scan",
    "url": "https://testnet.bellyscan.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "openpiece-testnet"
};

var c142 = {
  "name": "DAX CHAIN",
  "chain": "DAX",
  "rpc": ["https://dax-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.prodax.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Prodax",
    "symbol": "DAX",
    "decimals": 18
  },
  "infoURL": "https://prodax.io/",
  "shortName": "dax",
  "chainId": 142,
  "networkId": 142,
  "testnet": false,
  "slug": "dax-chain"
};

var c144 = {
  "name": "PHI Network v2",
  "chain": "PHI",
  "rpc": ["https://phi-network-v2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://connect.phi.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "PHI",
    "symbol": "Φ",
    "decimals": 18
  },
  "infoURL": "https://phi.network",
  "shortName": "PHI",
  "chainId": 144,
  "networkId": 144,
  "icon": {
    "url": "ipfs://bafkreid6pm3mic7izp3a6zlfwhhe7etd276bjfsq2xash6a4s2vmcdf65a",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "Phiscan",
    "url": "https://phiscan.com",
    "icon": "phi",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "phi-network-v2"
};

var c160 = {
  "name": "Armonia Eva Chain Mainnet",
  "chain": "Eva",
  "rpc": ["https://armonia-eva-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evascan.io/api/eth-rpc/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Armonia Multichain Native Token",
    "symbol": "AMAX",
    "decimals": 18
  },
  "infoURL": "https://amax.network",
  "shortName": "eva",
  "chainId": 160,
  "networkId": 160,
  "status": "incubating",
  "testnet": false,
  "slug": "armonia-eva-chain"
};

var c161 = {
  "name": "Armonia Eva Chain Testnet",
  "chain": "Wall-e",
  "rpc": ["https://armonia-eva-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.evascan.io/api/eth-rpc/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Armonia Multichain Native Token",
    "symbol": "AMAX",
    "decimals": 18
  },
  "infoURL": "https://amax.network",
  "shortName": "wall-e",
  "chainId": 161,
  "networkId": 161,
  "explorers": [{
    "name": "blockscout - evascan",
    "url": "https://testnet.evascan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "armonia-eva-chain-testnet"
};

var c162 = {
  "name": "Lightstreams Testnet",
  "chain": "PHT",
  "rpc": ["https://lightstreams-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node.sirius.lightstreams.io"],
  "faucets": ["https://discuss.lightstreams.network/t/request-test-tokens"],
  "nativeCurrency": {
    "name": "Lightstreams PHT",
    "symbol": "PHT",
    "decimals": 18
  },
  "infoURL": "https://explorer.sirius.lightstreams.io",
  "shortName": "tpht",
  "chainId": 162,
  "networkId": 162,
  "testnet": true,
  "slug": "lightstreams-testnet"
};

var c163 = {
  "name": "Lightstreams Mainnet",
  "chain": "PHT",
  "rpc": ["https://lightstreams.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node.mainnet.lightstreams.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Lightstreams PHT",
    "symbol": "PHT",
    "decimals": 18
  },
  "infoURL": "https://explorer.lightstreams.io",
  "shortName": "pht",
  "chainId": 163,
  "networkId": 163,
  "testnet": false,
  "slug": "lightstreams"
};

var c167 = {
  "name": "Atoshi Testnet",
  "chain": "ATOSHI",
  "icon": {
    "url": "ipfs://QmfFK6B4MFLrpSS46aLf7hjpt28poHFeTGEKEuH248Tbyj",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "rpc": ["https://atoshi-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node.atoshi.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ATOSHI",
    "symbol": "ATOS",
    "decimals": 18
  },
  "infoURL": "https://atoshi.org",
  "shortName": "atoshi",
  "chainId": 167,
  "networkId": 167,
  "explorers": [{
    "name": "atoshiscan",
    "url": "https://scan.atoverse.info",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "atoshi-testnet"
};

var c168 = {
  "name": "AIOZ Network",
  "chain": "AIOZ",
  "icon": {
    "url": "ipfs://QmRAGPFhvQiXgoJkui7WHajpKctGFrJNhHqzYdwcWt5V3Z",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "rpc": ["https://aioz-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-dataseed.aioz.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "AIOZ",
    "symbol": "AIOZ",
    "decimals": 18
  },
  "infoURL": "https://aioz.network",
  "shortName": "aioz",
  "chainId": 168,
  "networkId": 168,
  "slip44": 60,
  "explorers": [{
    "name": "AIOZ Network Explorer",
    "url": "https://explorer.aioz.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "aioz-network"
};

var c170 = {
  "name": "HOO Smart Chain Testnet",
  "chain": "ETH",
  "rpc": ["https://hoo-smart-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://http-testnet.hoosmartchain.com"],
  "faucets": ["https://faucet-testnet.hscscan.com/"],
  "nativeCurrency": {
    "name": "HOO",
    "symbol": "HOO",
    "decimals": 18
  },
  "infoURL": "https://www.hoosmartchain.com",
  "shortName": "hoosmartchain",
  "chainId": 170,
  "networkId": 170,
  "testnet": true,
  "slug": "hoo-smart-chain-testnet"
};

var c172 = {
  "name": "Latam-Blockchain Resil Testnet",
  "chain": "Resil",
  "rpc": ["https://latam-blockchain-resil-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.latam-blockchain.com", "wss://ws.latam-blockchain.com"],
  "faucets": ["https://faucet.latam-blockchain.com"],
  "nativeCurrency": {
    "name": "Latam-Blockchain Resil Test Native Token",
    "symbol": "usd",
    "decimals": 18
  },
  "infoURL": "https://latam-blockchain.com",
  "shortName": "resil",
  "chainId": 172,
  "networkId": 172,
  "testnet": true,
  "slug": "latam-blockchain-resil-testnet"
};

var c180 = {
  "name": "AME Chain Mainnet",
  "chain": "AME",
  "rpc": ["https://ame-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node1.amechain.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "AME",
    "symbol": "AME",
    "decimals": 18
  },
  "infoURL": "https://amechain.io/",
  "shortName": "ame",
  "chainId": 180,
  "networkId": 180,
  "explorers": [{
    "name": "AME Scan",
    "url": "https://amescan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ame-chain"
};

var c186 = {
  "name": "Seele Mainnet",
  "chain": "Seele",
  "rpc": ["https://seele.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.seelen.pro/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Seele",
    "symbol": "Seele",
    "decimals": 18
  },
  "infoURL": "https://seelen.pro/",
  "shortName": "Seele",
  "chainId": 186,
  "networkId": 186,
  "explorers": [{
    "name": "seeleview",
    "url": "https://seeleview.net",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "seele"
};

var c188 = {
  "name": "BMC Mainnet",
  "chain": "BMC",
  "rpc": ["https://bmc.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.bmcchain.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BTM",
    "symbol": "BTM",
    "decimals": 18
  },
  "infoURL": "https://bmc.bytom.io/",
  "shortName": "BMC",
  "chainId": 188,
  "networkId": 188,
  "explorers": [{
    "name": "Blockmeta",
    "url": "https://bmc.blockmeta.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "bmc"
};

var c189 = {
  "name": "BMC Testnet",
  "chain": "BMC",
  "rpc": ["https://bmc-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.bmcchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BTM",
    "symbol": "BTM",
    "decimals": 18
  },
  "infoURL": "https://bmc.bytom.io/",
  "shortName": "BMCT",
  "chainId": 189,
  "networkId": 189,
  "explorers": [{
    "name": "Blockmeta",
    "url": "https://bmctestnet.blockmeta.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "bmc-testnet"
};

var c193 = {
  "name": "Crypto Emergency",
  "chain": "CEM",
  "rpc": ["https://crypto-emergency.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://cemchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Crypto Emergency",
    "symbol": "CEM",
    "decimals": 18
  },
  "infoURL": "https://cemblockchain.com/",
  "shortName": "cem",
  "chainId": 193,
  "networkId": 193,
  "explorers": [{
    "name": "cemscan",
    "url": "https://cemscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "crypto-emergency"
};

var c195 = {
  "name": "OKBChain Testnet",
  "chain": "okbchain",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "OKBChain Global Utility Token in testnet",
    "symbol": "OKB",
    "decimals": 18
  },
  "features": [],
  "infoURL": "https://www.okex.com/okc",
  "shortName": "tokb",
  "chainId": 195,
  "networkId": 195,
  "explorers": [],
  "status": "incubating",
  "testnet": true,
  "slug": "okbchain-testnet"
};

var c196 = {
  "name": "OKBChain Mainnet",
  "chain": "okbchain",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "OKBChain Global Utility Token",
    "symbol": "OKB",
    "decimals": 18
  },
  "features": [],
  "infoURL": "https://www.okex.com/okc",
  "shortName": "okb",
  "chainId": 196,
  "networkId": 196,
  "explorers": [],
  "status": "incubating",
  "testnet": false,
  "slug": "okbchain"
};

var c199 = {
  "name": "BitTorrent Chain Mainnet",
  "chain": "BTTC",
  "rpc": ["https://bittorrent-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.bittorrentchain.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BitTorrent",
    "symbol": "BTT",
    "decimals": 18
  },
  "infoURL": "https://bittorrentchain.io/",
  "shortName": "BTT",
  "chainId": 199,
  "networkId": 199,
  "explorers": [{
    "name": "bttcscan",
    "url": "https://scan.bittorrentchain.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "bittorrent-chain"
};

var c200 = {
  "name": "Arbitrum on xDai",
  "chain": "AOX",
  "rpc": ["https://arbitrum-on-xdai.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arbitrum.xdaichain.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "xDAI",
    "symbol": "xDAI",
    "decimals": 18
  },
  "infoURL": "https://xdaichain.com",
  "shortName": "aox",
  "chainId": 200,
  "networkId": 200,
  "explorers": [{
    "name": "blockscout",
    "url": "https://blockscout.com/xdai/arbitrum",
    "standard": "EIP3091"
  }],
  "parent": {
    "chain": "eip155-100",
    "type": "L2"
  },
  "testnet": false,
  "slug": "arbitrum-on-xdai"
};

var c201 = {
  "name": "MOAC testnet",
  "chain": "MOAC",
  "rpc": ["https://moac-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://gateway.moac.io/testnet"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MOAC",
    "symbol": "mc",
    "decimals": 18
  },
  "infoURL": "https://moac.io",
  "shortName": "moactest",
  "chainId": 201,
  "networkId": 201,
  "explorers": [{
    "name": "moac testnet explorer",
    "url": "https://testnet.moac.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "moac-testnet"
};

var c211 = {
  "name": "Freight Trust Network",
  "chain": "EDI",
  "rpc": ["https://freight-trust-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://13.57.207.168:3435", "https://app.freighttrust.net/ftn/${API_KEY}"],
  "faucets": ["http://faucet.freight.sh"],
  "nativeCurrency": {
    "name": "Freight Trust Native",
    "symbol": "0xF",
    "decimals": 18
  },
  "infoURL": "https://freighttrust.com",
  "shortName": "EDI",
  "chainId": 211,
  "networkId": 0,
  "testnet": false,
  "slug": "freight-trust-network"
};

var c212 = {
  "name": "MAP Makalu",
  "title": "MAP Testnet Makalu",
  "chain": "MAP",
  "rpc": ["https://map-makalu.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.maplabs.io"],
  "faucets": ["https://faucet.maplabs.io"],
  "nativeCurrency": {
    "name": "Makalu MAP",
    "symbol": "MAP",
    "decimals": 18
  },
  "infoURL": "https://maplabs.io",
  "shortName": "makalu",
  "chainId": 212,
  "networkId": 212,
  "explorers": [{
    "name": "mapscan",
    "url": "https://testnet.mapscan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "map-makalu"
};

var c217 = {
  "name": "SiriusNet V2",
  "chain": "SIN2",
  "faucets": [],
  "rpc": ["https://siriusnet-v2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc2.siriusnet.io"],
  "icon": {
    "url": "ipfs://bafybeicxuxdzrzpwsil4owqmn7wpwka2rqsohpfqmukg57pifzyxr5om2q",
    "width": 100,
    "height": 100,
    "format": "png"
  },
  "nativeCurrency": {
    "name": "MCD",
    "symbol": "MCD",
    "decimals": 18
  },
  "infoURL": "https://siriusnet.io",
  "shortName": "SIN2",
  "chainId": 217,
  "networkId": 217,
  "explorers": [{
    "name": "siriusnet explorer",
    "url": "https://scan.siriusnet.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "siriusnet-v2"
};

var c225 = {
  "name": "LACHAIN Mainnet",
  "chain": "LA",
  "icon": {
    "url": "ipfs://QmQxGA6rhuCQDXUueVcNvFRhMEWisyTmnF57TqL7h6k6cZ",
    "width": 1280,
    "height": 1280,
    "format": "png"
  },
  "rpc": ["https://lachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mainnet.lachain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "LA",
    "symbol": "LA",
    "decimals": 18
  },
  "infoURL": "https://lachain.io",
  "shortName": "LA",
  "chainId": 225,
  "networkId": 225,
  "explorers": [{
    "name": "blockscout",
    "url": "https://scan.lachain.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "lachain"
};

var c226 = {
  "name": "LACHAIN Testnet",
  "chain": "TLA",
  "icon": {
    "url": "ipfs://QmQxGA6rhuCQDXUueVcNvFRhMEWisyTmnF57TqL7h6k6cZ",
    "width": 1280,
    "height": 1280,
    "format": "png"
  },
  "rpc": ["https://lachain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.lachain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TLA",
    "symbol": "TLA",
    "decimals": 18
  },
  "infoURL": "https://lachain.io",
  "shortName": "TLA",
  "chainId": 226,
  "networkId": 226,
  "explorers": [{
    "name": "blockscout",
    "url": "https://scan-test.lachain.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "lachain-testnet"
};

var c246 = {
  "name": "Energy Web Chain",
  "chain": "Energy Web Chain",
  "rpc": ["https://energy-web-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.energyweb.org", "wss://rpc.energyweb.org/ws"],
  "faucets": ["https://faucet.carbonswap.exchange", "https://free-online-app.com/faucet-for-eth-evm-chains/"],
  "nativeCurrency": {
    "name": "Energy Web Token",
    "symbol": "EWT",
    "decimals": 18
  },
  "infoURL": "https://energyweb.org",
  "shortName": "ewt",
  "chainId": 246,
  "networkId": 246,
  "slip44": 246,
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.energyweb.org",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "energy-web-chain"
};

var c248 = {
  "name": "Oasys Mainnet",
  "chain": "Oasys",
  "icon": {
    "url": "ipfs://QmT84suD2ZmTSraJBfeHhTNst2vXctQijNCztok9XiVcUR",
    "width": 3600,
    "height": 3600,
    "format": "png"
  },
  "rpc": ["https://oasys.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.mainnet.oasys.games"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OAS",
    "symbol": "OAS",
    "decimals": 18
  },
  "infoURL": "https://oasys.games",
  "shortName": "OAS",
  "chainId": 248,
  "networkId": 248,
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.oasys.games",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "oasys"
};

var c250 = {
  "name": "Fantom Opera",
  "chain": "FTM",
  "rpc": ["https://fantom.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://fantom.publicnode.com", "https://rpc.ftm.tools"],
  "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  "nativeCurrency": {
    "name": "Fantom",
    "symbol": "FTM",
    "decimals": 18
  },
  "infoURL": "https://fantom.foundation",
  "shortName": "ftm",
  "chainId": 250,
  "networkId": 250,
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "explorers": [{
    "name": "ftmscan",
    "url": "https://ftmscan.com",
    "icon": "ftmscan",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "fantom"
};

var c256 = {
  "name": "Huobi ECO Chain Testnet",
  "chain": "Heco",
  "rpc": ["https://huobi-eco-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://http-testnet.hecochain.com", "wss://ws-testnet.hecochain.com"],
  "faucets": ["https://scan-testnet.hecochain.com/faucet"],
  "nativeCurrency": {
    "name": "Huobi ECO Chain Test Native Token",
    "symbol": "htt",
    "decimals": 18
  },
  "infoURL": "https://testnet.hecoinfo.com",
  "shortName": "hecot",
  "chainId": 256,
  "networkId": 256,
  "testnet": true,
  "slug": "huobi-eco-chain-testnet"
};

var c258 = {
  "name": "Setheum",
  "chain": "Setheum",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Setheum",
    "symbol": "SETM",
    "decimals": 18
  },
  "infoURL": "https://setheum.xyz",
  "shortName": "setm",
  "chainId": 258,
  "networkId": 258,
  "testnet": false,
  "slug": "setheum"
};

var c262 = {
  "name": "SUR Blockchain Network",
  "chain": "SUR",
  "rpc": ["https://sur-blockchain-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sur.nilin.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Suren",
    "symbol": "SRN",
    "decimals": 18
  },
  "infoURL": "https://surnet.org",
  "shortName": "SUR",
  "chainId": 262,
  "networkId": 1,
  "icon": {
    "url": "ipfs://QmbUcDQHCvheYQrWk9WFJRMW5fTJQmtZqkoGUed4bhCM7T",
    "width": 3000,
    "height": 3000,
    "format": "png"
  },
  "explorers": [{
    "name": "Surnet Explorer",
    "url": "https://explorer.surnet.org",
    "icon": "SUR",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "sur-blockchain-network"
};

var c269 = {
  "name": "High Performance Blockchain",
  "chain": "HPB",
  "rpc": ["https://high-performance-blockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://hpbnode.com", "wss://ws.hpbnode.com"],
  "faucets": ["https://myhpbwallet.com/"],
  "nativeCurrency": {
    "name": "High Performance Blockchain Ether",
    "symbol": "HPB",
    "decimals": 18
  },
  "infoURL": "https://hpb.io",
  "shortName": "hpb",
  "chainId": 269,
  "networkId": 269,
  "slip44": 269,
  "explorers": [{
    "name": "hscan",
    "url": "https://hscan.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "high-performance-blockchain"
};

var c280 = {
  "name": "zkSync Era Testnet",
  "chain": "ETH",
  "rpc": ["https://zksync-era-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://zksync2-testnet.zksync.dev"],
  "faucets": ["https://goerli.portal.zksync.io/faucet"],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://era.zksync.io/docs/",
  "shortName": "zksync-goerli",
  "chainId": 280,
  "networkId": 280,
  "icon": {
    "url": "ipfs://Qma6H9xd8Ydah1bAFnmDuau1jeMh5NjGEL8tpdnjLbJ7m2",
    "width": 512,
    "height": 512,
    "format": "svg"
  },
  "explorers": [{
    "name": "zkSync Era Block Explorer",
    "url": "https://goerli.explorer.zksync.io",
    "icon": "zksync-era",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [{
      "url": "https://goerli.portal.zksync.io/bridge"
    }]
  },
  "testnet": true,
  "slug": "zksync-era-testnet"
};

var c288 = {
  "name": "Boba Network",
  "chain": "ETH",
  "rpc": ["https://boba-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.boba.network/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "Boba",
  "chainId": 288,
  "networkId": 288,
  "explorers": [{
    "name": "Bobascan",
    "url": "https://bobascan.com",
    "standard": "none"
  }, {
    "name": "Blockscout",
    "url": "https://blockexplorer.boba.network",
    "standard": "none"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [{
      "url": "https://gateway.boba.network"
    }]
  },
  "testnet": false,
  "slug": "boba-network"
};

var c295 = {
  "name": "Hedera Mainnet",
  "chain": "Hedera",
  "icon": {
    "url": "ipfs://QmQikzhvZKyMmbZJd7BVLZb2YTBDMgNDnaMCAErsVjsfuz",
    "width": 1500,
    "height": 1500,
    "format": "png"
  },
  "rpc": ["https://hedera.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.hashio.io/api"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "hbar",
    "symbol": "HBAR",
    "decimals": 8
  },
  "infoURL": "https://hedera.com",
  "shortName": "hedera-mainnet",
  "chainId": 295,
  "networkId": 295,
  "slip44": 3030,
  "explorers": [{
    "name": "HashScan",
    "url": "https://hashscan.io/mainnet/dashboard",
    "standard": "none"
  }, {
    "name": "Arkhia Explorer",
    "url": "https://explorer.arkhia.io",
    "standard": "none"
  }, {
    "name": "DragonGlass",
    "url": "https://app.dragonglass.me",
    "standard": "none"
  }, {
    "name": "Hedera Explorer",
    "url": "https://hederaexplorer.io",
    "standard": "none"
  }, {
    "name": "Ledger Works Explore",
    "url": "https://explore.lworks.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "hedera"
};

var c296 = {
  "name": "Hedera Testnet",
  "chain": "Hedera",
  "icon": {
    "url": "ipfs://QmQikzhvZKyMmbZJd7BVLZb2YTBDMgNDnaMCAErsVjsfuz",
    "width": 1500,
    "height": 1500,
    "format": "png"
  },
  "rpc": ["https://hedera-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.hashio.io/api"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": ["https://portal.hedera.com"],
  "nativeCurrency": {
    "name": "hbar",
    "symbol": "HBAR",
    "decimals": 8
  },
  "infoURL": "https://hedera.com",
  "shortName": "hedera-testnet",
  "chainId": 296,
  "networkId": 296,
  "slip44": 3030,
  "explorers": [{
    "name": "HashScan",
    "url": "https://hashscan.io/testnet/dashboard",
    "standard": "none"
  }, {
    "name": "Arkhia Explorer",
    "url": "https://explorer.arkhia.io",
    "standard": "none"
  }, {
    "name": "DragonGlass",
    "url": "https://app.dragonglass.me",
    "standard": "none"
  }, {
    "name": "Hedera Explorer",
    "url": "https://hederaexplorer.io",
    "standard": "none"
  }, {
    "name": "Ledger Works Explore",
    "url": "https://explore.lworks.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "hedera-testnet"
};

var c297 = {
  "name": "Hedera Previewnet",
  "chain": "Hedera",
  "icon": {
    "url": "ipfs://QmQikzhvZKyMmbZJd7BVLZb2YTBDMgNDnaMCAErsVjsfuz",
    "width": 1500,
    "height": 1500,
    "format": "png"
  },
  "rpc": ["https://hedera-previewnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://previewnet.hashio.io/api"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": ["https://portal.hedera.com"],
  "nativeCurrency": {
    "name": "hbar",
    "symbol": "HBAR",
    "decimals": 8
  },
  "infoURL": "https://hedera.com",
  "shortName": "hedera-previewnet",
  "chainId": 297,
  "networkId": 297,
  "slip44": 3030,
  "explorers": [{
    "name": "HashScan",
    "url": "https://hashscan.io/previewnet/dashboard",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "hedera-previewnet"
};

var c298 = {
  "name": "Hedera Localnet",
  "chain": "Hedera",
  "icon": {
    "url": "ipfs://QmQikzhvZKyMmbZJd7BVLZb2YTBDMgNDnaMCAErsVjsfuz",
    "width": 1500,
    "height": 1500,
    "format": "png"
  },
  "rpc": [],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "hbar",
    "symbol": "HBAR",
    "decimals": 8
  },
  "infoURL": "https://hedera.com",
  "shortName": "hedera-localnet",
  "chainId": 298,
  "networkId": 298,
  "slip44": 3030,
  "explorers": [],
  "testnet": false,
  "slug": "hedera-localnet"
};

var c300 = {
  "name": "Optimism on Gnosis",
  "chain": "OGC",
  "rpc": ["https://optimism-on-gnosis.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://optimism.gnosischain.com", "wss://optimism.gnosischain.com/wss"],
  "faucets": ["https://faucet.gimlu.com/gnosis"],
  "nativeCurrency": {
    "name": "xDAI",
    "symbol": "xDAI",
    "decimals": 18
  },
  "infoURL": "https://www.xdaichain.com/for-developers/optimism-optimistic-rollups-on-gc",
  "shortName": "ogc",
  "chainId": 300,
  "networkId": 300,
  "explorers": [{
    "name": "blockscout",
    "url": "https://blockscout.com/xdai/optimism",
    "icon": "blockscout",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "optimism-on-gnosis"
};

var c301 = {
  "name": "Bobaopera",
  "chain": "Bobaopera",
  "rpc": ["https://bobaopera.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bobaopera.boba.network", "wss://wss.bobaopera.boba.network", "https://replica.bobaopera.boba.network", "wss://replica-wss.bobaopera.boba.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Boba Token",
    "symbol": "BOBA",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "Bobaopera",
  "chainId": 301,
  "networkId": 301,
  "explorers": [{
    "name": "Bobaopera block explorer",
    "url": "https://blockexplorer.bobaopera.boba.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "bobaopera"
};

var c311 = {
  "name": "Omax Mainnet",
  "chain": "OMAX Chain",
  "rpc": ["https://omax.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainapi.omaxray.com"],
  "faucets": ["https://faucet.omaxray.com/"],
  "nativeCurrency": {
    "name": "OMAX COIN",
    "symbol": "OMAX",
    "decimals": 18
  },
  "infoURL": "https://www.omaxcoin.com/",
  "shortName": "omax",
  "chainId": 311,
  "networkId": 311,
  "icon": {
    "url": "ipfs://Qmd7omPxrehSuxHHPMYd5Nr7nfrtjKdRJQEhDLfTb87w8G",
    "width": 500,
    "height": 500,
    "format": "png"
  },
  "explorers": [{
    "name": "Omax Chain Explorer",
    "url": "https://omaxray.com",
    "icon": "omaxray",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "omax"
};

var c314 = {
  "name": "Filecoin - Mainnet",
  "chain": "FIL",
  "icon": {
    "url": "ipfs://QmS9r9XQkMHVomWcSBNDkKkz9n87h9bH9ssabeiKZtANoU",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "rpc": ["https://filecoin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.node.glif.io/", "https://rpc.ankr.com/filecoin", "https://filecoin-mainnet.chainstacklabs.com/rpc/v1"],
  "faucets": [],
  "nativeCurrency": {
    "name": "filecoin",
    "symbol": "FIL",
    "decimals": 18
  },
  "infoURL": "https://filecoin.io",
  "shortName": "filecoin",
  "chainId": 314,
  "networkId": 314,
  "slip44": 461,
  "explorers": [{
    "name": "Filfox",
    "url": "https://filfox.info/en",
    "standard": "none"
  }, {
    "name": "Beryx",
    "url": "https://beryx.zondax.ch",
    "standard": "none"
  }, {
    "name": "Glif Explorer",
    "url": "https://explorer.glif.io",
    "standard": "EIP3091"
  }, {
    "name": "Dev.storage",
    "url": "https://dev.storage",
    "standard": "none"
  }, {
    "name": "Filscan",
    "url": "https://filscan.io",
    "standard": "none"
  }, {
    "name": "Filscout",
    "url": "https://filscout.io/en",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "filecoin"
};

var c321 = {
  "name": "KCC Mainnet",
  "chain": "KCC",
  "rpc": ["https://kcc.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mainnet.kcc.network", "https://kcc.mytokenpocket.vip", "https://public-rpc.blockpi.io/http/kcc"],
  "faucets": ["https://faucet.kcc.io/", "https://free-online-app.com/faucet-for-eth-evm-chains/"],
  "nativeCurrency": {
    "name": "KuCoin Token",
    "symbol": "KCS",
    "decimals": 18
  },
  "infoURL": "https://kcc.io",
  "shortName": "kcs",
  "chainId": 321,
  "networkId": 321,
  "slip44": 641,
  "explorers": [{
    "name": "KCC Explorer",
    "url": "https://explorer.kcc.io/en",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "kcc"
};

var c322 = {
  "name": "KCC Testnet",
  "chain": "KCC",
  "rpc": ["https://kcc-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.kcc.network"],
  "faucets": ["https://faucet-testnet.kcc.network"],
  "nativeCurrency": {
    "name": "KuCoin Testnet Token",
    "symbol": "tKCS",
    "decimals": 18
  },
  "infoURL": "https://scan-testnet.kcc.network",
  "shortName": "kcst",
  "chainId": 322,
  "networkId": 322,
  "explorers": [{
    "name": "kcc-scan-testnet",
    "url": "https://scan-testnet.kcc.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "kcc-testnet"
};

var c324 = {
  "name": "zkSync Era Mainnet",
  "chain": "ETH",
  "rpc": ["https://zksync-era.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://zksync2-mainnet.zksync.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://zksync.io/",
  "shortName": "zksync",
  "chainId": 324,
  "networkId": 324,
  "icon": {
    "url": "ipfs://Qma6H9xd8Ydah1bAFnmDuau1jeMh5NjGEL8tpdnjLbJ7m2",
    "width": 512,
    "height": 512,
    "format": "svg"
  },
  "explorers": [{
    "name": "zkSync Era Block Explorer",
    "url": "https://explorer.zksync.io",
    "icon": "zksync-era",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [{
      "url": "https://portal.zksync.io/bridge"
    }]
  },
  "testnet": false,
  "slug": "zksync-era"
};

var c333 = {
  "name": "Web3Q Mainnet",
  "chain": "Web3Q",
  "rpc": ["https://web3q.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.web3q.io:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Web3Q",
    "symbol": "W3Q",
    "decimals": 18
  },
  "infoURL": "https://web3q.io/home.w3q/",
  "shortName": "w3q",
  "chainId": 333,
  "networkId": 333,
  "explorers": [{
    "name": "w3q-mainnet",
    "url": "https://explorer.mainnet.web3q.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "web3q"
};

var c335 = {
  "name": "DFK Chain Test",
  "chain": "DFK",
  "icon": {
    "url": "ipfs://QmQB48m15TzhUFrmu56QCRQjkrkgUaKfgCmKE8o3RzmuPJ",
    "width": 500,
    "height": 500,
    "format": "png"
  },
  "rpc": ["https://dfk-chain-test.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Jewel",
    "symbol": "JEWEL",
    "decimals": 18
  },
  "infoURL": "https://defikingdoms.com",
  "shortName": "DFKTEST",
  "chainId": 335,
  "networkId": 335,
  "explorers": [{
    "name": "ethernal",
    "url": "https://explorer-test.dfkchain.com",
    "icon": "ethereum",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "dfk-chain-test"
};

var c336 = {
  "name": "Shiden",
  "chain": "SDN",
  "rpc": ["https://shiden.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://shiden.api.onfinality.io/public", "https://shiden-rpc.dwellir.com", "https://shiden.public.blastapi.io", "wss://shiden.api.onfinality.io/public-ws", "wss://shiden.public.blastapi.io", "wss://shiden-rpc.dwellir.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Shiden",
    "symbol": "SDN",
    "decimals": 18
  },
  "infoURL": "https://shiden.astar.network/",
  "shortName": "sdn",
  "chainId": 336,
  "networkId": 336,
  "icon": {
    "url": "ipfs://QmQySjAoWHgk3ou1yvBi2TrTcgH6KhfGiU7GcrLzrAeRkE",
    "width": 250,
    "height": 250,
    "format": "png"
  },
  "explorers": [{
    "name": "subscan",
    "url": "https://shiden.subscan.io",
    "standard": "none",
    "icon": "subscan"
  }],
  "testnet": false,
  "slug": "shiden"
};

var c338 = {
  "name": "Cronos Testnet",
  "chain": "CRO",
  "rpc": ["https://cronos-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm-t3.cronos.org"],
  "faucets": ["https://cronos.org/faucet"],
  "nativeCurrency": {
    "name": "Cronos Test Coin",
    "symbol": "TCRO",
    "decimals": 18
  },
  "infoURL": "https://cronos.org",
  "shortName": "tcro",
  "chainId": 338,
  "networkId": 338,
  "explorers": [{
    "name": "Cronos Testnet Explorer",
    "url": "https://testnet.cronoscan.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "cronos-testnet"
};

var c361 = {
  "name": "Theta Mainnet",
  "chain": "Theta",
  "rpc": ["https://theta.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-rpc-api.thetatoken.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
  },
  "infoURL": "https://www.thetatoken.org/",
  "shortName": "theta-mainnet",
  "chainId": 361,
  "networkId": 361,
  "explorers": [{
    "name": "Theta Mainnet Explorer",
    "url": "https://explorer.thetatoken.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "theta"
};

var c363 = {
  "name": "Theta Sapphire Testnet",
  "chain": "Theta",
  "rpc": ["https://theta-sapphire-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-rpc-api-sapphire.thetatoken.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
  },
  "infoURL": "https://www.thetatoken.org/",
  "shortName": "theta-sapphire",
  "chainId": 363,
  "networkId": 363,
  "explorers": [{
    "name": "Theta Sapphire Testnet Explorer",
    "url": "https://guardian-testnet-sapphire-explorer.thetatoken.org",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "theta-sapphire-testnet"
};

var c364 = {
  "name": "Theta Amber Testnet",
  "chain": "Theta",
  "rpc": ["https://theta-amber-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-rpc-api-amber.thetatoken.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
  },
  "infoURL": "https://www.thetatoken.org/",
  "shortName": "theta-amber",
  "chainId": 364,
  "networkId": 364,
  "explorers": [{
    "name": "Theta Amber Testnet Explorer",
    "url": "https://guardian-testnet-amber-explorer.thetatoken.org",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "theta-amber-testnet"
};

var c365 = {
  "name": "Theta Testnet",
  "chain": "Theta",
  "rpc": ["https://theta-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-rpc-api-testnet.thetatoken.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
  },
  "infoURL": "https://www.thetatoken.org/",
  "shortName": "theta-testnet",
  "chainId": 365,
  "networkId": 365,
  "explorers": [{
    "name": "Theta Testnet Explorer",
    "url": "https://testnet-explorer.thetatoken.org",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "theta-testnet"
};

var c369 = {
  "name": "PulseChain Mainnet",
  "shortName": "pls",
  "chain": "PLS",
  "chainId": 369,
  "networkId": 369,
  "infoURL": "https://pulsechain.com/",
  "rpc": ["https://pulsechain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.mainnet.pulsechain.com/", "wss://rpc.mainnet.pulsechain.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Pulse",
    "symbol": "PLS",
    "decimals": 18
  },
  "testnet": false,
  "slug": "pulsechain"
};

var c371 = {
  "name": "Consta Testnet",
  "chain": "tCNT",
  "rpc": ["https://consta-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.theconsta.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "tCNT",
    "symbol": "tCNT",
    "decimals": 18
  },
  "infoURL": "http://theconsta.com",
  "shortName": "tCNT",
  "chainId": 371,
  "networkId": 371,
  "icon": {
    "url": "ipfs://QmfQ1yae6uvXgBSwnwJM4Mtp8ctH66tM6mB1Hsgu4XvsC9",
    "width": 2000,
    "height": 2000,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer-testnet.theconsta.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "consta-testnet"
};

var c385 = {
  "name": "Lisinski",
  "chain": "CRO",
  "rpc": ["https://lisinski.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-bitfalls1.lisinski.online"],
  "faucets": ["https://pipa.lisinski.online"],
  "nativeCurrency": {
    "name": "Lisinski Ether",
    "symbol": "LISINS",
    "decimals": 18
  },
  "infoURL": "https://lisinski.online",
  "shortName": "lisinski",
  "chainId": 385,
  "networkId": 385,
  "testnet": false,
  "slug": "lisinski"
};

var c400 = {
  "name": "HyperonChain TestNet",
  "chain": "HPN",
  "icon": {
    "url": "ipfs://QmWxhyxXTEsWH98v7M3ck4ZL1qQoUaHG4HgtgxzD2KJQ5m",
    "width": 540,
    "height": 541,
    "format": "png"
  },
  "rpc": ["https://hyperonchain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.hyperonchain.com"],
  "faucets": ["https://faucet.hyperonchain.com"],
  "nativeCurrency": {
    "name": "HyperonChain",
    "symbol": "HPN",
    "decimals": 18
  },
  "infoURL": "https://docs.hyperonchain.com",
  "shortName": "hpn",
  "chainId": 400,
  "networkId": 400,
  "explorers": [{
    "name": "blockscout",
    "url": "https://testnet.hyperonchain.com",
    "icon": "hyperonchain",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "hyperonchain-testnet"
};

var c416 = {
  "name": "SX Network Mainnet",
  "chain": "SX",
  "icon": {
    "url": "ipfs://QmSXLXqyr2H6Ja5XrmznXbWTEvF2gFaL8RXNXgyLmDHjAF",
    "width": 896,
    "height": 690,
    "format": "png"
  },
  "rpc": ["https://sx-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.sx.technology"],
  "faucets": [],
  "nativeCurrency": {
    "name": "SX Network",
    "symbol": "SX",
    "decimals": 18
  },
  "infoURL": "https://www.sx.technology",
  "shortName": "SX",
  "chainId": 416,
  "networkId": 416,
  "explorers": [{
    "name": "SX Network Explorer",
    "url": "https://explorer.sx.technology",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "sx-network"
};

var c418 = {
  "name": "LA Testnet",
  "chain": "LATestnet",
  "rpc": ["https://la-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.lachain.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Test La Coin",
    "symbol": "TLA",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }],
  "infoURL": "",
  "shortName": "latestnet",
  "chainId": 418,
  "networkId": 418,
  "explorers": [],
  "testnet": true,
  "slug": "la-testnet"
};

var c420 = {
  "name": "Optimism Goerli Testnet",
  "chain": "ETH",
  "rpc": ["https://optimism-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://opt-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://optimism-goerli.infura.io/v3/${INFURA_API_KEY}", "https://goerli.optimism.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Goerli Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://optimism.io",
  "shortName": "ogor",
  "chainId": 420,
  "networkId": 420,
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "testnet": true,
  "slug": "optimism-goerli"
};

var c427 = {
  "name": "Zeeth Chain",
  "chain": "ZeethChain",
  "rpc": ["https://zeeth-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.zeeth.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Zeeth Token",
    "symbol": "ZTH",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "zeeth",
  "chainId": 427,
  "networkId": 427,
  "explorers": [{
    "name": "Zeeth Explorer",
    "url": "https://explorer.zeeth.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "zeeth-chain"
};

var c444 = {
  "name": "Frenchain Testnet",
  "chain": "tfren",
  "rpc": ["https://frenchain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-01tn.frenchain.app"],
  "faucets": [],
  "nativeCurrency": {
    "name": "tFREN",
    "symbol": "FtREN",
    "decimals": 18
  },
  "infoURL": "https://frenchain.app",
  "shortName": "tFREN",
  "chainId": 444,
  "networkId": 444,
  "icon": {
    "url": "ipfs://QmQk41bYX6WpYyUAdRgomZekxP5mbvZXhfxLEEqtatyJv4",
    "width": 128,
    "height": 128,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://testnet.frenscan.io",
    "icon": "fren",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "frenchain-testnet"
};

var c499 = {
  "name": "Rupaya",
  "chain": "RUPX",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Rupaya",
    "symbol": "RUPX",
    "decimals": 18
  },
  "infoURL": "https://www.rupx.io",
  "shortName": "rupx",
  "chainId": 499,
  "networkId": 499,
  "slip44": 499,
  "testnet": false,
  "slug": "rupaya"
};

var c500 = {
  "name": "Camino C-Chain",
  "chain": "CAM",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Camino",
    "symbol": "CAM",
    "decimals": 18
  },
  "infoURL": "https://camino.foundation/",
  "shortName": "Camino",
  "chainId": 500,
  "networkId": 1000,
  "icon": {
    "url": "ipfs://QmSEoUonisawfCvT3osysuZzbqUEHugtgNraePKWL8PKYa",
    "width": 768,
    "height": 768,
    "format": "png"
  },
  "explorers": [{
    "name": "blockexplorer",
    "url": "https://explorer.camino.foundation/mainnet",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "camino-c-chain"
};

var c501 = {
  "name": "Columbus Test Network",
  "chain": "CAM",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Camino",
    "symbol": "CAM",
    "decimals": 18
  },
  "infoURL": "https://camino.foundation/",
  "shortName": "Columbus",
  "chainId": 501,
  "networkId": 1001,
  "icon": {
    "url": "ipfs://QmSEoUonisawfCvT3osysuZzbqUEHugtgNraePKWL8PKYa",
    "width": 768,
    "height": 768,
    "format": "png"
  },
  "explorers": [{
    "name": "blockexplorer",
    "url": "https://explorer.camino.foundation",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "columbus-test-network"
};

var c512 = {
  "name": "Double-A Chain Mainnet",
  "chain": "AAC",
  "rpc": ["https://double-a-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.acuteangle.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Acuteangle Native Token",
    "symbol": "AAC",
    "decimals": 18
  },
  "infoURL": "https://www.acuteangle.com/",
  "shortName": "aac",
  "chainId": 512,
  "networkId": 512,
  "slip44": 1512,
  "explorers": [{
    "name": "aacscan",
    "url": "https://scan.acuteangle.com",
    "standard": "EIP3091"
  }],
  "icon": {
    "url": "ipfs://QmRUrz4dULaoaMpnqd8qXT7ehwz3aaqnYKY4ePsy7isGaF",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "testnet": false,
  "slug": "double-a-chain"
};

var c513 = {
  "name": "Double-A Chain Testnet",
  "chain": "AAC",
  "icon": {
    "url": "ipfs://QmRUrz4dULaoaMpnqd8qXT7ehwz3aaqnYKY4ePsy7isGaF",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://double-a-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.acuteangle.com"],
  "faucets": ["https://scan-testnet.acuteangle.com/faucet"],
  "nativeCurrency": {
    "name": "Acuteangle Native Token",
    "symbol": "AAC",
    "decimals": 18
  },
  "infoURL": "https://www.acuteangle.com/",
  "shortName": "aact",
  "chainId": 513,
  "networkId": 513,
  "explorers": [{
    "name": "aacscan-testnet",
    "url": "https://scan-testnet.acuteangle.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "double-a-chain-testnet"
};

var c516 = {
  "name": "Gear Zero Network Mainnet",
  "chain": "GearZero",
  "rpc": ["https://gear-zero-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://gzn.linksme.info"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Gear Zero Network Native Token",
    "symbol": "GZN",
    "decimals": 18
  },
  "infoURL": "https://token.gearzero.ca/mainnet",
  "shortName": "gz-mainnet",
  "chainId": 516,
  "networkId": 516,
  "slip44": 516,
  "explorers": [],
  "testnet": false,
  "slug": "gear-zero-network"
};

var c520 = {
  "name": "XT Smart Chain Mainnet",
  "chain": "XSC",
  "icon": {
    "url": "ipfs://QmNmAFgQKkjofaBR5mhB5ygE1Gna36YBVsGkgZQxrwW85s",
    "width": 98,
    "height": 96,
    "format": "png"
  },
  "rpc": ["https://xt-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://datarpc1.xsc.pub", "https://datarpc2.xsc.pub", "https://datarpc3.xsc.pub"],
  "faucets": ["https://xsc.pub/faucet"],
  "nativeCurrency": {
    "name": "XT Smart Chain Native Token",
    "symbol": "XT",
    "decimals": 18
  },
  "infoURL": "https://xsc.pub/",
  "shortName": "xt",
  "chainId": 520,
  "networkId": 1024,
  "explorers": [{
    "name": "xscscan",
    "url": "https://xscscan.pub",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "xt-smart-chain"
};

var c529 = {
  "name": "Firechain Mainnet",
  "chain": "FIRE",
  "icon": {
    "url": "ipfs://QmYjuztyURb3Fc6ZTLgCbwQa64CcVoigF5j9cafzuSbqgf",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://firechain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.rpc1.thefirechain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Firechain",
    "symbol": "FIRE",
    "decimals": 18
  },
  "infoURL": "https://thefirechain.com",
  "shortName": "fire",
  "chainId": 529,
  "networkId": 529,
  "explorers": [],
  "status": "incubating",
  "testnet": false,
  "slug": "firechain"
};

var c530 = {
  "name": "F(x)Core Mainnet Network",
  "chain": "Fxcore",
  "rpc": ["https://f-x-core-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://fx-json-web3.functionx.io:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Function X",
    "symbol": "FX",
    "decimals": 18
  },
  "infoURL": "https://functionx.io/",
  "shortName": "FxCore",
  "chainId": 530,
  "networkId": 530,
  "icon": {
    "url": "ipfs://bafkreifrf2iq3k3dqfbvp3pacwuxu33up3usmrhojt5ielyfty7xkixu3i",
    "width": 500,
    "height": 500,
    "format": "png"
  },
  "explorers": [{
    "name": "FunctionX Explorer",
    "url": "https://fx-evm.functionx.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "f-x-core-network"
};

var c534 = {
  "name": "Candle",
  "chain": "Candle",
  "rpc": ["https://candle.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://candle-rpc.com/", "https://rpc.cndlchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CANDLE",
    "symbol": "CNDL",
    "decimals": 18
  },
  "infoURL": "https://candlelabs.org/",
  "shortName": "CNDL",
  "chainId": 534,
  "networkId": 534,
  "slip44": 674,
  "explorers": [{
    "name": "candleexplorer",
    "url": "https://candleexplorer.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "candle"
};

var c555 = {
  "name": "Vela1 Chain Mainnet",
  "chain": "VELA1",
  "rpc": ["https://vela1-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.velaverse.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CLASS COIN",
    "symbol": "CLASS",
    "decimals": 18
  },
  "infoURL": "https://velaverse.io",
  "shortName": "CLASS",
  "chainId": 555,
  "networkId": 555,
  "explorers": [{
    "name": "Vela1 Chain Mainnet Explorer",
    "url": "https://exp.velaverse.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "vela1-chain"
};

var c558 = {
  "name": "Tao Network",
  "chain": "TAO",
  "rpc": ["https://tao-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.tao.network", "http://rpc.testnet.tao.network:8545", "https://rpc.tao.network", "wss://rpc.tao.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tao",
    "symbol": "TAO",
    "decimals": 18
  },
  "infoURL": "https://tao.network",
  "shortName": "tao",
  "chainId": 558,
  "networkId": 558,
  "testnet": true,
  "slug": "tao-network"
};

var c568 = {
  "name": "Dogechain Testnet",
  "chain": "DC",
  "icon": {
    "url": "ipfs://QmNS6B6L8FfgGSMTEi2SxD3bK5cdmKPNtQKcYaJeRWrkHs",
    "width": 732,
    "height": 732,
    "format": "png"
  },
  "rpc": ["https://dogechain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.dogechain.dog"],
  "faucets": ["https://faucet.dogechain.dog"],
  "nativeCurrency": {
    "name": "Dogecoin",
    "symbol": "DOGE",
    "decimals": 18
  },
  "infoURL": "https://dogechain.dog",
  "shortName": "dct",
  "chainId": 568,
  "networkId": 568,
  "explorers": [{
    "name": "dogechain testnet explorer",
    "url": "https://explorer-testnet.dogechain.dog",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "dogechain-testnet"
};

var c592 = {
  "name": "Astar",
  "chain": "ASTR",
  "rpc": ["https://astar.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.astar.network:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Astar",
    "symbol": "ASTR",
    "decimals": 18
  },
  "infoURL": "https://astar.network/",
  "shortName": "astr",
  "chainId": 592,
  "networkId": 592,
  "icon": {
    "url": "ipfs://Qmdvmx3p6gXBCLUMU1qivscaTNkT6h3URdhUTZCHLwKudg",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "explorers": [{
    "name": "subscan",
    "url": "https://astar.subscan.io",
    "standard": "none",
    "icon": "subscan"
  }],
  "testnet": false,
  "slug": "astar"
};

var c595 = {
  "name": "Acala Mandala Testnet",
  "chain": "mACA",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Acala Mandala Token",
    "symbol": "mACA",
    "decimals": 18
  },
  "infoURL": "https://acala.network",
  "shortName": "maca",
  "chainId": 595,
  "networkId": 595,
  "testnet": true,
  "slug": "acala-mandala-testnet"
};

var c596 = {
  "name": "Karura Network Testnet",
  "chain": "KAR",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Karura Token",
    "symbol": "KAR",
    "decimals": 18
  },
  "infoURL": "https://karura.network",
  "shortName": "tkar",
  "chainId": 596,
  "networkId": 596,
  "slip44": 596,
  "testnet": true,
  "slug": "karura-network-testnet"
};

var c597 = {
  "name": "Acala Network Testnet",
  "chain": "ACA",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Acala Token",
    "symbol": "ACA",
    "decimals": 18
  },
  "infoURL": "https://acala.network",
  "shortName": "taca",
  "chainId": 597,
  "networkId": 597,
  "slip44": 597,
  "testnet": true,
  "slug": "acala-network-testnet"
};

var c599 = {
  "name": "Metis Goerli Testnet",
  "chain": "ETH",
  "rpc": ["https://metis-goerli-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.gateway.metisdevops.link"],
  "faucets": ["https://goerli.faucet.metisdevops.link"],
  "nativeCurrency": {
    "name": "Goerli Metis",
    "symbol": "METIS",
    "decimals": 18
  },
  "infoURL": "https://www.metis.io",
  "shortName": "metis-goerli",
  "chainId": 599,
  "networkId": 599,
  "explorers": [{
    "name": "blockscout",
    "url": "https://goerli.explorer.metisdevops.link",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-4",
    "bridges": [{
      "url": "https://testnet-bridge.metis.io"
    }]
  },
  "testnet": true,
  "slug": "metis-goerli-testnet"
};

var c600 = {
  "name": "Meshnyan testnet",
  "chain": "MeshTestChain",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Meshnyan Testnet Native Token",
    "symbol": "MESHT",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "mesh-chain-testnet",
  "chainId": 600,
  "networkId": 600,
  "testnet": true,
  "slug": "meshnyan-testnet"
};

var c614 = {
  "name": "Graphlinq Blockchain Mainnet",
  "chain": "GLQ Blockchain",
  "rpc": ["https://graphlinq-blockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://glq-dataseed.graphlinq.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GLQ",
    "symbol": "GLQ",
    "decimals": 18
  },
  "infoURL": "https://graphlinq.io",
  "shortName": "glq",
  "chainId": 614,
  "networkId": 614,
  "explorers": [{
    "name": "GLQ Explorer",
    "url": "https://explorer.graphlinq.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "graphlinq-blockchain"
};

var c647 = {
  "name": "SX Network Testnet",
  "chain": "SX",
  "icon": {
    "url": "ipfs://QmSXLXqyr2H6Ja5XrmznXbWTEvF2gFaL8RXNXgyLmDHjAF",
    "width": 896,
    "height": 690,
    "format": "png"
  },
  "rpc": ["https://sx-network-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.toronto.sx.technology"],
  "faucets": ["https://faucet.toronto.sx.technology"],
  "nativeCurrency": {
    "name": "SX Network",
    "symbol": "SX",
    "decimals": 18
  },
  "infoURL": "https://www.sx.technology",
  "shortName": "SX-Testnet",
  "chainId": 647,
  "networkId": 647,
  "explorers": [{
    "name": "SX Network Toronto Explorer",
    "url": "https://explorer.toronto.sx.technology",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "sx-network-testnet"
};

var c648 = {
  "name": "Endurance Smart Chain Mainnet",
  "chain": "ACE",
  "rpc": ["https://endurance-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-endurance.fusionist.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Endurance Chain Native Token",
    "symbol": "ACE",
    "decimals": 18
  },
  "infoURL": "https://ace.fusionist.io/",
  "shortName": "ace",
  "chainId": 648,
  "networkId": 648,
  "explorers": [{
    "name": "Endurance Scan",
    "url": "https://explorer.endurance.fusionist.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "endurance-smart-chain"
};

var c666 = {
  "name": "Pixie Chain Testnet",
  "chain": "PixieChain",
  "rpc": ["https://pixie-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://http-testnet.chain.pixie.xyz", "wss://ws-testnet.chain.pixie.xyz"],
  "faucets": ["https://chain.pixie.xyz/faucet"],
  "nativeCurrency": {
    "name": "Pixie Chain Testnet Native Token",
    "symbol": "PCTT",
    "decimals": 18
  },
  "infoURL": "https://scan-testnet.chain.pixie.xyz",
  "shortName": "pixie-chain-testnet",
  "chainId": 666,
  "networkId": 666,
  "testnet": true,
  "slug": "pixie-chain-testnet"
};

var c686 = {
  "name": "Karura Network",
  "chain": "KAR",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Karura Token",
    "symbol": "KAR",
    "decimals": 18
  },
  "infoURL": "https://karura.network",
  "shortName": "kar",
  "chainId": 686,
  "networkId": 686,
  "slip44": 686,
  "testnet": false,
  "slug": "karura-network"
};

var c700 = {
  "name": "Star Social Testnet",
  "chain": "SNS",
  "rpc": ["https://star-social-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avastar.cc/ext/bc/C/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Social",
    "symbol": "SNS",
    "decimals": 18
  },
  "infoURL": "https://info.avastar.cc",
  "shortName": "SNS",
  "chainId": 700,
  "networkId": 700,
  "explorers": [{
    "name": "starscan",
    "url": "https://avastar.info",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "star-social-testnet"
};

var c707 = {
  "name": "BlockChain Station Mainnet",
  "chain": "BCS",
  "rpc": ["https://blockchain-station.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mainnet.bcsdev.io", "wss://rpc-ws-mainnet.bcsdev.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BCS Token",
    "symbol": "BCS",
    "decimals": 18
  },
  "infoURL": "https://blockchainstation.io",
  "shortName": "bcs",
  "chainId": 707,
  "networkId": 707,
  "explorers": [{
    "name": "BlockChain Station Explorer",
    "url": "https://explorer.bcsdev.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "blockchain-station"
};

var c708 = {
  "name": "BlockChain Station Testnet",
  "chain": "BCS",
  "rpc": ["https://blockchain-station-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.bcsdev.io", "wss://rpc-ws-testnet.bcsdev.io"],
  "faucets": ["https://faucet.bcsdev.io"],
  "nativeCurrency": {
    "name": "BCS Testnet Token",
    "symbol": "tBCS",
    "decimals": 18
  },
  "infoURL": "https://blockchainstation.io",
  "shortName": "tbcs",
  "chainId": 708,
  "networkId": 708,
  "explorers": [{
    "name": "BlockChain Station Explorer",
    "url": "https://testnet.bcsdev.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "blockchain-station-testnet"
};

var c721 = {
  "name": "Lycan Chain",
  "chain": "LYC",
  "rpc": ["https://lycan-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.lycanchain.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Lycan",
    "symbol": "LYC",
    "decimals": 18
  },
  "infoURL": "https://lycanchain.com",
  "shortName": "LYC",
  "chainId": 721,
  "networkId": 721,
  "icon": {
    "url": "ipfs://Qmc8hsCbUUjnJDnXrDhFh4V1xk1gJwZbUyNJ39p72javji",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.lycanchain.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "lycan-chain"
};

var c740 = {
  "name": "Canto Testnet",
  "chain": "Canto Tesnet",
  "rpc": ["https://canto-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth.plexnode.wtf/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Canto",
    "symbol": "CANTO",
    "decimals": 18
  },
  "infoURL": "https://canto.io",
  "shortName": "tcanto",
  "chainId": 740,
  "networkId": 740,
  "explorers": [{
    "name": "Canto Tesnet Explorer (Neobase)",
    "url": "http://testnet-explorer.canto.neobase.one",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "canto-testnet"
};

var c741 = {
  "name": "Vention Smart Chain Testnet",
  "chain": "VSCT",
  "icon": {
    "url": "ipfs://QmcNepHmbmHW1BZYM3MFqJW4awwhmDqhUPRXXmRnXwg1U4",
    "width": 250,
    "height": 250,
    "format": "png"
  },
  "rpc": ["https://vention-smart-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node-testnet.vention.network"],
  "faucets": ["https://faucet.vention.network"],
  "nativeCurrency": {
    "name": "VNT",
    "symbol": "VNT",
    "decimals": 18
  },
  "infoURL": "https://testnet.ventionscan.io",
  "shortName": "vsct",
  "chainId": 741,
  "networkId": 741,
  "explorers": [{
    "name": "ventionscan",
    "url": "https://testnet.ventionscan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "vention-smart-chain-testnet"
};

var c766 = {
  "name": "QL1",
  "chain": "QOM",
  "status": "incubating",
  "rpc": ["https://ql1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.qom.one"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Shiba Predator",
    "symbol": "QOM",
    "decimals": 18
  },
  "infoURL": "https://qom.one",
  "shortName": "qom",
  "chainId": 766,
  "networkId": 766,
  "icon": {
    "url": "ipfs://QmRc1kJ7AgcDL1BSoMYudatWHTrz27K6WNTwGifQb5V17D",
    "width": 518,
    "height": 518,
    "format": "png"
  },
  "explorers": [{
    "name": "QL1 Mainnet Explorer",
    "url": "https://mainnet.qom.one",
    "icon": "qom",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ql1"
};

var c776 = {
  "name": "OpenChain Testnet",
  "chain": "OpenChain Testnet",
  "rpc": [],
  "faucets": ["https://faucet.openchain.info/"],
  "nativeCurrency": {
    "name": "Openchain Testnet",
    "symbol": "TOPC",
    "decimals": 18
  },
  "infoURL": "https://testnet.openchain.info/",
  "shortName": "opc",
  "chainId": 776,
  "networkId": 776,
  "explorers": [{
    "name": "OPEN CHAIN TESTNET",
    "url": "https://testnet.openchain.info",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "openchain-testnet"
};

var c777 = {
  "name": "cheapETH",
  "chain": "cheapETH",
  "rpc": ["https://cheapeth.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node.cheapeth.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "cTH",
    "symbol": "cTH",
    "decimals": 18
  },
  "infoURL": "https://cheapeth.org/",
  "shortName": "cth",
  "chainId": 777,
  "networkId": 777,
  "testnet": false,
  "slug": "cheapeth"
};

var c787 = {
  "name": "Acala Network",
  "chain": "ACA",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Acala Token",
    "symbol": "ACA",
    "decimals": 18
  },
  "infoURL": "https://acala.network",
  "shortName": "aca",
  "chainId": 787,
  "networkId": 787,
  "slip44": 787,
  "testnet": false,
  "slug": "acala-network"
};

var c788 = {
  "name": "Aerochain Testnet",
  "chain": "Aerochain",
  "rpc": ["https://aerochain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.aerochain.id/"],
  "faucets": ["https://faucet.aerochain.id/"],
  "nativeCurrency": {
    "name": "Aerochain Testnet",
    "symbol": "TAero",
    "decimals": 18
  },
  "infoURL": "https://aerochaincoin.org/",
  "shortName": "taero",
  "chainId": 788,
  "networkId": 788,
  "explorers": [{
    "name": "aeroscan",
    "url": "https://testnet.aeroscan.id",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "aerochain-testnet"
};

var c800 = {
  "name": "Lucid Blockchain",
  "chain": "Lucid Blockchain",
  "icon": {
    "url": "ipfs://bafybeigxiyyxll4vst5cjjh732mr6zhsnligxubaldyiul2xdvvi6ibktu",
    "width": 800,
    "height": 800,
    "format": "png"
  },
  "rpc": ["https://lucid-blockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.lucidcoin.io"],
  "faucets": ["https://faucet.lucidcoin.io"],
  "nativeCurrency": {
    "name": "LUCID",
    "symbol": "LUCID",
    "decimals": 18
  },
  "infoURL": "https://lucidcoin.io",
  "shortName": "LUCID",
  "chainId": 800,
  "networkId": 800,
  "explorers": [{
    "name": "Lucid Explorer",
    "url": "https://explorer.lucidcoin.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "lucid-blockchain"
};

var c803 = {
  "name": "Haic",
  "chain": "Haic",
  "rpc": ["https://haic.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://orig.haichain.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Haicoin",
    "symbol": "HAIC",
    "decimals": 18
  },
  "infoURL": "https://www.haichain.io/",
  "shortName": "haic",
  "chainId": 803,
  "networkId": 803,
  "testnet": false,
  "slug": "haic"
};

var c808 = {
  "name": "Portal Fantasy Chain Test",
  "chain": "PF",
  "icon": {
    "url": "ipfs://QmeMa6aw3ebUKJdGgbzDgcVtggzp7cQdfSrmzMYmnt5ywc",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "rpc": ["https://portal-fantasy-chain-test.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://subnets.avax.network/portal-fantasy/testnet/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Portal Fantasy Token",
    "symbol": "PFT",
    "decimals": 18
  },
  "infoURL": "https://portalfantasy.io",
  "shortName": "PFTEST",
  "chainId": 808,
  "networkId": 808,
  "explorers": [],
  "testnet": true,
  "slug": "portal-fantasy-chain-test"
};

var c813 = {
  "name": "Qitmeer",
  "chain": "MEER",
  "rpc": ["https://qitmeer.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm-dataseed1.meerscan.io", "https://evm-dataseed2.meerscan.io", "https://evm-dataseed3.meerscan.io", "https://evm-dataseed.meerscan.com", "https://evm-dataseed1.meerscan.com", "https://evm-dataseed2.meerscan.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Qitmeer",
    "symbol": "MEER",
    "decimals": 18
  },
  "infoURL": "https://github.com/Qitmeer",
  "shortName": "meer",
  "chainId": 813,
  "networkId": 813,
  "slip44": 813,
  "icon": {
    "url": "ipfs://QmWSbMuCwQzhBB6GRLYqZ87n5cnpzpYCehCAMMQmUXj4mm",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "meerscan",
    "url": "https://evm.meerscan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "qitmeer"
};

var c820 = {
  "name": "Callisto Mainnet",
  "chain": "CLO",
  "rpc": ["https://callisto.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.callisto.network/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Callisto",
    "symbol": "CLO",
    "decimals": 18
  },
  "infoURL": "https://callisto.network",
  "shortName": "clo",
  "chainId": 820,
  "networkId": 1,
  "slip44": 820,
  "testnet": false,
  "slug": "callisto"
};

var c841 = {
  "name": "Taraxa Mainnet",
  "chain": "Tara",
  "icon": {
    "url": "ipfs://QmQhdktNyBeXmCaVuQpi1B4yXheSUKrJA17L4wpECKzG5D",
    "width": 310,
    "height": 310,
    "format": "png"
  },
  "rpc": ["https://taraxa.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.mainnet.taraxa.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tara",
    "symbol": "TARA",
    "decimals": 18
  },
  "infoURL": "https://taraxa.io",
  "shortName": "tara",
  "chainId": 841,
  "networkId": 841,
  "explorers": [{
    "name": "Taraxa Explorer",
    "url": "https://explorer.mainnet.taraxa.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "taraxa"
};

var c842 = {
  "name": "Taraxa Testnet",
  "chain": "Tara",
  "icon": {
    "url": "ipfs://QmQhdktNyBeXmCaVuQpi1B4yXheSUKrJA17L4wpECKzG5D",
    "width": 310,
    "height": 310,
    "format": "png"
  },
  "rpc": ["https://taraxa-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.taraxa.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tara",
    "symbol": "TARA",
    "decimals": 18
  },
  "infoURL": "https://taraxa.io",
  "shortName": "taratest",
  "chainId": 842,
  "networkId": 842,
  "explorers": [{
    "name": "Taraxa Explorer",
    "url": "https://explorer.testnet.taraxa.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "taraxa-testnet"
};

var c859 = {
  "name": "Zeeth Chain Dev",
  "chain": "ZeethChainDev",
  "rpc": ["https://zeeth-chain-dev.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.dev.zeeth.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Zeeth Token",
    "symbol": "ZTH",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "zeethdev",
  "chainId": 859,
  "networkId": 859,
  "explorers": [{
    "name": "Zeeth Explorer Dev",
    "url": "https://explorer.dev.zeeth.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "zeeth-chain-dev"
};

var c868 = {
  "name": "Fantasia Chain Mainnet",
  "chain": "FSC",
  "rpc": ["https://fantasia-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-data1.fantasiachain.com/", "https://mainnet-data2.fantasiachain.com/", "https://mainnet-data3.fantasiachain.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "FST",
    "symbol": "FST",
    "decimals": 18
  },
  "infoURL": "https://fantasia.technology/",
  "shortName": "FSCMainnet",
  "chainId": 868,
  "networkId": 868,
  "explorers": [{
    "name": "FSCScan",
    "url": "https://explorer.fantasiachain.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "fantasia-chain"
};

var c876 = {
  "name": "Bandai Namco Research Verse Mainnet",
  "chain": "Bandai Namco Research Verse",
  "icon": {
    "url": "ipfs://bafkreifhetalm3vpvjrg5u5d2momkcgvkz6rhltur5co3rslltbxzpr6yq",
    "width": 2048,
    "height": 2048,
    "format": "png"
  },
  "rpc": ["https://bandai-namco-research-verse.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.main.oasvrs.bnken.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OAS",
    "symbol": "OAS",
    "decimals": 18
  },
  "infoURL": "https://www.bandainamco-mirai.com/en/",
  "shortName": "BNKEN",
  "chainId": 876,
  "networkId": 876,
  "explorers": [{
    "name": "Bandai Namco Research Verse Explorer",
    "url": "https://explorer.main.oasvrs.bnken.net",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-248"
  },
  "testnet": false,
  "slug": "bandai-namco-research-verse"
};

var c877 = {
  "name": "Dexit Network",
  "chain": "DXT",
  "rpc": ["https://dexit-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://dxt.dexit.network"],
  "faucets": ["https://faucet.dexit.network"],
  "nativeCurrency": {
    "name": "Dexit network",
    "symbol": "DXT",
    "decimals": 18
  },
  "infoURL": "https://dexit.network",
  "shortName": "DXT",
  "chainId": 877,
  "networkId": 877,
  "explorers": [{
    "name": "dxtscan",
    "url": "https://dxtscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "dexit-network"
};

var c880 = {
  "name": "Ambros Chain Mainnet",
  "chain": "ambroschain",
  "rpc": ["https://ambros-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.ambros.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "AMBROS",
    "symbol": "AMBROS",
    "decimals": 18
  },
  "infoURL": "https://ambros.network",
  "shortName": "ambros",
  "chainId": 880,
  "networkId": 880,
  "explorers": [{
    "name": "Ambros Chain Explorer",
    "url": "https://ambrosscan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "ambros-chain"
};

var c888 = {
  "name": "Wanchain",
  "chain": "WAN",
  "rpc": ["https://wanchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://gwan-ssl.wandevs.org:56891/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Wancoin",
    "symbol": "WAN",
    "decimals": 18
  },
  "infoURL": "https://www.wanscan.org",
  "shortName": "wan",
  "chainId": 888,
  "networkId": 888,
  "slip44": 5718350,
  "testnet": false,
  "slug": "wanchain"
};

var c900 = {
  "name": "Garizon Testnet Stage0",
  "chain": "GAR",
  "icon": {
    "url": "ipfs://QmW3WRyuLZ95K8hvV2QN6rP5yWY98sSzWyVUxD2eUjXGrc",
    "width": 1024,
    "height": 613,
    "format": "png"
  },
  "rpc": ["https://garizon-testnet-stage0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://s0-testnet.garizon.net/rpc"],
  "faucets": ["https://faucet-testnet.garizon.com"],
  "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
  },
  "infoURL": "https://garizon.com",
  "shortName": "gar-test-s0",
  "chainId": 900,
  "networkId": 900,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer-testnet.garizon.com",
    "icon": "garizon",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "garizon-testnet-stage0"
};

var c901 = {
  "name": "Garizon Testnet Stage1",
  "chain": "GAR",
  "icon": {
    "url": "ipfs://QmW3WRyuLZ95K8hvV2QN6rP5yWY98sSzWyVUxD2eUjXGrc",
    "width": 1024,
    "height": 613,
    "format": "png"
  },
  "rpc": ["https://garizon-testnet-stage1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://s1-testnet.garizon.net/rpc"],
  "faucets": ["https://faucet-testnet.garizon.com"],
  "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
  },
  "infoURL": "https://garizon.com",
  "shortName": "gar-test-s1",
  "chainId": 901,
  "networkId": 901,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer-testnet.garizon.com",
    "icon": "garizon",
    "standard": "EIP3091"
  }],
  "parent": {
    "chain": "eip155-900",
    "type": "shard"
  },
  "testnet": true,
  "slug": "garizon-testnet-stage1"
};

var c902 = {
  "name": "Garizon Testnet Stage2",
  "chain": "GAR",
  "icon": {
    "url": "ipfs://QmW3WRyuLZ95K8hvV2QN6rP5yWY98sSzWyVUxD2eUjXGrc",
    "width": 1024,
    "height": 613,
    "format": "png"
  },
  "rpc": ["https://garizon-testnet-stage2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://s2-testnet.garizon.net/rpc"],
  "faucets": ["https://faucet-testnet.garizon.com"],
  "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
  },
  "infoURL": "https://garizon.com",
  "shortName": "gar-test-s2",
  "chainId": 902,
  "networkId": 902,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer-testnet.garizon.com",
    "icon": "garizon",
    "standard": "EIP3091"
  }],
  "parent": {
    "chain": "eip155-900",
    "type": "shard"
  },
  "testnet": true,
  "slug": "garizon-testnet-stage2"
};

var c903 = {
  "name": "Garizon Testnet Stage3",
  "chain": "GAR",
  "icon": {
    "url": "ipfs://QmW3WRyuLZ95K8hvV2QN6rP5yWY98sSzWyVUxD2eUjXGrc",
    "width": 1024,
    "height": 613,
    "format": "png"
  },
  "rpc": ["https://garizon-testnet-stage3.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://s3-testnet.garizon.net/rpc"],
  "faucets": ["https://faucet-testnet.garizon.com"],
  "nativeCurrency": {
    "name": "Garizon",
    "symbol": "GAR",
    "decimals": 18
  },
  "infoURL": "https://garizon.com",
  "shortName": "gar-test-s3",
  "chainId": 903,
  "networkId": 903,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer-testnet.garizon.com",
    "icon": "garizon",
    "standard": "EIP3091"
  }],
  "parent": {
    "chain": "eip155-900",
    "type": "shard"
  },
  "testnet": true,
  "slug": "garizon-testnet-stage3"
};

var c909 = {
  "name": "Portal Fantasy Chain",
  "chain": "PF",
  "icon": {
    "url": "ipfs://QmeMa6aw3ebUKJdGgbzDgcVtggzp7cQdfSrmzMYmnt5ywc",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Portal Fantasy Token",
    "symbol": "PFT",
    "decimals": 18
  },
  "infoURL": "https://portalfantasy.io",
  "shortName": "PF",
  "chainId": 909,
  "networkId": 909,
  "explorers": [],
  "status": "incubating",
  "testnet": false,
  "slug": "portal-fantasy-chain"
};

var c917 = {
  "name": "Rinia Testnet",
  "chain": "FIRE",
  "icon": {
    "url": "ipfs://QmRnnw2gtbU9TWJMLJ6tks7SN6HQV5rRugeoyN6csTYHt1",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://rinia-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rinia.rpc1.thefirechain.com"],
  "faucets": ["https://faucet.thefirechain.com"],
  "nativeCurrency": {
    "name": "Firechain",
    "symbol": "FIRE",
    "decimals": 18
  },
  "infoURL": "https://thefirechain.com",
  "shortName": "tfire",
  "chainId": 917,
  "networkId": 917,
  "explorers": [],
  "status": "incubating",
  "testnet": true,
  "slug": "rinia-testnet"
};

var c940 = {
  "name": "PulseChain Testnet",
  "shortName": "tpls",
  "chain": "tPLS",
  "chainId": 940,
  "networkId": 940,
  "infoURL": "https://pulsechain.com/",
  "rpc": ["https://pulsechain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.v2.testnet.pulsechain.com/", "wss://rpc.v2.testnet.pulsechain.com/"],
  "faucets": ["https://faucet.v2.testnet.pulsechain.com/"],
  "nativeCurrency": {
    "name": "Test Pulse",
    "symbol": "tPLS",
    "decimals": 18
  },
  "testnet": true,
  "slug": "pulsechain-testnet"
};

var c941 = {
  "name": "PulseChain Testnet v2b",
  "shortName": "t2bpls",
  "chain": "t2bPLS",
  "chainId": 941,
  "networkId": 941,
  "infoURL": "https://pulsechain.com/",
  "rpc": ["https://pulsechain-testnet-v2b.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.v2b.testnet.pulsechain.com/", "wss://rpc.v2b.testnet.pulsechain.com/"],
  "faucets": ["https://faucet.v2b.testnet.pulsechain.com/"],
  "nativeCurrency": {
    "name": "Test Pulse",
    "symbol": "tPLS",
    "decimals": 18
  },
  "testnet": true,
  "slug": "pulsechain-testnet-v2b"
};

var c942 = {
  "name": "PulseChain Testnet v3",
  "shortName": "t3pls",
  "chain": "t3PLS",
  "chainId": 942,
  "networkId": 942,
  "infoURL": "https://pulsechain.com/",
  "rpc": ["https://pulsechain-testnet-v3.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.v3.testnet.pulsechain.com/", "wss://rpc.v3.testnet.pulsechain.com/"],
  "faucets": ["https://faucet.v3.testnet.pulsechain.com/"],
  "nativeCurrency": {
    "name": "Test Pulse",
    "symbol": "tPLS",
    "decimals": 18
  },
  "testnet": true,
  "slug": "pulsechain-testnet-v3"
};

var c956 = {
  "name": "muNode Testnet",
  "chain": "munode",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://munode.dev/",
  "shortName": "munode",
  "chainId": 956,
  "networkId": 956,
  "testnet": true,
  "slug": "munode-testnet"
};

var c970 = {
  "name": "Oort Mainnet",
  "chain": "Oort Mainnet",
  "rpc": ["https://oort.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.oortech.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Oort",
    "symbol": "CCN",
    "decimals": 18
  },
  "infoURL": "https://oortech.com",
  "shortName": "ccn",
  "chainId": 970,
  "networkId": 970,
  "icon": {
    "url": "ipfs://QmZ1jbxFZcuotj3eZ6iKFrg9ZXnaV8AK6sGRa7ELrceWyD",
    "width": 1043,
    "height": 1079,
    "format": "png"
  },
  "testnet": false,
  "slug": "oort"
};

var c971 = {
  "name": "Oort Huygens",
  "chain": "Huygens",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Oort",
    "symbol": "CCN",
    "decimals": 18
  },
  "infoURL": "https://oortech.com",
  "shortName": "Huygens",
  "chainId": 971,
  "networkId": 971,
  "icon": {
    "url": "ipfs://QmZ1jbxFZcuotj3eZ6iKFrg9ZXnaV8AK6sGRa7ELrceWyD",
    "width": 1043,
    "height": 1079,
    "format": "png"
  },
  "testnet": false,
  "slug": "oort-huygens"
};

var c972 = {
  "name": "Oort Ascraeus",
  "title": "Oort Ascraeus",
  "chain": "Ascraeus",
  "rpc": ["https://oort-ascraeus.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://ascraeus-rpc.oortech.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Oort",
    "symbol": "CCNA",
    "decimals": 18
  },
  "infoURL": "https://oortech.com",
  "shortName": "Ascraeus",
  "chainId": 972,
  "networkId": 972,
  "icon": {
    "url": "ipfs://QmZ1jbxFZcuotj3eZ6iKFrg9ZXnaV8AK6sGRa7ELrceWyD",
    "width": 1043,
    "height": 1079,
    "format": "png"
  },
  "testnet": false,
  "slug": "oort-ascraeus"
};

var c977 = {
  "name": "Nepal Blockchain Network",
  "chain": "YETI",
  "rpc": ["https://nepal-blockchain-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.nepalblockchain.dev", "https://api.nepalblockchain.network"],
  "faucets": ["https://faucet.nepalblockchain.network"],
  "nativeCurrency": {
    "name": "Nepal Blockchain Network Ether",
    "symbol": "YETI",
    "decimals": 18
  },
  "infoURL": "https://nepalblockchain.network",
  "shortName": "yeti",
  "chainId": 977,
  "networkId": 977,
  "testnet": false,
  "slug": "nepal-blockchain-network"
};

var c980 = {
  "name": "TOP Mainnet EVM",
  "chain": "TOP",
  "icon": {
    "url": "ipfs://QmYikaM849eZrL8pGNeVhEHVTKWpxdGMvCY5oFBfZ2ndhd",
    "width": 800,
    "height": 800,
    "format": "png"
  },
  "rpc": ["https://top-evm.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://ethapi.topnetwork.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://www.topnetwork.org/",
  "shortName": "top_evm",
  "chainId": 980,
  "networkId": 0,
  "explorers": [{
    "name": "topscan.dev",
    "url": "https://www.topscan.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "top-evm"
};

var c985 = {
  "name": "Memo Smart Chain Mainnet",
  "chain": "MEMO",
  "rpc": ["https://memo-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://chain.metamemo.one:8501", "wss://chain.metamemo.one:16801"],
  "faucets": ["https://faucet.metamemo.one/"],
  "nativeCurrency": {
    "name": "Memo",
    "symbol": "CMEMO",
    "decimals": 18
  },
  "infoURL": "www.memolabs.org",
  "shortName": "memochain",
  "chainId": 985,
  "networkId": 985,
  "icon": {
    "url": "ipfs://bafkreig52paynhccs4o5ew6f7mk3xoqu2bqtitmfvlgnwarh2pm33gbdrq",
    "width": 128,
    "height": 128,
    "format": "png"
  },
  "explorers": [{
    "name": "Memo Mainnet Explorer",
    "url": "https://scan.metamemo.one:8080",
    "icon": "memo",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "memo-smart-chain"
};

var c989 = {
  "name": "TOP Mainnet",
  "chain": "TOP",
  "icon": {
    "url": "ipfs://QmYikaM849eZrL8pGNeVhEHVTKWpxdGMvCY5oFBfZ2ndhd",
    "width": 800,
    "height": 800,
    "format": "png"
  },
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "TOP",
    "symbol": "TOP",
    "decimals": 6
  },
  "infoURL": "https://www.topnetwork.org/",
  "shortName": "top",
  "chainId": 989,
  "networkId": 0,
  "explorers": [{
    "name": "topscan.dev",
    "url": "https://www.topscan.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "top"
};

var c998 = {
  "name": "Lucky Network",
  "chain": "LN",
  "rpc": ["https://lucky-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.luckynetwork.org", "wss://ws.lnscan.org", "https://rpc.lnscan.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Lucky",
    "symbol": "L99",
    "decimals": 18
  },
  "infoURL": "https://luckynetwork.org",
  "shortName": "ln",
  "chainId": 998,
  "networkId": 998,
  "icon": {
    "url": "ipfs://bafkreidmvcd5i7touug55hj45mf2pgabxamy5fziva7mtx5n664s3yap6m",
    "width": 205,
    "height": 28,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.luckynetwork.org",
    "standard": "none"
  }, {
    "name": "expedition",
    "url": "https://lnscan.org",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "lucky-network"
};

var c999 = {
  "name": "Wanchain Testnet",
  "chain": "WAN",
  "rpc": ["https://wanchain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://gwan-ssl.wandevs.org:46891/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Wancoin",
    "symbol": "WAN",
    "decimals": 18
  },
  "infoURL": "https://testnet.wanscan.org",
  "shortName": "twan",
  "chainId": 999,
  "networkId": 999,
  "testnet": true,
  "slug": "wanchain-testnet"
};

var c1000 = {
  "name": "GTON Mainnet",
  "chain": "GTON",
  "rpc": ["https://gton.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.gton.network/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GCD",
    "symbol": "GCD",
    "decimals": 18
  },
  "infoURL": "https://gton.capital",
  "shortName": "gton",
  "chainId": 1000,
  "networkId": 1000,
  "explorers": [{
    "name": "GTON Network Explorer",
    "url": "https://explorer.gton.network",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-1"
  },
  "testnet": false,
  "slug": "gton"
};

var c1001 = {
  "name": "Klaytn Testnet Baobab",
  "chain": "KLAY",
  "rpc": ["https://klaytn-testnet-baobab.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.baobab.klaytn.net:8651"],
  "faucets": ["https://baobab.wallet.klaytn.com/access?next=faucet"],
  "nativeCurrency": {
    "name": "KLAY",
    "symbol": "KLAY",
    "decimals": 18
  },
  "infoURL": "https://www.klaytn.com/",
  "shortName": "Baobab",
  "chainId": 1001,
  "networkId": 1001,
  "testnet": true,
  "slug": "klaytn-testnet-baobab"
};

var c1004 = {
  "name": "T-EKTA",
  "title": "EKTA Testnet T-EKTA",
  "chain": "T-EKTA",
  "rpc": ["https://t-ekta.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://test.ekta.io:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "T-EKTA",
    "symbol": "T-EKTA",
    "decimals": 18
  },
  "infoURL": "https://www.ekta.io",
  "shortName": "t-ekta",
  "chainId": 1004,
  "networkId": 1004,
  "icon": {
    "url": "ipfs://QmfMd564KUPK8eKZDwGCT71ZC2jMnUZqP6LCtLpup3rHH1",
    "width": 2100,
    "height": 2100,
    "format": "png"
  },
  "explorers": [{
    "name": "test-ektascan",
    "url": "https://test.ektascan.io",
    "icon": "ekta",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "t-ekta"
};

var c1007 = {
  "name": "Newton Testnet",
  "chain": "NEW",
  "rpc": ["https://newton-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc1.newchain.newtonproject.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Newton",
    "symbol": "NEW",
    "decimals": 18
  },
  "infoURL": "https://www.newtonproject.org/",
  "shortName": "tnew",
  "chainId": 1007,
  "networkId": 1007,
  "testnet": true,
  "slug": "newton-testnet"
};

var c1008 = {
  "name": "Eurus Mainnet",
  "chain": "EUN",
  "rpc": ["https://eurus.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.eurus.network/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Eurus",
    "symbol": "EUN",
    "decimals": 18
  },
  "infoURL": "https://eurus.network",
  "shortName": "eun",
  "chainId": 1008,
  "networkId": 1008,
  "icon": {
    "url": "ipfs://QmaGd5L9jGPbfyGXBFhu9gjinWJ66YtNrXq8x6Q98Eep9e",
    "width": 471,
    "height": 471,
    "format": "svg"
  },
  "explorers": [{
    "name": "eurusexplorer",
    "url": "https://explorer.eurus.network",
    "icon": "eurus",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "eurus"
};

var c1010 = {
  "name": "Evrice Network",
  "chain": "EVC",
  "rpc": ["https://evrice-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://meta.evrice.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Evrice",
    "symbol": "EVC",
    "decimals": 18
  },
  "infoURL": "https://evrice.com",
  "shortName": "EVC",
  "chainId": 1010,
  "networkId": 1010,
  "slip44": 1020,
  "testnet": false,
  "slug": "evrice-network"
};

var c1012 = {
  "name": "Newton",
  "chain": "NEW",
  "rpc": ["https://newton.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://global.rpc.mainnet.newtonproject.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Newton",
    "symbol": "NEW",
    "decimals": 18
  },
  "infoURL": "https://www.newtonproject.org/",
  "shortName": "new",
  "chainId": 1012,
  "networkId": 1012,
  "testnet": false,
  "slug": "newton"
};

var c1022 = {
  "name": "Sakura",
  "chain": "Sakura",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Sakura",
    "symbol": "SKU",
    "decimals": 18
  },
  "infoURL": "https://clover.finance/sakura",
  "shortName": "sku",
  "chainId": 1022,
  "networkId": 1022,
  "testnet": false,
  "slug": "sakura"
};

var c1023 = {
  "name": "Clover Testnet",
  "chain": "Clover",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Clover",
    "symbol": "CLV",
    "decimals": 18
  },
  "infoURL": "https://clover.finance",
  "shortName": "tclv",
  "chainId": 1023,
  "networkId": 1023,
  "testnet": true,
  "slug": "clover-testnet"
};

var c1024 = {
  "name": "CLV Parachain",
  "chain": "CLV",
  "rpc": ["https://clv-parachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api-para.clover.finance"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CLV",
    "symbol": "CLV",
    "decimals": 18
  },
  "infoURL": "https://clv.org",
  "shortName": "clv",
  "chainId": 1024,
  "networkId": 1024,
  "testnet": false,
  "slug": "clv-parachain"
};

var c1028 = {
  "name": "BitTorrent Chain Testnet",
  "chain": "BTTC",
  "rpc": ["https://bittorrent-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testrpc.bittorrentchain.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BitTorrent",
    "symbol": "BTT",
    "decimals": 18
  },
  "infoURL": "https://bittorrentchain.io/",
  "shortName": "tbtt",
  "chainId": 1028,
  "networkId": 1028,
  "explorers": [{
    "name": "testbttcscan",
    "url": "https://testscan.bittorrentchain.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "bittorrent-chain-testnet"
};

var c1030 = {
  "name": "Conflux eSpace",
  "chain": "Conflux",
  "rpc": ["https://conflux-espace.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm.confluxrpc.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CFX",
    "symbol": "CFX",
    "decimals": 18
  },
  "infoURL": "https://confluxnetwork.org",
  "shortName": "cfx",
  "chainId": 1030,
  "networkId": 1030,
  "icon": {
    "url": "ipfs://bafkreifj7n24u2dslfijfihwqvpdeigt5aj3k3sxv6s35lv75sxsfr3ojy",
    "width": 460,
    "height": 576,
    "format": "png"
  },
  "explorers": [{
    "name": "Conflux Scan",
    "url": "https://evm.confluxscan.net",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "conflux-espace"
};

var c1031 = {
  "name": "Proxy Network Testnet",
  "chain": "Proxy Network",
  "rpc": ["https://proxy-network-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://128.199.94.183:8041"],
  "faucets": [],
  "nativeCurrency": {
    "name": "PRX",
    "symbol": "PRX",
    "decimals": 18
  },
  "infoURL": "https://theproxy.network",
  "shortName": "prx",
  "chainId": 1031,
  "networkId": 1031,
  "explorers": [{
    "name": "proxy network testnet",
    "url": "http://testnet-explorer.theproxy.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "proxy-network-testnet"
};

var c1038 = {
  "name": "Bronos Testnet",
  "chain": "Bronos",
  "rpc": ["https://bronos-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm-testnet.bronos.org"],
  "faucets": ["https://faucet.bronos.org"],
  "nativeCurrency": {
    "name": "tBRO",
    "symbol": "tBRO",
    "decimals": 18
  },
  "infoURL": "https://bronos.org",
  "shortName": "bronos-testnet",
  "chainId": 1038,
  "networkId": 1038,
  "icon": {
    "url": "ipfs://bafybeifkgtmhnq4sxu6jn22i7ass7aih6ubodr77k6ygtu4tjbvpmkw2ga",
    "width": 500,
    "height": 500,
    "format": "png"
  },
  "explorers": [{
    "name": "Bronos Testnet Explorer",
    "url": "https://tbroscan.bronos.org",
    "standard": "none",
    "icon": "bronos"
  }],
  "testnet": true,
  "slug": "bronos-testnet"
};

var c1039 = {
  "name": "Bronos Mainnet",
  "chain": "Bronos",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "BRO",
    "symbol": "BRO",
    "decimals": 18
  },
  "infoURL": "https://bronos.org",
  "shortName": "bronos-mainnet",
  "chainId": 1039,
  "networkId": 1039,
  "icon": {
    "url": "ipfs://bafybeifkgtmhnq4sxu6jn22i7ass7aih6ubodr77k6ygtu4tjbvpmkw2ga",
    "width": 500,
    "height": 500,
    "format": "png"
  },
  "explorers": [{
    "name": "Bronos Explorer",
    "url": "https://broscan.bronos.org",
    "standard": "none",
    "icon": "bronos"
  }],
  "testnet": false,
  "slug": "bronos"
};

var c1088 = {
  "name": "Metis Andromeda Mainnet",
  "chain": "ETH",
  "rpc": ["https://metis-andromeda.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://andromeda.metis.io/?owner=1088"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Metis",
    "symbol": "METIS",
    "decimals": 18
  },
  "infoURL": "https://www.metis.io",
  "shortName": "metis-andromeda",
  "chainId": 1088,
  "networkId": 1088,
  "explorers": [{
    "name": "blockscout",
    "url": "https://andromeda-explorer.metis.io",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [{
      "url": "https://bridge.metis.io"
    }]
  },
  "testnet": false,
  "slug": "metis-andromeda"
};

var c1099 = {
  "name": "MOAC mainnet",
  "chain": "MOAC",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "MOAC",
    "symbol": "mc",
    "decimals": 18
  },
  "infoURL": "https://moac.io",
  "shortName": "moac",
  "chainId": 1099,
  "networkId": 1099,
  "slip44": 314,
  "explorers": [{
    "name": "moac explorer",
    "url": "https://explorer.moac.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "moac"
};

var c1111 = {
  "name": "WEMIX3.0 Mainnet",
  "chain": "WEMIX",
  "rpc": ["https://wemix3-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.wemix.com", "wss://ws.wemix.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "WEMIX",
    "symbol": "WEMIX",
    "decimals": 18
  },
  "infoURL": "https://wemix.com",
  "shortName": "wemix",
  "chainId": 1111,
  "networkId": 1111,
  "explorers": [{
    "name": "WEMIX Block Explorer",
    "url": "https://explorer.wemix.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "wemix3-0"
};

var c1112 = {
  "name": "WEMIX3.0 Testnet",
  "chain": "TWEMIX",
  "rpc": ["https://wemix3-0-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.test.wemix.com", "wss://ws.test.wemix.com"],
  "faucets": ["https://wallet.test.wemix.com/faucet"],
  "nativeCurrency": {
    "name": "TestnetWEMIX",
    "symbol": "tWEMIX",
    "decimals": 18
  },
  "infoURL": "https://wemix.com",
  "shortName": "twemix",
  "chainId": 1112,
  "networkId": 1112,
  "explorers": [{
    "name": "WEMIX Testnet Microscope",
    "url": "https://microscope.test.wemix.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "wemix3-0-testnet"
};

var c1115 = {
  "name": "Core Blockchain Testnet",
  "chain": "Core",
  "icon": {
    "url": "ipfs://QmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2",
    "width": 200,
    "height": 217,
    "format": "png"
  },
  "rpc": ["https://core-blockchain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.test.btcs.network/"],
  "faucets": ["https://scan.test.btcs.network/faucet"],
  "nativeCurrency": {
    "name": "Core Blockchain Testnet Native Token",
    "symbol": "tCORE",
    "decimals": 18
  },
  "infoURL": "https://www.coredao.org",
  "shortName": "tcore",
  "chainId": 1115,
  "networkId": 1115,
  "explorers": [{
    "name": "Core Scan Testnet",
    "url": "https://scan.test.btcs.network",
    "icon": "core",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "core-blockchain-testnet"
};

var c1116 = {
  "name": "Core Blockchain Mainnet",
  "chain": "Core",
  "icon": {
    "url": "ipfs://QmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2",
    "width": 200,
    "height": 217,
    "format": "png"
  },
  "rpc": ["https://core-blockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.coredao.org/", "https://rpc-core.icecreamswap.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Core Blockchain Native Token",
    "symbol": "CORE",
    "decimals": 18
  },
  "infoURL": "https://www.coredao.org",
  "shortName": "core",
  "chainId": 1116,
  "networkId": 1116,
  "explorers": [{
    "name": "Core Scan",
    "url": "https://scan.coredao.org",
    "icon": "core",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "core-blockchain"
};

var c1117 = {
  "name": "Dogcoin Mainnet",
  "chain": "DOGS",
  "icon": {
    "url": "ipfs://QmZCadkExKThak3msvszZjo6UnAbUJKE61dAcg4TixuMC3",
    "width": 160,
    "height": 171,
    "format": "png"
  },
  "rpc": ["https://dogcoin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.dogcoin.me"],
  "faucets": ["https://faucet.dogcoin.network"],
  "nativeCurrency": {
    "name": "Dogcoin",
    "symbol": "DOGS",
    "decimals": 18
  },
  "infoURL": "https://dogcoin.network",
  "shortName": "DOGSm",
  "chainId": 1117,
  "networkId": 1117,
  "explorers": [{
    "name": "Dogcoin",
    "url": "https://explorer.dogcoin.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "dogcoin"
};

var c1130 = {
  "name": "DeFiChain EVM Network Mainnet",
  "chain": "defichain-evm",
  "status": "incubating",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "DeFiChain",
    "symbol": "DFI",
    "decimals": 18
  },
  "infoURL": "https://meta.defichain.com/",
  "shortName": "DFI",
  "chainId": 1130,
  "networkId": 1130,
  "slip44": 1130,
  "icon": {
    "url": "ipfs://QmdR3YL9F95ajwVwfxAGoEzYwm9w7JNsPSfUPjSaQogVjK",
    "width": 512,
    "height": 512,
    "format": "svg"
  },
  "explorers": [],
  "testnet": false,
  "slug": "defichain-evm-network"
};

var c1131 = {
  "name": "DeFiChain EVM Network Testnet",
  "chain": "defichain-evm-testnet",
  "status": "incubating",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "DeFiChain",
    "symbol": "DFI",
    "decimals": 18
  },
  "infoURL": "https://meta.defichain.com/",
  "shortName": "DFI-T",
  "chainId": 1131,
  "networkId": 1131,
  "icon": {
    "url": "ipfs://QmdR3YL9F95ajwVwfxAGoEzYwm9w7JNsPSfUPjSaQogVjK",
    "width": 512,
    "height": 512,
    "format": "svg"
  },
  "explorers": [],
  "testnet": true,
  "slug": "defichain-evm-network-testnet"
};

var c1138 = {
  "name": "AmStar Testnet",
  "chain": "AmStar",
  "icon": {
    "url": "ipfs://Qmd4TMQdnYxaUZqnVddh5S37NGH72g2kkK38ccCEgdZz1C",
    "width": 599,
    "height": 563,
    "format": "png"
  },
  "rpc": ["https://amstar-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.amstarscan.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "SINSO",
    "symbol": "SINSO",
    "decimals": 18
  },
  "infoURL": "https://sinso.io",
  "shortName": "ASARt",
  "chainId": 1138,
  "networkId": 1138,
  "explorers": [{
    "name": "amstarscan-testnet",
    "url": "https://testnet.amstarscan.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "amstar-testnet"
};

var c1139 = {
  "name": "MathChain",
  "chain": "MATH",
  "rpc": ["https://mathchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mathchain-asia.maiziqianbao.net/rpc", "https://mathchain-us.maiziqianbao.net/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MathChain",
    "symbol": "MATH",
    "decimals": 18
  },
  "infoURL": "https://mathchain.org",
  "shortName": "MATH",
  "chainId": 1139,
  "networkId": 1139,
  "testnet": false,
  "slug": "mathchain"
};

var c1140 = {
  "name": "MathChain Testnet",
  "chain": "MATH",
  "rpc": ["https://mathchain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://galois-hk.maiziqianbao.net/rpc"],
  "faucets": ["https://scan.boka.network/#/Galois/faucet"],
  "nativeCurrency": {
    "name": "MathChain",
    "symbol": "MATH",
    "decimals": 18
  },
  "infoURL": "https://mathchain.org",
  "shortName": "tMATH",
  "chainId": 1140,
  "networkId": 1140,
  "testnet": true,
  "slug": "mathchain-testnet"
};

var c1177 = {
  "name": "Smart Host Teknoloji TESTNET",
  "chain": "SHT",
  "rpc": ["https://smart-host-teknoloji-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://s2.tl.web.tr:4041"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Smart Host Teknoloji TESTNET",
    "symbol": "tSHT",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://smart-host.com.tr",
  "shortName": "sht",
  "chainId": 1177,
  "networkId": 1177,
  "icon": {
    "url": "ipfs://QmTrLGHyQ1Le25Q7EgNSF5Qq8D2SocKvroDkLqurdBuSQQ",
    "width": 1655,
    "height": 1029,
    "format": "png"
  },
  "explorers": [{
    "name": "Smart Host Teknoloji TESTNET Explorer",
    "url": "https://s2.tl.web.tr:4000",
    "icon": "smarthost",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "smart-host-teknoloji-testnet"
};

var c1197 = {
  "name": "Iora Chain",
  "chain": "IORA",
  "icon": {
    "url": "ipfs://bafybeiehps5cqdhqottu2efo4jeehwpkz5rbux3cjxd75rm6rjm4sgs2wi",
    "width": 250,
    "height": 250,
    "format": "png"
  },
  "rpc": ["https://iora-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://dataseed.iorachain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Iora",
    "symbol": "IORA",
    "decimals": 18
  },
  "infoURL": "https://iorachain.com",
  "shortName": "iora",
  "chainId": 1197,
  "networkId": 1197,
  "explorers": [{
    "name": "ioraexplorer",
    "url": "https://explorer.iorachain.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "iora-chain"
};

var c1201 = {
  "name": "Evanesco Testnet",
  "chain": "Evanesco Testnet",
  "rpc": ["https://evanesco-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://seed5.evanesco.org:8547"],
  "faucets": [],
  "nativeCurrency": {
    "name": "AVIS",
    "symbol": "AVIS",
    "decimals": 18
  },
  "infoURL": "https://evanesco.org/",
  "shortName": "avis",
  "chainId": 1201,
  "networkId": 1201,
  "testnet": true,
  "slug": "evanesco-testnet"
};

var c1202 = {
  "name": "World Trade Technical Chain Mainnet",
  "chain": "WTT",
  "rpc": ["https://world-trade-technical-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.cadaut.com", "wss://rpc.cadaut.com/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "World Trade Token",
    "symbol": "WTT",
    "decimals": 18
  },
  "infoURL": "http://www.cadaut.com",
  "shortName": "wtt",
  "chainId": 1202,
  "networkId": 2048,
  "explorers": [{
    "name": "WTTScout",
    "url": "https://explorer.cadaut.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "world-trade-technical-chain"
};

var c1213 = {
  "name": "Popcateum Mainnet",
  "chain": "POPCATEUM",
  "rpc": ["https://popcateum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://dataseed.popcateum.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Popcat",
    "symbol": "POP",
    "decimals": 18
  },
  "infoURL": "https://popcateum.org",
  "shortName": "popcat",
  "chainId": 1213,
  "networkId": 1213,
  "explorers": [{
    "name": "popcateum explorer",
    "url": "https://explorer.popcateum.org",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "popcateum"
};

var c1214 = {
  "name": "EnterChain Mainnet",
  "chain": "ENTER",
  "rpc": ["https://enterchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://tapi.entercoin.net/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EnterCoin",
    "symbol": "ENTER",
    "decimals": 18
  },
  "infoURL": "https://entercoin.net",
  "shortName": "enter",
  "chainId": 1214,
  "networkId": 1214,
  "icon": {
    "url": "ipfs://Qmb2UYVc1MjLPi8vhszWRxqBJYoYkWQVxDJRSmtrgk6j2E",
    "width": 64,
    "height": 64,
    "format": "png"
  },
  "explorers": [{
    "name": "Enter Explorer - Expenter",
    "url": "https://explorer.entercoin.net",
    "icon": "enter",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "enterchain"
};

var c1229 = {
  "name": "Exzo Network Mainnet",
  "chain": "EXZO",
  "icon": {
    "url": "ipfs://QmeYpc2JfEsHa2Bh11SKRx3sgDtMeg6T8KpXNLepBEKnbJ",
    "width": 128,
    "height": 128,
    "format": "png"
  },
  "rpc": ["https://exzo-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.exzo.technology"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Exzo",
    "symbol": "XZO",
    "decimals": 18
  },
  "infoURL": "https://exzo.network",
  "shortName": "xzo",
  "chainId": 1229,
  "networkId": 1229,
  "explorers": [{
    "name": "blockscout",
    "url": "https://exzoscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "exzo-network"
};

var c1230 = {
  "name": "Ultron Testnet",
  "chain": "Ultron",
  "icon": {
    "url": "ipfs://QmS4W4kY7XYBA4f52vuuytXh3YaTcNBXF14V9tEY6SNqhz",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://ultron-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://ultron-dev.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ultron",
    "symbol": "ULX",
    "decimals": 18
  },
  "infoURL": "https://ultron.foundation",
  "shortName": "UltronTestnet",
  "chainId": 1230,
  "networkId": 1230,
  "explorers": [{
    "name": "Ultron Testnet Explorer",
    "url": "https://explorer.ultron-dev.io",
    "icon": "ultron",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "ultron-testnet"
};

var c1231 = {
  "name": "Ultron Mainnet",
  "chain": "Ultron",
  "icon": {
    "url": "ipfs://QmS4W4kY7XYBA4f52vuuytXh3YaTcNBXF14V9tEY6SNqhz",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://ultron.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://ultron-rpc.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ultron",
    "symbol": "ULX",
    "decimals": 18
  },
  "infoURL": "https://ultron.foundation",
  "shortName": "UtronMainnet",
  "chainId": 1231,
  "networkId": 1231,
  "explorers": [{
    "name": "Ultron Explorer",
    "url": "https://ulxscan.com",
    "icon": "ultron",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "ultron"
};

var c1234 = {
  "name": "Step Network",
  "title": "Step Main Network",
  "chain": "STEP",
  "icon": {
    "url": "ipfs://QmVp9jyb3UFW71867yVtymmiRw7dPY4BTnsp3hEjr9tn8L",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://step-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.step.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "FITFI",
    "symbol": "FITFI",
    "decimals": 18
  },
  "infoURL": "https://step.network",
  "shortName": "step",
  "chainId": 1234,
  "networkId": 1234,
  "explorers": [{
    "name": "StepScan",
    "url": "https://stepscan.io",
    "icon": "step",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-43114",
    "bridges": [{
      "url": "https://bridge.step.network"
    }]
  },
  "testnet": false,
  "slug": "step-network"
};

var c1246 = {
  "name": "OM Platform Mainnet",
  "chain": "omplatform",
  "rpc": ["https://om-platform.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-cnx.omplatform.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OMCOIN",
    "symbol": "OM",
    "decimals": 18
  },
  "infoURL": "https://omplatform.com/",
  "shortName": "om",
  "chainId": 1246,
  "networkId": 1246,
  "explorers": [{
    "name": "OMSCAN - Expenter",
    "url": "https://omscan.omplatform.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "om-platform"
};

var c1252 = {
  "name": "CIC Chain Testnet",
  "chain": "CICT",
  "rpc": ["https://cic-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testapi.cicscan.com"],
  "faucets": ["https://cicfaucet.com"],
  "nativeCurrency": {
    "name": "Crazy Internet Coin",
    "symbol": "CICT",
    "decimals": 18
  },
  "infoURL": "https://www.cicchain.net",
  "shortName": "CICT",
  "chainId": 1252,
  "networkId": 1252,
  "icon": {
    "url": "ipfs://QmNekc5gpyrQkeDQcmfJLBrP5fa6GMarB13iy6aHVdQJDU",
    "width": 1024,
    "height": 768,
    "format": "png"
  },
  "explorers": [{
    "name": "CICscan",
    "url": "https://testnet.cicscan.com",
    "icon": "cicchain",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "cic-chain-testnet"
};

var c1280 = {
  "name": "HALO Mainnet",
  "chain": "HALO",
  "rpc": ["https://halo.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://nodes.halo.land"],
  "faucets": [],
  "nativeCurrency": {
    "name": "HALO",
    "symbol": "HO",
    "decimals": 18
  },
  "infoURL": "https://halo.land/#/",
  "shortName": "HO",
  "chainId": 1280,
  "networkId": 1280,
  "explorers": [{
    "name": "HALOexplorer",
    "url": "https://browser.halo.land",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "halo"
};

var c1284 = {
  "name": "Moonbeam",
  "chain": "MOON",
  "rpc": ["https://moonbeam.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.api.moonbeam.network", "wss://wss.api.moonbeam.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Glimmer",
    "symbol": "GLMR",
    "decimals": 18
  },
  "infoURL": "https://moonbeam.network/networks/moonbeam/",
  "shortName": "mbeam",
  "chainId": 1284,
  "networkId": 1284,
  "explorers": [{
    "name": "moonscan",
    "url": "https://moonbeam.moonscan.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "moonbeam"
};

var c1285 = {
  "name": "Moonriver",
  "chain": "MOON",
  "rpc": ["https://moonriver.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.api.moonriver.moonbeam.network", "wss://wss.api.moonriver.moonbeam.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Moonriver",
    "symbol": "MOVR",
    "decimals": 18
  },
  "infoURL": "https://moonbeam.network/networks/moonriver/",
  "shortName": "mriver",
  "chainId": 1285,
  "networkId": 1285,
  "explorers": [{
    "name": "moonscan",
    "url": "https://moonriver.moonscan.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "moonriver"
};

var c1287 = {
  "name": "Moonbase Alpha",
  "chain": "MOON",
  "rpc": ["https://moonbase-alpha.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.api.moonbase.moonbeam.network", "wss://wss.api.moonbase.moonbeam.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dev",
    "symbol": "DEV",
    "decimals": 18
  },
  "infoURL": "https://docs.moonbeam.network/networks/testnet/",
  "shortName": "mbase",
  "chainId": 1287,
  "networkId": 1287,
  "explorers": [{
    "name": "moonscan",
    "url": "https://moonbase.moonscan.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "moonbase-alpha"
};

var c1288 = {
  "name": "Moonrock",
  "chain": "MOON",
  "rpc": ["https://moonrock.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.api.moonrock.moonbeam.network", "wss://wss.api.moonrock.moonbeam.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Rocs",
    "symbol": "ROC",
    "decimals": 18
  },
  "infoURL": "https://docs.moonbeam.network/learn/platform/networks/overview/",
  "shortName": "mrock",
  "chainId": 1288,
  "networkId": 1288,
  "testnet": false,
  "slug": "moonrock"
};

var c1294 = {
  "name": "Bobabeam",
  "chain": "Bobabeam",
  "rpc": ["https://bobabeam.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bobabeam.boba.network", "wss://wss.bobabeam.boba.network", "https://replica.bobabeam.boba.network", "wss://replica-wss.bobabeam.boba.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Boba Token",
    "symbol": "BOBA",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "Bobabeam",
  "chainId": 1294,
  "networkId": 1294,
  "explorers": [{
    "name": "Bobabeam block explorer",
    "url": "https://blockexplorer.bobabeam.boba.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "bobabeam"
};

var c1297 = {
  "name": "Bobabase Testnet",
  "chain": "Bobabase Testnet",
  "rpc": ["https://bobabase-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bobabase.boba.network", "wss://wss.bobabase.boba.network", "https://replica.bobabase.boba.network", "wss://replica-wss.bobabase.boba.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Boba Token",
    "symbol": "BOBA",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "Bobabase",
  "chainId": 1297,
  "networkId": 1297,
  "explorers": [{
    "name": "Bobabase block explorer",
    "url": "https://blockexplorer.bobabase.boba.network",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "bobabase-testnet"
};

var c1311 = {
  "name": "Dos Fuji Subnet",
  "chain": "DOS",
  "rpc": ["https://dos-fuji-subnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://test.doschain.com/jsonrpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dos Native Token",
    "symbol": "DOS",
    "decimals": 18
  },
  "infoURL": "http://doschain.io/",
  "shortName": "DOS",
  "chainId": 1311,
  "networkId": 1311,
  "explorers": [{
    "name": "dos-testnet",
    "url": "https://test.doscan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "dos-fuji-subnet"
};

var c1314 = {
  "name": "Alyx Mainnet",
  "chain": "ALYX",
  "rpc": ["https://alyx.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.alyxchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Alyx Chain Native Token",
    "symbol": "ALYX",
    "decimals": 18
  },
  "infoURL": "https://www.alyxchain.com",
  "shortName": "alyx",
  "chainId": 1314,
  "networkId": 1314,
  "explorers": [{
    "name": "alyxscan",
    "url": "https://www.alyxscan.com",
    "standard": "EIP3091"
  }],
  "icon": {
    "url": "ipfs://bafkreifd43fcvh77mdcwjrpzpnlhthounc6b4u645kukqpqhduaveatf6i",
    "width": 2481,
    "height": 2481,
    "format": "png"
  },
  "testnet": false,
  "slug": "alyx"
};

var c1319 = {
  "name": "Aitd Mainnet",
  "chain": "AITD",
  "icon": {
    "url": "ipfs://QmXbBMMhjTTGAGjmqMpJm3ufFrtdkfEXCFyXYgz7nnZzsy",
    "width": 160,
    "height": 160,
    "format": "png"
  },
  "rpc": ["https://aitd.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://walletrpc.aitd.io", "https://node.aitd.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "AITD Mainnet",
    "symbol": "AITD",
    "decimals": 18
  },
  "infoURL": "https://www.aitd.io/",
  "shortName": "aitd",
  "chainId": 1319,
  "networkId": 1319,
  "explorers": [{
    "name": "AITD Chain Explorer Mainnet",
    "url": "https://aitd-explorer-new.aitd.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "aitd"
};

var c1320 = {
  "name": "Aitd Testnet",
  "chain": "AITD",
  "icon": {
    "url": "ipfs://QmXbBMMhjTTGAGjmqMpJm3ufFrtdkfEXCFyXYgz7nnZzsy",
    "width": 160,
    "height": 160,
    "format": "png"
  },
  "rpc": ["https://aitd-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://http-testnet.aitd.io"],
  "faucets": ["https://aitd-faucet-pre.aitdcoin.com/"],
  "nativeCurrency": {
    "name": "AITD Testnet",
    "symbol": "AITD",
    "decimals": 18
  },
  "infoURL": "https://www.aitd.io/",
  "shortName": "aitdtestnet",
  "chainId": 1320,
  "networkId": 1320,
  "explorers": [{
    "name": "AITD Chain Explorer Testnet",
    "url": "https://block-explorer-testnet.aitd.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "aitd-testnet"
};

var c1338 = {
  "name": "Elysium Testnet",
  "title": "An L1, carbon-neutral, tree-planting, metaverse dedicated blockchain created by VulcanForged",
  "chain": "Elysium",
  "rpc": ["https://elysium-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://elysium-test-rpc.vulcanforged.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "LAVA",
    "symbol": "LAVA",
    "decimals": 18
  },
  "infoURL": "https://elysiumscan.vulcanforged.com",
  "shortName": "ELST",
  "chainId": 1338,
  "networkId": 1338,
  "explorers": [{
    "name": "Elysium testnet explorer",
    "url": "https://elysium-explorer.vulcanforged.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "elysium-testnet"
};

var c1339 = {
  "name": "Elysium Mainnet",
  "title": "An L1, carbon-neutral, tree-planting, metaverse dedicated blockchain created by VulcanForged",
  "chain": "Elysium",
  "rpc": ["https://elysium.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.elysiumchain.tech/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "LAVA",
    "symbol": "LAVA",
    "decimals": 18
  },
  "infoURL": "https://elysiumscan.vulcanforged.com",
  "shortName": "ELSM",
  "chainId": 1339,
  "networkId": 1339,
  "explorers": [{
    "name": "Elysium mainnet explorer",
    "url": "https://explorer.elysiumchain.tech",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "elysium"
};

var c1353 = {
  "name": "CIC Chain Mainnet",
  "chain": "CIC",
  "rpc": ["https://cic-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://xapi.cicscan.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Crazy Internet Coin",
    "symbol": "CIC",
    "decimals": 18
  },
  "infoURL": "https://www.cicchain.net",
  "shortName": "CIC",
  "chainId": 1353,
  "networkId": 1353,
  "icon": {
    "url": "ipfs://QmNekc5gpyrQkeDQcmfJLBrP5fa6GMarB13iy6aHVdQJDU",
    "width": 1024,
    "height": 768,
    "format": "png"
  },
  "explorers": [{
    "name": "CICscan",
    "url": "https://cicscan.com",
    "icon": "cicchain",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "cic-chain"
};

var c1388 = {
  "name": "AmStar Mainnet",
  "chain": "AmStar",
  "icon": {
    "url": "ipfs://Qmd4TMQdnYxaUZqnVddh5S37NGH72g2kkK38ccCEgdZz1C",
    "width": 599,
    "height": 563,
    "format": "png"
  },
  "rpc": ["https://amstar.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.amstarscan.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "SINSO",
    "symbol": "SINSO",
    "decimals": 18
  },
  "infoURL": "https://sinso.io",
  "shortName": "ASAR",
  "chainId": 1388,
  "networkId": 1388,
  "explorers": [{
    "name": "amstarscan",
    "url": "https://mainnet.amstarscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "amstar"
};

var c1433 = {
  "name": "Rikeza Network Mainnet",
  "title": "Rikeza Network Mainnet",
  "chain": "Rikeza",
  "rpc": ["https://rikeza-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.rikscan.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Rikeza",
    "symbol": "RIK",
    "decimals": 18
  },
  "infoURL": "https://rikeza.io",
  "shortName": "RIK",
  "chainId": 1433,
  "networkId": 1433,
  "explorers": [{
    "name": "Rikeza Blockchain explorer",
    "url": "https://rikscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "rikeza-network"
};

var c1442 = {
  "name": "Polygon zkEVM Testnet",
  "title": "Polygon zkEVM Testnet",
  "chain": "Polygon",
  "rpc": ["https://polygon-zkevm-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.public.zkevm-test.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://polygon.technology/solutions/polygon-zkevm/",
  "shortName": "testnet-zkEVM-mango",
  "chainId": 1442,
  "networkId": 1442,
  "explorers": [{
    "name": "Polygon zkEVM explorer",
    "url": "https://explorer.public.zkevm-test.net",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "polygon-zkevm-testnet"
};

var c1455 = {
  "name": "Ctex Scan Blockchain",
  "chain": "Ctex Scan Blockchain",
  "icon": {
    "url": "ipfs://bafkreid5evn4qovxo6msuekizv5zn7va62tea7w2zpdx5sskconebuhqle",
    "width": 800,
    "height": 800,
    "format": "png"
  },
  "rpc": ["https://ctex-scan-blockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.ctexscan.com/"],
  "faucets": ["https://faucet.ctexscan.com"],
  "nativeCurrency": {
    "name": "CTEX",
    "symbol": "CTEX",
    "decimals": 18
  },
  "infoURL": "https://ctextoken.io",
  "shortName": "CTEX",
  "chainId": 1455,
  "networkId": 1455,
  "explorers": [{
    "name": "Ctex Scan Explorer",
    "url": "https://ctexscan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "ctex-scan-blockchain"
};

var c1506 = {
  "name": "Sherpax Mainnet",
  "chain": "Sherpax Mainnet",
  "rpc": ["https://sherpax.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.sherpax.io/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "KSX",
    "symbol": "KSX",
    "decimals": 18
  },
  "infoURL": "https://sherpax.io/",
  "shortName": "Sherpax",
  "chainId": 1506,
  "networkId": 1506,
  "explorers": [{
    "name": "Sherpax Mainnet Explorer",
    "url": "https://evm.sherpax.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "sherpax"
};

var c1507 = {
  "name": "Sherpax Testnet",
  "chain": "Sherpax Testnet",
  "rpc": ["https://sherpax-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sherpax-testnet.chainx.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "KSX",
    "symbol": "KSX",
    "decimals": 18
  },
  "infoURL": "https://sherpax.io/",
  "shortName": "SherpaxTestnet",
  "chainId": 1507,
  "networkId": 1507,
  "explorers": [{
    "name": "Sherpax Testnet Explorer",
    "url": "https://evm-pre.sherpax.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "sherpax-testnet"
};

var c1515 = {
  "name": "Beagle Messaging Chain",
  "chain": "BMC",
  "rpc": ["https://beagle-messaging-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://beagle.chat/eth"],
  "faucets": ["https://faucet.beagle.chat/"],
  "nativeCurrency": {
    "name": "Beagle",
    "symbol": "BG",
    "decimals": 18
  },
  "infoURL": "https://beagle.chat/",
  "shortName": "beagle",
  "chainId": 1515,
  "networkId": 1515,
  "explorers": [{
    "name": "Beagle Messaging Chain Explorer",
    "url": "https://eth.beagle.chat",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "beagle-messaging-chain"
};

var c1618 = {
  "name": "Catecoin Chain Mainnet",
  "chain": "Catechain",
  "rpc": ["https://catecoin-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://send.catechain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Catecoin",
    "symbol": "CATE",
    "decimals": 18
  },
  "infoURL": "https://catechain.com",
  "shortName": "cate",
  "chainId": 1618,
  "networkId": 1618,
  "testnet": false,
  "slug": "catecoin-chain"
};

var c1620 = {
  "name": "Atheios",
  "chain": "ATH",
  "rpc": ["https://atheios.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://wallet.atheios.com:8797"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Atheios Ether",
    "symbol": "ATH",
    "decimals": 18
  },
  "infoURL": "https://atheios.com",
  "shortName": "ath",
  "chainId": 1620,
  "networkId": 11235813,
  "slip44": 1620,
  "testnet": false,
  "slug": "atheios"
};

var c1657 = {
  "name": "Btachain",
  "chain": "btachain",
  "rpc": ["https://btachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://dataseed1.btachain.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin Asset",
    "symbol": "BTA",
    "decimals": 18
  },
  "infoURL": "https://bitcoinasset.io/",
  "shortName": "bta",
  "chainId": 1657,
  "networkId": 1657,
  "testnet": false,
  "slug": "btachain"
};

var c1662 = {
  "name": "Horizen Yuma Testnet",
  "shortName": "Yuma",
  "chain": "Yuma",
  "icon": {
    "url": "ipfs://QmSFMBk3rMyu45Sy9KQHjgArFj4HdywANNYrSosLMUdcti",
    "width": 1213,
    "height": 1213,
    "format": "png"
  },
  "rpc": ["https://horizen-yuma-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://yuma-testnet.horizenlabs.io/ethv1"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": ["https://yuma-testnet-faucet.horizen.io"],
  "nativeCurrency": {
    "name": "Testnet Zen",
    "symbol": "tZEN",
    "decimals": 18
  },
  "infoURL": "https://horizen.io/",
  "chainId": 1662,
  "networkId": 1662,
  "slip44": 121,
  "explorers": [{
    "name": "Yuma Testnet Block Explorer",
    "url": "https://yuma-explorer.horizen.io",
    "icon": "eon",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "horizen-yuma-testnet"
};

var c1688 = {
  "name": "LUDAN Mainnet",
  "chain": "LUDAN",
  "rpc": ["https://ludan.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.ludan.org/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "LUDAN",
    "symbol": "LUDAN",
    "decimals": 18
  },
  "infoURL": "https://www.ludan.org/",
  "shortName": "LUDAN",
  "icon": {
    "url": "ipfs://bafkreigzeanzqgxrzzep45t776ovbwi242poqxbryuu2go5eedeuwwcsay",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "chainId": 1688,
  "networkId": 1688,
  "testnet": false,
  "slug": "ludan"
};

var c1701 = {
  "name": "Anytype EVM Chain",
  "chain": "ETH",
  "icon": {
    "url": "ipfs://QmaARJiAQUn4Z6wG8GLEry3kTeBB3k6RfHzSZU9SPhBgcG",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "rpc": ["https://anytype-evm-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://geth.anytype.io"],
  "faucets": ["https://evm.anytype.io/faucet"],
  "nativeCurrency": {
    "name": "ANY",
    "symbol": "ANY",
    "decimals": 18
  },
  "infoURL": "https://evm.anytype.io",
  "shortName": "AnytypeChain",
  "chainId": 1701,
  "networkId": 1701,
  "explorers": [{
    "name": "Anytype Explorer",
    "url": "https://explorer.anytype.io",
    "icon": "any",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "anytype-evm-chain"
};

var c1707 = {
  "name": "TBSI Mainnet",
  "title": "Thai Blockchain Service Infrastructure Mainnet",
  "chain": "TBSI",
  "rpc": ["https://tbsi.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.blockchain.or.th"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Jinda",
    "symbol": "JINDA",
    "decimals": 18
  },
  "infoURL": "https://blockchain.or.th",
  "shortName": "TBSI",
  "chainId": 1707,
  "networkId": 1707,
  "testnet": false,
  "slug": "tbsi"
};

var c1708 = {
  "name": "TBSI Testnet",
  "title": "Thai Blockchain Service Infrastructure Testnet",
  "chain": "TBSI",
  "rpc": ["https://tbsi-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.blockchain.or.th"],
  "faucets": ["https://faucet.blockchain.or.th"],
  "nativeCurrency": {
    "name": "Jinda",
    "symbol": "JINDA",
    "decimals": 18
  },
  "infoURL": "https://blockchain.or.th",
  "shortName": "tTBSI",
  "chainId": 1708,
  "networkId": 1708,
  "testnet": true,
  "slug": "tbsi-testnet"
};

var c1718 = {
  "name": "Palette Chain Mainnet",
  "chain": "PLT",
  "rpc": ["https://palette-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://palette-rpc.com:22000"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Palette Token",
    "symbol": "PLT",
    "decimals": 18
  },
  "features": [],
  "infoURL": "https://hashpalette.com/",
  "shortName": "PaletteChain",
  "chainId": 1718,
  "networkId": 1718,
  "icon": {
    "url": "ipfs://QmPCEGZD1p1keTT2YfPp725azx1r9Ci41hejeUuGL2whFA",
    "width": 800,
    "height": 800,
    "format": "png"
  },
  "explorers": [{
    "name": "Palettescan",
    "url": "https://palettescan.com",
    "icon": "PLT",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "palette-chain"
};

var c1804 = {
  "name": "Kerleano",
  "title": "Proof of Carbon Reduction testnet",
  "chain": "CRC",
  "status": "active",
  "rpc": ["https://kerleano.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://cacib-saturn-test.francecentral.cloudapp.azure.com", "wss://cacib-saturn-test.francecentral.cloudapp.azure.com:9443"],
  "faucets": ["https://github.com/ethereum-pocr/kerleano/blob/main/docs/faucet.md"],
  "nativeCurrency": {
    "name": "Carbon Reduction Coin",
    "symbol": "CRC",
    "decimals": 18
  },
  "infoURL": "https://github.com/ethereum-pocr/kerleano",
  "shortName": "kerleano",
  "chainId": 1804,
  "networkId": 1804,
  "explorers": [{
    "name": "Lite Explorer",
    "url": "https://ethereum-pocr.github.io/explorer/kerleano",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "kerleano"
};

var c1807 = {
  "name": "Rabbit Analog Testnet Chain",
  "chain": "rAna",
  "icon": {
    "url": "ipfs://QmdfbjjF3ZzN2jTkH9REgrA8jDS6A6c21n7rbWSVbSnvQc",
    "width": 310,
    "height": 251,
    "format": "svg"
  },
  "rpc": ["https://rabbit-analog-testnet-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rabbit.analog-rpc.com"],
  "faucets": ["https://analogfaucet.com"],
  "nativeCurrency": {
    "name": "Rabbit Analog Test Chain Native Token ",
    "symbol": "rAna",
    "decimals": 18
  },
  "infoURL": "https://rabbit.analogscan.com",
  "shortName": "rAna",
  "chainId": 1807,
  "networkId": 1807,
  "explorers": [{
    "name": "blockscout",
    "url": "https://rabbit.analogscan.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "rabbit-analog-testnet-chain"
};

var c1818 = {
  "name": "Cube Chain Mainnet",
  "chain": "Cube",
  "icon": {
    "url": "ipfs://QmbENgHTymTUUArX5MZ2XXH69WGenirU3oamkRD448hYdz",
    "width": 282,
    "height": 250,
    "format": "png"
  },
  "rpc": ["https://cube-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://http-mainnet.cube.network", "wss://ws-mainnet.cube.network", "https://http-mainnet-sg.cube.network", "wss://ws-mainnet-sg.cube.network", "https://http-mainnet-us.cube.network", "wss://ws-mainnet-us.cube.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Cube Chain Native Token",
    "symbol": "CUBE",
    "decimals": 18
  },
  "infoURL": "https://www.cube.network",
  "shortName": "cube",
  "chainId": 1818,
  "networkId": 1818,
  "slip44": 1818,
  "explorers": [{
    "name": "cube-scan",
    "url": "https://cubescan.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "cube-chain"
};

var c1819 = {
  "name": "Cube Chain Testnet",
  "chain": "Cube",
  "icon": {
    "url": "ipfs://QmbENgHTymTUUArX5MZ2XXH69WGenirU3oamkRD448hYdz",
    "width": 282,
    "height": 250,
    "format": "png"
  },
  "rpc": ["https://cube-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://http-testnet.cube.network", "wss://ws-testnet.cube.network", "https://http-testnet-sg.cube.network", "wss://ws-testnet-sg.cube.network", "https://http-testnet-jp.cube.network", "wss://ws-testnet-jp.cube.network", "https://http-testnet-us.cube.network", "wss://ws-testnet-us.cube.network"],
  "faucets": ["https://faucet.cube.network"],
  "nativeCurrency": {
    "name": "Cube Chain Test Native Token",
    "symbol": "CUBET",
    "decimals": 18
  },
  "infoURL": "https://www.cube.network",
  "shortName": "cubet",
  "chainId": 1819,
  "networkId": 1819,
  "slip44": 1819,
  "explorers": [{
    "name": "cubetest-scan",
    "url": "https://testnet.cubescan.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "cube-chain-testnet"
};

var c1856 = {
  "name": "Teslafunds",
  "chain": "TSF",
  "rpc": ["https://teslafunds.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://tsfapi.europool.me"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Teslafunds Ether",
    "symbol": "TSF",
    "decimals": 18
  },
  "infoURL": "https://teslafunds.io",
  "shortName": "tsf",
  "chainId": 1856,
  "networkId": 1,
  "testnet": false,
  "slug": "teslafunds"
};

var c1881 = {
  "name": "Gitshock Cartenz Testnet",
  "chain": "Gitshock Cartenz",
  "icon": {
    "url": "ipfs://bafkreifqpj5jkjazvh24muc7wv4r22tihzzl75cevgecxhvojm4ls6mzpq",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://gitshock-cartenz-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.cartenz.works"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "Gitshock Cartenz",
    "symbol": "tGTFX",
    "decimals": 18
  },
  "infoURL": "https://gitshock.com",
  "shortName": "gitshockchain",
  "chainId": 1881,
  "networkId": 1881,
  "explorers": [{
    "name": "blockscout",
    "url": "https://scan.cartenz.works",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "gitshock-cartenz-testnet"
};

var c1890 = {
  "name": "Lightlink Phoenix Mainnet",
  "chain": "Lightlink Phoenix Mainnet",
  "icon": {
    "url": "ipfs://QmNRUoMgx16hurD3au3ou5A9rmTLYmre8WiGmQEPFmP2Vo",
    "width": 600,
    "height": 600,
    "format": "png"
  },
  "rpc": ["https://lightlink-phoenix.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://replicator-01.phoenix.lightlink.io/rpc/v1", "https://replicator-02.phoenix.lightlink.io/rpc/v1"],
  "features": [{
    "name": "EIP155"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ethereum",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://lightlink.io",
  "shortName": "lightlink_phoenix",
  "chainId": 1890,
  "networkId": 1890,
  "explorers": [{
    "name": "phoenix",
    "url": "https://phoenix.lightlink.io",
    "icon": "lightlink",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "lightlink-phoenix"
};

var c1891 = {
  "name": "Lightlink Pegasus Testnet",
  "chain": "Lightlink Pegasus Testnet",
  "icon": {
    "url": "ipfs://QmNRUoMgx16hurD3au3ou5A9rmTLYmre8WiGmQEPFmP2Vo",
    "width": 600,
    "height": 600,
    "format": "png"
  },
  "rpc": ["https://lightlink-pegasus-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://replicator-01.pegasus.lightlink.io/rpc/v1", "https://replicator-02.pegasus.lightlink.io/rpc/v1"],
  "features": [{
    "name": "EIP155"
  }],
  "faucets": ["https://pegasus-faucet-react.vercel.app"],
  "nativeCurrency": {
    "name": "Ethereum",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://lightlink.io",
  "shortName": "lightlink_pegasus",
  "chainId": 1891,
  "networkId": 1891,
  "explorers": [{
    "name": "pegasus",
    "url": "https://pegasus.lightlink.io",
    "icon": "lightlink",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "lightlink-pegasus-testnet"
};

var c1898 = {
  "name": "BON Network",
  "chain": "BON",
  "rpc": ["https://bon-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://rpc.boyanet.org:8545", "ws://rpc.boyanet.org:8546"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BOYACoin",
    "symbol": "BOY",
    "decimals": 18
  },
  "infoURL": "https://boyanet.org",
  "shortName": "boya",
  "chainId": 1898,
  "networkId": 1,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.boyanet.org:4001",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "bon-network"
};

var c1907 = {
  "name": "Bitcichain Mainnet",
  "chain": "BITCI",
  "icon": {
    "url": "ipfs://QmbxmfWw5sVMASz5EbR1DCgLfk8PnqpSJGQKpYuEUpoxqn",
    "width": 64,
    "height": 64,
    "format": "svg"
  },
  "rpc": ["https://bitcichain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.bitci.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitci",
    "symbol": "BITCI",
    "decimals": 18
  },
  "infoURL": "https://www.bitcichain.com",
  "shortName": "bitci",
  "chainId": 1907,
  "networkId": 1907,
  "explorers": [{
    "name": "Bitci Explorer",
    "url": "https://bitciexplorer.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "bitcichain"
};

var c1908 = {
  "name": "Bitcichain Testnet",
  "chain": "TBITCI",
  "icon": {
    "url": "ipfs://QmbxmfWw5sVMASz5EbR1DCgLfk8PnqpSJGQKpYuEUpoxqn",
    "width": 64,
    "height": 64,
    "format": "svg"
  },
  "rpc": ["https://bitcichain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.bitcichain.com"],
  "faucets": ["https://faucet.bitcichain.com"],
  "nativeCurrency": {
    "name": "Test Bitci",
    "symbol": "TBITCI",
    "decimals": 18
  },
  "infoURL": "https://www.bitcichain.com",
  "shortName": "tbitci",
  "chainId": 1908,
  "networkId": 1908,
  "explorers": [{
    "name": "Bitci Explorer Testnet",
    "url": "https://testnet.bitciexplorer.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "bitcichain-testnet"
};

var c1945 = {
  "name": "ONUS Chain Testnet",
  "title": "ONUS Chain Testnet",
  "chain": "onus",
  "rpc": ["https://onus-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.onuschain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONUS",
    "symbol": "ONUS",
    "decimals": 18
  },
  "infoURL": "https://onuschain.io",
  "shortName": "onus-testnet",
  "chainId": 1945,
  "networkId": 1945,
  "explorers": [{
    "name": "Onus explorer testnet",
    "url": "https://explorer-testnet.onuschain.io",
    "icon": "onus",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "onus-chain-testnet"
};

var c1951 = {
  "name": "D-Chain Mainnet",
  "chain": "D-Chain",
  "rpc": ["https://d-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.d-chain.network/ext/bc/2ZiR1Bro5E59siVuwdNuRFzqL95NkvkbzyLBdrsYR9BLSHV7H4/rpc"],
  "nativeCurrency": {
    "name": "DOINX",
    "symbol": "DOINX",
    "decimals": 18
  },
  "shortName": "dchain-mainnet",
  "chainId": 1951,
  "networkId": 1951,
  "icon": {
    "url": "ipfs://QmV2vhTqS9UyrX9Q6BSCbK4JrKBnS8ErHvstMjfb2oVWaj",
    "width": 700,
    "height": 495,
    "format": "png"
  },
  "faucets": [],
  "infoURL": "",
  "testnet": false,
  "slug": "d-chain"
};

var c1967 = {
  "name": "Eleanor",
  "title": "Metatime Testnet Eleanor",
  "chain": "MTC",
  "rpc": ["https://eleanor.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.metatime.com/eleanor", "wss://ws.metatime.com/eleanor"],
  "faucets": ["https://faucet.metatime.com/eleanor"],
  "nativeCurrency": {
    "name": "Eleanor Metacoin",
    "symbol": "MTC",
    "decimals": 18
  },
  "infoURL": "https://eleanor.metatime.com",
  "shortName": "mtc",
  "chainId": 1967,
  "networkId": 1967,
  "explorers": [{
    "name": "metaexplorer-eleanor",
    "url": "https://explorer.metatime.com/eleanor",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "eleanor"
};

var c1971 = {
  "name": "Atelier",
  "title": "Atelier Test Network",
  "chain": "ALTR",
  "rpc": ["https://atelier.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://1971.network/atlr", "wss://1971.network/atlr"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ATLR",
    "symbol": "ATLR",
    "decimals": 18
  },
  "infoURL": "https://1971.network/",
  "shortName": "atlr",
  "chainId": 1971,
  "networkId": 1971,
  "icon": {
    "url": "ipfs://bafkreigcquvoalec3ll2m26v4wsx5enlxwyn6nk2mgfqwncyqrgwivla5u",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "testnet": true,
  "slug": "atelier"
};

var c1975 = {
  "name": "ONUS Chain Mainnet",
  "title": "ONUS Chain Mainnet",
  "chain": "onus",
  "rpc": ["https://onus-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.onuschain.io", "wss://ws.onuschain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONUS",
    "symbol": "ONUS",
    "decimals": 18
  },
  "infoURL": "https://onuschain.io",
  "shortName": "onus-mainnet",
  "chainId": 1975,
  "networkId": 1975,
  "explorers": [{
    "name": "Onus explorer mainnet",
    "url": "https://explorer.onuschain.io",
    "icon": "onus",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "onus-chain"
};

var c1984 = {
  "name": "Eurus Testnet",
  "chain": "EUN",
  "rpc": ["https://eurus-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.eurus.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Eurus",
    "symbol": "EUN",
    "decimals": 18
  },
  "infoURL": "https://eurus.network",
  "shortName": "euntest",
  "chainId": 1984,
  "networkId": 1984,
  "icon": {
    "url": "ipfs://QmaGd5L9jGPbfyGXBFhu9gjinWJ66YtNrXq8x6Q98Eep9e",
    "width": 471,
    "height": 471,
    "format": "svg"
  },
  "explorers": [{
    "name": "testnetexplorer",
    "url": "https://testnetexplorer.eurus.network",
    "icon": "eurus",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "eurus-testnet"
};

var c1987 = {
  "name": "EtherGem",
  "chain": "EGEM",
  "rpc": ["https://ethergem.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://jsonrpc.egem.io/custom"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EtherGem Ether",
    "symbol": "EGEM",
    "decimals": 18
  },
  "infoURL": "https://egem.io",
  "shortName": "egem",
  "chainId": 1987,
  "networkId": 1987,
  "slip44": 1987,
  "testnet": false,
  "slug": "ethergem"
};

var c1994 = {
  "name": "Ekta",
  "chain": "EKTA",
  "rpc": ["https://ekta.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://main.ekta.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EKTA",
    "symbol": "EKTA",
    "decimals": 18
  },
  "infoURL": "https://www.ekta.io",
  "shortName": "ekta",
  "chainId": 1994,
  "networkId": 1994,
  "icon": {
    "url": "ipfs://QmfMd564KUPK8eKZDwGCT71ZC2jMnUZqP6LCtLpup3rHH1",
    "width": 2100,
    "height": 2100,
    "format": "png"
  },
  "explorers": [{
    "name": "ektascan",
    "url": "https://ektascan.io",
    "icon": "ekta",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ekta"
};

var c1995 = {
  "name": "edeXa Testnet",
  "chain": "edeXa TestNetwork",
  "rpc": ["https://edexa-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.edexa.com/rpc", "https://io-dataseed1.testnet.edexa.io-market.com/rpc"],
  "faucets": ["https://faucet.edexa.com/"],
  "nativeCurrency": {
    "name": "EDEXA",
    "symbol": "EDX",
    "decimals": 18
  },
  "infoURL": "https://edexa.com/",
  "shortName": "edx",
  "chainId": 1995,
  "networkId": 1995,
  "icon": {
    "url": "ipfs://QmSgvmLpRsCiu2ySqyceA5xN4nwi7URJRNEZLffwEKXdoR",
    "width": 1028,
    "height": 1042,
    "format": "png"
  },
  "explorers": [{
    "name": "edexa-testnet",
    "url": "https://explorer.edexa.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "edexa-testnet"
};

var c2000 = {
  "name": "Dogechain Mainnet",
  "chain": "DC",
  "icon": {
    "url": "ipfs://QmNS6B6L8FfgGSMTEi2SxD3bK5cdmKPNtQKcYaJeRWrkHs",
    "width": 732,
    "height": 732,
    "format": "png"
  },
  "rpc": ["https://dogechain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.dogechain.dog", "https://rpc-us.dogechain.dog", "https://rpc01.dogechain.dog"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dogecoin",
    "symbol": "DOGE",
    "decimals": 18
  },
  "infoURL": "https://dogechain.dog",
  "shortName": "dc",
  "chainId": 2000,
  "networkId": 2000,
  "explorers": [{
    "name": "dogechain explorer",
    "url": "https://explorer.dogechain.dog",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "dogechain"
};

var c2001 = {
  "name": "Milkomeda C1 Mainnet",
  "chain": "milkAda",
  "icon": {
    "url": "ipfs://QmdoUtvHDybu5ppYBZT8BMRp6AqByVSoQs8nFwKbaS55jd",
    "width": 367,
    "height": 367,
    "format": "svg"
  },
  "rpc": ["https://milkomeda-c1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mainnet-cardano-evm.c1.milkomeda.com", "wss://rpc-mainnet-cardano-evm.c1.milkomeda.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "milkAda",
    "symbol": "mADA",
    "decimals": 18
  },
  "infoURL": "https://milkomeda.com",
  "shortName": "milkAda",
  "chainId": 2001,
  "networkId": 2001,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://explorer-mainnet-cardano-evm.c1.milkomeda.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "milkomeda-c1"
};

var c2002 = {
  "name": "Milkomeda A1 Mainnet",
  "chain": "milkALGO",
  "icon": {
    "url": "ipfs://QmdoUtvHDybu5ppYBZT8BMRp6AqByVSoQs8nFwKbaS55jd",
    "width": 367,
    "height": 367,
    "format": "svg"
  },
  "rpc": ["https://milkomeda-a1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mainnet-algorand-rollup.a1.milkomeda.com", "wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "milkALGO",
    "symbol": "mALGO",
    "decimals": 18
  },
  "infoURL": "https://milkomeda.com",
  "shortName": "milkALGO",
  "chainId": 2002,
  "networkId": 2002,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://explorer-mainnet-algorand-rollup.a1.milkomeda.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "milkomeda-a1"
};

var c2008 = {
  "name": "CloudWalk Testnet",
  "chain": "CloudWalk Testnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "CloudWalk Native Token",
    "symbol": "CWN",
    "decimals": 18
  },
  "infoURL": "https://cloudwalk.io",
  "shortName": "cloudwalk_testnet",
  "chainId": 2008,
  "networkId": 2008,
  "explorers": [{
    "name": "CloudWalk Testnet Explorer",
    "url": "https://explorer.testnet.cloudwalk.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "cloudwalk-testnet"
};

var c2009 = {
  "name": "CloudWalk Mainnet",
  "chain": "CloudWalk Mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "CloudWalk Native Token",
    "symbol": "CWN",
    "decimals": 18
  },
  "infoURL": "https://cloudwalk.io",
  "shortName": "cloudwalk_mainnet",
  "chainId": 2009,
  "networkId": 2009,
  "explorers": [{
    "name": "CloudWalk Mainnet Explorer",
    "url": "https://explorer.mainnet.cloudwalk.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "cloudwalk"
};

var c2016 = {
  "name": "MainnetZ Mainnet",
  "chain": "NetZ",
  "icon": {
    "url": "ipfs://QmT5gJ5weBiLT3GoYuF5yRTRLdPLCVZ3tXznfqW7M8fxgG",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "rpc": ["https://z-mainnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.mainnetz.io"],
  "faucets": ["https://faucet.mainnetz.io"],
  "nativeCurrency": {
    "name": "MainnetZ",
    "symbol": "NetZ",
    "decimals": 18
  },
  "infoURL": "https://mainnetz.io",
  "shortName": "NetZm",
  "chainId": 2016,
  "networkId": 2016,
  "explorers": [{
    "name": "MainnetZ",
    "url": "https://explorer.mainnetz.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "z-mainnet"
};

var c2018 = {
  "name": "PublicMint Devnet",
  "title": "Public Mint Devnet",
  "chain": "PublicMint",
  "rpc": ["https://publicmint-devnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.dev.publicmint.io:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "USD",
    "symbol": "USD",
    "decimals": 18
  },
  "infoURL": "https://publicmint.com",
  "shortName": "pmint_dev",
  "chainId": 2018,
  "networkId": 2018,
  "slip44": 60,
  "explorers": [{
    "name": "PublicMint Explorer",
    "url": "https://explorer.dev.publicmint.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "publicmint-devnet"
};

var c2019 = {
  "name": "PublicMint Testnet",
  "title": "Public Mint Testnet",
  "chain": "PublicMint",
  "rpc": ["https://publicmint-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.tst.publicmint.io:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "USD",
    "symbol": "USD",
    "decimals": 18
  },
  "infoURL": "https://publicmint.com",
  "shortName": "pmint_test",
  "chainId": 2019,
  "networkId": 2019,
  "slip44": 60,
  "explorers": [{
    "name": "PublicMint Explorer",
    "url": "https://explorer.tst.publicmint.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "publicmint-testnet"
};

var c2020 = {
  "name": "PublicMint Mainnet",
  "title": "Public Mint Mainnet",
  "chain": "PublicMint",
  "rpc": ["https://publicmint.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.publicmint.io:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "USD",
    "symbol": "USD",
    "decimals": 18
  },
  "infoURL": "https://publicmint.com",
  "shortName": "pmint",
  "chainId": 2020,
  "networkId": 2020,
  "slip44": 60,
  "explorers": [{
    "name": "PublicMint Explorer",
    "url": "https://explorer.publicmint.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "publicmint"
};

var c2021 = {
  "name": "Edgeware EdgeEVM Mainnet",
  "chain": "EDG",
  "icon": {
    "url": "ipfs://QmS3ERgAKYTmV7bSWcUPSvrrCC9wHQYxtZqEQYx9Rw4RGA",
    "width": 352,
    "height": 304,
    "format": "png"
  },
  "rpc": ["https://edgeware-edgeevm.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://edgeware-evm.jelliedowl.net", "https://mainnet2.edgewa.re/evm", "https://mainnet3.edgewa.re/evm", "https://mainnet4.edgewa.re/evm", "https://mainnet5.edgewa.re/evm", "wss://edgeware.jelliedowl.net", "wss://mainnet2.edgewa.re", "wss://mainnet3.edgewa.re", "wss://mainnet4.edgewa.re", "wss://mainnet5.edgewa.re"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "Edgeware",
    "symbol": "EDG",
    "decimals": 18
  },
  "infoURL": "https://edgeware.io",
  "shortName": "edg",
  "chainId": 2021,
  "networkId": 2021,
  "slip44": 523,
  "explorers": [{
    "name": "Edgscan by Bharathcoorg",
    "url": "https://edgscan.live",
    "standard": "EIP3091"
  }, {
    "name": "Subscan",
    "url": "https://edgeware.subscan.io",
    "standard": "none",
    "icon": "subscan"
  }],
  "testnet": false,
  "slug": "edgeware-edgeevm"
};

var c2022 = {
  "name": "Beresheet BereEVM Testnet",
  "chain": "EDG",
  "rpc": ["https://beresheet-bereevm-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://beresheet-evm.jelliedowl.net", "wss://beresheet.jelliedowl.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Testnet EDG",
    "symbol": "tEDG",
    "decimals": 18
  },
  "infoURL": "https://edgeware.io/build",
  "shortName": "edgt",
  "chainId": 2022,
  "networkId": 2022,
  "explorers": [{
    "name": "Edgscan by Bharathcoorg",
    "url": "https://testnet.edgscan.live",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "beresheet-bereevm-testnet"
};

var c2023 = {
  "name": "Taycan Testnet",
  "chain": "Taycan",
  "rpc": ["https://taycan-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://test-taycan.hupayx.io"],
  "faucets": ["https://ttaycan-faucet.hupayx.io/"],
  "nativeCurrency": {
    "name": "test-Shuffle",
    "symbol": "tSFL",
    "decimals": 18
  },
  "infoURL": "https://hupayx.io",
  "shortName": "taycan-testnet",
  "chainId": 2023,
  "networkId": 2023,
  "icon": {
    "url": "ipfs://bafkreidvjcc73v747lqlyrhgbnkvkdepdvepo6baj6hmjsmjtvdyhmzzmq",
    "width": 1000,
    "height": 1206,
    "format": "png"
  },
  "explorers": [{
    "name": "Taycan Explorer(Blockscout)",
    "url": "https://evmscan-test.hupayx.io",
    "standard": "none",
    "icon": "shuffle"
  }, {
    "name": "Taycan Cosmos Explorer",
    "url": "https://cosmoscan-test.hupayx.io",
    "standard": "none",
    "icon": "shuffle"
  }],
  "testnet": true,
  "slug": "taycan-testnet"
};

var c2025 = {
  "name": "Rangers Protocol Mainnet",
  "chain": "Rangers",
  "icon": {
    "url": "ipfs://QmXR5e5SDABWfQn6XT9uMsVYAo5Bv7vUv4jVs8DFqatZWG",
    "width": 2000,
    "height": 2000,
    "format": "png"
  },
  "rpc": ["https://rangers-protocol.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.rangersprotocol.com/api/jsonrpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Rangers Protocol Gas",
    "symbol": "RPG",
    "decimals": 18
  },
  "infoURL": "https://rangersprotocol.com",
  "shortName": "rpg",
  "chainId": 2025,
  "networkId": 2025,
  "slip44": 1008,
  "explorers": [{
    "name": "rangersscan",
    "url": "https://scan.rangersprotocol.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "rangers-protocol"
};

var c2043 = {
  "name": "OriginTrail Parachain",
  "chain": "OTP",
  "rpc": ["https://origintrail-parachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://astrosat.origintrail.network", "wss://parachain-rpc.origin-trail.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OriginTrail Parachain Token",
    "symbol": "OTP",
    "decimals": 12
  },
  "infoURL": "https://parachain.origintrail.io",
  "shortName": "otp",
  "chainId": 2043,
  "networkId": 2043,
  "testnet": false,
  "slug": "origintrail-parachain"
};

var c2047 = {
  "name": "Stratos Testnet",
  "chain": "STOS",
  "rpc": ["https://stratos-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://web3-testnet-rpc.thestratos.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "STOS",
    "symbol": "STOS",
    "decimals": 18
  },
  "infoURL": "https://www.thestratos.org",
  "shortName": "stos-testnet",
  "chainId": 2047,
  "networkId": 2047,
  "explorers": [{
    "name": "Stratos EVM Explorer (Blockscout)",
    "url": "https://web3-testnet-explorer.thestratos.org",
    "standard": "none"
  }, {
    "name": "Stratos Cosmos Explorer (BigDipper)",
    "url": "https://big-dipper-dev.thestratos.org",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "stratos-testnet"
};

var c2048 = {
  "name": "Stratos Mainnet",
  "chain": "STOS",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "STOS",
    "symbol": "STOS",
    "decimals": 18
  },
  "infoURL": "https://www.thestratos.org",
  "shortName": "stos-mainnet",
  "chainId": 2048,
  "networkId": 2048,
  "status": "incubating",
  "testnet": false,
  "slug": "stratos"
};

var c2077 = {
  "name": "Quokkacoin Mainnet",
  "chain": "Qkacoin",
  "rpc": ["https://quokkacoin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.qkacoin.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Qkacoin",
    "symbol": "QKA",
    "decimals": 18
  },
  "infoURL": "https://qkacoin.org",
  "shortName": "QKA",
  "chainId": 2077,
  "networkId": 2077,
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.qkacoin.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quokkacoin"
};

var c2100 = {
  "name": "Ecoball Mainnet",
  "chain": "ECO",
  "rpc": ["https://ecoball.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.ecoball.org/ecoball/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ecoball Coin",
    "symbol": "ECO",
    "decimals": 18
  },
  "infoURL": "https://ecoball.org",
  "shortName": "eco",
  "chainId": 2100,
  "networkId": 2100,
  "explorers": [{
    "name": "Ecoball Explorer",
    "url": "https://scan.ecoball.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ecoball"
};

var c2101 = {
  "name": "Ecoball Testnet Espuma",
  "chain": "ECO",
  "rpc": ["https://ecoball-testnet-espuma.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.ecoball.org/espuma/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Espuma Coin",
    "symbol": "ECO",
    "decimals": 18
  },
  "infoURL": "https://ecoball.org",
  "shortName": "esp",
  "chainId": 2101,
  "networkId": 2101,
  "explorers": [{
    "name": "Ecoball Testnet Explorer",
    "url": "https://espuma-scan.ecoball.org",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "ecoball-testnet-espuma"
};

var c2109 = {
  "name": "Exosama Network",
  "chain": "EXN",
  "rpc": ["https://exosama-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.exosama.com", "wss://rpc.exosama.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Sama Token",
    "symbol": "SAMA",
    "decimals": 18
  },
  "infoURL": "https://moonsama.com",
  "shortName": "exn",
  "chainId": 2109,
  "networkId": 2109,
  "slip44": 2109,
  "icon": {
    "url": "ipfs://QmaQxfwpXYTomUd24PMx5tKjosupXcm99z1jL1XLq9LWBS",
    "width": 468,
    "height": 468,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.exosama.com",
    "icon": "blockscout",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "exosama-network"
};

var c2122 = {
  "name": "Metaplayerone Mainnet",
  "chain": "METAD",
  "icon": {
    "url": "ipfs://QmZyxS9BfRGYWWDtvrV6qtthCYV4TwdjLoH2sF6MkiTYFf",
    "width": 1280,
    "height": 1280,
    "format": "png"
  },
  "rpc": ["https://metaplayerone.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.metaplayer.one/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "METAD",
    "symbol": "METAD",
    "decimals": 18
  },
  "infoURL": "https://docs.metaplayer.one/",
  "shortName": "Metad",
  "chainId": 2122,
  "networkId": 2122,
  "explorers": [{
    "name": "Metad Scan",
    "url": "https://scan.metaplayer.one",
    "icon": "metad",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "metaplayerone"
};

var c2151 = {
  "name": "BOSagora Mainnet",
  "chain": "ETH",
  "rpc": ["https://bosagora.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.bosagora.org", "https://rpc.bosagora.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BOSAGORA",
    "symbol": "BOA",
    "decimals": 18
  },
  "infoURL": "https://docs.bosagora.org",
  "shortName": "boa",
  "chainId": 2151,
  "networkId": 2151,
  "icon": {
    "url": "ipfs://QmW3CT4SHmso5dRJdsjR8GL1qmt79HkdAebCn2uNaWXFYh",
    "width": 256,
    "height": 257,
    "format": "png"
  },
  "explorers": [{
    "name": "BOASCAN",
    "url": "https://boascan.io",
    "icon": "agora",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "bosagora"
};

var c2152 = {
  "name": "Findora Mainnet",
  "chain": "Findora",
  "rpc": ["https://findora.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mainnet.findora.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "FRA",
    "symbol": "FRA",
    "decimals": 18
  },
  "infoURL": "https://findora.org/",
  "shortName": "fra",
  "chainId": 2152,
  "networkId": 2152,
  "explorers": [{
    "name": "findorascan",
    "url": "https://evm.findorascan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "findora"
};

var c2153 = {
  "name": "Findora Testnet",
  "chain": "Testnet-anvil",
  "rpc": ["https://findora-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://prod-testnet.prod.findora.org:8545/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "FRA",
    "symbol": "FRA",
    "decimals": 18
  },
  "infoURL": "https://findora.org/",
  "shortName": "findora-testnet",
  "chainId": 2153,
  "networkId": 2153,
  "explorers": [{
    "name": "findorascan",
    "url": "https://testnet-anvil.evm.findorascan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "findora-testnet"
};

var c2154 = {
  "name": "Findora Forge",
  "chain": "Testnet-forge",
  "rpc": ["https://findora-forge.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://prod-forge.prod.findora.org:8545/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "FRA",
    "symbol": "FRA",
    "decimals": 18
  },
  "infoURL": "https://findora.org/",
  "shortName": "findora-forge",
  "chainId": 2154,
  "networkId": 2154,
  "explorers": [{
    "name": "findorascan",
    "url": "https://testnet-forge.evm.findorascan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "findora-forge"
};

var c2203 = {
  "name": "Bitcoin EVM",
  "chain": "Bitcoin EVM",
  "rpc": ["https://bitcoin-evm.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://connect.bitcoinevm.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin",
    "symbol": "eBTC",
    "decimals": 18
  },
  "infoURL": "https://bitcoinevm.com",
  "shortName": "eBTC",
  "chainId": 2203,
  "networkId": 2203,
  "icon": {
    "url": "ipfs://bafkreic4aq265oaf6yze7ba5okefqh6vnqudyrz6ovukvbnrlhet36itle",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "explorers": [{
    "name": "Explorer",
    "url": "https://explorer.bitcoinevm.com",
    "icon": "ebtc",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "bitcoin-evm"
};

var c2213 = {
  "name": "Evanesco Mainnet",
  "chain": "EVA",
  "rpc": ["https://evanesco.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://seed4.evanesco.org:8546"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EVA",
    "symbol": "EVA",
    "decimals": 18
  },
  "infoURL": "https://evanesco.org/",
  "shortName": "evanesco",
  "chainId": 2213,
  "networkId": 2213,
  "icon": {
    "url": "ipfs://QmZbmGYdfbMRrWJore3c7hyD6q7B5pXHJqTSNjbZZUK6V8",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "explorers": [{
    "name": "Evanesco Explorer",
    "url": "https://explorer.evanesco.org",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "evanesco"
};

var c2221 = {
  "name": "Kava EVM Testnet",
  "chain": "KAVA",
  "rpc": ["https://kava-evm-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm.testnet.kava.io", "wss://wevm.testnet.kava.io"],
  "faucets": ["https://faucet.kava.io"],
  "nativeCurrency": {
    "name": "TKava",
    "symbol": "TKAVA",
    "decimals": 18
  },
  "infoURL": "https://www.kava.io",
  "shortName": "tkava",
  "chainId": 2221,
  "networkId": 2221,
  "icon": {
    "url": "ipfs://QmdpRTk6oL1HRW9xC6cAc4Rnf9gs6zgdAcr4Z3HcLztusm",
    "width": 1186,
    "height": 360,
    "format": "svg"
  },
  "explorers": [{
    "name": "Kava Testnet Explorer",
    "url": "https://explorer.testnet.kava.io",
    "standard": "EIP3091",
    "icon": "kava"
  }],
  "testnet": true,
  "slug": "kava-evm-testnet"
};

var c2222 = {
  "name": "Kava EVM",
  "chain": "KAVA",
  "rpc": ["https://kava-evm.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm.kava.io", "https://evm2.kava.io", "wss://wevm.kava.io", "wss://wevm2.kava.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kava",
    "symbol": "KAVA",
    "decimals": 18
  },
  "infoURL": "https://www.kava.io",
  "shortName": "kava",
  "chainId": 2222,
  "networkId": 2222,
  "icon": {
    "url": "ipfs://QmdpRTk6oL1HRW9xC6cAc4Rnf9gs6zgdAcr4Z3HcLztusm",
    "width": 1186,
    "height": 360,
    "format": "svg"
  },
  "explorers": [{
    "name": "Kava EVM Explorer",
    "url": "https://explorer.kava.io",
    "standard": "EIP3091",
    "icon": "kava"
  }],
  "testnet": false,
  "slug": "kava-evm"
};

var c2223 = {
  "name": "VChain Mainnet",
  "chain": "VChain",
  "rpc": ["https://vchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bc.vcex.xyz"],
  "faucets": [],
  "nativeCurrency": {
    "name": "VNDT",
    "symbol": "VNDT",
    "decimals": 18
  },
  "infoURL": "https://bo.vcex.xyz/",
  "shortName": "VChain",
  "chainId": 2223,
  "networkId": 2223,
  "explorers": [{
    "name": "VChain Scan",
    "url": "https://scan.vcex.xyz",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "vchain"
};

var c2300 = {
  "name": "BOMB Chain",
  "chain": "BOMB",
  "rpc": ["https://bomb-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.bombchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BOMB Token",
    "symbol": "BOMB",
    "decimals": 18
  },
  "infoURL": "https://www.bombchain.com",
  "shortName": "bomb",
  "chainId": 2300,
  "networkId": 2300,
  "icon": {
    "url": "ipfs://Qmc44uSjfdNHdcxPTgZAL8eZ8TLe4UmSHibcvKQFyGJxTB",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "explorers": [{
    "name": "bombscan",
    "icon": "bomb",
    "url": "https://bombscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "bomb-chain"
};

var c2309 = {
  "name": "Arevia",
  "chain": "Arevia",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Arev",
    "symbol": "ARÉV",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "arevia",
  "chainId": 2309,
  "networkId": 2309,
  "explorers": [],
  "status": "incubating",
  "testnet": false,
  "slug": "arevia"
};

var c2330 = {
  "name": "Altcoinchain",
  "chain": "mainnet",
  "rpc": ["https://altcoinchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc0.altcoinchain.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Altcoin",
    "symbol": "ALT",
    "decimals": 18
  },
  "infoURL": "https://altcoinchain.org",
  "shortName": "alt",
  "chainId": 2330,
  "networkId": 2330,
  "icon": {
    "url": "ipfs://QmYwHmGC9CRVcKo1LSesqxU31SDj9vk2iQxcFjQArzhix4",
    "width": 720,
    "height": 720,
    "format": "png"
  },
  "status": "active",
  "explorers": [{
    "name": "expedition",
    "url": "http://expedition.altcoinchain.org",
    "icon": "altcoinchain",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "altcoinchain"
};

var c2399 = {
  "name": "BOMB Chain Testnet",
  "chain": "BOMB",
  "rpc": ["https://bomb-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bombchain-testnet.ankr.com/bas_full_rpc_1"],
  "faucets": ["https://faucet.bombchain-testnet.ankr.com/"],
  "nativeCurrency": {
    "name": "BOMB Token",
    "symbol": "tBOMB",
    "decimals": 18
  },
  "infoURL": "https://www.bombmoney.com",
  "shortName": "bombt",
  "chainId": 2399,
  "networkId": 2399,
  "icon": {
    "url": "ipfs://Qmc44uSjfdNHdcxPTgZAL8eZ8TLe4UmSHibcvKQFyGJxTB",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "explorers": [{
    "name": "bombscan-testnet",
    "icon": "bomb",
    "url": "https://explorer.bombchain-testnet.ankr.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "bomb-chain-testnet"
};

var c2400 = {
  "name": "TCG Verse Mainnet",
  "chain": "TCG Verse",
  "icon": {
    "url": "ipfs://bafkreidg4wpewve5mdxrofneqblydkrjl3oevtgpdf3fk3z3vjqam6ocoe",
    "width": 350,
    "height": 350,
    "format": "png"
  },
  "rpc": ["https://tcg-verse.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.tcgverse.xyz"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OAS",
    "symbol": "OAS",
    "decimals": 18
  },
  "infoURL": "https://tcgverse.xyz/",
  "shortName": "TCGV",
  "chainId": 2400,
  "networkId": 2400,
  "explorers": [{
    "name": "TCG Verse Explorer",
    "url": "https://explorer.tcgverse.xyz",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-248"
  },
  "testnet": false,
  "slug": "tcg-verse"
};

var c2415 = {
  "name": "XODEX",
  "chain": "XODEX",
  "rpc": ["https://xodex.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.xo-dex.com/rpc", "https://xo-dex.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "XODEX Native Token",
    "symbol": "XODEX",
    "decimals": 18
  },
  "infoURL": "https://xo-dex.com",
  "shortName": "xodex",
  "chainId": 2415,
  "networkId": 10,
  "icon": {
    "url": "ipfs://QmXt49jPfHUmDF4n8TF7ks6txiPztx6qUHanWmHnCoEAhW",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "explorers": [{
    "name": "XODEX Explorer",
    "url": "https://explorer.xo-dex.com",
    "standard": "EIP3091",
    "icon": "xodex"
  }],
  "testnet": false,
  "slug": "xodex"
};

var c2559 = {
  "name": "Kortho Mainnet",
  "chain": "Kortho Chain",
  "rpc": ["https://kortho.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://www.kortho-chain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "KorthoChain",
    "symbol": "KTO",
    "decimals": 11
  },
  "infoURL": "https://www.kortho.io/",
  "shortName": "ktoc",
  "chainId": 2559,
  "networkId": 2559,
  "testnet": false,
  "slug": "kortho"
};

var c2569 = {
  "name": "TechPay Mainnet",
  "chain": "TPC",
  "rpc": ["https://techpay.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.techpay.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TechPay",
    "symbol": "TPC",
    "decimals": 18
  },
  "infoURL": "https://techpay.io/",
  "shortName": "tpc",
  "chainId": 2569,
  "networkId": 2569,
  "icon": {
    "url": "ipfs://QmQyTyJUnhD1dca35Vyj96pm3v3Xyw8xbG9m8HXHw3k2zR",
    "width": 578,
    "height": 701,
    "format": "svg"
  },
  "explorers": [{
    "name": "tpcscan",
    "url": "https://tpcscan.com",
    "icon": "techpay",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "techpay"
};

var c2606 = {
  "name": "PoCRNet",
  "title": "Proof of Carbon Reduction mainnet",
  "chain": "CRC",
  "status": "active",
  "rpc": ["https://pocrnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://pocrnet.westeurope.cloudapp.azure.com/http", "wss://pocrnet.westeurope.cloudapp.azure.com/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Carbon Reduction Coin",
    "symbol": "CRC",
    "decimals": 18
  },
  "infoURL": "https://github.com/ethereum-pocr/pocrnet",
  "shortName": "pocrnet",
  "chainId": 2606,
  "networkId": 2606,
  "explorers": [{
    "name": "Lite Explorer",
    "url": "https://ethereum-pocr.github.io/explorer/pocrnet",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "pocrnet"
};

var c2611 = {
  "name": "Redlight Chain Mainnet",
  "chain": "REDLC",
  "rpc": ["https://redlight-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://dataseed2.redlightscan.finance"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Redlight Coin",
    "symbol": "REDLC",
    "decimals": 18
  },
  "infoURL": "https://redlight.finance/",
  "shortName": "REDLC",
  "chainId": 2611,
  "networkId": 2611,
  "explorers": [{
    "name": "REDLC Explorer",
    "url": "https://redlightscan.finance",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "redlight-chain"
};

var c2612 = {
  "name": "EZChain C-Chain Mainnet",
  "chain": "EZC",
  "rpc": ["https://ezchain-c-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.ezchain.com/ext/bc/C/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EZChain",
    "symbol": "EZC",
    "decimals": 18
  },
  "infoURL": "https://ezchain.com",
  "shortName": "EZChain",
  "chainId": 2612,
  "networkId": 2612,
  "icon": {
    "url": "ipfs://QmPKJbYCFjGmY9X2cA4b9YQjWYHQncmKnFtKyQh9rHkFTb",
    "width": 146,
    "height": 48,
    "format": "png"
  },
  "explorers": [{
    "name": "ezchain",
    "url": "https://cchain-explorer.ezchain.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ezchain-c-chain"
};

var c2613 = {
  "name": "EZChain C-Chain Testnet",
  "chain": "EZC",
  "rpc": ["https://ezchain-c-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-api.ezchain.com/ext/bc/C/rpc"],
  "faucets": ["https://testnet-faucet.ezchain.com"],
  "nativeCurrency": {
    "name": "EZChain",
    "symbol": "EZC",
    "decimals": 18
  },
  "infoURL": "https://ezchain.com",
  "shortName": "Fuji-EZChain",
  "chainId": 2613,
  "networkId": 2613,
  "icon": {
    "url": "ipfs://QmPKJbYCFjGmY9X2cA4b9YQjWYHQncmKnFtKyQh9rHkFTb",
    "width": 146,
    "height": 48,
    "format": "png"
  },
  "explorers": [{
    "name": "ezchain",
    "url": "https://testnet-cchain-explorer.ezchain.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "ezchain-c-chain-testnet"
};

var c2888 = {
  "name": "Boba Network Goerli Testnet",
  "chain": "ETH",
  "rpc": ["https://boba-network-goerli-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.boba.network/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Goerli Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "Bobagoerli",
  "chainId": 2888,
  "networkId": 2888,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://testnet.bobascan.com",
    "standard": "none"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-5",
    "bridges": [{
      "url": "https://gateway.goerli.boba.network"
    }]
  },
  "testnet": true,
  "slug": "boba-network-goerli-testnet"
};

var c2999 = {
  "name": "BitYuan Mainnet",
  "chain": "BTY",
  "rpc": ["https://bityuan.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.bityuan.com/eth"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BTY",
    "symbol": "BTY",
    "decimals": 18
  },
  "infoURL": "https://www.bityuan.com",
  "shortName": "bty",
  "chainId": 2999,
  "networkId": 2999,
  "icon": {
    "url": "ipfs://QmUmJVof2m5e4HUXb3GmijWUFsLUNhrQiwwQG3CqcXEtHt",
    "width": 91,
    "height": 24,
    "format": "png"
  },
  "explorers": [{
    "name": "BitYuan Block Chain Explorer",
    "url": "https://mainnet.bityuan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "bityuan"
};

var c3000 = {
  "name": "CENNZnet Rata",
  "chain": "CENNZnet",
  "rpc": [],
  "faucets": ["https://app-faucet.centrality.me"],
  "nativeCurrency": {
    "name": "CPAY",
    "symbol": "CPAY",
    "decimals": 18
  },
  "infoURL": "https://cennz.net",
  "shortName": "cennz-r",
  "chainId": 3000,
  "networkId": 3000,
  "icon": {
    "url": "ipfs://QmWhNm7tTi6SYbiumULDRk956hxgqaZSX77vcxBNn8fvnw",
    "width": 112,
    "height": 112,
    "format": "svg"
  },
  "testnet": false,
  "slug": "cennznet-rata"
};

var c3001 = {
  "name": "CENNZnet Nikau",
  "chain": "CENNZnet",
  "rpc": ["https://cennznet-nikau.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://nikau.centrality.me/public"],
  "faucets": ["https://app-faucet.centrality.me"],
  "nativeCurrency": {
    "name": "CPAY",
    "symbol": "CPAY",
    "decimals": 18
  },
  "infoURL": "https://cennz.net",
  "shortName": "cennz-n",
  "chainId": 3001,
  "networkId": 3001,
  "icon": {
    "url": "ipfs://QmWhNm7tTi6SYbiumULDRk956hxgqaZSX77vcxBNn8fvnw",
    "width": 112,
    "height": 112,
    "format": "svg"
  },
  "explorers": [{
    "name": "UNcover",
    "url": "https://www.uncoverexplorer.com/?network=Nikau",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "cennznet-nikau"
};

var c3031 = {
  "name": "Orlando Chain",
  "chain": "ORL",
  "rpc": ["https://orlando-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.orlchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Orlando",
    "symbol": "ORL",
    "decimals": 18
  },
  "infoURL": "https://orlchain.com",
  "shortName": "ORL",
  "chainId": 3031,
  "networkId": 3031,
  "icon": {
    "url": "ipfs://QmNsuuBBTHErnuFDcdyzaY8CKoVJtobsLJx2WQjaPjcp7g",
    "width": 512,
    "height": 528,
    "format": "png"
  },
  "explorers": [{
    "name": "Orlando (ORL) Explorer",
    "url": "https://orlscan.com",
    "icon": "orl",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "orlando-chain"
};

var c3068 = {
  "name": "Bifrost Mainnet",
  "title": "The Bifrost Mainnet network",
  "chain": "BFC",
  "rpc": ["https://bifrost.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://public-01.mainnet.thebifrost.io/rpc", "https://public-02.mainnet.thebifrost.io/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bifrost",
    "symbol": "BFC",
    "decimals": 18
  },
  "infoURL": "https://thebifrost.io",
  "shortName": "bfc",
  "chainId": 3068,
  "networkId": 3068,
  "icon": {
    "url": "ipfs://QmcHvn2Wq91ULyEH5s3uHjosX285hUgyJHwggFJUd3L5uh",
    "width": 128,
    "height": 128,
    "format": "png"
  },
  "explorers": [{
    "name": "explorer-thebifrost",
    "url": "https://explorer.mainnet.thebifrost.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "bifrost"
};

var c3141 = {
  "name": "Filecoin - Hyperspace testnet",
  "chain": "FIL",
  "icon": {
    "url": "ipfs://QmS9r9XQkMHVomWcSBNDkKkz9n87h9bH9ssabeiKZtANoU",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "rpc": ["https://filecoin-hyperspace-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.hyperspace.node.glif.io/rpc/v1", "https://rpc.ankr.com/filecoin_testnet", "https://filecoin-hyperspace.chainstacklabs.com/rpc/v1"],
  "faucets": ["https://hyperspace.yoga/#faucet"],
  "nativeCurrency": {
    "name": "testnet filecoin",
    "symbol": "tFIL",
    "decimals": 18
  },
  "infoURL": "https://filecoin.io",
  "shortName": "filecoin-hyperspace",
  "chainId": 3141,
  "networkId": 3141,
  "slip44": 1,
  "explorers": [{
    "name": "Filfox - Hyperspace",
    "url": "https://hyperspace.filfox.info/en",
    "standard": "none"
  }, {
    "name": "Glif Explorer - Hyperspace",
    "url": "https://explorer.glif.io/?network=hyperspace",
    "standard": "none"
  }, {
    "name": "Beryx",
    "url": "https://beryx.zondax.ch",
    "standard": "none"
  }, {
    "name": "Dev.storage",
    "url": "https://dev.storage",
    "standard": "none"
  }, {
    "name": "Filscan - Hyperspace",
    "url": "https://hyperspace.filscan.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "filecoin-hyperspace-testnet"
};

var c3306 = {
  "name": "Debounce Subnet Testnet",
  "chain": "Debounce Network",
  "icon": {
    "url": "ipfs://bafybeib5q4hez37s7b2fx4hqt2q4ji2tuudxjhfdgnp6q3d5mqm6wsxdfq",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "rpc": ["https://debounce-subnet-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://dev-rpc.debounce.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Debounce Network",
    "symbol": "DB",
    "decimals": 18
  },
  "infoURL": "https://debounce.network",
  "shortName": "debounce-devnet",
  "chainId": 3306,
  "networkId": 3306,
  "explorers": [{
    "name": "Debounce Devnet Explorer",
    "url": "https://explorer.debounce.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "debounce-subnet-testnet"
};

var c3331 = {
  "name": "ZCore Testnet",
  "chain": "Beach",
  "icon": {
    "url": "ipfs://QmQnXu13ym8W1VA3QxocaNVXGAuEPmamSCkS7bBscVk1f4",
    "width": 1050,
    "height": 1050,
    "format": "png"
  },
  "rpc": ["https://zcore-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.zcore.cash"],
  "faucets": ["https://faucet.zcore.cash"],
  "nativeCurrency": {
    "name": "ZCore",
    "symbol": "ZCR",
    "decimals": 18
  },
  "infoURL": "https://zcore.cash",
  "shortName": "zcrbeach",
  "chainId": 3331,
  "networkId": 3331,
  "testnet": true,
  "slug": "zcore-testnet"
};

var c3333 = {
  "name": "Web3Q Testnet",
  "chain": "Web3Q",
  "rpc": ["https://web3q-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.web3q.io:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Web3Q",
    "symbol": "W3Q",
    "decimals": 18
  },
  "infoURL": "https://testnet.web3q.io/home.w3q/",
  "shortName": "w3q-t",
  "chainId": 3333,
  "networkId": 3333,
  "explorers": [{
    "name": "w3q-testnet",
    "url": "https://explorer.testnet.web3q.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "web3q-testnet"
};

var c3334 = {
  "name": "Web3Q Galileo",
  "chain": "Web3Q",
  "rpc": ["https://web3q-galileo.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://galileo.web3q.io:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Web3Q",
    "symbol": "W3Q",
    "decimals": 18
  },
  "infoURL": "https://galileo.web3q.io/home.w3q/",
  "shortName": "w3q-g",
  "chainId": 3334,
  "networkId": 3334,
  "explorers": [{
    "name": "w3q-galileo",
    "url": "https://explorer.galileo.web3q.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "web3q-galileo"
};

var c3400 = {
  "name": "Paribu Net Mainnet",
  "chain": "PRB",
  "rpc": ["https://paribu-net.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.paribu.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "PRB",
    "symbol": "PRB",
    "decimals": 18
  },
  "infoURL": "https://net.paribu.com",
  "shortName": "prb",
  "chainId": 3400,
  "networkId": 3400,
  "icon": {
    "url": "ipfs://QmVgc77jYo2zrxQjhYwT4KzvSrSZ1DBJraJVX57xAvP8MD",
    "width": 2362,
    "height": 2362,
    "format": "png"
  },
  "explorers": [{
    "name": "Paribu Net Explorer",
    "url": "https://explorer.paribu.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "paribu-net"
};

var c3500 = {
  "name": "Paribu Net Testnet",
  "chain": "PRB",
  "rpc": ["https://paribu-net-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.paribuscan.com"],
  "faucets": ["https://faucet.paribuscan.com"],
  "nativeCurrency": {
    "name": "PRB",
    "symbol": "PRB",
    "decimals": 18
  },
  "infoURL": "https://net.paribu.com",
  "shortName": "prbtestnet",
  "chainId": 3500,
  "networkId": 3500,
  "icon": {
    "url": "ipfs://QmVgc77jYo2zrxQjhYwT4KzvSrSZ1DBJraJVX57xAvP8MD",
    "width": 2362,
    "height": 2362,
    "format": "png"
  },
  "explorers": [{
    "name": "Paribu Net Testnet Explorer",
    "url": "https://testnet.paribuscan.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "paribu-net-testnet"
};

var c3501 = {
  "name": "JFIN Chain",
  "chain": "JFIN",
  "rpc": ["https://jfin-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.jfinchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "JFIN Coin",
    "symbol": "jfin",
    "decimals": 18
  },
  "infoURL": "https://jfinchain.com",
  "shortName": "jfin",
  "chainId": 3501,
  "networkId": 3501,
  "explorers": [{
    "name": "JFIN Chain Explorer",
    "url": "https://exp.jfinchain.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "jfin-chain"
};

var c3601 = {
  "name": "PandoProject Mainnet",
  "chain": "PandoProject",
  "icon": {
    "url": "ipfs://QmNduBtT5BNGDw7DjRwDvaZBb6gjxf46WD7BYhn4gauGc9",
    "width": 1000,
    "height": 1628,
    "format": "png"
  },
  "rpc": ["https://pandoproject.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-rpc-api.pandoproject.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "pando-token",
    "symbol": "PTX",
    "decimals": 18
  },
  "infoURL": "https://www.pandoproject.org/",
  "shortName": "pando-mainnet",
  "chainId": 3601,
  "networkId": 3601,
  "explorers": [{
    "name": "Pando Mainnet Explorer",
    "url": "https://explorer.pandoproject.org",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "pandoproject"
};

var c3602 = {
  "name": "PandoProject Testnet",
  "chain": "PandoProject",
  "icon": {
    "url": "ipfs://QmNduBtT5BNGDw7DjRwDvaZBb6gjxf46WD7BYhn4gauGc9",
    "width": 1000,
    "height": 1628,
    "format": "png"
  },
  "rpc": ["https://pandoproject-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.ethrpc.pandoproject.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "pando-token",
    "symbol": "PTX",
    "decimals": 18
  },
  "infoURL": "https://www.pandoproject.org/",
  "shortName": "pando-testnet",
  "chainId": 3602,
  "networkId": 3602,
  "explorers": [{
    "name": "Pando Testnet Explorer",
    "url": "https://testnet.explorer.pandoproject.org",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "pandoproject-testnet"
};

var c3666 = {
  "name": "Metacodechain",
  "chain": "metacode",
  "rpc": ["https://metacodechain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://j.blockcoach.com:8503"],
  "faucets": [],
  "nativeCurrency": {
    "name": "J",
    "symbol": "J",
    "decimals": 18
  },
  "infoURL": "https://j.blockcoach.com:8089",
  "shortName": "metacode",
  "chainId": 3666,
  "networkId": 3666,
  "explorers": [{
    "name": "meta",
    "url": "https://j.blockcoach.com:8089",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "metacodechain"
};

var c3690 = {
  "name": "Bittex Mainnet",
  "chain": "BTX",
  "rpc": ["https://bittex.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc1.bittexscan.info", "https://rpc2.bittexscan.info"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bittex",
    "symbol": "BTX",
    "decimals": 18
  },
  "infoURL": "https://bittexscan.com",
  "shortName": "btx",
  "chainId": 3690,
  "networkId": 3690,
  "explorers": [{
    "name": "bittexscan",
    "url": "https://bittexscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "bittex"
};

var c3693 = {
  "name": "Empire Network",
  "chain": "EMPIRE",
  "rpc": ["https://empire-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.empirenetwork.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Empire",
    "symbol": "EMPIRE",
    "decimals": 18
  },
  "infoURL": "https://www.empirenetwork.io/",
  "shortName": "empire",
  "chainId": 3693,
  "networkId": 3693,
  "explorers": [{
    "name": "Empire Explorer",
    "url": "https://explorer.empirenetwork.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "empire-network"
};

var c3737 = {
  "name": "Crossbell",
  "chain": "Crossbell",
  "rpc": ["https://crossbell.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.crossbell.io"],
  "faucets": ["https://faucet.crossbell.io"],
  "nativeCurrency": {
    "name": "Crossbell Token",
    "symbol": "CSB",
    "decimals": 18
  },
  "infoURL": "https://crossbell.io",
  "shortName": "csb",
  "chainId": 3737,
  "networkId": 3737,
  "icon": {
    "url": "ipfs://QmS8zEetTb6pwdNpVjv5bz55BXiSMGP9BjTJmNcjcUT91t",
    "format": "svg",
    "width": 408,
    "height": 408
  },
  "explorers": [{
    "name": "Crossbell Explorer",
    "url": "https://scan.crossbell.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "crossbell"
};

var c3912 = {
  "name": "DRAC Network",
  "chain": "DRAC",
  "rpc": ["https://drac-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://www.dracscan.com/rpc"],
  "faucets": ["https://www.dracscan.io/faucet"],
  "nativeCurrency": {
    "name": "DRAC",
    "symbol": "DRAC",
    "decimals": 18
  },
  "infoURL": "https://drac.io/",
  "shortName": "drac",
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "chainId": 3912,
  "networkId": 3912,
  "icon": {
    "url": "ipfs://QmXbsQe7QsVFZJZdBmbZVvS6LgX9ZFoaTMBs9MiQXUzJTw",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "explorers": [{
    "name": "DRAC_Network Scan",
    "url": "https://www.dracscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "drac-network"
};

var c3966 = {
  "name": "DYNO Mainnet",
  "chain": "DYNO",
  "rpc": ["https://dyno.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.dynoprotocol.com"],
  "faucets": ["https://faucet.dynoscan.io"],
  "nativeCurrency": {
    "name": "DYNO Token",
    "symbol": "DYNO",
    "decimals": 18
  },
  "infoURL": "https://dynoprotocol.com",
  "shortName": "dyno",
  "chainId": 3966,
  "networkId": 3966,
  "explorers": [{
    "name": "DYNO Explorer",
    "url": "https://dynoscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "dyno"
};

var c3967 = {
  "name": "DYNO Testnet",
  "chain": "DYNO",
  "rpc": ["https://dyno-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://tapi.dynoprotocol.com"],
  "faucets": ["https://faucet.dynoscan.io"],
  "nativeCurrency": {
    "name": "DYNO Token",
    "symbol": "tDYNO",
    "decimals": 18
  },
  "infoURL": "https://dynoprotocol.com",
  "shortName": "tdyno",
  "chainId": 3967,
  "networkId": 3967,
  "explorers": [{
    "name": "DYNO Explorer",
    "url": "https://testnet.dynoscan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "dyno-testnet"
};

var c3999 = {
  "name": "YuanChain Mainnet",
  "chain": "YCC",
  "rpc": ["https://yuanchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.yuan.org/eth"],
  "faucets": [],
  "nativeCurrency": {
    "name": "YCC",
    "symbol": "YCC",
    "decimals": 18
  },
  "infoURL": "https://www.yuan.org",
  "shortName": "ycc",
  "chainId": 3999,
  "networkId": 3999,
  "icon": {
    "url": "ipfs://QmdbPhiB5W2gbHZGkYsN7i2VTKKP9casmAN2hRnpDaL9W4",
    "width": 96,
    "height": 96,
    "format": "png"
  },
  "explorers": [{
    "name": "YuanChain Explorer",
    "url": "https://mainnet.yuan.org",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "yuanchain"
};

var c4002 = {
  "name": "Fantom Testnet",
  "chain": "FTM",
  "rpc": ["https://fantom-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.fantom.network"],
  "faucets": ["https://faucet.fantom.network"],
  "nativeCurrency": {
    "name": "Fantom",
    "symbol": "FTM",
    "decimals": 18
  },
  "infoURL": "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet",
  "shortName": "tftm",
  "chainId": 4002,
  "networkId": 4002,
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "explorers": [{
    "name": "ftmscan",
    "url": "https://testnet.ftmscan.com",
    "icon": "ftmscan",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "fantom-testnet"
};

var c4051 = {
  "name": "Bobaopera Testnet",
  "chain": "Bobaopera Testnet",
  "rpc": ["https://bobaopera-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.bobaopera.boba.network", "wss://wss.testnet.bobaopera.boba.network", "https://replica.testnet.bobaopera.boba.network", "wss://replica-wss.testnet.bobaopera.boba.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Boba Token",
    "symbol": "BOBA",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "BobaoperaTestnet",
  "chainId": 4051,
  "networkId": 4051,
  "explorers": [{
    "name": "Bobaopera Testnet block explorer",
    "url": "https://blockexplorer.testnet.bobaopera.boba.network",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "bobaopera-testnet"
};

var c4061 = {
  "name": "Nahmii 3 Mainnet",
  "chain": "Nahmii",
  "rpc": [],
  "status": "incubating",
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://nahmii.io",
  "shortName": "Nahmii3Mainnet",
  "chainId": 4061,
  "networkId": 4061,
  "icon": {
    "url": "ipfs://QmZhKXgoGpzvthr2eh8ZNgT75YvMtEBegdELAaMPPzf5QT",
    "width": 384,
    "height": 384,
    "format": "png"
  },
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [{
      "url": "https://bridge.nahmii.io"
    }]
  },
  "testnet": false,
  "slug": "nahmii-3"
};

var c4062 = {
  "name": "Nahmii 3 Testnet",
  "chain": "Nahmii",
  "rpc": ["https://nahmii-3-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://ngeth.testnet.n3.nahmii.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Goerli Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://nahmii.io",
  "shortName": "Nahmii3Testnet",
  "chainId": 4062,
  "networkId": 4062,
  "icon": {
    "url": "ipfs://QmZhKXgoGpzvthr2eh8ZNgT75YvMtEBegdELAaMPPzf5QT",
    "width": 384,
    "height": 384,
    "format": "png"
  },
  "explorers": [{
    "name": "Nahmii 3 Testnet Explorer",
    "url": "https://explorer.testnet.n3.nahmii.io",
    "icon": "nahmii",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-3",
    "bridges": [{
      "url": "https://bridge.testnet.n3.nahmii.io"
    }]
  },
  "testnet": true,
  "slug": "nahmii-3-testnet"
};

var c4096 = {
  "name": "Bitindi Testnet",
  "chain": "BNI",
  "icon": {
    "url": "ipfs://QmRAFFPiLiSgjGTs9QaZdnR9fsDgyUdTejwSxcnPXo292s",
    "width": 60,
    "height": 72,
    "format": "png"
  },
  "rpc": ["https://bitindi-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.bitindi.org"],
  "faucets": ["https://faucet.bitindi.org"],
  "nativeCurrency": {
    "name": "BNI",
    "symbol": "$BNI",
    "decimals": 18
  },
  "infoURL": "https://bitindi.org",
  "shortName": "BNIt",
  "chainId": 4096,
  "networkId": 4096,
  "explorers": [{
    "name": "Bitindi",
    "url": "https://testnet.bitindiscan.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "bitindi-testnet"
};

var c4099 = {
  "name": "Bitindi Mainnet",
  "chain": "BNI",
  "icon": {
    "url": "ipfs://QmRAFFPiLiSgjGTs9QaZdnR9fsDgyUdTejwSxcnPXo292s",
    "width": 60,
    "height": 72,
    "format": "png"
  },
  "rpc": ["https://bitindi.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.bitindi.org"],
  "faucets": ["https://faucet.bitindi.org"],
  "nativeCurrency": {
    "name": "BNI",
    "symbol": "$BNI",
    "decimals": 18
  },
  "infoURL": "https://bitindi.org",
  "shortName": "BNIm",
  "chainId": 4099,
  "networkId": 4099,
  "explorers": [{
    "name": "Bitindi",
    "url": "https://bitindiscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "bitindi"
};

var c4102 = {
  "name": "AIOZ Network Testnet",
  "chain": "AIOZ",
  "icon": {
    "url": "ipfs://QmRAGPFhvQiXgoJkui7WHajpKctGFrJNhHqzYdwcWt5V3Z",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "rpc": ["https://aioz-network-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-ds.testnet.aioz.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "testAIOZ",
    "symbol": "AIOZ",
    "decimals": 18
  },
  "infoURL": "https://aioz.network",
  "shortName": "aioz-testnet",
  "chainId": 4102,
  "networkId": 4102,
  "slip44": 60,
  "explorers": [{
    "name": "AIOZ Network Testnet Explorer",
    "url": "https://testnet.explorer.aioz.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "aioz-network-testnet"
};

var c4141 = {
  "name": "Tipboxcoin Testnet",
  "chain": "TPBX",
  "icon": {
    "url": "ipfs://QmbiaHnR3fVVofZ7Xq2GYZxwHkLEy3Fh5qDtqnqXD6ACAh",
    "width": 192,
    "height": 192,
    "format": "png"
  },
  "rpc": ["https://tipboxcoin-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.tipboxcoin.net"],
  "faucets": ["https://faucet.tipboxcoin.net"],
  "nativeCurrency": {
    "name": "Tipboxcoin",
    "symbol": "TPBX",
    "decimals": 18
  },
  "infoURL": "https://tipboxcoin.net",
  "shortName": "TPBXt",
  "chainId": 4141,
  "networkId": 4141,
  "explorers": [{
    "name": "Tipboxcoin",
    "url": "https://testnet.tipboxcoin.net",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "tipboxcoin-testnet"
};

var c4181 = {
  "name": "PHI Network V1",
  "chain": "PHI V1",
  "rpc": ["https://phi-network-v1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc1.phi.network", "https://rpc2.phi.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "PHI",
    "symbol": "Φ",
    "decimals": 18
  },
  "infoURL": "https://phi.network",
  "shortName": "PHIv1",
  "chainId": 4181,
  "networkId": 4181,
  "icon": {
    "url": "ipfs://bafkreid6pm3mic7izp3a6zlfwhhe7etd276bjfsq2xash6a4s2vmcdf65a",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "PHI Explorer",
    "url": "https://explorer.phi.network",
    "icon": "phi",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "phi-network-v1"
};

var c4328 = {
  "name": "Bobafuji Testnet",
  "chain": "Bobafuji Testnet",
  "rpc": ["https://bobafuji-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.avax.boba.network", "wss://wss.testnet.avax.boba.network", "https://replica.testnet.avax.boba.network", "wss://replica-wss.testnet.avax.boba.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Boba Token",
    "symbol": "BOBA",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "BobaFujiTestnet",
  "chainId": 4328,
  "networkId": 4328,
  "explorers": [{
    "name": "Bobafuji Testnet block explorer",
    "url": "https://blockexplorer.testnet.avax.boba.network",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "bobafuji-testnet"
};

var c4444 = {
  "name": "Htmlcoin Mainnet",
  "chain": "mainnet",
  "rpc": ["https://htmlcoin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://janus.htmlcoin.com/api/"],
  "faucets": ["https://gruvin.me/htmlcoin"],
  "nativeCurrency": {
    "name": "Htmlcoin",
    "symbol": "HTML",
    "decimals": 8
  },
  "infoURL": "https://htmlcoin.com",
  "shortName": "html",
  "chainId": 4444,
  "networkId": 4444,
  "icon": {
    "url": "ipfs://QmR1oDRSadPerfyWMhKHNP268vPKvpczt5zPawgFSZisz2",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "status": "active",
  "explorers": [{
    "name": "htmlcoin",
    "url": "https://explorer.htmlcoin.com",
    "icon": "htmlcoin",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "htmlcoin"
};

var c4689 = {
  "name": "IoTeX Network Mainnet",
  "chain": "iotex.io",
  "rpc": ["https://iotex-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://babel-api.mainnet.iotex.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "IoTeX",
    "symbol": "IOTX",
    "decimals": 18
  },
  "infoURL": "https://iotex.io",
  "shortName": "iotex-mainnet",
  "chainId": 4689,
  "networkId": 4689,
  "explorers": [{
    "name": "iotexscan",
    "url": "https://iotexscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "iotex-network"
};

var c4690 = {
  "name": "IoTeX Network Testnet",
  "chain": "iotex.io",
  "rpc": ["https://iotex-network-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://babel-api.testnet.iotex.io"],
  "faucets": ["https://faucet.iotex.io/"],
  "nativeCurrency": {
    "name": "IoTeX",
    "symbol": "IOTX",
    "decimals": 18
  },
  "infoURL": "https://iotex.io",
  "shortName": "iotex-testnet",
  "chainId": 4690,
  "networkId": 4690,
  "explorers": [{
    "name": "testnet iotexscan",
    "url": "https://testnet.iotexscan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "iotex-network-testnet"
};

var c4777 = {
  "name": "BlackFort Exchange Network Testnet",
  "chain": "TBXN",
  "rpc": ["https://blackfort-exchange-network-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.blackfort.network/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BlackFort Testnet Token",
    "symbol": "TBXN",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://blackfort.exchange",
  "shortName": "TBXN",
  "chainId": 4777,
  "networkId": 4777,
  "icon": {
    "url": "ipfs://QmPasA8xykRtJDivB2bcKDiRCUNWDPtfUTTKVAcaF2wVxC",
    "width": 1968,
    "height": 1968,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://testnet-explorer.blackfort.network",
    "icon": "blockscout",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "blackfort-exchange-network-testnet"
};

var c4918 = {
  "name": "Venidium Testnet",
  "chain": "XVM",
  "rpc": ["https://venidium-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-evm-testnet.venidium.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Venidium",
    "symbol": "XVM",
    "decimals": 18
  },
  "infoURL": "https://venidium.io",
  "shortName": "txvm",
  "chainId": 4918,
  "networkId": 4918,
  "explorers": [{
    "name": "Venidium EVM Testnet Explorer",
    "url": "https://evm-testnet.venidiumexplorer.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "venidium-testnet"
};

var c4919 = {
  "name": "Venidium Mainnet",
  "chain": "XVM",
  "icon": {
    "url": "ipfs://bafkreiaplwlym5g27jm4mjhotfqq6al2cxp3fnkmzdusqjg7wnipq5wn2e",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "rpc": ["https://venidium.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.venidium.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Venidium",
    "symbol": "XVM",
    "decimals": 18
  },
  "infoURL": "https://venidium.io",
  "shortName": "xvm",
  "chainId": 4919,
  "networkId": 4919,
  "explorers": [{
    "name": "Venidium Explorer",
    "url": "https://evm.venidiumexplorer.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "venidium"
};

var c4999 = {
  "name": "BlackFort Exchange Network",
  "chain": "BXN",
  "rpc": ["https://blackfort-exchange-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.blackfort.network/rpc", "https://mainnet-1.blackfort.network/rpc", "https://mainnet-2.blackfort.network/rpc", "https://mainnet-3.blackfort.network/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BlackFort Token",
    "symbol": "BXN",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://blackfort.exchange",
  "shortName": "BXN",
  "chainId": 4999,
  "networkId": 4999,
  "icon": {
    "url": "ipfs://QmPasA8xykRtJDivB2bcKDiRCUNWDPtfUTTKVAcaF2wVxC",
    "width": 1968,
    "height": 1968,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.blackfort.network",
    "icon": "blockscout",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "blackfort-exchange-network"
};

var c5000 = {
  "name": "Mantle",
  "chain": "ETH",
  "rpc": ["https://mantle.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.mantle.xyz"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BitDAO",
    "symbol": "BIT",
    "decimals": 18
  },
  "infoURL": "https://mantle.xyz",
  "shortName": "mantle",
  "chainId": 5000,
  "networkId": 5000,
  "explorers": [{
    "name": "Mantle Explorer",
    "url": "https://explorer.mantle.xyz",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "mantle"
};

var c5001 = {
  "name": "Mantle Testnet",
  "chain": "ETH",
  "rpc": ["https://mantle-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.mantle.xyz"],
  "faucets": ["https://faucet.testnet.mantle.xyz"],
  "nativeCurrency": {
    "name": "Testnet BitDAO",
    "symbol": "BIT",
    "decimals": 18
  },
  "infoURL": "https://mantle.xyz",
  "shortName": "mantle-testnet",
  "chainId": 5001,
  "networkId": 5001,
  "explorers": [{
    "name": "Mantle Testnet Explorer",
    "url": "https://explorer.testnet.mantle.xyz",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "mantle-testnet"
};

var c5177 = {
  "name": "TLChain Network Mainnet",
  "chain": "TLC",
  "icon": {
    "url": "ipfs://QmaR5TsgnWSjLys6wGaciKUbc5qYL3Es4jtgQcosVqDWR3",
    "width": 2048,
    "height": 2048,
    "format": "png"
  },
  "rpc": ["https://tlchain-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.tlxscan.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TLChain Network",
    "symbol": "TLC",
    "decimals": 18
  },
  "infoURL": "https://tlchain.network/",
  "shortName": "tlc",
  "chainId": 5177,
  "networkId": 5177,
  "explorers": [{
    "name": "TLChain Explorer",
    "url": "https://explorer.tlchain.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "tlchain-network"
};

var c5197 = {
  "name": "EraSwap Mainnet",
  "chain": "ESN",
  "icon": {
    "url": "ipfs://QmV1wZ1RVXeD7216aiVBpLkbBBHWNuoTvcSzpVQsqi2uaH",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "rpc": ["https://eraswap.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.eraswap.network", "https://rpc-mumbai.mainnet.eraswap.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EraSwap",
    "symbol": "ES",
    "decimals": 18
  },
  "infoURL": "https://eraswap.info/",
  "shortName": "es",
  "chainId": 5197,
  "networkId": 5197,
  "testnet": false,
  "slug": "eraswap"
};

var c5234 = {
  "name": "Humanode Mainnet",
  "chain": "HMND",
  "rpc": ["https://humanode.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://explorer-rpc-http.mainnet.stages.humanode.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "HMND",
    "symbol": "HMND",
    "decimals": 18
  },
  "infoURL": "https://humanode.io",
  "shortName": "hmnd",
  "chainId": 5234,
  "networkId": 5234,
  "explorers": [],
  "testnet": false,
  "slug": "humanode"
};

var c5315 = {
  "name": "Uzmi Network Mainnet",
  "chain": "UZMI",
  "rpc": ["https://uzmi-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://network.uzmigames.com.br/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "UZMI",
    "symbol": "UZMI",
    "decimals": 18
  },
  "infoURL": "https://uzmigames.com.br/",
  "shortName": "UZMI",
  "chainId": 5315,
  "networkId": 5315,
  "testnet": false,
  "slug": "uzmi-network"
};

var c5551 = {
  "name": "Nahmii Mainnet",
  "chain": "Nahmii",
  "rpc": ["https://nahmii.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://l2.nahmii.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://nahmii.io",
  "shortName": "Nahmii",
  "chainId": 5551,
  "networkId": 5551,
  "icon": {
    "url": "ipfs://QmZhKXgoGpzvthr2eh8ZNgT75YvMtEBegdELAaMPPzf5QT",
    "width": 384,
    "height": 384,
    "format": "png"
  },
  "explorers": [{
    "name": "Nahmii mainnet explorer",
    "url": "https://explorer.nahmii.io",
    "icon": "nahmii",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [{
      "url": "https://bridge.nahmii.io"
    }]
  },
  "testnet": false,
  "slug": "nahmii"
};

var c5553 = {
  "name": "Nahmii Testnet",
  "chain": "Nahmii",
  "rpc": ["https://nahmii-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://l2.testnet.nahmii.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://nahmii.io",
  "shortName": "NahmiiTestnet",
  "chainId": 5553,
  "networkId": 5553,
  "icon": {
    "url": "ipfs://QmZhKXgoGpzvthr2eh8ZNgT75YvMtEBegdELAaMPPzf5QT",
    "width": 384,
    "height": 384,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.testnet.nahmii.io",
    "icon": "nahmii",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-3",
    "bridges": [{
      "url": "https://bridge.nahmii.io"
    }]
  },
  "testnet": true,
  "slug": "nahmii-testnet"
};

var c5555 = {
  "name": "Chain Verse Mainnet",
  "chain": "CVERSE",
  "icon": {
    "url": "ipfs://QmQyJt28h4wN3QHPXUQJQYQqGiFUD77han3zibZPzHbitk",
    "width": 1000,
    "height": 1436,
    "format": "png"
  },
  "rpc": ["https://chain-verse.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.chainverse.info"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Oasys",
    "symbol": "OAS",
    "decimals": 18
  },
  "infoURL": "https://chainverse.info",
  "shortName": "cverse",
  "chainId": 5555,
  "networkId": 5555,
  "explorers": [{
    "name": "Chain Verse Explorer",
    "url": "https://explorer.chainverse.info",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "chain-verse"
};

var c5700 = {
  "name": "Syscoin Tanenbaum Testnet",
  "chain": "SYS",
  "rpc": ["https://syscoin-tanenbaum-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.tanenbaum.io", "wss://rpc.tanenbaum.io/wss"],
  "faucets": ["https://faucet.tanenbaum.io"],
  "nativeCurrency": {
    "name": "Testnet Syscoin",
    "symbol": "tSYS",
    "decimals": 18
  },
  "infoURL": "https://syscoin.org",
  "shortName": "tsys",
  "chainId": 5700,
  "networkId": 5700,
  "explorers": [{
    "name": "Syscoin Testnet Block Explorer",
    "url": "https://tanenbaum.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "syscoin-tanenbaum-testnet"
};

var c5729 = {
  "name": "Hika Network Testnet",
  "title": "Hika Network Testnet",
  "chain": "HIK",
  "icon": {
    "url": "ipfs://QmW44FPm3CMM2JDs8BQxLNvUtykkUtrGkQkQsUDJSi3Gmp",
    "width": 350,
    "height": 84,
    "format": "png"
  },
  "rpc": ["https://hika-network-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.hika.network/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Hik Token",
    "symbol": "HIK",
    "decimals": 18
  },
  "infoURL": "https://hika.network/",
  "shortName": "hik",
  "chainId": 5729,
  "networkId": 5729,
  "explorers": [{
    "name": "Hika Network Testnet Explorer",
    "url": "https://scan-testnet.hika.network",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "hika-network-testnet"
};

var c5777 = {
  "name": "Ganache",
  "title": "Ganache GUI Ethereum Testnet",
  "chain": "ETH",
  "icon": {
    "url": "ipfs://Qmc9N7V8CiLB4r7FEcG7GojqfiGGsRCZqcFWCahwMohbDW",
    "width": 267,
    "height": 300,
    "format": "png"
  },
  "rpc": ["https://ganache.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://127.0.0.1:7545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ganache Test Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://trufflesuite.com/ganache/",
  "shortName": "ggui",
  "chainId": 5777,
  "networkId": 5777,
  "explorers": [],
  "testnet": true,
  "slug": "ganache"
};

var c5851 = {
  "name": "Ontology Testnet",
  "chain": "Ontology",
  "icon": {
    "url": "ipfs://bafkreigmvn6spvbiirtutowpq6jmetevbxoof5plzixjoerbeswy4htfb4",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "rpc": ["https://ontology-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://polaris1.ont.io:20339", "http://polaris2.ont.io:20339", "http://polaris3.ont.io:20339", "http://polaris4.ont.io:20339", "https://polaris1.ont.io:10339", "https://polaris2.ont.io:10339", "https://polaris3.ont.io:10339", "https://polaris4.ont.io:10339"],
  "faucets": ["https://developer.ont.io/"],
  "nativeCurrency": {
    "name": "ONG",
    "symbol": "ONG",
    "decimals": 18
  },
  "infoURL": "https://ont.io/",
  "shortName": "OntologyTestnet",
  "chainId": 5851,
  "networkId": 5851,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.ont.io/testnet",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "ontology-testnet"
};

var c5869 = {
  "name": "Wegochain Rubidium Mainnet",
  "chain": "RBD",
  "rpc": ["https://wegochain-rubidium.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://proxy.wegochain.io", "http://wallet.wegochain.io:7764"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Rubid",
    "symbol": "RBD",
    "decimals": 18
  },
  "infoURL": "https://www.wegochain.io",
  "shortName": "rbd",
  "chainId": 5869,
  "networkId": 5869,
  "explorers": [{
    "name": "wegoscan2",
    "url": "https://scan2.wegochain.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "wegochain-rubidium"
};

var c6065 = {
  "name": "Tres Testnet",
  "chain": "TresLeches",
  "rpc": ["https://tres-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-test.tresleches.finance/"],
  "faucets": ["http://faucet.tresleches.finance:8080"],
  "nativeCurrency": {
    "name": "TRES",
    "symbol": "TRES",
    "decimals": 18
  },
  "infoURL": "https://treschain.com",
  "shortName": "TRESTEST",
  "chainId": 6065,
  "networkId": 6065,
  "icon": {
    "url": "ipfs://QmS33ypsZ1Hx5LMMACaJaxePy9QNYMwu4D12niobExLK74",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "treslechesexplorer",
    "url": "https://explorer-test.tresleches.finance",
    "icon": "treslechesexplorer",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "tres-testnet"
};

var c6066 = {
  "name": "Tres Mainnet",
  "chain": "TresLeches",
  "rpc": ["https://tres.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.tresleches.finance/", "https://rpc.treschain.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TRES",
    "symbol": "TRES",
    "decimals": 18
  },
  "infoURL": "https://treschain.com",
  "shortName": "TRESMAIN",
  "chainId": 6066,
  "networkId": 6066,
  "icon": {
    "url": "ipfs://QmS33ypsZ1Hx5LMMACaJaxePy9QNYMwu4D12niobExLK74",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "treslechesexplorer",
    "url": "https://explorer.tresleches.finance",
    "icon": "treslechesexplorer",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "tres"
};

var c6552 = {
  "name": "Scolcoin WeiChain Testnet",
  "chain": "SCOLWEI-testnet",
  "rpc": ["https://scolcoin-weichain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.scolcoin.com"],
  "faucets": ["https://faucet.scolcoin.com"],
  "nativeCurrency": {
    "name": "Scolcoin",
    "symbol": "SCOL",
    "decimals": 18
  },
  "infoURL": "https://scolcoin.com",
  "shortName": "SRC-test",
  "chainId": 6552,
  "networkId": 6552,
  "icon": {
    "url": "ipfs://QmVES1eqDXhP8SdeCpM85wvjmhrQDXGRquQebDrSdvJqpt",
    "width": 792,
    "height": 822,
    "format": "png"
  },
  "explorers": [{
    "name": "Scolscan Testnet Explorer",
    "url": "https://testnet-explorer.scolcoin.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "scolcoin-weichain-testnet"
};

var c6626 = {
  "name": "Pixie Chain Mainnet",
  "chain": "PixieChain",
  "rpc": ["https://pixie-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://http-mainnet.chain.pixie.xyz", "wss://ws-mainnet.chain.pixie.xyz"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Pixie Chain Native Token",
    "symbol": "PIX",
    "decimals": 18
  },
  "infoURL": "https://chain.pixie.xyz",
  "shortName": "pixie-chain",
  "chainId": 6626,
  "networkId": 6626,
  "explorers": [{
    "name": "blockscout",
    "url": "https://scan.chain.pixie.xyz",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "pixie-chain"
};

var c6789 = {
  "name": "Gold Smart Chain Mainnet",
  "chain": "STAND",
  "icon": {
    "url": "ipfs://QmPNuymyaKLJhCaXnyrsL8358FeTxabZFsaxMmWNU4Tzt3",
    "width": 396,
    "height": 418,
    "format": "png"
  },
  "rpc": ["https://gold-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mainnet.goldsmartchain.com"],
  "faucets": ["https://faucet.goldsmartchain.com"],
  "nativeCurrency": {
    "name": "Standard in Gold",
    "symbol": "STAND",
    "decimals": 18
  },
  "infoURL": "https://goldsmartchain.com",
  "shortName": "STANDm",
  "chainId": 6789,
  "networkId": 6789,
  "explorers": [{
    "name": "Gold Smart Chain",
    "url": "https://mainnet.goldsmartchain.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "gold-smart-chain"
};

var c6969 = {
  "name": "Tomb Chain Mainnet",
  "chain": "Tomb Chain",
  "rpc": ["https://tomb-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.tombchain.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tomb",
    "symbol": "TOMB",
    "decimals": 18
  },
  "infoURL": "https://tombchain.com/",
  "shortName": "tombchain",
  "chainId": 6969,
  "networkId": 6969,
  "explorers": [{
    "name": "tombscout",
    "url": "https://tombscout.com",
    "standard": "none"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-250",
    "bridges": [{
      "url": "https://lif3.com/bridge"
    }]
  },
  "testnet": false,
  "slug": "tomb-chain"
};

var c6999 = {
  "name": "PolySmartChain",
  "chain": "PSC",
  "rpc": ["https://polysmartchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://seed0.polysmartchain.com/", "https://seed1.polysmartchain.com/", "https://seed2.polysmartchain.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "PSC",
    "symbol": "PSC",
    "decimals": 18
  },
  "infoURL": "https://www.polysmartchain.com/",
  "shortName": "psc",
  "chainId": 6999,
  "networkId": 6999,
  "testnet": false,
  "slug": "polysmartchain"
};

var c7000 = {
  "name": "ZetaChain Mainnet",
  "chain": "ZetaChain",
  "icon": {
    "url": "ipfs://QmeABfwZ2nAxDzYyqZ1LEypPgQFMjEyrx8FfnoPLkF8R3f",
    "width": 1280,
    "height": 1280,
    "format": "png"
  },
  "rpc": ["https://zetachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.mainnet.zetachain.com/evm"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Zeta",
    "symbol": "ZETA",
    "decimals": 18
  },
  "infoURL": "https://docs.zetachain.com/",
  "shortName": "zetachain-mainnet",
  "chainId": 7000,
  "networkId": 7000,
  "status": "incubating",
  "explorers": [{
    "name": "ZetaChain Mainnet Explorer",
    "url": "https://explorer.mainnet.zetachain.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "zetachain"
};

var c7001 = {
  "name": "ZetaChain Athens Testnet",
  "chain": "ZetaChain",
  "icon": {
    "url": "ipfs://QmeABfwZ2nAxDzYyqZ1LEypPgQFMjEyrx8FfnoPLkF8R3f",
    "width": 1280,
    "height": 1280,
    "format": "png"
  },
  "rpc": ["https://zetachain-athens-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.athens2.zetachain.com/evm"],
  "faucets": ["https://labs.zetachain.com/get-zeta"],
  "nativeCurrency": {
    "name": "Zeta",
    "symbol": "aZETA",
    "decimals": 18
  },
  "infoURL": "https://docs.zetachain.com/",
  "shortName": "zetachain-athens",
  "chainId": 7001,
  "networkId": 7001,
  "status": "active",
  "explorers": [{
    "name": "ZetaChain Athens Testnet Explorer",
    "url": "https://explorer.athens.zetachain.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "zetachain-athens-testnet"
};

var c7027 = {
  "name": "Ella the heart",
  "chain": "ella",
  "icon": {
    "url": "ipfs://QmVkAhSaHhH3wKoLT56Aq8dNyEH4RySPEpqPcLwsptGBDm",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://ella-the-heart.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.ella.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ella",
    "symbol": "ELLA",
    "decimals": 18
  },
  "infoURL": "https://ella.network",
  "shortName": "ELLA",
  "chainId": 7027,
  "networkId": 7027,
  "explorers": [{
    "name": "Ella",
    "url": "https://ella.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ella-the-heart"
};

var c7070 = {
  "name": "Planq Mainnet",
  "chain": "Planq",
  "icon": {
    "url": "ipfs://QmWEy9xK5BoqxPuVs7T48WM4exJrxzkEFt45iHcxWqUy8D",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "rpc": ["https://planq.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm-rpc.planq.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Planq",
    "symbol": "PLQ",
    "decimals": 18
  },
  "infoURL": "https://planq.network",
  "shortName": "planq",
  "chainId": 7070,
  "networkId": 7070,
  "explorers": [{
    "name": "Planq EVM Explorer (Blockscout)",
    "url": "https://evm.planq.network",
    "standard": "none"
  }, {
    "name": "Planq Cosmos Explorer (BigDipper)",
    "url": "https://explorer.planq.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "planq"
};

var c7331 = {
  "name": "KLYNTAR",
  "chain": "KLY",
  "rpc": ["https://klyntar.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm.klyntar.org/kly_evm_rpc", "https://evm.klyntarscan.org/kly_evm_rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "KLYNTAR",
    "symbol": "KLY",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://klyntar.org",
  "shortName": "kly",
  "chainId": 7331,
  "networkId": 7331,
  "icon": {
    "url": "ipfs://QmaDr9R6dKnZLsogRxojjq4dwXuXcudR8UeTZ8Nq553K4u",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "explorers": [],
  "status": "incubating",
  "testnet": false,
  "slug": "klyntar"
};

var c7341 = {
  "name": "Shyft Mainnet",
  "chain": "SHYFT",
  "icon": {
    "url": "ipfs://QmUkFZC2ZmoYPTKf7AHdjwRPZoV2h1MCuHaGM4iu8SNFpi",
    "width": 400,
    "height": 400,
    "format": "svg"
  },
  "rpc": ["https://shyft.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.shyft.network/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Shyft",
    "symbol": "SHYFT",
    "decimals": 18
  },
  "infoURL": "https://shyft.network",
  "shortName": "shyft",
  "chainId": 7341,
  "networkId": 7341,
  "slip44": 2147490989,
  "explorers": [{
    "name": "Shyft BX",
    "url": "https://bx.shyft.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "shyft"
};

var c7700 = {
  "name": "Canto",
  "chain": "Canto",
  "rpc": ["https://canto.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://canto.slingshot.finance", "https://canto.neobase.one", "https://mainnode.plexnode.org:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Canto",
    "symbol": "CANTO",
    "decimals": 18
  },
  "infoURL": "https://canto.io",
  "shortName": "canto",
  "chainId": 7700,
  "networkId": 7700,
  "explorers": [{
    "name": "Canto EVM Explorer (Blockscout)",
    "url": "https://evm.explorer.canto.io",
    "standard": "none"
  }, {
    "name": "Canto Cosmos Explorer",
    "url": "https://cosmos-explorers.neobase.one",
    "standard": "none"
  }, {
    "name": "Canto EVM Explorer (Blockscout)",
    "url": "https://tuber.build",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "canto"
};

var c7777 = {
  "name": "Rise of the Warbots Testnet",
  "chain": "nmactest",
  "rpc": ["https://rise-of-the-warbots-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet1.riseofthewarbots.com", "https://testnet2.riseofthewarbots.com", "https://testnet3.riseofthewarbots.com", "https://testnet4.riseofthewarbots.com", "https://testnet5.riseofthewarbots.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Nano Machines",
    "symbol": "NMAC",
    "decimals": 18
  },
  "infoURL": "https://riseofthewarbots.com/",
  "shortName": "RiseOfTheWarbotsTestnet",
  "chainId": 7777,
  "networkId": 7777,
  "explorers": [{
    "name": "avascan",
    "url": "https://testnet.avascan.info/blockchain/2mZ9doojfwHzXN3VXDQELKnKyZYxv7833U8Yq5eTfFx3hxJtiy",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "rise-of-the-warbots-testnet"
};

var c7878 = {
  "name": "Hazlor Testnet",
  "chain": "SCAS",
  "rpc": ["https://hazlor-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://hatlas.rpc.hazlor.com:8545", "wss://hatlas.rpc.hazlor.com:8546"],
  "faucets": ["https://faucet.hazlor.com"],
  "nativeCurrency": {
    "name": "Hazlor Test Coin",
    "symbol": "TSCAS",
    "decimals": 18
  },
  "infoURL": "https://hazlor.com",
  "shortName": "tscas",
  "chainId": 7878,
  "networkId": 7878,
  "explorers": [{
    "name": "Hazlor Testnet Explorer",
    "url": "https://explorer.hazlor.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "hazlor-testnet"
};

var c8000 = {
  "name": "Teleport",
  "chain": "Teleport",
  "rpc": ["https://teleport.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm-rpc.teleport.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tele",
    "symbol": "TELE",
    "decimals": 18
  },
  "infoURL": "https://teleport.network",
  "shortName": "teleport",
  "chainId": 8000,
  "networkId": 8000,
  "icon": {
    "url": "ipfs://QmdP1sLnsmW9dwnfb1GxAXU1nHDzCvWBQNumvMXpdbCSuz",
    "width": 390,
    "height": 390,
    "format": "svg"
  },
  "explorers": [{
    "name": "Teleport EVM Explorer (Blockscout)",
    "url": "https://evm-explorer.teleport.network",
    "standard": "none",
    "icon": "teleport"
  }, {
    "name": "Teleport Cosmos Explorer (Big Dipper)",
    "url": "https://explorer.teleport.network",
    "standard": "none",
    "icon": "teleport"
  }],
  "testnet": false,
  "slug": "teleport"
};

var c8001 = {
  "name": "Teleport Testnet",
  "chain": "Teleport",
  "rpc": ["https://teleport-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm-rpc.testnet.teleport.network"],
  "faucets": ["https://chain-docs.teleport.network/testnet/faucet.html"],
  "nativeCurrency": {
    "name": "Tele",
    "symbol": "TELE",
    "decimals": 18
  },
  "infoURL": "https://teleport.network",
  "shortName": "teleport-testnet",
  "chainId": 8001,
  "networkId": 8001,
  "icon": {
    "url": "ipfs://QmdP1sLnsmW9dwnfb1GxAXU1nHDzCvWBQNumvMXpdbCSuz",
    "width": 390,
    "height": 390,
    "format": "svg"
  },
  "explorers": [{
    "name": "Teleport EVM Explorer (Blockscout)",
    "url": "https://evm-explorer.testnet.teleport.network",
    "standard": "none",
    "icon": "teleport"
  }, {
    "name": "Teleport Cosmos Explorer (Big Dipper)",
    "url": "https://explorer.testnet.teleport.network",
    "standard": "none",
    "icon": "teleport"
  }],
  "testnet": true,
  "slug": "teleport-testnet"
};

var c8029 = {
  "name": "MDGL Testnet",
  "chain": "MDGL",
  "rpc": ["https://mdgl-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.mdgl.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MDGL Token",
    "symbol": "MDGLT",
    "decimals": 18
  },
  "infoURL": "https://mdgl.io",
  "shortName": "mdgl",
  "chainId": 8029,
  "networkId": 8029,
  "testnet": true,
  "slug": "mdgl-testnet"
};

var c8080 = {
  "name": "Shardeum Liberty 1.X",
  "chain": "Shardeum",
  "icon": {
    "url": "ipfs://Qma1bfuubpepKn7DLDy4NPSKDeT3S4VPCNhu6UmdGrb6YD",
    "width": 609,
    "height": 533,
    "format": "png"
  },
  "rpc": ["https://shardeum-liberty-1-x.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://liberty10.shardeum.org/"],
  "faucets": ["https://faucet.liberty10.shardeum.org"],
  "nativeCurrency": {
    "name": "Shardeum SHM",
    "symbol": "SHM",
    "decimals": 18
  },
  "infoURL": "https://docs.shardeum.org/",
  "shortName": "Liberty10",
  "chainId": 8080,
  "networkId": 8080,
  "explorers": [{
    "name": "Shardeum Scan",
    "url": "https://explorer-liberty10.shardeum.org",
    "standard": "none"
  }],
  "redFlags": ["reusedChainId"],
  "testnet": false,
  "slug": "shardeum-liberty-1-x"
};

var c8081 = {
  "name": "Shardeum Liberty 2.X",
  "chain": "Shardeum",
  "icon": {
    "url": "ipfs://Qma1bfuubpepKn7DLDy4NPSKDeT3S4VPCNhu6UmdGrb6YD",
    "width": 609,
    "height": 533,
    "format": "png"
  },
  "rpc": ["https://shardeum-liberty-2-x.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://liberty20.shardeum.org/"],
  "faucets": ["https://faucet.liberty20.shardeum.org"],
  "nativeCurrency": {
    "name": "Shardeum SHM",
    "symbol": "SHM",
    "decimals": 18
  },
  "infoURL": "https://docs.shardeum.org/",
  "shortName": "Liberty20",
  "chainId": 8081,
  "networkId": 8081,
  "explorers": [{
    "name": "Shardeum Scan",
    "url": "https://explorer-liberty20.shardeum.org",
    "standard": "none"
  }],
  "redFlags": ["reusedChainId"],
  "testnet": false,
  "slug": "shardeum-liberty-2-x"
};

var c8082 = {
  "name": "Shardeum Sphinx 1.X",
  "chain": "Shardeum",
  "icon": {
    "url": "ipfs://Qma1bfuubpepKn7DLDy4NPSKDeT3S4VPCNhu6UmdGrb6YD",
    "width": 609,
    "height": 533,
    "format": "png"
  },
  "rpc": ["https://shardeum-sphinx-1-x.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sphinx.shardeum.org/"],
  "faucets": ["https://faucet-sphinx.shardeum.org/"],
  "nativeCurrency": {
    "name": "Shardeum SHM",
    "symbol": "SHM",
    "decimals": 18
  },
  "infoURL": "https://docs.shardeum.org/",
  "shortName": "Sphinx10",
  "chainId": 8082,
  "networkId": 8082,
  "explorers": [{
    "name": "Shardeum Scan",
    "url": "https://explorer-sphinx.shardeum.org",
    "standard": "none"
  }],
  "redFlags": ["reusedChainId"],
  "testnet": false,
  "slug": "shardeum-sphinx-1-x"
};

var c8098 = {
  "name": "StreamuX Blockchain",
  "chain": "StreamuX",
  "rpc": ["https://streamux-blockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://u0ma6t6heb:KDNwOsRDGcyM2Oeui1p431Bteb4rvcWkuPgQNHwB4FM@u0xy4x6x82-u0e2mg517m-rpc.us0-aws.kaleido.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "StreamuX",
    "symbol": "SmuX",
    "decimals": 18
  },
  "infoURL": "https://www.streamux.cloud",
  "shortName": "StreamuX",
  "chainId": 8098,
  "networkId": 8098,
  "testnet": false,
  "slug": "streamux-blockchain"
};

var c8131 = {
  "name": "Qitmeer Network Testnet",
  "chain": "MEER",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Qitmeer Testnet",
    "symbol": "MEER-T",
    "decimals": 18
  },
  "infoURL": "https://github.com/Qitmeer",
  "shortName": "meertest",
  "chainId": 8131,
  "networkId": 8131,
  "icon": {
    "url": "ipfs://QmWSbMuCwQzhBB6GRLYqZ87n5cnpzpYCehCAMMQmUXj4mm",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "meerscan testnet",
    "url": "https://testnet.qng.meerscan.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "qitmeer-network-testnet"
};

var c8181 = {
  "name": "BeOne Chain Testnet",
  "chain": "BOC",
  "rpc": ["https://beone-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://pre-boc1.beonechain.com", "https://pre-boc2.beonechain.com", "https://pre-boc3.beonechain.com"],
  "faucets": ["https://testnet.beonescan.com/faucet"],
  "nativeCurrency": {
    "name": "BeOne Chain Testnet",
    "symbol": "BOC",
    "decimals": 18
  },
  "infoURL": "https://testnet.beonescan.com",
  "shortName": "tBOC",
  "chainId": 8181,
  "networkId": 8181,
  "icon": {
    "url": "ipfs://QmbVLQnaMDu86bPyKgCvTGhFBeYwjr15hQnrCcsp1EkAGL",
    "width": 500,
    "height": 500,
    "format": "png"
  },
  "explorers": [{
    "name": "BeOne Chain Testnet",
    "url": "https://testnet.beonescan.com",
    "icon": "beonechain",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "beone-chain-testnet"
};

var c8217 = {
  "name": "Klaytn Mainnet Cypress",
  "chain": "KLAY",
  "rpc": ["https://klaytn-cypress.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://klaytn.blockpi.network/v1/rpc/public", "https://klaytn-mainnet-rpc.allthatnode.com:8551", "https://public-en-cypress.klaytn.net", "https://public-node-api.klaytnapi.com/v1/cypress"],
  "faucets": [],
  "nativeCurrency": {
    "name": "KLAY",
    "symbol": "KLAY",
    "decimals": 18
  },
  "infoURL": "https://www.klaytn.com/",
  "shortName": "Cypress",
  "chainId": 8217,
  "networkId": 8217,
  "slip44": 8217,
  "explorers": [{
    "name": "klaytnfinder",
    "url": "https://www.klaytnfinder.io/",
    "standard": "none"
  }, {
    "name": "Klaytnscope",
    "url": "https://scope.klaytn.com",
    "standard": "none"
  }],
  "icon": {
    "format": "png",
    "url": "ipfs://bafkreigtgdivlmfvf7trqjqy4vkz2d26xk3iif6av265v4klu5qavsugm4",
    "height": 1000,
    "width": 1000
  },
  "testnet": false,
  "slug": "klaytn-cypress"
};

var c8272 = {
  "name": "Blockton Blockchain",
  "chain": "Blockton Blockchain",
  "icon": {
    "url": "ipfs://bafkreig3hoedafisrgc6iffdo2jcblm6kov35h72gcblc3zkmt7t4ucwhy",
    "width": 800,
    "height": 800,
    "format": "png"
  },
  "rpc": ["https://blockton-blockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.blocktonscan.com/"],
  "faucets": ["https://faucet.blocktonscan.com/"],
  "nativeCurrency": {
    "name": "BLOCKTON",
    "symbol": "BTON",
    "decimals": 18
  },
  "infoURL": "https://blocktoncoin.com",
  "shortName": "BTON",
  "chainId": 8272,
  "networkId": 8272,
  "explorers": [{
    "name": "Blockton Explorer",
    "url": "https://blocktonscan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "blockton-blockchain"
};

var c8285 = {
  "name": "KorthoTest",
  "chain": "Kortho",
  "rpc": ["https://korthotest.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://www.krotho-test.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kortho Test",
    "symbol": "KTO",
    "decimals": 11
  },
  "infoURL": "https://www.kortho.io/",
  "shortName": "Kortho",
  "chainId": 8285,
  "networkId": 8285,
  "testnet": true,
  "slug": "korthotest"
};

var c8387 = {
  "name": "Dracones Financial Services",
  "title": "The Dracones Mainnet",
  "chain": "FUCK",
  "rpc": ["https://dracones-financial-services.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.dracones.net/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Functionally Universal Coin Kind",
    "symbol": "FUCK",
    "decimals": 18
  },
  "infoURL": "https://wolfery.com",
  "shortName": "fuck",
  "chainId": 8387,
  "networkId": 8387,
  "icon": {
    "url": "ipfs://bafybeibpyckp65pqjvrvqhdt26wqoqk55m6anshbfgyqnaemn6l34nlwya",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "explorers": [],
  "testnet": false,
  "slug": "dracones-financial-services"
};

var c8453 = {
  "name": "Base",
  "chain": "ETH",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://base.org",
  "shortName": "base",
  "chainId": 8453,
  "networkId": 8453,
  "status": "incubating",
  "icon": {
    "url": "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png",
    "height": 512,
    "width": 512,
    "format": "png"
  },
  "testnet": false,
  "slug": "base"
};

var c8654 = {
  "name": "Toki Network",
  "chain": "TOKI",
  "rpc": ["https://toki-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.buildwithtoki.com/v0/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Toki",
    "symbol": "TOKI",
    "decimals": 18
  },
  "infoURL": "https://www.buildwithtoki.com",
  "shortName": "toki",
  "chainId": 8654,
  "networkId": 8654,
  "icon": {
    "url": "ipfs://QmbCBBH4dFHGr8u1yQspCieQG9hLcPFNYdRx1wnVsX8hUw",
    "width": 512,
    "height": 512,
    "format": "svg"
  },
  "explorers": [],
  "testnet": false,
  "slug": "toki-network"
};

var c8655 = {
  "name": "Toki Testnet",
  "chain": "TOKI",
  "rpc": ["https://toki-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.buildwithtoki.com/v0/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Toki",
    "symbol": "TOKI",
    "decimals": 18
  },
  "infoURL": "https://www.buildwithtoki.com",
  "shortName": "toki-testnet",
  "chainId": 8655,
  "networkId": 8655,
  "icon": {
    "url": "ipfs://QmbCBBH4dFHGr8u1yQspCieQG9hLcPFNYdRx1wnVsX8hUw",
    "width": 512,
    "height": 512,
    "format": "svg"
  },
  "explorers": [],
  "testnet": true,
  "slug": "toki-testnet"
};

var c8723 = {
  "name": "TOOL Global Mainnet",
  "chain": "OLO",
  "rpc": ["https://tool-global.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-web3.wolot.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TOOL Global",
    "symbol": "OLO",
    "decimals": 18
  },
  "infoURL": "https://ibdt.io",
  "shortName": "olo",
  "chainId": 8723,
  "networkId": 8723,
  "slip44": 479,
  "explorers": [{
    "name": "OLO Block Explorer",
    "url": "https://www.olo.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "tool-global"
};

var c8724 = {
  "name": "TOOL Global Testnet",
  "chain": "OLO",
  "rpc": ["https://tool-global-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-web3.wolot.io"],
  "faucets": ["https://testnet-explorer.wolot.io"],
  "nativeCurrency": {
    "name": "TOOL Global",
    "symbol": "OLO",
    "decimals": 18
  },
  "infoURL": "https://testnet-explorer.wolot.io",
  "shortName": "tolo",
  "chainId": 8724,
  "networkId": 8724,
  "slip44": 479,
  "testnet": true,
  "slug": "tool-global-testnet"
};

var c8738 = {
  "name": "Alph Network",
  "chain": "ALPH",
  "rpc": ["https://alph-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.alph.network", "wss://rpc.alph.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Alph Network",
    "symbol": "ALPH",
    "decimals": 18
  },
  "infoURL": "https://alph.network",
  "shortName": "alph",
  "chainId": 8738,
  "networkId": 8738,
  "explorers": [{
    "name": "alphscan",
    "url": "https://explorer.alph.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "alph-network"
};

var c8768 = {
  "name": "TMY Chain",
  "chain": "TMY",
  "icon": {
    "url": "ipfs://QmXQu3ib9gTo23mdVgMqmrExga6SmAzDQTTctpVBNtfDu9",
    "width": 1024,
    "height": 1023,
    "format": "svg"
  },
  "rpc": ["https://tmy-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node1.tmyblockchain.org/rpc"],
  "faucets": ["https://faucet.tmychain.org/"],
  "nativeCurrency": {
    "name": "TMY",
    "symbol": "TMY",
    "decimals": 18
  },
  "infoURL": "https://tmychain.org/",
  "shortName": "tmy",
  "chainId": 8768,
  "networkId": 8768,
  "testnet": false,
  "slug": "tmy-chain"
};

var c8848 = {
  "name": "MARO Blockchain Mainnet",
  "chain": "MARO Blockchain",
  "icon": {
    "url": "ipfs://bafkreig47k53aipns6nu3u5fxpysp7mogzk6zyvatgpbam7yut3yvtuefa",
    "width": 160,
    "height": 160,
    "format": "png"
  },
  "rpc": ["https://maro-blockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mainnet.ma.ro"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MARO",
    "symbol": "MARO",
    "decimals": 18
  },
  "infoURL": "https://ma.ro/",
  "shortName": "maro",
  "chainId": 8848,
  "networkId": 8848,
  "explorers": [{
    "name": "MARO Scan",
    "url": "https://scan.ma.ro/#",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "maro-blockchain"
};

var c8880 = {
  "name": "Unique",
  "icon": {
    "url": "ipfs://QmbJ7CGZ2GxWMp7s6jy71UGzRsMe4w3KANKXDAExYWdaFR",
    "width": 48,
    "height": 48,
    "format": "svg"
  },
  "chain": "UNQ",
  "rpc": ["https://unique.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.unique.network", "https://eu-rpc.unique.network", "https://asia-rpc.unique.network", "https://us-rpc.unique.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Unique",
    "symbol": "UNQ",
    "decimals": 18
  },
  "infoURL": "https://unique.network",
  "shortName": "unq",
  "chainId": 8880,
  "networkId": 8880,
  "explorers": [{
    "name": "Unique Scan",
    "url": "https://uniquescan.io/unique",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "unique"
};

var c8881 = {
  "name": "Quartz by Unique",
  "icon": {
    "url": "ipfs://QmaGPdccULQEFcCGxzstnmE8THfac2kSiGwvWRAiaRq4dp",
    "width": 48,
    "height": 48,
    "format": "svg"
  },
  "chain": "UNQ",
  "rpc": ["https://quartz-by-unique.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-quartz.unique.network", "https://quartz.api.onfinality.io/public-ws", "https://eu-rpc-quartz.unique.network", "https://asia-rpc-quartz.unique.network", "https://us-rpc-quartz.unique.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Quartz",
    "symbol": "QTZ",
    "decimals": 18
  },
  "infoURL": "https://unique.network",
  "shortName": "qtz",
  "chainId": 8881,
  "networkId": 8881,
  "explorers": [{
    "name": "Unique Scan / Quartz",
    "url": "https://uniquescan.io/quartz",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "quartz-by-unique"
};

var c8882 = {
  "name": "Opal testnet by Unique",
  "icon": {
    "url": "ipfs://QmYJDpmWyjDa3H6BxweFmQXk4fU8b1GU7M9EqYcaUNvXzc",
    "width": 48,
    "height": 48,
    "format": "svg"
  },
  "chain": "UNQ",
  "rpc": ["https://opal-testnet-by-unique.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-opal.unique.network", "https://us-rpc-opal.unique.network", "https://eu-rpc-opal.unique.network", "https://asia-rpc-opal.unique.network"],
  "faucets": ["https://t.me/unique2faucet_opal_bot"],
  "nativeCurrency": {
    "name": "Opal",
    "symbol": "UNQ",
    "decimals": 18
  },
  "infoURL": "https://unique.network",
  "shortName": "opl",
  "chainId": 8882,
  "networkId": 8882,
  "explorers": [{
    "name": "Unique Scan / Opal",
    "url": "https://uniquescan.io/opal",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "opal-testnet-by-unique"
};

var c8883 = {
  "name": "Sapphire by Unique",
  "icon": {
    "url": "ipfs://Qmd1PGt4cDRjFbh4ihP5QKEd4XQVwN1MkebYKdF56V74pf",
    "width": 48,
    "height": 48,
    "format": "svg"
  },
  "chain": "UNQ",
  "rpc": ["https://sapphire-by-unique.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-sapphire.unique.network", "https://us-rpc-sapphire.unique.network", "https://eu-rpc-sapphire.unique.network", "https://asia-rpc-sapphire.unique.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Quartz",
    "symbol": "QTZ",
    "decimals": 18
  },
  "infoURL": "https://unique.network",
  "shortName": "sph",
  "chainId": 8883,
  "networkId": 8883,
  "explorers": [{
    "name": "Unique Scan / Sapphire",
    "url": "https://uniquescan.io/sapphire",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "sapphire-by-unique"
};

var c8888 = {
  "name": "XANAChain",
  "chain": "XANAChain",
  "rpc": ["https://xanachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.xana.net/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "XETA",
    "symbol": "XETA",
    "decimals": 18
  },
  "infoURL": "https://xanachain.xana.net/",
  "shortName": "XANAChain",
  "chainId": 8888,
  "networkId": 8888,
  "icon": {
    "url": "ipfs://QmWGNfwJ9o2vmKD3E6fjrxpbFP8W5q45zmYzHHoXwqqAoj",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "XANAChain",
    "url": "https://xanachain.xana.net",
    "standard": "EIP3091"
  }],
  "redFlags": ["reusedChainId"],
  "testnet": false,
  "slug": "xanachain"
};

var c8889 = {
  "name": "Vyvo Smart Chain",
  "chain": "VSC",
  "rpc": ["https://vyvo-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://vsc-dataseed.vyvo.org:8889"],
  "faucets": [],
  "nativeCurrency": {
    "name": "VSC",
    "symbol": "VSC",
    "decimals": 18
  },
  "infoURL": "https://vsc-dataseed.vyvo.org",
  "shortName": "vsc",
  "chainId": 8889,
  "networkId": 8889,
  "testnet": false,
  "slug": "vyvo-smart-chain"
};

var c8898 = {
  "name": "Mammoth Mainnet",
  "title": "Mammoth Chain",
  "chain": "MMT",
  "rpc": ["https://mammoth.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://dataseed.mmtscan.io", "https://dataseed1.mmtscan.io", "https://dataseed2.mmtscan.io"],
  "faucets": ["https://faucet.mmtscan.io/"],
  "nativeCurrency": {
    "name": "Mammoth Token",
    "symbol": "MMT",
    "decimals": 18
  },
  "infoURL": "https://mmtchain.io/",
  "shortName": "mmt",
  "chainId": 8898,
  "networkId": 8898,
  "icon": {
    "url": "ipfs://QmaF5gi2CbDKsJ2UchNkjBqmWjv8JEDP3vePBmxeUHiaK4",
    "width": 250,
    "height": 250,
    "format": "png"
  },
  "explorers": [{
    "name": "mmtscan",
    "url": "https://mmtscan.io",
    "standard": "EIP3091",
    "icon": "mmt"
  }],
  "testnet": false,
  "slug": "mammoth"
};

var c8899 = {
  "name": "JIBCHAIN L1",
  "chain": "JBC",
  "rpc": ["https://jibchain-l1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-l1.jibchain.net"],
  "faucets": [],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "nativeCurrency": {
    "name": "JIBCOIN",
    "symbol": "JBC",
    "decimals": 18
  },
  "infoURL": "https://jibchain.net",
  "shortName": "jbc",
  "chainId": 8899,
  "networkId": 8899,
  "explorers": [{
    "name": "JIBCHAIN Explorer",
    "url": "https://exp-l1.jibchain.net",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "jibchain-l1"
};

var c8989 = {
  "name": "Giant Mammoth Mainnet",
  "title": "Giant Mammoth Chain",
  "chain": "GMMT",
  "rpc": ["https://giant-mammoth.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-asia.gmmtchain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Giant Mammoth Coin",
    "symbol": "GMMT",
    "decimals": 18
  },
  "infoURL": "https://gmmtchain.io/",
  "shortName": "gmmt",
  "chainId": 8989,
  "networkId": 8989,
  "icon": {
    "url": "ipfs://QmVth4aPeskDTFqRifUugJx6gyEHCmx2PFbMWUtsCSQFkF",
    "width": 468,
    "height": 518,
    "format": "png"
  },
  "explorers": [{
    "name": "gmmtscan",
    "url": "https://scan.gmmtchain.io",
    "standard": "EIP3091",
    "icon": "gmmt"
  }],
  "testnet": false,
  "slug": "giant-mammoth"
};

var c8995 = {
  "name": "bloxberg",
  "chain": "bloxberg",
  "rpc": ["https://bloxberg.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://core.bloxberg.org"],
  "faucets": ["https://faucet.bloxberg.org/"],
  "nativeCurrency": {
    "name": "BERG",
    "symbol": "U+25B3",
    "decimals": 18
  },
  "infoURL": "https://bloxberg.org",
  "shortName": "berg",
  "chainId": 8995,
  "networkId": 8995,
  "testnet": false,
  "slug": "bloxberg"
};

var c9000 = {
  "name": "Evmos Testnet",
  "chain": "Evmos",
  "rpc": ["https://evmos-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth.bd.evmos.dev:8545"],
  "faucets": ["https://faucet.evmos.dev"],
  "nativeCurrency": {
    "name": "test-Evmos",
    "symbol": "tEVMOS",
    "decimals": 18
  },
  "infoURL": "https://evmos.org",
  "shortName": "evmos-testnet",
  "chainId": 9000,
  "networkId": 9000,
  "icon": {
    "url": "ipfs://QmeZW6VKUFTbz7PPW8PmDR3ZHa6osYPLBFPnW8T5LSU49c",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "explorers": [{
    "name": "Evmos EVM Explorer",
    "url": "https://evm.evmos.dev",
    "standard": "EIP3091",
    "icon": "evmos"
  }, {
    "name": "Evmos Cosmos Explorer",
    "url": "https://explorer.evmos.dev",
    "standard": "none",
    "icon": "evmos"
  }],
  "testnet": true,
  "slug": "evmos-testnet"
};

var c9001 = {
  "name": "Evmos",
  "chain": "Evmos",
  "rpc": ["https://evmos.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth.bd.evmos.org:8545", "https://evmos-evm.publicnode.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Evmos",
    "symbol": "EVMOS",
    "decimals": 18
  },
  "infoURL": "https://evmos.org",
  "shortName": "evmos",
  "chainId": 9001,
  "networkId": 9001,
  "icon": {
    "url": "ipfs://QmeZW6VKUFTbz7PPW8PmDR3ZHa6osYPLBFPnW8T5LSU49c",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "explorers": [{
    "name": "Evmos EVM Explorer (Escan)",
    "url": "https://escan.live",
    "standard": "none",
    "icon": "evmos"
  }, {
    "name": "Evmos Cosmos Explorer (Mintscan)",
    "url": "https://www.mintscan.io/evmos",
    "standard": "none",
    "icon": "evmos"
  }],
  "testnet": false,
  "slug": "evmos"
};

var c9012 = {
  "name": "BerylBit Mainnet",
  "chain": "BRB",
  "rpc": ["https://berylbit.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.berylbit.io"],
  "faucets": ["https://t.me/BerylBit"],
  "nativeCurrency": {
    "name": "BerylBit Chain Native Token",
    "symbol": "BRB",
    "decimals": 18
  },
  "infoURL": "https://www.beryl-bit.com",
  "shortName": "brb",
  "chainId": 9012,
  "networkId": 9012,
  "icon": {
    "url": "ipfs://QmeDXHkpranzqGN1BmQqZSrFp4vGXf4JfaB5iq8WHHiwDi",
    "width": 162,
    "height": 162,
    "format": "png"
  },
  "explorers": [{
    "name": "berylbit-explorer",
    "url": "https://explorer.berylbit.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "berylbit"
};

var c9100 = {
  "name": "Genesis Coin",
  "chain": "Genesis",
  "rpc": ["https://genesis-coin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://genesis-gn.com", "wss://genesis-gn.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GN Coin",
    "symbol": "GNC",
    "decimals": 18
  },
  "infoURL": "https://genesis-gn.com",
  "shortName": "GENEC",
  "chainId": 9100,
  "networkId": 9100,
  "testnet": false,
  "slug": "genesis-coin"
};

var c9339 = {
  "name": "Dogcoin Testnet",
  "chain": "DOGS",
  "icon": {
    "url": "ipfs://QmZCadkExKThak3msvszZjo6UnAbUJKE61dAcg4TixuMC3",
    "width": 160,
    "height": 171,
    "format": "png"
  },
  "rpc": ["https://dogcoin-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.dogcoin.me"],
  "faucets": ["https://faucet.dogcoin.network"],
  "nativeCurrency": {
    "name": "Dogcoin",
    "symbol": "DOGS",
    "decimals": 18
  },
  "infoURL": "https://dogcoin.network",
  "shortName": "DOGSt",
  "chainId": 9339,
  "networkId": 9339,
  "explorers": [{
    "name": "Dogcoin",
    "url": "https://testnet.dogcoin.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "dogcoin-testnet"
};

var c9527 = {
  "name": "Rangers Protocol Testnet Robin",
  "chain": "Rangers",
  "icon": {
    "url": "ipfs://QmXR5e5SDABWfQn6XT9uMsVYAo5Bv7vUv4jVs8DFqatZWG",
    "width": 2000,
    "height": 2000,
    "format": "png"
  },
  "rpc": ["https://rangers-protocol-testnet-robin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://robin.rangersprotocol.com/api/jsonrpc"],
  "faucets": ["https://robin-faucet.rangersprotocol.com"],
  "nativeCurrency": {
    "name": "Rangers Protocol Gas",
    "symbol": "tRPG",
    "decimals": 18
  },
  "infoURL": "https://rangersprotocol.com",
  "shortName": "trpg",
  "chainId": 9527,
  "networkId": 9527,
  "explorers": [{
    "name": "rangersscan-robin",
    "url": "https://robin-rangersscan.rangersprotocol.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "rangers-protocol-testnet-robin"
};

var c9528 = {
  "name": "QEasyWeb3 Testnet",
  "chain": "QET",
  "rpc": ["https://qeasyweb3-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://qeasyweb3.com"],
  "faucets": ["http://faucet.qeasyweb3.com"],
  "nativeCurrency": {
    "name": "QET",
    "symbol": "QET",
    "decimals": 18
  },
  "infoURL": "https://www.qeasyweb3.com",
  "shortName": "QETTest",
  "chainId": 9528,
  "networkId": 9528,
  "explorers": [{
    "name": "QEasyWeb3 Explorer",
    "url": "https://www.qeasyweb3.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "qeasyweb3-testnet"
};

var c9700 = {
  "name": "Oort MainnetDev",
  "title": "Oort MainnetDev",
  "chain": "MainnetDev",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Oort",
    "symbol": "CCN",
    "decimals": 18
  },
  "infoURL": "https://oortech.com",
  "shortName": "MainnetDev",
  "chainId": 9700,
  "networkId": 9700,
  "icon": {
    "url": "ipfs://QmZ1jbxFZcuotj3eZ6iKFrg9ZXnaV8AK6sGRa7ELrceWyD",
    "width": 1043,
    "height": 1079,
    "format": "png"
  },
  "testnet": false,
  "slug": "oort-dev"
};

var c9728 = {
  "name": "Boba BNB Testnet",
  "chain": "Boba BNB Testnet",
  "rpc": ["https://boba-bnb-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.bnb.boba.network", "wss://wss.testnet.bnb.boba.network", "https://replica.testnet.bnb.boba.network", "wss://replica-wss.testnet.bnb.boba.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Boba Token",
    "symbol": "BOBA",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "BobaBnbTestnet",
  "chainId": 9728,
  "networkId": 9728,
  "explorers": [{
    "name": "Boba BNB Testnet block explorer",
    "url": "https://blockexplorer.testnet.bnb.boba.network",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "boba-bnb-testnet"
};

var c9768 = {
  "name": "MainnetZ Testnet",
  "chain": "NetZ",
  "icon": {
    "url": "ipfs://QmT5gJ5weBiLT3GoYuF5yRTRLdPLCVZ3tXznfqW7M8fxgG",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "rpc": ["https://z-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.mainnetz.io"],
  "faucets": ["https://faucet.mainnetz.io"],
  "nativeCurrency": {
    "name": "MainnetZ",
    "symbol": "NetZ",
    "decimals": 18
  },
  "infoURL": "https://testnet.mainnetz.io",
  "shortName": "NetZt",
  "chainId": 9768,
  "networkId": 9768,
  "explorers": [{
    "name": "MainnetZ",
    "url": "https://testnet.mainnetz.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "z-testnet"
};

var c9999 = {
  "name": "myOwn Testnet",
  "chain": "myOwn",
  "rpc": ["https://myown-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://geth.dev.bccloud.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MYN",
    "symbol": "MYN",
    "decimals": 18
  },
  "infoURL": "https://docs.bccloud.net/",
  "shortName": "myn",
  "chainId": 9999,
  "networkId": 9999,
  "testnet": true,
  "slug": "myown-testnet"
};

var c10000 = {
  "name": "Smart Bitcoin Cash",
  "chain": "smartBCH",
  "rpc": ["https://smart-bitcoin-cash.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://smartbch.greyh.at", "https://rpc-mainnet.smartbch.org", "https://smartbch.fountainhead.cash/mainnet", "https://smartbch.devops.cash/mainnet"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "decimals": 18
  },
  "infoURL": "https://smartbch.org/",
  "shortName": "smartbch",
  "chainId": 10000,
  "networkId": 10000,
  "testnet": false,
  "slug": "smart-bitcoin-cash"
};

var c10001 = {
  "name": "Smart Bitcoin Cash Testnet",
  "chain": "smartBCHTest",
  "rpc": ["https://smart-bitcoin-cash-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.smartbch.org", "https://smartbch.devops.cash/testnet"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin Cash Test Token",
    "symbol": "BCHT",
    "decimals": 18
  },
  "infoURL": "http://smartbch.org/",
  "shortName": "smartbchtest",
  "chainId": 10001,
  "networkId": 10001,
  "testnet": true,
  "slug": "smart-bitcoin-cash-testnet"
};

var c10024 = {
  "name": "Gon Chain",
  "chain": "GonChain",
  "icon": {
    "url": "ipfs://QmPtiJGaApbW3ATZhPW3pKJpw3iGVrRGsZLWhrDKF9ZK18",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "rpc": ["https://gon-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node1.testnet.gaiaopen.network", "http://database1.gaiaopen.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Gon Token",
    "symbol": "GT",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "gon",
  "chainId": 10024,
  "networkId": 10024,
  "explorers": [{
    "name": "Gon Explorer",
    "url": "https://gonscan.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "gon-chain"
};

var c10086 = {
  "name": "SJATSH",
  "chain": "ETH",
  "rpc": ["https://sjatsh.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://geth.free.idcfengye.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://sjis.me",
  "shortName": "SJ",
  "chainId": 10086,
  "networkId": 10086,
  "testnet": false,
  "slug": "sjatsh"
};

var c10101 = {
  "name": "Blockchain Genesis Mainnet",
  "chain": "GEN",
  "rpc": ["https://blockchain-genesis.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eu.mainnet.xixoio.com", "https://us.mainnet.xixoio.com", "https://asia.mainnet.xixoio.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GEN",
    "symbol": "GEN",
    "decimals": 18
  },
  "infoURL": "https://www.xixoio.com/",
  "shortName": "GEN",
  "chainId": 10101,
  "networkId": 10101,
  "testnet": false,
  "slug": "blockchain-genesis"
};

var c10200 = {
  "name": "Chiado Testnet",
  "chain": "CHI",
  "icon": {
    "url": "ipfs://bafybeidk4swpgdyqmpz6shd5onvpaujvwiwthrhypufnwr6xh3dausz2dm",
    "width": 1800,
    "height": 1800,
    "format": "png"
  },
  "rpc": ["https://chiado-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.chiadochain.net", "https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado"],
  "faucets": ["https://gnosisfaucet.com"],
  "nativeCurrency": {
    "name": "Chiado xDAI",
    "symbol": "xDAI",
    "decimals": 18
  },
  "infoURL": "https://docs.gnosischain.com",
  "shortName": "chi",
  "chainId": 10200,
  "networkId": 10200,
  "explorers": [{
    "name": "blockscout",
    "url": "https://blockscout.chiadochain.net",
    "icon": "blockscout",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "chiado-testnet"
};

var c10248 = {
  "name": "0XTade",
  "chain": "0XTade Chain",
  "rpc": ["https://0xtade.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node.0xtchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "0XT",
    "symbol": "0XT",
    "decimals": 18
  },
  "infoURL": "https://www.0xtrade.finance/",
  "shortName": "0xt",
  "chainId": 10248,
  "networkId": 10248,
  "explorers": [{
    "name": "0xtrade Scan",
    "url": "https://www.0xtscan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "0xtade"
};

var c10507 = {
  "name": "Numbers Mainnet",
  "chain": "NUM",
  "icon": {
    "url": "ipfs://bafkreie3ba6ofosjqqiya6empkyw6u5xdrtcfzi2evvyt4u6utzeiezyhi",
    "width": 1500,
    "height": 1500,
    "format": "png"
  },
  "rpc": ["https://numbers.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnetrpc.num.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "NUM Token",
    "symbol": "NUM",
    "decimals": 18
  },
  "infoURL": "https://numbersprotocol.io",
  "shortName": "Jade",
  "chainId": 10507,
  "networkId": 10507,
  "explorers": [{
    "name": "ethernal",
    "url": "https://mainnet.num.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "numbers"
};

var c10508 = {
  "name": "Numbers Testnet",
  "chain": "NUM",
  "icon": {
    "url": "ipfs://bafkreie3ba6ofosjqqiya6empkyw6u5xdrtcfzi2evvyt4u6utzeiezyhi",
    "width": 1500,
    "height": 1500,
    "format": "png"
  },
  "rpc": ["https://numbers-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnetrpc.num.network"],
  "faucets": ["https://faucet.avax.network/?subnet=num", "https://faucet.num.network"],
  "nativeCurrency": {
    "name": "NUM Token",
    "symbol": "NUM",
    "decimals": 18
  },
  "infoURL": "https://numbersprotocol.io",
  "shortName": "Snow",
  "chainId": 10508,
  "networkId": 10508,
  "explorers": [{
    "name": "ethernal",
    "url": "https://testnet.num.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "numbers-testnet"
};

var c10823 = {
  "name": "CryptoCoinPay",
  "chain": "CCP",
  "rpc": ["https://cryptocoinpay.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://node106.cryptocoinpay.info:8545", "ws://node106.cryptocoinpay.info:8546"],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmPw1ixYYeXvTiRWoCt2jWe4YMd3B5o7TzL18SBEHXvhXX",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "nativeCurrency": {
    "name": "CryptoCoinPay",
    "symbol": "CCP",
    "decimals": 18
  },
  "infoURL": "https://www.cryptocoinpay.co",
  "shortName": "CCP",
  "chainId": 10823,
  "networkId": 10823,
  "explorers": [{
    "name": "CCP Explorer",
    "url": "https://cryptocoinpay.info",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "cryptocoinpay"
};

var c10946 = {
  "name": "Quadrans Blockchain",
  "chain": "QDC",
  "icon": {
    "url": "ipfs://QmZFiYHnE4TrezPz8wSap9nMxG6m98w4fv7ataj2TfLNck",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "rpc": ["https://quadrans-blockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.quadrans.io", "https://rpcna.quadrans.io", "https://rpceu.quadrans.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Quadrans Coin",
    "symbol": "QDC",
    "decimals": 18
  },
  "infoURL": "https://quadrans.io",
  "shortName": "quadrans",
  "chainId": 10946,
  "networkId": 10946,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.quadrans.io",
    "icon": "quadrans",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quadrans-blockchain"
};

var c10947 = {
  "name": "Quadrans Blockchain Testnet",
  "chain": "tQDC",
  "icon": {
    "url": "ipfs://QmZFiYHnE4TrezPz8wSap9nMxG6m98w4fv7ataj2TfLNck",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "rpc": ["https://quadrans-blockchain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpctest.quadrans.io", "https://rpctest2.quadrans.io"],
  "faucets": ["https://faucetpage.quadrans.io"],
  "nativeCurrency": {
    "name": "Quadrans Testnet Coin",
    "symbol": "tQDC",
    "decimals": 18
  },
  "infoURL": "https://quadrans.io",
  "shortName": "quadranstestnet",
  "chainId": 10947,
  "networkId": 10947,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.testnet.quadrans.io",
    "icon": "quadrans",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "quadrans-blockchain-testnet"
};

var c11110 = {
  "name": "Astra",
  "chain": "Astra",
  "rpc": ["https://astra.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.astranaut.io", "https://rpc1.astranaut.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Astra",
    "symbol": "ASA",
    "decimals": 18
  },
  "infoURL": "https://astranaut.io",
  "shortName": "astra",
  "chainId": 11110,
  "networkId": 11110,
  "icon": {
    "url": "ipfs://QmaBtaukPNNUNjdJSUAwuFFQMLbZX1Pc3fvXKTKQcds7Kf",
    "width": 104,
    "height": 80,
    "format": "png"
  },
  "explorers": [{
    "name": "Astra EVM Explorer (Blockscout)",
    "url": "https://explorer.astranaut.io",
    "standard": "none",
    "icon": "astra"
  }, {
    "name": "Astra PingPub Explorer",
    "url": "https://ping.astranaut.io/astra",
    "standard": "none",
    "icon": "astra"
  }],
  "testnet": false,
  "slug": "astra"
};

var c11111 = {
  "name": "WAGMI",
  "chain": "WAGMI",
  "icon": {
    "url": "ipfs://QmNoyUXxnak8B3xgFxErkVfyVEPJUMHBzq7qJcYzkUrPR4",
    "width": 1920,
    "height": 1920,
    "format": "png"
  },
  "rpc": ["https://wagmi.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://subnets.avax.network/wagmi/wagmi-chain-testnet/rpc"],
  "faucets": ["https://faucet.avax.network/?subnet=wagmi"],
  "nativeCurrency": {
    "name": "WAGMI",
    "symbol": "WGM",
    "decimals": 18
  },
  "infoURL": "https://subnets-test.avax.network/wagmi/details",
  "shortName": "WAGMI",
  "chainId": 11111,
  "networkId": 11111,
  "explorers": [{
    "name": "Avalanche Subnet Explorer",
    "url": "https://subnets-test.avax.network/wagmi",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "wagmi"
};

var c11115 = {
  "name": "Astra Testnet",
  "chain": "Astra",
  "rpc": ["https://astra-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.astranaut.dev"],
  "faucets": ["https://faucet.astranaut.dev"],
  "nativeCurrency": {
    "name": "test-Astra",
    "symbol": "tASA",
    "decimals": 18
  },
  "infoURL": "https://astranaut.io",
  "shortName": "astra-testnet",
  "chainId": 11115,
  "networkId": 11115,
  "icon": {
    "url": "ipfs://QmaBtaukPNNUNjdJSUAwuFFQMLbZX1Pc3fvXKTKQcds7Kf",
    "width": 104,
    "height": 80,
    "format": "png"
  },
  "explorers": [{
    "name": "Astra EVM Explorer",
    "url": "https://explorer.astranaut.dev",
    "standard": "EIP3091",
    "icon": "astra"
  }, {
    "name": "Astra PingPub Explorer",
    "url": "https://ping.astranaut.dev/astra",
    "standard": "none",
    "icon": "astra"
  }],
  "testnet": true,
  "slug": "astra-testnet"
};

var c11119 = {
  "name": "HashBit Mainnet",
  "chain": "HBIT",
  "rpc": ["https://hashbit.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.hashbit.org", "https://rpc.hashbit.org"],
  "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  "nativeCurrency": {
    "name": "HashBit Native Token",
    "symbol": "HBIT",
    "decimals": 18
  },
  "infoURL": "https://hashbit.org",
  "shortName": "hbit",
  "chainId": 11119,
  "networkId": 11119,
  "explorers": [{
    "name": "hashbitscan",
    "url": "https://explorer.hashbit.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "hashbit"
};

var c11235 = {
  "name": "Haqq Network",
  "chain": "Haqq",
  "rpc": ["https://haqq-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.eth.haqq.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Islamic Coin",
    "symbol": "ISLM",
    "decimals": 18
  },
  "infoURL": "https://islamiccoin.net",
  "shortName": "ISLM",
  "chainId": 11235,
  "networkId": 11235,
  "explorers": [{
    "name": "Mainnet HAQQ Explorer",
    "url": "https://explorer.haqq.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "haqq-network"
};

var c11437 = {
  "name": "Shyft Testnet",
  "chain": "SHYFTT",
  "icon": {
    "url": "ipfs://QmUkFZC2ZmoYPTKf7AHdjwRPZoV2h1MCuHaGM4iu8SNFpi",
    "width": 400,
    "height": 400,
    "format": "svg"
  },
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Shyft Test Token",
    "symbol": "SHYFTT",
    "decimals": 18
  },
  "infoURL": "https://shyft.network",
  "shortName": "shyftt",
  "chainId": 11437,
  "networkId": 11437,
  "explorers": [{
    "name": "Shyft Testnet BX",
    "url": "https://bx.testnet.shyft.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "shyft-testnet"
};

var c11612 = {
  "name": "Sardis Testnet",
  "chain": "SRDX",
  "icon": {
    "url": "ipfs://QmdR9QJjQEh1mBnf2WbJfehverxiP5RDPWMtEECbDP2rc3",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://sardis-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.sardisnetwork.com"],
  "faucets": ["https://faucet.sardisnetwork.com"],
  "nativeCurrency": {
    "name": "Sardis",
    "symbol": "SRDX",
    "decimals": 18
  },
  "infoURL": "https://mysardis.com",
  "shortName": "SRDXt",
  "chainId": 11612,
  "networkId": 11612,
  "explorers": [{
    "name": "Sardis",
    "url": "https://testnet.sardisnetwork.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "sardis-testnet"
};

var c11888 = {
  "name": "SanR Chain",
  "chain": "SanRChain",
  "rpc": ["https://sanr-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sanrchain-node.santiment.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "nSAN",
    "symbol": "nSAN",
    "decimals": 18
  },
  "infoURL": "https://sanr.app",
  "shortName": "SAN",
  "chainId": 11888,
  "networkId": 11888,
  "icon": {
    "url": "ipfs://QmPLMg5mYD8XRknvYbDkD2x7FXxYan7MPTeUWZC2CihwDM",
    "width": 2048,
    "height": 2048,
    "format": "png"
  },
  "parent": {
    "chain": "eip155-1",
    "type": "L2",
    "bridges": [{
      "url": "https://sanr.app"
    }]
  },
  "explorers": [{
    "name": "SanR Chain Explorer",
    "url": "https://sanrchain-explorer.santiment.net",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "sanr-chain"
};

var c12051 = {
  "name": "Singularity ZERO Testnet",
  "chain": "ZERO",
  "rpc": ["https://singularity-zero-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://betaenv.singularity.gold:18545"],
  "faucets": ["https://nft.singularity.gold"],
  "nativeCurrency": {
    "name": "ZERO",
    "symbol": "tZERO",
    "decimals": 18
  },
  "infoURL": "https://www.singularity.gold",
  "shortName": "tZERO",
  "chainId": 12051,
  "networkId": 12051,
  "explorers": [{
    "name": "zeroscan",
    "url": "https://betaenv.singularity.gold:18002",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "singularity-zero-testnet"
};

var c12052 = {
  "name": "Singularity ZERO Mainnet",
  "chain": "ZERO",
  "rpc": ["https://singularity-zero.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://zerorpc.singularity.gold"],
  "faucets": ["https://zeroscan.singularity.gold"],
  "nativeCurrency": {
    "name": "ZERO",
    "symbol": "ZERO",
    "decimals": 18
  },
  "infoURL": "https://www.singularity.gold",
  "shortName": "ZERO",
  "chainId": 12052,
  "networkId": 12052,
  "slip44": 621,
  "explorers": [{
    "name": "zeroscan",
    "url": "https://zeroscan.singularity.gold",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "singularity-zero"
};

var c12306 = {
  "name": "Fibonacci Mainnet",
  "chain": "FIBO",
  "icon": {
    "url": "ipfs://bafkreidiedaz3jugxmh2ylzlc4nympbd5iwab33adhwkcnblyop6vvj25y",
    "width": 1494,
    "height": 1494,
    "format": "png"
  },
  "rpc": ["https://fibonacci.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node1.fibo-api.asia"],
  "faucets": [],
  "nativeCurrency": {
    "name": "FIBONACCI UTILITY TOKEN",
    "symbol": "FIBO",
    "decimals": 18
  },
  "infoURL": "https://fibochain.org",
  "shortName": "fibo",
  "chainId": 12306,
  "networkId": 1230,
  "explorers": [{
    "name": "fiboscan",
    "url": "https://scan.fibochain.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "fibonacci"
};

var c12321 = {
  "name": "BLG Testnet",
  "chain": "BLG",
  "icon": {
    "url": "ipfs://QmUN5j2cre8GHKv52JE8ag88aAnRmuHMGFxePPvKMogisC",
    "width": 512,
    "height": 512,
    "format": "svg"
  },
  "rpc": ["https://blg-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.blgchain.com"],
  "faucets": ["https://faucet.blgchain.com"],
  "nativeCurrency": {
    "name": "Blg",
    "symbol": "BLG",
    "decimals": 18
  },
  "infoURL": "https://blgchain.com",
  "shortName": "blgchain",
  "chainId": 12321,
  "networkId": 12321,
  "testnet": true,
  "slug": "blg-testnet"
};

var c12345 = {
  "name": "Step Testnet",
  "title": "Step Test Network",
  "chain": "STEP",
  "icon": {
    "url": "ipfs://QmVp9jyb3UFW71867yVtymmiRw7dPY4BTnsp3hEjr9tn8L",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://step-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.step.network"],
  "faucets": ["https://faucet.step.network"],
  "nativeCurrency": {
    "name": "FITFI",
    "symbol": "FITFI",
    "decimals": 18
  },
  "infoURL": "https://step.network",
  "shortName": "steptest",
  "chainId": 12345,
  "networkId": 12345,
  "explorers": [{
    "name": "StepScan",
    "url": "https://testnet.stepscan.io",
    "icon": "step",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-43113"
  },
  "testnet": true,
  "slug": "step-testnet"
};

var c12715 = {
  "name": "Rikeza Network Testnet",
  "title": "Rikeza Network Testnet",
  "chain": "Rikeza",
  "rpc": ["https://rikeza-network-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.rikscan.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Rikeza",
    "symbol": "RIK",
    "decimals": 18
  },
  "infoURL": "https://rikeza.io",
  "shortName": "tRIK",
  "chainId": 12715,
  "networkId": 12715,
  "explorers": [{
    "name": "Rikeza Blockchain explorer",
    "url": "https://testnet.rikscan.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "rikeza-network-testnet"
};

var c13000 = {
  "name": "SPS",
  "chain": "SPS",
  "rpc": ["https://sps.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.ssquad.games"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ECG",
    "symbol": "ECG",
    "decimals": 18
  },
  "infoURL": "https://ssquad.games/",
  "shortName": "SPS",
  "chainId": 13000,
  "networkId": 13000,
  "explorers": [{
    "name": "SPS Explorer",
    "url": "http://spsscan.ssquad.games",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "sps"
};

var c13308 = {
  "name": "Credit Smartchain Mainnet",
  "chain": "CREDIT",
  "rpc": ["https://credit-smartchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.cscscan.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Credit",
    "symbol": "CREDIT",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://creditsmartchain.com",
  "shortName": "Credit",
  "chainId": 13308,
  "networkId": 1,
  "icon": {
    "url": "ipfs://bafkreifbso3gd4wu5wxl27xyurxctmuae2jyuy37guqtzx23nga6ba4ag4",
    "width": 1000,
    "height": 1628,
    "format": "png"
  },
  "explorers": [{
    "name": "CSC Scan",
    "url": "https://explorer.cscscan.io",
    "icon": "credit",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "credit-smartchain"
};

var c13381 = {
  "name": "Phoenix Mainnet",
  "chain": "Phoenix",
  "rpc": ["https://phoenix.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.phoenixplorer.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Phoenix",
    "symbol": "PHX",
    "decimals": 18
  },
  "infoURL": "https://cryptophoenix.org/phoenix",
  "shortName": "Phoenix",
  "chainId": 13381,
  "networkId": 13381,
  "icon": {
    "url": "ipfs://QmYiLMeKDXMSNuQmtxNdxm53xR588pcRXMf7zuiZLjQnc6",
    "width": 1501,
    "height": 1501,
    "format": "png"
  },
  "explorers": [{
    "name": "phoenixplorer",
    "url": "https://phoenixplorer.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "phoenix"
};

var c13812 = {
  "name": "Susono",
  "chain": "SUS",
  "rpc": ["https://susono.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://gateway.opn.network/node/ext/bc/2VsZe5DstWw2bfgdx3YbjKcMsJnNDjni95sZorBEdk9L9Qr9Fr/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Susono",
    "symbol": "OPN",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "sus",
  "chainId": 13812,
  "networkId": 13812,
  "explorers": [{
    "name": "Susono",
    "url": "http://explorer.opn.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "susono"
};

var c14000 = {
  "name": "SPS Testnet",
  "chain": "SPS-Testnet",
  "rpc": ["https://sps-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://www.3sps.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ECG",
    "symbol": "ECG",
    "decimals": 18
  },
  "infoURL": "https://ssquad.games/",
  "shortName": "SPS-Test",
  "chainId": 14000,
  "networkId": 14000,
  "explorers": [{
    "name": "SPS Test Explorer",
    "url": "https://explorer.3sps.net",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "sps-testnet"
};

var c15551 = {
  "name": "LoopNetwork Mainnet",
  "chain": "LoopNetwork",
  "rpc": ["https://loopnetwork.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.mainnetloop.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "LOOP",
    "symbol": "LOOP",
    "decimals": 18
  },
  "infoURL": "http://theloopnetwork.org/",
  "shortName": "loop",
  "chainId": 15551,
  "networkId": 15551,
  "explorers": [{
    "name": "loopscan",
    "url": "http://explorer.mainnetloop.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "loopnetwork"
};

var c15555 = {
  "name": "Trust EVM Testnet",
  "chain": "Trust EVM Testnet",
  "rpc": ["https://trust-evm-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.testnet-dev.trust.one"],
  "faucets": ["https://faucet.testnet-dev.trust.one/"],
  "nativeCurrency": {
    "name": "Trust EVM",
    "symbol": "EVM",
    "decimals": 18
  },
  "infoURL": "https://www.trust.one/",
  "shortName": "TrustTestnet",
  "chainId": 15555,
  "networkId": 15555,
  "explorers": [{
    "name": "Trust EVM Explorer",
    "url": "https://trustscan.one",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "trust-evm-testnet"
};

var c16000 = {
  "name": "MetaDot Mainnet",
  "chain": "MTT",
  "rpc": ["https://metadot.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.metadot.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MetaDot Token",
    "symbol": "MTT",
    "decimals": 18
  },
  "infoURL": "https://metadot.network",
  "shortName": "mtt",
  "chainId": 16000,
  "networkId": 16000,
  "testnet": false,
  "slug": "metadot"
};

var c16001 = {
  "name": "MetaDot Testnet",
  "chain": "MTTTest",
  "rpc": ["https://metadot-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.metadot.network"],
  "faucets": ["https://faucet.metadot.network/"],
  "nativeCurrency": {
    "name": "MetaDot Token TestNet",
    "symbol": "MTTest",
    "decimals": 18
  },
  "infoURL": "https://metadot.network",
  "shortName": "mtttest",
  "chainId": 16001,
  "networkId": 16001,
  "testnet": true,
  "slug": "metadot-testnet"
};

var c16718 = {
  "name": "AirDAO Mainnet",
  "chain": "ambnet",
  "icon": {
    "url": "ipfs://QmSxXjvWng3Diz4YwXDV2VqSPgMyzLYBNfkjJcr7rzkxom",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "rpc": ["https://airdao.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://network.ambrosus.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Amber",
    "symbol": "AMB",
    "decimals": 18
  },
  "infoURL": "https://airdao.io",
  "shortName": "airdao",
  "chainId": 16718,
  "networkId": 16718,
  "explorers": [{
    "name": "AirDAO Network Explorer",
    "url": "https://airdao.io/explorer",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "airdao"
};

var c16888 = {
  "name": "IVAR Chain Testnet",
  "chain": "IVAR",
  "icon": {
    "url": "ipfs://QmV8UmSwqGF2fxrqVEBTHbkyZueahqyYtkfH2RBF5pNysM",
    "width": 519,
    "height": 519,
    "format": "svg"
  },
  "rpc": ["https://ivar-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.ivarex.com"],
  "faucets": ["https://tfaucet.ivarex.com/"],
  "nativeCurrency": {
    "name": "tIvar",
    "symbol": "tIVAR",
    "decimals": 18
  },
  "infoURL": "https://ivarex.com",
  "shortName": "tivar",
  "chainId": 16888,
  "networkId": 16888,
  "explorers": [{
    "name": "ivarscan",
    "url": "https://testnet.ivarscan.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "ivar-chain-testnet"
};

var c18000 = {
  "name": "Frontier of Dreams Testnet",
  "chain": "Game Network",
  "rpc": ["https://frontier-of-dreams-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.fod.games/"],
  "nativeCurrency": {
    "name": "ZKST",
    "symbol": "ZKST",
    "decimals": 18
  },
  "faucets": [],
  "shortName": "ZKST",
  "chainId": 18000,
  "networkId": 18000,
  "infoURL": "https://goexosphere.com",
  "explorers": [{
    "name": "Game Network",
    "url": "https://explorer.fod.games",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "frontier-of-dreams-testnet"
};

var c18159 = {
  "name": "Proof Of Memes",
  "title": "Proof Of Memes Mainnet",
  "chain": "POM",
  "icon": {
    "url": "ipfs://QmePhfibWz9jnGUqF9Rven4x734br1h3LxrChYTEjbbQvo",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "rpc": ["https://proof-of-memes.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.memescan.io", "https://mainnet-rpc2.memescan.io", "https://mainnet-rpc3.memescan.io", "https://mainnet-rpc4.memescan.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Proof Of Memes",
    "symbol": "POM",
    "decimals": 18
  },
  "infoURL": "https://proofofmemes.org",
  "shortName": "pom",
  "chainId": 18159,
  "networkId": 18159,
  "explorers": [{
    "name": "explorer-proofofmemes",
    "url": "https://memescan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "proof-of-memes"
};

var c19011 = {
  "name": "HOME Verse Mainnet",
  "chain": "HOME Verse",
  "icon": {
    "url": "ipfs://QmeGb65zSworzoHmwK3jdkPtEsQZMUSJRxf8K8Feg56soU",
    "width": 597,
    "height": 597,
    "format": "png"
  },
  "rpc": ["https://home-verse.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.mainnet.oasys.homeverse.games/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OAS",
    "symbol": "OAS",
    "decimals": 18
  },
  "infoURL": "https://www.homeverse.games/",
  "shortName": "HMV",
  "chainId": 19011,
  "networkId": 19011,
  "explorers": [{
    "name": "HOME Verse Explorer",
    "url": "https://explorer.oasys.homeverse.games",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-248"
  },
  "testnet": false,
  "slug": "home-verse"
};

var c19845 = {
  "name": "BTCIX Network",
  "chain": "BTCIX",
  "rpc": ["https://btcix-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://seed.btcix.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "BTCIX Network",
    "symbol": "BTCIX",
    "decimals": 18
  },
  "infoURL": "https://bitcolojix.org",
  "shortName": "btcix",
  "chainId": 19845,
  "networkId": 19845,
  "explorers": [{
    "name": "BTCIXScan",
    "url": "https://btcixscan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "btcix-network"
};

var c20729 = {
  "name": "Callisto Testnet",
  "chain": "CLO",
  "rpc": ["https://callisto-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.callisto.network/"],
  "faucets": ["https://faucet.callisto.network/"],
  "nativeCurrency": {
    "name": "Callisto",
    "symbol": "CLO",
    "decimals": 18
  },
  "infoURL": "https://callisto.network",
  "shortName": "CLOTestnet",
  "chainId": 20729,
  "networkId": 79,
  "testnet": true,
  "slug": "callisto-testnet"
};

var c20736 = {
  "name": "P12 Chain",
  "chain": "P12",
  "icon": {
    "url": "ipfs://bafkreieiro4imoujeewc4r4thf5hxj47l56j2iwuz6d6pdj6ieb6ub3h7e",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://p12-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-chain.p12.games"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Hooked P2",
    "symbol": "hP2",
    "decimals": 18
  },
  "infoURL": "https://p12.network",
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "shortName": "p12",
  "chainId": 20736,
  "networkId": 20736,
  "explorers": [{
    "name": "P12 Chain Explorer",
    "url": "https://explorer.p12.games",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "p12-chain"
};

var c21337 = {
  "name": "CENNZnet Azalea",
  "chain": "CENNZnet",
  "rpc": ["https://cennznet-azalea.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://cennznet.unfrastructure.io/public"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CPAY",
    "symbol": "CPAY",
    "decimals": 18
  },
  "infoURL": "https://cennz.net",
  "shortName": "cennz-a",
  "chainId": 21337,
  "networkId": 21337,
  "icon": {
    "url": "ipfs://QmWhNm7tTi6SYbiumULDRk956hxgqaZSX77vcxBNn8fvnw",
    "width": 112,
    "height": 112,
    "format": "svg"
  },
  "explorers": [{
    "name": "UNcover",
    "url": "https://uncoverexplorer.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "cennznet-azalea"
};

var c21816 = {
  "name": "omChain Mainnet",
  "chain": "OML",
  "icon": {
    "url": "ipfs://QmQtEHaejiDbmiCvbBYw9jNQv3DLK5XHCQwLRfnLNpdN5j",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "rpc": ["https://omchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://seed.omchain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "omChain",
    "symbol": "OMC",
    "decimals": 18
  },
  "infoURL": "https://omchain.io",
  "shortName": "omc",
  "chainId": 21816,
  "networkId": 21816,
  "explorers": [{
    "name": "omChain Explorer",
    "url": "https://explorer.omchain.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "omchain"
};

var c22023 = {
  "name": "Taycan",
  "chain": "Taycan",
  "rpc": ["https://taycan.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://taycan-rpc.hupayx.io:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "shuffle",
    "symbol": "SFL",
    "decimals": 18
  },
  "infoURL": "https://hupayx.io",
  "shortName": "SFL",
  "chainId": 22023,
  "networkId": 22023,
  "icon": {
    "url": "ipfs://bafkreidvjcc73v747lqlyrhgbnkvkdepdvepo6baj6hmjsmjtvdyhmzzmq",
    "width": 1000,
    "height": 1206,
    "format": "png"
  },
  "explorers": [{
    "name": "Taycan Explorer(Blockscout)",
    "url": "https://taycan-evmscan.hupayx.io",
    "standard": "none",
    "icon": "shuffle"
  }, {
    "name": "Taycan Cosmos Explorer(BigDipper)",
    "url": "https://taycan-cosmoscan.hupayx.io",
    "standard": "none",
    "icon": "shuffle"
  }],
  "testnet": false,
  "slug": "taycan"
};

var c22040 = {
  "name": "AirDAO Testnet",
  "chain": "ambnet-test",
  "icon": {
    "url": "ipfs://QmSxXjvWng3Diz4YwXDV2VqSPgMyzLYBNfkjJcr7rzkxom",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "rpc": ["https://airdao-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://network.ambrosus-test.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Amber",
    "symbol": "AMB",
    "decimals": 18
  },
  "infoURL": "https://testnet.airdao.io",
  "shortName": "airdao-test",
  "chainId": 22040,
  "networkId": 22040,
  "explorers": [{
    "name": "AirDAO Network Explorer",
    "url": "https://testnet.airdao.io/explorer",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "airdao-testnet"
};

var c22776 = {
  "name": "MAP Mainnet",
  "chain": "MAP",
  "icon": {
    "url": "ipfs://QmcLdQ8gM4iHv3CCKA9HuxmzTxY4WhjWtepUVCc3dpzKxD",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://map.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.maplabs.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MAP",
    "symbol": "MAP",
    "decimals": 18
  },
  "infoURL": "https://maplabs.io",
  "shortName": "map",
  "chainId": 22776,
  "networkId": 22776,
  "slip44": 60,
  "explorers": [{
    "name": "mapscan",
    "url": "https://mapscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "map"
};

var c23118 = {
  "name": "Opside Testnet",
  "chain": "Opside",
  "rpc": ["https://opside-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testrpc.opside.network"],
  "faucets": ["https://faucet.opside.network"],
  "nativeCurrency": {
    "name": "IDE",
    "symbol": "IDE",
    "decimals": 18
  },
  "infoURL": "https://opside.network",
  "shortName": "opside",
  "chainId": 23118,
  "networkId": 23118,
  "icon": {
    "url": "ipfs://QmeCyZeibUoHNoYGzy1GkzH2uhxyRHKvH51PdaUMer4VTo",
    "width": 591,
    "height": 591,
    "format": "png"
  },
  "explorers": [{
    "name": "opsideInfo",
    "url": "https://opside.info",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "opside-testnet"
};

var c23294 = {
  "name": "Oasis Sapphire",
  "chain": "Sapphire",
  "icon": {
    "url": "ipfs://bafkreiespupb52akiwrexxg7g72mh7m7h7lum5hmqijmpdh3kmuunzclha",
    "width": 2000,
    "height": 2000,
    "format": "png"
  },
  "rpc": ["https://oasis-sapphire.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sapphire.oasis.io", "wss://sapphire.oasis.io/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Sapphire Rose",
    "symbol": "ROSE",
    "decimals": 18
  },
  "infoURL": "https://docs.oasis.io/dapp/sapphire",
  "shortName": "sapphire",
  "chainId": 23294,
  "networkId": 23294,
  "explorers": [{
    "name": "Oasis Sapphire Explorer",
    "url": "https://explorer.sapphire.oasis.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "oasis-sapphire"
};

var c23295 = {
  "name": "Oasis Sapphire Testnet",
  "chain": "Sapphire",
  "icon": {
    "url": "ipfs://bafkreiespupb52akiwrexxg7g72mh7m7h7lum5hmqijmpdh3kmuunzclha",
    "width": 2000,
    "height": 2000,
    "format": "png"
  },
  "rpc": ["https://oasis-sapphire-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.sapphire.oasis.dev", "wss://testnet.sapphire.oasis.dev/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Sapphire Test Rose",
    "symbol": "TEST",
    "decimals": 18
  },
  "infoURL": "https://docs.oasis.io/dapp/sapphire",
  "shortName": "sapphire-testnet",
  "chainId": 23295,
  "networkId": 23295,
  "explorers": [{
    "name": "Oasis Sapphire Testnet Explorer",
    "url": "https://testnet.explorer.sapphire.oasis.dev",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "oasis-sapphire-testnet"
};

var c24484 = {
  "name": "Webchain",
  "chain": "WEB",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Webchain Ether",
    "symbol": "WEB",
    "decimals": 18
  },
  "infoURL": "https://webchain.network",
  "shortName": "web",
  "chainId": 24484,
  "networkId": 37129,
  "slip44": 227,
  "testnet": false,
  "slug": "webchain"
};

var c24734 = {
  "name": "MintMe.com Coin",
  "chain": "MINTME",
  "rpc": ["https://mintme-com-coin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node1.mintme.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MintMe.com Coin",
    "symbol": "MINTME",
    "decimals": 18
  },
  "infoURL": "https://www.mintme.com",
  "shortName": "mintme",
  "chainId": 24734,
  "networkId": 37480,
  "testnet": false,
  "slug": "mintme-com-coin"
};

var c25888 = {
  "name": "Hammer Chain Mainnet",
  "chain": "HammerChain",
  "rpc": ["https://hammer-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://www.hammerchain.io/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GOLDT",
    "symbol": "GOLDT",
    "decimals": 18
  },
  "infoURL": "https://www.hammerchain.io",
  "shortName": "GOLDT",
  "chainId": 25888,
  "networkId": 25888,
  "explorers": [{
    "name": "Hammer Chain Explorer",
    "url": "https://www.hammerchain.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "hammer-chain"
};

var c25925 = {
  "name": "Bitkub Chain Testnet",
  "chain": "BKC",
  "icon": {
    "url": "ipfs://QmYFYwyquipwc9gURQGcEd4iAq7pq15chQrJ3zJJe9HuFT",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "rpc": ["https://bitkub-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.bitkubchain.io", "wss://wss-testnet.bitkubchain.io"],
  "faucets": ["https://faucet.bitkubchain.com"],
  "nativeCurrency": {
    "name": "Bitkub Coin",
    "symbol": "tKUB",
    "decimals": 18
  },
  "infoURL": "https://www.bitkubchain.com/",
  "shortName": "bkct",
  "chainId": 25925,
  "networkId": 25925,
  "explorers": [{
    "name": "bkcscan-testnet",
    "url": "https://testnet.bkcscan.com",
    "standard": "none",
    "icon": "bkc"
  }],
  "testnet": true,
  "slug": "bitkub-chain-testnet"
};

var c26600 = {
  "name": "Hertz Network Mainnet",
  "chain": "HTZ",
  "rpc": ["https://hertz-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.hertzscan.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Hertz",
    "symbol": "HTZ",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://www.hertz-network.com",
  "shortName": "HTZ",
  "chainId": 26600,
  "networkId": 26600,
  "icon": {
    "url": "ipfs://Qmf3GYbPXmTDpSP6t7Ug2j5HjEwrY5oGhBDP7d4TQHvGnG",
    "width": 162,
    "height": 129,
    "format": "png"
  },
  "explorers": [{
    "name": "Hertz Scan",
    "url": "https://hertzscan.com",
    "icon": "hertz-network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "hertz-network"
};

var c26863 = {
  "name": "OasisChain Mainnet",
  "chain": "OasisChain",
  "rpc": ["https://oasischain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc1.oasischain.io", "https://rpc2.oasischain.io", "https://rpc3.oasischain.io"],
  "faucets": ["http://faucet.oasischain.io"],
  "nativeCurrency": {
    "name": "OAC",
    "symbol": "OAC",
    "decimals": 18
  },
  "infoURL": "https://scan.oasischain.io",
  "shortName": "OAC",
  "chainId": 26863,
  "networkId": 26863,
  "explorers": [{
    "name": "OasisChain Explorer",
    "url": "https://scan.oasischain.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "oasischain"
};

var c28528 = {
  "name": "Optimism Bedrock (Goerli Alpha Testnet)",
  "chain": "ETH",
  "rpc": ["https://optimism-bedrock-goerli-alpha-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://alpha-1-replica-0.bedrock-goerli.optimism.io", "https://alpha-1-replica-1.bedrock-goerli.optimism.io", "https://alpha-1-replica-2.bedrock-goerli.optimism.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Goerli Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://community.optimism.io/docs/developers/bedrock",
  "shortName": "obgor",
  "chainId": 28528,
  "networkId": 28528,
  "explorers": [{
    "name": "blockscout",
    "url": "https://blockscout.com/optimism/bedrock-alpha",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "optimism-bedrock-goerli-alpha-testnet"
};

var c30067 = {
  "name": "Piece testnet",
  "chain": "PieceNetwork",
  "icon": {
    "url": "ipfs://QmWAU39z1kcYshAqkENRH8qUjfR5CJehCxA4GiC33p3HpH",
    "width": 800,
    "height": 800,
    "format": "png"
  },
  "rpc": ["https://piece-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc0.piecenetwork.com"],
  "faucets": ["https://piecenetwork.com/faucet"],
  "nativeCurrency": {
    "name": "ECE",
    "symbol": "ECE",
    "decimals": 18
  },
  "infoURL": "https://piecenetwork.com",
  "shortName": "Piece",
  "chainId": 30067,
  "networkId": 30067,
  "explorers": [{
    "name": "Piece Scan",
    "url": "https://testnet-scan.piecenetwork.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "piece-testnet"
};

var c31102 = {
  "name": "Ethersocial Network",
  "chain": "ESN",
  "rpc": ["https://ethersocial-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.esn.gonspool.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ethersocial Network Ether",
    "symbol": "ESN",
    "decimals": 18
  },
  "infoURL": "https://ethersocial.org",
  "shortName": "esn",
  "chainId": 31102,
  "networkId": 1,
  "slip44": 31102,
  "testnet": false,
  "slug": "ethersocial-network"
};

var c31223 = {
  "name": "CloudTx Mainnet",
  "chain": "CLD",
  "icon": {
    "url": "ipfs://QmSEsi71AdA5HYH6VNC5QUQezFg1C7BiVQJdx1VVfGz3g3",
    "width": 713,
    "height": 830,
    "format": "png"
  },
  "rpc": ["https://cloudtx.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.cloudtx.finance"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CloudTx",
    "symbol": "CLD",
    "decimals": 18
  },
  "infoURL": "https://cloudtx.finance",
  "shortName": "CLDTX",
  "chainId": 31223,
  "networkId": 31223,
  "explorers": [{
    "name": "cloudtxscan",
    "url": "https://scan.cloudtx.finance",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "cloudtx"
};

var c31224 = {
  "name": "CloudTx Testnet",
  "chain": "CloudTx",
  "icon": {
    "url": "ipfs://QmSEsi71AdA5HYH6VNC5QUQezFg1C7BiVQJdx1VVfGz3g3",
    "width": 713,
    "height": 830,
    "format": "png"
  },
  "rpc": ["https://cloudtx-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.cloudtx.finance"],
  "faucets": ["https://faucet.cloudtx.finance"],
  "nativeCurrency": {
    "name": "CloudTx",
    "symbol": "CLD",
    "decimals": 18
  },
  "infoURL": "https://cloudtx.finance/",
  "shortName": "CLD",
  "chainId": 31224,
  "networkId": 31224,
  "explorers": [{
    "name": "cloudtxexplorer",
    "url": "https://explorer.cloudtx.finance",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "cloudtx-testnet"
};

var c31337 = {
  "name": "GoChain Testnet",
  "chain": "GO",
  "rpc": ["https://gochain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.gochain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GoChain Coin",
    "symbol": "GO",
    "decimals": 18
  },
  "infoURL": "https://gochain.io",
  "shortName": "got",
  "chainId": 31337,
  "networkId": 31337,
  "slip44": 6060,
  "explorers": [{
    "name": "GoChain Testnet Explorer",
    "url": "https://testnet-explorer.gochain.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "gochain-testnet"
};

var c31415 = {
  "name": "Filecoin - Wallaby testnet",
  "chain": "FIL",
  "icon": {
    "url": "ipfs://QmS9r9XQkMHVomWcSBNDkKkz9n87h9bH9ssabeiKZtANoU",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "rpc": ["https://filecoin-wallaby-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://wallaby.node.glif.io/rpc/v1"],
  "faucets": ["https://wallaby.yoga/#faucet"],
  "nativeCurrency": {
    "name": "testnet filecoin",
    "symbol": "tFIL",
    "decimals": 18
  },
  "infoURL": "https://filecoin.io",
  "shortName": "filecoin-wallaby",
  "chainId": 31415,
  "networkId": 31415,
  "slip44": 1,
  "explorers": [],
  "testnet": true,
  "slug": "filecoin-wallaby-testnet"
};

var c32520 = {
  "name": "Bitgert Mainnet",
  "chain": "Brise",
  "rpc": ["https://bitgert.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.icecreamswap.com", "https://mainnet-rpc.brisescan.com", "https://chainrpc.com", "https://serverrpc.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitrise Token",
    "symbol": "Brise",
    "decimals": 18
  },
  "infoURL": "https://bitgert.com/",
  "shortName": "Brise",
  "chainId": 32520,
  "networkId": 32520,
  "icon": {
    "url": "ipfs://QmY3vKe1rG9AyHSGH1ouP3ER3EVUZRtRrFbFZEfEpMSd4V",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "Brise Scan",
    "url": "https://brisescan.com",
    "icon": "brise",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "bitgert"
};

var c32659 = {
  "name": "Fusion Mainnet",
  "chain": "FSN",
  "icon": {
    "url": "ipfs://QmX3tsEoj7SdaBLLV8VyyCUAmymdEGiSGeuTbxMrEMVvth",
    "width": 31,
    "height": 31,
    "format": "svg"
  },
  "rpc": ["https://fusion.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.fusionnetwork.io", "wss://mainnet.fusionnetwork.io"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "Fusion",
    "symbol": "FSN",
    "decimals": 18
  },
  "infoURL": "https://fusion.org",
  "shortName": "fsn",
  "chainId": 32659,
  "networkId": 32659,
  "slip44": 288,
  "explorers": [{
    "name": "fsnscan",
    "url": "https://fsnscan.com",
    "icon": "fsnscan",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "fusion"
};

var c33101 = {
  "name": "Zilliqa EVM Testnet",
  "chain": "ZIL",
  "rpc": ["https://zilliqa-evm-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://dev-api.zilliqa.com"],
  "faucets": ["https://dev-wallet.zilliqa.com/faucet?network=testnet"],
  "nativeCurrency": {
    "name": "Zilliqa",
    "symbol": "ZIL",
    "decimals": 18
  },
  "infoURL": "https://www.zilliqa.com/",
  "shortName": "zil-testnet",
  "chainId": 33101,
  "networkId": 33101,
  "explorers": [{
    "name": "Zilliqa EVM Explorer",
    "url": "https://evmx.zilliqa.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "zilliqa-evm-testnet"
};

var c33333 = {
  "name": "Aves Mainnet",
  "chain": "AVS",
  "rpc": ["https://aves.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.avescoin.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Aves",
    "symbol": "AVS",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://avescoin.io",
  "shortName": "avs",
  "chainId": 33333,
  "networkId": 33333,
  "icon": {
    "url": "ipfs://QmeKQVv2QneHaaggw2NfpZ7DGMdjVhPywTdse5RzCs4oGn",
    "width": 232,
    "height": 232,
    "format": "png"
  },
  "explorers": [{
    "name": "avescan",
    "url": "https://avescan.io",
    "icon": "avescan",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "aves"
};

var c35011 = {
  "name": "J2O Taro",
  "chain": "TARO",
  "rpc": ["https://j2o-taro.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.j2o.io"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "TARO Coin",
    "symbol": "taro",
    "decimals": 18
  },
  "infoURL": "https://j2o.io",
  "shortName": "j2o",
  "chainId": 35011,
  "networkId": 35011,
  "explorers": [{
    "name": "J2O Taro Explorer",
    "url": "https://exp.j2o.io",
    "icon": "j2otaro",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "j2o-taro"
};

var c35441 = {
  "name": "Q Mainnet",
  "chain": "Q",
  "rpc": ["https://q.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.q.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Q token",
    "symbol": "Q",
    "decimals": 18
  },
  "infoURL": "https://q.org",
  "shortName": "q",
  "chainId": 35441,
  "networkId": 35441,
  "icon": {
    "url": "ipfs://QmQUQKe8VEtSthhgXnJ3EmEz94YhpVCpUDZAiU9KYyNLya",
    "width": 585,
    "height": 603,
    "format": "png"
  },
  "explorers": [{
    "name": "Q explorer",
    "url": "https://explorer.q.org",
    "icon": "q",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "q"
};

var c35443 = {
  "name": "Q Testnet",
  "chain": "Q",
  "rpc": ["https://q-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.qtestnet.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Q token",
    "symbol": "Q",
    "decimals": 18
  },
  "infoURL": "https://q.org/",
  "shortName": "q-testnet",
  "chainId": 35443,
  "networkId": 35443,
  "icon": {
    "url": "ipfs://QmQUQKe8VEtSthhgXnJ3EmEz94YhpVCpUDZAiU9KYyNLya",
    "width": 585,
    "height": 603,
    "format": "png"
  },
  "explorers": [{
    "name": "Q explorer",
    "url": "https://explorer.qtestnet.org",
    "icon": "q",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "q-testnet"
};

var c39797 = {
  "name": "Energi Mainnet",
  "chain": "NRG",
  "rpc": ["https://energi.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://nodeapi.energi.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Energi",
    "symbol": "NRG",
    "decimals": 18
  },
  "infoURL": "https://www.energi.world/",
  "shortName": "nrg",
  "chainId": 39797,
  "networkId": 39797,
  "slip44": 39797,
  "testnet": false,
  "slug": "energi"
};

var c39815 = {
  "name": "OHO Mainnet",
  "chain": "OHO",
  "rpc": ["https://oho.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.oho.ai"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OHO",
    "symbol": "OHO",
    "decimals": 18
  },
  "infoURL": "https://oho.ai",
  "shortName": "oho",
  "chainId": 39815,
  "networkId": 39815,
  "icon": {
    "url": "ipfs://QmZt75xixnEtFzqHTrJa8kJkV4cTXmUZqeMeHM8BcvomQc",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "ohoscan",
    "url": "https://ohoscan.com",
    "icon": "ohoscan",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "oho"
};

var c41500 = {
  "name": "Opulent-X BETA",
  "chainId": 41500,
  "shortName": "ox-beta",
  "chain": "Opulent-X",
  "networkId": 41500,
  "nativeCurrency": {
    "name": "Oxyn Gas",
    "symbol": "OXYN",
    "decimals": 18
  },
  "rpc": ["https://opulent-x-beta.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://connect.opulent-x.com"],
  "faucets": [],
  "infoURL": "https://beta.opulent-x.com",
  "explorers": [{
    "name": "Opulent-X BETA Explorer",
    "url": "https://explorer.opulent-x.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "opulent-x-beta"
};

var c42069 = {
  "name": "pegglecoin",
  "chain": "42069",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "pegglecoin",
    "symbol": "peggle",
    "decimals": 18
  },
  "infoURL": "https://teampeggle.com",
  "shortName": "PC",
  "chainId": 42069,
  "networkId": 42069,
  "testnet": false,
  "slug": "pegglecoin"
};

var c42161 = {
  "name": "Arbitrum One",
  "chainId": 42161,
  "shortName": "arb1",
  "chain": "ETH",
  "networkId": 42161,
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "rpc": ["https://arbitrum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://arb1.arbitrum.io/rpc"],
  "faucets": [],
  "explorers": [{
    "name": "Arbitrum Explorer",
    "url": "https://explorer.arbitrum.io",
    "standard": "EIP3091"
  }, {
    "name": "Arbiscan",
    "url": "https://arbiscan.io",
    "standard": "EIP3091"
  }],
  "infoURL": "https://arbitrum.io",
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [{
      "url": "https://bridge.arbitrum.io"
    }]
  },
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "testnet": false,
  "slug": "arbitrum"
};

var c42170 = {
  "name": "Arbitrum Nova",
  "chainId": 42170,
  "shortName": "arb-nova",
  "chain": "ETH",
  "networkId": 42170,
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "rpc": ["https://arbitrum-nova.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://nova.arbitrum.io/rpc"],
  "faucets": [],
  "explorers": [{
    "name": "Arbitrum Nova Chain Explorer",
    "url": "https://nova-explorer.arbitrum.io",
    "icon": "blockscout",
    "standard": "EIP3091"
  }],
  "infoURL": "https://arbitrum.io",
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [{
      "url": "https://bridge.arbitrum.io"
    }]
  },
  "testnet": false,
  "slug": "arbitrum-nova"
};

var c42220 = {
  "name": "Celo Mainnet",
  "chainId": 42220,
  "shortName": "celo",
  "chain": "CELO",
  "networkId": 42220,
  "nativeCurrency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
  },
  "rpc": ["https://celo.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://forno.celo.org", "wss://forno.celo.org/ws"],
  "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  "infoURL": "https://docs.celo.org/",
  "explorers": [{
    "name": "Celoscan",
    "url": "https://celoscan.io",
    "standard": "EIP3091"
  }, {
    "name": "blockscout",
    "url": "https://explorer.celo.org",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "celo"
};

var c42261 = {
  "name": "Oasis Emerald Testnet",
  "chain": "Emerald",
  "icon": {
    "url": "ipfs://bafkreiespupb52akiwrexxg7g72mh7m7h7lum5hmqijmpdh3kmuunzclha",
    "width": 2000,
    "height": 2000,
    "format": "png"
  },
  "rpc": ["https://oasis-emerald-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.emerald.oasis.dev/", "wss://testnet.emerald.oasis.dev/ws"],
  "faucets": ["https://faucet.testnet.oasis.dev/"],
  "nativeCurrency": {
    "name": "Emerald Rose",
    "symbol": "ROSE",
    "decimals": 18
  },
  "infoURL": "https://docs.oasis.io/dapp/emerald",
  "shortName": "emerald-testnet",
  "chainId": 42261,
  "networkId": 42261,
  "explorers": [{
    "name": "Oasis Emerald Testnet Explorer",
    "url": "https://testnet.explorer.emerald.oasis.dev",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "oasis-emerald-testnet"
};

var c42262 = {
  "name": "Oasis Emerald",
  "chain": "Emerald",
  "icon": {
    "url": "ipfs://bafkreiespupb52akiwrexxg7g72mh7m7h7lum5hmqijmpdh3kmuunzclha",
    "width": 2000,
    "height": 2000,
    "format": "png"
  },
  "rpc": ["https://oasis-emerald.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://emerald.oasis.dev", "wss://emerald.oasis.dev/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Emerald Rose",
    "symbol": "ROSE",
    "decimals": 18
  },
  "infoURL": "https://docs.oasis.io/dapp/emerald",
  "shortName": "emerald",
  "chainId": 42262,
  "networkId": 42262,
  "explorers": [{
    "name": "Oasis Emerald Explorer",
    "url": "https://explorer.emerald.oasis.dev",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "oasis-emerald"
};

var c43110 = {
  "name": "Athereum",
  "chain": "ATH",
  "rpc": ["https://athereum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://ava.network:21015/ext/evm/rpc"],
  "faucets": ["http://athfaucet.ava.network//?address=${ADDRESS}"],
  "nativeCurrency": {
    "name": "Athereum Ether",
    "symbol": "ATH",
    "decimals": 18
  },
  "infoURL": "https://athereum.ava.network",
  "shortName": "avaeth",
  "chainId": 43110,
  "networkId": 43110,
  "testnet": false,
  "slug": "athereum"
};

var c43113 = {
  "name": "Avalanche Fuji Testnet",
  "chain": "AVAX",
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "rpc": ["https://avalanche-fuji.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-fuji.infura.io/v3/${INFURA_API_KEY}", "https://api.avax-test.network/ext/bc/C/rpc"],
  "faucets": ["https://faucet.avax-test.network/"],
  "nativeCurrency": {
    "name": "Avalanche",
    "symbol": "AVAX",
    "decimals": 18
  },
  "infoURL": "https://cchain.explorer.avax-test.network",
  "shortName": "Fuji",
  "chainId": 43113,
  "networkId": 1,
  "explorers": [{
    "name": "snowtrace",
    "url": "https://testnet.snowtrace.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "avalanche-fuji"
};

var c43114 = {
  "name": "Avalanche C-Chain",
  "chain": "AVAX",
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "rpc": ["https://avalanche.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://api.avax.network/ext/bc/C/rpc", "https://avalanche-c-chain.publicnode.com"],
  "features": [{
    "name": "EIP1559"
  }],
  "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  "nativeCurrency": {
    "name": "Avalanche",
    "symbol": "AVAX",
    "decimals": 18
  },
  "infoURL": "https://www.avax.network/",
  "shortName": "avax",
  "chainId": 43114,
  "networkId": 43114,
  "slip44": 9005,
  "explorers": [{
    "name": "snowtrace",
    "url": "https://snowtrace.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "avalanche"
};

var c43288 = {
  "name": "Boba Avax",
  "chain": "Boba Avax",
  "rpc": ["https://boba-avax.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avax.boba.network", "wss://wss.avax.boba.network", "https://replica.avax.boba.network", "wss://replica-wss.avax.boba.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Boba Token",
    "symbol": "BOBA",
    "decimals": 18
  },
  "infoURL": "https://docs.boba.network/for-developers/network-avalanche",
  "shortName": "bobaavax",
  "chainId": 43288,
  "networkId": 43288,
  "explorers": [{
    "name": "Boba Avax Explorer",
    "url": "https://blockexplorer.avax.boba.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "boba-avax"
};

var c44444 = {
  "name": "Frenchain",
  "chain": "fren",
  "rpc": ["https://frenchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-02.frenscan.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "FREN",
    "symbol": "FREN",
    "decimals": 18
  },
  "infoURL": "https://frenchain.app",
  "shortName": "FREN",
  "chainId": 44444,
  "networkId": 44444,
  "icon": {
    "url": "ipfs://QmQk41bYX6WpYyUAdRgomZekxP5mbvZXhfxLEEqtatyJv4",
    "width": 128,
    "height": 128,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://frenscan.io",
    "icon": "fren",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "frenchain"
};

var c44787 = {
  "name": "Celo Alfajores Testnet",
  "chainId": 44787,
  "shortName": "ALFA",
  "chain": "CELO",
  "networkId": 44787,
  "nativeCurrency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
  },
  "rpc": ["https://celo-alfajores-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://alfajores-forno.celo-testnet.org", "wss://alfajores-forno.celo-testnet.org/ws"],
  "faucets": ["https://celo.org/developers/faucet", "https://cauldron.pretoriaresearchlab.io/alfajores-faucet"],
  "infoURL": "https://docs.celo.org/",
  "explorers": [{
    "name": "Celoscan",
    "url": "https://celoscan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "celo-alfajores-testnet"
};

var c45000 = {
  "name": "Autobahn Network",
  "chain": "TXL",
  "rpc": ["https://autobahn-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.autobahn.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TXL",
    "symbol": "TXL",
    "decimals": 18
  },
  "infoURL": "https://autobahn.network",
  "shortName": "AutobahnNetwork",
  "chainId": 45000,
  "networkId": 45000,
  "icon": {
    "url": "ipfs://QmZP19pbqTco4vaP9siduLWP8pdYArFK3onfR55tvjr12s",
    "width": 489,
    "height": 489,
    "format": "png"
  },
  "explorers": [{
    "name": "autobahn explorer",
    "url": "https://explorer.autobahn.network",
    "icon": "autobahn",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "autobahn-network"
};

var c46688 = {
  "name": "Fusion Testnet",
  "chain": "FSN",
  "icon": {
    "url": "ipfs://QmX3tsEoj7SdaBLLV8VyyCUAmymdEGiSGeuTbxMrEMVvth",
    "width": 31,
    "height": 31,
    "format": "svg"
  },
  "rpc": ["https://fusion-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.fusionnetwork.io", "wss://testnet.fusionnetwork.io"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "Testnet Fusion",
    "symbol": "T-FSN",
    "decimals": 18
  },
  "infoURL": "https://fusion.org",
  "shortName": "tfsn",
  "chainId": 46688,
  "networkId": 46688,
  "slip44": 288,
  "explorers": [{
    "name": "fsnscan",
    "url": "https://testnet.fsnscan.com",
    "icon": "fsnscan",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "fusion-testnet"
};

var c47805 = {
  "name": "REI Network",
  "chain": "REI",
  "rpc": ["https://rei-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.rei.network", "wss://rpc.rei.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "REI",
    "symbol": "REI",
    "decimals": 18
  },
  "infoURL": "https://rei.network/",
  "shortName": "REI",
  "chainId": 47805,
  "networkId": 47805,
  "explorers": [{
    "name": "rei-scan",
    "url": "https://scan.rei.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "rei-network"
};

var c49049 = {
  "name": "Floripa",
  "title": "Wireshape Testnet Floripa",
  "chain": "Wireshape",
  "rpc": ["https://floripa.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-floripa.wireshape.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "WIRE",
    "symbol": "WIRE",
    "decimals": 18
  },
  "infoURL": "https://wireshape.org",
  "shortName": "floripa",
  "chainId": 49049,
  "networkId": 49049,
  "explorers": [{
    "name": "Wire Explorer",
    "url": "https://floripa-explorer.wireshape.org",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "floripa"
};

var c49088 = {
  "name": "Bifrost Testnet",
  "title": "The Bifrost Testnet network",
  "chain": "BFC",
  "rpc": ["https://bifrost-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://public-01.testnet.thebifrost.io/rpc", "https://public-02.testnet.thebifrost.io/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bifrost",
    "symbol": "BFC",
    "decimals": 18
  },
  "infoURL": "https://thebifrost.io",
  "shortName": "tbfc",
  "chainId": 49088,
  "networkId": 49088,
  "icon": {
    "url": "ipfs://QmcHvn2Wq91ULyEH5s3uHjosX285hUgyJHwggFJUd3L5uh",
    "width": 128,
    "height": 128,
    "format": "png"
  },
  "explorers": [{
    "name": "explorer-thebifrost",
    "url": "https://explorer.testnet.thebifrost.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "bifrost-testnet"
};

var c49797 = {
  "name": "Energi Testnet",
  "chain": "NRG",
  "rpc": ["https://energi-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://nodeapi.test.energi.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Energi",
    "symbol": "NRG",
    "decimals": 18
  },
  "infoURL": "https://www.energi.world/",
  "shortName": "tnrg",
  "chainId": 49797,
  "networkId": 49797,
  "slip44": 49797,
  "testnet": true,
  "slug": "energi-testnet"
};

var c50001 = {
  "name": "Liveplex OracleEVM",
  "chain": "Liveplex OracleEVM Network",
  "rpc": ["https://liveplex-oracleevm.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.oracle.liveplex.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "LOE",
  "chainId": 50001,
  "networkId": 50001,
  "explorers": [],
  "testnet": false,
  "slug": "liveplex-oracleevm"
};

var c50021 = {
  "name": "GTON Testnet",
  "chain": "GTON Testnet",
  "rpc": ["https://gton-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.gton.network/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GCD",
    "symbol": "GCD",
    "decimals": 18
  },
  "infoURL": "https://gton.capital",
  "shortName": "tgton",
  "chainId": 50021,
  "networkId": 50021,
  "explorers": [{
    "name": "GTON Testnet Network Explorer",
    "url": "https://explorer.testnet.gton.network",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-3"
  },
  "testnet": true,
  "slug": "gton-testnet"
};

var c51712 = {
  "name": "Sardis Mainnet",
  "chain": "SRDX",
  "icon": {
    "url": "ipfs://QmdR9QJjQEh1mBnf2WbJfehverxiP5RDPWMtEECbDP2rc3",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "rpc": ["https://sardis.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.sardisnetwork.com"],
  "faucets": ["https://faucet.sardisnetwork.com"],
  "nativeCurrency": {
    "name": "Sardis",
    "symbol": "SRDX",
    "decimals": 18
  },
  "infoURL": "https://mysardis.com",
  "shortName": "SRDXm",
  "chainId": 51712,
  "networkId": 51712,
  "explorers": [{
    "name": "Sardis",
    "url": "https://contract-mainnet.sardisnetwork.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "sardis"
};

var c53935 = {
  "name": "DFK Chain",
  "chain": "DFK",
  "icon": {
    "url": "ipfs://QmQB48m15TzhUFrmu56QCRQjkrkgUaKfgCmKE8o3RzmuPJ",
    "width": 500,
    "height": 500,
    "format": "png"
  },
  "rpc": ["https://dfk-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Jewel",
    "symbol": "JEWEL",
    "decimals": 18
  },
  "infoURL": "https://defikingdoms.com",
  "shortName": "DFK",
  "chainId": 53935,
  "networkId": 53935,
  "explorers": [{
    "name": "ethernal",
    "url": "https://explorer.dfkchain.com",
    "icon": "ethereum",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "dfk-chain"
};

var c54211 = {
  "name": "Haqq Chain Testnet",
  "chain": "TestEdge2",
  "rpc": ["https://haqq-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.eth.testedge2.haqq.network"],
  "faucets": ["https://testedge2.haqq.network"],
  "nativeCurrency": {
    "name": "Islamic Coin",
    "symbol": "ISLMT",
    "decimals": 18
  },
  "infoURL": "https://islamiccoin.net",
  "shortName": "ISLMT",
  "chainId": 54211,
  "networkId": 54211,
  "explorers": [{
    "name": "TestEdge HAQQ Explorer",
    "url": "https://explorer.testedge2.haqq.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "haqq-chain-testnet"
};

var c55555 = {
  "name": "REI Chain Mainnet",
  "chain": "REI",
  "icon": {
    "url": "ipfs://QmNy5d5knHVjJJS9g4kLsh9i73RTjckpKL6KZvRk6ptbhf",
    "width": 591,
    "height": 591,
    "format": "svg"
  },
  "rpc": ["https://rei-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rei-rpc.moonrhythm.io"],
  "faucets": ["http://kururu.finance/faucet?chainId=55555"],
  "nativeCurrency": {
    "name": "Rei",
    "symbol": "REI",
    "decimals": 18
  },
  "infoURL": "https://reichain.io",
  "shortName": "reichain",
  "chainId": 55555,
  "networkId": 55555,
  "explorers": [{
    "name": "reiscan",
    "url": "https://reiscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "rei-chain"
};

var c55556 = {
  "name": "REI Chain Testnet",
  "chain": "REI",
  "icon": {
    "url": "ipfs://QmNy5d5knHVjJJS9g4kLsh9i73RTjckpKL6KZvRk6ptbhf",
    "width": 591,
    "height": 591,
    "format": "svg"
  },
  "rpc": ["https://rei-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rei-testnet-rpc.moonrhythm.io"],
  "faucets": ["http://kururu.finance/faucet?chainId=55556"],
  "nativeCurrency": {
    "name": "tRei",
    "symbol": "tREI",
    "decimals": 18
  },
  "infoURL": "https://reichain.io",
  "shortName": "trei",
  "chainId": 55556,
  "networkId": 55556,
  "explorers": [{
    "name": "reiscan",
    "url": "https://testnet.reiscan.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "rei-chain-testnet"
};

var c56288 = {
  "name": "Boba BNB Mainnet",
  "chain": "Boba BNB Mainnet",
  "rpc": ["https://boba-bnb.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bnb.boba.network", "wss://wss.bnb.boba.network", "https://replica.bnb.boba.network", "wss://replica-wss.bnb.boba.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Boba Token",
    "symbol": "BOBA",
    "decimals": 18
  },
  "infoURL": "https://boba.network",
  "shortName": "BobaBnb",
  "chainId": 56288,
  "networkId": 56288,
  "explorers": [{
    "name": "Boba BNB block explorer",
    "url": "https://blockexplorer.bnb.boba.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "boba-bnb"
};

var c57000 = {
  "name": "Syscoin Rollux Testnet",
  "chain": "SYS",
  "rpc": ["https://syscoin-rollux-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-tanenbaum.rollux.com", "wss://rpc-tanenbaum.rollux.com/wss"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Rollux Testnet Syscoin",
    "symbol": "tSYS",
    "decimals": 18
  },
  "infoURL": "https://syscoin.org",
  "shortName": "tsys-rollux",
  "chainId": 57000,
  "networkId": 57000,
  "explorers": [{
    "name": "Syscoin Rollux Testnet Explorer",
    "url": "https://rollux.tanenbaum.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "syscoin-rollux-testnet"
};

var c60000 = {
  "name": "Thinkium Testnet Chain 0",
  "chain": "Thinkium",
  "rpc": ["https://thinkium-testnet-chain-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://test.thinkiumrpc.net/"],
  "faucets": ["https://www.thinkiumdev.net/faucet"],
  "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
  },
  "infoURL": "https://thinkium.net/",
  "shortName": "TKM-test0",
  "chainId": 60000,
  "networkId": 60000,
  "explorers": [{
    "name": "thinkiumscan",
    "url": "https://test0.thinkiumscan.net",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "thinkium-testnet-chain-0"
};

var c60001 = {
  "name": "Thinkium Testnet Chain 1",
  "chain": "Thinkium",
  "rpc": ["https://thinkium-testnet-chain-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://test1.thinkiumrpc.net/"],
  "faucets": ["https://www.thinkiumdev.net/faucet"],
  "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
  },
  "infoURL": "https://thinkium.net/",
  "shortName": "TKM-test1",
  "chainId": 60001,
  "networkId": 60001,
  "explorers": [{
    "name": "thinkiumscan",
    "url": "https://test1.thinkiumscan.net",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "thinkium-testnet-chain-1"
};

var c60002 = {
  "name": "Thinkium Testnet Chain 2",
  "chain": "Thinkium",
  "rpc": ["https://thinkium-testnet-chain-2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://test2.thinkiumrpc.net/"],
  "faucets": ["https://www.thinkiumdev.net/faucet"],
  "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
  },
  "infoURL": "https://thinkium.net/",
  "shortName": "TKM-test2",
  "chainId": 60002,
  "networkId": 60002,
  "explorers": [{
    "name": "thinkiumscan",
    "url": "https://test2.thinkiumscan.net",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "thinkium-testnet-chain-2"
};

var c60103 = {
  "name": "Thinkium Testnet Chain 103",
  "chain": "Thinkium",
  "rpc": ["https://thinkium-testnet-chain-103.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://test103.thinkiumrpc.net/"],
  "faucets": ["https://www.thinkiumdev.net/faucet"],
  "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
  },
  "infoURL": "https://thinkium.net/",
  "shortName": "TKM-test103",
  "chainId": 60103,
  "networkId": 60103,
  "explorers": [{
    "name": "thinkiumscan",
    "url": "https://test103.thinkiumscan.net",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "thinkium-testnet-chain-103"
};

var c61803 = {
  "name": "Etica Mainnet",
  "chain": "Etica Protocol (ETI/EGAZ)",
  "icon": {
    "url": "ipfs://QmYSyhUqm6ArWyALBe3G64823ZpEUmFdkzKZ93hUUhNKgU",
    "width": 360,
    "height": 361,
    "format": "png"
  },
  "rpc": ["https://etica.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eticamainnet.eticascan.org", "https://eticamainnet.eticaprotocol.org"],
  "faucets": ["http://faucet.etica-stats.org/"],
  "nativeCurrency": {
    "name": "EGAZ",
    "symbol": "EGAZ",
    "decimals": 18
  },
  "infoURL": "https://eticaprotocol.org",
  "shortName": "Etica",
  "chainId": 61803,
  "networkId": 61803,
  "explorers": [{
    "name": "eticascan",
    "url": "https://eticascan.org",
    "standard": "EIP3091"
  }, {
    "name": "eticastats",
    "url": "http://explorer.etica-stats.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "etica"
};

var c61916 = {
  "name": "DoKEN Super Chain Mainnet",
  "chain": "DoKEN Super Chain",
  "rpc": ["https://doken-super-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sgrpc.doken.dev", "https://nyrpc.doken.dev", "https://ukrpc.doken.dev"],
  "faucets": [],
  "nativeCurrency": {
    "name": "DoKEN",
    "symbol": "DKN",
    "decimals": 18
  },
  "infoURL": "https://doken.dev/",
  "shortName": "DoKEN",
  "chainId": 61916,
  "networkId": 61916,
  "icon": {
    "url": "ipfs://bafkreifms4eio6v56oyeemnnu5luq3sc44hptan225lr45itgzu3u372iu",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "explorers": [{
    "name": "DSC Scan",
    "url": "https://explore.doken.dev",
    "icon": "doken",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "doken-super-chain"
};

var c62320 = {
  "name": "Celo Baklava Testnet",
  "chainId": 62320,
  "shortName": "BKLV",
  "chain": "CELO",
  "networkId": 62320,
  "nativeCurrency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
  },
  "rpc": ["https://celo-baklava-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://baklava-forno.celo-testnet.org"],
  "faucets": ["https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform", "https://cauldron.pretoriaresearchlab.io/baklava-faucet"],
  "infoURL": "https://docs.celo.org/",
  "testnet": true,
  "slug": "celo-baklava-testnet"
};

var c62621 = {
  "name": "MultiVAC Mainnet",
  "chain": "MultiVAC",
  "icon": {
    "url": "ipfs://QmWb1gthhbzkiLdgcP8ccZprGbJVjFcW8Rn4uJjrw4jd3B",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "rpc": ["https://multivac.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.mtv.ac", "https://rpc-eu.mtv.ac"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MultiVAC",
    "symbol": "MTV",
    "decimals": 18
  },
  "infoURL": "https://mtv.ac",
  "shortName": "mtv",
  "chainId": 62621,
  "networkId": 62621,
  "explorers": [{
    "name": "MultiVAC Explorer",
    "url": "https://e.mtv.ac",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "multivac"
};

var c63000 = {
  "name": "eCredits Mainnet",
  "chain": "ECS",
  "rpc": ["https://ecredits.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.ecredits.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "eCredits",
    "symbol": "ECS",
    "decimals": 18
  },
  "infoURL": "https://ecredits.com",
  "shortName": "ecs",
  "chainId": 63000,
  "networkId": 63000,
  "icon": {
    "url": "ipfs://QmU9H9JE1KtLh2Fxrd8EWTMjKGJBpgRWKUeEx7u6ic4kBY",
    "width": 32,
    "height": 32,
    "format": "png"
  },
  "explorers": [{
    "name": "eCredits MainNet Explorer",
    "url": "https://explorer.ecredits.com",
    "icon": "ecredits",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ecredits"
};

var c63001 = {
  "name": "eCredits Testnet",
  "chain": "ECS",
  "rpc": ["https://ecredits-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.tst.ecredits.com"],
  "faucets": ["https://faucet.tst.ecredits.com"],
  "nativeCurrency": {
    "name": "eCredits",
    "symbol": "ECS",
    "decimals": 18
  },
  "infoURL": "https://ecredits.com",
  "shortName": "ecs-testnet",
  "chainId": 63001,
  "networkId": 63001,
  "icon": {
    "url": "ipfs://QmU9H9JE1KtLh2Fxrd8EWTMjKGJBpgRWKUeEx7u6ic4kBY",
    "width": 32,
    "height": 32,
    "format": "png"
  },
  "explorers": [{
    "name": "eCredits TestNet Explorer",
    "url": "https://explorer.tst.ecredits.com",
    "icon": "ecredits",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "ecredits-testnet"
};

var c65450 = {
  "name": "Scolcoin Mainnet",
  "chain": "SCOLWEI",
  "rpc": ["https://scolcoin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.scolcoin.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Scolcoin",
    "symbol": "SCOL",
    "decimals": 18
  },
  "infoURL": "https://scolcoin.com",
  "shortName": "SRC",
  "chainId": 65450,
  "networkId": 65450,
  "icon": {
    "url": "ipfs://QmVES1eqDXhP8SdeCpM85wvjmhrQDXGRquQebDrSdvJqpt",
    "width": 792,
    "height": 822,
    "format": "png"
  },
  "explorers": [{
    "name": "Scolscan Explorer",
    "url": "https://explorer.scolcoin.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "scolcoin"
};

var c69420 = {
  "name": "Condrieu",
  "title": "Ethereum Verkle Testnet Condrieu",
  "chain": "ETH",
  "rpc": ["https://condrieu.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.condrieu.ethdevops.io:8545"],
  "faucets": ["https://faucet.condrieu.ethdevops.io"],
  "nativeCurrency": {
    "name": "Condrieu Testnet Ether",
    "symbol": "CTE",
    "decimals": 18
  },
  "infoURL": "https://condrieu.ethdevops.io",
  "shortName": "cndr",
  "chainId": 69420,
  "networkId": 69420,
  "explorers": [{
    "name": "Condrieu explorer",
    "url": "https://explorer.condrieu.ethdevops.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "condrieu"
};

var c70000 = {
  "name": "Thinkium Mainnet Chain 0",
  "chain": "Thinkium",
  "rpc": ["https://thinkium-chain-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://proxy.thinkiumrpc.net/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
  },
  "infoURL": "https://thinkium.net/",
  "shortName": "TKM0",
  "chainId": 70000,
  "networkId": 70000,
  "explorers": [{
    "name": "thinkiumscan",
    "url": "https://chain0.thinkiumscan.net",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "thinkium-chain-0"
};

var c70001 = {
  "name": "Thinkium Mainnet Chain 1",
  "chain": "Thinkium",
  "rpc": ["https://thinkium-chain-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://proxy1.thinkiumrpc.net/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
  },
  "infoURL": "https://thinkium.net/",
  "shortName": "TKM1",
  "chainId": 70001,
  "networkId": 70001,
  "explorers": [{
    "name": "thinkiumscan",
    "url": "https://chain1.thinkiumscan.net",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "thinkium-chain-1"
};

var c70002 = {
  "name": "Thinkium Mainnet Chain 2",
  "chain": "Thinkium",
  "rpc": ["https://thinkium-chain-2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://proxy2.thinkiumrpc.net/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
  },
  "infoURL": "https://thinkium.net/",
  "shortName": "TKM2",
  "chainId": 70002,
  "networkId": 70002,
  "explorers": [{
    "name": "thinkiumscan",
    "url": "https://chain2.thinkiumscan.net",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "thinkium-chain-2"
};

var c70103 = {
  "name": "Thinkium Mainnet Chain 103",
  "chain": "Thinkium",
  "rpc": ["https://thinkium-chain-103.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://proxy103.thinkiumrpc.net/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TKM",
    "symbol": "TKM",
    "decimals": 18
  },
  "infoURL": "https://thinkium.net/",
  "shortName": "TKM103",
  "chainId": 70103,
  "networkId": 70103,
  "explorers": [{
    "name": "thinkiumscan",
    "url": "https://chain103.thinkiumscan.net",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "thinkium-chain-103"
};

var c71393 = {
  "name": "Polyjuice Testnet",
  "chain": "CKB",
  "icon": {
    "url": "ipfs://QmZ5gFWUxLFqqT3DkefYfRsVksMwMTc5VvBjkbHpeFMsNe",
    "width": 1001,
    "height": 1629,
    "format": "png"
  },
  "rpc": ["https://polyjuice-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://godwoken-testnet-web3-rpc.ckbapp.dev", "ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws"],
  "faucets": ["https://faucet.nervos.org/"],
  "nativeCurrency": {
    "name": "CKB",
    "symbol": "CKB",
    "decimals": 8
  },
  "infoURL": "https://github.com/nervosnetwork/godwoken",
  "shortName": "ckb",
  "chainId": 71393,
  "networkId": 1,
  "testnet": true,
  "slug": "polyjuice-testnet"
};

var c71401 = {
  "name": "Godwoken Testnet v1",
  "chain": "GWT",
  "rpc": ["https://godwoken-testnet-v1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://godwoken-testnet-v1.ckbapp.dev", "https://v1.testnet.godwoken.io/rpc"],
  "faucets": ["https://testnet.bridge.godwoken.io"],
  "nativeCurrency": {
    "name": "pCKB",
    "symbol": "pCKB",
    "decimals": 18
  },
  "infoURL": "https://www.nervos.org",
  "shortName": "gw-testnet-v1",
  "chainId": 71401,
  "networkId": 71401,
  "explorers": [{
    "name": "GWScout Explorer",
    "url": "https://gw-testnet-explorer.nervosdao.community",
    "standard": "none"
  }, {
    "name": "GWScan Block Explorer",
    "url": "https://v1.testnet.gwscan.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "godwoken-testnet-v1"
};

var c71402 = {
  "name": "Godwoken Mainnet",
  "chain": "GWT",
  "rpc": ["https://godwoken.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://v1.mainnet.godwoken.io/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "pCKB",
    "symbol": "pCKB",
    "decimals": 18
  },
  "infoURL": "https://www.nervos.org",
  "shortName": "gw-mainnet-v1",
  "chainId": 71402,
  "networkId": 71402,
  "explorers": [{
    "name": "GWScout Explorer",
    "url": "https://gw-mainnet-explorer.nervosdao.community",
    "standard": "none"
  }, {
    "name": "GWScan Block Explorer",
    "url": "https://v1.gwscan.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "godwoken"
};

var c73799 = {
  "name": "Energy Web Volta Testnet",
  "chain": "Volta",
  "rpc": ["https://energy-web-volta-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://volta-rpc.energyweb.org", "wss://volta-rpc.energyweb.org/ws"],
  "faucets": ["https://voltafaucet.energyweb.org"],
  "nativeCurrency": {
    "name": "Volta Token",
    "symbol": "VT",
    "decimals": 18
  },
  "infoURL": "https://energyweb.org",
  "shortName": "vt",
  "chainId": 73799,
  "networkId": 73799,
  "testnet": true,
  "slug": "energy-web-volta-testnet"
};

var c73927 = {
  "name": "Mixin Virtual Machine",
  "chain": "MVM",
  "rpc": ["https://mixin-virtual-machine.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://geth.mvm.dev"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://mvm.dev",
  "shortName": "mvm",
  "chainId": 73927,
  "networkId": 73927,
  "icon": {
    "url": "ipfs://QmeuDgSprukzfV7fi9XYHYcfmT4aZZZU7idgShtRS8Vf6V",
    "width": 471,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "mvmscan",
    "url": "https://scan.mvm.dev",
    "icon": "mvm",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "mixin-virtual-machine"
};

var c75000 = {
  "name": "ResinCoin Mainnet",
  "chain": "RESIN",
  "icon": {
    "url": "ipfs://QmTBszPzBeWPhjozf4TxpL2ws1NkG9yJvisx9h6MFii1zb",
    "width": 460,
    "height": 460,
    "format": "png"
  },
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "RESIN",
    "decimals": 18
  },
  "infoURL": "https://resincoin.dev",
  "shortName": "resin",
  "chainId": 75000,
  "networkId": 75000,
  "explorers": [{
    "name": "ResinScan",
    "url": "https://explorer.resincoin.dev",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "resincoin"
};

var c77612 = {
  "name": "Vention Smart Chain Mainnet",
  "chain": "VSC",
  "icon": {
    "url": "ipfs://QmcNepHmbmHW1BZYM3MFqJW4awwhmDqhUPRXXmRnXwg1U4",
    "width": 250,
    "height": 250,
    "format": "png"
  },
  "rpc": ["https://vention-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.vention.network"],
  "faucets": ["https://faucet.vention.network"],
  "nativeCurrency": {
    "name": "VNT",
    "symbol": "VNT",
    "decimals": 18
  },
  "infoURL": "https://ventionscan.io",
  "shortName": "vscm",
  "chainId": 77612,
  "networkId": 77612,
  "explorers": [{
    "name": "ventionscan",
    "url": "https://ventionscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "vention-smart-chain"
};

var c78110 = {
  "name": "Firenze test network",
  "chain": "ETH",
  "rpc": ["https://firenze-test-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://ethnode.primusmoney.com/firenze"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Firenze Ether",
    "symbol": "FIN",
    "decimals": 18
  },
  "infoURL": "https://primusmoney.com",
  "shortName": "firenze",
  "chainId": 78110,
  "networkId": 78110,
  "testnet": true,
  "slug": "firenze-test-network"
};

var c79879 = {
  "name": "Gold Smart Chain Testnet",
  "chain": "STAND",
  "icon": {
    "url": "ipfs://QmPNuymyaKLJhCaXnyrsL8358FeTxabZFsaxMmWNU4Tzt3",
    "width": 396,
    "height": 418,
    "format": "png"
  },
  "rpc": ["https://gold-smart-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.goldsmartchain.com"],
  "faucets": ["https://faucet.goldsmartchain.com"],
  "nativeCurrency": {
    "name": "Standard in Gold",
    "symbol": "STAND",
    "decimals": 18
  },
  "infoURL": "https://goldsmartchain.com",
  "shortName": "STANDt",
  "chainId": 79879,
  "networkId": 79879,
  "explorers": [{
    "name": "Gold Smart Chain",
    "url": "https://testnet.goldsmartchain.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "gold-smart-chain-testnet"
};

var c80001 = {
  "name": "Mumbai",
  "title": "Polygon Testnet Mumbai",
  "chain": "Polygon",
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "rpc": ["https://mumbai.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}", "https://matic-mumbai.chainstacklabs.com", "https://rpc-mumbai.maticvigil.com", "https://matic-testnet-archive-rpc.bwarelabs.com"],
  "faucets": ["https://faucet.polygon.technology/"],
  "nativeCurrency": {
    "name": "MATIC",
    "symbol": "MATIC",
    "decimals": 18
  },
  "infoURL": "https://polygon.technology/",
  "shortName": "maticmum",
  "chainId": 80001,
  "networkId": 80001,
  "explorers": [{
    "name": "polygonscan",
    "url": "https://mumbai.polygonscan.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "mumbai"
};

var c84531 = {
  "name": "Base Goerli Testnet",
  "chain": "ETH",
  "rpc": ["https://base-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.base.org"],
  "faucets": ["https://www.coinbase.com/faucets/base-ethereum-goerli-faucet"],
  "nativeCurrency": {
    "name": "Goerli Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://base.org",
  "shortName": "basegor",
  "chainId": 84531,
  "networkId": 84531,
  "explorers": [{
    "name": "basescout",
    "url": "https://base-goerli.blockscout.com",
    "standard": "none"
  }, {
    "name": "basescan",
    "url": "https://goerli.basescan.org",
    "standard": "none"
  }],
  "testnet": true,
  "icon": {
    "url": "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png",
    "height": 512,
    "width": 512,
    "format": "png"
  },
  "slug": "base-goerli"
};

var c88880 = {
  "name": "Chiliz Scoville Testnet",
  "chain": "CHZ",
  "rpc": ["https://chiliz-scoville-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://scoville-rpc.chiliz.com"],
  "faucets": ["https://scoville-faucet.chiliz.com"],
  "nativeCurrency": {
    "name": "Chiliz",
    "symbol": "CHZ",
    "decimals": 18
  },
  "icon": {
    "url": "ipfs://QmYV5xUVZhHRzLy7ie9D8qZeygJHvNZZAxwnB9GXYy6EED",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "infoURL": "https://www.chiliz.com/en/chain",
  "shortName": "chz",
  "chainId": 88880,
  "networkId": 88880,
  "explorers": [{
    "name": "scoville-explorer",
    "url": "https://scoville-explorer.chiliz.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "chiliz-scoville-testnet"
};

var c88888 = {
  "name": "IVAR Chain Mainnet",
  "chain": "IVAR",
  "icon": {
    "url": "ipfs://QmV8UmSwqGF2fxrqVEBTHbkyZueahqyYtkfH2RBF5pNysM",
    "width": 519,
    "height": 519,
    "format": "svg"
  },
  "rpc": ["https://ivar-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.ivarex.com"],
  "faucets": ["https://faucet.ivarex.com/"],
  "nativeCurrency": {
    "name": "Ivar",
    "symbol": "IVAR",
    "decimals": 18
  },
  "infoURL": "https://ivarex.com",
  "shortName": "ivar",
  "chainId": 88888,
  "networkId": 88888,
  "explorers": [{
    "name": "ivarscan",
    "url": "https://ivarscan.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ivar-chain"
};

var c90210 = {
  "name": "Beverly Hills",
  "title": "Ethereum multi-client Verkle Testnet Beverly Hills",
  "chain": "ETH",
  "rpc": ["https://beverly-hills.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.beverlyhills.ethdevops.io:8545"],
  "faucets": ["https://faucet.beverlyhills.ethdevops.io"],
  "nativeCurrency": {
    "name": "Beverly Hills Testnet Ether",
    "symbol": "BVE",
    "decimals": 18
  },
  "infoURL": "https://beverlyhills.ethdevops.io",
  "shortName": "bvhl",
  "chainId": 90210,
  "networkId": 90210,
  "status": "incubating",
  "explorers": [{
    "name": "Beverly Hills explorer",
    "url": "https://explorer.beverlyhills.ethdevops.io",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "beverly-hills"
};

var c92001 = {
  "name": "Lambda Testnet",
  "chain": "Lambda",
  "rpc": ["https://lambda-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm.lambda.top/"],
  "faucets": ["https://faucet.lambda.top"],
  "nativeCurrency": {
    "name": "test-Lamb",
    "symbol": "LAMB",
    "decimals": 18
  },
  "infoURL": "https://lambda.im",
  "shortName": "lambda-testnet",
  "chainId": 92001,
  "networkId": 92001,
  "icon": {
    "url": "ipfs://QmWsoME6LCghQTpGYf7EnUojaDdYo7kfkWVjE6VvNtkjwy",
    "width": 500,
    "height": 500,
    "format": "png"
  },
  "explorers": [{
    "name": "Lambda EVM Explorer",
    "url": "https://explorer.lambda.top",
    "standard": "EIP3091",
    "icon": "lambda"
  }],
  "testnet": true,
  "slug": "lambda-testnet"
};

var c99998 = {
  "name": "UB Smart Chain(testnet)",
  "chain": "USC",
  "rpc": ["https://ub-smart-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.rpc.uschain.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "UBC",
    "symbol": "UBC",
    "decimals": 18
  },
  "infoURL": "https://www.ubchain.site",
  "shortName": "usctest",
  "chainId": 99998,
  "networkId": 99998,
  "testnet": true,
  "slug": "ub-smart-chain-testnet"
};

var c99999 = {
  "name": "UB Smart Chain",
  "chain": "USC",
  "rpc": ["https://ub-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.uschain.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "UBC",
    "symbol": "UBC",
    "decimals": 18
  },
  "infoURL": "https://www.ubchain.site/",
  "shortName": "usc",
  "chainId": 99999,
  "networkId": 99999,
  "testnet": false,
  "slug": "ub-smart-chain"
};

var c100000 = {
  "name": "QuarkChain Mainnet Root",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-root.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://jrpc.mainnet.quarkchain.io:38391"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-r",
  "chainId": 100000,
  "networkId": 100000,
  "testnet": false,
  "slug": "quarkchain-root"
};

var c100001 = {
  "name": "QuarkChain Mainnet Shard 0",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-shard-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-s0-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39000"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-s0",
  "chainId": 100001,
  "networkId": 100001,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-mainnet",
    "url": "https://mainnet.quarkchain.io/0",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-shard-0"
};

var c100002 = {
  "name": "QuarkChain Mainnet Shard 1",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-shard-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-s1-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39001"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-s1",
  "chainId": 100002,
  "networkId": 100002,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-mainnet",
    "url": "https://mainnet.quarkchain.io/1",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-shard-1"
};

var c100003 = {
  "name": "QuarkChain Mainnet Shard 2",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-shard-2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-s2-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39002"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-s2",
  "chainId": 100003,
  "networkId": 100003,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-mainnet",
    "url": "https://mainnet.quarkchain.io/2",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-shard-2"
};

var c100004 = {
  "name": "QuarkChain Mainnet Shard 3",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-shard-3.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-s3-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39003"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-s3",
  "chainId": 100004,
  "networkId": 100004,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-mainnet",
    "url": "https://mainnet.quarkchain.io/3",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-shard-3"
};

var c100005 = {
  "name": "QuarkChain Mainnet Shard 4",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-shard-4.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-s4-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39004"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-s4",
  "chainId": 100005,
  "networkId": 100005,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-mainnet",
    "url": "https://mainnet.quarkchain.io/4",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-shard-4"
};

var c100006 = {
  "name": "QuarkChain Mainnet Shard 5",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-shard-5.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-s5-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39005"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-s5",
  "chainId": 100006,
  "networkId": 100006,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-mainnet",
    "url": "https://mainnet.quarkchain.io/5",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-shard-5"
};

var c100007 = {
  "name": "QuarkChain Mainnet Shard 6",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-shard-6.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-s6-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39006"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-s6",
  "chainId": 100007,
  "networkId": 100007,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-mainnet",
    "url": "https://mainnet.quarkchain.io/6",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-shard-6"
};

var c100008 = {
  "name": "QuarkChain Mainnet Shard 7",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-shard-7.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-s7-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39007"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-s7",
  "chainId": 100008,
  "networkId": 100008,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-mainnet",
    "url": "https://mainnet.quarkchain.io/7",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-shard-7"
};

var c100009 = {
  "name": "VeChain",
  "chain": "VeChain",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "VeChain",
    "symbol": "VET",
    "decimals": 18
  },
  "infoURL": "https://vechain.org",
  "shortName": "vechain",
  "chainId": 100009,
  "networkId": 100009,
  "explorers": [{
    "name": "VeChain Stats",
    "url": "https://vechainstats.com",
    "standard": "none"
  }, {
    "name": "VeChain Explorer",
    "url": "https://explore.vechain.org",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "vechain"
};

var c100010 = {
  "name": "VeChain Testnet",
  "chain": "VeChain",
  "rpc": [],
  "faucets": ["https://faucet.vecha.in"],
  "nativeCurrency": {
    "name": "VeChain",
    "symbol": "VET",
    "decimals": 18
  },
  "infoURL": "https://vechain.org",
  "shortName": "vechain-testnet",
  "chainId": 100010,
  "networkId": 100010,
  "explorers": [{
    "name": "VeChain Explorer",
    "url": "https://explore-testnet.vechain.org",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "vechain-testnet"
};

var c101010 = {
  "name": "Soverun Testnet",
  "chain": "SVRN",
  "icon": {
    "url": "ipfs://QmTYazUzgY9Nn2mCjWwFUSLy3dG6i2PvALpwCNQvx1zXyi",
    "width": 1154,
    "height": 1154,
    "format": "png"
  },
  "rpc": ["https://soverun-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.soverun.com"],
  "faucets": ["https://faucet.soverun.com"],
  "nativeCurrency": {
    "name": "Soverun",
    "symbol": "SVRN",
    "decimals": 18
  },
  "infoURL": "https://soverun.com",
  "shortName": "SVRNt",
  "chainId": 101010,
  "networkId": 101010,
  "explorers": [{
    "name": "Soverun",
    "url": "https://testnet.soverun.com",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "soverun-testnet"
};

var c103090 = {
  "name": "Crystaleum",
  "chain": "crystal",
  "rpc": ["https://crystaleum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://evm.cryptocurrencydevs.org", "https://rpc.crystaleum.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CRFI",
    "symbol": "◈",
    "decimals": 18
  },
  "infoURL": "https://crystaleum.org",
  "shortName": "CRFI",
  "chainId": 103090,
  "networkId": 1,
  "icon": {
    "url": "ipfs://Qmbry1Uc6HnXmqFNXW5dFJ7To8EezCCjNr4TqqvAyzXS4h",
    "width": 150,
    "height": 150,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://scan.crystaleum.org",
    "icon": "crystal",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "crystaleum"
};

var c108801 = {
  "name": "BROChain Mainnet",
  "chain": "BRO",
  "rpc": ["https://brochain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.brochain.org", "http://rpc.brochain.org", "https://rpc.brochain.org/mainnet", "http://rpc.brochain.org/mainnet"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Brother",
    "symbol": "BRO",
    "decimals": 18
  },
  "infoURL": "https://brochain.org",
  "shortName": "bro",
  "chainId": 108801,
  "networkId": 108801,
  "explorers": [{
    "name": "BROChain Explorer",
    "url": "https://explorer.brochain.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "brochain"
};

var c110000 = {
  "name": "QuarkChain Devnet Root",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-devnet-root.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://jrpc.devnet.quarkchain.io:38391"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-d-r",
  "chainId": 110000,
  "networkId": 110000,
  "testnet": false,
  "slug": "quarkchain-devnet-root"
};

var c110001 = {
  "name": "QuarkChain Devnet Shard 0",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-devnet-shard-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet-s0-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39900"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-d-s0",
  "chainId": 110001,
  "networkId": 110001,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-devnet",
    "url": "https://devnet.quarkchain.io/0",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-devnet-shard-0"
};

var c110002 = {
  "name": "QuarkChain Devnet Shard 1",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-devnet-shard-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet-s1-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39901"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-d-s1",
  "chainId": 110002,
  "networkId": 110002,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-devnet",
    "url": "https://devnet.quarkchain.io/1",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-devnet-shard-1"
};

var c110003 = {
  "name": "QuarkChain Devnet Shard 2",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-devnet-shard-2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet-s2-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39902"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-d-s2",
  "chainId": 110003,
  "networkId": 110003,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-devnet",
    "url": "https://devnet.quarkchain.io/2",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-devnet-shard-2"
};

var c110004 = {
  "name": "QuarkChain Devnet Shard 3",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-devnet-shard-3.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet-s3-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39903"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-d-s3",
  "chainId": 110004,
  "networkId": 110004,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-devnet",
    "url": "https://devnet.quarkchain.io/3",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-devnet-shard-3"
};

var c110005 = {
  "name": "QuarkChain Devnet Shard 4",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-devnet-shard-4.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet-s4-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39904"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-d-s4",
  "chainId": 110005,
  "networkId": 110005,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-devnet",
    "url": "https://devnet.quarkchain.io/4",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-devnet-shard-4"
};

var c110006 = {
  "name": "QuarkChain Devnet Shard 5",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-devnet-shard-5.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet-s5-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39905"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-d-s5",
  "chainId": 110006,
  "networkId": 110006,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-devnet",
    "url": "https://devnet.quarkchain.io/5",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-devnet-shard-5"
};

var c110007 = {
  "name": "QuarkChain Devnet Shard 6",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-devnet-shard-6.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet-s6-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39906"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-d-s6",
  "chainId": 110007,
  "networkId": 110007,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-devnet",
    "url": "https://devnet.quarkchain.io/6",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-devnet-shard-6"
};

var c110008 = {
  "name": "QuarkChain Devnet Shard 7",
  "chain": "QuarkChain",
  "rpc": ["https://quarkchain-devnet-shard-7.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet-s7-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39907"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io",
  "shortName": "qkc-d-s7",
  "chainId": 110008,
  "networkId": 110008,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  },
  "explorers": [{
    "name": "quarkchain-devnet",
    "url": "https://devnet.quarkchain.io/7",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "quarkchain-devnet-shard-7"
};

var c111111 = {
  "name": "Siberium Network",
  "chain": "SBR",
  "rpc": ["https://siberium-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.main.siberium.net", "https://rpc.main.siberium.net.ru"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Siberium",
    "symbol": "SBR",
    "decimals": 18
  },
  "infoURL": "https://siberium.net",
  "shortName": "sbr",
  "chainId": 111111,
  "networkId": 111111,
  "icon": {
    "url": "ipfs://QmVDeoGo2TZPDWiaNDdPCnH2tz2BCQ7viw8ugdDWnU5LFq",
    "width": 1920,
    "height": 1920,
    "format": "svg"
  },
  "explorers": [{
    "name": "Siberium Mainnet Explorer - blockscout - 1",
    "url": "https://explorer.main.siberium.net",
    "icon": "siberium",
    "standard": "EIP3091"
  }, {
    "name": "Siberium Mainnet Explorer - blockscout - 2",
    "url": "https://explorer.main.siberium.net.ru",
    "icon": "siberium",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "siberium-network"
};

var c131419 = {
  "name": "ETND Chain Mainnets",
  "chain": "ETND",
  "rpc": ["https://etnd-chain-s.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.node1.etnd.pro/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ETND",
    "symbol": "ETND",
    "decimals": 18
  },
  "infoURL": "https://www.etnd.pro",
  "shortName": "ETND",
  "chainId": 131419,
  "networkId": 131419,
  "icon": {
    "url": "ipfs://Qmd26eRJxPb1jJg5Q4mC2M4kD9Jrs5vmcnr5LczHFMGwSD",
    "width": 128,
    "height": 128,
    "format": "png"
  },
  "explorers": [{
    "name": "etndscan",
    "url": "https://scan.etnd.pro",
    "icon": "ETND",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "etnd-chain-s"
};

var c188881 = {
  "name": "Condor Test Network",
  "chain": "CONDOR",
  "icon": {
    "url": "ipfs://QmPRDuEJSTqp2cDUvWCp71Wns6XV8nvdeAVKWH6srpk4xM",
    "width": 752,
    "height": 752,
    "format": "png"
  },
  "rpc": ["https://condor-test-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.condor.systems/rpc"],
  "faucets": ["https://faucet.condor.systems"],
  "nativeCurrency": {
    "name": "Condor Native Token",
    "symbol": "CONDOR",
    "decimals": 18
  },
  "infoURL": "https://condor.systems",
  "shortName": "condor",
  "chainId": 188881,
  "networkId": 188881,
  "explorers": [{
    "name": "CondorScan",
    "url": "https://explorer.condor.systems",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "condor-test-network"
};

var c200101 = {
  "name": "Milkomeda C1 Testnet",
  "chain": "milkTAda",
  "icon": {
    "url": "ipfs://QmdoUtvHDybu5ppYBZT8BMRp6AqByVSoQs8nFwKbaS55jd",
    "width": 367,
    "height": 367,
    "format": "svg"
  },
  "rpc": ["https://milkomeda-c1-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-devnet-cardano-evm.c1.milkomeda.com", "wss://rpc-devnet-cardano-evm.c1.milkomeda.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "milkTAda",
    "symbol": "mTAda",
    "decimals": 18
  },
  "infoURL": "https://milkomeda.com",
  "shortName": "milkTAda",
  "chainId": 200101,
  "networkId": 200101,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://explorer-devnet-cardano-evm.c1.milkomeda.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "milkomeda-c1-testnet"
};

var c200202 = {
  "name": "Milkomeda A1 Testnet",
  "chain": "milkTAlgo",
  "icon": {
    "url": "ipfs://QmdoUtvHDybu5ppYBZT8BMRp6AqByVSoQs8nFwKbaS55jd",
    "width": 367,
    "height": 367,
    "format": "svg"
  },
  "rpc": ["https://milkomeda-a1-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-devnet-algorand-rollup.a1.milkomeda.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "milkTAlgo",
    "symbol": "mTAlgo",
    "decimals": 18
  },
  "infoURL": "https://milkomeda.com",
  "shortName": "milkTAlgo",
  "chainId": 200202,
  "networkId": 200202,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://explorer-devnet-algorand-rollup.a1.milkomeda.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "milkomeda-a1-testnet"
};

var c200625 = {
  "name": "Akroma",
  "chain": "AKA",
  "rpc": ["https://akroma.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://remote.akroma.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Akroma Ether",
    "symbol": "AKA",
    "decimals": 18
  },
  "infoURL": "https://akroma.io",
  "shortName": "aka",
  "chainId": 200625,
  "networkId": 200625,
  "slip44": 200625,
  "testnet": false,
  "slug": "akroma"
};

var c201018 = {
  "name": "Alaya Mainnet",
  "chain": "Alaya",
  "rpc": ["https://alaya.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://openapi.alaya.network/rpc", "wss://openapi.alaya.network/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ATP",
    "symbol": "atp",
    "decimals": 18
  },
  "infoURL": "https://www.alaya.network/",
  "shortName": "alaya",
  "chainId": 201018,
  "networkId": 1,
  "icon": {
    "url": "ipfs://Qmci6vPcWAwmq19j98yuQxjV6UPzHtThMdCAUDbKeb8oYu",
    "width": 1140,
    "height": 1140,
    "format": "png"
  },
  "explorers": [{
    "name": "alaya explorer",
    "url": "https://scan.alaya.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "alaya"
};

var c201030 = {
  "name": "Alaya Dev Testnet",
  "chain": "Alaya",
  "rpc": ["https://alaya-dev-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnetopenapi.alaya.network/rpc", "wss://devnetopenapi.alaya.network/ws"],
  "faucets": ["https://faucet.alaya.network/faucet/?id=f93426c0887f11eb83b900163e06151c"],
  "nativeCurrency": {
    "name": "ATP",
    "symbol": "atp",
    "decimals": 18
  },
  "infoURL": "https://www.alaya.network/",
  "shortName": "alayadev",
  "chainId": 201030,
  "networkId": 1,
  "icon": {
    "url": "ipfs://Qmci6vPcWAwmq19j98yuQxjV6UPzHtThMdCAUDbKeb8oYu",
    "width": 1140,
    "height": 1140,
    "format": "png"
  },
  "explorers": [{
    "name": "alaya explorer",
    "url": "https://devnetscan.alaya.network",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "alaya-dev-testnet"
};

var c201804 = {
  "name": "Mythical Chain",
  "chain": "MYTH",
  "rpc": ["https://mythical-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://chain-rpc.mythicalgames.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mythos",
    "symbol": "MYTH",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://mythicalgames.com/",
  "shortName": "myth",
  "chainId": 201804,
  "networkId": 201804,
  "icon": {
    "url": "ipfs://bafkreihru6cccfblrjz5bv36znq2l3h67u6xj5ivtc4bj5l6gzofbgtnb4",
    "width": 350,
    "height": 350,
    "format": "png"
  },
  "explorers": [{
    "name": "Mythical Chain Explorer",
    "url": "https://explorer.mythicalgames.com",
    "icon": "mythical",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "mythical-chain"
};

var c202020 = {
  "name": "Decimal Smart Chain Testnet",
  "chain": "tDSC",
  "rpc": ["https://decimal-smart-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-val.decimalchain.com/web3"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Decimal",
    "symbol": "tDEL",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://decimalchain.com",
  "shortName": "tDSC",
  "chainId": 202020,
  "networkId": 202020,
  "icon": {
    "url": "ipfs://QmSgzwKnJJjys3Uq2aVVdwJ3NffLj3CXMVCph9uByTBegc",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "explorers": [{
    "name": "DSC Explorer Testnet",
    "url": "https://testnet.explorer.decimalchain.com",
    "icon": "dsc",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "decimal-smart-chain-testnet"
};

var c202624 = {
  "name": "Jellie",
  "title": "Twala Testnet Jellie",
  "shortName": "twl-jellie",
  "chain": "ETH",
  "chainId": 202624,
  "networkId": 202624,
  "icon": {
    "url": "ipfs://QmTXJVhVKvVC7DQEnGKXvydvwpvVaUEBJrMHvsCr4nr1sK",
    "width": 1326,
    "height": 1265,
    "format": "png"
  },
  "nativeCurrency": {
    "name": "Twala Coin",
    "symbol": "TWL",
    "decimals": 18
  },
  "rpc": ["https://jellie.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://jellie-rpc.twala.io/", "wss://jellie-rpc-wss.twala.io/"],
  "faucets": [],
  "infoURL": "https://twala.io/",
  "explorers": [{
    "name": "Jellie Blockchain Explorer",
    "url": "https://jellie.twala.io",
    "standard": "EIP3091",
    "icon": "twala"
  }],
  "testnet": true,
  "slug": "jellie"
};

var c210425 = {
  "name": "PlatON Mainnet",
  "chain": "PlatON",
  "rpc": ["https://platon.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://openapi2.platon.network/rpc", "wss://openapi2.platon.network/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "LAT",
    "symbol": "lat",
    "decimals": 18
  },
  "infoURL": "https://www.platon.network",
  "shortName": "platon",
  "chainId": 210425,
  "networkId": 1,
  "icon": {
    "url": "ipfs://QmT7PSXBiVBma6E15hNkivmstqLu3JSnG1jXN5pTmcCGRC",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "explorers": [{
    "name": "PlatON explorer",
    "url": "https://scan.platon.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "platon"
};

var c220315 = {
  "name": "Mas Mainnet",
  "chain": "MAS",
  "rpc": ["https://mas.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://node.masnet.ai:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Master Bank",
    "symbol": "MAS",
    "decimals": 18
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://masterbank.org",
  "shortName": "mas",
  "chainId": 220315,
  "networkId": 220315,
  "icon": {
    "url": "ipfs://QmZ9njQhhKkpJKGnoYy6XTuDtk5CYiDFUd8atqWthqUT3Q",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "explorers": [{
    "name": "explorer masnet",
    "url": "https://explorer.masnet.ai",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "mas"
};

var c234666 = {
  "name": "Haymo Testnet",
  "chain": "tHYM",
  "rpc": ["https://haymo-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet1.haymo.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "HAYMO",
    "symbol": "HYM",
    "decimals": 18
  },
  "infoURL": "https://haymoswap.web.app/",
  "shortName": "hym",
  "chainId": 234666,
  "networkId": 234666,
  "testnet": true,
  "slug": "haymo-testnet"
};

var c246529 = {
  "name": "ARTIS sigma1",
  "chain": "ARTIS",
  "rpc": ["https://artis-sigma1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.sigma1.artis.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ARTIS sigma1 Ether",
    "symbol": "ATS",
    "decimals": 18
  },
  "infoURL": "https://artis.eco",
  "shortName": "ats",
  "chainId": 246529,
  "networkId": 246529,
  "slip44": 246529,
  "testnet": false,
  "slug": "artis-sigma1"
};

var c246785 = {
  "name": "ARTIS Testnet tau1",
  "chain": "ARTIS",
  "rpc": ["https://artis-testnet-tau1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.tau1.artis.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ARTIS tau1 Ether",
    "symbol": "tATS",
    "decimals": 18
  },
  "infoURL": "https://artis.network",
  "shortName": "atstau",
  "chainId": 246785,
  "networkId": 246785,
  "testnet": true,
  "slug": "artis-testnet-tau1"
};

var c247253 = {
  "name": "Saakuru Testnet",
  "chain": "Saakuru",
  "icon": {
    "url": "ipfs://QmduEdtFobPpZWSc45MU6RKxZfTEzLux2z8ikHFhT8usqv",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "rpc": ["https://saakuru-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-testnet.saakuru.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OAS",
    "symbol": "OAS",
    "decimals": 18
  },
  "infoURL": "https://saakuru.network",
  "shortName": "saakuru-testnet",
  "chainId": 247253,
  "networkId": 247253,
  "explorers": [{
    "name": "saakuru-explorer-testnet",
    "url": "https://explorer-testnet.saakuru.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "saakuru-testnet"
};

var c256256 = {
  "name": "CMP-Mainnet",
  "chain": "CMP",
  "rpc": ["https://cmp.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.block.caduceus.foundation", "wss://mainnet.block.caduceus.foundation"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Caduceus Token",
    "symbol": "CMP",
    "decimals": 18
  },
  "infoURL": "https://caduceus.foundation/",
  "shortName": "cmp-mainnet",
  "chainId": 256256,
  "networkId": 256256,
  "explorers": [{
    "name": "Mainnet Scan",
    "url": "https://mainnet.scan.caduceus.foundation",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "cmp"
};

var c266256 = {
  "name": "Gear Zero Network Testnet",
  "chain": "GearZero",
  "rpc": ["https://gear-zero-network-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://gzn-test.linksme.info"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Gear Zero Network Native Token",
    "symbol": "GZN",
    "decimals": 18
  },
  "infoURL": "https://token.gearzero.ca/testnet",
  "shortName": "gz-testnet",
  "chainId": 266256,
  "networkId": 266256,
  "slip44": 266256,
  "explorers": [],
  "testnet": true,
  "slug": "gear-zero-network-testnet"
};

var c281121 = {
  "name": "Social Smart Chain Mainnet",
  "chain": "SoChain",
  "rpc": ["https://social-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://socialsmartchain.digitalnext.business"],
  "faucets": [],
  "nativeCurrency": {
    "name": "SoChain",
    "symbol": "$OC",
    "decimals": 18
  },
  "infoURL": "https://digitalnext.business/SocialSmartChain",
  "shortName": "SoChain",
  "chainId": 281121,
  "networkId": 281121,
  "explorers": [],
  "testnet": false,
  "slug": "social-smart-chain"
};

var c314159 = {
  "name": "Filecoin - Calibration testnet",
  "chain": "FIL",
  "icon": {
    "url": "ipfs://QmS9r9XQkMHVomWcSBNDkKkz9n87h9bH9ssabeiKZtANoU",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "rpc": ["https://filecoin-calibration-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.calibration.node.glif.io/rpc/v1"],
  "faucets": ["https://faucet.calibration.fildev.network/"],
  "nativeCurrency": {
    "name": "testnet filecoin",
    "symbol": "tFIL",
    "decimals": 18
  },
  "infoURL": "https://filecoin.io",
  "shortName": "filecoin-calibration",
  "chainId": 314159,
  "networkId": 314159,
  "slip44": 1,
  "explorers": [{
    "name": "Filscan - Calibration",
    "url": "https://calibration.filscan.io",
    "standard": "none"
  }, {
    "name": "Filscout - Calibration",
    "url": "https://calibration.filscout.com/en",
    "standard": "none"
  }, {
    "name": "Filfox - Calibration",
    "url": "https://calibration.filfox.info",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "filecoin-calibration-testnet"
};

var c333777 = {
  "name": "Oone Chain Testnet",
  "chain": "OONE",
  "rpc": ["https://oone-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://blockchain-test.adigium.world"],
  "faucets": ["https://apps-test.adigium.com/faucet"],
  "nativeCurrency": {
    "name": "Oone",
    "symbol": "tOONE",
    "decimals": 18
  },
  "infoURL": "https://oone.world",
  "shortName": "oonetest",
  "chainId": 333777,
  "networkId": 333777,
  "explorers": [{
    "name": "expedition",
    "url": "https://explorer-test.adigium.world",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "oone-chain-testnet"
};

var c333888 = {
  "name": "Polis Testnet",
  "chain": "Sparta",
  "icon": {
    "url": "ipfs://QmagWrtyApex28H2QeXcs3jJ2F7p2K7eESz3cDbHdQ3pjG",
    "width": 1050,
    "height": 1050,
    "format": "png"
  },
  "rpc": ["https://polis-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://sparta-rpc.polis.tech"],
  "faucets": ["https://faucet.polis.tech"],
  "nativeCurrency": {
    "name": "tPolis",
    "symbol": "tPOLIS",
    "decimals": 18
  },
  "infoURL": "https://polis.tech",
  "shortName": "sparta",
  "chainId": 333888,
  "networkId": 333888,
  "testnet": true,
  "slug": "polis-testnet"
};

var c333999 = {
  "name": "Polis Mainnet",
  "chain": "Olympus",
  "icon": {
    "url": "ipfs://QmagWrtyApex28H2QeXcs3jJ2F7p2K7eESz3cDbHdQ3pjG",
    "width": 1050,
    "height": 1050,
    "format": "png"
  },
  "rpc": ["https://polis.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.polis.tech"],
  "faucets": ["https://faucet.polis.tech"],
  "nativeCurrency": {
    "name": "Polis",
    "symbol": "POLIS",
    "decimals": 18
  },
  "infoURL": "https://polis.tech",
  "shortName": "olympus",
  "chainId": 333999,
  "networkId": 333999,
  "testnet": false,
  "slug": "polis"
};

var c373737 = {
  "name": "HAPchain Testnet",
  "chain": "HAPchain",
  "rpc": ["https://hapchain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://jsonrpc-test.hap.land"],
  "faucets": [],
  "nativeCurrency": {
    "name": "HAP",
    "symbol": "HAP",
    "decimals": 18
  },
  "infoURL": "https://hap.land",
  "shortName": "hap-testnet",
  "chainId": 373737,
  "networkId": 373737,
  "icon": {
    "url": "ipfs://QmQ4V9JC25yUrYk2kFJwmKguSsZBQvtGcg6q9zkDV8mkJW",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "explorers": [{
    "name": "HAP EVM Explorer (Blockscout)",
    "url": "https://blockscout-test.hap.land",
    "standard": "none",
    "icon": "hap"
  }],
  "testnet": true,
  "slug": "hapchain-testnet"
};

var c381931 = {
  "name": "Metal C-Chain",
  "chain": "Metal",
  "rpc": ["https://metal-c-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.metalblockchain.org/ext/bc/C/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Metal",
    "symbol": "METAL",
    "decimals": 18
  },
  "infoURL": "https://www.metalblockchain.org/",
  "shortName": "metal",
  "chainId": 381931,
  "networkId": 381931,
  "slip44": 9005,
  "explorers": [{
    "name": "metalscan",
    "url": "https://metalscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "metal-c-chain"
};

var c381932 = {
  "name": "Metal Tahoe C-Chain",
  "chain": "Metal",
  "rpc": ["https://metal-tahoe-c-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://tahoe.metalblockchain.org/ext/bc/C/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Metal",
    "symbol": "METAL",
    "decimals": 18
  },
  "infoURL": "https://www.metalblockchain.org/",
  "shortName": "Tahoe",
  "chainId": 381932,
  "networkId": 381932,
  "slip44": 9005,
  "explorers": [{
    "name": "metalscan",
    "url": "https://tahoe.metalscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "metal-tahoe-c-chain"
};

var c404040 = {
  "name": "Tipboxcoin Mainnet",
  "chain": "TPBX",
  "icon": {
    "url": "ipfs://QmbiaHnR3fVVofZ7Xq2GYZxwHkLEy3Fh5qDtqnqXD6ACAh",
    "width": 192,
    "height": 192,
    "format": "png"
  },
  "rpc": ["https://tipboxcoin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.tipboxcoin.net"],
  "faucets": ["https://faucet.tipboxcoin.net"],
  "nativeCurrency": {
    "name": "Tipboxcoin",
    "symbol": "TPBX",
    "decimals": 18
  },
  "infoURL": "https://tipboxcoin.net",
  "shortName": "TPBXm",
  "chainId": 404040,
  "networkId": 404040,
  "explorers": [{
    "name": "Tipboxcoin",
    "url": "https://tipboxcoin.net",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "tipboxcoin"
};

var c420420 = {
  "name": "Kekchain",
  "chain": "kek",
  "rpc": ["https://kekchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.kekchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "KEK",
    "symbol": "KEK",
    "decimals": 18
  },
  "infoURL": "https://kekchain.com",
  "shortName": "KEK",
  "chainId": 420420,
  "networkId": 103090,
  "icon": {
    "url": "ipfs://QmNzwHAmaaQyuvKudrzGkrTT2GMshcmCmJ9FH8gG2mNJtM",
    "width": 401,
    "height": 401,
    "format": "svg"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://mainnet-explorer.kekchain.com",
    "icon": "kek",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "kekchain"
};

var c420666 = {
  "name": "Kekchain (kektest)",
  "chain": "kek",
  "rpc": ["https://kekchain-kektest.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.kekchain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "tKEK",
    "symbol": "tKEK",
    "decimals": 18
  },
  "infoURL": "https://kekchain.com",
  "shortName": "tKEK",
  "chainId": 420666,
  "networkId": 1,
  "icon": {
    "url": "ipfs://QmNzwHAmaaQyuvKudrzGkrTT2GMshcmCmJ9FH8gG2mNJtM",
    "width": 401,
    "height": 401,
    "format": "svg"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://testnet-explorer.kekchain.com",
    "icon": "kek",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "kekchain-kektest"
};

var c421611 = {
  "name": "Arbitrum Rinkeby",
  "title": "Arbitrum Testnet Rinkeby",
  "chainId": 421611,
  "shortName": "arb-rinkeby",
  "chain": "ETH",
  "networkId": 421611,
  "nativeCurrency": {
    "name": "Arbitrum Rinkeby Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "rpc": ["https://arbitrum-rinkeby.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rinkeby.arbitrum.io/rpc"],
  "faucets": ["http://fauceth.komputing.org?chain=421611&address=${ADDRESS}"],
  "infoURL": "https://arbitrum.io",
  "explorers": [{
    "name": "arbiscan-testnet",
    "url": "https://testnet.arbiscan.io",
    "standard": "EIP3091"
  }, {
    "name": "arbitrum-rinkeby",
    "url": "https://rinkeby-explorer.arbitrum.io",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-4",
    "bridges": [{
      "url": "https://bridge.arbitrum.io"
    }]
  },
  "testnet": true,
  "slug": "arbitrum-rinkeby"
};

var c421613 = {
  "name": "Arbitrum Goerli",
  "title": "Arbitrum Goerli Rollup Testnet",
  "chainId": 421613,
  "shortName": "arb-goerli",
  "chain": "ETH",
  "networkId": 421613,
  "nativeCurrency": {
    "name": "Arbitrum Goerli Ether",
    "symbol": "AGOR",
    "decimals": 18
  },
  "rpc": ["https://arbitrum-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://abritrum-goerli.infura.io/v3/${INFURA_API_KEY}", "https://goerli-rollup.arbitrum.io/rpc/"],
  "faucets": [],
  "infoURL": "https://arbitrum.io/",
  "explorers": [{
    "name": "Arbitrum Goerli Rollup Explorer",
    "url": "https://goerli-rollup-explorer.arbitrum.io",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-5",
    "bridges": [{
      "url": "https://bridge.arbitrum.io/"
    }]
  },
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [512, 256, 128, 64, 32, 16]
  },
  "testnet": true,
  "slug": "arbitrum-goerli"
};

var c424242 = {
  "name": "Fastex Chain testnet",
  "chain": "FTN",
  "title": "Fastex Chain testnet",
  "rpc": ["https://fastex-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.fastexchain.com"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "FTN",
    "symbol": "FTN",
    "decimals": 18
  },
  "infoURL": "https://fastex.com",
  "shortName": "ftn",
  "chainId": 424242,
  "networkId": 424242,
  "explorers": [{
    "name": "blockscout",
    "url": "https://testnet.ftnscan.com",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "fastex-chain-testnet"
};

var c432201 = {
  "name": "Dexalot Subnet Testnet",
  "chain": "DEXALOT",
  "icon": {
    "url": "ipfs://QmfVxdrWjtUKiGzqFDzAxHH2FqwP2aRuZTGcYWdWg519Xy",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "rpc": ["https://dexalot-subnet-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://subnets.avax.network/dexalot/testnet/rpc"],
  "faucets": ["https://faucet.avax.network/?subnet=dexalot"],
  "nativeCurrency": {
    "name": "Dexalot",
    "symbol": "ALOT",
    "decimals": 18
  },
  "infoURL": "https://dexalot.com",
  "shortName": "dexalot-testnet",
  "chainId": 432201,
  "networkId": 432201,
  "explorers": [{
    "name": "Avalanche Subnet Testnet Explorer",
    "url": "https://subnets-test.avax.network/dexalot",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "dexalot-subnet-testnet"
};

var c432204 = {
  "name": "Dexalot Subnet",
  "chain": "DEXALOT",
  "icon": {
    "url": "ipfs://QmfVxdrWjtUKiGzqFDzAxHH2FqwP2aRuZTGcYWdWg519Xy",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "rpc": ["https://dexalot-subnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://subnets.avax.network/dexalot/mainnet/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dexalot",
    "symbol": "ALOT",
    "decimals": 18
  },
  "infoURL": "https://dexalot.com",
  "shortName": "dexalot",
  "chainId": 432204,
  "networkId": 432204,
  "explorers": [{
    "name": "Avalanche Subnet Explorer",
    "url": "https://subnets.avax.network/dexalot",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "dexalot-subnet"
};

var c444900 = {
  "name": "Weelink Testnet",
  "chain": "WLK",
  "rpc": ["https://weelink-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://weelinknode1c.gw002.oneitfarm.com"],
  "faucets": ["https://faucet.weelink.gw002.oneitfarm.com"],
  "nativeCurrency": {
    "name": "Weelink Chain Token",
    "symbol": "tWLK",
    "decimals": 18
  },
  "infoURL": "https://weelink.cloud",
  "shortName": "wlkt",
  "chainId": 444900,
  "networkId": 444900,
  "explorers": [{
    "name": "weelink-testnet",
    "url": "https://weelink.cloud/#/blockView/overview",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "weelink-testnet"
};

var c474142 = {
  "name": "OpenChain Mainnet",
  "chain": "OpenChain",
  "rpc": ["https://openchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://baas-rpc.luniverse.io:18545?lChainId=1641349324562974539"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OpenCoin",
    "symbol": "OPC",
    "decimals": 10
  },
  "infoURL": "https://www.openchain.live",
  "shortName": "oc",
  "chainId": 474142,
  "networkId": 474142,
  "explorers": [{
    "name": "SIDE SCAN",
    "url": "https://sidescan.luniverse.io/1641349324562974539",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "openchain"
};

var c512512 = {
  "name": "CMP-Testnet",
  "chain": "CMP",
  "rpc": ["https://cmp-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://galaxy.block.caduceus.foundation", "wss://galaxy.block.caduceus.foundation"],
  "faucets": ["https://dev.caduceus.foundation/testNetwork"],
  "nativeCurrency": {
    "name": "Caduceus Testnet Token",
    "symbol": "CMP",
    "decimals": 18
  },
  "infoURL": "https://caduceus.foundation/",
  "shortName": "cmp",
  "chainId": 512512,
  "networkId": 512512,
  "explorers": [{
    "name": "Galaxy Scan",
    "url": "https://galaxy.scan.caduceus.foundation",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "cmp-testnet"
};

var c513100 = {
  "name": "ethereum Fair",
  "chainId": 513100,
  "networkId": 513100,
  "shortName": "etf",
  "chain": "ETF",
  "nativeCurrency": {
    "name": "EthereumFair",
    "symbol": "ETHF",
    "decimals": 18
  },
  "rpc": ["https://ethereum-fair.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.etherfair.org"],
  "faucets": [],
  "explorers": [{
    "name": "etherfair",
    "url": "https://explorer.etherfair.org",
    "standard": "EIP3091"
  }],
  "infoURL": "https://etherfair.org",
  "testnet": false,
  "slug": "ethereum-fair"
};

var c534352 = {
  "name": "Scroll",
  "chain": "ETH",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://scroll.io",
  "shortName": "scr",
  "chainId": 534352,
  "networkId": 534352,
  "explorers": [],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": []
  },
  "testnet": false,
  "slug": "scroll"
};

var c534353 = {
  "name": "Scroll Alpha Testnet",
  "chain": "ETH",
  "status": "incubating",
  "rpc": ["https://scroll-alpha-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://alpha-rpc.scroll.io/l2"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://scroll.io",
  "shortName": "scr-alpha",
  "chainId": 534353,
  "networkId": 534353,
  "explorers": [{
    "name": "Scroll Alpha Testnet Block Explorer",
    "url": "https://blockscout.scroll.io",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-5",
    "bridges": []
  },
  "testnet": true,
  "slug": "scroll-alpha-testnet"
};

var c534354 = {
  "name": "Scroll Pre-Alpha Testnet",
  "chain": "ETH",
  "rpc": ["https://scroll-pre-alpha-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://prealpha-rpc.scroll.io/l2"],
  "faucets": ["https://prealpha.scroll.io/faucet"],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "TSETH",
    "decimals": 18
  },
  "infoURL": "https://scroll.io",
  "shortName": "scr-prealpha",
  "chainId": 534354,
  "networkId": 534354,
  "explorers": [{
    "name": "Scroll L2 Block Explorer",
    "url": "https://l2scan.scroll.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "scroll-pre-alpha-testnet"
};

var c535037 = {
  "name": "BeanEco SmartChain",
  "title": "BESC Mainnet",
  "chain": "BESC",
  "rpc": ["https://beaneco-smartchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.bescscan.io"],
  "faucets": ["faucet.bescscan.ion"],
  "nativeCurrency": {
    "name": "BeanEco SmartChain",
    "symbol": "BESC",
    "decimals": 18
  },
  "infoURL": "besceco.finance",
  "shortName": "BESC",
  "chainId": 535037,
  "networkId": 535037,
  "explorers": [{
    "name": "bescscan",
    "url": "https://Bescscan.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "beaneco-smartchain"
};

var c641230 = {
  "name": "Bear Network Chain Mainnet",
  "chain": "BRNKC",
  "icon": {
    "url": "ipfs://QmQqhH28QpUrreoRw5Gj8YShzdHxxVGMjfVrx3TqJNLSLv",
    "width": 1067,
    "height": 1067,
    "format": "png"
  },
  "rpc": ["https://bear-network-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://brnkc-mainnet.bearnetwork.net", "https://brnkc-mainnet1.bearnetwork.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bear Network Chain Native Token",
    "symbol": "BRNKC",
    "decimals": 18
  },
  "infoURL": "https://bearnetwork.net",
  "shortName": "BRNKC",
  "chainId": 641230,
  "networkId": 641230,
  "explorers": [{
    "name": "brnkscan",
    "url": "https://brnkscan.bearnetwork.net",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "bear-network-chain"
};

var c666666 = {
  "name": "Vision - Vpioneer Test Chain",
  "chain": "Vision-Vpioneer",
  "rpc": ["https://vision-vpioneer-test-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://vpioneer.infragrid.v.network/ethereum/compatible"],
  "faucets": ["https://vpioneerfaucet.visionscan.org"],
  "nativeCurrency": {
    "name": "VS",
    "symbol": "VS",
    "decimals": 18
  },
  "infoURL": "https://visionscan.org",
  "shortName": "vpioneer",
  "chainId": 666666,
  "networkId": 666666,
  "slip44": 60,
  "testnet": true,
  "slug": "vision-vpioneer-test-chain"
};

var c751230 = {
  "name": "Bear Network Chain Testnet",
  "chain": "BRNKCTEST",
  "icon": {
    "url": "ipfs://QmQqhH28QpUrreoRw5Gj8YShzdHxxVGMjfVrx3TqJNLSLv",
    "width": 1067,
    "height": 1067,
    "format": "png"
  },
  "rpc": ["https://bear-network-chain-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://brnkc-test.bearnetwork.net"],
  "faucets": ["https://faucet.bearnetwork.net"],
  "nativeCurrency": {
    "name": "Bear Network Chain Testnet Token",
    "symbol": "tBRNKC",
    "decimals": 18
  },
  "infoURL": "https://bearnetwork.net",
  "shortName": "BRNKCTEST",
  "chainId": 751230,
  "networkId": 751230,
  "explorers": [{
    "name": "brnktestscan",
    "url": "https://brnktest-scan.bearnetwork.net",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "bear-network-chain-testnet"
};

var c800001 = {
  "name": "OctaSpace",
  "chain": "OCTA",
  "rpc": ["https://octaspace.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.octa.space", "wss://rpc.octa.space"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OctaSpace",
    "symbol": "OCTA",
    "decimals": 18
  },
  "infoURL": "https://octa.space",
  "shortName": "octa",
  "chainId": 800001,
  "networkId": 800001,
  "icon": {
    "url": "ipfs://QmVhezQHkqSZ5Tvtsw18giA1yBjV1URSsBQ7HenUh6p6oC",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.octa.space",
    "icon": "blockscout",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "octaspace"
};

var c846000 = {
  "name": "4GoodNetwork",
  "chain": "4GN",
  "rpc": ["https://4goodnetwork.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://chain.deptofgood.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "APTA",
    "symbol": "APTA",
    "decimals": 18
  },
  "infoURL": "https://bloqs4good.com",
  "shortName": "bloqs4good",
  "chainId": 846000,
  "networkId": 846000,
  "testnet": false,
  "slug": "4goodnetwork"
};

var c888888 = {
  "name": "Vision - Mainnet",
  "chain": "Vision",
  "rpc": ["https://vision.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://infragrid.v.network/ethereum/compatible"],
  "faucets": [],
  "nativeCurrency": {
    "name": "VS",
    "symbol": "VS",
    "decimals": 18
  },
  "infoURL": "https://www.v.network",
  "explorers": [{
    "name": "Visionscan",
    "url": "https://www.visionscan.org",
    "standard": "EIP3091"
  }],
  "shortName": "vision",
  "chainId": 888888,
  "networkId": 888888,
  "slip44": 60,
  "testnet": false,
  "slug": "vision"
};

var c900000 = {
  "name": "Posichain Mainnet Shard 0",
  "chain": "PSC",
  "rpc": ["https://posichain-shard-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.posichain.org", "https://api.s0.posichain.org"],
  "faucets": ["https://faucet.posichain.org/"],
  "nativeCurrency": {
    "name": "Posichain Native Token",
    "symbol": "POSI",
    "decimals": 18
  },
  "infoURL": "https://posichain.org",
  "shortName": "psc-s0",
  "chainId": 900000,
  "networkId": 900000,
  "explorers": [{
    "name": "Posichain Explorer",
    "url": "https://explorer.posichain.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "posichain-shard-0"
};

var c910000 = {
  "name": "Posichain Testnet Shard 0",
  "chain": "PSC",
  "rpc": ["https://posichain-testnet-shard-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s0.t.posichain.org"],
  "faucets": ["https://faucet.posichain.org/"],
  "nativeCurrency": {
    "name": "Posichain Native Token",
    "symbol": "POSI",
    "decimals": 18
  },
  "infoURL": "https://posichain.org",
  "shortName": "psc-t-s0",
  "chainId": 910000,
  "networkId": 910000,
  "explorers": [{
    "name": "Posichain Explorer Testnet",
    "url": "https://explorer-testnet.posichain.org",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "posichain-testnet-shard-0"
};

var c920000 = {
  "name": "Posichain Devnet Shard 0",
  "chain": "PSC",
  "rpc": ["https://posichain-devnet-shard-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s0.d.posichain.org"],
  "faucets": ["https://faucet.posichain.org/"],
  "nativeCurrency": {
    "name": "Posichain Native Token",
    "symbol": "POSI",
    "decimals": 18
  },
  "infoURL": "https://posichain.org",
  "shortName": "psc-d-s0",
  "chainId": 920000,
  "networkId": 920000,
  "explorers": [{
    "name": "Posichain Explorer Devnet",
    "url": "https://explorer-devnet.posichain.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "posichain-devnet-shard-0"
};

var c920001 = {
  "name": "Posichain Devnet Shard 1",
  "chain": "PSC",
  "rpc": ["https://posichain-devnet-shard-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s1.d.posichain.org"],
  "faucets": ["https://faucet.posichain.org/"],
  "nativeCurrency": {
    "name": "Posichain Native Token",
    "symbol": "POSI",
    "decimals": 18
  },
  "infoURL": "https://posichain.org",
  "shortName": "psc-d-s1",
  "chainId": 920001,
  "networkId": 920001,
  "explorers": [{
    "name": "Posichain Explorer Devnet",
    "url": "https://explorer-devnet.posichain.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "posichain-devnet-shard-1"
};

var c923018 = {
  "name": "FNCY Testnet",
  "chain": "FNCY",
  "rpc": ["https://fncy-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://fncy-testnet-seed.fncy.world"],
  "faucets": ["https://faucet-testnet.fncy.world"],
  "nativeCurrency": {
    "name": "FNCY",
    "symbol": "FNCY",
    "decimals": 18
  },
  "infoURL": "https://fncyscan-testnet.fncy.world",
  "shortName": "tFNCY",
  "chainId": 923018,
  "networkId": 923018,
  "icon": {
    "url": "ipfs://QmfXCh6UnaEHn3Evz7RFJ3p2ggJBRm9hunDHegeoquGuhD",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "explorers": [{
    "name": "fncy scan testnet",
    "url": "https://fncyscan-testnet.fncy.world",
    "icon": "fncy",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "fncy-testnet"
};

var c955305 = {
  "name": "Eluvio Content Fabric",
  "chain": "Eluvio",
  "rpc": ["https://eluvio-content-fabric.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://host-76-74-28-226.contentfabric.io/eth/", "https://host-76-74-28-232.contentfabric.io/eth/", "https://host-76-74-29-2.contentfabric.io/eth/", "https://host-76-74-29-8.contentfabric.io/eth/", "https://host-76-74-29-34.contentfabric.io/eth/", "https://host-76-74-29-35.contentfabric.io/eth/", "https://host-154-14-211-98.contentfabric.io/eth/", "https://host-154-14-192-66.contentfabric.io/eth/", "https://host-60-240-133-202.contentfabric.io/eth/", "https://host-64-235-250-98.contentfabric.io/eth/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ELV",
    "symbol": "ELV",
    "decimals": 18
  },
  "infoURL": "https://eluv.io",
  "shortName": "elv",
  "chainId": 955305,
  "networkId": 955305,
  "slip44": 1011,
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.eluv.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "eluvio-content-fabric"
};

var c1313114 = {
  "name": "Etho Protocol",
  "chain": "ETHO",
  "rpc": ["https://etho-protocol.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.ethoprotocol.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Etho Protocol",
    "symbol": "ETHO",
    "decimals": 18
  },
  "infoURL": "https://ethoprotocol.com",
  "shortName": "etho",
  "chainId": 1313114,
  "networkId": 1313114,
  "slip44": 1313114,
  "explorers": [{
    "name": "blockscout",
    "url": "https://explorer.ethoprotocol.com",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "etho-protocol"
};

var c1313500 = {
  "name": "Xerom",
  "chain": "XERO",
  "rpc": ["https://xerom.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.xerom.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Xerom Ether",
    "symbol": "XERO",
    "decimals": 18
  },
  "infoURL": "https://xerom.org",
  "shortName": "xero",
  "chainId": 1313500,
  "networkId": 1313500,
  "testnet": false,
  "slug": "xerom"
};

var c1337702 = {
  "name": "Kintsugi",
  "title": "Kintsugi merge testnet",
  "chain": "ETH",
  "rpc": ["https://kintsugi.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.kintsugi.themerge.dev"],
  "faucets": ["http://fauceth.komputing.org?chain=1337702&address=${ADDRESS}", "https://faucet.kintsugi.themerge.dev"],
  "nativeCurrency": {
    "name": "kintsugi Ethere",
    "symbol": "kiETH",
    "decimals": 18
  },
  "infoURL": "https://kintsugi.themerge.dev/",
  "shortName": "kintsugi",
  "chainId": 1337702,
  "networkId": 1337702,
  "explorers": [{
    "name": "kintsugi explorer",
    "url": "https://explorer.kintsugi.themerge.dev",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "kintsugi"
};

var c1337802 = {
  "name": "Kiln",
  "chain": "ETH",
  "rpc": ["https://kiln.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.kiln.themerge.dev"],
  "faucets": ["https://faucet.kiln.themerge.dev", "https://kiln-faucet.pk910.de", "https://kilnfaucet.com"],
  "nativeCurrency": {
    "name": "Testnet ETH",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://kiln.themerge.dev/",
  "shortName": "kiln",
  "chainId": 1337802,
  "networkId": 1337802,
  "icon": {
    "url": "ipfs://QmdwQDr6vmBtXmK2TmknkEuZNoaDqTasFdZdu3DRw8b2wt",
    "width": 1000,
    "height": 1628,
    "format": "png"
  },
  "explorers": [{
    "name": "Kiln Explorer",
    "url": "https://explorer.kiln.themerge.dev",
    "icon": "ethereum",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "kiln"
};

var c1337803 = {
  "name": "Zhejiang",
  "chain": "ETH",
  "rpc": ["https://zhejiang.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.zhejiang.ethpandaops.io"],
  "faucets": ["https://faucet.zhejiang.ethpandaops.io", "https://zhejiang-faucet.pk910.de"],
  "nativeCurrency": {
    "name": "Testnet ETH",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://zhejiang.ethpandaops.io",
  "shortName": "zhejiang",
  "chainId": 1337803,
  "networkId": 1337803,
  "icon": {
    "url": "ipfs://QmdwQDr6vmBtXmK2TmknkEuZNoaDqTasFdZdu3DRw8b2wt",
    "width": 1000,
    "height": 1628,
    "format": "png"
  },
  "explorers": [{
    "name": "Zhejiang Explorer",
    "url": "https://zhejiang.beaconcha.in",
    "icon": "ethereum",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "zhejiang"
};

var c2099156 = {
  "name": "Plian Mainnet Main",
  "chain": "Plian",
  "rpc": ["https://plian-main.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.plian.io/pchain"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Plian Token",
    "symbol": "PI",
    "decimals": 18
  },
  "infoURL": "https://plian.org/",
  "shortName": "plian-mainnet",
  "chainId": 2099156,
  "networkId": 2099156,
  "explorers": [{
    "name": "piscan",
    "url": "https://piscan.plian.org/pchain",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "plian-main"
};

var c2206132 = {
  "name": "PlatON Dev Testnet2",
  "chain": "PlatON",
  "rpc": ["https://platon-dev-testnet2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet2openapi.platon.network/rpc", "wss://devnet2openapi.platon.network/ws"],
  "faucets": ["https://devnet2faucet.platon.network/faucet"],
  "nativeCurrency": {
    "name": "LAT",
    "symbol": "lat",
    "decimals": 18
  },
  "infoURL": "https://www.platon.network",
  "shortName": "platondev2",
  "chainId": 2206132,
  "networkId": 1,
  "icon": {
    "url": "ipfs://QmT7PSXBiVBma6E15hNkivmstqLu3JSnG1jXN5pTmcCGRC",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "explorers": [{
    "name": "PlatON explorer",
    "url": "https://devnet2scan.platon.network",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "platon-dev-testnet2"
};

var c3141592 = {
  "name": "Filecoin - Butterfly testnet",
  "chain": "FIL",
  "status": "incubating",
  "rpc": [],
  "faucets": ["https://faucet.butterfly.fildev.network"],
  "nativeCurrency": {
    "name": "testnet filecoin",
    "symbol": "tFIL",
    "decimals": 18
  },
  "infoURL": "https://filecoin.io",
  "shortName": "filecoin-butterfly",
  "icon": {
    "url": "ipfs://QmS9r9XQkMHVomWcSBNDkKkz9n87h9bH9ssabeiKZtANoU",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "chainId": 3141592,
  "networkId": 3141592,
  "slip44": 1,
  "explorers": [],
  "testnet": true,
  "slug": "filecoin-butterfly-testnet"
};

var c5555555 = {
  "name": "Imversed Mainnet",
  "chain": "Imversed",
  "rpc": ["https://imversed.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://jsonrpc.imversed.network", "https://ws-jsonrpc.imversed.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Imversed Token",
    "symbol": "IMV",
    "decimals": 18
  },
  "infoURL": "https://imversed.com",
  "shortName": "imversed",
  "chainId": 5555555,
  "networkId": 5555555,
  "icon": {
    "url": "ipfs://QmYwvmJZ1bgTdiZUKXk4SifTpTj286CkZjMCshUyJuBFH1",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "explorers": [{
    "name": "Imversed EVM explorer (Blockscout)",
    "url": "https://txe.imversed.network",
    "icon": "imversed",
    "standard": "EIP3091"
  }, {
    "name": "Imversed Cosmos Explorer (Big Dipper)",
    "url": "https://tex-c.imversed.com",
    "icon": "imversed",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "imversed"
};

var c5555558 = {
  "name": "Imversed Testnet",
  "chain": "Imversed",
  "rpc": ["https://imversed-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://jsonrpc-test.imversed.network", "https://ws-jsonrpc-test.imversed.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Imversed Token",
    "symbol": "IMV",
    "decimals": 18
  },
  "infoURL": "https://imversed.com",
  "shortName": "imversed-testnet",
  "chainId": 5555558,
  "networkId": 5555558,
  "icon": {
    "url": "ipfs://QmYwvmJZ1bgTdiZUKXk4SifTpTj286CkZjMCshUyJuBFH1",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "explorers": [{
    "name": "Imversed EVM Explorer (Blockscout)",
    "url": "https://txe-test.imversed.network",
    "icon": "imversed",
    "standard": "EIP3091"
  }, {
    "name": "Imversed Cosmos Explorer (Big Dipper)",
    "url": "https://tex-t.imversed.com",
    "icon": "imversed",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "imversed-testnet"
};

var c7225878 = {
  "name": "Saakuru Mainnet",
  "chain": "Saakuru",
  "icon": {
    "url": "ipfs://QmduEdtFobPpZWSc45MU6RKxZfTEzLux2z8ikHFhT8usqv",
    "width": 1024,
    "height": 1024,
    "format": "png"
  },
  "rpc": ["https://saakuru.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.saakuru.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OAS",
    "symbol": "OAS",
    "decimals": 18
  },
  "infoURL": "https://saakuru.network",
  "shortName": "saakuru",
  "chainId": 7225878,
  "networkId": 7225878,
  "explorers": [{
    "name": "saakuru-explorer",
    "url": "https://explorer.saakuru.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "saakuru"
};

var c7355310 = {
  "name": "OpenVessel",
  "chain": "VSL",
  "icon": {
    "url": "ipfs://QmeknNzGCZXQK7egwfwyxQan7Lw8bLnqYsyoEgEbDNCzJX",
    "width": 600,
    "height": 529,
    "format": "png"
  },
  "rpc": ["https://openvessel.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-external.openvessel.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Vessel ETH",
    "symbol": "VETH",
    "decimals": 18
  },
  "infoURL": "https://www.openvessel.io",
  "shortName": "vsl",
  "chainId": 7355310,
  "networkId": 7355310,
  "explorers": [{
    "name": "openvessel-mainnet",
    "url": "https://mainnet-explorer.openvessel.io",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "openvessel"
};

var c7668378 = {
  "name": "QL1 Testnet",
  "chain": "QOM",
  "status": "incubating",
  "rpc": ["https://ql1-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.qom.one"],
  "faucets": ["https://faucet.qom.one"],
  "nativeCurrency": {
    "name": "Shiba Predator",
    "symbol": "QOM",
    "decimals": 18
  },
  "infoURL": "https://qom.one",
  "shortName": "tqom",
  "chainId": 7668378,
  "networkId": 7668378,
  "icon": {
    "url": "ipfs://QmRc1kJ7AgcDL1BSoMYudatWHTrz27K6WNTwGifQb5V17D",
    "width": 518,
    "height": 518,
    "format": "png"
  },
  "explorers": [{
    "name": "QL1 Testnet Explorer",
    "url": "https://testnet.qom.one",
    "icon": "qom",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "ql1-testnet"
};

var c7762959 = {
  "name": "Musicoin",
  "chain": "MUSIC",
  "rpc": ["https://musicoin.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mewapi.musicoin.tw"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Musicoin",
    "symbol": "MUSIC",
    "decimals": 18
  },
  "infoURL": "https://musicoin.tw",
  "shortName": "music",
  "chainId": 7762959,
  "networkId": 7762959,
  "slip44": 184,
  "testnet": false,
  "slug": "musicoin"
};

var c8007736 = {
  "name": "Plian Mainnet Subchain 1",
  "chain": "Plian",
  "rpc": ["https://plian-subchain-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.plian.io/child_0"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Plian Token",
    "symbol": "PI",
    "decimals": 18
  },
  "infoURL": "https://plian.org",
  "shortName": "plian-mainnet-l2",
  "chainId": 8007736,
  "networkId": 8007736,
  "explorers": [{
    "name": "piscan",
    "url": "https://piscan.plian.org/child_0",
    "standard": "EIP3091"
  }],
  "parent": {
    "chain": "eip155-2099156",
    "type": "L2"
  },
  "testnet": false,
  "slug": "plian-subchain-1"
};

var c8794598 = {
  "name": "HAPchain",
  "chain": "HAPchain",
  "rpc": ["https://hapchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://jsonrpc.hap.land"],
  "faucets": [],
  "nativeCurrency": {
    "name": "HAP",
    "symbol": "HAP",
    "decimals": 18
  },
  "infoURL": "https://hap.land",
  "shortName": "hap",
  "chainId": 8794598,
  "networkId": 8794598,
  "icon": {
    "url": "ipfs://QmQ4V9JC25yUrYk2kFJwmKguSsZBQvtGcg6q9zkDV8mkJW",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "explorers": [{
    "name": "HAP EVM Explorer (Blockscout)",
    "url": "https://blockscout.hap.land",
    "standard": "none",
    "icon": "hap"
  }],
  "testnet": false,
  "slug": "hapchain"
};

var c10067275 = {
  "name": "Plian Testnet Subchain 1",
  "chain": "Plian",
  "rpc": ["https://plian-testnet-subchain-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.plian.io/child_test"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Plian Token",
    "symbol": "TPI",
    "decimals": 18
  },
  "infoURL": "https://plian.org/",
  "shortName": "plian-testnet-l2",
  "chainId": 10067275,
  "networkId": 10067275,
  "explorers": [{
    "name": "piscan",
    "url": "https://testnet.plian.org/child_test",
    "standard": "EIP3091"
  }],
  "parent": {
    "chain": "eip155-16658437",
    "type": "L2"
  },
  "testnet": true,
  "slug": "plian-testnet-subchain-1"
};

var c10101010 = {
  "name": "Soverun Mainnet",
  "chain": "SVRN",
  "icon": {
    "url": "ipfs://QmTYazUzgY9Nn2mCjWwFUSLy3dG6i2PvALpwCNQvx1zXyi",
    "width": 1154,
    "height": 1154,
    "format": "png"
  },
  "rpc": ["https://soverun.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.soverun.com"],
  "faucets": ["https://faucet.soverun.com"],
  "nativeCurrency": {
    "name": "Soverun",
    "symbol": "SVRN",
    "decimals": 18
  },
  "infoURL": "https://soverun.com",
  "shortName": "SVRNm",
  "chainId": 10101010,
  "networkId": 10101010,
  "explorers": [{
    "name": "Soverun",
    "url": "https://explorer.soverun.com",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "soverun"
};

var c11155111 = {
  "name": "Sepolia",
  "title": "Ethereum Testnet Sepolia",
  "chain": "ETH",
  "rpc": ["https://sepolia.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.sepolia.org", "https://rpc2.sepolia.org", "https://rpc-sepolia.rockx.com"],
  "faucets": ["http://fauceth.komputing.org?chain=11155111&address=${ADDRESS}"],
  "nativeCurrency": {
    "name": "Sepolia Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://sepolia.otterscan.io",
  "shortName": "sep",
  "chainId": 11155111,
  "networkId": 11155111,
  "explorers": [{
    "name": "etherscan-sepolia",
    "url": "https://sepolia.etherscan.io",
    "standard": "EIP3091"
  }, {
    "name": "otterscan-sepolia",
    "url": "https://sepolia.otterscan.io",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "sepolia"
};

var c13371337 = {
  "name": "PepChain Churchill",
  "chain": "PEP",
  "rpc": ["https://pepchain-churchill.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://churchill-rpc.pepchain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "PepChain Churchill Ether",
    "symbol": "TPEP",
    "decimals": 18
  },
  "infoURL": "https://pepchain.io",
  "shortName": "tpep",
  "chainId": 13371337,
  "networkId": 13371337,
  "testnet": false,
  "slug": "pepchain-churchill"
};

var c14288640 = {
  "name": "Anduschain Mainnet",
  "chain": "anduschain",
  "rpc": ["https://anduschain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.anduschain.io/rpc", "wss://rpc.anduschain.io/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "DAON",
    "symbol": "DEB",
    "decimals": 18
  },
  "infoURL": "https://anduschain.io/",
  "shortName": "anduschain-mainnet",
  "chainId": 14288640,
  "networkId": 14288640,
  "explorers": [{
    "name": "anduschain explorer",
    "url": "https://explorer.anduschain.io",
    "icon": "daon",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "anduschain"
};

var c16658437 = {
  "name": "Plian Testnet Main",
  "chain": "Plian",
  "rpc": ["https://plian-testnet-main.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.plian.io/testnet"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Plian Testnet Token",
    "symbol": "TPI",
    "decimals": 18
  },
  "infoURL": "https://plian.org",
  "shortName": "plian-testnet",
  "chainId": 16658437,
  "networkId": 16658437,
  "explorers": [{
    "name": "piscan",
    "url": "https://testnet.plian.org/testnet",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "plian-testnet-main"
};

var c18289463 = {
  "name": "IOLite",
  "chain": "ILT",
  "rpc": ["https://iolite.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://net.iolite.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "IOLite Ether",
    "symbol": "ILT",
    "decimals": 18
  },
  "infoURL": "https://iolite.io",
  "shortName": "ilt",
  "chainId": 18289463,
  "networkId": 18289463,
  "testnet": false,
  "slug": "iolite"
};

var c20180430 = {
  "name": "SmartMesh Mainnet",
  "chain": "Spectrum",
  "rpc": ["https://smartmesh.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://jsonapi1.smartmesh.cn"],
  "faucets": [],
  "nativeCurrency": {
    "name": "SmartMesh Native Token",
    "symbol": "SMT",
    "decimals": 18
  },
  "infoURL": "https://smartmesh.io",
  "shortName": "spectrum",
  "chainId": 20180430,
  "networkId": 1,
  "explorers": [{
    "name": "spectrum",
    "url": "https://spectrum.pub",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "smartmesh"
};

var c20181205 = {
  "name": "quarkblockchain",
  "chain": "QKI",
  "rpc": ["https://quarkblockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://hz.rpc.qkiscan.cn", "https://jp.rpc.qkiscan.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "quarkblockchain Native Token",
    "symbol": "QKI",
    "decimals": 18
  },
  "infoURL": "https://quarkblockchain.org/",
  "shortName": "qki",
  "chainId": 20181205,
  "networkId": 20181205,
  "testnet": false,
  "slug": "quarkblockchain"
};

var c22052002 = {
  "name": "Excelon Mainnet",
  "chain": "XLON",
  "icon": {
    "url": "ipfs://QmTV45o4jTe6ayscF1XWh1WXk5DPck4QohR5kQocSWjvQP",
    "width": 300,
    "height": 300,
    "format": "png"
  },
  "rpc": ["https://excelon.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://edgewallet1.xlon.org/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Excelon",
    "symbol": "xlon",
    "decimals": 18
  },
  "infoURL": "https://xlon.org",
  "shortName": "xlon",
  "chainId": 22052002,
  "networkId": 22052002,
  "explorers": [{
    "name": "Excelon explorer",
    "url": "https://explorer.excelon.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "excelon"
};

var c27082017 = {
  "name": "Excoincial Chain Volta-Testnet",
  "chain": "TEXL",
  "icon": {
    "url": "ipfs://QmeooM7QicT1YbgY93XPd5p7JsCjYhN3qjWt68X57g6bVC",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "rpc": ["https://excoincial-chain-volta-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet-rpc.exlscan.com"],
  "faucets": ["https://faucet.exlscan.com"],
  "nativeCurrency": {
    "name": "TExlcoin",
    "symbol": "TEXL",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "exlvolta",
  "chainId": 27082017,
  "networkId": 27082017,
  "explorers": [{
    "name": "exlscan",
    "url": "https://testnet-explorer.exlscan.com",
    "icon": "exl",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "excoincial-chain-volta-testnet"
};

var c27082022 = {
  "name": "Excoincial Chain Mainnet",
  "chain": "EXL",
  "icon": {
    "url": "ipfs://QmeooM7QicT1YbgY93XPd5p7JsCjYhN3qjWt68X57g6bVC",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "rpc": ["https://excoincial-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.exlscan.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Exlcoin",
    "symbol": "EXL",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "exl",
  "chainId": 27082022,
  "networkId": 27082022,
  "explorers": [{
    "name": "exlscan",
    "url": "https://exlscan.com",
    "icon": "exl",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "excoincial-chain"
};

var c28945486 = {
  "name": "Auxilium Network Mainnet",
  "chain": "AUX",
  "rpc": ["https://auxilium-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.auxilium.global"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Auxilium coin",
    "symbol": "AUX",
    "decimals": 18
  },
  "infoURL": "https://auxilium.global",
  "shortName": "auxi",
  "chainId": 28945486,
  "networkId": 28945486,
  "slip44": 344,
  "testnet": false,
  "slug": "auxilium-network"
};

var c29032022 = {
  "name": "Flachain Mainnet",
  "chain": "FLX",
  "icon": {
    "url": "ipfs://bafybeiadlvc4pfiykehyt2z67nvgt5w4vlov27olu5obvmryv4xzua4tae",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "rpc": ["https://flachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://flachain.flaexchange.top/"],
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "faucets": [],
  "nativeCurrency": {
    "name": "Flacoin",
    "symbol": "FLA",
    "decimals": 18
  },
  "infoURL": "https://www.flaexchange.top",
  "shortName": "fla",
  "chainId": 29032022,
  "networkId": 29032022,
  "explorers": [{
    "name": "FLXExplorer",
    "url": "https://explorer.flaexchange.top",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "flachain"
};

var c31415926 = {
  "name": "Filecoin - Local testnet",
  "chain": "FIL",
  "status": "incubating",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "testnet filecoin",
    "symbol": "tFIL",
    "decimals": 18
  },
  "infoURL": "https://filecoin.io",
  "shortName": "filecoin-local",
  "icon": {
    "url": "ipfs://QmS9r9XQkMHVomWcSBNDkKkz9n87h9bH9ssabeiKZtANoU",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "chainId": 31415926,
  "networkId": 31415926,
  "slip44": 1,
  "explorers": [],
  "testnet": true,
  "slug": "filecoin-local-testnet"
};

var c35855456 = {
  "name": "Joys Digital Mainnet",
  "chain": "JOYS",
  "rpc": ["https://joys-digital.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://node.joys.digital"],
  "faucets": [],
  "nativeCurrency": {
    "name": "JOYS",
    "symbol": "JOYS",
    "decimals": 18
  },
  "infoURL": "https://joys.digital",
  "shortName": "JOYS",
  "chainId": 35855456,
  "networkId": 35855456,
  "testnet": false,
  "slug": "joys-digital"
};

var c43214913 = {
  "name": "maistestsubnet",
  "chain": "MAI",
  "rpc": ["https://maistestsubnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://174.138.9.169:9650/ext/bc/VUKSzFZKckx4PoZF9gX5QAqLPxbLzvu1vcssPG5QuodaJtdHT/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "maistestsubnet",
    "symbol": "MAI",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "mais",
  "chainId": 43214913,
  "networkId": 43214913,
  "explorers": [{
    "name": "maistesntet",
    "url": "http://174.138.9.169:3006/?network=maistesntet",
    "standard": "none"
  }],
  "testnet": true,
  "slug": "maistestsubnet"
};

var c61717561 = {
  "name": "Aquachain",
  "chain": "AQUA",
  "rpc": ["https://aquachain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://c.onical.org", "https://tx.aquacha.in/api"],
  "faucets": ["https://aquacha.in/faucet"],
  "nativeCurrency": {
    "name": "Aquachain Ether",
    "symbol": "AQUA",
    "decimals": 18
  },
  "infoURL": "https://aquachain.github.io",
  "shortName": "aqua",
  "chainId": 61717561,
  "networkId": 61717561,
  "slip44": 61717561,
  "testnet": false,
  "slug": "aquachain"
};

var c65010000 = {
  "name": "Autonity Bakerloo (Thames) Testnet",
  "chain": "AUT",
  "rpc": ["https://autonity-bakerloo-thames-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc1.bakerloo.autonity.org/", "wss://rpc1.bakerloo.autonity.org/ws/"],
  "faucets": ["https://faucet.autonity.org/"],
  "nativeCurrency": {
    "name": "Bakerloo Auton",
    "symbol": "ATN",
    "decimals": 18
  },
  "infoURL": "https://autonity.org/",
  "shortName": "bakerloo-0",
  "chainId": 65010000,
  "networkId": 65010000,
  "icon": {
    "url": "ipfs://Qme5nxFZZoNNpiT8u9WwcBot4HyLTg2jxMxRnsbc5voQwB",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "explorers": [{
    "name": "autonity-blockscout",
    "url": "https://bakerloo.autonity.org",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "autonity-bakerloo-thames-testnet"
};

var c65100000 = {
  "name": "Autonity Piccadilly (Thames) Testnet",
  "chain": "AUT",
  "rpc": ["https://autonity-piccadilly-thames-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc1.piccadilly.autonity.org/", "wss://rpc1.piccadilly.autonity.org/ws/"],
  "faucets": ["https://faucet.autonity.org/"],
  "nativeCurrency": {
    "name": "Piccadilly Auton",
    "symbol": "ATN",
    "decimals": 18
  },
  "infoURL": "https://autonity.org/",
  "shortName": "piccadilly-0",
  "chainId": 65100000,
  "networkId": 65100000,
  "icon": {
    "url": "ipfs://Qme5nxFZZoNNpiT8u9WwcBot4HyLTg2jxMxRnsbc5voQwB",
    "width": 1000,
    "height": 1000,
    "format": "png"
  },
  "explorers": [{
    "name": "autonity-blockscout",
    "url": "https://piccadilly.autonity.org",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "autonity-piccadilly-thames-testnet"
};

var c88888888 = {
  "name": "T.E.A.M Blockchain",
  "chain": "TEAM",
  "rpc": ["https://t-e-a-m-blockchain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.teamblockchain.team"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TEAM",
    "symbol": "$TEAM",
    "decimals": 8
  },
  "features": [{
    "name": "EIP155"
  }, {
    "name": "EIP1559"
  }],
  "infoURL": "https://teamblockchain.team",
  "shortName": "team",
  "chainId": 88888888,
  "networkId": 88888888,
  "explorers": [{
    "icon": "team",
    "name": "teamscan",
    "url": "https://teamblockchain.team",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "t-e-a-m-blockchain"
};

var c99415706 = {
  "name": "Joys Digital TestNet",
  "chain": "TOYS",
  "rpc": ["https://joys-digital-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://toys.joys.cash/"],
  "faucets": ["https://faucet.joys.digital/"],
  "nativeCurrency": {
    "name": "TOYS",
    "symbol": "TOYS",
    "decimals": 18
  },
  "infoURL": "https://joys.digital",
  "shortName": "TOYS",
  "chainId": 99415706,
  "networkId": 99415706,
  "testnet": true,
  "slug": "joys-digital-testnet"
};

var c192837465 = {
  "name": "Gather Mainnet Network",
  "chain": "GTH",
  "rpc": ["https://gather-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.gather.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Gather",
    "symbol": "GTH",
    "decimals": 18
  },
  "infoURL": "https://gather.network",
  "shortName": "GTH",
  "chainId": 192837465,
  "networkId": 192837465,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://explorer.gather.network",
    "standard": "none"
  }],
  "icon": {
    "url": "ipfs://Qmc9AJGg9aNhoH56n3deaZeUc8Ty1jDYJsW6Lu6hgSZH4S",
    "height": 512,
    "width": 512,
    "format": "png"
  },
  "testnet": false,
  "slug": "gather-network"
};

var c245022926 = {
  "name": "Neon EVM DevNet",
  "chain": "Solana",
  "rpc": ["https://neon-evm-devnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet.neonevm.org"],
  "faucets": ["https://neonfaucet.org"],
  "icon": {
    "url": "ipfs://Qmcxevb3v8PEvnvfYgcG3bCBuPhe5YAdsHeaufDChSSR3Q",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "nativeCurrency": {
    "name": "Neon",
    "symbol": "NEON",
    "decimals": 18
  },
  "infoURL": "https://neon-labs.org",
  "shortName": "neonevm-devnet",
  "chainId": 245022926,
  "networkId": 245022926,
  "explorers": [{
    "name": "native",
    "url": "https://devnet.explorer.neon-labs.org",
    "standard": "EIP3091"
  }, {
    "name": "neonscan",
    "url": "https://devnet.neonscan.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "neon-evm-devnet"
};

var c245022934 = {
  "name": "Neon EVM MainNet",
  "chain": "Solana",
  "rpc": ["https://neon-evm.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.neonevm.org"],
  "faucets": [],
  "icon": {
    "url": "ipfs://Qmcxevb3v8PEvnvfYgcG3bCBuPhe5YAdsHeaufDChSSR3Q",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "nativeCurrency": {
    "name": "Neon",
    "symbol": "NEON",
    "decimals": 18
  },
  "infoURL": "https://neon-labs.org",
  "shortName": "neonevm-mainnet",
  "chainId": 245022934,
  "networkId": 245022934,
  "explorers": [{
    "name": "native",
    "url": "https://mainnet.explorer.neon-labs.org",
    "standard": "EIP3091"
  }, {
    "name": "neonscan",
    "url": "https://mainnet.neonscan.org",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "neon-evm"
};

var c245022940 = {
  "name": "Neon EVM TestNet",
  "chain": "Solana",
  "rpc": ["https://neon-evm-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.neonevm.org"],
  "faucets": [],
  "icon": {
    "url": "ipfs://Qmcxevb3v8PEvnvfYgcG3bCBuPhe5YAdsHeaufDChSSR3Q",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "nativeCurrency": {
    "name": "Neon",
    "symbol": "NEON",
    "decimals": 18
  },
  "infoURL": "https://neon-labs.org",
  "shortName": "neonevm-testnet",
  "chainId": 245022940,
  "networkId": 245022940,
  "explorers": [{
    "name": "native",
    "url": "https://testnet.explorer.neon-labs.org",
    "standard": "EIP3091"
  }, {
    "name": "neonscan",
    "url": "https://testnet.neonscan.org",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "neon-evm-testnet"
};

var c311752642 = {
  "name": "OneLedger Mainnet",
  "chain": "OLT",
  "icon": {
    "url": "ipfs://QmRhqq4Gp8G9w27ND3LeFW49o5PxcxrbJsqHbpBFtzEMfC",
    "width": 225,
    "height": 225,
    "format": "png"
  },
  "rpc": ["https://oneledger.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet-rpc.oneledger.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OLT",
    "symbol": "OLT",
    "decimals": 18
  },
  "infoURL": "https://oneledger.io",
  "shortName": "oneledger",
  "chainId": 311752642,
  "networkId": 311752642,
  "explorers": [{
    "name": "OneLedger Block Explorer",
    "url": "https://mainnet-explorer.oneledger.network",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "oneledger"
};

var c344106930 = {
  "name": "Calypso NFT Hub (SKALE Testnet)",
  "title": "Calypso NFT Hub Testnet",
  "chain": "staging-utter-unripe-menkar",
  "rpc": ["https://calypso-nft-hub-skale-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"],
  "faucets": ["https://sfuel.dirtroad.dev/staging"],
  "nativeCurrency": {
    "name": "sFUEL",
    "symbol": "sFUEL",
    "decimals": 18
  },
  "infoURL": "https://calypsohub.network/",
  "shortName": "calypso-testnet",
  "chainId": 344106930,
  "networkId": 344106930,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com",
    "icon": "calypso",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "calypso-nft-hub-skale-testnet"
};

var c356256156 = {
  "name": "Gather Testnet Network",
  "chain": "GTH",
  "rpc": ["https://gather-testnet-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.gather.network"],
  "faucets": ["https://testnet-faucet.gather.network/"],
  "nativeCurrency": {
    "name": "Gather",
    "symbol": "GTH",
    "decimals": 18
  },
  "infoURL": "https://gather.network",
  "shortName": "tGTH",
  "chainId": 356256156,
  "networkId": 356256156,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://testnet-explorer.gather.network",
    "standard": "none"
  }],
  "testnet": true,
  "icon": {
    "url": "ipfs://Qmc9AJGg9aNhoH56n3deaZeUc8Ty1jDYJsW6Lu6hgSZH4S",
    "height": 512,
    "width": 512,
    "format": "png"
  },
  "slug": "gather-testnet-network"
};

var c486217935 = {
  "name": "Gather Devnet Network",
  "chain": "GTH",
  "rpc": ["https://gather-devnet-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://devnet.gather.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Gather",
    "symbol": "GTH",
    "decimals": 18
  },
  "infoURL": "https://gather.network",
  "shortName": "dGTH",
  "chainId": 486217935,
  "networkId": 486217935,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://devnet-explorer.gather.network",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "gather-devnet-network"
};

var c503129905 = {
  "name": "Nebula Staging",
  "chain": "staging-faint-slimy-achird",
  "rpc": ["https://nebula-staging.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird", "wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird"],
  "faucets": [],
  "nativeCurrency": {
    "name": "sFUEL",
    "symbol": "sFUEL",
    "decimals": 18
  },
  "infoURL": "https://nebulachain.io/",
  "shortName": "nebula-staging",
  "chainId": 503129905,
  "networkId": 503129905,
  "explorers": [{
    "name": "nebula",
    "url": "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com",
    "icon": "nebula",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "nebula-staging"
};

var c1122334455 = {
  "name": "IPOS Network",
  "chain": "IPOS",
  "rpc": ["https://ipos-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.iposlab.com", "https://rpc2.iposlab.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "IPOS Network Ether",
    "symbol": "IPOS",
    "decimals": 18
  },
  "infoURL": "https://iposlab.com",
  "shortName": "ipos",
  "chainId": 1122334455,
  "networkId": 1122334455,
  "testnet": false,
  "slug": "ipos-network"
};

var c1146703430 = {
  "name": "CyberdeckNet",
  "chain": "cyberdeck",
  "rpc": ["https://cyberdecknet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "http://cybeth1.cyberdeck.eu:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Cyb",
    "symbol": "CYB",
    "decimals": 18
  },
  "infoURL": "https://cyberdeck.eu",
  "shortName": "cyb",
  "chainId": 1146703430,
  "networkId": 1146703430,
  "icon": {
    "url": "ipfs://QmTvYMJXeZeWxYPuoQ15mHCS8K5EQzkMMCHQVs3GshooyR",
    "width": 193,
    "height": 214,
    "format": "png"
  },
  "status": "active",
  "explorers": [{
    "name": "CybEthExplorer",
    "url": "http://cybeth1.cyberdeck.eu:8000",
    "icon": "cyberdeck",
    "standard": "none"
  }],
  "testnet": false,
  "slug": "cyberdecknet"
};

var c1273227453 = {
  "name": "HUMAN Protocol",
  "title": "HUMAN Protocol",
  "chain": "wan-red-ain",
  "rpc": ["https://human-protocol.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.skalenodes.com/v1/wan-red-ain"],
  "faucets": ["https://dashboard.humanprotocol.org/faucet"],
  "nativeCurrency": {
    "name": "sFUEL",
    "symbol": "sFUEL",
    "decimals": 18
  },
  "infoURL": "https://www.humanprotocol.org",
  "shortName": "human-mainnet",
  "chainId": 1273227453,
  "networkId": 1273227453,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://wan-red-ain.explorer.mainnet.skalenodes.com",
    "icon": "human",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "human-protocol"
};

var c1313161554 = {
  "name": "Aurora Mainnet",
  "chain": "NEAR",
  "rpc": ["https://aurora.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.aurora.dev"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://aurora.dev",
  "shortName": "aurora",
  "chainId": 1313161554,
  "networkId": 1313161554,
  "explorers": [{
    "name": "aurorascan.dev",
    "url": "https://aurorascan.dev",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "aurora"
};

var c1313161555 = {
  "name": "Aurora Testnet",
  "chain": "NEAR",
  "rpc": ["https://aurora-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://testnet.aurora.dev/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://aurora.dev",
  "shortName": "aurora-testnet",
  "chainId": 1313161555,
  "networkId": 1313161555,
  "explorers": [{
    "name": "aurorascan.dev",
    "url": "https://testnet.aurorascan.dev",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "aurora-testnet"
};

var c1313161556 = {
  "name": "Aurora Betanet",
  "chain": "NEAR",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://aurora.dev",
  "shortName": "aurora-betanet",
  "chainId": 1313161556,
  "networkId": 1313161556,
  "testnet": false,
  "slug": "aurora-betanet"
};

var c1482601649 = {
  "name": "Nebula Mainnet",
  "chain": "green-giddy-denebola",
  "rpc": ["https://nebula.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.skalenodes.com/v1/green-giddy-denebola", "wss://mainnet-proxy.skalenodes.com/v1/ws/green-giddy-denebola"],
  "faucets": [],
  "nativeCurrency": {
    "name": "sFUEL",
    "symbol": "sFUEL",
    "decimals": 18
  },
  "infoURL": "https://nebulachain.io/",
  "shortName": "nebula-mainnet",
  "chainId": 1482601649,
  "networkId": 1482601649,
  "explorers": [{
    "name": "nebula",
    "url": "https://green-giddy-denebola.explorer.mainnet.skalenodes.com",
    "icon": "nebula",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "nebula"
};

var c1564830818 = {
  "name": "Calypso NFT Hub (SKALE)",
  "title": "Calypso NFT Hub Mainnet",
  "chain": "honorable-steel-rasalhague",
  "rpc": ["https://calypso-nft-hub-skale.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
  "faucets": ["https://sfuel.dirtroad.dev"],
  "nativeCurrency": {
    "name": "sFUEL",
    "symbol": "sFUEL",
    "decimals": 18
  },
  "infoURL": "https://calypsohub.network/",
  "shortName": "calypso-mainnet",
  "chainId": 1564830818,
  "networkId": 1564830818,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",
    "icon": "calypso",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "calypso-nft-hub-skale"
};

var c1666600000 = {
  "name": "Harmony Mainnet Shard 0",
  "chain": "Harmony",
  "rpc": ["https://harmony-shard-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.harmony.one", "https://api.s0.t.hmny.io"],
  "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-s0",
  "chainId": 1666600000,
  "networkId": 1666600000,
  "explorers": [{
    "name": "Harmony Block Explorer",
    "url": "https://explorer.harmony.one",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "harmony-shard-0"
};

var c1666600001 = {
  "name": "Harmony Mainnet Shard 1",
  "chain": "Harmony",
  "rpc": ["https://harmony-shard-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s1.t.hmny.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-s1",
  "chainId": 1666600001,
  "networkId": 1666600001,
  "testnet": false,
  "slug": "harmony-shard-1"
};

var c1666600002 = {
  "name": "Harmony Mainnet Shard 2",
  "chain": "Harmony",
  "rpc": ["https://harmony-shard-2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s2.t.hmny.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-s2",
  "chainId": 1666600002,
  "networkId": 1666600002,
  "testnet": false,
  "slug": "harmony-shard-2"
};

var c1666600003 = {
  "name": "Harmony Mainnet Shard 3",
  "chain": "Harmony",
  "rpc": ["https://harmony-shard-3.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s3.t.hmny.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-s3",
  "chainId": 1666600003,
  "networkId": 1666600003,
  "testnet": false,
  "slug": "harmony-shard-3"
};

var c1666700000 = {
  "name": "Harmony Testnet Shard 0",
  "chain": "Harmony",
  "rpc": ["https://harmony-testnet-shard-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s0.b.hmny.io"],
  "faucets": ["https://faucet.pops.one"],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-b-s0",
  "chainId": 1666700000,
  "networkId": 1666700000,
  "explorers": [{
    "name": "Harmony Testnet Block Explorer",
    "url": "https://explorer.pops.one",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "harmony-testnet-shard-0"
};

var c1666700001 = {
  "name": "Harmony Testnet Shard 1",
  "chain": "Harmony",
  "rpc": ["https://harmony-testnet-shard-1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s1.b.hmny.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-b-s1",
  "chainId": 1666700001,
  "networkId": 1666700001,
  "testnet": true,
  "slug": "harmony-testnet-shard-1"
};

var c1666700002 = {
  "name": "Harmony Testnet Shard 2",
  "chain": "Harmony",
  "rpc": ["https://harmony-testnet-shard-2.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s2.b.hmny.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-b-s2",
  "chainId": 1666700002,
  "networkId": 1666700002,
  "testnet": true,
  "slug": "harmony-testnet-shard-2"
};

var c1666700003 = {
  "name": "Harmony Testnet Shard 3",
  "chain": "Harmony",
  "rpc": ["https://harmony-testnet-shard-3.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s3.b.hmny.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-b-s3",
  "chainId": 1666700003,
  "networkId": 1666700003,
  "testnet": true,
  "slug": "harmony-testnet-shard-3"
};

var c1666900000 = {
  "name": "Harmony Devnet Shard 0",
  "chain": "Harmony",
  "rpc": ["https://harmony-devnet-shard-0.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.s1.ps.hmny.io"],
  "faucets": ["http://dev.faucet.easynode.one/"],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-ps-s0",
  "chainId": 1666900000,
  "networkId": 1666900000,
  "explorers": [{
    "name": "Harmony Block Explorer",
    "url": "https://explorer.ps.hmny.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "harmony-devnet-shard-0"
};

var c2021121117 = {
  "name": "DataHopper",
  "chain": "HOP",
  "rpc": ["https://datahopper.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://23.92.21.121:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "DataHoppers",
    "symbol": "HOP",
    "decimals": 18
  },
  "infoURL": "https://www.DataHopper.com",
  "shortName": "hop",
  "chainId": 2021121117,
  "networkId": 2021121117,
  "testnet": false,
  "slug": "datahopper"
};

var c2046399126 = {
  "name": "Europa SKALE Chain",
  "chain": "europa",
  "icon": {
    "url": "ipfs://bafkreiezcwowhm6xjrkt44cmiu6ml36rhrxx3amcg3cfkcntv2vgcvgbre",
    "width": 600,
    "height": 600,
    "format": "png"
  },
  "rpc": ["https://europa-skale-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.skalenodes.com/v1/elated-tan-skat", "wss://mainnet.skalenodes.com/v1/elated-tan-skat"],
  "faucets": ["https://ruby.exchange/faucet.html", "https://sfuel.mylilius.com/"],
  "nativeCurrency": {
    "name": "sFUEL",
    "symbol": "sFUEL",
    "decimals": 18
  },
  "infoURL": "https://europahub.network/",
  "shortName": "europa",
  "chainId": 2046399126,
  "networkId": 2046399126,
  "explorers": [{
    "name": "Blockscout",
    "url": "https://elated-tan-skat.explorer.mainnet.skalenodes.com",
    "standard": "EIP3091"
  }],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [{
      "url": "https://ruby.exchange/bridge.html"
    }]
  },
  "testnet": false,
  "slug": "europa-skale-chain"
};

var c3125659152 = {
  "name": "Pirl",
  "chain": "PIRL",
  "rpc": ["https://pirl.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://wallrpc.pirl.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Pirl Ether",
    "symbol": "PIRL",
    "decimals": 18
  },
  "infoURL": "https://pirl.io",
  "shortName": "pirl",
  "chainId": 3125659152,
  "networkId": 3125659152,
  "slip44": 164,
  "testnet": false,
  "slug": "pirl"
};

var c4216137055 = {
  "name": "OneLedger Testnet Frankenstein",
  "chain": "OLT",
  "icon": {
    "url": "ipfs://QmRhqq4Gp8G9w27ND3LeFW49o5PxcxrbJsqHbpBFtzEMfC",
    "width": 225,
    "height": 225,
    "format": "png"
  },
  "rpc": ["https://oneledger-testnet-frankenstein.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://frankenstein-rpc.oneledger.network"],
  "faucets": ["https://frankenstein-faucet.oneledger.network"],
  "nativeCurrency": {
    "name": "OLT",
    "symbol": "OLT",
    "decimals": 18
  },
  "infoURL": "https://oneledger.io",
  "shortName": "frankenstein",
  "chainId": 4216137055,
  "networkId": 4216137055,
  "explorers": [{
    "name": "OneLedger Block Explorer",
    "url": "https://frankenstein-explorer.oneledger.network",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "oneledger-testnet-frankenstein"
};

var c11297108099 = {
  "name": "Palm Testnet",
  "chain": "Palm",
  "rpc": ["https://palm-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://palm-testnet.infura.io/v3/${INFURA_API_KEY}"],
  "faucets": [],
  "nativeCurrency": {
    "name": "PALM",
    "symbol": "PALM",
    "decimals": 18
  },
  "infoURL": "https://palm.io",
  "shortName": "tpalm",
  "chainId": 11297108099,
  "networkId": 11297108099,
  "explorers": [{
    "name": "Palm Testnet Explorer",
    "url": "https://explorer.palm-uat.xyz",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "palm-testnet"
};

var c11297108109 = {
  "name": "Palm",
  "chain": "Palm",
  "rpc": ["https://palm.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://palm-mainnet.infura.io/v3/${INFURA_API_KEY}"],
  "faucets": [],
  "nativeCurrency": {
    "name": "PALM",
    "symbol": "PALM",
    "decimals": 18
  },
  "infoURL": "https://palm.io",
  "shortName": "palm",
  "chainId": 11297108109,
  "networkId": 11297108109,
  "explorers": [{
    "name": "Palm Explorer",
    "url": "https://explorer.palm.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "palm"
};

var c197710212030 = {
  "name": "Ntity Mainnet",
  "chain": "Ntity",
  "rpc": ["https://ntity.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.ntity.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ntity",
    "symbol": "NTT",
    "decimals": 18
  },
  "infoURL": "https://ntity.io",
  "shortName": "ntt",
  "chainId": 197710212030,
  "networkId": 197710212030,
  "icon": {
    "url": "ipfs://QmSW2YhCvMpnwtPGTJAuEK2QgyWfFjmnwcrapUg6kqFsPf",
    "width": 711,
    "height": 715,
    "format": "svg"
  },
  "explorers": [{
    "name": "Ntity Blockscout",
    "url": "https://blockscout.ntity.io",
    "icon": "ntity",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "ntity"
};

var c197710212031 = {
  "name": "Haradev Testnet",
  "chain": "Ntity",
  "rpc": ["https://haradev-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://blockchain.haradev.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ntity Haradev",
    "symbol": "NTTH",
    "decimals": 18
  },
  "infoURL": "https://ntity.io",
  "shortName": "ntt-haradev",
  "chainId": 197710212031,
  "networkId": 197710212031,
  "icon": {
    "url": "ipfs://QmSW2YhCvMpnwtPGTJAuEK2QgyWfFjmnwcrapUg6kqFsPf",
    "width": 711,
    "height": 715,
    "format": "svg"
  },
  "explorers": [{
    "name": "Ntity Haradev Blockscout",
    "url": "https://blockscout.haradev.com",
    "icon": "ntity",
    "standard": "EIP3091"
  }],
  "testnet": true,
  "slug": "haradev-testnet"
};

var c383414847825 = {
  "name": "Zeniq",
  "chain": "ZENIQ",
  "rpc": ["https://zeniq.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://smart.zeniq.network:9545"],
  "faucets": ["https://faucet.zeniq.net/"],
  "nativeCurrency": {
    "name": "Zeniq",
    "symbol": "ZENIQ",
    "decimals": 18
  },
  "infoURL": "https://www.zeniq.dev/",
  "shortName": "zeniq",
  "chainId": 383414847825,
  "networkId": 383414847825,
  "explorers": [{
    "name": "zeniq-smart-chain-explorer",
    "url": "https://smart.zeniq.net",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "zeniq"
};

var c666301171999 = {
  "name": "PDC Mainnet",
  "chain": "IPDC",
  "rpc": ["https://pdc.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.ipdc.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "PDC",
    "symbol": "PDC",
    "decimals": 18
  },
  "infoURL": "https://ipdc.io",
  "shortName": "ipdc",
  "chainId": 666301171999,
  "networkId": 666301171999,
  "explorers": [{
    "name": "ipdcscan",
    "url": "https://scan.ipdc.io",
    "standard": "EIP3091"
  }],
  "testnet": false,
  "slug": "pdc"
};

var c6022140761023 = {
  "name": "Molereum Network",
  "chain": "ETH",
  "rpc": ["https://molereum-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://molereum.jdubedition.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Molereum Ether",
    "symbol": "MOLE",
    "decimals": 18
  },
  "infoURL": "https://github.com/Jdubedition/molereum",
  "shortName": "mole",
  "chainId": 6022140761023,
  "networkId": 6022140761023,
  "testnet": false,
  "slug": "molereum-network"
};

var c1337 = {
  "name": "Localhost",
  "chain": "ETH",
  "rpc": ["http://localhost:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [16, 32, 64, 128, 256, 512]
  },
  "shortName": "local",
  "chainId": 1337,
  "networkId": 1337,
  "testnet": true,
  "slug": "localhost"
};

const defaultOptions = {
  mode: "http"
};

/**
 * Construct the list of RPC URLs given a specific chain config. Format any RPC URLs
 * with necessary API keys.
 *
 * @param chain - The chain config to assemble RPC URLs from
 * @param options - Options to configure the RPC URLs
 * @returns The list of RPC URLs for the chain
 */
function getChainRPCs(chain, options) {
  const {
    thirdwebApiKey,
    alchemyApiKey,
    infuraApiKey,
    mode
  } = {
    ...defaultOptions,
    ...options
  };
  const modeChains = chain.rpc.filter(rpc => {
    if (rpc.startsWith("http") && mode === "http") {
      return true;
    }
    if (rpc.startsWith("ws") && mode === "ws") {
      return true;
    }
    return false;
  });
  const thirdwebRPC = modeChains.filter(rpc => {
    return rpc.includes("${THIRDWEB_API_KEY}") && thirdwebApiKey;
  }).map(rpc => thirdwebApiKey ? rpc.replace("${THIRDWEB_API_KEY}", thirdwebApiKey) : rpc);
  const alchemyRPC = modeChains.filter(rpc => {
    return rpc.includes("${ALCHEMY_API_KEY}") && alchemyApiKey;
  }).map(rpc => alchemyApiKey ? rpc.replace("${ALCHEMY_API_KEY}", alchemyApiKey) : rpc);
  const infuraRPC = modeChains.filter(rpc => {
    return rpc.includes("${INFURA_API_KEY}") && infuraApiKey;
  }).map(rpc => infuraApiKey ? rpc.replace("${INFURA_API_KEY}", infuraApiKey) : rpc);
  const allOtherRpcs = modeChains.filter(rpc => {
    return !rpc.includes("${");
  });
  const orderedRPCs = [...thirdwebRPC, ...infuraRPC, ...alchemyRPC, ...allOtherRpcs];
  if (orderedRPCs.length === 0) {
    throw new Error(`No RPC available for chainId "${chain.chainId}" with mode ${mode}`);
  }
  return orderedRPCs;
}

/**
 * Get the highest priority RPC URL for a specific chain
 *
 * @param chain - The chain config to get the RPC URL for
 * @param options - Options to configure the RPC URL
 * @returns The RPC URL for the chain
 *
 * @internal
 */
function getChainRPC(chain, options) {
  return getChainRPCs(chain, options)[0];
}
function minimizeChain(chain) {
  const [firstRpc] = chain.rpc;
  return {
    name: chain.name,
    chain: chain.chain,
    rpc: [firstRpc],
    nativeCurrency: chain.nativeCurrency,
    shortName: chain.shortName,
    chainId: chain.chainId,
    testnet: chain.testnet,
    slug: chain.slug
  };
}
function configureChain(chain, chainConfig) {
  let additionalRPCs = [];
  if (chainConfig?.rpc) {
    if (typeof chainConfig.rpc === "string") {
      additionalRPCs = [chainConfig.rpc];
    } else {
      additionalRPCs = chainConfig.rpc;
    }
  }
  // prepend additional RPCs to the chain's RPCs
  return {
    ...chain,
    rpc: [...additionalRPCs, ...chain.rpc]
  };
}

const Ethereum = c1;
const ExpanseNetwork = c2;
const Ropsten = c3;
const Rinkeby = c4;
const Goerli = c5;
const EthereumClassicTestnetKotti = c6;
const Thaichain = c7;
const Ubiq = c8;
const UbiqNetworkTestnet = c9;
const Optimism = c10;
const Metadium = c11;
const MetadiumTestnet = c12;
const DiodeTestnetStaging = c13;
const Flare = c14;
const DiodePrenet = c15;
const FlareTestnetCoston = c16;
const Thaichain20Thaifi = c17;
const ThundercoreTestnet = c18;
const SongbirdCanaryNetwork = c19;
const ElastosSmartChain = c20;
const ElastosSmartChainTestnet = c21;
const ElaDidSidechain = c22;
const ElaDidSidechainTestnet = c23;
const Kardiachain = c24;
const CronosBeta = c25;
const GenesisL1Testnet = c26;
const Shibachain = c27;
const BobaNetworkRinkebyTestnet = c28;
const GenesisL1 = c29;
const Rsk = c30;
const RskTestnet = c31;
const GooddataTestnet = c32;
const Gooddata = c33;
const DithereumTestnet = c34;
const TbwgChain = c35;
const Dxchain = c36;
const SeedcoinNetwork = c37;
const Valorbit = c38;
const UnicornUltraTestnet = c39;
const TelosEvm = c40;
const TelosEvmTestnet = c41;
const Kovan = c42;
const DarwiniaPangolinTestnet = c43;
const DarwiniaCrabNetwork = c44;
const DarwiniaPangoroTestnet = c45;
const DarwiniaNetwork = c46;
const EnnothemProterozoic = c48;
const EnnothemTestnetPioneer = c49;
const XinfinXdcNetwork = c50;
const XdcApothemNetwork = c51;
const CoinexSmartChain = c52;
const CoinexSmartChainTestnet = c53;
const Openpiece = c54;
const Zyx = c55;
const Binance = c56;
const Syscoin = c57;
const Ontology = c58;
const Eos = c59;
const Gochain = c60;
const EthereumClassic = c61;
const EthereumClassicTestnetMorden = c62;
const EthereumClassicTestnetMordor = c63;
const Ellaism = c64;
const OkexchainTestnet = c65;
const Okxchain = c66;
const DbchainTestnet = c67;
const Soterone = c68;
const OptimismKovan = c69;
const HooSmartChain = c70;
const ConfluxEspaceTestnet = c71;
const DxchainTestnet = c72;
const Fncy = c73;
const Idchain = c74;
const DecimalSmartChain = c75;
const Mix = c76;
const PoaNetworkSokol = c77;
const Primuschain = c78;
const Zenith = c79;
const Genechain = c80;
const ZenithTestnetVilnius = c81;
const Meter = c82;
const MeterTestnet = c83;
const GatechainTestnet = c85;
const Gatechain = c86;
const NovaNetwork = c87;
const Tomochain = c88;
const TomochainTestnet = c89;
const GarizonStage0 = c90;
const GarizonStage1 = c91;
const GarizonStage2 = c92;
const GarizonStage3 = c93;
const CryptokylinTestnet = c95;
const BitkubChain = c96;
const BinanceTestnet = c97;
const PoaNetworkCore = c99;
const Gnosis = c100;
const Etherinc = c101;
const Web3gamesTestnet = c102;
const KaibaLightningChainTestnet = c104;
const Web3gamesDevnet = c105;
const VelasEvm = c106;
const NebulaTestnet = c107;
const Thundercore = c108;
const ProtonTestnet = c110;
const EtherliteChain = c111;
const Dehvo = c113;
const FlareTestnetCoston2 = c114;
const DebankTestnet = c115;
const Debank = c116;
const ArcologyTestnet = c118;
const Enuls = c119;
const EnulsTestnet = c120;
const Realchain = c121;
const Fuse = c122;
const FuseSparknet = c123;
const DecentralizedWeb = c124;
const OychainTestnet = c125;
const Oychain = c126;
const Factory127 = c127;
const HuobiEcoChain = c128;
const IexecSidechain = c134;
const AlyxChainTestnet = c135;
const Polygon = c137;
const OpenpieceTestnet = c141;
const DaxChain = c142;
const PhiNetworkV2 = c144;
const ArmoniaEvaChain = c160;
const ArmoniaEvaChainTestnet = c161;
const LightstreamsTestnet = c162;
const Lightstreams = c163;
const AtoshiTestnet = c167;
const AiozNetwork = c168;
const HooSmartChainTestnet = c170;
const LatamBlockchainResilTestnet = c172;
const AmeChain = c180;
const Seele = c186;
const Bmc = c188;
const BmcTestnet = c189;
const CryptoEmergency = c193;
const OkbchainTestnet = c195;
const Okbchain = c196;
const BittorrentChain = c199;
const ArbitrumOnXdai = c200;
const MoacTestnet = c201;
const FreightTrustNetwork = c211;
const MapMakalu = c212;
const SiriusnetV2 = c217;
const Lachain = c225;
const LachainTestnet = c226;
const EnergyWebChain = c246;
const Oasys = c248;
const Fantom = c250;
const HuobiEcoChainTestnet = c256;
const Setheum = c258;
const SurBlockchainNetwork = c262;
const HighPerformanceBlockchain = c269;
const ZksyncEraTestnet = c280;
const BobaNetwork = c288;
const Hedera = c295;
const HederaTestnet = c296;
const HederaPreviewnet = c297;
const HederaLocalnet = c298;
const OptimismOnGnosis = c300;
const Bobaopera = c301;
const Omax = c311;
const Filecoin = c314;
const Kcc = c321;
const KccTestnet = c322;
const ZksyncEra = c324;
const Web3q = c333;
const DfkChainTest = c335;
const Shiden = c336;
const CronosTestnet = c338;
const Theta = c361;
const ThetaSapphireTestnet = c363;
const ThetaAmberTestnet = c364;
const ThetaTestnet = c365;
const Pulsechain = c369;
const ConstaTestnet = c371;
const Lisinski = c385;
const HyperonchainTestnet = c400;
const SxNetwork = c416;
const LaTestnet = c418;
const OptimismGoerli = c420;
const ZeethChain = c427;
const FrenchainTestnet = c444;
const Rupaya = c499;
const CaminoCChain = c500;
const ColumbusTestNetwork = c501;
const DoubleAChain = c512;
const DoubleAChainTestnet = c513;
const GearZeroNetwork = c516;
const XtSmartChain = c520;
const Firechain = c529;
const FXCoreNetwork = c530;
const Candle = c534;
const Vela1Chain = c555;
const TaoNetwork = c558;
const DogechainTestnet = c568;
const Astar = c592;
const AcalaMandalaTestnet = c595;
const KaruraNetworkTestnet = c596;
const AcalaNetworkTestnet = c597;
const MetisGoerliTestnet = c599;
const MeshnyanTestnet = c600;
const GraphlinqBlockchain = c614;
const SxNetworkTestnet = c647;
const EnduranceSmartChain = c648;
const PixieChainTestnet = c666;
const KaruraNetwork = c686;
const StarSocialTestnet = c700;
const BlockchainStation = c707;
const BlockchainStationTestnet = c708;
const LycanChain = c721;
const CantoTestnet = c740;
const VentionSmartChainTestnet = c741;
const Ql1 = c766;
const OpenchainTestnet = c776;
const Cheapeth = c777;
const AcalaNetwork = c787;
const AerochainTestnet = c788;
const LucidBlockchain = c800;
const Haic = c803;
const PortalFantasyChainTest = c808;
const Qitmeer = c813;
const Callisto = c820;
const Taraxa = c841;
const TaraxaTestnet = c842;
const ZeethChainDev = c859;
const FantasiaChain = c868;
const BandaiNamcoResearchVerse = c876;
const DexitNetwork = c877;
const AmbrosChain = c880;
const Wanchain = c888;
const GarizonTestnetStage0 = c900;
const GarizonTestnetStage1 = c901;
const GarizonTestnetStage2 = c902;
const GarizonTestnetStage3 = c903;
const PortalFantasyChain = c909;
const RiniaTestnet = c917;
const PulsechainTestnet = c940;
const PulsechainTestnetV2b = c941;
const PulsechainTestnetV3 = c942;
const MunodeTestnet = c956;
const Oort = c970;
const OortHuygens = c971;
const OortAscraeus = c972;
const NepalBlockchainNetwork = c977;
const TopEvm = c980;
const MemoSmartChain = c985;
const Top = c989;
const LuckyNetwork = c998;
const WanchainTestnet = c999;
const Gton = c1000;
const KlaytnTestnetBaobab = c1001;
const TEkta = c1004;
const NewtonTestnet = c1007;
const Eurus = c1008;
const EvriceNetwork = c1010;
const Newton = c1012;
const Sakura = c1022;
const CloverTestnet = c1023;
const ClvParachain = c1024;
const BittorrentChainTestnet = c1028;
const ConfluxEspace = c1030;
const ProxyNetworkTestnet = c1031;
const BronosTestnet = c1038;
const Bronos = c1039;
const MetisAndromeda = c1088;
const Moac = c1099;
const Wemix30 = c1111;
const Wemix30Testnet = c1112;
const CoreBlockchainTestnet = c1115;
const CoreBlockchain = c1116;
const Dogcoin = c1117;
const DefichainEvmNetwork = c1130;
const DefichainEvmNetworkTestnet = c1131;
const AmstarTestnet = c1138;
const Mathchain = c1139;
const MathchainTestnet = c1140;
const SmartHostTeknolojiTestnet = c1177;
const IoraChain = c1197;
const EvanescoTestnet = c1201;
const WorldTradeTechnicalChain = c1202;
const Popcateum = c1213;
const Enterchain = c1214;
const ExzoNetwork = c1229;
const UltronTestnet = c1230;
const Ultron = c1231;
const StepNetwork = c1234;
const OmPlatform = c1246;
const CicChainTestnet = c1252;
const Halo = c1280;
const Moonbeam = c1284;
const Moonriver = c1285;
const MoonbaseAlpha = c1287;
const Moonrock = c1288;
const Bobabeam = c1294;
const BobabaseTestnet = c1297;
const DosFujiSubnet = c1311;
const Alyx = c1314;
const Aitd = c1319;
const AitdTestnet = c1320;
const ElysiumTestnet = c1338;
const Elysium = c1339;
const CicChain = c1353;
const Amstar = c1388;
const RikezaNetwork = c1433;
const PolygonZkevmTestnet = c1442;
const CtexScanBlockchain = c1455;
const Sherpax = c1506;
const SherpaxTestnet = c1507;
const BeagleMessagingChain = c1515;
const CatecoinChain = c1618;
const Atheios = c1620;
const Btachain = c1657;
const HorizenYumaTestnet = c1662;
const Ludan = c1688;
const AnytypeEvmChain = c1701;
const Tbsi = c1707;
const TbsiTestnet = c1708;
const PaletteChain = c1718;
const Kerleano = c1804;
const RabbitAnalogTestnetChain = c1807;
const CubeChain = c1818;
const CubeChainTestnet = c1819;
const Teslafunds = c1856;
const GitshockCartenzTestnet = c1881;
const LightlinkPhoenix = c1890;
const LightlinkPegasusTestnet = c1891;
const BonNetwork = c1898;
const Bitcichain = c1907;
const BitcichainTestnet = c1908;
const OnusChainTestnet = c1945;
const DChain = c1951;
const Eleanor = c1967;
const Atelier = c1971;
const OnusChain = c1975;
const EurusTestnet = c1984;
const Ethergem = c1987;
const Ekta = c1994;
const EdexaTestnet = c1995;
const Dogechain = c2000;
const MilkomedaC1 = c2001;
const MilkomedaA1 = c2002;
const CloudwalkTestnet = c2008;
const Cloudwalk = c2009;
const ZMainnet = c2016;
const PublicmintDevnet = c2018;
const PublicmintTestnet = c2019;
const Publicmint = c2020;
const EdgewareEdgeevm = c2021;
const BeresheetBereevmTestnet = c2022;
const TaycanTestnet = c2023;
const RangersProtocol = c2025;
const OrigintrailParachain = c2043;
const StratosTestnet = c2047;
const Stratos = c2048;
const Quokkacoin = c2077;
const Ecoball = c2100;
const EcoballTestnetEspuma = c2101;
const ExosamaNetwork = c2109;
const Metaplayerone = c2122;
const Bosagora = c2151;
const Findora = c2152;
const FindoraTestnet = c2153;
const FindoraForge = c2154;
const BitcoinEvm = c2203;
const Evanesco = c2213;
const KavaEvmTestnet = c2221;
const KavaEvm = c2222;
const Vchain = c2223;
const BombChain = c2300;
const Arevia = c2309;
const Altcoinchain = c2330;
const BombChainTestnet = c2399;
const TcgVerse = c2400;
const Xodex = c2415;
const Kortho = c2559;
const Techpay = c2569;
const Pocrnet = c2606;
const RedlightChain = c2611;
const EzchainCChain = c2612;
const EzchainCChainTestnet = c2613;
const BobaNetworkGoerliTestnet = c2888;
const Bityuan = c2999;
const CennznetRata = c3000;
const CennznetNikau = c3001;
const OrlandoChain = c3031;
const Bifrost = c3068;
const FilecoinHyperspaceTestnet = c3141;
const DebounceSubnetTestnet = c3306;
const ZcoreTestnet = c3331;
const Web3qTestnet = c3333;
const Web3qGalileo = c3334;
const ParibuNet = c3400;
const ParibuNetTestnet = c3500;
const JfinChain = c3501;
const Pandoproject = c3601;
const PandoprojectTestnet = c3602;
const Metacodechain = c3666;
const Bittex = c3690;
const EmpireNetwork = c3693;
const Crossbell = c3737;
const DracNetwork = c3912;
const Dyno = c3966;
const DynoTestnet = c3967;
const Yuanchain = c3999;
const FantomTestnet = c4002;
const BobaoperaTestnet = c4051;
const Nahmii3 = c4061;
const Nahmii3Testnet = c4062;
const BitindiTestnet = c4096;
const Bitindi = c4099;
const AiozNetworkTestnet = c4102;
const TipboxcoinTestnet = c4141;
const PhiNetworkV1 = c4181;
const BobafujiTestnet = c4328;
const Htmlcoin = c4444;
const IotexNetwork = c4689;
const IotexNetworkTestnet = c4690;
const BlackfortExchangeNetworkTestnet = c4777;
const VenidiumTestnet = c4918;
const Venidium = c4919;
const BlackfortExchangeNetwork = c4999;
const Mantle = c5000;
const MantleTestnet = c5001;
const TlchainNetwork = c5177;
const Eraswap = c5197;
const Humanode = c5234;
const UzmiNetwork = c5315;
const Nahmii = c5551;
const NahmiiTestnet = c5553;
const ChainVerse = c5555;
const SyscoinTanenbaumTestnet = c5700;
const HikaNetworkTestnet = c5729;
const Ganache = c5777;
const OntologyTestnet = c5851;
const WegochainRubidium = c5869;
const TresTestnet = c6065;
const Tres = c6066;
const ScolcoinWeichainTestnet = c6552;
const PixieChain = c6626;
const GoldSmartChain = c6789;
const TombChain = c6969;
const Polysmartchain = c6999;
const Zetachain = c7000;
const ZetachainAthensTestnet = c7001;
const EllaTheHeart = c7027;
const Planq = c7070;
const Klyntar = c7331;
const Shyft = c7341;
const Canto = c7700;
const RiseOfTheWarbotsTestnet = c7777;
const HazlorTestnet = c7878;
const Teleport = c8000;
const TeleportTestnet = c8001;
const MdglTestnet = c8029;
const ShardeumLiberty1X = c8080;
const ShardeumLiberty2X = c8081;
const ShardeumSphinx1X = c8082;
const StreamuxBlockchain = c8098;
const QitmeerNetworkTestnet = c8131;
const BeoneChainTestnet = c8181;
const KlaytnCypress = c8217;
const BlocktonBlockchain = c8272;
const Korthotest = c8285;
const DraconesFinancialServices = c8387;
const Base = c8453;
const TokiNetwork = c8654;
const TokiTestnet = c8655;
const ToolGlobal = c8723;
const ToolGlobalTestnet = c8724;
const AlphNetwork = c8738;
const TmyChain = c8768;
const MaroBlockchain = c8848;
const Unique = c8880;
const QuartzByUnique = c8881;
const OpalTestnetByUnique = c8882;
const SapphireByUnique = c8883;
const Xanachain = c8888;
const VyvoSmartChain = c8889;
const Mammoth = c8898;
const JibchainL1 = c8899;
const GiantMammoth = c8989;
const Bloxberg = c8995;
const EvmosTestnet = c9000;
const Evmos = c9001;
const Berylbit = c9012;
const GenesisCoin = c9100;
const DogcoinTestnet = c9339;
const RangersProtocolTestnetRobin = c9527;
const Qeasyweb3Testnet = c9528;
const OortDev = c9700;
const BobaBnbTestnet = c9728;
const ZTestnet = c9768;
const MyownTestnet = c9999;
const SmartBitcoinCash = c10000;
const SmartBitcoinCashTestnet = c10001;
const GonChain = c10024;
const Sjatsh = c10086;
const BlockchainGenesis = c10101;
const ChiadoTestnet = c10200;
const _0xtade = c10248;
const Numbers = c10507;
const NumbersTestnet = c10508;
const Cryptocoinpay = c10823;
const QuadransBlockchain = c10946;
const QuadransBlockchainTestnet = c10947;
const Astra = c11110;
const Wagmi = c11111;
const AstraTestnet = c11115;
const Hashbit = c11119;
const HaqqNetwork = c11235;
const ShyftTestnet = c11437;
const SardisTestnet = c11612;
const SanrChain = c11888;
const SingularityZeroTestnet = c12051;
const SingularityZero = c12052;
const Fibonacci = c12306;
const BlgTestnet = c12321;
const StepTestnet = c12345;
const RikezaNetworkTestnet = c12715;
const Sps = c13000;
const CreditSmartchain = c13308;
const Phoenix = c13381;
const Susono = c13812;
const SpsTestnet = c14000;
const Loopnetwork = c15551;
const TrustEvmTestnet = c15555;
const Metadot = c16000;
const MetadotTestnet = c16001;
const Airdao = c16718;
const IvarChainTestnet = c16888;
const FrontierOfDreamsTestnet = c18000;
const ProofOfMemes = c18159;
const HomeVerse = c19011;
const BtcixNetwork = c19845;
const CallistoTestnet = c20729;
const P12Chain = c20736;
const CennznetAzalea = c21337;
const Omchain = c21816;
const Taycan = c22023;
const AirdaoTestnet = c22040;
const Map = c22776;
const OpsideTestnet = c23118;
const OasisSapphire = c23294;
const OasisSapphireTestnet = c23295;
const Webchain = c24484;
const MintmeComCoin = c24734;
const HammerChain = c25888;
const BitkubChainTestnet = c25925;
const HertzNetwork = c26600;
const Oasischain = c26863;
const OptimismBedrockGoerliAlphaTestnet = c28528;
const PieceTestnet = c30067;
const EthersocialNetwork = c31102;
const Cloudtx = c31223;
const CloudtxTestnet = c31224;
const GochainTestnet = c31337;
const FilecoinWallabyTestnet = c31415;
const Bitgert = c32520;
const Fusion = c32659;
const ZilliqaEvmTestnet = c33101;
const Aves = c33333;
const J2oTaro = c35011;
const Q = c35441;
const QTestnet = c35443;
const Energi = c39797;
const Oho = c39815;
const OpulentXBeta = c41500;
const Pegglecoin = c42069;
const Arbitrum = c42161;
const ArbitrumNova = c42170;
const Celo = c42220;
const OasisEmeraldTestnet = c42261;
const OasisEmerald = c42262;
const Athereum = c43110;
const AvalancheFuji = c43113;
const Avalanche = c43114;
const BobaAvax = c43288;
const Frenchain = c44444;
const CeloAlfajoresTestnet = c44787;
const AutobahnNetwork = c45000;
const FusionTestnet = c46688;
const ReiNetwork = c47805;
const Floripa = c49049;
const BifrostTestnet = c49088;
const EnergiTestnet = c49797;
const LiveplexOracleevm = c50001;
const GtonTestnet = c50021;
const Sardis = c51712;
const DfkChain = c53935;
const HaqqChainTestnet = c54211;
const ReiChain = c55555;
const ReiChainTestnet = c55556;
const BobaBnb = c56288;
const SyscoinRolluxTestnet = c57000;
const ThinkiumTestnetChain0 = c60000;
const ThinkiumTestnetChain1 = c60001;
const ThinkiumTestnetChain2 = c60002;
const ThinkiumTestnetChain103 = c60103;
const Etica = c61803;
const DokenSuperChain = c61916;
const CeloBaklavaTestnet = c62320;
const Multivac = c62621;
const Ecredits = c63000;
const EcreditsTestnet = c63001;
const Scolcoin = c65450;
const Condrieu = c69420;
const ThinkiumChain0 = c70000;
const ThinkiumChain1 = c70001;
const ThinkiumChain2 = c70002;
const ThinkiumChain103 = c70103;
const PolyjuiceTestnet = c71393;
const GodwokenTestnetV1 = c71401;
const Godwoken = c71402;
const EnergyWebVoltaTestnet = c73799;
const MixinVirtualMachine = c73927;
const Resincoin = c75000;
const VentionSmartChain = c77612;
const FirenzeTestNetwork = c78110;
const GoldSmartChainTestnet = c79879;
const Mumbai = c80001;
const BaseGoerli = c84531;
const ChilizScovilleTestnet = c88880;
const IvarChain = c88888;
const BeverlyHills = c90210;
const LambdaTestnet = c92001;
const UbSmartChainTestnet = c99998;
const UbSmartChain = c99999;
const QuarkchainRoot = c100000;
const QuarkchainShard0 = c100001;
const QuarkchainShard1 = c100002;
const QuarkchainShard2 = c100003;
const QuarkchainShard3 = c100004;
const QuarkchainShard4 = c100005;
const QuarkchainShard5 = c100006;
const QuarkchainShard6 = c100007;
const QuarkchainShard7 = c100008;
const Vechain = c100009;
const VechainTestnet = c100010;
const SoverunTestnet = c101010;
const Crystaleum = c103090;
const Brochain = c108801;
const QuarkchainDevnetRoot = c110000;
const QuarkchainDevnetShard0 = c110001;
const QuarkchainDevnetShard1 = c110002;
const QuarkchainDevnetShard2 = c110003;
const QuarkchainDevnetShard3 = c110004;
const QuarkchainDevnetShard4 = c110005;
const QuarkchainDevnetShard5 = c110006;
const QuarkchainDevnetShard6 = c110007;
const QuarkchainDevnetShard7 = c110008;
const SiberiumNetwork = c111111;
const EtndChainS = c131419;
const CondorTestNetwork = c188881;
const MilkomedaC1Testnet = c200101;
const MilkomedaA1Testnet = c200202;
const Akroma = c200625;
const Alaya = c201018;
const AlayaDevTestnet = c201030;
const MythicalChain = c201804;
const DecimalSmartChainTestnet = c202020;
const Jellie = c202624;
const Platon = c210425;
const Mas = c220315;
const HaymoTestnet = c234666;
const ArtisSigma1 = c246529;
const ArtisTestnetTau1 = c246785;
const SaakuruTestnet = c247253;
const Cmp = c256256;
const GearZeroNetworkTestnet = c266256;
const SocialSmartChain = c281121;
const FilecoinCalibrationTestnet = c314159;
const OoneChainTestnet = c333777;
const PolisTestnet = c333888;
const Polis = c333999;
const HapchainTestnet = c373737;
const MetalCChain = c381931;
const MetalTahoeCChain = c381932;
const Tipboxcoin = c404040;
const Kekchain = c420420;
const KekchainKektest = c420666;
const ArbitrumRinkeby = c421611;
const ArbitrumGoerli = c421613;
const FastexChainTestnet = c424242;
const DexalotSubnetTestnet = c432201;
const DexalotSubnet = c432204;
const WeelinkTestnet = c444900;
const Openchain = c474142;
const CmpTestnet = c512512;
const EthereumFair = c513100;
const Scroll = c534352;
const ScrollAlphaTestnet = c534353;
const ScrollPreAlphaTestnet = c534354;
const BeanecoSmartchain = c535037;
const BearNetworkChain = c641230;
const VisionVpioneerTestChain = c666666;
const BearNetworkChainTestnet = c751230;
const Octaspace = c800001;
const _4goodnetwork = c846000;
const Vision = c888888;
const PosichainShard0 = c900000;
const PosichainTestnetShard0 = c910000;
const PosichainDevnetShard0 = c920000;
const PosichainDevnetShard1 = c920001;
const FncyTestnet = c923018;
const EluvioContentFabric = c955305;
const EthoProtocol = c1313114;
const Xerom = c1313500;
const Kintsugi = c1337702;
const Kiln = c1337802;
const Zhejiang = c1337803;
const PlianMain = c2099156;
const PlatonDevTestnet2 = c2206132;
const FilecoinButterflyTestnet = c3141592;
const Imversed = c5555555;
const ImversedTestnet = c5555558;
const Saakuru = c7225878;
const Openvessel = c7355310;
const Ql1Testnet = c7668378;
const Musicoin = c7762959;
const PlianSubchain1 = c8007736;
const Hapchain = c8794598;
const PlianTestnetSubchain1 = c10067275;
const Soverun = c10101010;
const Sepolia = c11155111;
const PepchainChurchill = c13371337;
const Anduschain = c14288640;
const PlianTestnetMain = c16658437;
const Iolite = c18289463;
const Smartmesh = c20180430;
const Quarkblockchain = c20181205;
const Excelon = c22052002;
const ExcoincialChainVoltaTestnet = c27082017;
const ExcoincialChain = c27082022;
const AuxiliumNetwork = c28945486;
const Flachain = c29032022;
const FilecoinLocalTestnet = c31415926;
const JoysDigital = c35855456;
const Maistestsubnet = c43214913;
const Aquachain = c61717561;
const AutonityBakerlooThamesTestnet = c65010000;
const AutonityPiccadillyThamesTestnet = c65100000;
const TEAMBlockchain = c88888888;
const JoysDigitalTestnet = c99415706;
const GatherNetwork = c192837465;
const NeonEvmDevnet = c245022926;
const NeonEvm = c245022934;
const NeonEvmTestnet = c245022940;
const Oneledger = c311752642;
const CalypsoNftHubSkaleTestnet = c344106930;
const GatherTestnetNetwork = c356256156;
const GatherDevnetNetwork = c486217935;
const NebulaStaging = c503129905;
const IposNetwork = c1122334455;
const Cyberdecknet = c1146703430;
const HumanProtocol = c1273227453;
const Aurora = c1313161554;
const AuroraTestnet = c1313161555;
const AuroraBetanet = c1313161556;
const Nebula = c1482601649;
const CalypsoNftHubSkale = c1564830818;
const HarmonyShard0 = c1666600000;
const HarmonyShard1 = c1666600001;
const HarmonyShard2 = c1666600002;
const HarmonyShard3 = c1666600003;
const HarmonyTestnetShard0 = c1666700000;
const HarmonyTestnetShard1 = c1666700001;
const HarmonyTestnetShard2 = c1666700002;
const HarmonyTestnetShard3 = c1666700003;
const HarmonyDevnetShard0 = c1666900000;
const Datahopper = c2021121117;
const EuropaSkaleChain = c2046399126;
const Pirl = c3125659152;
const OneledgerTestnetFrankenstein = c4216137055;
const PalmTestnet = c11297108099;
const Palm = c11297108109;
const Ntity = c197710212030;
const HaradevTestnet = c197710212031;
const Zeniq = c383414847825;
const Pdc = c666301171999;
const MolereumNetwork = c6022140761023;
const Localhost = c1337;
const defaultChains = [Ethereum, Goerli, Polygon, Mumbai, Arbitrum, ArbitrumGoerli, Optimism, OptimismGoerli, Binance, BinanceTestnet, Fantom, FantomTestnet, Avalanche, AvalancheFuji, Localhost];
const allChains = [Ethereum, ExpanseNetwork, Ropsten, Rinkeby, Goerli, EthereumClassicTestnetKotti, Thaichain, Ubiq, UbiqNetworkTestnet, Optimism, Metadium, MetadiumTestnet, DiodeTestnetStaging, Flare, DiodePrenet, FlareTestnetCoston, Thaichain20Thaifi, ThundercoreTestnet, SongbirdCanaryNetwork, ElastosSmartChain, ElastosSmartChainTestnet, ElaDidSidechain, ElaDidSidechainTestnet, Kardiachain, CronosBeta, GenesisL1Testnet, Shibachain, BobaNetworkRinkebyTestnet, GenesisL1, Rsk, RskTestnet, GooddataTestnet, Gooddata, DithereumTestnet, TbwgChain, Dxchain, SeedcoinNetwork, Valorbit, UnicornUltraTestnet, TelosEvm, TelosEvmTestnet, Kovan, DarwiniaPangolinTestnet, DarwiniaCrabNetwork, DarwiniaPangoroTestnet, DarwiniaNetwork, EnnothemProterozoic, EnnothemTestnetPioneer, XinfinXdcNetwork, XdcApothemNetwork, CoinexSmartChain, CoinexSmartChainTestnet, Openpiece, Zyx, Binance, Syscoin, Ontology, Eos, Gochain, EthereumClassic, EthereumClassicTestnetMorden, EthereumClassicTestnetMordor, Ellaism, OkexchainTestnet, Okxchain, DbchainTestnet, Soterone, OptimismKovan, HooSmartChain, ConfluxEspaceTestnet, DxchainTestnet, Fncy, Idchain, DecimalSmartChain, Mix, PoaNetworkSokol, Primuschain, Zenith, Genechain, ZenithTestnetVilnius, Meter, MeterTestnet, GatechainTestnet, Gatechain, NovaNetwork, Tomochain, TomochainTestnet, GarizonStage0, GarizonStage1, GarizonStage2, GarizonStage3, CryptokylinTestnet, BitkubChain, BinanceTestnet, PoaNetworkCore, Gnosis, Etherinc, Web3gamesTestnet, KaibaLightningChainTestnet, Web3gamesDevnet, VelasEvm, NebulaTestnet, Thundercore, ProtonTestnet, EtherliteChain, Dehvo, FlareTestnetCoston2, DebankTestnet, Debank, ArcologyTestnet, Enuls, EnulsTestnet, Realchain, Fuse, FuseSparknet, DecentralizedWeb, OychainTestnet, Oychain, Factory127, HuobiEcoChain, IexecSidechain, AlyxChainTestnet, Polygon, OpenpieceTestnet, DaxChain, PhiNetworkV2, ArmoniaEvaChain, ArmoniaEvaChainTestnet, LightstreamsTestnet, Lightstreams, AtoshiTestnet, AiozNetwork, HooSmartChainTestnet, LatamBlockchainResilTestnet, AmeChain, Seele, Bmc, BmcTestnet, CryptoEmergency, OkbchainTestnet, Okbchain, BittorrentChain, ArbitrumOnXdai, MoacTestnet, FreightTrustNetwork, MapMakalu, SiriusnetV2, Lachain, LachainTestnet, EnergyWebChain, Oasys, Fantom, HuobiEcoChainTestnet, Setheum, SurBlockchainNetwork, HighPerformanceBlockchain, ZksyncEraTestnet, BobaNetwork, Hedera, HederaTestnet, HederaPreviewnet, HederaLocalnet, OptimismOnGnosis, Bobaopera, Omax, Filecoin, Kcc, KccTestnet, ZksyncEra, Web3q, DfkChainTest, Shiden, CronosTestnet, Theta, ThetaSapphireTestnet, ThetaAmberTestnet, ThetaTestnet, Pulsechain, ConstaTestnet, Lisinski, HyperonchainTestnet, SxNetwork, LaTestnet, OptimismGoerli, ZeethChain, FrenchainTestnet, Rupaya, CaminoCChain, ColumbusTestNetwork, DoubleAChain, DoubleAChainTestnet, GearZeroNetwork, XtSmartChain, Firechain, FXCoreNetwork, Candle, Vela1Chain, TaoNetwork, DogechainTestnet, Astar, AcalaMandalaTestnet, KaruraNetworkTestnet, AcalaNetworkTestnet, MetisGoerliTestnet, MeshnyanTestnet, GraphlinqBlockchain, SxNetworkTestnet, EnduranceSmartChain, PixieChainTestnet, KaruraNetwork, StarSocialTestnet, BlockchainStation, BlockchainStationTestnet, LycanChain, CantoTestnet, VentionSmartChainTestnet, Ql1, OpenchainTestnet, Cheapeth, AcalaNetwork, AerochainTestnet, LucidBlockchain, Haic, PortalFantasyChainTest, Qitmeer, Callisto, Taraxa, TaraxaTestnet, ZeethChainDev, FantasiaChain, BandaiNamcoResearchVerse, DexitNetwork, AmbrosChain, Wanchain, GarizonTestnetStage0, GarizonTestnetStage1, GarizonTestnetStage2, GarizonTestnetStage3, PortalFantasyChain, RiniaTestnet, PulsechainTestnet, PulsechainTestnetV2b, PulsechainTestnetV3, MunodeTestnet, Oort, OortHuygens, OortAscraeus, NepalBlockchainNetwork, TopEvm, MemoSmartChain, Top, LuckyNetwork, WanchainTestnet, Gton, KlaytnTestnetBaobab, TEkta, NewtonTestnet, Eurus, EvriceNetwork, Newton, Sakura, CloverTestnet, ClvParachain, BittorrentChainTestnet, ConfluxEspace, ProxyNetworkTestnet, BronosTestnet, Bronos, MetisAndromeda, Moac, Wemix30, Wemix30Testnet, CoreBlockchainTestnet, CoreBlockchain, Dogcoin, DefichainEvmNetwork, DefichainEvmNetworkTestnet, AmstarTestnet, Mathchain, MathchainTestnet, SmartHostTeknolojiTestnet, IoraChain, EvanescoTestnet, WorldTradeTechnicalChain, Popcateum, Enterchain, ExzoNetwork, UltronTestnet, Ultron, StepNetwork, OmPlatform, CicChainTestnet, Halo, Moonbeam, Moonriver, MoonbaseAlpha, Moonrock, Bobabeam, BobabaseTestnet, DosFujiSubnet, Alyx, Aitd, AitdTestnet, ElysiumTestnet, Elysium, CicChain, Amstar, RikezaNetwork, PolygonZkevmTestnet, CtexScanBlockchain, Sherpax, SherpaxTestnet, BeagleMessagingChain, CatecoinChain, Atheios, Btachain, HorizenYumaTestnet, Ludan, AnytypeEvmChain, Tbsi, TbsiTestnet, PaletteChain, Kerleano, RabbitAnalogTestnetChain, CubeChain, CubeChainTestnet, Teslafunds, GitshockCartenzTestnet, LightlinkPhoenix, LightlinkPegasusTestnet, BonNetwork, Bitcichain, BitcichainTestnet, OnusChainTestnet, DChain, Eleanor, Atelier, OnusChain, EurusTestnet, Ethergem, Ekta, EdexaTestnet, Dogechain, MilkomedaC1, MilkomedaA1, CloudwalkTestnet, Cloudwalk, ZMainnet, PublicmintDevnet, PublicmintTestnet, Publicmint, EdgewareEdgeevm, BeresheetBereevmTestnet, TaycanTestnet, RangersProtocol, OrigintrailParachain, StratosTestnet, Stratos, Quokkacoin, Ecoball, EcoballTestnetEspuma, ExosamaNetwork, Metaplayerone, Bosagora, Findora, FindoraTestnet, FindoraForge, BitcoinEvm, Evanesco, KavaEvmTestnet, KavaEvm, Vchain, BombChain, Arevia, Altcoinchain, BombChainTestnet, TcgVerse, Xodex, Kortho, Techpay, Pocrnet, RedlightChain, EzchainCChain, EzchainCChainTestnet, BobaNetworkGoerliTestnet, Bityuan, CennznetRata, CennznetNikau, OrlandoChain, Bifrost, FilecoinHyperspaceTestnet, DebounceSubnetTestnet, ZcoreTestnet, Web3qTestnet, Web3qGalileo, ParibuNet, ParibuNetTestnet, JfinChain, Pandoproject, PandoprojectTestnet, Metacodechain, Bittex, EmpireNetwork, Crossbell, DracNetwork, Dyno, DynoTestnet, Yuanchain, FantomTestnet, BobaoperaTestnet, Nahmii3, Nahmii3Testnet, BitindiTestnet, Bitindi, AiozNetworkTestnet, TipboxcoinTestnet, PhiNetworkV1, BobafujiTestnet, Htmlcoin, IotexNetwork, IotexNetworkTestnet, BlackfortExchangeNetworkTestnet, VenidiumTestnet, Venidium, BlackfortExchangeNetwork, Mantle, MantleTestnet, TlchainNetwork, Eraswap, Humanode, UzmiNetwork, Nahmii, NahmiiTestnet, ChainVerse, SyscoinTanenbaumTestnet, HikaNetworkTestnet, Ganache, OntologyTestnet, WegochainRubidium, TresTestnet, Tres, ScolcoinWeichainTestnet, PixieChain, GoldSmartChain, TombChain, Polysmartchain, Zetachain, ZetachainAthensTestnet, EllaTheHeart, Planq, Klyntar, Shyft, Canto, RiseOfTheWarbotsTestnet, HazlorTestnet, Teleport, TeleportTestnet, MdglTestnet, ShardeumLiberty1X, ShardeumLiberty2X, ShardeumSphinx1X, StreamuxBlockchain, QitmeerNetworkTestnet, BeoneChainTestnet, KlaytnCypress, BlocktonBlockchain, Korthotest, DraconesFinancialServices, Base, TokiNetwork, TokiTestnet, ToolGlobal, ToolGlobalTestnet, AlphNetwork, TmyChain, MaroBlockchain, Unique, QuartzByUnique, OpalTestnetByUnique, SapphireByUnique, Xanachain, VyvoSmartChain, Mammoth, JibchainL1, GiantMammoth, Bloxberg, EvmosTestnet, Evmos, Berylbit, GenesisCoin, DogcoinTestnet, RangersProtocolTestnetRobin, Qeasyweb3Testnet, OortDev, BobaBnbTestnet, ZTestnet, MyownTestnet, SmartBitcoinCash, SmartBitcoinCashTestnet, GonChain, Sjatsh, BlockchainGenesis, ChiadoTestnet, _0xtade, Numbers, NumbersTestnet, Cryptocoinpay, QuadransBlockchain, QuadransBlockchainTestnet, Astra, Wagmi, AstraTestnet, Hashbit, HaqqNetwork, ShyftTestnet, SardisTestnet, SanrChain, SingularityZeroTestnet, SingularityZero, Fibonacci, BlgTestnet, StepTestnet, RikezaNetworkTestnet, Sps, CreditSmartchain, Phoenix, Susono, SpsTestnet, Loopnetwork, TrustEvmTestnet, Metadot, MetadotTestnet, Airdao, IvarChainTestnet, FrontierOfDreamsTestnet, ProofOfMemes, HomeVerse, BtcixNetwork, CallistoTestnet, P12Chain, CennznetAzalea, Omchain, Taycan, AirdaoTestnet, Map, OpsideTestnet, OasisSapphire, OasisSapphireTestnet, Webchain, MintmeComCoin, HammerChain, BitkubChainTestnet, HertzNetwork, Oasischain, OptimismBedrockGoerliAlphaTestnet, PieceTestnet, EthersocialNetwork, Cloudtx, CloudtxTestnet, GochainTestnet, FilecoinWallabyTestnet, Bitgert, Fusion, ZilliqaEvmTestnet, Aves, J2oTaro, Q, QTestnet, Energi, Oho, OpulentXBeta, Pegglecoin, Arbitrum, ArbitrumNova, Celo, OasisEmeraldTestnet, OasisEmerald, Athereum, AvalancheFuji, Avalanche, BobaAvax, Frenchain, CeloAlfajoresTestnet, AutobahnNetwork, FusionTestnet, ReiNetwork, Floripa, BifrostTestnet, EnergiTestnet, LiveplexOracleevm, GtonTestnet, Sardis, DfkChain, HaqqChainTestnet, ReiChain, ReiChainTestnet, BobaBnb, SyscoinRolluxTestnet, ThinkiumTestnetChain0, ThinkiumTestnetChain1, ThinkiumTestnetChain2, ThinkiumTestnetChain103, Etica, DokenSuperChain, CeloBaklavaTestnet, Multivac, Ecredits, EcreditsTestnet, Scolcoin, Condrieu, ThinkiumChain0, ThinkiumChain1, ThinkiumChain2, ThinkiumChain103, PolyjuiceTestnet, GodwokenTestnetV1, Godwoken, EnergyWebVoltaTestnet, MixinVirtualMachine, Resincoin, VentionSmartChain, FirenzeTestNetwork, GoldSmartChainTestnet, Mumbai, BaseGoerli, ChilizScovilleTestnet, IvarChain, BeverlyHills, LambdaTestnet, UbSmartChainTestnet, UbSmartChain, QuarkchainRoot, QuarkchainShard0, QuarkchainShard1, QuarkchainShard2, QuarkchainShard3, QuarkchainShard4, QuarkchainShard5, QuarkchainShard6, QuarkchainShard7, Vechain, VechainTestnet, SoverunTestnet, Crystaleum, Brochain, QuarkchainDevnetRoot, QuarkchainDevnetShard0, QuarkchainDevnetShard1, QuarkchainDevnetShard2, QuarkchainDevnetShard3, QuarkchainDevnetShard4, QuarkchainDevnetShard5, QuarkchainDevnetShard6, QuarkchainDevnetShard7, SiberiumNetwork, EtndChainS, CondorTestNetwork, MilkomedaC1Testnet, MilkomedaA1Testnet, Akroma, Alaya, AlayaDevTestnet, MythicalChain, DecimalSmartChainTestnet, Jellie, Platon, Mas, HaymoTestnet, ArtisSigma1, ArtisTestnetTau1, SaakuruTestnet, Cmp, GearZeroNetworkTestnet, SocialSmartChain, FilecoinCalibrationTestnet, OoneChainTestnet, PolisTestnet, Polis, HapchainTestnet, MetalCChain, MetalTahoeCChain, Tipboxcoin, Kekchain, KekchainKektest, ArbitrumRinkeby, ArbitrumGoerli, FastexChainTestnet, DexalotSubnetTestnet, DexalotSubnet, WeelinkTestnet, Openchain, CmpTestnet, EthereumFair, Scroll, ScrollAlphaTestnet, ScrollPreAlphaTestnet, BeanecoSmartchain, BearNetworkChain, VisionVpioneerTestChain, BearNetworkChainTestnet, Octaspace, _4goodnetwork, Vision, PosichainShard0, PosichainTestnetShard0, PosichainDevnetShard0, PosichainDevnetShard1, FncyTestnet, EluvioContentFabric, EthoProtocol, Xerom, Kintsugi, Kiln, Zhejiang, PlianMain, PlatonDevTestnet2, FilecoinButterflyTestnet, Imversed, ImversedTestnet, Saakuru, Openvessel, Ql1Testnet, Musicoin, PlianSubchain1, Hapchain, PlianTestnetSubchain1, Soverun, Sepolia, PepchainChurchill, Anduschain, PlianTestnetMain, Iolite, Smartmesh, Quarkblockchain, Excelon, ExcoincialChainVoltaTestnet, ExcoincialChain, AuxiliumNetwork, Flachain, FilecoinLocalTestnet, JoysDigital, Maistestsubnet, Aquachain, AutonityBakerlooThamesTestnet, AutonityPiccadillyThamesTestnet, TEAMBlockchain, JoysDigitalTestnet, GatherNetwork, NeonEvmDevnet, NeonEvm, NeonEvmTestnet, Oneledger, CalypsoNftHubSkaleTestnet, GatherTestnetNetwork, GatherDevnetNetwork, NebulaStaging, IposNetwork, Cyberdecknet, HumanProtocol, Aurora, AuroraTestnet, AuroraBetanet, Nebula, CalypsoNftHubSkale, HarmonyShard0, HarmonyShard1, HarmonyShard2, HarmonyShard3, HarmonyTestnetShard0, HarmonyTestnetShard1, HarmonyTestnetShard2, HarmonyTestnetShard3, HarmonyDevnetShard0, Datahopper, EuropaSkaleChain, Pirl, OneledgerTestnetFrankenstein, PalmTestnet, Palm, Ntity, HaradevTestnet, Zeniq, Pdc, MolereumNetwork, Localhost];
function getChainByChainId(chainId) {
  const chain = allChains.find(chain => chain.chainId === chainId);
  if (!chain) {
    throw new Error(`Chain with chainId "${chainId}" not found`);
  }
  return chain;
}
function getChainBySlug(slug) {
  const chain = allChains.find(chain => chain.slug === slug);
  if (!chain) {
    throw new Error(`Chain with slug "${slug}" not found`);
  }
  return chain;
}

exports.AcalaMandalaTestnet = AcalaMandalaTestnet;
exports.AcalaNetwork = AcalaNetwork;
exports.AcalaNetworkTestnet = AcalaNetworkTestnet;
exports.AerochainTestnet = AerochainTestnet;
exports.AiozNetwork = AiozNetwork;
exports.AiozNetworkTestnet = AiozNetworkTestnet;
exports.Airdao = Airdao;
exports.AirdaoTestnet = AirdaoTestnet;
exports.Aitd = Aitd;
exports.AitdTestnet = AitdTestnet;
exports.Akroma = Akroma;
exports.Alaya = Alaya;
exports.AlayaDevTestnet = AlayaDevTestnet;
exports.AlphNetwork = AlphNetwork;
exports.Altcoinchain = Altcoinchain;
exports.Alyx = Alyx;
exports.AlyxChainTestnet = AlyxChainTestnet;
exports.AmbrosChain = AmbrosChain;
exports.AmeChain = AmeChain;
exports.Amstar = Amstar;
exports.AmstarTestnet = AmstarTestnet;
exports.Anduschain = Anduschain;
exports.AnytypeEvmChain = AnytypeEvmChain;
exports.Aquachain = Aquachain;
exports.Arbitrum = Arbitrum;
exports.ArbitrumGoerli = ArbitrumGoerli;
exports.ArbitrumNova = ArbitrumNova;
exports.ArbitrumOnXdai = ArbitrumOnXdai;
exports.ArbitrumRinkeby = ArbitrumRinkeby;
exports.ArcologyTestnet = ArcologyTestnet;
exports.Arevia = Arevia;
exports.ArmoniaEvaChain = ArmoniaEvaChain;
exports.ArmoniaEvaChainTestnet = ArmoniaEvaChainTestnet;
exports.ArtisSigma1 = ArtisSigma1;
exports.ArtisTestnetTau1 = ArtisTestnetTau1;
exports.Astar = Astar;
exports.Astra = Astra;
exports.AstraTestnet = AstraTestnet;
exports.Atelier = Atelier;
exports.Atheios = Atheios;
exports.Athereum = Athereum;
exports.AtoshiTestnet = AtoshiTestnet;
exports.Aurora = Aurora;
exports.AuroraBetanet = AuroraBetanet;
exports.AuroraTestnet = AuroraTestnet;
exports.AutobahnNetwork = AutobahnNetwork;
exports.AutonityBakerlooThamesTestnet = AutonityBakerlooThamesTestnet;
exports.AutonityPiccadillyThamesTestnet = AutonityPiccadillyThamesTestnet;
exports.AuxiliumNetwork = AuxiliumNetwork;
exports.Avalanche = Avalanche;
exports.AvalancheFuji = AvalancheFuji;
exports.Aves = Aves;
exports.BandaiNamcoResearchVerse = BandaiNamcoResearchVerse;
exports.Base = Base;
exports.BaseGoerli = BaseGoerli;
exports.BeagleMessagingChain = BeagleMessagingChain;
exports.BeanecoSmartchain = BeanecoSmartchain;
exports.BearNetworkChain = BearNetworkChain;
exports.BearNetworkChainTestnet = BearNetworkChainTestnet;
exports.BeoneChainTestnet = BeoneChainTestnet;
exports.BeresheetBereevmTestnet = BeresheetBereevmTestnet;
exports.Berylbit = Berylbit;
exports.BeverlyHills = BeverlyHills;
exports.Bifrost = Bifrost;
exports.BifrostTestnet = BifrostTestnet;
exports.Binance = Binance;
exports.BinanceTestnet = BinanceTestnet;
exports.Bitcichain = Bitcichain;
exports.BitcichainTestnet = BitcichainTestnet;
exports.BitcoinEvm = BitcoinEvm;
exports.Bitgert = Bitgert;
exports.Bitindi = Bitindi;
exports.BitindiTestnet = BitindiTestnet;
exports.BitkubChain = BitkubChain;
exports.BitkubChainTestnet = BitkubChainTestnet;
exports.Bittex = Bittex;
exports.BittorrentChain = BittorrentChain;
exports.BittorrentChainTestnet = BittorrentChainTestnet;
exports.Bityuan = Bityuan;
exports.BlackfortExchangeNetwork = BlackfortExchangeNetwork;
exports.BlackfortExchangeNetworkTestnet = BlackfortExchangeNetworkTestnet;
exports.BlgTestnet = BlgTestnet;
exports.BlockchainGenesis = BlockchainGenesis;
exports.BlockchainStation = BlockchainStation;
exports.BlockchainStationTestnet = BlockchainStationTestnet;
exports.BlocktonBlockchain = BlocktonBlockchain;
exports.Bloxberg = Bloxberg;
exports.Bmc = Bmc;
exports.BmcTestnet = BmcTestnet;
exports.BobaAvax = BobaAvax;
exports.BobaBnb = BobaBnb;
exports.BobaBnbTestnet = BobaBnbTestnet;
exports.BobaNetwork = BobaNetwork;
exports.BobaNetworkGoerliTestnet = BobaNetworkGoerliTestnet;
exports.BobaNetworkRinkebyTestnet = BobaNetworkRinkebyTestnet;
exports.BobabaseTestnet = BobabaseTestnet;
exports.Bobabeam = Bobabeam;
exports.BobafujiTestnet = BobafujiTestnet;
exports.Bobaopera = Bobaopera;
exports.BobaoperaTestnet = BobaoperaTestnet;
exports.BombChain = BombChain;
exports.BombChainTestnet = BombChainTestnet;
exports.BonNetwork = BonNetwork;
exports.Bosagora = Bosagora;
exports.Brochain = Brochain;
exports.Bronos = Bronos;
exports.BronosTestnet = BronosTestnet;
exports.Btachain = Btachain;
exports.BtcixNetwork = BtcixNetwork;
exports.Callisto = Callisto;
exports.CallistoTestnet = CallistoTestnet;
exports.CalypsoNftHubSkale = CalypsoNftHubSkale;
exports.CalypsoNftHubSkaleTestnet = CalypsoNftHubSkaleTestnet;
exports.CaminoCChain = CaminoCChain;
exports.Candle = Candle;
exports.Canto = Canto;
exports.CantoTestnet = CantoTestnet;
exports.CatecoinChain = CatecoinChain;
exports.Celo = Celo;
exports.CeloAlfajoresTestnet = CeloAlfajoresTestnet;
exports.CeloBaklavaTestnet = CeloBaklavaTestnet;
exports.CennznetAzalea = CennznetAzalea;
exports.CennznetNikau = CennznetNikau;
exports.CennznetRata = CennznetRata;
exports.ChainVerse = ChainVerse;
exports.Cheapeth = Cheapeth;
exports.ChiadoTestnet = ChiadoTestnet;
exports.ChilizScovilleTestnet = ChilizScovilleTestnet;
exports.CicChain = CicChain;
exports.CicChainTestnet = CicChainTestnet;
exports.Cloudtx = Cloudtx;
exports.CloudtxTestnet = CloudtxTestnet;
exports.Cloudwalk = Cloudwalk;
exports.CloudwalkTestnet = CloudwalkTestnet;
exports.CloverTestnet = CloverTestnet;
exports.ClvParachain = ClvParachain;
exports.Cmp = Cmp;
exports.CmpTestnet = CmpTestnet;
exports.CoinexSmartChain = CoinexSmartChain;
exports.CoinexSmartChainTestnet = CoinexSmartChainTestnet;
exports.ColumbusTestNetwork = ColumbusTestNetwork;
exports.CondorTestNetwork = CondorTestNetwork;
exports.Condrieu = Condrieu;
exports.ConfluxEspace = ConfluxEspace;
exports.ConfluxEspaceTestnet = ConfluxEspaceTestnet;
exports.ConstaTestnet = ConstaTestnet;
exports.CoreBlockchain = CoreBlockchain;
exports.CoreBlockchainTestnet = CoreBlockchainTestnet;
exports.CreditSmartchain = CreditSmartchain;
exports.CronosBeta = CronosBeta;
exports.CronosTestnet = CronosTestnet;
exports.Crossbell = Crossbell;
exports.CryptoEmergency = CryptoEmergency;
exports.Cryptocoinpay = Cryptocoinpay;
exports.CryptokylinTestnet = CryptokylinTestnet;
exports.Crystaleum = Crystaleum;
exports.CtexScanBlockchain = CtexScanBlockchain;
exports.CubeChain = CubeChain;
exports.CubeChainTestnet = CubeChainTestnet;
exports.Cyberdecknet = Cyberdecknet;
exports.DChain = DChain;
exports.DarwiniaCrabNetwork = DarwiniaCrabNetwork;
exports.DarwiniaNetwork = DarwiniaNetwork;
exports.DarwiniaPangolinTestnet = DarwiniaPangolinTestnet;
exports.DarwiniaPangoroTestnet = DarwiniaPangoroTestnet;
exports.Datahopper = Datahopper;
exports.DaxChain = DaxChain;
exports.DbchainTestnet = DbchainTestnet;
exports.Debank = Debank;
exports.DebankTestnet = DebankTestnet;
exports.DebounceSubnetTestnet = DebounceSubnetTestnet;
exports.DecentralizedWeb = DecentralizedWeb;
exports.DecimalSmartChain = DecimalSmartChain;
exports.DecimalSmartChainTestnet = DecimalSmartChainTestnet;
exports.DefichainEvmNetwork = DefichainEvmNetwork;
exports.DefichainEvmNetworkTestnet = DefichainEvmNetworkTestnet;
exports.Dehvo = Dehvo;
exports.DexalotSubnet = DexalotSubnet;
exports.DexalotSubnetTestnet = DexalotSubnetTestnet;
exports.DexitNetwork = DexitNetwork;
exports.DfkChain = DfkChain;
exports.DfkChainTest = DfkChainTest;
exports.DiodePrenet = DiodePrenet;
exports.DiodeTestnetStaging = DiodeTestnetStaging;
exports.DithereumTestnet = DithereumTestnet;
exports.Dogcoin = Dogcoin;
exports.DogcoinTestnet = DogcoinTestnet;
exports.Dogechain = Dogechain;
exports.DogechainTestnet = DogechainTestnet;
exports.DokenSuperChain = DokenSuperChain;
exports.DosFujiSubnet = DosFujiSubnet;
exports.DoubleAChain = DoubleAChain;
exports.DoubleAChainTestnet = DoubleAChainTestnet;
exports.DracNetwork = DracNetwork;
exports.DraconesFinancialServices = DraconesFinancialServices;
exports.Dxchain = Dxchain;
exports.DxchainTestnet = DxchainTestnet;
exports.Dyno = Dyno;
exports.DynoTestnet = DynoTestnet;
exports.Ecoball = Ecoball;
exports.EcoballTestnetEspuma = EcoballTestnetEspuma;
exports.Ecredits = Ecredits;
exports.EcreditsTestnet = EcreditsTestnet;
exports.EdexaTestnet = EdexaTestnet;
exports.EdgewareEdgeevm = EdgewareEdgeevm;
exports.Ekta = Ekta;
exports.ElaDidSidechain = ElaDidSidechain;
exports.ElaDidSidechainTestnet = ElaDidSidechainTestnet;
exports.ElastosSmartChain = ElastosSmartChain;
exports.ElastosSmartChainTestnet = ElastosSmartChainTestnet;
exports.Eleanor = Eleanor;
exports.EllaTheHeart = EllaTheHeart;
exports.Ellaism = Ellaism;
exports.EluvioContentFabric = EluvioContentFabric;
exports.Elysium = Elysium;
exports.ElysiumTestnet = ElysiumTestnet;
exports.EmpireNetwork = EmpireNetwork;
exports.EnduranceSmartChain = EnduranceSmartChain;
exports.Energi = Energi;
exports.EnergiTestnet = EnergiTestnet;
exports.EnergyWebChain = EnergyWebChain;
exports.EnergyWebVoltaTestnet = EnergyWebVoltaTestnet;
exports.EnnothemProterozoic = EnnothemProterozoic;
exports.EnnothemTestnetPioneer = EnnothemTestnetPioneer;
exports.Enterchain = Enterchain;
exports.Enuls = Enuls;
exports.EnulsTestnet = EnulsTestnet;
exports.Eos = Eos;
exports.Eraswap = Eraswap;
exports.Ethereum = Ethereum;
exports.EthereumClassic = EthereumClassic;
exports.EthereumClassicTestnetKotti = EthereumClassicTestnetKotti;
exports.EthereumClassicTestnetMorden = EthereumClassicTestnetMorden;
exports.EthereumClassicTestnetMordor = EthereumClassicTestnetMordor;
exports.EthereumFair = EthereumFair;
exports.Ethergem = Ethergem;
exports.Etherinc = Etherinc;
exports.EtherliteChain = EtherliteChain;
exports.EthersocialNetwork = EthersocialNetwork;
exports.EthoProtocol = EthoProtocol;
exports.Etica = Etica;
exports.EtndChainS = EtndChainS;
exports.EuropaSkaleChain = EuropaSkaleChain;
exports.Eurus = Eurus;
exports.EurusTestnet = EurusTestnet;
exports.Evanesco = Evanesco;
exports.EvanescoTestnet = EvanescoTestnet;
exports.Evmos = Evmos;
exports.EvmosTestnet = EvmosTestnet;
exports.EvriceNetwork = EvriceNetwork;
exports.Excelon = Excelon;
exports.ExcoincialChain = ExcoincialChain;
exports.ExcoincialChainVoltaTestnet = ExcoincialChainVoltaTestnet;
exports.ExosamaNetwork = ExosamaNetwork;
exports.ExpanseNetwork = ExpanseNetwork;
exports.ExzoNetwork = ExzoNetwork;
exports.EzchainCChain = EzchainCChain;
exports.EzchainCChainTestnet = EzchainCChainTestnet;
exports.FXCoreNetwork = FXCoreNetwork;
exports.Factory127 = Factory127;
exports.FantasiaChain = FantasiaChain;
exports.Fantom = Fantom;
exports.FantomTestnet = FantomTestnet;
exports.FastexChainTestnet = FastexChainTestnet;
exports.Fibonacci = Fibonacci;
exports.Filecoin = Filecoin;
exports.FilecoinButterflyTestnet = FilecoinButterflyTestnet;
exports.FilecoinCalibrationTestnet = FilecoinCalibrationTestnet;
exports.FilecoinHyperspaceTestnet = FilecoinHyperspaceTestnet;
exports.FilecoinLocalTestnet = FilecoinLocalTestnet;
exports.FilecoinWallabyTestnet = FilecoinWallabyTestnet;
exports.Findora = Findora;
exports.FindoraForge = FindoraForge;
exports.FindoraTestnet = FindoraTestnet;
exports.Firechain = Firechain;
exports.FirenzeTestNetwork = FirenzeTestNetwork;
exports.Flachain = Flachain;
exports.Flare = Flare;
exports.FlareTestnetCoston = FlareTestnetCoston;
exports.FlareTestnetCoston2 = FlareTestnetCoston2;
exports.Floripa = Floripa;
exports.Fncy = Fncy;
exports.FncyTestnet = FncyTestnet;
exports.FreightTrustNetwork = FreightTrustNetwork;
exports.Frenchain = Frenchain;
exports.FrenchainTestnet = FrenchainTestnet;
exports.FrontierOfDreamsTestnet = FrontierOfDreamsTestnet;
exports.Fuse = Fuse;
exports.FuseSparknet = FuseSparknet;
exports.Fusion = Fusion;
exports.FusionTestnet = FusionTestnet;
exports.Ganache = Ganache;
exports.GarizonStage0 = GarizonStage0;
exports.GarizonStage1 = GarizonStage1;
exports.GarizonStage2 = GarizonStage2;
exports.GarizonStage3 = GarizonStage3;
exports.GarizonTestnetStage0 = GarizonTestnetStage0;
exports.GarizonTestnetStage1 = GarizonTestnetStage1;
exports.GarizonTestnetStage2 = GarizonTestnetStage2;
exports.GarizonTestnetStage3 = GarizonTestnetStage3;
exports.Gatechain = Gatechain;
exports.GatechainTestnet = GatechainTestnet;
exports.GatherDevnetNetwork = GatherDevnetNetwork;
exports.GatherNetwork = GatherNetwork;
exports.GatherTestnetNetwork = GatherTestnetNetwork;
exports.GearZeroNetwork = GearZeroNetwork;
exports.GearZeroNetworkTestnet = GearZeroNetworkTestnet;
exports.Genechain = Genechain;
exports.GenesisCoin = GenesisCoin;
exports.GenesisL1 = GenesisL1;
exports.GenesisL1Testnet = GenesisL1Testnet;
exports.GiantMammoth = GiantMammoth;
exports.GitshockCartenzTestnet = GitshockCartenzTestnet;
exports.Gnosis = Gnosis;
exports.Gochain = Gochain;
exports.GochainTestnet = GochainTestnet;
exports.Godwoken = Godwoken;
exports.GodwokenTestnetV1 = GodwokenTestnetV1;
exports.Goerli = Goerli;
exports.GoldSmartChain = GoldSmartChain;
exports.GoldSmartChainTestnet = GoldSmartChainTestnet;
exports.GonChain = GonChain;
exports.Gooddata = Gooddata;
exports.GooddataTestnet = GooddataTestnet;
exports.GraphlinqBlockchain = GraphlinqBlockchain;
exports.Gton = Gton;
exports.GtonTestnet = GtonTestnet;
exports.Haic = Haic;
exports.Halo = Halo;
exports.HammerChain = HammerChain;
exports.Hapchain = Hapchain;
exports.HapchainTestnet = HapchainTestnet;
exports.HaqqChainTestnet = HaqqChainTestnet;
exports.HaqqNetwork = HaqqNetwork;
exports.HaradevTestnet = HaradevTestnet;
exports.HarmonyDevnetShard0 = HarmonyDevnetShard0;
exports.HarmonyShard0 = HarmonyShard0;
exports.HarmonyShard1 = HarmonyShard1;
exports.HarmonyShard2 = HarmonyShard2;
exports.HarmonyShard3 = HarmonyShard3;
exports.HarmonyTestnetShard0 = HarmonyTestnetShard0;
exports.HarmonyTestnetShard1 = HarmonyTestnetShard1;
exports.HarmonyTestnetShard2 = HarmonyTestnetShard2;
exports.HarmonyTestnetShard3 = HarmonyTestnetShard3;
exports.Hashbit = Hashbit;
exports.HaymoTestnet = HaymoTestnet;
exports.HazlorTestnet = HazlorTestnet;
exports.Hedera = Hedera;
exports.HederaLocalnet = HederaLocalnet;
exports.HederaPreviewnet = HederaPreviewnet;
exports.HederaTestnet = HederaTestnet;
exports.HertzNetwork = HertzNetwork;
exports.HighPerformanceBlockchain = HighPerformanceBlockchain;
exports.HikaNetworkTestnet = HikaNetworkTestnet;
exports.HomeVerse = HomeVerse;
exports.HooSmartChain = HooSmartChain;
exports.HooSmartChainTestnet = HooSmartChainTestnet;
exports.HorizenYumaTestnet = HorizenYumaTestnet;
exports.Htmlcoin = Htmlcoin;
exports.HumanProtocol = HumanProtocol;
exports.Humanode = Humanode;
exports.HuobiEcoChain = HuobiEcoChain;
exports.HuobiEcoChainTestnet = HuobiEcoChainTestnet;
exports.HyperonchainTestnet = HyperonchainTestnet;
exports.Idchain = Idchain;
exports.IexecSidechain = IexecSidechain;
exports.Imversed = Imversed;
exports.ImversedTestnet = ImversedTestnet;
exports.Iolite = Iolite;
exports.IoraChain = IoraChain;
exports.IotexNetwork = IotexNetwork;
exports.IotexNetworkTestnet = IotexNetworkTestnet;
exports.IposNetwork = IposNetwork;
exports.IvarChain = IvarChain;
exports.IvarChainTestnet = IvarChainTestnet;
exports.J2oTaro = J2oTaro;
exports.Jellie = Jellie;
exports.JfinChain = JfinChain;
exports.JibchainL1 = JibchainL1;
exports.JoysDigital = JoysDigital;
exports.JoysDigitalTestnet = JoysDigitalTestnet;
exports.KaibaLightningChainTestnet = KaibaLightningChainTestnet;
exports.Kardiachain = Kardiachain;
exports.KaruraNetwork = KaruraNetwork;
exports.KaruraNetworkTestnet = KaruraNetworkTestnet;
exports.KavaEvm = KavaEvm;
exports.KavaEvmTestnet = KavaEvmTestnet;
exports.Kcc = Kcc;
exports.KccTestnet = KccTestnet;
exports.Kekchain = Kekchain;
exports.KekchainKektest = KekchainKektest;
exports.Kerleano = Kerleano;
exports.Kiln = Kiln;
exports.Kintsugi = Kintsugi;
exports.KlaytnCypress = KlaytnCypress;
exports.KlaytnTestnetBaobab = KlaytnTestnetBaobab;
exports.Klyntar = Klyntar;
exports.Kortho = Kortho;
exports.Korthotest = Korthotest;
exports.Kovan = Kovan;
exports.LaTestnet = LaTestnet;
exports.Lachain = Lachain;
exports.LachainTestnet = LachainTestnet;
exports.LambdaTestnet = LambdaTestnet;
exports.LatamBlockchainResilTestnet = LatamBlockchainResilTestnet;
exports.LightlinkPegasusTestnet = LightlinkPegasusTestnet;
exports.LightlinkPhoenix = LightlinkPhoenix;
exports.Lightstreams = Lightstreams;
exports.LightstreamsTestnet = LightstreamsTestnet;
exports.Lisinski = Lisinski;
exports.LiveplexOracleevm = LiveplexOracleevm;
exports.Localhost = Localhost;
exports.Loopnetwork = Loopnetwork;
exports.LucidBlockchain = LucidBlockchain;
exports.LuckyNetwork = LuckyNetwork;
exports.Ludan = Ludan;
exports.LycanChain = LycanChain;
exports.Maistestsubnet = Maistestsubnet;
exports.Mammoth = Mammoth;
exports.Mantle = Mantle;
exports.MantleTestnet = MantleTestnet;
exports.Map = Map;
exports.MapMakalu = MapMakalu;
exports.MaroBlockchain = MaroBlockchain;
exports.Mas = Mas;
exports.Mathchain = Mathchain;
exports.MathchainTestnet = MathchainTestnet;
exports.MdglTestnet = MdglTestnet;
exports.MemoSmartChain = MemoSmartChain;
exports.MeshnyanTestnet = MeshnyanTestnet;
exports.Metacodechain = Metacodechain;
exports.Metadium = Metadium;
exports.MetadiumTestnet = MetadiumTestnet;
exports.Metadot = Metadot;
exports.MetadotTestnet = MetadotTestnet;
exports.MetalCChain = MetalCChain;
exports.MetalTahoeCChain = MetalTahoeCChain;
exports.Metaplayerone = Metaplayerone;
exports.Meter = Meter;
exports.MeterTestnet = MeterTestnet;
exports.MetisAndromeda = MetisAndromeda;
exports.MetisGoerliTestnet = MetisGoerliTestnet;
exports.MilkomedaA1 = MilkomedaA1;
exports.MilkomedaA1Testnet = MilkomedaA1Testnet;
exports.MilkomedaC1 = MilkomedaC1;
exports.MilkomedaC1Testnet = MilkomedaC1Testnet;
exports.MintmeComCoin = MintmeComCoin;
exports.Mix = Mix;
exports.MixinVirtualMachine = MixinVirtualMachine;
exports.Moac = Moac;
exports.MoacTestnet = MoacTestnet;
exports.MolereumNetwork = MolereumNetwork;
exports.MoonbaseAlpha = MoonbaseAlpha;
exports.Moonbeam = Moonbeam;
exports.Moonriver = Moonriver;
exports.Moonrock = Moonrock;
exports.Multivac = Multivac;
exports.Mumbai = Mumbai;
exports.MunodeTestnet = MunodeTestnet;
exports.Musicoin = Musicoin;
exports.MyownTestnet = MyownTestnet;
exports.MythicalChain = MythicalChain;
exports.Nahmii = Nahmii;
exports.Nahmii3 = Nahmii3;
exports.Nahmii3Testnet = Nahmii3Testnet;
exports.NahmiiTestnet = NahmiiTestnet;
exports.Nebula = Nebula;
exports.NebulaStaging = NebulaStaging;
exports.NebulaTestnet = NebulaTestnet;
exports.NeonEvm = NeonEvm;
exports.NeonEvmDevnet = NeonEvmDevnet;
exports.NeonEvmTestnet = NeonEvmTestnet;
exports.NepalBlockchainNetwork = NepalBlockchainNetwork;
exports.Newton = Newton;
exports.NewtonTestnet = NewtonTestnet;
exports.NovaNetwork = NovaNetwork;
exports.Ntity = Ntity;
exports.Numbers = Numbers;
exports.NumbersTestnet = NumbersTestnet;
exports.OasisEmerald = OasisEmerald;
exports.OasisEmeraldTestnet = OasisEmeraldTestnet;
exports.OasisSapphire = OasisSapphire;
exports.OasisSapphireTestnet = OasisSapphireTestnet;
exports.Oasischain = Oasischain;
exports.Oasys = Oasys;
exports.Octaspace = Octaspace;
exports.Oho = Oho;
exports.Okbchain = Okbchain;
exports.OkbchainTestnet = OkbchainTestnet;
exports.OkexchainTestnet = OkexchainTestnet;
exports.Okxchain = Okxchain;
exports.OmPlatform = OmPlatform;
exports.Omax = Omax;
exports.Omchain = Omchain;
exports.Oneledger = Oneledger;
exports.OneledgerTestnetFrankenstein = OneledgerTestnetFrankenstein;
exports.Ontology = Ontology;
exports.OntologyTestnet = OntologyTestnet;
exports.OnusChain = OnusChain;
exports.OnusChainTestnet = OnusChainTestnet;
exports.OoneChainTestnet = OoneChainTestnet;
exports.Oort = Oort;
exports.OortAscraeus = OortAscraeus;
exports.OortDev = OortDev;
exports.OortHuygens = OortHuygens;
exports.OpalTestnetByUnique = OpalTestnetByUnique;
exports.Openchain = Openchain;
exports.OpenchainTestnet = OpenchainTestnet;
exports.Openpiece = Openpiece;
exports.OpenpieceTestnet = OpenpieceTestnet;
exports.Openvessel = Openvessel;
exports.OpsideTestnet = OpsideTestnet;
exports.Optimism = Optimism;
exports.OptimismBedrockGoerliAlphaTestnet = OptimismBedrockGoerliAlphaTestnet;
exports.OptimismGoerli = OptimismGoerli;
exports.OptimismKovan = OptimismKovan;
exports.OptimismOnGnosis = OptimismOnGnosis;
exports.OpulentXBeta = OpulentXBeta;
exports.OrigintrailParachain = OrigintrailParachain;
exports.OrlandoChain = OrlandoChain;
exports.Oychain = Oychain;
exports.OychainTestnet = OychainTestnet;
exports.P12Chain = P12Chain;
exports.PaletteChain = PaletteChain;
exports.Palm = Palm;
exports.PalmTestnet = PalmTestnet;
exports.Pandoproject = Pandoproject;
exports.PandoprojectTestnet = PandoprojectTestnet;
exports.ParibuNet = ParibuNet;
exports.ParibuNetTestnet = ParibuNetTestnet;
exports.Pdc = Pdc;
exports.Pegglecoin = Pegglecoin;
exports.PepchainChurchill = PepchainChurchill;
exports.PhiNetworkV1 = PhiNetworkV1;
exports.PhiNetworkV2 = PhiNetworkV2;
exports.Phoenix = Phoenix;
exports.PieceTestnet = PieceTestnet;
exports.Pirl = Pirl;
exports.PixieChain = PixieChain;
exports.PixieChainTestnet = PixieChainTestnet;
exports.Planq = Planq;
exports.Platon = Platon;
exports.PlatonDevTestnet2 = PlatonDevTestnet2;
exports.PlianMain = PlianMain;
exports.PlianSubchain1 = PlianSubchain1;
exports.PlianTestnetMain = PlianTestnetMain;
exports.PlianTestnetSubchain1 = PlianTestnetSubchain1;
exports.PoaNetworkCore = PoaNetworkCore;
exports.PoaNetworkSokol = PoaNetworkSokol;
exports.Pocrnet = Pocrnet;
exports.Polis = Polis;
exports.PolisTestnet = PolisTestnet;
exports.Polygon = Polygon;
exports.PolygonZkevmTestnet = PolygonZkevmTestnet;
exports.PolyjuiceTestnet = PolyjuiceTestnet;
exports.Polysmartchain = Polysmartchain;
exports.Popcateum = Popcateum;
exports.PortalFantasyChain = PortalFantasyChain;
exports.PortalFantasyChainTest = PortalFantasyChainTest;
exports.PosichainDevnetShard0 = PosichainDevnetShard0;
exports.PosichainDevnetShard1 = PosichainDevnetShard1;
exports.PosichainShard0 = PosichainShard0;
exports.PosichainTestnetShard0 = PosichainTestnetShard0;
exports.Primuschain = Primuschain;
exports.ProofOfMemes = ProofOfMemes;
exports.ProtonTestnet = ProtonTestnet;
exports.ProxyNetworkTestnet = ProxyNetworkTestnet;
exports.Publicmint = Publicmint;
exports.PublicmintDevnet = PublicmintDevnet;
exports.PublicmintTestnet = PublicmintTestnet;
exports.Pulsechain = Pulsechain;
exports.PulsechainTestnet = PulsechainTestnet;
exports.PulsechainTestnetV2b = PulsechainTestnetV2b;
exports.PulsechainTestnetV3 = PulsechainTestnetV3;
exports.Q = Q;
exports.QTestnet = QTestnet;
exports.Qeasyweb3Testnet = Qeasyweb3Testnet;
exports.Qitmeer = Qitmeer;
exports.QitmeerNetworkTestnet = QitmeerNetworkTestnet;
exports.Ql1 = Ql1;
exports.Ql1Testnet = Ql1Testnet;
exports.QuadransBlockchain = QuadransBlockchain;
exports.QuadransBlockchainTestnet = QuadransBlockchainTestnet;
exports.Quarkblockchain = Quarkblockchain;
exports.QuarkchainDevnetRoot = QuarkchainDevnetRoot;
exports.QuarkchainDevnetShard0 = QuarkchainDevnetShard0;
exports.QuarkchainDevnetShard1 = QuarkchainDevnetShard1;
exports.QuarkchainDevnetShard2 = QuarkchainDevnetShard2;
exports.QuarkchainDevnetShard3 = QuarkchainDevnetShard3;
exports.QuarkchainDevnetShard4 = QuarkchainDevnetShard4;
exports.QuarkchainDevnetShard5 = QuarkchainDevnetShard5;
exports.QuarkchainDevnetShard6 = QuarkchainDevnetShard6;
exports.QuarkchainDevnetShard7 = QuarkchainDevnetShard7;
exports.QuarkchainRoot = QuarkchainRoot;
exports.QuarkchainShard0 = QuarkchainShard0;
exports.QuarkchainShard1 = QuarkchainShard1;
exports.QuarkchainShard2 = QuarkchainShard2;
exports.QuarkchainShard3 = QuarkchainShard3;
exports.QuarkchainShard4 = QuarkchainShard4;
exports.QuarkchainShard5 = QuarkchainShard5;
exports.QuarkchainShard6 = QuarkchainShard6;
exports.QuarkchainShard7 = QuarkchainShard7;
exports.QuartzByUnique = QuartzByUnique;
exports.Quokkacoin = Quokkacoin;
exports.RabbitAnalogTestnetChain = RabbitAnalogTestnetChain;
exports.RangersProtocol = RangersProtocol;
exports.RangersProtocolTestnetRobin = RangersProtocolTestnetRobin;
exports.Realchain = Realchain;
exports.RedlightChain = RedlightChain;
exports.ReiChain = ReiChain;
exports.ReiChainTestnet = ReiChainTestnet;
exports.ReiNetwork = ReiNetwork;
exports.Resincoin = Resincoin;
exports.RikezaNetwork = RikezaNetwork;
exports.RikezaNetworkTestnet = RikezaNetworkTestnet;
exports.RiniaTestnet = RiniaTestnet;
exports.Rinkeby = Rinkeby;
exports.RiseOfTheWarbotsTestnet = RiseOfTheWarbotsTestnet;
exports.Ropsten = Ropsten;
exports.Rsk = Rsk;
exports.RskTestnet = RskTestnet;
exports.Rupaya = Rupaya;
exports.Saakuru = Saakuru;
exports.SaakuruTestnet = SaakuruTestnet;
exports.Sakura = Sakura;
exports.SanrChain = SanrChain;
exports.SapphireByUnique = SapphireByUnique;
exports.Sardis = Sardis;
exports.SardisTestnet = SardisTestnet;
exports.Scolcoin = Scolcoin;
exports.ScolcoinWeichainTestnet = ScolcoinWeichainTestnet;
exports.Scroll = Scroll;
exports.ScrollAlphaTestnet = ScrollAlphaTestnet;
exports.ScrollPreAlphaTestnet = ScrollPreAlphaTestnet;
exports.SeedcoinNetwork = SeedcoinNetwork;
exports.Seele = Seele;
exports.Sepolia = Sepolia;
exports.Setheum = Setheum;
exports.ShardeumLiberty1X = ShardeumLiberty1X;
exports.ShardeumLiberty2X = ShardeumLiberty2X;
exports.ShardeumSphinx1X = ShardeumSphinx1X;
exports.Sherpax = Sherpax;
exports.SherpaxTestnet = SherpaxTestnet;
exports.Shibachain = Shibachain;
exports.Shiden = Shiden;
exports.Shyft = Shyft;
exports.ShyftTestnet = ShyftTestnet;
exports.SiberiumNetwork = SiberiumNetwork;
exports.SingularityZero = SingularityZero;
exports.SingularityZeroTestnet = SingularityZeroTestnet;
exports.SiriusnetV2 = SiriusnetV2;
exports.Sjatsh = Sjatsh;
exports.SmartBitcoinCash = SmartBitcoinCash;
exports.SmartBitcoinCashTestnet = SmartBitcoinCashTestnet;
exports.SmartHostTeknolojiTestnet = SmartHostTeknolojiTestnet;
exports.Smartmesh = Smartmesh;
exports.SocialSmartChain = SocialSmartChain;
exports.SongbirdCanaryNetwork = SongbirdCanaryNetwork;
exports.Soterone = Soterone;
exports.Soverun = Soverun;
exports.SoverunTestnet = SoverunTestnet;
exports.Sps = Sps;
exports.SpsTestnet = SpsTestnet;
exports.StarSocialTestnet = StarSocialTestnet;
exports.StepNetwork = StepNetwork;
exports.StepTestnet = StepTestnet;
exports.Stratos = Stratos;
exports.StratosTestnet = StratosTestnet;
exports.StreamuxBlockchain = StreamuxBlockchain;
exports.SurBlockchainNetwork = SurBlockchainNetwork;
exports.Susono = Susono;
exports.SxNetwork = SxNetwork;
exports.SxNetworkTestnet = SxNetworkTestnet;
exports.Syscoin = Syscoin;
exports.SyscoinRolluxTestnet = SyscoinRolluxTestnet;
exports.SyscoinTanenbaumTestnet = SyscoinTanenbaumTestnet;
exports.TEAMBlockchain = TEAMBlockchain;
exports.TEkta = TEkta;
exports.TaoNetwork = TaoNetwork;
exports.Taraxa = Taraxa;
exports.TaraxaTestnet = TaraxaTestnet;
exports.Taycan = Taycan;
exports.TaycanTestnet = TaycanTestnet;
exports.Tbsi = Tbsi;
exports.TbsiTestnet = TbsiTestnet;
exports.TbwgChain = TbwgChain;
exports.TcgVerse = TcgVerse;
exports.Techpay = Techpay;
exports.Teleport = Teleport;
exports.TeleportTestnet = TeleportTestnet;
exports.TelosEvm = TelosEvm;
exports.TelosEvmTestnet = TelosEvmTestnet;
exports.Teslafunds = Teslafunds;
exports.Thaichain = Thaichain;
exports.Thaichain20Thaifi = Thaichain20Thaifi;
exports.Theta = Theta;
exports.ThetaAmberTestnet = ThetaAmberTestnet;
exports.ThetaSapphireTestnet = ThetaSapphireTestnet;
exports.ThetaTestnet = ThetaTestnet;
exports.ThinkiumChain0 = ThinkiumChain0;
exports.ThinkiumChain1 = ThinkiumChain1;
exports.ThinkiumChain103 = ThinkiumChain103;
exports.ThinkiumChain2 = ThinkiumChain2;
exports.ThinkiumTestnetChain0 = ThinkiumTestnetChain0;
exports.ThinkiumTestnetChain1 = ThinkiumTestnetChain1;
exports.ThinkiumTestnetChain103 = ThinkiumTestnetChain103;
exports.ThinkiumTestnetChain2 = ThinkiumTestnetChain2;
exports.Thundercore = Thundercore;
exports.ThundercoreTestnet = ThundercoreTestnet;
exports.Tipboxcoin = Tipboxcoin;
exports.TipboxcoinTestnet = TipboxcoinTestnet;
exports.TlchainNetwork = TlchainNetwork;
exports.TmyChain = TmyChain;
exports.TokiNetwork = TokiNetwork;
exports.TokiTestnet = TokiTestnet;
exports.TombChain = TombChain;
exports.Tomochain = Tomochain;
exports.TomochainTestnet = TomochainTestnet;
exports.ToolGlobal = ToolGlobal;
exports.ToolGlobalTestnet = ToolGlobalTestnet;
exports.Top = Top;
exports.TopEvm = TopEvm;
exports.Tres = Tres;
exports.TresTestnet = TresTestnet;
exports.TrustEvmTestnet = TrustEvmTestnet;
exports.UbSmartChain = UbSmartChain;
exports.UbSmartChainTestnet = UbSmartChainTestnet;
exports.Ubiq = Ubiq;
exports.UbiqNetworkTestnet = UbiqNetworkTestnet;
exports.Ultron = Ultron;
exports.UltronTestnet = UltronTestnet;
exports.UnicornUltraTestnet = UnicornUltraTestnet;
exports.Unique = Unique;
exports.UzmiNetwork = UzmiNetwork;
exports.Valorbit = Valorbit;
exports.Vchain = Vchain;
exports.Vechain = Vechain;
exports.VechainTestnet = VechainTestnet;
exports.Vela1Chain = Vela1Chain;
exports.VelasEvm = VelasEvm;
exports.Venidium = Venidium;
exports.VenidiumTestnet = VenidiumTestnet;
exports.VentionSmartChain = VentionSmartChain;
exports.VentionSmartChainTestnet = VentionSmartChainTestnet;
exports.Vision = Vision;
exports.VisionVpioneerTestChain = VisionVpioneerTestChain;
exports.VyvoSmartChain = VyvoSmartChain;
exports.Wagmi = Wagmi;
exports.Wanchain = Wanchain;
exports.WanchainTestnet = WanchainTestnet;
exports.Web3gamesDevnet = Web3gamesDevnet;
exports.Web3gamesTestnet = Web3gamesTestnet;
exports.Web3q = Web3q;
exports.Web3qGalileo = Web3qGalileo;
exports.Web3qTestnet = Web3qTestnet;
exports.Webchain = Webchain;
exports.WeelinkTestnet = WeelinkTestnet;
exports.WegochainRubidium = WegochainRubidium;
exports.Wemix30 = Wemix30;
exports.Wemix30Testnet = Wemix30Testnet;
exports.WorldTradeTechnicalChain = WorldTradeTechnicalChain;
exports.Xanachain = Xanachain;
exports.XdcApothemNetwork = XdcApothemNetwork;
exports.Xerom = Xerom;
exports.XinfinXdcNetwork = XinfinXdcNetwork;
exports.Xodex = Xodex;
exports.XtSmartChain = XtSmartChain;
exports.Yuanchain = Yuanchain;
exports.ZMainnet = ZMainnet;
exports.ZTestnet = ZTestnet;
exports.ZcoreTestnet = ZcoreTestnet;
exports.ZeethChain = ZeethChain;
exports.ZeethChainDev = ZeethChainDev;
exports.Zeniq = Zeniq;
exports.Zenith = Zenith;
exports.ZenithTestnetVilnius = ZenithTestnetVilnius;
exports.Zetachain = Zetachain;
exports.ZetachainAthensTestnet = ZetachainAthensTestnet;
exports.Zhejiang = Zhejiang;
exports.ZilliqaEvmTestnet = ZilliqaEvmTestnet;
exports.ZksyncEra = ZksyncEra;
exports.ZksyncEraTestnet = ZksyncEraTestnet;
exports.Zyx = Zyx;
exports._0xtade = _0xtade;
exports._4goodnetwork = _4goodnetwork;
exports.allChains = allChains;
exports.configureChain = configureChain;
exports.defaultChains = defaultChains;
exports.getChainByChainId = getChainByChainId;
exports.getChainBySlug = getChainBySlug;
exports.getChainRPC = getChainRPC;
exports.getChainRPCs = getChainRPCs;
exports.minimizeChain = minimizeChain;
