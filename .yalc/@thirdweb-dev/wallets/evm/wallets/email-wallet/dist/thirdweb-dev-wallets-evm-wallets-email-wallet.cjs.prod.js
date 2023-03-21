'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../base/dist/thirdweb-dev-wallets-evm-wallets-base.cjs.prod.js');
require('../../../../dist/classPrivateMethodGet-5131251f.cjs.prod.js');
require('../../../../dist/checkPrivateRedeclaration-fd0a01ed.cjs.prod.js');
require('../../../../dist/abstract-715d92f7.cjs.prod.js');
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
      } = await Promise.resolve().then(function () { return require('../../../connectors/email/dist/thirdweb-dev-wallets-evm-connectors-email.cjs.prod.js'); });
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
