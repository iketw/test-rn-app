import { jsx as _jsx } from "react/jsx-runtime";
import { createAsyncLocalStorage } from "../../core/AsyncStorage";
import { DEFAULT_API_KEY } from "../constants/rpc";
import { MetaMaskWallet, } from "../wallets/wallets/all";
import { CoinbaseWallet } from "../wallets/wallets/coinbase-wallet";
import { ThirdwebProviderCore, } from "@thirdweb-dev/react-core";
const DEFAULT_WALLETS = [MetaMaskWallet, CoinbaseWallet];
/**
 *
 * The `<ThirdwebProvider />` component lets you control what networks you want users to connect to,
 * what types of wallets can connect to your app, and the settings for the [Thirdweb SDK](https://docs.thirdweb.com/typescript).
 *
 * @example
 * You can wrap your application with the provider as follows:
 *
 * import { ThirdwebProvider } from "@thirdweb-dev/react-native";
 *
 * const App = () => {
 *   return (
 *     <ThirdwebProvider>
 *       <YourApp />
 *     </ThirdwebProvider>
 *   );
 * };
 *
 */
export const ThirdwebProvider = ({ children, createWalletStorage = createAsyncLocalStorage, thirdwebApiKey = DEFAULT_API_KEY, supportedWallets = DEFAULT_WALLETS, ...restProps }) => {
    return (_jsx(ThirdwebProviderCore, { thirdwebApiKey: thirdwebApiKey, supportedWallets: supportedWallets, createWalletStorage: createWalletStorage, ...restProps, children: children }));
};
