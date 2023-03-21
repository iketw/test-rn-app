'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-c4b4a0d5.cjs.dev.js');
require('../../../../dist/classPrivateMethodGet-13694527.cjs.dev.js');
require('../../../../dist/checkPrivateRedeclaration-09e2947a.cjs.dev.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('ethers');
require('eventemitter3');

class SafeWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractBrowserWallet {
  get walletName() {
    return "Safe Wallet";
  }
  constructor(options) {
    super(SafeWallet.id, {
      ...options,
      shouldAutoConnect: false // TODO figure the autoconnect flow
    });
    defineProperty._defineProperty(this, "connector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      const {
        SafeConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/safe/dist/thirdweb-dev-wallets-evm-connectors-safe.cjs.dev.js'); });
      this.connector = new SafeConnector();
    }
    return this.connector;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateChains(chains) {
    // no op
  }
}
defineProperty._defineProperty(SafeWallet, "id", "safe-wallet");

exports.SafeWallet = SafeWallet;
