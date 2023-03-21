'use strict';

var watchTransactions = require('./watchTransactions-73b96089.cjs.prod.js');
var zod = require('zod');
var QueryParams = require('./QueryParams-6754e8c0.cjs.prod.js');

const PropertiesInput = zod.z.object({}).catchall(zod.z.union([watchTransactions.BigNumberTransformSchema, zod.z.unknown()]));

/**
 * @internal
 */
const OptionalPropertiesInput = zod.z.union([zod.z.array(PropertiesInput), PropertiesInput]).optional();

/**
 * @internal
 */
const EditionMetadataOutputSchema = zod.z.object({
  supply: watchTransactions.BigNumberSchema,
  metadata: QueryParams.CommonNFTOutput
});

/**
 * @internal
 */
const EditionMetadataWithOwnerOutputSchema = EditionMetadataOutputSchema.extend({
  owner: zod.z.string(),
  quantityOwned: watchTransactions.BigNumberSchema
});

/**
 * @internal
 */
const EditionMetadataInputSchema = zod.z.object({
  supply: watchTransactions.BigNumberishSchema,
  metadata: QueryParams.CommonNFTInput
});

/**
 * @internal
 */
const EditionMetadataInputOrUriSchema = zod.z.object({
  supply: watchTransactions.BigNumberishSchema,
  metadata: QueryParams.NFTInputOrUriSchema
});

/**
 * @public
 */

/**
 * @internal
 */
const TokenMintInputSchema = zod.z.object({
  toAddress: watchTransactions.AddressOrEnsSchema,
  amount: QueryParams.AmountSchema
});

/**
 * @public
 */

let ProposalState = /*#__PURE__*/function (ProposalState) {
  ProposalState[ProposalState["Pending"] = 0] = "Pending";
  ProposalState[ProposalState["Active"] = 1] = "Active";
  ProposalState[ProposalState["Canceled"] = 2] = "Canceled";
  ProposalState[ProposalState["Defeated"] = 3] = "Defeated";
  ProposalState[ProposalState["Succeeded"] = 4] = "Succeeded";
  ProposalState[ProposalState["Queued"] = 5] = "Queued";
  ProposalState[ProposalState["Expired"] = 6] = "Expired";
  ProposalState[ProposalState["Executed"] = 7] = "Executed";
  return ProposalState;
}({});

exports.EditionMetadataInputOrUriSchema = EditionMetadataInputOrUriSchema;
exports.EditionMetadataInputSchema = EditionMetadataInputSchema;
exports.EditionMetadataOutputSchema = EditionMetadataOutputSchema;
exports.EditionMetadataWithOwnerOutputSchema = EditionMetadataWithOwnerOutputSchema;
exports.OptionalPropertiesInput = OptionalPropertiesInput;
exports.ProposalState = ProposalState;
exports.TokenMintInputSchema = TokenMintInputSchema;
