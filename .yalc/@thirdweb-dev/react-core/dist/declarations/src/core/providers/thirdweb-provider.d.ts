import { ThirdwebAuthConfig } from "../../evm/contexts/thirdweb-auth";
import { DAppMetaData } from "../types/dAppMeta";
import { SupportedWallet } from "../types/wallet";
import { QueryClient } from "@tanstack/react-query";
import { Chain, defaultChains } from "@thirdweb-dev/chains";
import type { SDKOptions } from "@thirdweb-dev/sdk";
import type { ThirdwebStorage } from "@thirdweb-dev/storage";
import { CreateAsyncStorage } from "@thirdweb-dev/wallets";
import React from "react";
/**
 * The possible props for the ThirdwebProvider.
 */
export interface ThirdwebProviderCoreProps<TChains extends Chain[] = typeof defaultChains> {
    /**
     * The network to use for the SDK.
     */
    activeChain?: TChains[number]["chainId"] | TChains[number]["slug"] | Chain;
    /**
     * Chains to support. If not provided, will default to the chains supported by the SDK.
     */
    supportedChains?: TChains;
    /**
     * The {@link SDKOptions | Thirdweb SDK Options} to pass to the thirdweb SDK
     * comes with sensible defaults
     */
    sdkOptions?: SDKOptions;
    /**
     * An array of wallets that the dApp supports
     * If not provided, will default to Metamask (injected), Coinbase wallet and Device wallet
     *
     * @example
     * You can Import the wallets you want to support from `@thirdweb-dev/wallets` and pass them to `supportedWallets`
     *
     * ```jsx title="App.jsx"
     * import { ThirdwebProvider } from "@thirdweb-dev/react";
     *
     * const App = () => {
     *   return (
     *     <ThirdwebProvider>
     *       <YourApp />
     *     </ThirdwebProvider>
     *   );
     * };
     * ```
     */
    supportedWallets: SupportedWallet[];
    /**
     * Metadata to pass to wallet connect and walletlink wallet connect. (Used to show *which* dApp is being connected to in mobile wallets that support it)
     * Defaults to just the name being passed as `thirdweb powered dApp`.
     */
    dAppMeta?: DAppMetaData;
    /**
     * The configuration used for thirdweb auth usage. Enables users to login
     * to backends with their wallet.
     */
    authConfig?: ThirdwebAuthConfig;
    /**
     * The storage interface to use with the sdk.
     */
    storageInterface?: ThirdwebStorage;
    /**
     * The react-query client to use. (Defaults to a default client.)
     */
    queryClient?: QueryClient;
    /**
     * Whether or not to attempt auto-connect to a wallet.
     */
    autoConnect?: boolean;
    thirdwebApiKey?: string;
    alchemyApiKey?: string;
    infuraApiKey?: string;
    theme?: "light" | "dark";
    createWalletStorage?: CreateAsyncStorage;
    /**
     * Whether or not to automatically switch to wallet's network to active chain
     */
    autoSwitch?: boolean;
}
export declare const ThirdwebProviderCore: <TChains extends Chain[] = ({
    readonly name: "Ethereum Mainnet";
    readonly chain: "ETH";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly rpc: readonly ["https://ethereum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com", "https://ethereum.publicnode.com"];
    readonly features: readonly [{
        readonly name: "EIP1559";
    }, {
        readonly name: "EIP155";
    }];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://ethereum.org";
    readonly shortName: "eth";
    readonly chainId: 1;
    readonly networkId: 1;
    readonly slip44: 60;
    readonly ens: {
        readonly registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
    };
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://etherscan.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "ethereum";
} | {
    readonly name: "Goerli";
    readonly title: "Ethereum Testnet Goerli";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://goerli.infura.io/v3/${INFURA_API_KEY}", "wss://goerli.infura.io/v3/${INFURA_API_KEY}", "https://rpc.goerli.mudit.blog/"];
    readonly faucets: readonly ["https://faucet.paradigm.xyz/", "http://fauceth.komputing.org?chain=5&address=${ADDRESS}", "https://goerli-faucet.slock.it?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"];
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://goerli.net/#about";
    readonly shortName: "gor";
    readonly chainId: 5;
    readonly networkId: 5;
    readonly ens: {
        readonly registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010";
    };
    readonly explorers: readonly [{
        readonly name: "etherscan-goerli";
        readonly url: "https://goerli.etherscan.io";
        readonly standard: "EIP3091";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly testnet: true;
    readonly slug: "goerli";
} | {
    readonly name: "Optimism";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://optimism.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://mainnet.optimism.io/"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://optimism.io";
    readonly shortName: "oeth";
    readonly chainId: 10;
    readonly networkId: 10;
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://optimistic.etherscan.io";
        readonly standard: "EIP3091";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly testnet: false;
    readonly slug: "optimism";
} | {
    readonly name: "Binance Smart Chain Mainnet";
    readonly chain: "BSC";
    readonly rpc: readonly ["https://binance.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "wss://bsc-ws-node.nariox.org", "https://bsc.publicnode.com", "https://bsc-dataseed4.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed4.binance.org", "https://bsc-dataseed3.binance.org", "https://bsc-dataseed2.binance.org", "https://bsc-dataseed1.binance.org"];
    readonly faucets: readonly ["https://free-online-app.com/faucet-for-eth-evm-chains/"];
    readonly nativeCurrency: {
        readonly name: "Binance Chain Native Token";
        readonly symbol: "BNB";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.binance.org";
    readonly shortName: "bnb";
    readonly chainId: 56;
    readonly networkId: 56;
    readonly slip44: 714;
    readonly explorers: readonly [{
        readonly name: "bscscan";
        readonly url: "https://bscscan.com";
        readonly standard: "EIP3091";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly testnet: false;
    readonly slug: "binance";
} | {
    readonly name: "Binance Smart Chain Testnet";
    readonly chain: "BSC";
    readonly rpc: readonly ["https://binance-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://data-seed-prebsc-2-s3.binance.org:8545", "https://data-seed-prebsc-1-s3.binance.org:8545", "https://data-seed-prebsc-2-s2.binance.org:8545", "https://data-seed-prebsc-1-s2.binance.org:8545", "https://data-seed-prebsc-2-s1.binance.org:8545", "https://data-seed-prebsc-1-s1.binance.org:8545"];
    readonly faucets: readonly ["https://testnet.binance.org/faucet-smart"];
    readonly nativeCurrency: {
        readonly name: "Binance Chain Native Token";
        readonly symbol: "tBNB";
        readonly decimals: 18;
    };
    readonly infoURL: "https://testnet.binance.org/";
    readonly shortName: "bnbt";
    readonly chainId: 97;
    readonly networkId: 97;
    readonly explorers: readonly [{
        readonly name: "bscscan-testnet";
        readonly url: "https://testnet.bscscan.com";
        readonly standard: "EIP3091";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly testnet: true;
    readonly slug: "binance-testnet";
} | {
    readonly name: "Polygon Mainnet";
    readonly chain: "Polygon";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly rpc: readonly ["https://polygon.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://polygon-rpc.com/", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com", "https://polygon-bor.publicnode.com"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly infoURL: "https://polygon.technology/";
    readonly shortName: "matic";
    readonly chainId: 137;
    readonly networkId: 137;
    readonly slip44: 966;
    readonly explorers: readonly [{
        readonly name: "polygonscan";
        readonly url: "https://polygonscan.com";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "polygon";
} | {
    readonly name: "Fantom Opera";
    readonly chain: "FTM";
    readonly rpc: readonly ["https://fantom.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://fantom.publicnode.com", "https://rpc.ftm.tools"];
    readonly faucets: readonly ["https://free-online-app.com/faucet-for-eth-evm-chains/"];
    readonly nativeCurrency: {
        readonly name: "Fantom";
        readonly symbol: "FTM";
        readonly decimals: 18;
    };
    readonly infoURL: "https://fantom.foundation";
    readonly shortName: "ftm";
    readonly chainId: 250;
    readonly networkId: 250;
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly explorers: readonly [{
        readonly name: "ftmscan";
        readonly url: "https://ftmscan.com";
        readonly icon: "ftmscan";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "fantom";
} | {
    readonly name: "Optimism Goerli Testnet";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://optimism-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://opt-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://optimism-goerli.infura.io/v3/${INFURA_API_KEY}", "https://goerli.optimism.io/"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://optimism.io";
    readonly shortName: "ogor";
    readonly chainId: 420;
    readonly networkId: 420;
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly testnet: true;
    readonly slug: "optimism-goerli";
} | {
    readonly name: "Fantom Testnet";
    readonly chain: "FTM";
    readonly rpc: readonly ["https://fantom-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.fantom.network"];
    readonly faucets: readonly ["https://faucet.fantom.network"];
    readonly nativeCurrency: {
        readonly name: "Fantom";
        readonly symbol: "FTM";
        readonly decimals: 18;
    };
    readonly infoURL: "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet";
    readonly shortName: "tftm";
    readonly chainId: 4002;
    readonly networkId: 4002;
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly explorers: readonly [{
        readonly name: "ftmscan";
        readonly url: "https://testnet.ftmscan.com";
        readonly icon: "ftmscan";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "fantom-testnet";
} | {
    readonly name: "Arbitrum One";
    readonly chainId: 42161;
    readonly shortName: "arb1";
    readonly chain: "ETH";
    readonly networkId: 42161;
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpc: readonly ["https://arbitrum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://arb1.arbitrum.io/rpc"];
    readonly faucets: readonly [];
    readonly explorers: readonly [{
        readonly name: "Arbitrum Explorer";
        readonly url: "https://explorer.arbitrum.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "Arbiscan";
        readonly url: "https://arbiscan.io";
        readonly standard: "EIP3091";
    }];
    readonly infoURL: "https://arbitrum.io";
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://bridge.arbitrum.io";
        }];
    };
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly testnet: false;
    readonly slug: "arbitrum";
} | {
    readonly name: "Avalanche Fuji Testnet";
    readonly chain: "AVAX";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly rpc: readonly ["https://avalanche-fuji.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-fuji.infura.io/v3/${INFURA_API_KEY}", "https://api.avax-test.network/ext/bc/C/rpc"];
    readonly faucets: readonly ["https://faucet.avax-test.network/"];
    readonly nativeCurrency: {
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
        readonly decimals: 18;
    };
    readonly infoURL: "https://cchain.explorer.avax-test.network";
    readonly shortName: "Fuji";
    readonly chainId: 43113;
    readonly networkId: 1;
    readonly explorers: readonly [{
        readonly name: "snowtrace";
        readonly url: "https://testnet.snowtrace.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "avalanche-fuji";
} | {
    readonly name: "Avalanche C-Chain";
    readonly chain: "AVAX";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly rpc: readonly ["https://avalanche.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://api.avax.network/ext/bc/C/rpc", "https://avalanche-c-chain.publicnode.com"];
    readonly features: readonly [{
        readonly name: "EIP1559";
    }];
    readonly faucets: readonly ["https://free-online-app.com/faucet-for-eth-evm-chains/"];
    readonly nativeCurrency: {
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.avax.network/";
    readonly shortName: "avax";
    readonly chainId: 43114;
    readonly networkId: 43114;
    readonly slip44: 9005;
    readonly explorers: readonly [{
        readonly name: "snowtrace";
        readonly url: "https://snowtrace.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "avalanche";
} | {
    readonly name: "Mumbai";
    readonly title: "Polygon Testnet Mumbai";
    readonly chain: "Polygon";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly rpc: readonly ["https://mumbai.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://polygon-mumbai.infura.io/v3/${INFURA_API_KEY}", "https://matic-mumbai.chainstacklabs.com", "https://rpc-mumbai.maticvigil.com", "https://matic-testnet-archive-rpc.bwarelabs.com"];
    readonly faucets: readonly ["https://faucet.polygon.technology/"];
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly infoURL: "https://polygon.technology/";
    readonly shortName: "maticmum";
    readonly chainId: 80001;
    readonly networkId: 80001;
    readonly explorers: readonly [{
        readonly name: "polygonscan";
        readonly url: "https://mumbai.polygonscan.com";
        readonly standard: "EIP3091";
    }];
    readonly testnet: true;
    readonly slug: "mumbai";
} | {
    readonly name: "Arbitrum Goerli";
    readonly title: "Arbitrum Goerli Rollup Testnet";
    readonly chainId: 421613;
    readonly shortName: "arb-goerli";
    readonly chain: "ETH";
    readonly networkId: 421613;
    readonly nativeCurrency: {
        readonly name: "Arbitrum Goerli Ether";
        readonly symbol: "AGOR";
        readonly decimals: 18;
    };
    readonly rpc: readonly ["https://arbitrum-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://abritrum-goerli.infura.io/v3/${INFURA_API_KEY}", "https://goerli-rollup.arbitrum.io/rpc/"];
    readonly faucets: readonly [];
    readonly infoURL: "https://arbitrum.io/";
    readonly explorers: readonly [{
        readonly name: "Arbitrum Goerli Rollup Explorer";
        readonly url: "https://goerli-rollup-explorer.arbitrum.io";
        readonly standard: "EIP3091";
    }];
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-5";
        readonly bridges: readonly [{
            readonly url: "https://bridge.arbitrum.io/";
        }];
    };
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly testnet: true;
    readonly slug: "arbitrum-goerli";
} | {
    readonly name: "Localhost";
    readonly chain: "ETH";
    readonly rpc: readonly ["http://localhost:8545"];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [16, 32, 64, 128, 256, 512];
    };
    readonly shortName: "local";
    readonly chainId: 1337;
    readonly networkId: 1337;
    readonly testnet: true;
    readonly slug: "localhost";
})[]>({ createWalletStorage, ...props }: React.PropsWithChildren<ThirdwebProviderCoreProps<TChains>>) => JSX.Element;
//# sourceMappingURL=thirdweb-provider.d.ts.map