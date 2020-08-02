import React from 'react'
import Divider from '../divider/divider';

const Contact = () => {
  return (
    <section>
      <h1>Contact</h1>
      <Divider />
      <div className="flex-center list-item">
        <div>
          <img src="/images/pin.svg" alt="icon" className="medium icon" />
        </div>
        <div>
          Ghana, Accra
        </div>
      </div>
      <div className="flex-center list-item">
        <div>
          <img src="/images/github.svg" alt="icon" className="medium icon" />
        </div>
        <a href="">https://github.com/ebenKB</a>
      </div>
      <div className="flex-center list-item">
        <div>
          <img src="/images/mail.svg" alt="icon" className="medium icon" />
        </div>
        <a href="mailto:eboafo.adjei@gmail.com">eboafo.adjei@gmail.com</a>
      </div>
    </section>
  )
}

export default Contact