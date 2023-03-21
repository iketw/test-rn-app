import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalFooter } from "../../base/modal/ModalFooter";
import { ModalHeaderTextClose } from "../../base/modal/ModalHeaderTextClose";
import { ChooseWalletContent } from "./ChooseWalletContent";
import { View } from "react-native";
export function ChooseWallet({ headerText = "Choose your Wallet", subHeaderText = "Select the wallet that you want to connect to Thirdweb", wallets, footer, onChooseWallet, onClose, }) {
    return (_jsxs(View, { children: [_jsx(ModalHeaderTextClose, { onClose: onClose, headerText: headerText, subHeaderText: subHeaderText }), _jsx(ChooseWalletContent, { wallets: wallets, onChooseWallet: onChooseWallet }), footer ? footer : _jsx(ModalFooter, { footer: "Need help getting started?" })] }));
}
