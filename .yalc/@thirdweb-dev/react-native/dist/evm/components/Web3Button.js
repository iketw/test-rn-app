import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from "../styles/ThemeProvider";
import { ConnectWallet } from "./ConnectWallet";
import BaseButton from "./base/BaseButton";
import Text from "./base/Text";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAddress, useChainId, useContract, useNetworkMismatch, useSDKChainId, useSwitchChain, useConnectionStatus, useWallet, } from "@thirdweb-dev/react-core";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import invariant from "tiny-invariant";
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
export const Web3Button = ({ contractAddress, onSuccess, onError, onSubmit, isDisabled, contractAbi, children, action, theme, }) => {
    const address = useAddress();
    const activeWallet = useWallet();
    const walletChainId = useChainId();
    const sdkChainId = useSDKChainId();
    const switchChain = useSwitchChain();
    const hasMismatch = useNetworkMismatch();
    const needToSwitchChain = sdkChainId && walletChainId && sdkChainId !== walletChainId;
    const connectionStatus = useConnectionStatus();
    const queryClient = useQueryClient();
    const { contract } = useContract(contractAddress, contractAbi || "custom");
    const actionMutation = useMutation(async () => {
        invariant(contract, "contract is not ready yet");
        // if need to switch the chain to perform the action
        if (needToSwitchChain) {
            await switchChain(sdkChainId);
            return "__NETWORK_SWITCHED__";
        }
        if (onSubmit) {
            onSubmit();
        }
        // Wait for the promise to resolve, so errors get caught by onError
        const result = await action(contract);
        return result;
    }, {
        onSuccess: (res) => {
            if (res === "__NETWORK_SWITCHED__") {
                return;
            }
            if (onSuccess) {
                onSuccess(res);
            }
        },
        onError: (err) => {
            if (onError) {
                onError(err);
            }
        },
        onSettled: () => queryClient.invalidateQueries(),
    });
    useEffect(() => {
        if (!activeWallet && actionMutation.isLoading) {
            actionMutation.reset();
        }
    }, [actionMutation, activeWallet]);
    if (!address) {
        return _jsx(ConnectWallet, { theme: theme });
    }
    let content = children;
    let buttonDisabled = !!isDisabled;
    let buttonLoading = false;
    // if button is disabled, show original action
    if (!buttonDisabled) {
        if (hasMismatch) {
            content = "Switch Network";
        }
        else if (actionMutation.isLoading ||
            !contract ||
            connectionStatus === "connecting" ||
            connectionStatus === "unknown") {
            content = _jsx(ActivityIndicator, { size: "small", color: "black" });
            buttonLoading = true;
        }
    }
    return (_jsx(ThemeProvider, { theme: theme, children: _jsx(BaseButton, { backgroundColor: "white", onPress: () => {
                actionMutation.mutate();
            }, style: styles.actionButton, disabled: buttonDisabled || buttonLoading, children: typeof content === "string" ? (_jsx(Text, { variant: "bodyLarge", color: "black", children: content })) : (content) }) }));
};
const styles = StyleSheet.create({
    actionButton: {
        minWidth: 120,
        minHeight: 43,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
