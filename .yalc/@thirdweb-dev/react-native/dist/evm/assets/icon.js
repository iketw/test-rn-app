import { jsx as _jsx } from "react/jsx-runtime";
import BackIcon from "./back";
import CloseIcon from "./close";
import DisconnectIcon from "./disconnect";
import DownArrowIcon from "./down-arrow";
import RightArrowIcon from "./right-arrow";
import { StyleSheet, TouchableOpacity } from "react-native";
export const Icon = (props) => {
    const { type, onPress, ...rest } = props;
    const getIcon = () => {
        switch (type) {
            case "back":
                return _jsx(BackIcon, { ...rest });
            case "close":
                return _jsx(CloseIcon, { ...rest });
            case "disconnect":
                return _jsx(DisconnectIcon, { ...rest });
            case "down-arrow":
                return _jsx(DownArrowIcon, { ...rest });
            case "right-arrow":
                return _jsx(RightArrowIcon, { ...rest });
            default:
                return null;
        }
    };
    return (_jsx(TouchableOpacity, { style: styles.closeContainer, onPress: onPress, hitSlop: { top: 20, bottom: 20, left: 20, right: 20 }, children: getIcon() }));
};
const styles = StyleSheet.create({
    closeContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
