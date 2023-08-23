import React from 'react'
import { FillButton } from '../CommonStyledComponents/Buttons'
import WalletConnect from '../Wallet'
import { CgClose } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa'

export const Drawer = () => {

  const [toggle, setToggle] = React.useState(false)

  return (
    <>
      <div className={
        `sidenav-bg text-white fixed top-0 bottom-0 origin-left transition duration-300 md:w-1/4 w-1/2 lg:hidden z-40 transform ${toggle ? "scale-x-100" : "scale-x-0"}`
      }>
        <div className="flex flex-col items-center p-4">
          <a href="">
            <button className="h-text-accent border-transparent text-base my-4 lg:hidden font-bold">Home</button>
          </a>
          <a href="">
            <button className="h-text-accent border-transparent text-base my-4 lg:hidden font-bold">Fractionalize</button>
          </a>
          <a href="">
            <button className="h-text-accent border-transparent text-base my-4 lg:hidden font-bold">Explore</button>
          </a>
          <a href="">
            <button className="h-text-accent border-transparent text-base my-4 lg:hidden font-bold">Collections</button>
          </a>
          <a href="">
            <button className="h-text-accent border-transparent text-base my-4 lg:hidden font-bold">
              Buy
              <span className="letter-spacing-arrows">
                &#8593;&#8595;
              </span>
            </button>
          </a>
          <a href="">
            <button className="h-text-accent border-transparent text-base my-4 lg:hidden font-bold">Account</button>
          </a>
        </div>
      </div>
      <div className="flex justify-between px-4 items-center z-50 fixed bottom-4 w-full lg:hidden">
        <WalletConnect />
        {
          !toggle ?
            <FillButton className="text-sm font-medium px-6 flex items-center justify-center py-4" onClick={() => setToggle(!toggle)}>
              <FaBars />
            </FillButton>
            :
            <FillButton className="text-sm font-medium px-6 flex items-center justify-center py-4" onClick={() => setToggle(!toggle)}>
              <CgClose />
            </FillButton>
        }
      </div>
    </>
  )
}
