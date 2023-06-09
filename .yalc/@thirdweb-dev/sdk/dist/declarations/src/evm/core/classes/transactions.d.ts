import { SDKOptionsOutput } from "../../schema/sdk-options";
import { ParseTransactionReceipt, TransactionOptionsWithContract, TransactionOptionsWithContractInfo, TransactionOptionsWithContractWrapper } from "../../types/transactions";
import { TransactionResult } from "../types";
import type { CallOverrides, ethers } from "ethers";
import { BigNumber } from "ethers";
export declare class Transaction<TResult = TransactionResult> {
    private contract;
    private method;
    private args;
    private overrides;
    private provider;
    private signer;
    private storage;
    private gaslessOptions?;
    private parse?;
    private gasMultiple?;
    static fromContractWrapper<TContract extends ethers.BaseContract, TResult = TransactionResult>(options: TransactionOptionsWithContractWrapper<TContract, TResult>): Transaction<TResult>;
    static fromContractInfo<TResult = TransactionResult>(options: TransactionOptionsWithContractInfo<TResult>): Promise<Transaction<TResult>>;
    constructor(options: TransactionOptionsWithContract<TResult>);
    getMethod(): string;
    getArgs(): any[];
    getOverrides(): CallOverrides;
    getValue(): ethers.BigNumberish | Promise<ethers.BigNumberish>;
    getGaslessOptions(): {
        openzeppelin: {
            relayerUrl: string;
            useEOAForwarder: boolean;
            relayerForwarderAddress?: string | undefined;
        };
        experimentalChainlessSupport: boolean;
    } | {
        biconomy: {
            apiId: string;
            apiKey: string;
            deadlineSeconds: number;
        };
    } | undefined;
    setArgs(args: any[]): Transaction<TResult>;
    setOverrides(overrides: CallOverrides): Transaction<TResult>;
    updateOverrides(overrides: CallOverrides): Transaction<TResult>;
    setValue(value: CallOverrides["value"]): Transaction<TResult>;
    setGasLimit(gasLimit: CallOverrides["gasLimit"]): Transaction<TResult>;
    setGasPrice(gasPrice: CallOverrides["gasPrice"]): Transaction<TResult>;
    setNonce(nonce: CallOverrides["nonce"]): Transaction<TResult>;
    setMaxFeePerGas(maxFeePerGas: CallOverrides["maxFeePerGas"]): Transaction<TResult>;
    setMaxPriorityFeePerGas(maxPriorityFeePerGas: CallOverrides["maxPriorityFeePerGas"]): Transaction<TResult>;
    setType(type: CallOverrides["type"]): Transaction<TResult>;
    setAccessList(accessList: CallOverrides["accessList"]): Transaction<TResult>;
    setCustomData(customData: CallOverrides["customData"]): Transaction<TResult>;
    setCcipReadEnabled(ccipReadEnabled: CallOverrides["ccipReadEnabled"]): Transaction<TResult>;
    setGaslessOptions(options: SDKOptionsOutput["gasless"]): Transaction<TResult>;
    setParse(parse: ParseTransactionReceipt<TResult>): Transaction<TResult>;
    /**
     * Set a multiple to multiply the gas limit by
     *
     * @example
     * ```js
     * // Set the gas limit multiple to 1.2 (increase by 20%)
     * tx.setGasLimitMultiple(1.2)
     * ```
     */
    setGasLimitMultiple(factor: number): void;
    /**
     * Encode the function data for this transaction
     */
    encode(): string;
    /**
     * Get the signed transaction
     */
    sign(): Promise<string>;
    /**
     * Simulate the transaction on-chain without executing
     */
    simulate(): Promise<any>;
    /**
     * Estimate the gas limit of this transaction
     */
    estimateGasLimit(): Promise<ethers.BigNumber>;
    /**
     * Estimate the total gas cost of this transaction (in both ether and wei)
     */
    estimateGasCost(): Promise<{
        ether: string;
        wei: ethers.BigNumber;
    }>;
    /**
     * Send the transaction without waiting for it to be mined.
     */
    send(): Promise<ethers.ContractTransaction>;
    /**
     * Send the transaction and wait for it to be mined
     */
    execute(): Promise<TResult>;
    /**
     * Get the address of the transaction signer
     */
    private getSignerAddress;
    /**
     * Execute the transaction with gasless
     */
    private sendGasless;
    /**
     * Get gas overrides for the transaction
     */
    private getGasOverrides;
    /**
     * Calculates the priority fee per gas according (adding a 10% buffer)
     */
    private getPreferredPriorityFee;
    /**
     * Calculates the gas price for transactions (adding a 10% tip buffer)
     */
    getGasPrice(): Promise<BigNumber>;
    private functionError;
    /**
     * Create a nicely formatted error message with tx metadata and solidity stack trace
     */
    private transactionError;
}
//# sourceMappingURL=transactions.d.ts.map