import { ReactNode } from "react";
interface ModalHeaderTextCloseProps {
    onClose: () => void;
    headerText: ReactNode | string;
    subHeaderText?: ReactNode | string;
}
export declare const ModalHeaderTextClose: ({ headerText, subHeaderText, onClose, }: ModalHeaderTextCloseProps) => JSX.Element;
export {};
