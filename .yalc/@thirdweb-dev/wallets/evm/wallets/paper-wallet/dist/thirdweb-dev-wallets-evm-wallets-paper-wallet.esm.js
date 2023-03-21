import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { a as AbstractBrowserWallet } from '../../../../dist/base-def6ac05.esm.js';
import '../../../../dist/classPrivateMethodGet-fb5087d9.esm.js';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';
import 'eventemitter3';

class PaperWallet extends AbstractBrowserWallet {
  get walletName() {
    return "Paper Wallet";
  }
  constructor(options) {
    super(PaperWallet.id, {
      ...options,
      shouldAutoConnect: false // TODO figure the autoconnect flow
    });
    _defineProperty(this, "connector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      const {
        PaperWalletConnector
      } = await import('../../../connectors/paper/dist/thirdweb-dev-wallets-evm-connectors-paper.esm.js');
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
_defineProperty(PaperWallet, "id", "PaperWallet");
_defineProperty(PaperWallet, "meta", {
  name: "Paper Wallet",
  iconURL: "ipfs://QmNrLXtPoFrh4yjZbXui39zUMozS1oetpgU8dvZhFAxfRa/paper-logo-icon.svg"
});

export { PaperWallet };
