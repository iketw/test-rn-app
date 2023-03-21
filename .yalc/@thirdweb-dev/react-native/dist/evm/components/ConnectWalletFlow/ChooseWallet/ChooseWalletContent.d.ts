import { SupportedWallet } from "@thirdweb-dev/react-core";
interface InitialExplorerContentProps {
    wallets: SupportedWallet[];
    onChooseWallet: (wallet: SupportedWallet) => void;
}
export declare const ChooseWalletContent: ({ wallets, onChooseWallet, }: InitialExplorerContentProps) => JSX.Element;
export {};
