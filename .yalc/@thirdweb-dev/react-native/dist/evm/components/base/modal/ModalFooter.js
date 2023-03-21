import { jsx as _jsx } from "react/jsx-runtime";
import Text from "../Text";
import { TouchableOpacity, StyleSheet } from "react-native";
export const ModalFooter = ({ footer, onPress, }) => {
    return (_jsx(TouchableOpacity, { style: styles.footer, onPress: onPress, children: _jsx(Text, { variant: "link", children: footer }) }));
};
const styles = StyleSheet.create({
    footer: {
        marginTop: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
});
