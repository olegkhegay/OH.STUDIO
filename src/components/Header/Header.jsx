import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <>
        <header className='header'>
            <div className="container">
                <nav className="nav">
                    <a href="">Home</a>
                    <a href="">Profile</a>
                    <a href="">Contact</a>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header