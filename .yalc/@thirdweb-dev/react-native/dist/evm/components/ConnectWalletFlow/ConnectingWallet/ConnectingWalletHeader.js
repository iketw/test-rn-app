import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Icon } from "../../../assets/icon";
import { useAppTheme } from "../../../styles/hooks";
import ImageSvgUri from "../../base/ImageSvgUri";
import Text from "../../base/Text";
import { StyleSheet, View } from "react-native";
export const ConnectWalletHeader = ({ subHeaderText = "Connecting your wallet", walletLogoUrl, close, onBackPress, }) => {
    const theme = useAppTheme();
    return (_jsxs(_Fragment, { children: [_jsxs(View, { style: styles.header, children: [_jsx(Icon, { type: "back", size: 14, onPress: onBackPress, color: theme.colors.iconPrimary }), _jsx(ImageSvgUri, { width: 56, height: 56, imageUrl: walletLogoUrl }), _jsx(Icon, { type: "close", size: 14, onPress: close, color: theme.colors.iconPrimary })] }), _jsx(View, { style: styles.subHeader, children: typeof subHeaderText === "string" ? (_jsx(Text, { variant: "subHeader", children: subHeaderText })) : (subHeaderText) })] }));
};
const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    subHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 24,
    },
});
