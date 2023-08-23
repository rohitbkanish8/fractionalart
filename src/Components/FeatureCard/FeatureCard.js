import React from 'react'

export const FeatureCard = (props) => {
  return (
    <div className="mb-1 transform hover:-translate-y-5 transition duration-200">
      <div className="px-8 pt-10 pb-14 feature-card">
        <div className="icon-rectangle flex items-center justify-center mx-auto mb-6">
          <img src={props.obj.imgsrc} alt="accessibility" className="h-14 w-auto" />
        </div>
        <h4 className="font-bold text-2xl mb-3 text-center">{props.obj.title}</h4>
        <p className="font-medium text-center">{props.obj.content}</p>
      </div>
    </div>
  )
}
