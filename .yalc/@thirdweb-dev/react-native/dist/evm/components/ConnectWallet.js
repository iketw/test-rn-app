import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from "../styles/ThemeProvider";
import { ConnectWalletDetails } from "./ConnectWalletDetails/ConnectWalletDetails";
import { ConnectWalletFlow } from "./ConnectWalletFlow/ConnectWalletFlow";
import { useAddress } from "@thirdweb-dev/react-core";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";
export const ConnectWallet = ({ theme }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const address = useAddress();
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);
    return (_jsx(ThemeProvider, { theme: theme, children: _jsx(Animated.View, { style: { opacity: fadeAnim }, children: address ? (_jsx(ConnectWalletDetails, { address: address })) : (_jsx(ConnectWalletFlow, {})) }) }));
};
