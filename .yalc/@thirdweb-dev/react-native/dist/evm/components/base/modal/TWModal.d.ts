import { PropsWithChildren } from "react";
import { ModalProps } from "react-native-modal";
export type TWModalProps = PropsWithChildren<Pick<ModalProps, "isVisible"> & Pick<Partial<ModalProps>, "onBackButtonPress" | "onBackdropPress">>;
export declare function TWModal({ children, isVisible, ...props }: TWModalProps): JSX.Element;
