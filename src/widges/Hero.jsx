import Video from "../assets/show.mp4"


import React from 'react'

function Hero() {
  return (
      <div className='grid gap-8 pb-28 relative justify-items-center'>
        <p className='text-5xl font-black md:text-6xl text-center'>
            打造一个完美的、现象级的、充满创造力的网站
        </p>
        <p className='text-xl text-gray-500 md:w-1/2 text-center'>
            打造一个完美的、现象级的、充满创造力的网站打造一个完美的、现象级的、充满创造力的网站打造一个完美的、现象级的、充满创造力的网站
        </p>

        {/* 按钮 */}
        <div>
            <button className='rounded bg-blue-500 text-white text-base px-8 py-3'>
                立即试用
            </button>
            <button className=' rounded bg-gray-900 text-white text-base px-8 py-3 ml-4'>
                了解更多
            </button>
        </div>

        {/* 将背景图形放在一个相对位置的盒子里，方便定位 */}
        <div className='relative w-full'>
            <svg
            width="256"
            height="256"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 -z-10"
            >
            <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_0_22)" />
            <defs>
                <linearGradient
                id="paint0_linear_0_22"
                x1="0"
                y1="0"
                x2="0"
                y2="256"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="white" />
                <stop offset="0.774017" stopColor="#EAEAEA" />
                <stop offset="1" stopColor="#DFDFDF" />
                </linearGradient>
            </defs>
            </svg>
            
        </div>
        <div>
            
        </div>

        {/* 视频 */}
        <div className='relative grid justify-items-center'>
            <video 
                src={Video}
                controls
                className='w-[768px] h-[432px] object-cover object-top rounded'
            >
            </video>

            <div className='flex absolute rounded-full bg-white px-7 py-3 -bottom-7 shadow-xl'>
                查看演示视频
            </div>
        </div>

        <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 md:bottom-20 -left-10 -z-10"
            >
            <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_0_23)" />
            <defs>
            <linearGradient
                id="paint0_linear_0_23"
                x1="0"
                y1="0"
                x2="0"
                y2="128"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="white" />
                <stop offset="0.774017" stopColor="#EAEAEA" />
                <stop offset="1" stopColor="#DFDFDF" />
            </linearGradient>
            </defs>
        </svg>
      </div>
    )
}

export default Hero