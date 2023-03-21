import type { AbstractBrowserWallet, AsyncStorage, Chain, DAppMetaData, TWConnector } from "@thirdweb-dev/wallets";
export type ExtraCoreWalletOptions = {
    theme?: "light" | "dark";
    chain: Chain;
};
export type WalletOptions = {
    chains?: Chain[];
    shouldAutoConnect?: boolean;
    walletId?: string;
    coordinatorStorage: AsyncStorage;
    dappMetadata: DAppMetaData;
} & ExtraCoreWalletOptions;
export type SupportedWalletInstance = InstanceType<typeof AbstractBrowserWallet> & {
    connector?: TWConnector;
};
export type SupportedWallet<X extends SupportedWalletInstance = SupportedWalletInstance> = {
    id: string;
    new (options: WalletOptions): X;
    meta: (typeof AbstractBrowserWallet)["meta"];
};
//# sourceMappingURL=wallet.d.ts.map