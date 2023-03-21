'use strict';

var QueryParams = require('./QueryParams-11eb7e48.cjs.dev.js');
var watchTransactions = require('./watchTransactions-0a3f707d.cjs.dev.js');
var erc1155Standard = require('./erc-1155-standard-91f06038.cjs.dev.js');
var ERC20Abi = require('@thirdweb-dev/contracts-js/dist/abis/ERC20.json');
var IPackVRFAbi = require('@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json');
var ethers = require('ethers');
var zod = require('zod');
require('bn.js');
require('@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDrop.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Permit.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMulticall.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/ERC2771Context.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAppURI.json');
require('@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json');
require('@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IOffers.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json');
require('@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json');
require('@thirdweb-dev/contracts-js/dist/abis/Ownable.json');
require('@thirdweb-dev/chains');
require('bs58');
require('cross-fetch');
require('eventemitter3');
require('@thirdweb-dev/contracts-js/dist/abis/Forwarder.json');
require('@thirdweb-dev/storage');
require('tiny-invariant');
require('ethers/lib/utils.js');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json');
require('merkletreejs');
require('fast-deep-equal');
require('uuid');
require('@thirdweb-dev/contracts-js/dist/abis/IERC165.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json');
require('@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json');
require('@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json');
require('@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryRouter.json');
require('@thirdweb-dev/generated-abis');
require('@thirdweb-dev/contracts-js/dist/abis/TWFactory.json');
require('@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var ERC20Abi__default = /*#__PURE__*/_interopDefault(ERC20Abi);
var IPackVRFAbi__default = /*#__PURE__*/_interopDefault(IPackVRFAbi);

/**
 * @internal
 */
const CommonWrappableSchema = zod.z.object({
  contractAddress: watchTransactions.AddressOrEnsSchema
});

/**
 * @internal
 */
const ERC20WrappableSchema = CommonWrappableSchema.extend({
  quantity: QueryParams.AmountSchema
});

/**
 * @internal
 */
const ERC721WrappableSchema = CommonWrappableSchema.extend({
  tokenId: watchTransactions.BigNumberishSchema
});

/**
 * @internal
 */
const ERC1155WrappableSchema = CommonWrappableSchema.extend({
  tokenId: watchTransactions.BigNumberishSchema,
  quantity: watchTransactions.BigNumberishSchema
});

/**
 * @internal
 */
const ERC20RewardSchema = ERC20WrappableSchema.omit({
  quantity: true
}).extend({
  quantityPerReward: QueryParams.AmountSchema
});

/**
 * @internal
 */
const ERC721RewardSchema = ERC721WrappableSchema;

/**
 * @internal
 */
const ERC1155RewardSchema = ERC1155WrappableSchema.omit({
  quantity: true
}).extend({
  quantityPerReward: watchTransactions.BigNumberishSchema
});

/**
 * @internal
 */
const ERC20RewardContentsSchema = ERC20RewardSchema.extend({
  totalRewards: watchTransactions.BigNumberishSchema.default("1")
});

/**
 * @internal
 */
const ERC721RewardContentsSchema = ERC721RewardSchema;

/**
 * @internal
 */
const ERC1155RewardContentsSchema = ERC1155RewardSchema.extend({
  totalRewards: watchTransactions.BigNumberishSchema.default("1")
});

/**
 * @internal
 */
zod.z.object({
  erc20Rewards: zod.z.array(ERC20RewardSchema).default([]),
  erc721Rewards: zod.z.array(ERC721RewardSchema).default([]),
  erc1155Rewards: zod.z.array(ERC1155RewardSchema).default([])
});

/**
 * @internal
 */
const PackRewardsOutputSchema = zod.z.object({
  erc20Rewards: zod.z.array(ERC20RewardContentsSchema).default([]),
  erc721Rewards: zod.z.array(ERC721RewardContentsSchema).default([]),
  erc1155Rewards: zod.z.array(ERC1155RewardContentsSchema).default([])
});

/**
 * @internal
 */
const PackMetadataInputSchema = PackRewardsOutputSchema.extend({
  packMetadata: QueryParams.NFTInputOrUriSchema,
  rewardsPerPack: watchTransactions.BigNumberishSchema.default("1"),
  openStartTime: watchTransactions.RawDateSchema.default(new Date())
});

/**
 * @public
 */

class PackVRF {
  constructor(network, address, storage, options, chainId) {
    var _this = this;
    let contractWrapper = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new watchTransactions.ContractWrapper(network, address, IPackVRFAbi__default["default"], options);
    QueryParams._defineProperty(this, "featureName", watchTransactions.FEATURE_PACK_VRF.name);
    QueryParams._defineProperty(this, "contractWrapper", void 0);
    QueryParams._defineProperty(this, "storage", void 0);
    QueryParams._defineProperty(this, "chainId", void 0);
    QueryParams._defineProperty(this, "events", void 0);
    /**
     * Open pack
     *
     * @example
     * ```javascript
     * const tokenId = 0;
     * const amount = 1;
     * const receipt = await contract.pack.open(tokenId, amount);
     * ```
     *
     * @remarks Open a pack using Chainlink VRFs random number generation
     * @remarks This will return a transaction result with the requestId of the open request, NOT the contents of the pack
     * @remarks To get the contents of the pack, you must call claimRewards once the VRF request has been fulfilled
     * @remarks You can use the canClaimRewards method to check if the VRF request has been fulfilled
     * @param tokenId
     * @param amount
     * @returns
     * @twfeature PackVRF
     */
    QueryParams._defineProperty(this, "open", watchTransactions.buildTransactionFunction(async function (tokenId) {
      let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      let gasLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500000;
      return watchTransactions.Transaction.fromContractWrapper({
        contractWrapper: _this.contractWrapper,
        method: "openPack",
        args: [tokenId, amount],
        overrides: {
          // Higher gas limit for opening packs
          gasLimit
        },
        parse: receipt => {
          let id = ethers.BigNumber.from(0);
          try {
            const event = _this.contractWrapper.parseLogs("PackOpenRequested", receipt?.logs);
            id = event[0].args.requestId;
          } catch (e) {}
          return {
            receipt,
            id
          };
        }
      });
    }));
    /**
     * Claim the rewards from an opened pack
     *
     * @example
     * ```javascript
     * const rewards = await contract.pack.claimRewards();
     * ```
     *
     * @remarks This will return the contents of the pack
     * @remarks Make sure to check if the VRF request has been fulfilled using canClaimRewards() before calling this method
     * @returns the random rewards from opening a pack
     * @twfeature PackVRF
     */
    QueryParams._defineProperty(this, "claimRewards", watchTransactions.buildTransactionFunction(async function () {
      let gasLimit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500000;
      return watchTransactions.Transaction.fromContractWrapper({
        contractWrapper: _this.contractWrapper,
        method: "claimRewards",
        args: [],
        overrides: {
          // Higher gas limit for opening packs
          gasLimit
        },
        parse: async receipt => {
          const event = _this.contractWrapper.parseLogs("PackOpened", receipt?.logs);
          if (event.length === 0) {
            throw new Error("PackOpened event not found");
          }
          const rewards = event[0].args.rewardUnitsDistributed;
          return await _this.parseRewards(rewards);
        }
      });
    }));
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.chainId = chainId;
    this.events = new watchTransactions.ContractEvents(this.contractWrapper);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  async parseRewards(rewards) {
    const erc20Rewards = [];
    const erc721Rewards = [];
    const erc1155Rewards = [];
    for (const reward of rewards) {
      switch (reward.tokenType) {
        case 0:
          {
            const tokenMetadata = await watchTransactions.fetchCurrencyMetadata(this.contractWrapper.getProvider(), reward.assetContract);
            erc20Rewards.push({
              contractAddress: reward.assetContract,
              quantityPerReward: ethers.ethers.utils.formatUnits(reward.totalAmount, tokenMetadata.decimals).toString()
            });
            break;
          }
        case 1:
          {
            erc721Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString()
            });
            break;
          }
        case 2:
          {
            erc1155Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString(),
              quantityPerReward: reward.totalAmount.toString()
            });
            break;
          }
      }
    }
    return {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    };
  }

  /**
   * Setup a listener for when a pack is opened
   *
   * @example
   * ```javascript
   * const unsubscribe = await contract.pack.addPackOpenEventListener((packId, openerAddress, rewards) => {
   *  console.log(`Pack ${packId} was opened by ${openerAddress} and contained:`, rewards);
   * });
   * @param callback the listener to call when a pack is opened
   * @returns a unsubscribe function to cleanup the listener
   * @twfeature PackVRF
   */
  async addPackOpenEventListener(callback) {
    return this.events.addEventListener("PackOpened", async event => {
      callback(event.data.packId.toString(), event.data.opener, await this.parseRewards(event.data.rewardUnitsDistributed));
    });
  }

  /**
   * Check if a specific wallet can claim rewards after opening a pack
   *
   * @example
   * ```javascript
   * const canClaim = await contract.pack.canClaimRewards("{{wallet_address}}");
   * ```
   * @param claimerAddress Optional: the address to check if they can claim rewards, defaults to the connected address
   * @returns whether the connected address can claim rewards after opening a pack
   * @twfeature PackVRF
   */
  async canClaimRewards(claimerAddress) {
    const address = await watchTransactions.resolveAddress(claimerAddress || (await this.contractWrapper.getSignerAddress()));
    return await this.contractWrapper.readContract.canClaimRewards(address);
  }

  /**
   * Open a pack and claim the rewards
   * @remarks This function will only start the flow of opening a pack, the rewards will be granted automatically to the connected address after VRF request is fulfilled
   *
   * @example
   * ```javascript
   * const packId = 0;
   * const amount = 1;
   * const { id } = await contract.pack.openAndClaim(packId, amount);
   * ```
   *
   * @param packId The id of the pack to open
   * @param amount Optional: the amount of packs to open, defaults to 1
   * @param gasLimit Optional: the gas limit to use for the VRF callback transaction, defaults to 500000
   * @returns
   * @twfeature PackVRF
   */
  async openAndClaim(packId) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    let gasLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500000;
    const receipt = await this.contractWrapper.sendTransaction("openPackAndClaimRewards", [packId, amount, gasLimit], {
      // Higher gas limit for opening packs
      gasLimit: ethers.BigNumber.from(500000)
    });
    let id = ethers.BigNumber.from(0);
    try {
      const event = this.contractWrapper.parseLogs("PackOpenRequested", receipt?.logs);
      id = event[0].args.requestId;
    } catch (e) {}
    return {
      receipt,
      id
    };
  }

  /**
   * Get the LINK balance of the contract
   *
   * @example
   * ```javascript
   * const balance = await contract.pack.getLinkBalance();
   * ```
   *
   * @returns the balance of LINK in the contract
   * @twfeature PackVRF
   */
  async getLinkBalance() {
    return this.getLinkContract().balanceOf(this.contractWrapper.readContract.address);
  }

  /**
   * Transfer LINK to this contract
   *
   * @example
   * ```javascript
   * const amount = 1;
   * await contract.pack.transferLink(amount);
   * ```
   *
   * @param amount the amount of LINK to transfer to the contract
   * @twfeature PackVRF
   */
  async transferLink(amount) {
    await this.getLinkContract().transfer(this.contractWrapper.readContract.address, amount);
  }
  getLinkContract() {
    const linkAddress = watchTransactions.LINK_TOKEN_ADDRESS[this.chainId];
    if (!linkAddress) {
      throw new Error(`No LINK token address found for chainId ${this.chainId}`);
    }
    const contract = new watchTransactions.ContractWrapper(this.contractWrapper.getSignerOrProvider(), linkAddress, ERC20Abi__default["default"], this.contractWrapper.options);
    return new watchTransactions.Erc20(contract, this.storage, this.chainId);
  }
}

