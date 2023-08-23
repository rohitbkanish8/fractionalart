import React from 'react'
// import { Link } from 'react-router-dom'
import * as RiIcon from 'react-icons/ri'
import { LineButton } from './CommonStyledComponents/Buttons'
import styled from 'styled-components'
import { FlexCenter } from './CommonStyledComponents/GlobalStyle'
import WalletConnect from './Wallet'
// import Wallet from './Wallet'

const Input = styled.button`
  ${FlexCenter}
  padding: .9rem .2rem;
  background: #fff1;
  border-radius: 2rem;
  width: 90%;
  svg{ 
    font-size: 1rem;
    /* padding: 0 .3rem; */
  }
  input{
    font-size: .8rem;
    border: none;
    background: transparent;
    outline: none;
    color: #fff;
    width: 65%;
  }
`

export const Header = () => {
  return (
    <header className="text-white border-b-2 border-gray-600 lg:py-1 py-7">
      <div className="mx-auto px-4 md:px-6 container">
        <div className="flex items-center justify-between lg:px-20 px-0">
          <div className="flex items-center justify-items-start">
            <div className="flex mr-8 cursor-pointer">
            <img src="../images/logo/fractional.svg" alt="fractional logo" className="mr-3" />
            <span className="font-medium">fractional</span>
            </div>
            <div className="lg:block hidden">
            <Input className="f-text-accent"><RiIcon.RiSearch2Line className="mr-2" /><input type="text" placeholder="search by curator, collection or asset" /></Input>
            </div>
          </div>
          <div className="flex items-center">
            <nav className="flex items-center text-white">
              <a href="">
                <button className="h-text-accent border-t-4  border-transparent text-sm lg:mr-8 hidden lg:block font-bold headerh mtop-4">Explore</button>
              </a>
              <a href="">
                <button className="h-text-accent border-t-4  border-transparent text-sm lg:mr-8 hidden lg:block font-bold headerh mtop-4">
                  Buy
                  <span className="letter-spacing-arrows">
                    &#8593;&#8595;
                  </span>
                </button>
              </a>
              <a href="">
                <button className="h-text-accent border-t-4 border-transparent text-sm lg:mr-8 hidden lg:block font-bold headerh mtop-4">Collections</button>
              </a>
            </nav>
            <LineButton className="mr-5 button-pad text-sm font-medium lg:block hidden">Fractionalize</LineButton>
            {/* <FillButton>Connect Wallet</FillButton> */}
            <div className="lg:block hidden">
            <WalletConnect />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

/* <div className="bg-blue-900 z-10">
  <header className="text-white border-b-2 border-gray-600">
    <div className="mx-auto px-4 md:px-6 container">
      <div className="flex items-center">
        <a href="">
          <div className="flex items-center cursor-pointer headerh mr-10">
            <img src="../images/logo/fractional.svg" alt="fractional logo" className="mr-3" />
            <span>fractional</span>
          </div>
          {</a>
        <div className="headerh">
          <form className="hidden lg:block">
            <div className="relative headerh flex items-center">
              <label htmlFor="search">
                <RiIcon.RiSearch2Line />
              </label>
              <input id="search" type="text" name="search" placeholder="search by curator, collection or asset" />
            </div>
          </form>
        </div>
        <div className="ml-auto flex items-center">
          <nav className="flex items-center text-white main-navigation-desktop">
            <a>
              <button className="h-text-accent border-t-4  border-transparent text-sm lg:mr-8 hidden lg:block font-bold headerh mtop-4">Explore</button>
            </a>
            <a>
              <button className="h-text-accent border-t-4  border-transparent text-sm lg:mr-8 hidden lg:block font-bold headerh mtop-4">
                Buy
                <span className="letter-spacing-arrows">
                  &#8593;&#8595;
                </span>
              </button>
            </a>
            <a>
              <button className="h-text-accent border-t-4 border-transparent text-sm lg:mr-8 hidden lg:block font-bold headerh mtop-4">Collections</button>
            </a>
            <div className="headerh flex items-center">
              <a>
                <button className="button button--secondary-dark button--medium mr-4 hidden lg:block fractionalize-btn">Fractionalize</button>
              </a>
            </div>
          </nav>
          <div className="text-sm font-bold flex items-center border border-accent text-blue-800 bg-accent transition-all duration-200 py-1.5 px-3 pr-7 rounded-full cursor-pointer">
            <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <RiIcon.RiWallet3Fill className="w-3" />
            </span>
            Connect Wallet
          </div>
          <div className="relative">
            <button className="z-10 relative flex items-center focus:outline-none select-none w-full"></button>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>@solana/wallet-adapter-wallets @solana/wallet - adapter - base @solana/wallet-adapter-react @solana/wallet - adapter - react - ui @solana/web3.js react */