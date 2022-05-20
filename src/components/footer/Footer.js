import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col item social">
                            <a href="https://github.com/kadirkara22"><i className="icon ion-social-github"></i></a>
                            <a href="https://www.linkedin.com/in/kadir-kara-850716201/"><i className="icon ion-social-linkedin"></i></a>
                            <a href="#"><i className="icon ion-social-twitter"></i></a>
                            <a href="#"><i className="icon ion-social-instagram"></i></a>

                        </div>
                    </div>
                    <p className="copyright">Copyright @2022 | Designed With by Kadir Kara</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
