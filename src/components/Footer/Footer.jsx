import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container">
                <div className="footer__box">
                    <h1>Let's work together.</h1>
                    <a className="footer__link" href="">Get in touch.</a>

                    <div className="footer__title">

                        <div className="footer__gif">
                            <video autoPlay loop muted>
                                <source src="https://storage.dancelogo.com/rendered/67249543d840d-1730450755/eOBPNQOfYDum3mofuQG5vb6tT7rL7vJcGfTRwR0K.webm" type="video/webm" />
                            </video>
                            <p>© Oli Harris 2023</p>
                        </div>

                        <div className="footer__contact">
                            <a href="">Twitter</a>
                            <a href="">Instagram</a>
                            <a href="">Mail</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer