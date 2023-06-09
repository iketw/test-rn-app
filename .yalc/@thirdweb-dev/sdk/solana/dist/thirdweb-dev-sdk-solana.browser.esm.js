export { f as CommonContractOutputSchema, C as CommonContractSchema, g as CreatorInputSchema, D as Deployer, b as NFTCollection, N as NFTCollectionMetadataInputSchema, c as NFTDrop, a as NFTDropContractInputSchema, h as NFTDropInitialConditionsInputSchema, i as NFTDropUpdatableConditionsInputSchema, j as NFTDropUpdatableConditionsOutputSchema, P as Program, e as ThirdwebSDK, d as Token, T as TokenMetadataInputSchema, U as UserWallet, l as getNework, m as getPublicRpc, k as getUrlForNetwork } from '../../dist/sdk-f0e97dda.browser.esm.js';
import { PublicKey } from '@solana/web3.js';
import { z } from 'zod';
import '../../dist/QueryParams-7d9473b5.browser.esm.js';
import 'bn.js';
import 'ethers';
import '@metaplex-foundation/js';
import '@metaplex-foundation/mpl-token-metadata';
import '@project-serum/anchor';
import 'buffer/';
import '@solana/spl-token';
import 'bs58';
import 'eventemitter3';
import 'tiny-invariant';
import 'tweetnacl';
import '@thirdweb-dev/storage';

/**
 * @internal
 */
const PropertiesInput = z.object({}).catchall(z.unknown());

/**
 * @internal
 */
const OptionalPropertiesInput = z.union([z.array(PropertiesInput), PropertiesInput]).optional();

/**
 * @internal
 */
const RawDateSchema = z.date().transform(i => {
  return Math.floor(i.getTime() / 1000);
});

/**
 * @internal
 */

/**
 * @internal
 */
const AddressSchema = z.union([z.string(), z.instanceof(PublicKey).transform(key => key.toBase58())]);

export { AddressSchema, OptionalPropertiesInput, RawDateSchema };
