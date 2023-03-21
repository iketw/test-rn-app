import { jsx as _jsx } from "react/jsx-runtime";
import { shortenString } from "../../utils/addresses";
import Text from "./Text";
export const Address = ({ address, variant = "bodyLarge", }) => {
    return _jsx(Text, { variant: variant, children: shortenString(address) });
};
