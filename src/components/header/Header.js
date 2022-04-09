import React from 'react'
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <span className="title">Book Search using React</span>
                <input type="search" className="header-search" placeholder="Book title or author..."></input>
            </div>
        </div>
    )
}

export default Header
