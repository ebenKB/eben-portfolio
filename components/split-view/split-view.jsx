import React from 'react';
import Styles from '../../components/split-view.module.css';

const SplitView = ({title, left, right}) => {
  return (
    <div className={Styles.split_view}>
      <div>{left}</div>
      <div>
        <p>{title}</p>
        {right}
      </div>
    </div>
  )
}

export default SplitView
