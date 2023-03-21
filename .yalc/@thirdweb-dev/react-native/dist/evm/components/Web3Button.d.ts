import type { SmartContract } from "@thirdweb-dev/sdk";
import type { CallOverrides, ContractInterface } from "ethers";
import { PropsWithChildren } from "react";
type ActionFn = (contract: SmartContract) => any;
interface Web3ButtonProps<TActionFn extends ActionFn> {
    contractAddress: `0x${string}` | `${string}.eth` | string;
    contractAbi?: ContractInterface;
    overrides?: CallOverrides;
    onSuccess?: (result: Awaited<ReturnType<TActionFn>>) => void;
    onError?: (error: Error) => void;
    onSubmit?: () => void;
    isDisabled?: boolean;
    action: TActionFn;
    theme?: "dark" | "light";
}
/**
 * A component that allows the user to call an on-chain function on a contract.
 *
 * The button has to be wrapped in a `ThirdwebProvider` in order to function.
 *
 * @example
 * ```javascript
 * import { Web3Button } from "@thirdweb-dev/react-native";
 *
 * const App = () => {
 *  return (
 *   <View>
 *     <Web3Button contractAddress="0x..." action={(contract) => contract.erc721.transfer("0x...", 1)} />
 *   </View>
 *  )
 * }
 * ```
 *
 *
 * @beta
 */
export declare const Web3Button: <TAction extends ActionFn>({ contractAddress, onSuccess, onError, onSubmit, isDisabled, contractAbi, children, action, theme, }: PropsWithChildren<Web3ButtonProps<TAction>>) => JSX.Element;
export {};
