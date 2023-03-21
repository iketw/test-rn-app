import { TWModalProps } from "../base/modal/TWModal";
export type NetworkSelectorModalProps = {
    onClose: () => void;
} & TWModalProps;
export declare const NetworkSelectorModal: ({ isVisible, onClose, ...props }: NetworkSelectorModalProps) => JSX.Element;
