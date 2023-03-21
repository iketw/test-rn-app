'use strict';

var QueryParams = require('./QueryParams-6754e8c0.cjs.prod.js');
var watchTransactions = require('./watchTransactions-73b96089.cjs.prod.js');

/**
 * Standard ERC721 NFT functions
 * @remarks Basic functionality for a ERC721 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.transfer(walletAddress, tokenId);
 * ```
 * @public
 */
class StandardErc721 {
  get chainId() {
    return this._chainId;
  }
  constructor(contractWrapper, storage, chainId) {
    QueryParams._defineProperty(this, "contractWrapper", void 0);
    QueryParams._defineProperty(this, "storage", void 0);
    QueryParams._defineProperty(this, "erc721", void 0);
    QueryParams._defineProperty(this, "_chainId", void 0);
    /**
     * Transfer an NFT
     *
     * @remarks Transfer an NFT from the connected wallet to another wallet.
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const tokenId = 0;
     * await contract.transfer(walletAddress, tokenId);
     * ```
     */
    QueryParams._defineProperty(this, "transfer", watchTransactions.buildTransactionFunction(async (to, tokenId) => {
      return this.erc721.transfer.prepare(to, tokenId);
    }));
    /**
     * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
     * @param operator - the operator's address
     * @param approved - whether to approve or remove
     *
     * @internal
     */
    QueryParams._defineProperty(this, "setApprovalForAll", watchTransactions.buildTransactionFunction(async (operator, approved) => {
      return this.erc721.setApprovalForAll.prepare(operator, approved);
    }));
    /**
     * Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
     * @param operator - the operator's address
     * @param tokenId - the tokenId to give approval for
     *
     * @internal
     */
    QueryParams._defineProperty(this, "setApprovalForToken", watchTransactions.buildTransactionFunction(async (operator, tokenId) => {
      return watchTransactions.Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "approve",
        args: [await watchTransactions.resolveAddress(operator), tokenId]
      });
    }));
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.erc721 = new watchTransactions.Erc721(this.contractWrapper, this.storage, chainId);
    this._chainId = chainId;
  }

  /**
   * @internal
   */
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }

  /**
   * Get all NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.getAll();
   * console.log(nfts);
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async getAll(queryParams) {
    return this.erc721.getAll(queryParams);
  }

  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.getOwned(address);
   * console.log(nfts);
   * ```
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async getOwned(walletAddress) {
    if (walletAddress) {
      walletAddress = await watchTransactions.resolveAddress(walletAddress);
    }
    return this.erc721.getOwned(walletAddress);
  }

  /**
   * Get Owned Token Ids
   * @remarks Get all the token ids of NFTs owned by a specific wallet (no metadata)
   */
  async getOwnedTokenIds(walletAddress) {
    if (walletAddress) {
      walletAddress = await watchTransactions.resolveAddress(walletAddress);
    }
    return this.erc721.getOwnedTokenIds(walletAddress);
  }

  /**
   * Get total minted supply count
   */
  async totalSupply() {
    return this.erc721.totalCirculatingSupply();
  }

  /**
   * Get a single NFT
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   */
  async get(tokenId) {
    return this.erc721.get(tokenId);
  }

  /**
   * Get the current owner of a given NFT within this Contract
   *
   * @param tokenId - the tokenId of the NFT
   * @returns the address of the owner
   */
  async ownerOf(tokenId) {
    return this.erc721.ownerOf(tokenId);
  }

  /**
   * Get NFT Balance
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.balanceOf(walletAddress);
   * console.log(balance);
   * ```
   */
  async balanceOf(address) {
    return this.erc721.balanceOf(address);
  }

  /**
   * Get NFT Balance for the currently connected wallet
   */
  async balance() {
    return this.erc721.balance();
  }

  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */
  async isApproved(address, operator) {
    return this.erc721.isApproved(address, operator);
  }
}

exports.StandardErc721 = StandardErc721;
