import { Address } from "../../schema";
import { SDKOptions } from "../../schema/sdk-options";
import { NetworkInput } from "../types";
import { RPCConnectionHandler } from "./rpc-connection-handler";
import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractInterface, ContractTransaction, ethers, providers } from "ethers";
/**
 * @internal
 */
export declare class ContractWrapper<TContract extends BaseContract> extends RPCConnectionHandler {
    #private;
    private isValidContract;
    private customOverrides;
    /**
     * @internal
     */
    writeContract: TContract;
    readContract: TContract;
    abi: ContractInterface;
    constructor(network: NetworkInput, contractAddress: string, contractAbi: ContractInterface, options: SDKOptions);
    updateSignerOrProvider(network: NetworkInput): void;
    /**
     * @internal
     */
    getChainID(): Promise<number>;
    /**
     * @internal
     */
    getSignerAddress(): Promise<Address>;
    /**
     * @internal
     */
    callStatic(): {
        [name: string]: ethers.ContractFunction<any>;
    };
    /**
     * @internal
     */
    getCallOverrides(): Promise<CallOverrides>;
    /**
     * Calculates the priority fee per gas according to user preferences
     * @param defaultPriorityFeePerGas - the base priority fee
     */
    private getPreferredPriorityFee;
    /**
     * Calculates the gas price for transactions according to user preferences
     */
    getPreferredGasPrice(): Promise<BigNumber>;
    /**
     * @internal
     */
    private emitTransactionEvent;
    /**
     * @internal
     */
    multiCall(encoded: string[]): Promise<providers.TransactionReceipt>;
    /**
     * @internal
     */
    estimateGas(fn: keyof TContract["functions"], args: any[]): Promise<BigNumber>;
    /**
     * @internal
     */
    withTransactionOverride(hook: () => CallOverrides): void;
    /**
     * @internal
     */
    call(functionName: string, ...args: unknown[] | [...unknown[], CallOverrides]): Promise<any>;
    /**
     * @internal
     */
    sendTransaction(fn: keyof TContract["functions"] | (string & {}), args: any[], callOverrides?: CallOverrides): Promise<providers.TransactionReceipt>;
    /**
     * @internal
     */
    sendTransactionByFunction(fn: keyof TContract["functions"], args: any[], callOverrides: CallOverrides): Promise<ContractTransaction>;
    private formatError;
    /**
     * @internal
     */
    private sendGaslessTransaction;
    signTypedData(signer: ethers.Signer, domain: {
        name: string;
        version: string;
        chainId: number;
        verifyingContract: string;
    }, types: any, message: any): Promise<BytesLike>;
    parseLogs<T = any>(eventName: string, logs?: providers.Log[]): T[];
    private defaultGaslessSendFunction;
    private biconomySendFunction;
    private defenderSendFunction;
}
//# sourceMappingURL=contract-wrapper.d.ts.map