import { jsx as _jsx } from "react/jsx-runtime";
import { ModalHeaderTextClose } from "../base/modal/ModalHeaderTextClose";
import { TWModal } from "../base/modal/TWModal";
export const NetworkSelectorModal = ({ isVisible, onClose, ...props }) => {
    return (_jsx(TWModal, { isVisible: isVisible, ...props, children: _jsx(ModalHeaderTextClose, { headerText: "Select Network", subHeaderText: "Choose a new network to connect to Thirdweb", onClose: onClose }) }));
};
