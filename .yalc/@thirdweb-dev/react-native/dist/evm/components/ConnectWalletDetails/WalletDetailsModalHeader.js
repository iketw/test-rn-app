import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Icon } from "../../assets/icon";
import { useAppTheme } from "../../styles/hooks";
import { Address } from "../base/Address";
import Text from "../base/Text";
import { WalletIcon } from "../base/WalletIcon";
import { useWallet, useBalance } from "@thirdweb-dev/react-core";
import { ActivityIndicator, StyleSheet, View } from "react-native";
export const WalletDetailsModalHeader = ({ address, onDisconnectPress, loading, }) => {
    const theme = useAppTheme();
    const balanceQuery = useBalance();
    const activeWallet = useWallet();
    return (_jsx(_Fragment, { children: _jsxs(View, { style: styles.header, children: [_jsx(WalletIcon, { size: 40, iconUri: activeWallet?.getMeta().iconURL || "" }), _jsxs(View, { style: styles.walletInfo, children: [_jsx(Address, { address: address }), _jsxs(Text, { variant: "bodySmallSecondary", children: [balanceQuery.data?.displayValue.slice(0, 5), " ", balanceQuery.data?.symbol] })] }), loading ? (_jsx(ActivityIndicator, { size: 18, color: theme.colors.iconHighlight })) : (_jsx(Icon, { type: "disconnect", size: 18, onPress: onDisconnectPress, color: theme.colors.iconHighlight }))] }) }));
};
const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    walletInfo: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        marginLeft: 16,
    },
});
