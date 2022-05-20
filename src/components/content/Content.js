import React, { useState } from 'react'
import "./content.css"
import Modal from './Modal'
const Content = ({ searchBook }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState();

    return (
        <>
            {
                searchBook.map((book, i) => {
                    let thumbnail = book.volumeInfo.imageLinks?.thumbnail
                    if (thumbnail !== undefined) {
                        return (
                            <div key={i}>
                                <div className="book-card">
                                    <img src={thumbnail} alt="book"></img>
                                    <div className="book-detail">
                                        <a href={book.volumeInfo.previewLink}><span>PREVIEW </span></a>
                                        <span onClick={() => { setShow(true); setBookItem(book) }}>| DETAILS</span>
                                    </div>
                                    <div className="book-info">
                                        <span className="border-top"></span>
                                        <h3 className="title">{book.volumeInfo.title}</h3>
                                        <span className="border-top"></span>
                                        <p className="author">{book.volumeInfo.authors} </p>

                                    </div>
                                </div>
                                <Modal show={show} bookItem={bookItem} onClose={() => setShow(false)} />
                            </div>
                        )
                    }
                })

            }
        </>


    )
}

export default Content
