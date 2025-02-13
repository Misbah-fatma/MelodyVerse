import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer
                className="footer spad set-bg"
                style={{
                    backgroundImage: "url('/img/footer-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer__address">
                                <ul>
                                    <li>
                                        <i className="fas fa-phone"></i>
                                        <p>Phone</p>
                                        <h6>+91 9169849066</h6>
                                    </li>
                                    <li>
                                        <i className="fas fa-paper-plane"></i>

                                        <p>Email</p>
                                        <h6>misbah7370@gmail.com</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 col-md-6">
                            <div className="footer__social">
                                <h2>Misbah</h2>
                                <div className="footer__social__links">
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-dribbble"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-6">
                            <div className="footer__newslatter">
                                <h4>Stay With me</h4>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit"><i className="fas fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright__text">
                        <p>Copyright &copy; All rights reserved | This template is made  <i className="fas fa-heart" aria-hidden="true"></i> by Misbah Fatma.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer