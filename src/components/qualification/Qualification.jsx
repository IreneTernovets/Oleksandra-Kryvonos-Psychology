import React from 'react';
import "./qualification.css"

const Qualification = () => {
  return (
    <section className='qualification section'>
          <h2 className="section__title">Кваліфікація</h2>
          <span className="section__subtitle">Мій професійний шлях</span>

          <div className="qualification__container container">
              <div className="qualification__tabs">
                  <div className="qualification__button qualification__active button--flex">
                      <i className="uil uil-graduation-cap qualification__icon"></i> Освіта
                  </div>

                  <div className="qualification__button button--flex">
                      <i className="uil uil-briefcase-alt qualification__icon"></i> Досвід
                  </div>
              </div>

              <div className="qualification__sections">
                  <div className="qualification__content qualification__content-active">
                      <div className="qualification__data">
                          <div>
                              <h3 className="gualification__title">
                                  Психологія
                              </h3>
                              <span className='qualification__subtitle'> Університет Драгоманова</span>
                              <div className="qualififcation__calender">
                                  <i className="uil uil-calendar-alt"></i> 2021 - нині
                              </div>
                          </div>

                          <div>
                              <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                          </div>
                      </div>

                      <div className="qualification__data">
                          <div></div>

                          <div>
                              <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                          </div>

                          <div>
                              <h3 className="gualification__title">
                                  Психологія
                              </h3>
                              <span className='qualification__subtitle'> Університет Драгоманова</span>
                              <div className="qualififcation__calender">
                                  <i className="uil uil-calendar-alt"></i> 2021 - нині
                              </div>
                          </div>
                      </div>

                      <div className="qualification__data">
                          <div>
                              <h3 className="gualification__title">
                                  Психологія
                              </h3>
                              <span className='qualification__subtitle'> Your Norma </span>
                              <div className="qualififcation__calender">
                                  <i className="uil uil-calendar-alt"></i> 2022 - нині
                              </div>
                          </div>

                          <div>
                              <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                          </div>
                      </div>

                      <div className="qualification__data">
                          <div></div>

                          <div>
                              <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                          </div>

                          <div>
                              <h3 className="gualification__title">
                                  Психологія
                              </h3>
                              <span className='qualification__subtitle'> Psy простір</span>
                              <div className="qualififcation__calender">
                                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="qualification__content">
                      <div className="qualification__data">
                          <div>
                              <h3 className="gualification__title">
                                  Консультації
                              </h3>
                              <span className='qualification__subtitle'> Your Norma</span>
                              <div className="qualififcation__calender">
                                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                              </div>
                          </div>

                          <div>
                              <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                          </div>
                      </div>

                      <div className="qualification__data">
                          <div></div>

                          <div>
                              <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                          </div>

                          <div>
                              <h3 className="gualification__title">
                                  Консультації
                              </h3>
                              <span className='qualification__subtitle'> Університет Драгоманова - Київ</span>
                              <div className="qualififcation__calender">
                                  <i className="uil uil-calendar-alt"></i> 2021 - нині
                              </div>
                          </div>
                      </div>

                      <div className="qualification__data">
                          <div>
                              <h3 className="gualification__title">
                                  Консультації
                              </h3>
                              <span className='qualification__subtitle'> Your Norma </span>
                              <div className="qualififcation__calender">
                                  <i className="uil uil-calendar-alt"></i> 2022 - нині
                              </div>
                          </div>

                          <div>
                              <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        
    </section>
  )
}

export default Qualification