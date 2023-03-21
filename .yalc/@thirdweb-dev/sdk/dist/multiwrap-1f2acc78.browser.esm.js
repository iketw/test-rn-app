import { _ as _defineProperty } from './QueryParams-7d9473b5.browser.esm.js';
import { cZ as ContractWrapper, cR as buildTransactionFunction, e as AbiSchema, ah as ContractMetadata, d4 as MultiwrapContractSchema, aU as ContractAppURI, ai as ContractRoles, ag as ContractEncoder, aN as GasCostEstimator, aO as ContractEvents, aj as ContractRoyalty, aS as ContractOwner, bU as fetchCurrencyMetadata, bT as normalizePriceValue, bY as hasERC20Allowance, cV as isTokenApprovedForTransfer, aT as Transaction, d5 as uploadOrExtractURI, cS as resolveAddress } from './watchTransactions-1a5f78a9.browser.esm.js';
import { S as StandardErc721 } from './erc-721-standard-6579e793.browser.esm.js';
import { ethers } from 'ethers';
import 'bn.js';
import 'zod';
import '@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDrop.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20Permit.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMulticall.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json';
import '@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json';
import '@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/ERC2771Context.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAppURI.json';
import '@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json';
import '@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json';
import '@thirdweb-dev/contracts-js/dist/abis/IOffers.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPermissions.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json';
import '@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json';
import '@thirdweb-dev/contracts-js/dist/abis/Ownable.json';
import '@thirdweb-dev/chains';
import 'bs58';
import 'eventemitter3';
import '@thirdweb-dev/contracts-js/dist/abis/Forwarder.json';
import '@thirdweb-dev/storage';
import 'cross-fetch';
import 'tiny-invariant';
import 'ethers/lib/utils.js';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json';
import 'merkletreejs';
import 'fast-deep-equal';
import 'uuid';
import '@thirdweb-dev/contracts-js/dist/abis/IERC165.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json';
import '@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json';
import '@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json';
import '@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryRouter.json';
import '@thirdweb-dev/generated-abis';
import '@thirdweb-dev/contracts-js/dist/abis/TWFactory.json';
import '@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json';

/**
 * Multiwrap lets you wrap any number of ERC20, ERC721 and ERC1155 tokens you own into a single wrapped token bundle.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "multiwrap");
 * ```
 *
 * @beta
 */
