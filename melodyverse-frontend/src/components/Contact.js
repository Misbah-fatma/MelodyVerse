import React from 'react'

const Contact = () => {
  return (
    <div>
            <div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__links">
                        <a href="#"><i className="fa fa-home"></i> Home</a>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="map">
        <div className="container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5524090066037!2d-71.10245469994108!3d42.47980730490846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3748250c43a43%3A0xe1b9879a5e9b6657!2sWinter%20Street%20Public%20Parking%20Lot!5e0!3m2!1sen!2sbd!4v1577299251173!5m2!1sen!2sbd"
                height="585" style="border:0;" allowfullscreen=""></iframe>
        </div>
    </div>

    <section className="contact spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact__address">
                        <div className="section-title">
                            <h2>Contact info</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore.</p>
                        <ul>
                            <li>
                                <i className="fa fa-map-marker"></i>
                                <h5>Address</h5>
                                <p>Los Angeles Gournadi, 1230 Bariasl</p>
                            </li>
                            <li>
                                <i className="fa fa-phone"></i>
                                <h5>Hotline</h5>
                                <span>1-677-124-44227</span>
                                <span>1-688-356-66889</span>
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>
                                <h5>Email</h5>
                                <p>Support@gamail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="contact__form">
                        <div className="section-title">
                            <h2>Get in touch</h2>
                        </div>
                        <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <form action="#">
                            <div className="input__list">
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="Email"/>
                                <input type="text" placeholder="Website"/>
                            </div>
                            <textarea placeholder="Comment"></textarea>
                            <button type="submit" className="site-btn">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact