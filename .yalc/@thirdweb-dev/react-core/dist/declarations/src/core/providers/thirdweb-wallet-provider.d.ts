import { DAppMetaData } from "../types/dAppMeta";
import { SupportedWallet, SupportedWalletInstance } from "../types/wallet";
import { Chain } from "@thirdweb-dev/chains";
import { CreateAsyncStorage } from "@thirdweb-dev/wallets";
import { Signer } from "ethers";
import { PropsWithChildren } from "react";
type NonNullable<T> = T extends null | undefined ? never : T;
type WalletConnectParams<I extends SupportedWalletInstance> = Parameters<I["connect"]>[0];
type ConnectionStatus = "unknown" | "connected" | "disconnected" | "connecting";
type ConnectFnArgs<I extends SupportedWalletInstance> = undefined extends WalletConnectParams<I> ? [wallet: SupportedWallet<I>] | [
    wallet: SupportedWallet<I>,
    connectParams: NonNullable<WalletConnectParams<I>>
] : [
    wallet: SupportedWallet<I>,
    connectParams: NonNullable<WalletConnectParams<I>>
];
type ThirdwebWalletContextData = {
    wallets: SupportedWallet[];
    signer?: Signer;
    activeWallet?: InstanceType<SupportedWallet>;
    connect: <I extends SupportedWalletInstance>(...args: ConnectFnArgs<I>) => Promise<void>;
    disconnect: () => Promise<void>;
    connectionStatus: ConnectionStatus;
    setConnectionStatus: (status: ConnectionStatus) => void;
    createWalletInstance: (Wallet: SupportedWallet) => InstanceType<SupportedWallet>;
    createWalletStorage: CreateAsyncStorage;
    switchChain: (chain: number) => Promise<void>;
    chainToConnect?: Chain;
    activeChain?: Chain;
    handleWalletConnect: (walletId: InstanceType<SupportedWallet>) => void;
};
export declare function ThirdwebWalletProvider(props: PropsWithChildren<{
    activeChain?: Chain;
    supportedWallets: SupportedWallet[];
    shouldAutoConnect?: boolean;
    createWalletStorage: CreateAsyncStorage;
    dAppMeta: DAppMetaData;
    chains: Chain[];
    autoSwitch?: boolean;
}>): JSX.Element;
export declare function useThirdwebWallet(): ThirdwebWalletContextData | undefined;
export {};
//# sourceMappingURL=thirdweb-wallet-provider.d.ts.map