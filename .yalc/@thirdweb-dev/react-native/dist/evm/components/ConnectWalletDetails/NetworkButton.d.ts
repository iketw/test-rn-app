interface NetworkButtonProps {
    chainIconUrl?: string;
    chainName: string;
    onPress: () => void;
}
export declare const NetworkButton: ({ onPress, chainName, chainIconUrl, }: NetworkButtonProps) => JSX.Element;
export {};
