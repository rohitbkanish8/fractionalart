import React from "react";
// import * as FaIcon from 'react-icons/fa'
import AuctionCard from "../../Components/AuctionCard";
import {
  GreenLineButton,
  GreyLineButton,
  LineButton,
  GreenWhiteLineButton,
} from "../../Components/CommonStyledComponents/Buttons";
import HeadCard from "../../Components/HeadCard";
import SimpleSlider from "../../Components/SimpleSlider";
import VaultCard from "../../Components/VaultCard";
import Audited from "./sections/Audited";
import Community from "./sections/Community";
import WhyFraction from "./sections/WhyFraction";
import Slider from "react-slick";
import styled from "styled-components";
import Arrow from "../../Components/CarouselArrows/CarouselArrows";

const Wrapper = styled.div`
  .slick-slider {
    position: relative;
  }
  .slick-arrow {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
  }
  .slick-prev {
    left: 0rem;
  }
  .slick-next {
    right: 0rem;
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-track {
    display: flex;
    padding: 2.5rem 0;

    .slick-active {
      transition: all 0.2s linear;

      /* &:hover {
              transform: scale(1.1);
          } */
    }
  }

  @media screen and (min-width: 640px) {
    .slick-prev {
      left: -3rem;
    }
    .slick-next {
      right: -3rem;
    }
  }
`;

