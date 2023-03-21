import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Icon } from "../../../assets/icon";
import { useAppTheme } from "../../../styles/hooks";
import Text from "../Text";
import { StyleSheet, View } from "react-native";
export const ModalHeaderTextClose = ({ headerText, subHeaderText, onClose, }) => {
    const theme = useAppTheme();
    return (_jsxs(_Fragment, { children: [_jsxs(View, { style: styles.header, children: [typeof headerText === "string" ? (_jsx(Text, { variant: "header", children: headerText })) : (headerText), _jsx(Icon, { type: "close", size: 14, color: theme.colors.iconSecondary, onPress: onClose })] }), _jsx(View, { style: styles.subHeader, children: typeof subHeaderText === "string" ? (_jsx(Text, { variant: "subHeader", children: subHeaderText })) : (subHeaderText) })] }));
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
        justifyContent: "space-between",
        marginTop: 16,
    },
});
