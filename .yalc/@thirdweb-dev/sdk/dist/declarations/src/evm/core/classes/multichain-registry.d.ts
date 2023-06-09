import { NetworkInput, Transaction } from "..";
import { AddressOrEns } from "../../schema";
import { PublishedMetadata } from "../../schema/contracts/custom";
import { SDKOptions } from "../../schema/sdk-options";
import { AddContractInput, ContractInput, DeployedContract } from "../../types";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * @internal
 */
export declare class MultichainRegistry {
    private registryLogic;
    private registryRouter;
    private storage;
    constructor(network: NetworkInput, storage: ThirdwebStorage, options?: SDKOptions);
    updateSigner(signer: NetworkInput): Promise<void>;
    getContractMetadataURI(chainId: number, address: AddressOrEns): Promise<string>;
    getContractMetadata(chainId: number, address: AddressOrEns): Promise<PublishedMetadata>;
    getContractAddresses(walletAddress: AddressOrEns): Promise<DeployedContract[]>;
    addContract: {
        (contract: AddContractInput): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (contract: AddContractInput) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    addContracts: {
        (contracts: AddContractInput[]): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (contracts: AddContractInput[]) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    removeContract: {
        (contract: ContractInput): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (contract: ContractInput) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    removeContracts: {
        (contracts: ContractInput[]): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (contracts: ContractInput[]) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=multichain-registry.d.ts.map