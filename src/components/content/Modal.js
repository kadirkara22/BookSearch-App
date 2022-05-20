import React from 'react'

const Modal = ({ show, bookItem, onClose }) => {

    if (!show) {
        return null
    }
    let thumbnail = bookItem.volumeInfo.imageLinks?.thumbnail
    return (
        <div className="overlay">

            <div className="overlay-inner">
                <button className="close" onClick={onClose}><i className="fas fa-times"></i></button>
                <div className="inner-box">
                    <div className="inner-info">
                        <img src={thumbnail} alt=""></img>
                        <div className="inner-info-right">
                            <div className="info">
                                <h5>{bookItem.volumeInfo.publishedDate}</h5>
                                <h4>{bookItem.volumeInfo.publisher}</h4>
                                <h6>{bookItem.volumeInfo.pageCount} pages</h6>
                            </div>

                            <div className="book-info">
                                <h4 className="modal-title">{bookItem.volumeInfo.title}</h4>
                                <p className="modal-author">{bookItem.volumeInfo.authors}</p>

                            </div>
                        </div>
                    </div>
                    <div className="description">
                        {bookItem.volumeInfo.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
