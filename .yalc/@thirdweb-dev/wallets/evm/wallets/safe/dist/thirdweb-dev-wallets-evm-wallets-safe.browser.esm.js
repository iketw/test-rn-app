import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { a as AbstractBrowserWallet } from '../../../../dist/base-0e9eea02.browser.esm.js';
import '../../../../dist/classPrivateMethodGet-9d546189.browser.esm.js';
import '../../../../dist/checkPrivateRedeclaration-3aaaa21d.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
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
      } = await import('../../../connectors/safe/dist/thirdweb-dev-wallets-evm-connectors-safe.browser.esm.js');
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