/**
 * Create lootboxes of NFTs with rarity based open mechanics.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "pack");
 * ```
 *
 * @public
 */
class Pack extends erc1155Standard.StandardErc1155 {
  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per pack
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular pack
   * contract.royalties.setTokenRoyaltyInfo(packId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */

  /**
   * @internal
   */

  /**
   * If enabled in the contract, use the Chainlink VRF functionality to open packs
   */
  get vrf() {
    return watchTransactions.assertEnabled(this._vrf, watchTransactions.FEATURE_PACK_VRF);
  }
  constructor(network, address, storage) {
    var _this;
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new watchTransactions.ContractWrapper(network, address, abi, options.gasless && "openzeppelin" in options.gasless ? {
      ...options,
      gasless: {
        openzeppelin: {
          ...options.gasless.openzeppelin,
          useEOAForwarder: true
        }
      }
    } : options);
    super(contractWrapper, storage, chainId);
    _this = this;
    QueryParams._defineProperty(this, "abi", void 0);
    QueryParams._defineProperty(this, "metadata", void 0);
    QueryParams._defineProperty(this, "app", void 0);
    QueryParams._defineProperty(this, "roles", void 0);
    QueryParams._defineProperty(this, "encoder", void 0);
    QueryParams._defineProperty(this, "events", void 0);
    QueryParams._defineProperty(this, "estimator", void 0);
    QueryParams._defineProperty(this, "royalties", void 0);
    QueryParams._defineProperty(this, "interceptor", void 0);
    QueryParams._defineProperty(this, "erc1155", void 0);
    QueryParams._defineProperty(this, "owner", void 0);
    QueryParams._defineProperty(this, "_vrf", void 0);
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create Pack
     * @remarks Create a new pack with the given metadata and rewards and mint it to the connected wallet.
     * @remarks See {@link Pack.createTo}
     *
     * @param metadataWithRewards - the metadata and rewards to include in the pack
     * @example
     * ```javascript
     * const pack = {
     *   // The metadata for the pack NFT itself
     *   packMetadata: {
     *     name: "My Pack",
     *     description: "This is a new pack",
     *     image: "ipfs://...",
     *   },
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
     *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
     * }
     *
     * const tx = await contract.create(pack);
     * ```
     */
    QueryParams._defineProperty(this, "create", watchTransactions.buildTransactionFunction(async metadataWithRewards => {
      const signerAddress = await this.contractWrapper.getSignerAddress();
      return this.createTo.prepare(signerAddress, metadataWithRewards);
    }));
    /**
     * Add Pack Contents
     * @remarks Add contents to an existing pack.
     * @remarks See {@link Pack.addPackContents}
     *
     * @param packId - token Id of the pack to add contents to
     * @param packContents - the rewards to include in the pack
     * @example
     * ```javascript
     * const packContents = {
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     * }
     *
     * const tx = await contract.addPackContents(packId, packContents);
     * ```
     */
    QueryParams._defineProperty(this, "addPackContents", watchTransactions.buildTransactionFunction(async (packId, packContents) => {
      const signerAddress = await this.contractWrapper.getSignerAddress();
      const parsedContents = await PackRewardsOutputSchema.parseAsync(packContents);
      const {
        contents,
        numOfRewardUnits
      } = await this.toPackContentArgs(parsedContents);
      return watchTransactions.Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "addPackContents",
        args: [packId, contents, numOfRewardUnits, signerAddress],
        parse: receipt => {
          const event = this.contractWrapper.parseLogs("PackUpdated", receipt?.logs);
          if (event.length === 0) {
            throw new Error("PackUpdated event not found");
          }
          const id = event[0].args.packId;
          return {
            id: id,
            receipt,
            data: () => this.erc1155.get(id)
          };
        }
      });
    }));
    /**
     * Create Pack To Wallet
     * @remarks Create a new pack with the given metadata and rewards and mint it to the specified address.
     *
     * @param to - the address to mint the pack to
     * @param metadataWithRewards - the metadata and rewards to include in the pack
     *
     * @example
     * ```javascript
     * const pack = {
     *   // The metadata for the pack NFT itself
     *   packMetadata: {
     *     name: "My Pack",
     *     description: "This is a new pack",
     *     image: "ipfs://...",
     *   },
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       assetContract: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       assetContract: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
     *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
     * }
     *
     * const tx = await contract.createTo("0x...", pack);
     * ```
     */
    QueryParams._defineProperty(this, "createTo", watchTransactions.buildTransactionFunction(async (to, metadataWithRewards) => {
      const uri = await watchTransactions.uploadOrExtractURI(metadataWithRewards.packMetadata, this.storage);
      const parsedMetadata = await PackMetadataInputSchema.parseAsync(metadataWithRewards);
      const {
        erc20Rewards,
        erc721Rewards,
        erc1155Rewards
      } = parsedMetadata;
      const rewardsData = {
        erc20Rewards,
        erc721Rewards,
        erc1155Rewards
      };
      const {
        contents,
        numOfRewardUnits
      } = await this.toPackContentArgs(rewardsData);
      return watchTransactions.Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "createPack",
        args: [contents, numOfRewardUnits, uri, parsedMetadata.openStartTime, parsedMetadata.rewardsPerPack, await watchTransactions.resolveAddress(to)],
        parse: receipt => {
          const event = this.contractWrapper.parseLogs("PackCreated", receipt?.logs);
          if (event.length === 0) {
            throw new Error("PackCreated event not found");
          }
          const packId = event[0].args.packId;
          return {
            id: packId,
            receipt,
            data: () => this.erc1155.get(packId)
          };
        }
      });
    }));
    /**
     * Open Pack
     *
     * @remarks - Open a pack to reveal the contained rewards. This will burn the specified pack and
     * the contained assets will be transferred to the opening users wallet.
     *
     * @param tokenId - the token ID of the pack you want to open
     * @param amount - the amount of packs you want to open
     *
     * @example
     * ```javascript
     * const tokenId = 0
     * const amount = 1
     * const tx = await contract.open(tokenId, amount);
     * ```
     */
    QueryParams._defineProperty(this, "open", watchTransactions.buildTransactionFunction(async function (tokenId) {
      let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      let gasLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500000;
      if (_this._vrf) {
        throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");
      }
      return watchTransactions.Transaction.fromContractWrapper({
        contractWrapper: _this.contractWrapper,
        method: "openPack",
        args: [tokenId, amount],
        overrides: {
          // Higher gas limit for opening packs
          gasLimit
        },
        parse: async receipt => {
          const event = _this.contractWrapper.parseLogs("PackOpened", receipt?.logs);
          if (event.length === 0) {
            throw new Error("PackOpened event not found");
          }
          const rewards = event[0].args.rewardUnitsDistributed;
          const erc20Rewards = [];
          const erc721Rewards = [];
          const erc1155Rewards = [];
          for (const reward of rewards) {
            switch (reward.tokenType) {
              case 0:
                {
                  const tokenMetadata = await watchTransactions.fetchCurrencyMetadata(_this.contractWrapper.getProvider(), reward.assetContract);
                  erc20Rewards.push({
                    contractAddress: reward.assetContract,
                    quantityPerReward: ethers.ethers.utils.formatUnits(reward.totalAmount, tokenMetadata.decimals).toString()
                  });
                  break;
                }
              case 1:
                {
                  erc721Rewards.push({
                    contractAddress: reward.assetContract,
                    tokenId: reward.tokenId.toString()
                  });
                  break;
                }
              case 2:
                {
                  erc1155Rewards.push({
                    contractAddress: reward.assetContract,
                    tokenId: reward.tokenId.toString(),
                    quantityPerReward: reward.totalAmount.toString()
                  });
                  break;
                }
            }
          }
          return {
            erc20Rewards,
            erc721Rewards,
            erc1155Rewards
          };
        }
      });
    }));
    this.abi = watchTransactions.AbiSchema.parse(abi || []);
    this.erc1155 = new watchTransactions.Erc1155(this.contractWrapper, this.storage, chainId);
    this.metadata = new watchTransactions.ContractMetadata(this.contractWrapper, watchTransactions.PackContractSchema, this.storage);
    this.app = new watchTransactions.ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new watchTransactions.ContractRoles(this.contractWrapper, Pack.contractRoles);
    this.royalties = new watchTransactions.ContractRoyalty(this.contractWrapper, this.metadata);
    this.encoder = new watchTransactions.ContractEncoder(this.contractWrapper);
    this.estimator = new watchTransactions.GasCostEstimator(this.contractWrapper);
    this.events = new watchTransactions.ContractEvents(this.contractWrapper);
    this.interceptor = new watchTransactions.ContractInterceptor(this.contractWrapper);
    this.owner = new watchTransactions.ContractOwner(this.contractWrapper);
    this._vrf = this.detectVrf();
  }

  /**
   * @internal
   */
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
    this._vrf?.onNetworkUpdated(network);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get a single Pack
   *
   * @remarks Get all the data associated with every pack in this contract.
   *
   * By default, returns the first 100 packs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const pack = await contract.get(0);
   * console.log(packs;
   * ```
   */
  async get(tokenId) {
    return this.erc1155.get(tokenId);
  }

  /**
   * Get All Packs
   *
   * @remarks Get all the data associated with every pack in this contract.
   *
   * By default, returns the first 100 packs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const packs = await contract.getAll();
   * console.log(packs;
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The pack metadata for all packs queried.
   */
  async getAll(queryParams) {
    return this.erc1155.getAll(queryParams);
  }

  /**
   * Get Owned Packs
   *
   * @remarks Get all the data associated with the packs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the packs of
   * const address = "{{wallet_address}}";
   * const packss = await contract.getOwned(address);
   * ```
   *
   * @returns The pack metadata for all the owned packs in the contract.
   */
  async getOwned(walletAddress) {
    return this.erc1155.getOwned(walletAddress);
  }

  /**
   * Get the number of packs created
   * @returns the total number of packs minted in this contract
   * @public
   */
  async getTotalCount() {
    return this.erc1155.totalCount();
  }

  /**
   * Get whether users can transfer packs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole(watchTransactions.getRoleHash("transfer"), ethers.ethers.constants.AddressZero);
    return !anyoneCanTransfer;
  }

  /**
   * Get Pack Contents
   * @remarks Get the rewards contained inside a pack.
   *
   * @param packId - The id of the pack to get the contents of.
   * @returns - The contents of the pack.
   *
   * @example
   * ```javascript
   * const packId = 0;
   * const contents = await contract.getPackContents(packId);
   * console.log(contents.erc20Rewards);
   * console.log(contents.erc721Rewards);
   * console.log(contents.erc1155Rewards);
   * ```
   */
  async getPackContents(packId) {
    const {
      contents,
      perUnitAmounts
    } = await this.contractWrapper.readContract.getPackContents(packId);
    const erc20Rewards = [];
    const erc721Rewards = [];
    const erc1155Rewards = [];
    for (let i = 0; i < contents.length; i++) {
      const reward = contents[i];
      const amount = perUnitAmounts[i];
      switch (reward.tokenType) {
        case 0:
          {
            const tokenMetadata = await watchTransactions.fetchCurrencyMetadata(this.contractWrapper.getProvider(), reward.assetContract);
            const rewardAmount = ethers.ethers.utils.formatUnits(reward.totalAmount, tokenMetadata.decimals);
            erc20Rewards.push({
              contractAddress: reward.assetContract,
              quantityPerReward: amount.toString(),
              totalRewards: ethers.BigNumber.from(rewardAmount).div(amount).toString()
            });
            break;
          }
        case 1:
          {
            erc721Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString()
            });
            break;
          }
        case 2:
          {
            erc1155Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString(),
              quantityPerReward: amount.toString(),
              totalRewards: ethers.BigNumber.from(reward.totalAmount).div(amount).toString()
            });
            break;
          }
      }
    }
    return {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    };
  }
  /** *****************************
   * PRIVATE FUNCTIONS
   *******************************/

  async toPackContentArgs(metadataWithRewards) {
    const contents = [];
    const numOfRewardUnits = [];
    const {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    } = metadataWithRewards;
    const provider = this.contractWrapper.getProvider();
    const owner = await this.contractWrapper.getSignerAddress();
    for (const erc20 of erc20Rewards) {
      const normalizedQuantity = await watchTransactions.normalizePriceValue(provider, erc20.quantityPerReward, erc20.contractAddress);
      // Multiply the quantity of one reward by the number of rewards
      const totalQuantity = normalizedQuantity.mul(erc20.totalRewards);
      const hasAllowance = await watchTransactions.hasERC20Allowance(this.contractWrapper, erc20.contractAddress, totalQuantity);
      if (!hasAllowance) {
        throw new Error(`ERC20 token with contract address "${erc20.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${erc20.contractAddress}").setAllowance("${this.getAddress()}", ${totalQuantity});\n\n`);
      }
      numOfRewardUnits.push(erc20.totalRewards);
      contents.push({
        assetContract: erc20.contractAddress,
        tokenType: 0,
        totalAmount: totalQuantity,
        tokenId: 0
      });
    }
    for (const erc721 of erc721Rewards) {
      const isApproved = await watchTransactions.isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), erc721.contractAddress, erc721.tokenId, owner);
      if (!isApproved) {
        throw new Error(`ERC721 token "${erc721.tokenId}" with contract address "${erc721.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${erc721.contractAddress}").setApprovalForToken("${this.getAddress()}", ${erc721.tokenId});\n\n`);
      }
      numOfRewardUnits.push("1");
      contents.push({
        assetContract: erc721.contractAddress,
        tokenType: 1,
        totalAmount: 1,
        tokenId: erc721.tokenId
      });
    }
    for (const erc1155 of erc1155Rewards) {
      const isApproved = await watchTransactions.isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), erc1155.contractAddress, erc1155.tokenId, owner);
      if (!isApproved) {
        throw new Error(`ERC1155 token "${erc1155.tokenId}" with contract address "${erc1155.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${erc1155.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);
      }
      numOfRewardUnits.push(erc1155.totalRewards);
      contents.push({
        assetContract: erc1155.contractAddress,
        tokenType: 2,
        totalAmount: ethers.BigNumber.from(erc1155.quantityPerReward).mul(ethers.BigNumber.from(erc1155.totalRewards)),
        tokenId: erc1155.tokenId
      });
    }
    return {
      contents,
      numOfRewardUnits
    };
  }

  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return watchTransactions.Transaction.fromContractWrapper({
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
  detectVrf() {
    if (watchTransactions.detectContractFeature(this.contractWrapper, "PackVRF")) {
      return new PackVRF(this.contractWrapper.getSignerOrProvider(), this.contractWrapper.readContract.address, this.storage, this.contractWrapper.options, this.chainId);
    }
    return undefined;
  }
}
QueryParams._defineProperty(Pack, "contractRoles", ["admin", "minter", "asset", "transfer"]);

exports.Pack = Pack;
