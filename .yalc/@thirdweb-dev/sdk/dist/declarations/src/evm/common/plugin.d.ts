import { Abi, SDKOptions } from "../schema";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { ethers } from "ethers";
/**
 * @internal
 */
export declare function getCompositePluginABI(address: string, abi: Abi, provider: ethers.providers.Provider, options: SDKOptions, storage: ThirdwebStorage): Promise<Abi>;
export declare function isRouterContract(abi: Abi): boolean;
/**
 * @internal
 */
export declare function joinABIs(abis: Abi[]): Abi;
//# sourceMappingURL=plugin.d.ts.map