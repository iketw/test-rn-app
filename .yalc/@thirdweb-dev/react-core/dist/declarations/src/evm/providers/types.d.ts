import { QueryClientProviderProps } from "../../core/providers/query-client";
import { Chain, defaultChains } from "@thirdweb-dev/chains";
import { SDKOptions } from "@thirdweb-dev/sdk";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { Signer } from "ethers";
import { ThirdwebAuthConfig } from "../contexts/thirdweb-auth";
export interface ThirdwebSDKProviderProps<TChains extends Chain[] = typeof defaultChains> extends QueryClientProviderProps {
    supportedChains?: Readonly<TChains>;
    signer?: Signer;
    sdkOptions?: Omit<SDKOptions, "chains">;
    storageInterface?: ThirdwebStorage;
    authConfig?: ThirdwebAuthConfig;
    activeChain?: TChains[number]["chainId"] | TChains[number]["slug"] | Chain;
    thirdwebApiKey?: string;
    alchemyApiKey?: string;
    infuraApiKey?: string;
}
//# sourceMappingURL=types.d.ts.map