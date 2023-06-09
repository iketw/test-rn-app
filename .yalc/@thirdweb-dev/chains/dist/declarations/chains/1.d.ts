declare const _default: {
    readonly name: "Ethereum Mainnet";
    readonly chain: "ETH";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly rpc: readonly ["https://ethereum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com", "https://ethereum.publicnode.com"];
    readonly features: readonly [{
        readonly name: "EIP1559";
    }, {
        readonly name: "EIP155";
    }];
    readonly faucets: readonly [];
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://ethereum.org";
    readonly shortName: "eth";
    readonly chainId: 1;
    readonly networkId: 1;
    readonly slip44: 60;
    readonly ens: {
        readonly registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
    };
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://etherscan.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "ethereum";
};
export default _default;
//# sourceMappingURL=1.d.ts.map