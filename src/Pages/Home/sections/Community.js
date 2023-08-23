import React from 'react'
import * as FaIcon from 'react-icons/fa'
import * as BsIcon from 'react-icons/bs'

const Community = () => {

  const communityList = [
    {
      id: 1,
      component: <FaIcon.FaDiscord className="largesvgfont mx-auto" />,
      title: 'Discord'
    },
    {
      id: 2,
      component: <FaIcon.FaTwitter className="largesvgfont mx-auto" />,
      title: 'Twitter'
    }, {
      id: 3,
      component: <BsIcon.BsGithub className="largesvgfont mx-auto" />,
      title: 'Github'
    },
  ]

  return (
    <section className="text-white pt-14 md:pt-20 pb-16 md:pb-26">
      <div className="mx-auto px-4 md:px-6 container-lg">
        <h3 className="text-4xl font-bold mb-6 text-center">Join our community</h3>
        <p className="font-medium mx-auto block mb-14 max-w-xl">
          Chat with the team and others in the community to learn more about fractional.art and help shape the future of
          the fractional protocol.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {
            communityList.map(item => (
              <a className="block rounded-2xl py-10 back-blue cursor-pointer" key={ item.id }>
                <div className="mb-7">
                  {item.component}
                </div>
                <div className="text-sm text-center font-medium">
                  {item.title}
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Community
