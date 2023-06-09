'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-d86606c4.cjs.dev.js');
var evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract = require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('../../../../dist/checkPrivateRedeclaration-09e2947a.cjs.dev.js');
require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
require('ethers');
require('eventemitter3');

var _signer = /*#__PURE__*/new WeakMap();
class EthersWallet extends evm_wallets_abstract_dist_thirdwebDevWalletsEvmWalletsAbstract.AbstractWallet {
  constructor(signer) {
    super();
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldSet(this, _signer, signer);
  }
  async getSigner() {
    return classPrivateFieldSet._classPrivateFieldGet(this, _signer);
  }
}

exports.EthersWallet = EthersWallet;
