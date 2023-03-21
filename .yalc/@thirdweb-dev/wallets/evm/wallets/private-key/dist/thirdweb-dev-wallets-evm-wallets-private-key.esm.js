import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-0ee02dfd.esm.js';
import { AbstractWallet } from '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import { ethers } from 'ethers';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import '../../../../dist/defineProperty-e24c82ea.esm.js';
import 'eventemitter3';

var _signer = /*#__PURE__*/new WeakMap();
class PrivateKeyWallet extends AbstractWallet {
  constructor(privateKey) {
    super();
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _signer, new ethers.Wallet(privateKey));
  }
  async getSigner() {
    return _classPrivateFieldGet(this, _signer);
  }
}

export { PrivateKeyWallet };
