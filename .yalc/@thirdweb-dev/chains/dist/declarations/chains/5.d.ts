declare const _default: {
    readonly name: "Goerli";
    readonly title: "Ethereum Testnet Goerli";
    readonly chain: "ETH";
    readonly rpc: readonly ["https://goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://goerli.infura.io/v3/${INFURA_API_KEY}", "wss://goerli.infura.io/v3/${INFURA_API_KEY}", "https://rpc.goerli.mudit.blog/"];
    readonly faucets: readonly ["https://faucet.paradigm.xyz/", "http://fauceth.komputing.org?chain=5&address=${ADDRESS}", "https://goerli-faucet.slock.it?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"];
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly infoURL: "https://goerli.net/#about";
    readonly shortName: "gor";
    readonly chainId: 5;
    readonly networkId: 5;
    readonly ens: {
        readonly registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010";
    };
    readonly explorers: readonly [{
        readonly name: "etherscan-goerli";
        readonly url: "https://goerli.etherscan.io";
        readonly standard: "EIP3091";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly testnet: true;
    readonly slug: "goerli";
};
export default _default;
//# sourceMappingURL=5.d.ts.map