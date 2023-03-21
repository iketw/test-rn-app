import { ReactNode } from "react";
import { SupportedWallet } from "@thirdweb-dev/react-core";
export type ConnectingWalletProps = {
    headerText?: ReactNode | string;
    subHeaderText?: ReactNode | string;
    footer?: ReactNode;
    content?: ReactNode;
    onClose: () => void;
    onBackPress: () => void;
    wallet: SupportedWallet;
};
export declare function ConnectingWallet({ subHeaderText, content, wallet, footer, onClose, onBackPress, }: ConnectingWalletProps): JSX.Element;
