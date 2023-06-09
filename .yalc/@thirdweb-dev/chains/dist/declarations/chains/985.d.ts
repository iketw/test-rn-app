declare const _default: {
    readonly name: "Memo Smart Chain Mainnet";
    readonly chain: "MEMO";
    readonly rpc: readonly ["https://memo-smart-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://chain.metamemo.one:8501", "wss://chain.metamemo.one:16801"];
    readonly faucets: readonly ["https://faucet.metamemo.one/"];
    readonly nativeCurrency: {
        readonly name: "Memo";
        readonly symbol: "CMEMO";
        readonly decimals: 18;
    };
    readonly infoURL: "www.memolabs.org";
    readonly shortName: "memochain";
    readonly chainId: 985;
    readonly networkId: 985;
    readonly icon: {
        readonly url: "ipfs://bafkreig52paynhccs4o5ew6f7mk3xoqu2bqtitmfvlgnwarh2pm33gbdrq";
        readonly width: 128;
        readonly height: 128;
        readonly format: "png";
    };
    readonly explorers: readonly [{
        readonly name: "Memo Mainnet Explorer";
        readonly url: "https://scan.metamemo.one:8080";
        readonly icon: "memo";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "memo-smart-chain";
};
export default _default;
//# sourceMappingURL=985.d.ts.map