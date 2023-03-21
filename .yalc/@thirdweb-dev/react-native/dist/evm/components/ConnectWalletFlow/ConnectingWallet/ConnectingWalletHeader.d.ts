import { ReactNode } from "react";
interface ConnectWalletHeaderProps {
    close: () => void;
    onBackPress: () => void;
    walletLogoUrl: string;
    subHeaderText?: ReactNode | string;
}
export declare const ConnectWalletHeader: ({ subHeaderText, walletLogoUrl, close, onBackPress, }: ConnectWalletHeaderProps) => JSX.Element;
export {};
