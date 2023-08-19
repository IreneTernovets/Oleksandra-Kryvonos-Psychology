import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className='footer__title'>Kryvonos</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Про мене</a>
                    </li>

                    <li>
                        <a href="#" className="footer__link">Сертифікати</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Відгуки</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="#" className="footer__social-link" target="_blank"><i class='bx bxl-instagram' ></i></a>

                    <a href="#" className="footer__social-link" target="_blank"><i class='bx bxl-telegram' ></i></a>

                    <a href="#" className="footer__social-link" target="_blank"><i class='bx bxl-tiktok' ></i></a>
                </div>

                <span className='footer__copy'>
                    &#169; Developed by Irena Ternovets. All rights recerved
                </span>
            </div>
        </footer>
    )
}

export default Footer