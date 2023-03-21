import { PaperWalletConnectionArgs, PaperWalletAdditionalOptions } from "../connectors/paper/types";
import { TWConnector } from "../interfaces/tw-connector";
import { AbstractBrowserWallet, WalletOptions } from "./base";
import type { Chain } from "@thirdweb-dev/chains";
export type PaperWalletOptions = WalletOptions<PaperWalletAdditionalOptions>;
export declare class PaperWallet extends AbstractBrowserWallet<PaperWalletAdditionalOptions, PaperWalletConnectionArgs> {
    connector?: TWConnector;
    static id: "PaperWallet";
    static meta: {
        name: string;
        iconURL: string;
    };
    get walletName(): "Paper Wallet";
    constructor(options: PaperWalletOptions);
    protected getConnector(): Promise<TWConnector>;
    updateChains(chains: Chain[]): Promise<void>;
}
//# sourceMappingURL=paper-wallet.d.ts.map