import type { WalletMobileSDKEVMProvider, WalletMobileSDKProviderOptions } from "@coinbase/wallet-mobile-sdk/build/WalletMobileSDKEVMProvider";
import type { ConfigurationParams } from "@coinbase/wallet-mobile-sdk/src/CoinbaseWalletSDK.types";
import { Chain } from "@thirdweb-dev/wallets";
import { Connector } from "@thirdweb-dev/wallets";
import { providers } from "ethers";
export type CoinbaseWalletConnectorOptions = WalletMobileSDKProviderOptions & ConfigurationParams & {
    /**
     * Fallback Ethereum JSON RPC URL
     * @default ""
     */
    jsonRpcUrl?: string;
    /**
     * Fallback Ethereum Chain ID
     * @default 1
     */
    chainId?: number;
};
export declare class CoinbaseWalletConnector extends Connector<WalletMobileSDKEVMProvider, CoinbaseWalletConnectorOptions, providers.JsonRpcSigner> {
    readonly id = "coinbaseWallet";
    readonly name = "Coinbase Wallet";
    readonly ready = true;
    provider?: WalletMobileSDKEVMProvider;
    constructor({ chains, options, }: {
        chains?: Chain[];
        options: CoinbaseWalletConnectorOptions;
    });
    connect({ chainId }?: {
        chainId?: number;
    }): Promise<{
        account: `0x${string}`;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: providers.Web3Provider;
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider(): Promise<WalletMobileSDKEVMProvider>;
    getSigner({ chainId }?: {
        chainId?: number;
    }): Promise<providers.JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<Chain>;
    watchAsset({ address, decimals, image, symbol, }: {
        address: string;
        decimals?: number;
        image?: string;
        symbol: string;
    }): Promise<boolean>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => void;
    setupListeners(): Promise<void>;
    removeListeners(): void;
    protected onDisconnect: () => void;
    isUserRejectedRequestError(error: unknown): boolean;
}
