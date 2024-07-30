
import logo from '../../public/vite.svg'


import React from 'react'

function Header() {
  return (
      <header className='flex justify-between items-center h-20'>
            <img src={logo} alt="" className='w-8 h-8' />

            <nav className='flex items-center'>
                <a href="#">登录</a>
                <a 
                    href="#" 
                    className='ml-8 bg-gray-900 py-2 px-4 rounded text-blue-50 flex items-center'
                >
                    注册
                </a>
            </nav>
      </header>
    )
}

export default Header