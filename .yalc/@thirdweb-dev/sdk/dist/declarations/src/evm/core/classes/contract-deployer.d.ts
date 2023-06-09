import { Address, AddressOrEns, SDKOptions } from "../../schema";
import { DeployEvent, DeployOptions, MarketplaceContractDeployMetadata, MarketplaceV3ContractDeployMetadata, MultiwrapContractDeployMetadata, NFTContractDeployMetadata, SplitContractDeployMetadata, TokenContractDeployMetadata, VoteContractDeployMetadata } from "../../types";
import { DeploySchemaForPrebuiltContractType, NetworkInput, PrebuiltContractType } from "../types";
import { ContractRegistry } from "./registry";
import { RPCConnectionHandler } from "./rpc-connection-handler";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BytesLike, ContractInterface } from "ethers";
import { z } from "zod";
/**
 * Handles deploying new contracts
 * @public
 */
export declare class ContractDeployer extends RPCConnectionHandler {
    /**
     * @internal
     * should never be accessed directly, use {@link ContractDeployer.getFactory} instead
     */
    private _factory;
    /**
     * @internal
     * should never be accessed directly, use {@link ContractDeployer.getRegistry} instead
     */
    private _registry;
    private storage;
    private events;
    private deployMetadataCache;
    private transactionListener;
    constructor(network: NetworkInput, options: SDKOptions, storage: ThirdwebStorage);
    /**
     * Deploys an NFT Collection contract
     *
     * @remarks Deploys an NFT Collection contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployNFTCollection({
     *   name: "My Collection",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployNFTCollection(metadata: NFTContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new NFTDrop contract
     *
     * @remarks Deploys an NFT Drop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployNFTDrop({
     *   name: "My Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployNFTDrop(metadata: NFTContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new SignatureDrop contract
     *
     * @remarks Deploys a SignatureDrop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deploySignatureDrop({
     *   name: "My Signature Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deploySignatureDrop(metadata: NFTContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new Multiwrap contract
     *
     * @remarks Deploys a Multiwrap contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployMultiwrap({
     *   name: "My Multiwrap",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     * @beta
     */
    deployMultiwrap(metadata: MultiwrapContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new Edition contract
     *
     * @remarks Deploys an Edition contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployEdition({
     *   name: "My Edition",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployEdition(metadata: NFTContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new EditionDrop contract
     *
     * @remarks Deploys an Edition Drop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployEditionDrop({
     *   name: "My Edition Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployEditionDrop(metadata: NFTContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new Token contract
     *
     * @remarks Deploys a Token contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployToken({
     *   name: "My Token",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployToken(metadata: TokenContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new Token Drop contract
     *
     * @remarks Deploys a Token Drop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployTokenDrop({
     *   name: "My Token Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployTokenDrop(metadata: TokenContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new Marketplace contract
     *
     * @remarks Deploys a Marketplace contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployMarketplace({
     *   name: "My Marketplace",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployMarketplace(metadata: MarketplaceContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new Marketplace-V3 contract
     *
     * @remarks Deploys a Marketplace-V3 contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployMarketplaceV3({
     *   name: "My Marketplace",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployMarketplaceV3(metadata: MarketplaceV3ContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new Pack contract
     *
     * @remarks Deploys a Pack contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployPack({
     *   name: "My Pack",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployPack(metadata: NFTContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new Split contract
     *
     * @remarks Deploys a Split contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deploySplit({
     *   name: "My Split",
     *   primary_sale_recipient: "your-address",
     *   recipients: [
     *    {
     *      address: "your-address",
     *      sharesBps: 80 * 100, // 80%
     *    },
     *    {
     *      address: "another-address",
     *      sharesBps: 20 * 100, // 20%
     *    },
     *   ],
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deploySplit(metadata: SplitContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new Vote contract
     *
     * @remarks Deploys an Vote contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployVote({
     *   name: "My Vote",
     *   primary_sale_recipient: "your-address",
     *   voting_token_address: "your-token-contract-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployVote(metadata: VoteContractDeployMetadata): Promise<Address>;
    /**
     * Deploys a new contract
     *
     * @internal
     * @param contractType - the type of contract to deploy
     * @param contractMetadata - the metadata to deploy the contract with
     * @param version
     * @returns a promise of the address of the newly deployed contract
     */
    deployBuiltInContract<TContractType extends PrebuiltContractType>(contractType: TContractType, contractMetadata: z.input<DeploySchemaForPrebuiltContractType<TContractType>>, version?: string): Promise<Address>;
    /**
     * @internal
     * @param contractType
     */
    getLatestBuiltInContractVersion<TContractType extends PrebuiltContractType>(contractType: TContractType): Promise<BigNumber>;
    /**
     * Deploy any published contract by its name
     * @param publisherAddress the address of the publisher
     * @param contractName the name of the contract to deploy
     * @param constructorParams the constructor params to pass to the contract
     */
    deployReleasedContract(publisherAddress: AddressOrEns, contractName: string, constructorParams: any[], version?: string, options?: DeployOptions): Promise<Address>;
    /**
     * Deploy a proxy contract of a given implementation via the given factory
     * @param factoryAddress
     * @param implementationAddress
     * @param implementationAbi
     * @param initializerFunction
     * @param initializerArgs
     */
    deployViaFactory(factoryAddress: AddressOrEns, implementationAddress: AddressOrEns, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[]): Promise<Address>;
    /**
     * Deploy a proxy contract of a given implementation directly
     * @param implementationAddress
     * @param implementationAbi
     * @param initializerFunction
     * @param initializerArgs
     */
    deployProxy(implementationAddress: AddressOrEns, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[]): Promise<Address>;
    /**
     * @internal
     */
    getRegistry(): Promise<ContractRegistry | undefined>;
    private getFactory;
    updateSignerOrProvider(network: NetworkInput): void;
    private updateContractSignerOrProvider;
    /**
     * @internal
     * @param publishMetadataUri
     * @param constructorParamValues
     * @param options
     */
    deployContractFromUri(publishMetadataUri: string, constructorParamValues: any[], options?: DeployOptions): Promise<string>;
    /**
     * @internal
     * @param abi
     * @param bytecode
     * @param constructorParams
     */
    deployContractWithAbi(abi: ContractInterface, bytecode: BytesLike | {
        object: string;
    }, constructorParams: Array<any>): Promise<Address>;
    /**
     * Listen to all deploy transactions from this deployer
     * @param listener the listener to add
     */
    addDeployListener(listener: (event: DeployEvent) => void): void;
    /**
     * Remove a deploy listener
     * @param listener the listener to remove
     */
    removeDeployListener(listener: (event: DeployEvent) => void): void;
    /**
     * Remove all deploy listeners
     */
    removeAllDeployListeners(): void;
    private fetchAndCacheDeployMetadata;
    private fetchPublishedContractFromPolygon;
    private getConstructorParamsForImplementation;
    private hasLocalFactory;
    private convertParamValues;
}
//# sourceMappingURL=contract-deployer.d.ts.map