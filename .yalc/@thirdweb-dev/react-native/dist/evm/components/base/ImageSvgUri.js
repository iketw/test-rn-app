import { jsx as _jsx } from "react/jsx-runtime";
import { resolveIpfsUri } from "@thirdweb-dev/react-core";
import { Image } from "react-native";
import { SvgUri } from "react-native-svg";
const ImageSvgUri = ({ imageUrl, width, height, imageAlt = "", }) => {
    const isSvg = imageUrl.toLowerCase().endsWith(".svg");
    const resolvedImageUrl = resolveIpfsUri(imageUrl) || "";
    if (isSvg) {
        return _jsx(SvgUri, { width: width, height: height, uri: resolvedImageUrl });
    }
    else {
        return (_jsx(Image, { alt: imageAlt, source: { uri: resolvedImageUrl }, style: [{ width: width, height: height }] }));
    }
};
export default ImageSvgUri;
