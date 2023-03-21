import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { a as AbstractBrowserWallet } from '../../../../dist/base-def6ac05.esm.js';
import '../../../../dist/classPrivateMethodGet-fb5087d9.esm.js';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';
import 'eventemitter3';

class SafeWallet extends AbstractBrowserWallet {
  get walletName() {
    return "Safe Wallet";
  }
  constructor(options) {
    super(SafeWallet.id, {
      ...options,
      shouldAutoConnect: false // TODO figure the autoconnect flow
    });
    _defineProperty(this, "connector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      const {
        SafeConnector
      } = await import('../../../connectors/safe/dist/thirdweb-dev-wallets-evm-connectors-safe.esm.js');
      this.connector = new SafeConnector();
    }
    return this.connector;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateChains(chains) {
    // no op
  }
}
_defineProperty(SafeWallet, "id", "safe-wallet");

export { SafeWallet };
