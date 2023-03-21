'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-97ab6a6c.cjs.prod.js');
require('../../../../dist/classPrivateMethodGet-5131251f.cjs.prod.js');
require('../../../../dist/checkPrivateRedeclaration-fd0a01ed.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('eventemitter3');

class PaperWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractBrowserWallet {
  get walletName() {
    return "Paper Wallet";
  }
  constructor(options) {
    super(PaperWallet.id, {
      ...options,
      shouldAutoConnect: false // TODO figure the autoconnect flow
    });
    defineProperty._defineProperty(this, "connector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      const {
        PaperWalletConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/paper/dist/thirdweb-dev-wallets-evm-connectors-paper.cjs.prod.js'); });
      this.connector = new PaperWalletConnector({
        clientId: this.options.clientId,
        chain: this.options.chain,
        chains: this.options.chains
      });
    }
    return this.connector;
  }
  async updateChains(chains) {
    this.options.chains = chains;
  }
}
defineProperty._defineProperty(PaperWallet, "id", "PaperWallet");
defineProperty._defineProperty(PaperWallet, "meta", {
  name: "Paper Wallet",
  iconURL: "ipfs://QmNrLXtPoFrh4yjZbXui39zUMozS1oetpgU8dvZhFAxfRa/paper-logo-icon.svg"
});

exports.PaperWallet = PaperWallet;
