import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import * as web3 from '@solana/web3.js'
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  // getSolletExtensionWallet,
  // getSolletWallet
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  // WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, Keypair } from '@solana/web3.js';
import styled from 'styled-components';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

const ConnectButton = styled(WalletMultiButton)`
  background: #a9e94a;
  border-radius: 2rem;
  border: none;
  color: #000;
  padding: .8rem 2rem;
  white-space: nowrap;
  cursor: pointer;
  font-size: .875rem;
  font-weight: 700;
`
// const WalletModalProviders = styled(WalletModalProvider)`
//   .wallet-adapter-modal-wrapper{
//     background-color: #fff !important;
//     padding: 2.5rem;
//     border-radius: 1rem;
//     max-width: 38%;
//     .wallet-adapter-modal-button-close{
//       border: 2px solid rgba(31, 38, 59, .2);
//       border-radius: 50%;
//       top: 40px;
//       right: 20px;
//       svg{
//         fill: rgba( 31, 38, 59, .9);
//       }
//     }
//     h1{
//       color: rgb( 31, 38, 59);
//       text-align: left;
//       font-size: 30px;
//       font-weight: bold;
//     }
//     .wallet-adapter-button {
//       background-color: #fff;
//       color: rgb( 31, 38, 59);
//       border: 1px solid rgba( 0, 0, 0, .1);
//       border-radius: 1rem;
//       padding: 3rem 2rem;
//       height: 45px;
//     }
//     .wallet-adapter-modal-subtitle{
//       color: rgb( 31, 38, 59);
//       margin-bottom: 1rem;
//     }
//     .wallet-adapter-modal-title{
//       margin-bottom: 1rem;
//     }
//     .wallet-adapter-dropdown-list{
//       background: #fff !important;
//       padding: 2rem;
//       /* border-radius: 1rem;
//       max-width: 38%; */
//     }
//   }
  
// `

export const WalletConnect = () => {

  // console.log(web3)
  // console.log(Keypair.generate())
  // console.log(Keypair.fromSecretKey(Keypair.generate().secretKey))
  // console.log(new web3.Connection(web3.clusterApiUrl('testnet')))
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(() => [
    getPhantomWallet(),
    getSolflareWallet(),
    getSlopeWallet(),
    getLedgerWallet(),
    // getSolletWallet({ network }),
    // getSolletExtensionWallet({ network }),
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider featuredWallets="2" >
          <ConnectButton className="font-medium text-sm"></ConnectButton>
          {/* <WalletDisconnectButton /> */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
