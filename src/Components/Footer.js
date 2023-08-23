import React from 'react'
import * as FaIcon from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="text-white pt-9 pb-20 lg:pb-8 border-t-2 border-solid green-border-custom">
      <div className="mx-auto px-4 md:px-6 container-lg">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          <div className="text-sm w-full lg:self-center lg:justify-self-center mb-6 lg:mb-0">
            <ul className="flex justify-center lg:justify-start text-sm font-medium">
              <li className="mr-4 cursor-pointer h-text-accent"><a href="">Careers</a></li>
              <li className="mr-4 cursor-pointer h-text-accent"><a href="">Cookies</a></li>
              <li className="mr-4 cursor-pointer h-text-accent"><a href="">Disclaimer</a></li>
              <li className="mr-4 cursor-pointer h-text-accent"><a href="">Terms</a></li>
              <li className="mr-4 cursor-pointer h-text-accent"><a href="">Privacy</a></li>
            </ul>
          </div>
          <div className="mb-4 text-sm font-medium opacity-50 w-full text-center lg:mb-0">
            Copyright © 2021 fractional.art. All rights reserved.
          </div>
          <div className="flex justify-center lg:justify-end w-full">
            <div className="flex text-lg">
              <a href="" className="mr-6 cursor-pointer h-text-accent">
                <FaIcon.FaDiscord className="svgfont" />
              </a>
              <a href="" className="mr-6 cursor-pointer h-text-accent">
                <FaIcon.FaTwitter className="svgfont" />
              </a>
              <a href="" className="mr-6 cursor-pointer h-text-accent">
                <FaIcon.FaMediumM className="svgfont" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
