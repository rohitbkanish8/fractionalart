import React from 'react'

export const HeadCard = () => {
  return (
    <div className="relative px-4 w-full mx-auto">
      <div className="p-8 rounded-2xl relative bg-white card mb-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <a href="">
              <div className="relative flex items-center justify-center rounded-lg overflow-hidden cursor-pointer min-height-238">
                <div className="flex items-center justify-center bg-transparent absolute inset-0 border-lg loading-indicator"></div>
                <img src="../images/dog.png" alt="image" className="image w-auto z-10 border-lg pixelated" />
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <a href="">
              <div className="flex items-center gap-1 cursor-pointer justify-between w-full mb-4">
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
            </a>
            <a href="">
              <div>
                <div className="mb-5 txt-blue font-semibold text-2xl md:text-4xl cursor-pointer">
                  The Doge NFT
                </div>
              </div>
            </a>
            <a href="">
              <div className="flex mb-4 cursor-pointer txt-blue">
                <div className="py-2 px-4 bg-gray-200 text-sm whitespace-nowrap rounded-full font-bold overflow-hidden">
                  <div className="flex items-center">
                    <div className="w-full h-full mr-3 bg-cover rounded-full">
                      <div className="flex w-6">
                        <div className="overflow-hidden rounded-full p-0 m-0 w-6 h-6 inline-block">
                          <svg x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(-0.2686433741804024 -0.02570424488564366) rotate(243.6 12 12)" fill="#C8143E"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-8.580689989738847 -11.960835110757111) rotate(264.6 12 12)" fill="#03495E"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-10.327211712020855 -13.885799232501968) rotate(240.0 12 12)" fill="#2356E1"></rect></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <span className="font-bold uppercase text-xs whitespace-nowrap">pleasrdao.eth</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex-1 w-full h-20"></div>
            <div className="border-t-4" style={{ backgroundColor: 'rgba(31,38,59,1)' }}></div>
            <a href="">
              <div className="flex flex-wrap md:flex-nowrap justify-between -mx-2 cursor-pointer p-2">
                <div className="px-2 mb-4 lg:mb-0">
                  <div className="uppercase text-xxs text-gray-500 font-bold mb-2">Total Supply</div>
                  <div>
                    <div className="font-bold txt-blue text-base">17b</div>
                  </div>
                </div>
                <div className="px-2 mb-4 lg:mb-0">
                  <div className="uppercase text-xxs text-gray-500 font-bold mb-2">Curator Fee</div>
                  <div>
                    <div className="font-bold txt-blue text-base">0%</div>
                  </div>
                </div>
                <div className="px-2 mb-4 lg:mb-0">
                  <div className="uppercase text-xxs text-gray-500 font-bold mb-2">Reserve Price</div>
                  <div>
                    <div className="font-bold txt-blue  text-base truncate overflow-ellipsis tooltip" data-tooltip-id="TT_5996877566531555">21m ETH</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
