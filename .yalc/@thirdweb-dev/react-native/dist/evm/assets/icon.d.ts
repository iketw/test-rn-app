import { IconStyleProp } from "./types";
export type IconProps = {
    type: "back" | "close" | "disconnect" | "down-arrow" | "right-arrow";
    onPress?: () => void;
} & IconStyleProp;
export declare const Icon: (props: IconProps) => JSX.Element;
