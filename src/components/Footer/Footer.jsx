import React from 'react'
import github from '../../assets/bxl-github.svg'
import linkedin from '../../assets/bxl-linkedin-square.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__content">
        <p className='footer__copy'>All rights reserved &copy;</p>
        <section className="footer__social">
          <h2 className="footer__subtitle">Social Networks</h2>
          <div className="footer__links">
            <a href="https://github.com/padermo" alt="logo github" target={'_blank'} className="footer__link"><img src={github} className="footer__img" /></a>
            <a href="https://www.linkedin.com/in/fabioestevezeh/" alt="logo linkedin" target={'_blank'} className="footer__link"><img src={linkedin} className="footer__img" /></a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer