import React from 'react'

const Info = () => {
  return (
      <div className="about__info grid">
          <div className='about__box'>
              <i class='bx bx-award about__icon'></i>
              <h3 className="about__title">200+</h3>
              <span className="about__subtitle">років кар'єри</span>
          </div>
          <div className='about__box'>
              <i class='bx bx-briefcase-alt about__icon'></i>
              <h3 className="about__title">200+</h3>
              <span className="about__subtitle">років кар'єри</span>
          </div>
          <div className='about__box'>
              <i class='bx bx-support about__icon' ></i>
              <h3 className="about__title">200+</h3>
              <span className="about__subtitle">років кар'єри</span>
          </div>
    </div>
  )
}

export default Info