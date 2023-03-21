import { Theme } from "./theme";
import { PropsWithChildren } from "react";
export type ThemeProviderProps = {
    theme?: Theme | "light" | "dark";
};
export declare function ThemeProvider({ children, theme, }: PropsWithChildren<ThemeProviderProps>): JSX.Element;
