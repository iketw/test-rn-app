import { Chain } from "@thirdweb-dev/chains";
/**
 * @public
 */
export declare enum ChainId {
    Mainnet = 1,
    Goerli = 5,
    Polygon = 137,
    Mumbai = 80001,
    Fantom = 250,
    FantomTestnet = 4002,
    Avalanche = 43114,
    AvalancheFujiTestnet = 43113,
    Optimism = 10,
    OptimismGoerli = 420,
    Arbitrum = 42161,
    ArbitrumGoerli = 421613,
    BinanceSmartChainMainnet = 56,
    BinanceSmartChainTestnet = 97
}
/**
 * @public
 */
export type SUPPORTED_CHAIN_ID = ChainId.Mainnet | ChainId.Goerli | ChainId.Mumbai | ChainId.Polygon | ChainId.Fantom | ChainId.FantomTestnet | ChainId.Avalanche | ChainId.AvalancheFujiTestnet | ChainId.Optimism | ChainId.OptimismGoerli | ChainId.Arbitrum | ChainId.ArbitrumGoerli | ChainId.BinanceSmartChainMainnet | ChainId.BinanceSmartChainTestnet;
/**
 * @public
 */
export declare const SUPPORTED_CHAIN_IDS: SUPPORTED_CHAIN_ID[];
/**
 * @public
 */
export declare const NATIVE_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export declare const DEFAULT_API_KEY = "c6634ad2d97b74baf15ff556016830c251050e6c36b9da508ce3ec80095d3dc1";
export declare function getRpcUrl(chainId: SUPPORTED_CHAIN_ID): string;
export declare const supportedChains: Record<SUPPORTED_CHAIN_ID, Chain>;
export declare const thirdwebChains: Chain[];
//# sourceMappingURL=chains.d.ts.map