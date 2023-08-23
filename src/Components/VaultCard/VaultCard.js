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

export const VaultCard = () => {

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
              <span>Fraction sale live</span>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <Wrapper>
            <Slider {...settings} className="">
              <div>
                <img src="../images/v1.png" alt="vault" className="rounded-tl-2xl rounded-tr-2xl h-full w-full" />
              </div>
              <div>
                <img src="../images/v1.png" alt="vault" className="rounded-tl-2xl rounded-tr-2xl h-full w-full" />
              </div>
              <div>
                <img src="../images/v1.png" alt="vault" className="rounded-tl-2xl rounded-tr-2xl h-full w-full" />
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
          <img src="../images/v1.png" alt="small block" className="h-3 w-3 rounded-full" />
          <span>Artblocks</span>
          <img src="../images/verified.svg" alt="verified" />
        </div>
        <p className="font-bold break-words text-xl">Art Blocks Curated Fidenza #855</p>
        <div className="py-2 px-4 bg-gray-100 text-sm whitespace-nowrap rounded-full font-bold overflow-hidden">
          <div className="flex items-center">
            <div className="w-full h-full mr-3 bg-cover rounded-full">
              <div className="flex w-6">
                <div className="overflow-hidden rounded-full p-0 m-0 w-6 h-6 inline-block">
                  <svg x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(0.17543717378561025 1.4928439949790697) rotate(99.6 12 12)" fill="#238FE1"></rect><rect x="0" y="0" width="24" height="24" transform="translate(1.7063366016598387 9.150889788035649) rotate(124.8 12 12)" fill="#035E58"></rect><rect x="0" y="0" width="24" height="24" transform="translate(17.53973964543514 -0.47502109134837595) rotate(533.3 12 12)" fill="#F26A02"></rect></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="font-bold uppercase text-xs whitespace-nowrap">⛳⛳⛳.eth</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white shadow-inner p-4 flex justify-between items-center  cursor-pointer rounded-br-xl rounded-bl-xl">
        <div className="flex gap-1 flex-col">
          <h1 className="text-xxs font-bold text-gray-600 uppercase">Fractions</h1>
          <div className="font-bold">10k</div>
        </div>
        <div className="flex gap-1 flex-col">
          <h1 className="text-xxs font-bold text-gray-600 uppercase">Collectable Supply</h1>
          <div className="font-bold">16.20%</div>
        </div>
        <div className="flex gap-1 flex-col">
          <h1 className="text-xxs font-bold text-gray-600 uppercase">Implied valuation</h1>
          <div className="font-bold">$143,870</div>
        </div>
      </div>
    </div>
  )
}
