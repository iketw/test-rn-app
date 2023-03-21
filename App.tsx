/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  CoinbaseWallet,
  ConnectWallet,
  RainbowWallet,
  ThirdwebProvider,
  useContract,
  useNFTs,
  TrustWallet,
  MetaMaskWallet,
  useSDK,
  Web3Button,
} from '@thirdweb-dev/react-native';
import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <ThirdwebProvider
      activeChain={'ethereum'}
      supportedWallets={[
        RainbowWallet,
        CoinbaseWallet,
        TrustWallet,
        MetaMaskWallet,
      ]}>
      <AppInner />
    </ThirdwebProvider>
  );
};

const AppInner = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  const {contract} = useContract('0xb8A3454db7042Ee72C93b42565357A2e13967FD4');

  const {data: nfts} = useNFTs(contract);

  const sdk = useSDK();

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.view}>
        <ConnectWallet theme="dark" />

        <Button
          title="Sign message"
          onPress={() => {
            sdk?.wallet
              .sign('test')
              .then(() => console.log('signed'))
              .catch(err => console.log(err));
          }}
        />

        <Web3Button
          contractAddress="0xb8A3454db7042Ee72C93b42565357A2e13967FD4"
          action={contract => {
            return contract?.erc721.claimTo(
              '0x0beECa30ea02FB3B6258e056d8d6Cff6fB7d7240',
              1,
            );
          }}>
          Claim
        </Web3Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default App;
