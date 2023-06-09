declare const _default: {
    readonly name: "Gnosis";
    readonly chain: "GNO";
    readonly icon: {
        readonly url: "ipfs://bafybeidk4swpgdyqmpz6shd5onvpaujvwiwthrhypufnwr6xh3dausz2dm";
        readonly width: 1800;
        readonly height: 1800;
        readonly format: "png";
    };
    readonly rpc: readonly ["https://gnosis.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.gnosischain.com", "https://rpc.ankr.com/gnosis", "https://gnosischain-rpc.gateway.pokt.network", "https://gnosis-mainnet.public.blastapi.io", "wss://rpc.gnosischain.com/wss"];
    readonly faucets: readonly ["https://gnosisfaucet.com", "https://faucet.gimlu.com/gnosis", "https://stakely.io/faucet/gnosis-chain-xdai", "https://faucet.prussia.dev/xdai"];
    readonly nativeCurrency: {
        readonly name: "xDAI";
        readonly symbol: "xDAI";
        readonly decimals: 18;
    };
    readonly infoURL: "https://docs.gnosischain.com";
    readonly shortName: "gno";
    readonly chainId: 100;
    readonly networkId: 100;
    readonly slip44: 700;
    readonly explorers: readonly [{
        readonly name: "gnosisscan";
        readonly url: "https://gnosisscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout";
        readonly url: "https://blockscout.com/xdai/mainnet";
        readonly icon: "blockscout";
        readonly standard: "EIP3091";
    }];
    readonly testnet: false;
    readonly slug: "gnosis";
};
export default _default;
//# sourceMappingURL=100.d.ts.map