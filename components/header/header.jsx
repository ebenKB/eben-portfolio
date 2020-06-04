import React from 'react';
import Link from 'next/link'
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
              <h4 className="light caption">Bsc. Computer Science '18,
                &nbsp;
                <a href="https://www.knust.edu.gh/" target="_blank">KNUST</a>
              </h4>
            </div>
            <div>
            <Link href="/">
              <a className="active button">Contact Me</a>
            </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
