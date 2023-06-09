import { jsx as _jsx } from "react/jsx-runtime";
import { useAppTheme } from "../../../styles/hooks";
import { StyleSheet, View, Dimensions } from "react-native";
import Modal from "react-native-modal";
const MODAL_HEIGHT = Dimensions.get("window").height * 0.7;
const DEVICE_WIDTH = Dimensions.get("window").width;
// Populate with the data...
export function TWModal({ children, isVisible, ...props }) {
    const theme = useAppTheme();
    return (_jsx(Modal, { useNativeDriver: true, isVisible: isVisible, ...props, children: _jsx(View, { style: [styles.modal, { backgroundColor: theme.colors.background }], children: _jsx(View, { style: styles.contentContainer, children: children }) }) }));
}
const styles = StyleSheet.create({
    modal: {
        position: "absolute",
        bottom: -20,
        left: -20,
        width: DEVICE_WIDTH,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
    },
    contentContainer: {
        maxHeight: MODAL_HEIGHT,
        display: "flex",
    },
});
