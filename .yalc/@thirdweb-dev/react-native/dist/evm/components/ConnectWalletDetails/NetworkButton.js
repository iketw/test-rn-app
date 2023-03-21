import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BaseButton from "../base/BaseButton";
import { ChainIcon } from "../base/ChainIcon";
import Text from "../base/Text";
import { StyleSheet } from "react-native";
export const NetworkButton = ({ onPress, chainName, chainIconUrl, }) => {
    return (_jsxs(BaseButton, { mt: "md", p: "md", backgroundColor: "background", style: styles.networkContainer, onPress: onPress, borderColor: "border", children: [_jsx(ChainIcon, { chainIconUrl: chainIconUrl, size: 32, active: false }), _jsx(Text, { variant: "bodyLarge", style: styles.networkText, children: chainName })] }));
};
const styles = StyleSheet.create({
    networkText: {
        marginLeft: 16,
    },
    networkContainer: {
        borderRadius: 8,
        borderWidth: 0.5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
});
