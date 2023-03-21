import { AsyncStorage } from "../../core/AsyncStorage";
import type { WalletConnectV1Connector as WalletConnectV1ConnectorType } from "../connectors/wallet-connect-v1";
import { TWConnector } from "../interfaces/tw-connector";
import { AbstractBrowserWallet, WalletOptions } from "./base";
export type MetamaskWalletOptions = WalletOptions<{
    connectorStorage?: AsyncStorage;
    isInjected?: boolean;
}>;
type ConnectWithQrCodeArgs = {
    chainId?: number;
    onQrCodeUri: (uri: string) => void;
    onConnected: (accountAddress: string) => void;
};
export declare class MetaMask extends AbstractBrowserWallet {
    connector?: TWConnector;
    connectorStorage: AsyncStorage;
    isInjected?: boolean;
    walletConnectConnector?: WalletConnectV1ConnectorType;
    static meta: {
        name: string;
        iconURL: string;
    };
    static id: "metamask";
    get walletName(): "MetaMask";
    constructor(options: MetamaskWalletOptions);
    protected getConnector(): Promise<TWConnector>;
    /**
     * connect to wallet with QR code
     *
     * @example
     * ```typescript
     * metamask.connectWithQrCode({
     *  chainId: 1,
     *  onQrCodeUri(qrCodeUri) {
     *    // render the QR code with `qrCodeUri`
     *  },
     *  onConnected(accountAddress)  {
     *    // update UI to show connected state
     *  },
     * })
     * ```
     */
    connectWithQrCode(options: ConnectWithQrCodeArgs): Promise<void>;
}
export {};
//# sourceMappingURL=metamask.d.ts.map