'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../base/dist/thirdweb-dev-wallets-evm-wallets-base.cjs.dev.js');
require('../../../../dist/classPrivateMethodGet-13694527.cjs.dev.js');
require('../../../../dist/checkPrivateRedeclaration-09e2947a.cjs.dev.js');
require('../../../../dist/abstract-980b80c2.cjs.dev.js');
require('@thirdweb-dev/chains');
require('ethers');
require('eventemitter3');

class EmailWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractBrowserWallet {
  get walletName() {
    return "Email Wallet";
  }
  constructor(options) {
    super(EmailWallet.id, {
      ...options,
      shouldAutoConnect: false // TODO figure the autoconnect flow
    });
    defineProperty._defineProperty(this, "connector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      const {
        EmailWalletConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/email/dist/thirdweb-dev-wallets-evm-connectors-email.cjs.dev.js'); });
      this.connector = new EmailWalletConnector({
        clientId: this.options.clientId,
        chain: this.options.chain
      });
    }
    return this.connector;
  }
}
defineProperty._defineProperty(EmailWallet, "id", "email-wallet");

exports.EmailWallet = EmailWallet;
