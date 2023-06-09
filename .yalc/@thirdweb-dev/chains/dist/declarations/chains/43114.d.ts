declare const _default: {
    readonly name: "Avalanche C-Chain";
    readonly chain: "AVAX";
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png";
        readonly height: 512;
        readonly width: 512;
        readonly format: "png";
        readonly sizes: readonly [512, 256, 128, 64, 32, 16];
    };
    readonly rpc: readonly ["https://avalanche.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://api.avax.network/ext/bc/C/rpc", "https://avalanche-c-chain.publicnode.com"];
    readonly features: readonly [{
        readonly name: "EIP1559";
    }];
    readonly faucets: readonly ["https://free-online-app.com/faucet-for-eth-evm-chains/"];
    readonly nativeCurrency: {
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
        readonly decimals: 18;
    };
    readonly infoURL: "https://www.avax.network/";
    readonly shortName: "avax";
    readonly chainId: 43114;
    readonly networkId: 43114;
    readonly slip44: 9005;
    readonly explorers: readonly [{
        readonly name: "snowtrace";
        readonly url: "https://snowtrace.io";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "avalanche";
};
export default _default;
//# sourceMappingURL=43114.d.ts.map