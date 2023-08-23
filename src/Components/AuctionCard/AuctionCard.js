import React from 'react'
import * as FaIcon from 'react-icons/fa'
import Slider from 'react-slick'
import styled from 'styled-components'
import Arrow from '../../Components/CarouselArrows/CarouselArrows'

const Wrapper = styled.div`
  height: 100%;
  /* overflow-y: hidden; */
  /* width: 100%; */
  border: none;
  .slick-slider{
    position: relative;
    height: 100%;
  }
  .slick-arrow{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .slick-prev{
    left: 1rem;
  }
  .slick-next{
    right: 1rem;
  }
  .slick-list {
    overflow: hidden;
    height: 100%;
  }
  .slick-track {
      display: flex;
      
      .slick-active {
          transition: all 0.2s linear;

          /* &:hover {
              transform: scale(1.1);
          } */
      }
  }
`

export const AuctionCard = () => {

  const settings = {
    dots: false,
    slidesToShow: 1,
    arrows: true,
    infinite: false,
    prevArrow: <Arrow.LivePrevArrow />,
    nextArrow: <Arrow.LiveNextArrow />
  };

  return (
    <div className="bg-white rounded-2xl flex flex-col cursor-pointer" style={{ height: 'fit-content' }}>
      <div className="relative h-80">
        <div className="absolute flex justify-between w-full items-center z-10 p-4">
          <div className="flex flex-wrap gap-1">
            <div className="flex flex-shrink-0 gap-1 uppercase pl-1 pr-1 items-center bg-white bg-opacity-50 border-transparent rounded-md text-xxs font-semibold h-7 text-black">
              1 NFT
            </div>
            <div className="flex flex-shrink-0 gap-1 uppercase pl-1 pr-1 items-center bg-white border-2 border-green-500 rounded-md text-xxs font-semibold h-7 text-black">
              <img src="../images/verified.svg" alt="verified" />
              <span>Verified</span>
            </div>
          </div>
          <div className="flex gap-1 flex-shrink-0 self-start">
            <div className="flex flex-shrink-0 gap-1 uppercase pl-1 pr-1 items-center back-blue border-transparent border rounded-md text-xxs font-semibold h-7 bg-opacity-80 text-white">
              <div className="w-2 h-2 rounded-full mr-1 bg-green-500"></div>
              <span>Auction live</span>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <Wrapper>
            <Slider {...settings} className="">
              <div>
                <img src="https://lh3.googleusercontent.com/hE5M0lGUaalaaHRIvyKRamIjEwmdsU6XLYqAv8hLjpamAcETKHF-Pf31MzJc2bZaEbxFmg2medhFJVi-UnSJHJkUNJgUMBBlw6WZ4Q=s450" alt="vault" className="rounded-tl-2xl rounded-tr-2xl h-full w-full" />
              </div>
              <div>
                <img src="https://lh3.googleusercontent.com/hE5M0lGUaalaaHRIvyKRamIjEwmdsU6XLYqAv8hLjpamAcETKHF-Pf31MzJc2bZaEbxFmg2medhFJVi-UnSJHJkUNJgUMBBlw6WZ4Q=s450" alt="vault" className="rounded-tl-2xl rounded-tr-2xl h-full w-full" />
              </div>
              <div>
                <img src="https://lh3.googleusercontent.com/hE5M0lGUaalaaHRIvyKRamIjEwmdsU6XLYqAv8hLjpamAcETKHF-Pf31MzJc2bZaEbxFmg2medhFJVi-UnSJHJkUNJgUMBBlw6WZ4Q=s450" alt="vault" className="rounded-tl-2xl rounded-tr-2xl h-full w-full" />
              </div>
            </Slider>
          </Wrapper>
          <div className="rounded-full absolute -bottom-8 p-4 right-3 z-10 bg-gray-50">
            <FaIcon.FaHeart className="text-gray-200 text-xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start cursor-pointer p-4">
        <div className="flex flex-shrink-0 gap-2 items-center text-xxs font-semibold text-black">
          <img src="../images/v2.png" alt="small block" className="h-3 w-3 rounded-full" />
          <span>ENS: Ethereum Name Service</span>
          <img src="../images/verified.svg" alt="verified" />
        </div>
        <p className="font-bold break-words text-xl">Blue Chip Investment Firms ENS Pack</p>
        <div className="py-2 px-4 bg-gray-100 text-sm whitespace-nowrap rounded-full font-bold overflow-hidden">
          <div className="flex items-center">
            <div className="w-full h-full mr-3 bg-cover rounded-full">
              <div className="flex w-6">
                <div className="overflow-hidden rounded-full p-0 m-0 w-6 h-6 inline-block">
                  <svg x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(-3.4121128178284614 6.345969267460857) rotate(145.8 12 12)" fill="#F97101"></rect><rect x="0" y="0" width="24" height="24" transform="translate(5.701231627155649 7.325812177699711) rotate(119.8 12 12)" fill="#2340E1"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-10.708946185441306 16.12246172655082) rotate(162.5 12 12)" fill="#186FF2"></rect></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="font-bold uppercase text-xs whitespace-nowrap">altinvestments</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative background-blue shadow-inner p-4 flex justify-between items-center  cursor-pointer rounded-br-xl rounded-bl-xl">
        <div className="absolute top-0 left-0 w-full">
          <div className="h-1 bg-gray-400">
            <div className="relative h-full transition duration-200 ease-out bg-pink-600 w-1/2">
              <svg height="24" viewBox="0 0 24 24" className="fire absolute bottom-0 -right-2 text-pink-600 animate-pulse"><path fill="currentColor" className="hole" d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z"></path></svg>
            </div>
          </div>
        </div>
        <div className="flex gap-1 flex-col">
          <h1 className="text-xxs font-bold text-gray-400 uppercase">Time Left</h1>
          <div className="font-bold text-white">1d 13h 04m 44s</div>
        </div>
        <div className="flex gap-1 flex-col">
          <h1 className="text-xxs font-bold text-gray-400 uppercase">Highest Bid</h1>
          <div className="font-bold text-white">0.015 ETH</div>
        </div>
      </div>
    </div>
  )
}
