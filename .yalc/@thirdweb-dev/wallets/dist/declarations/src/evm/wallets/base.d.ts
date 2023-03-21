import { AsyncStorage } from "../../core/AsyncStorage";
import type { DAppMetaData } from "../../core/types/dAppMeta";
import { ConnectParams, TWConnector } from "../interfaces/tw-connector";
import { AbstractWallet } from "./abstract";
import type { Chain } from "@thirdweb-dev/chains";
export type WalletOptions<TOpts extends Record<string, any> = {}> = {
    chains?: Chain[];
    shouldAutoConnect?: boolean;
    walletId?: string;
    coordinatorStorage?: AsyncStorage;
    walletStorage?: AsyncStorage;
    dappMetadata: DAppMetaData;
} & TOpts;
export type WalletMeta = {
    name: string;
    iconURL: string;
};
export declare abstract class AbstractBrowserWallet<TAdditionalOpts extends Record<string, any> = {}, TConnectParams extends Record<string, any> = {}> extends AbstractWallet {
    #private;
    walletId: string;
    protected coordinatorStorage: AsyncStorage;
    protected walletStorage: AsyncStorage;
    protected chains: Chain[];
    protected options: WalletOptions<TAdditionalOpts>;
    static meta: WalletMeta;
    getMeta(): WalletMeta;
    constructor(walletId: string, options: WalletOptions<TAdditionalOpts>);
    protected abstract getConnector(): Promise<TWConnector<TConnectParams>>;
    /**
     * connect to the wallet if the last connected wallet is this wallet and not already connected
     */
    autoConnect(): Promise<string | undefined>;
    /**
     * connect to the wallet
     */
    connect(connectOptions?: ConnectParams<TConnectParams>): Promise<string>;
    getSigner(): Promise<import("ethers").Signer>;
    protected onDisconnect(): Promise<void>;
    disconnect(): Promise<void>;
    switchChain(chainId: number): Promise<void>;
    updateChains(chains: Chain[]): Promise<void>;
}
//# sourceMappingURL=base.d.ts.map