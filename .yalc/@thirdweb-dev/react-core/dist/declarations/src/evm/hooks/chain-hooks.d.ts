import { ThirdwebSDKProviderProps } from "../providers/types";
export declare function useUpdateChainsWithApiKeys(supportedChains: NonNullable<ThirdwebSDKProviderProps["supportedChains"]>, activeChain: ThirdwebSDKProviderProps["activeChain"], thirdwebApiKey?: string, alchemyApiKey?: string, infuraApiKey?: string): readonly [{
    rpc: string[];
    name: string;
    chain: string;
    icon?: {
        url: string;
        width: number;
        height: number;
        format: string;
        sizes?: readonly number[] | undefined;
    } | undefined;
    features?: readonly {
        name: string;
    }[] | undefined;
    faucets?: readonly string[] | undefined;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    infoURL?: string | undefined;
    shortName: string;
    chainId: number;
    networkId?: number | undefined;
    ens?: {
        registry: string;
    } | undefined;
    explorers?: readonly {
        name: string;
        url: string;
        standard: string;
    }[] | undefined;
    testnet: boolean;
    slug: string;
    slip44?: number | undefined;
    status?: string | undefined;
}[], 1 | "ethereum" | 5 | "goerli" | 10 | "optimism" | 56 | "binance" | 97 | "binance-testnet" | 137 | "polygon" | 250 | "fantom" | 420 | "optimism-goerli" | 4002 | "fantom-testnet" | 42161 | "arbitrum" | 43113 | "avalanche-fuji" | 43114 | "avalanche" | 80001 | "mumbai" | 421613 | "arbitrum-goerli" | 1337 | "localhost" | {
    rpc: string[];
    name: string;
    chain: string;
    icon?: {
        url: string;
        width: number;
        height: number;
        format: string;
        sizes?: readonly number[] | undefined;
    } | undefined;
    features?: readonly {
        name: string;
    }[] | undefined;
    faucets?: readonly string[] | undefined;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    infoURL?: string | undefined;
    shortName: string;
    chainId: number;
    networkId?: number | undefined;
    ens?: {
        registry: string;
    } | undefined;
    explorers?: readonly {
        name: string;
        url: string;
        standard: string;
    }[] | undefined;
    testnet: boolean;
    slug: string;
    slip44?: number | undefined;
    status?: string | undefined;
} | undefined];
//# sourceMappingURL=chain-hooks.d.ts.map