/**
 * @returns the current active wallet instance
 */
export declare function useWallet(): import("../..").SupportedWalletInstance | undefined;
/**
 *
 * @returns `supportedWallets` configured in the `<ThirdwebProvider/>`
 */
export declare function useWallets(): import("../..").SupportedWallet<import("../..").SupportedWalletInstance>[];
/**
 *
 * @returns a method to connect to a wallet class
 */
export declare function useConnect(): <I extends import("../..").SupportedWalletInstance>(...args: undefined extends Parameters<I["connect"]>[0] ? [wallet: import("../..").SupportedWallet<I>] | [wallet: import("../..").SupportedWallet<I>, connectParams: Parameters<I["connect"]>[0] extends infer T ? T extends Parameters<I["connect"]>[0] ? T extends null | undefined ? never : T : never : never] : [wallet: import("../..").SupportedWallet<I>, connectParams: Parameters<I["connect"]>[0] extends infer T ? T extends Parameters<I["connect"]>[0] ? T extends null | undefined ? never : T : never : never]) => Promise<void>;
/**
 *
 * @returns a method to disconnect from the current active wallet
 */
export declare function useDisconnect(): () => Promise<void>;
/**
 *
 * @returns the connection status of the wallet
 *
 * It can be one of the following:
 * 1. `unknown` - when wallet connection status is not yet known
 * 2. `connecting` - when wallet is connecting
 * 3. `connected` - when wallet is connected
 * 4. `disconnected` - when wallet is disconnected
 *
 */
export declare function useConnectionStatus(): "unknown" | "connected" | "disconnected" | "connecting";
/**
 *
 * @returns a method to create an instance of given wallet class
 */
export declare function useCreateWalletInstance(): (Wallet: import("../..").SupportedWallet<import("../..").SupportedWalletInstance>) => import("../..").SupportedWalletInstance;
/**
 *
 * @returns a method to connect the wallet to network/chain with given chainId
 */
export declare function useSwitchChain(): (chain: number) => Promise<void>;
//# sourceMappingURL=wallet-hooks.d.ts.map