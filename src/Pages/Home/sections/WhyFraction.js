import React from 'react'
import FeatureCard from '../../../Components/FeatureCard'
import { GreenLineButton, GreyLineButton } from '../../../Components/CommonStyledComponents/Buttons'

const WhyFraction = () => {

  const features = [
    {
      imgsrc: '../images/pie.svg',
      title: 'Accessibility',
      content: 'Become a partial owner of collectable NFTs you otherwise could not afford'
    },
    {
      imgsrc: '../images/compass.svg',
      title: 'Freedom',
      content: 'Decide what to do with your NFT fractions (e.g., add the underlying NFT to a digital gallery, deliver to contest winners)'
    },
    {
      imgsrc: '../images/game.svg',
      title: 'Diversity',
      content: 'Choose from a variety of iconic digital art collections composed of one or more NFTs'
    },
    {
      imgsrc: '../images/shield.svg',
      title: 'Creativity',
      content: 'Deliver imaginative distribution events and novel post-purchase community experiences for your fraction owners'
    }
  ]

  return (
    <div className="mx-auto px-4 md:px-6 bg-gray-100 md:border-0">
        <section className="pt-6 pb-16 md:pb-24 mx-auto max-w-5xl">
          <h3 className="text-45xl font-bold mb-6">
            Why <span className="text-accent"> fractional.art </span> ?
          </h3>
          <p className="font-medium mb-16 max-w-xl">
            Fractional delivers a unique way to unlock NFT liquidity and provides community access to owning parts of iconic and historic NFTs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {
              features.map((item, index) => (
                <FeatureCard key={index + 1} obj={item}></FeatureCard>
              ))
            }
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start">
            <GreenLineButton className="mr-3 py-3 px-14 text-sm mb-4 font-semibold">Read FAQ</GreenLineButton>
            <GreyLineButton className="py-3 px-14 text-sm mb-4 font-semibold">How it works ?</GreyLineButton>
          </div>
        </section>
      </div>
  )
}

export default WhyFraction
