import { KeypairWallet } from '../../keypair/dist/thirdweb-dev-wallets-solana-wallets-keypair.esm.js';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import '../../../../dist/defineProperty-e24c82ea.esm.js';
import '../../../../dist/classPrivateFieldSet-0ee02dfd.esm.js';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import '@noble/ed25519';
import '../../base/dist/thirdweb-dev-wallets-solana-wallets-base.esm.js';
import 'tweetnacl';

class PrivateKeyWallet extends KeypairWallet {
  constructor(privateKey) {
    super(Keypair.fromSecretKey(bs58.decode(privateKey)));
  }
}

export { PrivateKeyWallet };
