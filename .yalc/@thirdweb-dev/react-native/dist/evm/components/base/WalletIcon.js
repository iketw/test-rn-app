import { jsx as _jsx } from "react/jsx-runtime";
import ImageSvgUri from "./ImageSvgUri";
export const WalletIcon = ({ iconUri, size, }) => {
    return _jsx(ImageSvgUri, { imageUrl: iconUri, width: size, height: size });
};
