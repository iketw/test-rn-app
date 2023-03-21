import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BaseButton from "../../base/BaseButton";
import ImageSvgUri from "../../base/ImageSvgUri";
import Text from "../../base/Text";
import { StyleSheet, View, FlatList } from "react-native";
export const ChooseWalletContent = ({ wallets, onChooseWallet, }) => {
    return (_jsx(View, { style: styles.explorerContainer, children: _jsx(FlatList, { keyExtractor: (item) => item.name, data: wallets, renderItem: ({ item, index }) => {
                const marginBottom = index === wallets.length - 1 ? "none" : "xxs";
                return (_jsxs(BaseButton, { mb: marginBottom, style: styles.row, backgroundColor: "backgroundHighlight", onPress: () => onChooseWallet(item), children: [_jsx(View, { style: styles.imageView, children: _jsx(ImageSvgUri, { imageUrl: item.meta.iconURL, width: 32, height: 32 }) }), _jsx(Text, { variant: "bodyLarge", children: item.meta.name })] }));
            } }) }));
};
const styles = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
    },
    imageView: {
        marginRight: 16,
    },
    explorerContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 4,
        marginTop: 25,
    },
});
