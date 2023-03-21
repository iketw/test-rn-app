import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ActiveDot } from "./ActiveDot";
import ImageSvgUri from "./ImageSvgUri";
import { StyleSheet, View } from "react-native";
const defaultChainIcon = "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
export const ChainIcon = ({ chainIconUrl, size, active }) => {
    const src = chainIconUrl || defaultChainIcon;
    return (_jsxs(View, { style: styles.container, children: [_jsx(ImageSvgUri, { width: size, height: size, imageUrl: src }), active ? _jsx(ActiveDot, {}) : null] }));
};
const styles = StyleSheet.create({
    container: {
        position: "relative",
        display: "flex",
        alignItems: "center",
    },
});
