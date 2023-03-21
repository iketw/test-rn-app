import { TWConnector } from "../interfaces/tw-connector";
import { AbstractBrowserWallet, WalletOptions } from "./base";
import type { Chain } from "@thirdweb-dev/chains";
import { SafeConnectionArgs, SafeOptions } from "../connectors/safe/types";
export type { SafeConnectionArgs } from "../connectors/safe/types";
export declare class SafeWallet extends AbstractBrowserWallet<SafeOptions, SafeConnectionArgs> {
    connector?: TWConnector;
    static id: "safe-wallet";
    get walletName(): "Safe Wallet";
    constructor(options: WalletOptions<SafeOptions>);
    protected getConnector(): Promise<TWConnector>;
    updateChains(chains: Chain[]): Promise<void>;
}
//# sourceMappingURL=safe.d.ts.map