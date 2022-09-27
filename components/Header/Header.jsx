import React from 'react'
import Cart from './parts/Cart'
import Logo from './parts/Logo'
import Menu from './parts/Menu'

const Header = () => {
  return (
    <header>
        <div className="max-w-5xl mx-auto p-5 h-16 border-b border-black xl:px-0 grid grid-cols-[1fr,2fr,1fr] items-center">
            <Menu />
            <Logo />
            <Cart />
        </div>
    </header>
  )
}

export default Header