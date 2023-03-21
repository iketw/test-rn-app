import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import BaseButton from "../base/BaseButton";
import Text from "../base/Text";
import { TWModal } from "../base/modal/TWModal";
import { ChooseWallet } from "./ChooseWallet/ChooseWallet";
import { useConnect, useWallets, } from "@thirdweb-dev/react-core";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { ConnectingWallet } from "./ConnectingWallet/ConnectingWallet";
import { DeviceWallet } from "../../wallets/wallets/all";
export const ConnectWalletFlow = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [activeWallet, setActiveWallet] = useState();
    const connect = useConnect();
    const supportedWallets = useWallets();
    const onConnectPress = () => {
        setModalVisible(true);
    };
    const onClose = () => {
        setModalVisible(false);
        setActiveWallet(undefined);
    };
    const onChooseWallet = async (wallet) => {
        setActiveWallet(() => wallet);
        if (wallet.name === DeviceWallet.name) {
            // Let the UI update before calling connect. This is a costly operation
            setTimeout(() => {
                connect(wallet, { password: "" }).catch((error) => {
                    console.log("error", error);
                    onBackPress();
                });
            }, 0);
        }
        else {
            connect(wallet, {}).catch((error) => {
                console.log("error", error);
                onBackPress();
            });
        }
    };
    const onBackPress = () => {
        setActiveWallet(undefined);
    };
    return (_jsxs(_Fragment, { children: [_jsx(TWModal, { isVisible: modalVisible, children: activeWallet ? (_jsx(ConnectingWallet, { content: activeWallet.name === DeviceWallet.name ? (_jsx(Text, { variant: "bodySmallSecondary", mt: "md", children: "Creating, encrypting and securing your device wallet." })) : undefined, wallet: activeWallet, onClose: onClose, onBackPress: onBackPress })) : (_jsx(ChooseWallet, { wallets: supportedWallets, onChooseWallet: onChooseWallet, footer: _jsx(_Fragment, {}), onClose: onClose })) }), _jsx(BaseButton, { backgroundColor: "white", onPress: onConnectPress, style: styles.connectWalletButton, children: _jsx(Text, { variant: "bodyLarge", color: "black", children: "Connect Wallet" }) })] }));
};
const styles = StyleSheet.create({
    connectWalletButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
