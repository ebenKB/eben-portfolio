import React from 'react'
import Divider from '../divider/divider';
import Styles from '../../components/education.module.css';

const Education = () => {
  return (
    <section>
      <h1>Education</h1>
      <Divider />
      <div className={`flex-center ${Styles.education_item}`}>
        <div>
          <img src="/images/school.svg" alt="icon" className={`${Styles.icon} medium icon`} />
        </div>
        <div>
          <span className="semi-bold">BSc. Computer Science</span>
          <h5 className="no-pad light caption">Kwame Nkrumah University of Science and Technology</h5>
          <div className="faint very-light caption">(August 2014 - June, 2018)</div>
        </div>
      </div>
    </section>
  )
}

export default Education
