import React from 'react'

const Audited = () => {
  return (
    <div className="mx-auto px-4 md:px-6 container-lg bg-gray-100">
      <section className="pt-14 pb-12 flex flex-wrap items-center">
        <span className="font-bold text-xs mr-4 md:mr-14">Audited by</span>
        <span className="">
          <img src="../images/ps-logo.png" alt="audit logo" className="mr-4 h-6 md:mr-14" />
        </span>
        <span className="">
          <img src="../images/ha-logo.png" alt="audit logo" className="h-4" />
        </span>
      </section>
    </div>
  )
}

export default Audited