export const Home = () => {
  const handleWorkerObjClick = (name) => {
    setWorksObject(() => {
      return worksObject.map((obj) => {
        if (obj.name === name) {
          return {
            ...obj,
            show: true,
          };
        } else {
          return {
            ...obj,
            show: false,
          };
        }
      });
    });
  };

  const [worksObject, setWorksObject] = React.useState([
    {
      name: "Buyers",
      show: true,
      icon: "../images/icon--buyer.png",
      content:
        "Fractional enables NFT owners to create new communities surrounding their NFTs, discover NFT market value, and create new ways of engaging their existing communities",
      data: [
        {
          id: 1,
          heading: "Buy",
          content:
            "Purchase fractions to collect and own part of your favorite NFTs",
        },
        {
          id: 2,
          heading: "Vote",
          content:
            "Contribute to the reserve price of the NFT collections you buy",
        },
        {
          id: 3,
          heading: "Decide to Transfer or hold",
          content: "Control what to do with your fractions",
        },
      ],
    },
    {
      name: "Curators",
      show: false,
      icon: "../images/icon--curator.png",
      content:
        "Built by NFT collectors, Fractional enables both NFT market value discovery and NFT tokenization which unlocks collectable access for smaller collectors and synergies with other DeFi primitives.",
      data: [
        {
          id: 1,
          heading: "Choose",
          content:
            "Select the NFT(s) you would like to vault and fractionalize",
        },
        {
          id: 2,
          heading: "Configure",
          content:
            "Set the fractional ERC token standard, total fraction supply to mint, and list the initial reserve price NOTE: Reserve price is dynamically set to the weighted average of all votes of fraction owners by smart contract governance",
        },
        {
          id: 3,
          heading: "Fractionalize",
          content:
            "Confirm that the right NFT(s) are selected for the vault and all details are accurate, then fractionalize and receive the total fraction supply of the NFT(s) now custodied in an audited smart contract vault",
        },
        {
          id: 4,
          heading: "Distribute",
          content:
            "Decide what to do with the newly minted fractions representing the NFT(s). Options include selling to prospective owners, distributing through marketing events (e.g., giveaways, campaigns), or anything else you can think of. Get creative!",
        },
        {
          id: 5,
          heading: "Collect",
          content:
            "Receive new fractions added to the total supply annually via a curator fee you set, which acts as an asset under management fee to fraction owners",
        },
      ],
    },
  ]);

  const slideCarousel = async (funcClick) => {
    if (funcClick) await funcClick();
    const slide = document.querySelector(".slick-active");
    const slideArr = Array.from(document.querySelectorAll(".slick-slide"));
    // const conditionArr = array.filter((item) =>
    //   Array.from(item.classList).includes("slick-active") && (item.attributes[0].value === "0" || item.attributes[0].value === (array.length - 1).toString())
    // );

    if (
      slide.attributes[0].value === "0" ||
      slide.attributes[0].value === (slideArr.length - 1).toString()
    ) {
      console.log(document.querySelector(".slick-active").children);
    }
  };

  const settings = {
    dots: false,
    slidesToShow: 1,
    arrows: true,
    infinite: false,
    prevArrow: <Arrow.PrevArrow func={slideCarousel} />,
    nextArrow: <Arrow.NextArrow func={slideCarousel} />,
  };

  return (
    <>
      <section className="text-white pb-14 bg-blue-quarterly">
        <div className="mx-auto px-4 md:px-6 max-w-6xl">
          <div className="row -mx-4">
            <div className="w-full px-4 pt-16 mb-16">
              <h1 className="font-bold text-5xl mb-8 text-center leading-snug">
                <a href="">
                  <span className="text-accent hover:text-white border-b-4 border-accent">
                    {" "}
                    Buy
                  </span>
                  ,{" "}
                </a>
                <a href="">
                  <span className="text-accent hover:text-white border-b-4 border-accent">
                    sell
                  </span>{" "}
                  and{" "}
                </a>
                <a href="">
                  <span className="text-accent hover:text-white border-b-4 border-accent">
                    mint
                  </span>
                </a>{" "}
                fractions of NFTs.
              </h1>
              <p className="text-center block mx-auto max-w-xl">
                Fractional ownership of the world’s most sought after NFTs.
                Fractional reduces entry costs, increases access, and enables
                new communities.
              </p>
              <div className="flex flex-wrap sm:flex-nowrap items-center mt-8 justify-center">
                <GreenWhiteLineButton className="mr-3 mb-4 text-white py-4 px-9 font-semibold">
                  Explore vaults
                </GreenWhiteLineButton>
                <LineButton className="py-4 px-9 mb-4 font-semibold">
                  Fractionalize NFT
                </LineButton>
              </div>
            </div>
            <div className="-mb-28">
              <Wrapper>
                <Slider
                  {...settings}
                  className="mx-auto lg:max-w-3xl max-w-2xl"
                >
                  <div>
                    <div className="relative px-4 w-full mx-auto">
                      <div className="p-8 rounded-2xl relative bg-white card mb-20">
                        <div className="flex flex-wrap -mx-4">
                          <div className="w-full md:w-1/2 px-4">
                            <a href="">
                              <div className="relative flex items-center justify-center rounded-lg overflow-hidden cursor-pointer min-height-238">
                                <div className="flex items-center justify-center bg-transparent absolute inset-0 border-lg loading-indicator"></div>
                                <img
                                  src="../images/dog.png"
                                  alt="image"
                                  className="image w-auto z-10 border-lg pixelated"
                                />
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
                                    <img
                                      src="../images/verified.svg"
                                      alt="verified"
                                    />
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
                                          <svg
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                          >
                                            <rect
                                              x="0"
                                              y="0"
                                              width="24"
                                              height="24"
                                              transform="translate(-0.2686433741804024 -0.02570424488564366) rotate(243.6 12 12)"
                                              fill="#C8143E"
                                            ></rect>
                                            <rect
                                              x="0"
                                              y="0"
                                              width="24"
                                              height="24"
                                              transform="translate(-8.580689989738847 -11.960835110757111) rotate(264.6 12 12)"
                                              fill="#03495E"
                                            ></rect>
                                            <rect
                                              x="0"
                                              y="0"
                                              width="24"
                                              height="24"
                                              transform="translate(-10.327211712020855 -13.885799232501968) rotate(240.0 12 12)"
                                              fill="#2356E1"
                                            ></rect>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                      <span className="font-bold uppercase text-xs whitespace-nowrap">
                                        pleasrdao.eth
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <div className="flex-1 w-full h-20"></div>
                            <div
                              className="border-t-4"
                              style={{ backgroundColor: "rgba(31,38,59,1)" }}
                            ></div>
                            <a href="">
                              <div className="flex flex-wrap md:flex-nowrap justify-between -mx-2 cursor-pointer p-2">
                                <div className="px-2 mb-4 lg:mb-0">
                                  <div className="uppercase text-xxs text-gray-500 font-bold mb-2">
                                    Total Supply
                                  </div>
                                  <div>
                                    <div className="font-bold txt-blue text-base">
                                      17b
                                    </div>
                                  </div>
                                </div>
                                <div className="px-2 mb-4 lg:mb-0">
                                  <div className="uppercase text-xxs text-gray-500 font-bold mb-2">
                                    Curator Fee
                                  </div>
                                  <div>
                                    <div className="font-bold txt-blue text-base">
                                      0%
                                    </div>
                                  </div>
                                </div>
                                <div className="px-2 mb-4 lg:mb-0">
                                  <div className="uppercase text-xxs text-gray-500 font-bold mb-2">
                                    Reserve Price
                                  </div>
                                  <div>
                                    <div
                                      className="font-bold txt-blue  text-base truncate overflow-ellipsis tooltip"
                                      data-tooltip-id="TT_5996877566531555"
                                    >
                                      21m ETH
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <HeadCard />
                  </div>
                  <div>
                    <HeadCard />
                  </div>
                </Slider>
              </Wrapper>
            </div>
          </div>
        </div>
      </section>
      <WhyFraction />
      <SimpleSlider />
      <section>
        <div className="pt-16 md:pt-24 pb-14 md:pb-20 bg-blue-partially">
          <div className="mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-6 ">
              <h3 className="text-45xl font-bold text-white mb-8 md:mb-0">
                Live Auctions 🔥
              </h3>
              <div className="ml-auto md:ml-0ml-auto md:ml-0">
                <LineButton className="text-sm font-semibold px-8 py-2">
                  All live auctions
                </LineButton>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              <AuctionCard />
              <AuctionCard />
              <AuctionCard />
            </div>
          </div>
        </div>
        <div className="pt-8 md:pt-24 pb-14 md:pb-20 bg-gray-100">
          <div className="mx-auto px-4 md:px-6 container-lg max-w-6xl">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-6 ">
              <h3 className="text-45xl font-bold mb-8 md:mb-0">
                Explore live vaults
              </h3>
              <div className="mt-2 md:mt-0 ml-auto md:ml-0">
                <GreyLineButton className="text-sm font-semibold px-8 py-2">
                  See all vaults
                </GreyLineButton>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              <VaultCard />
              <VaultCard />
              <VaultCard />
            </div>
            <div className="flex justify-center mt-8">
              <a>
                <GreenLineButton className="px-10 py-4 text-sm font-semibold">
                  View all
                </GreenLineButton>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 text-white">
        <div className="mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 pr-8">
              <div className="pr-0 max-w-sm">
                <h3 className="text-4xl font-bold mb-6 text-white">
                  How it works
                </h3>

                {worksObject.map((item, index) => {
                  return (
                    item.show === true && (
                      <p key={index + 1} className="font-medium mb-11">
                        {item.content}
                      </p>
                    )
                  );
                })}

                <div className="lg:block md:block flex p-2">
                  {worksObject.map((item) => (
                    <div
                      className={
                        !item.show
                          ? "cursor-pointer flex p-6 rounded-3xl items-center justify-between md:mb-6 w-1/2 md:w-full"
                          : "cursor-pointer flex p-6 rounded-3xl items-center justify-between md:mb-6 w-1/2 md:w-full back-blue"
                      }
                      onClick={() => handleWorkerObjClick(item.name)}
                    >
                      <div className="flex items-center">
                        <span
                          className={
                            !item.show
                              ? "w-16 h-16 rounded-full bg-gray-600 mr-7 lg:flex md:flex hidden items-center justify-center"
                              : "w-16 h-16 rounded-full leavesgreen mr-7 lg:flex md:flex hidden items-center justify-center"
                          }
                        >
                          <img
                            src={item.icon}
                            alt="buyer logo"
                            className="h-14 w-auto"
                          />
                        </span>
                        <span className="font-medium">{item.name}</span>
                        <span
                          className={
                            !item.show
                              ? "w-4 h-4 rounded-full bg-gray-600 mx-4 lg:hidden md:hidden flex items-center justify-center"
                              : "w-4 h-4 rounded-full leavesgreen1 mx-4 lg:hidden md:hidden flex items-center justify-center"
                          }
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {worksObject.map((item, index) => {
              if (item.show) {
                return (
                  <div key={index + 1} className="w-full md:w-1/2">
                    {item.data.map((obj) => (
                      <div key={obj.id} className="mb-8 flex">
                        <div className="font-bold text-4xl mr-7">{obj.id}</div>
                        <div>
                          <h4 className="font-bold mb-1 uppercase pt-2">
                            {obj.heading}
                          </h4>
                          <p>{obj.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
      <Community />
      <Audited />
    </>
  );
};
