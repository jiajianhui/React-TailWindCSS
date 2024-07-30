import React from 'react'

function SectionHeader({title, subTitle}) {
  return (
    <div className='grid justify-items-center'>
        <h2 className='text-4xl font-bold mb-4'>{title}</h2>
        <p className='text-gray-500'>{subTitle}</p>
    </div>
  )
}

export default SectionHeader

// rfce