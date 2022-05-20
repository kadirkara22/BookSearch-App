import axios from 'axios';
import React, { useState } from 'react'
import './header.css'


const Header = ({ setSearchBook }) => {
    const [book, setBook] = useState("");

    const handleChange = (e) => {
        setBook(e.target.value)
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=${process.env.REACT_APP_BOOK_API_KEY}` + '&maxResults=40')
                .then(res => setSearchBook(res.data.items))
                .catch(err => console.log(err))

        }
    }

    return (
        <div className="header">
            <div className="header-title">
                <span className="title">Book Search using React</span>
                <input type="search" onChange={handleChange} onKeyUp={handleKeyPress} value={book} className="header-search" placeholder="Book title or author..."></input>
            </div>
        </div>
    )
}

export default Header
