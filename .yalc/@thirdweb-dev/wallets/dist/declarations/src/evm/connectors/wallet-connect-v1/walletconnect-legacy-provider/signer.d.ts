import type { IWCEthRpcConnectionOptionsWithSession } from "./types";
import { IJsonRpcConnection, JsonRpcError } from "@walletconnect/jsonrpc-types";
import { IConnector } from "@walletconnect/legacy-types";
export declare class SignerConnection extends IJsonRpcConnection {
    events: any;
    accounts: string[];
    chainId: number;
    private pending;
    private wc;
    private bridge;
    private qrcode;
    private qrcodeModalOptions;
    private opts;
    constructor(opts?: IWCEthRpcConnectionOptionsWithSession);
    get connected(): boolean;
    get connecting(): boolean;
    get connector(): IConnector;
    on(event: string, listener: any): void;
    once(event: string, listener: any): void;
    off(event: string, listener: any): void;
    removeListener(event: string, listener: any): void;
    open(chainId?: number): Promise<void>;
    close(): Promise<void>;
    send(payload: any): Promise<void>;
    sendAsync(payload: any): Promise<void>;
    private register;
    private onOpen;
    private onClose;
    onError(payload: any, message?: string, code?: number): JsonRpcError;
    private create;
    private registerConnectorEvents;
    private sendPayload;
    private sanitizeResponse;
}
export default SignerConnection;
//# sourceMappingURL=signer.d.ts.map