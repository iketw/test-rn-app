'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useTransactions = require('./useTransactions-664cc809.cjs.dev.js');
var requiredParam = require('./required-param-25101c6c.cjs.dev.js');
var sdk = require('@thirdweb-dev/sdk');
require('mime/lite.js');
require('@thirdweb-dev/chains');
require('@thirdweb-dev/wallets');
require('react');
require('react/jsx-runtime');
require('tiny-invariant');
require('@tanstack/react-query');
require('ethers');
require('@thirdweb-dev/auth');
require('@thirdweb-dev/auth/evm');
require('@thirdweb-dev/sdk/evm');
require('@thirdweb-dev/sdk/evm/functions');



exports.TW_WC_PROJECT_ID = useTransactions.TW_WC_PROJECT_ID;
exports.ThirdwebAuthProvider = useTransactions.ThirdwebAuthProvider;
exports.ThirdwebConfigProvider = useTransactions.ThirdwebConfigProvider;
exports.ThirdwebConnectedWalletProvider = useTransactions.ThirdwebConnectedWalletProvider;
exports.ThirdwebProviderCore = useTransactions.ThirdwebProviderCore;
exports.ThirdwebSDKProvider = useTransactions.ThirdwebSDKProvider;
exports.ThirdwebThemeContext = useTransactions.ThirdwebThemeContext;
exports.__DEV__ = useTransactions.__DEV__;
exports.compilerMetadata = useTransactions.compilerMetadata;
exports.contractType = useTransactions.contractType;
exports.getErc1155 = useTransactions.getErc1155;
exports.getErc20 = useTransactions.getErc20;
exports.getErc721 = useTransactions.getErc721;
exports.getErcs = useTransactions.getErcs;
exports.resolveIpfsUri = useTransactions.resolveIpfsUri;
exports.resolveMimeType = useTransactions.resolveMimeType;
exports.useAcceptDirectListingOffer = useTransactions.useAcceptDirectListingOffer;
exports.useActiveChain = useTransactions.useActiveChain;
exports.useActiveClaimCondition = useTransactions.useActiveClaimCondition;
exports.useActiveClaimConditionForWallet = useTransactions.useActiveClaimConditionForWallet;
exports.useActiveListings = useTransactions.useActiveListings;
exports.useAddress = useTransactions.useAddress;
exports.useAirdropNFT = useTransactions.useAirdropNFT;
exports.useAllRoleMembers = useTransactions.useAllRoleMembers;
exports.useAppURI = useTransactions.useAppURI;
exports.useAuctionWinner = useTransactions.useAuctionWinner;
exports.useAuth = useTransactions.useAuth;
exports.useBalance = useTransactions.useBalance;
exports.useBatchesToReveal = useTransactions.useBatchesToReveal;
exports.useBidBuffer = useTransactions.useBidBuffer;
exports.useBurnNFT = useTransactions.useBurnNFT;
exports.useBurnToken = useTransactions.useBurnToken;
exports.useBuyNow = useTransactions.useBuyNow;
exports.useCancelDirectListing = useTransactions.useCancelDirectListing;
exports.useCancelEnglishAuction = useTransactions.useCancelEnglishAuction;
exports.useCancelListing = useTransactions.useCancelListing;
exports.useChainId = useTransactions.useChainId;
exports.useClaimConditions = useTransactions.useClaimConditions;
exports.useClaimIneligibilityReasons = useTransactions.useClaimIneligibilityReasons;
exports.useClaimNFT = useTransactions.useClaimNFT;
exports.useClaimToken = useTransactions.useClaimToken;
exports.useClaimedNFTSupply = useTransactions.useClaimedNFTSupply;
exports.useClaimedNFTs = useTransactions.useClaimedNFTs;
exports.useClaimerProofs = useTransactions.useClaimerProofs;
exports.useCompilerMetadata = useTransactions.useCompilerMetadata;
exports.useConnect = useTransactions.useConnect;
exports.useConnectedWallet = useTransactions.useConnectedWallet;
exports.useConnectionStatus = useTransactions.useConnectionStatus;
exports.useContract = useTransactions.useContract;
exports.useContractEvents = useTransactions.useContractEvents;
exports.useContractMetadata = useTransactions.useContractMetadata;
exports.useContractMetadataUpdate = useTransactions.useContractMetadataUpdate;
exports.useContractRead = useTransactions.useContractRead;
exports.useContractType = useTransactions.useContractType;
exports.useContractWrite = useTransactions.useContractWrite;
exports.useCreateAuctionListing = useTransactions.useCreateAuctionListing;
exports.useCreateDirectListing = useTransactions.useCreateDirectListing;
exports.useCreateWalletInstance = useTransactions.useCreateWalletInstance;
exports.useDelayedRevealLazyMint = useTransactions.useDelayedRevealLazyMint;
exports.useDirectListing = useTransactions.useDirectListing;
exports.useDirectListings = useTransactions.useDirectListings;
exports.useDirectListingsCount = useTransactions.useDirectListingsCount;
exports.useDisconnect = useTransactions.useDisconnect;
exports.useEdition = useTransactions.useEdition;
exports.useEditionDrop = useTransactions.useEditionDrop;
exports.useEnglishAuction = useTransactions.useEnglishAuction;
exports.useEnglishAuctionWinningBid = useTransactions.useEnglishAuctionWinningBid;
exports.useEnglishAuctions = useTransactions.useEnglishAuctions;
exports.useEnglishAuctionsCount = useTransactions.useEnglishAuctionsCount;
exports.useExecuteAuctionSale = useTransactions.useExecuteAuctionSale;
exports.useGrantRole = useTransactions.useGrantRole;
exports.useIsAddressRole = useTransactions.useIsAddressRole;
exports.useLazyMint = useTransactions.useLazyMint;
exports.useListing = useTransactions.useListing;
exports.useListings = useTransactions.useListings;
exports.useListingsCount = useTransactions.useListingsCount;
exports.useLogin = useTransactions.useLogin;
exports.useLogout = useTransactions.useLogout;
exports.useMakeBid = useTransactions.useMakeBid;
exports.useMakeOffer = useTransactions.useMakeOffer;
exports.useMarketplace = useTransactions.useMarketplace;
exports.useMetadata = useTransactions.useMetadata;
exports.useMinimumNextBid = useTransactions.useMinimumNextBid;
exports.useMintNFT = useTransactions.useMintNFT;
exports.useMintNFTSupply = useTransactions.useMintNFTSupply;
exports.useMintToken = useTransactions.useMintToken;
exports.useMultiwrap = useTransactions.useMultiwrap;
exports.useNFT = useTransactions.useNFT;
exports.useNFTBalance = useTransactions.useNFTBalance;
exports.useNFTCollection = useTransactions.useNFTCollection;
exports.useNFTDrop = useTransactions.useNFTDrop;
exports.useNFTs = useTransactions.useNFTs;
exports.useNetworkMismatch = useTransactions.useNetworkMismatch;
exports.useOffers = useTransactions.useOffers;
exports.useOwnedNFTs = useTransactions.useOwnedNFTs;
exports.usePack = useTransactions.usePack;
exports.usePlatformFees = useTransactions.usePlatformFees;
exports.usePrimarySaleRecipient = useTransactions.usePrimarySaleRecipient;
exports.useReadonlySDK = useTransactions.useReadonlySDK;
exports.useResetClaimConditions = useTransactions.useResetClaimConditions;
exports.useRevealLazyMint = useTransactions.useRevealLazyMint;
exports.useRevokeRole = useTransactions.useRevokeRole;
exports.useRoleMembers = useTransactions.useRoleMembers;
exports.useRoyaltySettings = useTransactions.useRoyaltySettings;
exports.useSDK = useTransactions.useSDK;
exports.useSDKChainId = useTransactions.useSDKChainId;
exports.useSetAllRoleMembers = useTransactions.useSetAllRoleMembers;
exports.useSetAppURI = useTransactions.useSetAppURI;
exports.useSetClaimConditions = useTransactions.useSetClaimConditions;
exports.useSignatureDrop = useTransactions.useSignatureDrop;
exports.useSigner = useTransactions.useSigner;
exports.useSplit = useTransactions.useSplit;
exports.useStorage = useTransactions.useStorage;
exports.useStorageUpload = useTransactions.useStorageUpload;
exports.useSupportedChains = useTransactions.useSupportedChains;
exports.useSwitchChain = useTransactions.useSwitchChain;
exports.useThirdwebAuthContext = useTransactions.useThirdwebAuthContext;
exports.useThirdwebConfigContext = useTransactions.useThirdwebConfigContext;
exports.useThirdwebConnectedWalletContext = useTransactions.useThirdwebConnectedWalletContext;
exports.useThirdwebWallet = useTransactions.useThirdwebWallet;
exports.useToken = useTransactions.useToken;
exports.useTokenBalance = useTransactions.useTokenBalance;
exports.useTokenDecimals = useTransactions.useTokenDecimals;
exports.useTokenDrop = useTransactions.useTokenDrop;
exports.useTokenSupply = useTransactions.useTokenSupply;
exports.useTotalCirculatingSupply = useTransactions.useTotalCirculatingSupply;
exports.useTotalCount = useTransactions.useTotalCount;
exports.useTransferBatchToken = useTransactions.useTransferBatchToken;
exports.useTransferNFT = useTransactions.useTransferNFT;
exports.useTransferToken = useTransactions.useTransferToken;
exports.useUnclaimedNFTSupply = useTransactions.useUnclaimedNFTSupply;
exports.useUnclaimedNFTs = useTransactions.useUnclaimedNFTs;
exports.useUpdateMetadata = useTransactions.useUpdateMetadata;
exports.useUpdatePlatformFees = useTransactions.useUpdatePlatformFees;
exports.useUpdatePrimarySaleRecipient = useTransactions.useUpdatePrimarySaleRecipient;
exports.useUpdateRoyaltySettings = useTransactions.useUpdateRoyaltySettings;
exports.useUser = useTransactions.useUser;
exports.useValidDirectListings = useTransactions.useValidDirectListings;
exports.useValidEnglishAuctions = useTransactions.useValidEnglishAuctions;
exports.useVote = useTransactions.useVote;
exports.useWallet = useTransactions.useWallet;
exports.useWallets = useTransactions.useWallets;
exports.useWatchTransactions = useTransactions.useWatchTransactions;
exports.useWinningBid = useTransactions.useWinningBid;
exports.shouldNeverPersistQuery = requiredParam.shouldNeverPersistQuery;
Object.keys(sdk).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return sdk[k]; }
	});
});