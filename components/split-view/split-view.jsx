import React from 'react';
import Styles from '../../components/split-view.module.css';

const SplitView = ({left, right}) => {
  return (
    <div className={Styles.split_view}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}

export default SplitView
