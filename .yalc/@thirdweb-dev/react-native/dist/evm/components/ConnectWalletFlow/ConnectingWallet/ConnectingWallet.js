import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppTheme } from "../../../styles/hooks";
import Text from "../../base/Text";
import { ModalFooter } from "../../base/modal/ModalFooter";
import { ConnectWalletHeader } from "./ConnectingWalletHeader";
import { ActivityIndicator, Linking, StyleSheet, View } from "react-native";
export function ConnectingWallet({ subHeaderText, content, wallet, footer, onClose, onBackPress, }) {
    const theme = useAppTheme();
    const onFooterPress = () => {
        Linking.openURL("https://support.thirdweb.com/");
    };
    return (_jsxs(View, { children: [_jsx(ConnectWalletHeader, { onBackPress: onBackPress, walletLogoUrl: wallet.meta.iconURL, subHeaderText: subHeaderText, close: onClose }), _jsxs(View, { style: styles.connectingContainer, children: [_jsx(ActivityIndicator, { size: "small", color: theme.colors.linkPrimary }), content ? (content) : (_jsxs(Text, { variant: "bodySmallSecondary", mt: "md", children: ["Connect your wallet through the ", wallet.meta.name, " application."] }))] }), footer ? (footer) : (_jsx(ModalFooter, { footer: `Having troubles connecting to ${wallet.meta.name}?`, onPress: onFooterPress }))] }));
}
const styles = StyleSheet.create({
    connectingContainer: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        paddingHorizontal: 4,
        marginTop: 18,
    },
});