class Multiwrap extends StandardErc721 {
  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per token
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular token
   * contract.royalties.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options);
    super(contractWrapper, storage, chainId);
    _defineProperty(this, "abi", void 0);
    _defineProperty(this, "encoder", void 0);
    _defineProperty(this, "estimator", void 0);
    _defineProperty(this, "metadata", void 0);
    _defineProperty(this, "app", void 0);
    _defineProperty(this, "events", void 0);
    _defineProperty(this, "roles", void 0);
    _defineProperty(this, "royalties", void 0);
    _defineProperty(this, "owner", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Wrap any number of ERC20/ERC721/ERC1155 tokens into a single wrapped token
     * @example
     * ```javascript
     * const tx = await contract.wrap({
     *   erc20Tokens: [{
     *     contractAddress: "0x...",
     *     quantity: "0.8"
     *   }],
     *   erc721Tokens: [{
     *     contractAddress: "0x...",
     *     tokenId: "0"
     *   }],
     *   erc1155Tokens: [{
     *     contractAddress: "0x...",
     *     tokenId: "1",
     *     quantity: "2"
     *   }]
     * }, {
     *     name: "Wrapped bundle",
     *     description: "This is a wrapped bundle of tokens and NFTs",
     *     image: "ipfs://...",
     * });
     * const receipt = tx.receipt(); // the transaction receipt
     * const wrappedTokenId = tx.id; // the id of the wrapped token bundle
     * ```
     * @param contents - the contents to wrap
     * @param wrappedTokenMetadata - metadata to represent the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the wrapped token bundle to
     */
    _defineProperty(this, "wrap", buildTransactionFunction(async (contents, wrappedTokenMetadata, recipientAddress) => {
      const uri = await uploadOrExtractURI(wrappedTokenMetadata, this.storage);
      const recipient = await resolveAddress(recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress());
      const tokens = await this.toTokenStructList(contents);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "wrap",
        args: [tokens, uri, recipient],
        parse: receipt => {
          const event = this.contractWrapper.parseLogs("TokensWrapped", receipt?.logs);
          if (event.length === 0) {
            throw new Error("TokensWrapped event not found");
          }
          const tokenId = event[0].args.tokenIdOfWrappedToken;
          return {
            id: tokenId,
            receipt,
            data: () => this.get(tokenId)
          };
        }
      });
    }));
    /**
     * Unwrap a wrapped token bundle, and retrieve its contents
     * @example
     * ```javascript
     * await contract.unwrap(wrappedTokenId);
     * ```
     * @param wrappedTokenId - the id of the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the unwrapped tokens to
     */
    _defineProperty(this, "unwrap", buildTransactionFunction(async (wrappedTokenId, recipientAddress) => {
      const recipient = await resolveAddress(recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress());
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "unwrap",
        args: [wrappedTokenId, recipient]
      });
    }));
    this.abi = AbiSchema.parse(abi || []);
    this.metadata = new ContractMetadata(this.contractWrapper, MultiwrapContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, Multiwrap.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.royalties = new ContractRoyalty(this.contractWrapper, this.metadata);
    this.owner = new ContractOwner(this.contractWrapper);
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the contents of a wrapped token bundle
   * @example
   * ```javascript
   * const contents = await contract.getWrappedContents(wrappedTokenId);
   * console.log(contents.erc20Tokens);
   * console.log(contents.erc721Tokens);
   * console.log(contents.erc1155Tokens);
   * ```
   * @param wrappedTokenId - the id of the wrapped token bundle
   */
  async getWrappedContents(wrappedTokenId) {
    const wrappedTokens = await this.contractWrapper.readContract.getWrappedContents(wrappedTokenId);
    const erc20Tokens = [];
    const erc721Tokens = [];
    const erc1155Tokens = [];
    for (const token of wrappedTokens) {
      switch (token.tokenType) {
        case 0:
          {
            const tokenMetadata = await fetchCurrencyMetadata(this.contractWrapper.getProvider(), token.assetContract);
            erc20Tokens.push({
              contractAddress: token.assetContract,
              quantity: ethers.utils.formatUnits(token.totalAmount, tokenMetadata.decimals)
            });
            break;
          }
        case 1:
          {
            erc721Tokens.push({
              contractAddress: token.assetContract,
              tokenId: token.tokenId
            });
            break;
          }
        case 2:
          {
            erc1155Tokens.push({
              contractAddress: token.assetContract,
              tokenId: token.tokenId,
              quantity: token.totalAmount.toString()
            });
            break;
          }
      }
    }
    return {
      erc20Tokens,
      erc721Tokens,
      erc1155Tokens
    };
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async toTokenStructList(contents) {
    const tokens = [];
    const provider = this.contractWrapper.getProvider();
    const owner = await this.contractWrapper.getSignerAddress();
    if (contents.erc20Tokens) {
      for (const erc20 of contents.erc20Tokens) {
        const normalizedQuantity = await normalizePriceValue(provider, erc20.quantity, erc20.contractAddress);
        const hasAllowance = await hasERC20Allowance(this.contractWrapper, erc20.contractAddress, normalizedQuantity);
        if (!hasAllowance) {
          throw new Error(`ERC20 token with contract address "${erc20.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${erc20.contractAddress}").setAllowance("${this.getAddress()}", ${erc20.quantity});\n\n`);
        }
        tokens.push({
          assetContract: erc20.contractAddress,
          totalAmount: normalizedQuantity,
          tokenId: 0,
          tokenType: 0
        });
      }
    }
    if (contents.erc721Tokens) {
      for (const erc721 of contents.erc721Tokens) {
        const isApproved = await isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), erc721.contractAddress, erc721.tokenId, owner);
        if (!isApproved) {
          throw new Error(`ERC721 token "${erc721.tokenId}" with contract address "${erc721.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${erc721.contractAddress}").setApprovalForToken("${this.getAddress()}", ${erc721.tokenId});\n\n`);
        }
        tokens.push({
          assetContract: erc721.contractAddress,
          totalAmount: 0,
          tokenId: erc721.tokenId,
          tokenType: 1
        });
      }
    }
    if (contents.erc1155Tokens) {
      for (const erc1155 of contents.erc1155Tokens) {
        const isApproved = await isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), erc1155.contractAddress, erc1155.tokenId, owner);
        if (!isApproved) {
          throw new Error(`ERC1155 token "${erc1155.tokenId}" with contract address "${erc1155.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${erc1155.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);
        }
        tokens.push({
          assetContract: erc1155.contractAddress,
          totalAmount: erc1155.quantity,
          tokenId: erc1155.tokenId,
          tokenType: 2
        });
      }
    }
    return tokens;
  }

  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method,
      args,
      overrides
    });
  }

  /**
   * @internal
   */
  async call(functionName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return this.contractWrapper.call(functionName, ...args);
  }
}
_defineProperty(Multiwrap, "contractRoles", ["admin", "transfer", "minter", "unwrap", "asset"]);

export { Multiwrap };
