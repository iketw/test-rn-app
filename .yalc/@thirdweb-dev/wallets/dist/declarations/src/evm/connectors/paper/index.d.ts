import { TWConnector } from "../../interfaces/tw-connector";
import { PaperWalletConnectionArgs, PaperWalletConnectorOptions } from "./types";
import type { Chain as PChain } from "@paperxyz/embedded-wallet-service-sdk";
import type { Chain } from "@thirdweb-dev/chains";
import type { providers, Signer } from "ethers";
export declare const PaperChainMap: Record<number, PChain>;
export declare class PaperWalletConnector extends TWConnector<PaperWalletConnectionArgs> {
    #private;
    readonly id: string;
    readonly name: string;
    ready: boolean;
    private user;
    private options;
    constructor(options: PaperWalletConnectorOptions);
    private getPaperSDK;
    connect(): Promise<string>;
    disconnect(): Promise<void>;
    getAddress(): Promise<string>;
    isConnected(): Promise<boolean>;
    getProvider(): Promise<providers.Provider>;
    getSigner(): Promise<Signer>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<void>;
    setupListeners(): Promise<void>;
    updateChains(chains: Chain[]): void;
    protected onAccountsChanged: (accounts: string[]) => Promise<void>;
    protected isChainUnsupported(chainId: number): boolean;
    protected onChainChanged: (chainId: number | string) => void;
    protected onDisconnect: () => Promise<void>;
}
//# sourceMappingURL=index.d.ts.map