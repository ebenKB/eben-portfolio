import React from 'react';
import styles from '../../components/header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
          <div className={styles.header_content}>
            <div className="full-circle"></div>
            <div>
              <h1>Ebenezer Boafo Adjei</h1>
              <h2>Software Engineer</h2>
              <h4>Bsc. Computer Science '18,
                &nbsp;
                <a href="">KNUST</a>
              </h4>
            </div>
            <div>contact me</div>
          </div>
      </div>
    </div>
  )
}

export default Header
