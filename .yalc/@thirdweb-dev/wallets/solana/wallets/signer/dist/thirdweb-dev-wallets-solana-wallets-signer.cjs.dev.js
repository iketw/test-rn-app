'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var solana_wallets_base_dist_thirdwebDevWalletsSolanaWalletsBase = require('../../base/dist/thirdweb-dev-wallets-solana-wallets-base.cjs.dev.js');
require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
require('bs58');
require('tweetnacl');

class SignerWallet extends solana_wallets_base_dist_thirdwebDevWalletsSolanaWalletsBase.AbstractWallet {
  constructor(signer) {
    super();
    this.signer = signer;
  }
  async getSigner() {
    return this.signer;
  }
}

exports.SignerWallet = SignerWallet;
