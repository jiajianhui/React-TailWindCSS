import React from 'react'

function Contact() {
  return (
    <div className='bg-black p-20 text-white relative overflow-hidden'>
        <div className='w-full'>
            <h2 className='text-3xl font-bold mb-3'>来吧，强化你的公司!</h2>
            <p className='text-lg text-gray-300'>来吧，强化你的公司!来吧，强化你的公司!来吧，强化你的公司!来吧，强化你的公司!</p>
            <div className='flex  mt-8 mb-3 flex-col md:flex-row gap-6'>
              <input 
                className='py-3 pl-5 bg-gray-900 border rounded border-gray-700' 
                type="text" 
                placeholder='您的邮箱' 
              />
              <button href="#" className='py-3 px-5 rounded text-white bg-blue-600'>立即开始</button>
            </div>

            <p className='text-sm text-gray-400'>7天免费试用，无需支付</p>
        </div>

        <div className='absolute -right-20 -bottom-10 md:right-40 md:bottom-0'>
          <svg
          width="428"
          height="328"
          viewBox="0 0 428 328"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="translate-x-60"
        >
          <ellipse
            cx="185"
            cy="15.5758"
            rx="16"
            ry="15.5758"
            fill="white"
            fillOpacity="0.04"
          />
          <ellipse
            cx="100"
            cy="68.4015"
            rx="24"
            ry="23.3636"
            fill="white"
            fillOpacity="0.24"
          />
          <ellipse
            cx="29"
            cy="251.231"
            rx="29"
            ry="28.2311"
            fill="white"
            fillOpacity="0.12"
          />
          <ellipse
            cx="29"
            cy="251.231"
            rx="8"
            ry="7.78788"
            fill="white"
            fillOpacity="0.64"
          />
          <ellipse
            cx="342"
            cy="31.303"
            rx="8"
            ry="7.78788"
            fill="white"
            fillOpacity="0.12"
          />
          <ellipse
            cx="62"
            cy="126.81"
            rx="2"
            ry="1.94697"
            fill="white"
            fillOpacity="0.48"
          />
          <ellipse
            cx="78"
            cy="7.07197"
            rx="2"
            ry="1.94697"
            fill="white"
            fillOpacity="0.12"
          />
          <ellipse
            cx="185"
            cy="15.5758"
            rx="6"
            ry="5.84091"
            fill="white"
            fillOpacity="0.64"
          />
          <circle cx="276" cy="237" r="200" fill="url(#paint0_radial_0_360)" />
          <defs>
            <radialGradient
              id="paint0_radial_0_360"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(218.168 175.211) rotate(39.505) scale(384.125)"
            >
              <stop stopColor="#DFDFDF" />
              <stop offset="0.443175" stopColor="#4C4C4C" />
              <stop offset="1" stopColor="#333333" />
            </radialGradient>
          </defs>
        </svg>
        </div>
    </div>
  )
}

export default Contact