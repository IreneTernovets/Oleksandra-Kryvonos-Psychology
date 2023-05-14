import React from 'react';
import { useState } from 'react';
import "./header.css"

const Header = () => {
    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);
  return (
      <header className="header">
          <nav className="nav container">
              <a href="index.html" className="nav__logo">
                  Kryvonos
              </a>
              <div className="nav__menu">
                  <ul className="nav__list grid">
                      <li className="nav__item">
                          <a href="#home" className="nav__link active-link">
                              <i className="uil uil-estate nav__icon"></i>Головна
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#about" className="nav__link">
                              <i className="uil uil-user nav__icon"></i> Про мене
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#education" className="nav__link">
                              <i className="uil uil-briefcase nav__icon"></i> Освіта
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#services" className="nav__link">
                              <i className="uil uil-clipboard-notes nav__icon"></i> Послуги
                          </a>
                      </li>

                      <li className="nav__item">
                          <a href="#contact" className="nav__link">
                              <i className="uil uil-message nav__icon"></i> Контакти
                          </a>
                      </li>
                  </ul>

                  <i class="uil uil-times nav__close"></i>
              </div>

              <div className="nav__toggle">
                  <i class="uil uil-apps"></i>
              </div>
          </nav>
    </header>
  )
}

export default Header