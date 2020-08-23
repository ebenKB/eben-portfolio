import React from 'react';
import Styles from '../../components/footer.module.css'

const footer = () => {
  return (
    <div className={Styles.footer}>
     <div className={Styles.copy_right}>
      &copy; 2020
     </div>
    </div>
  )
}

export default footer
