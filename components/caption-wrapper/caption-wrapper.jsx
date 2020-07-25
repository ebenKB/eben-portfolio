import React from 'react';
import Styles from '../../components/caption.module.css';

const CaptionWrapper = ({children}) => {
  return (
    <div className={Styles.caption_wrapper}>
      {children}
    </div>
  )
}

export default CaptionWrapper
