export declare const darkTheme: {
    colors: {
        background: string;
        backgroundHighlight: string;
        textPrimary: string;
        textSecondary: string;
        iconPrimary: string;
        iconSecondary: string;
        iconHighlight: string;
        linkPrimary: string;
        border: string;
        black: string;
        white: string;
    };
    spacing: {
        none: number;
        xxs: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    fontSize: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    borderRadii: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    iconSize: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    textVariants: {
        header: {
            fontSize: number;
            fontWeight: string;
            lineHeight: number;
            color: string;
        };
        subHeader: {
            fontSize: number;
            fontWeight: string;
            lineHeight: number;
            color: string;
        };
        link: {
            fontWeight: string;
            fontSize: number;
            lineHeight: number;
            color: string;
            letterSpacing: number;
        };
        bodyLarge: {
            color: string;
            textAlign: string;
            fontWeight: string;
            fontSize: number;
            lineHeight: number;
        };
        bodySmall: {
            color: string;
            textAlign: string;
            fontWeight: string;
            fontSize: number;
            lineHeight: number;
        };
        bodySmallSecondary: {
            color: string;
            textAlign: string;
            fontWeight: string;
            fontSize: number;
            lineHeight: number;
        };
    };
};
export declare const lightTheme: Theme;
export type Theme = typeof darkTheme;
