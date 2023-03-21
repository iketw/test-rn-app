import { ReactNode } from "react";
import { SupportedWallet } from "@thirdweb-dev/react-core";
export type ChooseWalletProps = {
    headerText?: ReactNode | string;
    subHeaderText?: ReactNode | string;
    footer?: ReactNode;
    onChooseWallet: (wallet: SupportedWallet) => void;
    onClose: () => void;
    wallets: SupportedWallet[];
};
export declare function ChooseWallet({ headerText, subHeaderText, wallets, footer, onChooseWallet, onClose, }: ChooseWalletProps): JSX.Element;
