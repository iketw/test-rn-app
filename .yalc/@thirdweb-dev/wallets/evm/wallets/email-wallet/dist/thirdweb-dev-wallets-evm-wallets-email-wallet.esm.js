import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { AbstractBrowserWallet } from '../../base/dist/thirdweb-dev-wallets-evm-wallets-base.esm.js';
import '../../../../dist/classPrivateMethodGet-fb5087d9.esm.js';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import '../../../../dist/abstract-c90dfb8e.esm.js';
import '@thirdweb-dev/chains';
import 'ethers';
import 'eventemitter3';

class EmailWallet extends AbstractBrowserWallet {
  get walletName() {
    return "Email Wallet";
  }
  constructor(options) {
    super(EmailWallet.id, {
      ...options,
      shouldAutoConnect: false // TODO figure the autoconnect flow
    });
    _defineProperty(this, "connector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      const {
        EmailWalletConnector
      } = await import('../../../connectors/email/dist/thirdweb-dev-wallets-evm-connectors-email.esm.js');
      this.connector = new EmailWalletConnector({
        clientId: this.options.clientId,
        chain: this.options.chain
      });
    }
    return this.connector;
  }
}
_defineProperty(EmailWallet, "id", "email-wallet");

export { EmailWallet };
