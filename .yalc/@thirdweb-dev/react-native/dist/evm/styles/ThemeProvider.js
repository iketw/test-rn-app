import { jsx as _jsx } from "react/jsx-runtime";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider as ShopifyThemeProvider } from "@shopify/restyle";
import { ThirdwebThemeContext } from "@thirdweb-dev/react-core";
import { useContext } from "react";
import { useColorScheme } from "react-native";
export function ThemeProvider({ children, theme, }) {
    const isDarkMode = useColorScheme() === "dark";
    const themeFromCore = useContext(ThirdwebThemeContext);
    const theme_ = theme || themeFromCore || (isDarkMode ? "dark" : "light");
    return (_jsx(ShopifyThemeProvider, { theme: typeof theme_ === "object"
            ? theme_
            : theme_ === "dark"
                ? darkTheme
                : lightTheme, children: children }));
}
