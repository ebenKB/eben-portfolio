import React from 'react';
import Link from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from '../../components/header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
          <div className={styles.header_content}>
            <div className={`full-circle ${styles.header_image}`}>
              <img src="/images/eben.jpg" alt="image"/>
            </div>
            <div className="header">
              <h1>Ebenezer Boafo Adjei</h1>
              <h2 className="light caption semi-bold">Software Engineer</h2>
              <h4 className="light caption">Bsc. Computer Science '18,
                &nbsp;
                <a 
                  href="https://www.knust.edu.gh/" 
                  target="_blank"
                >
                KNUST
              </a>
              </h4>
              <div className="flex-center space-between">
                <div className="round placeholder">
                    <a 
                      href="https://www.github.com/ebenKB"
                      target="_blank"
                    >
                      <GitHubIcon className="light"/>
                    </a>
                </div>
                <div className="round placeholder">
                  <a 
                    href="https://www.twitter.com/eben_kb"
                    target="_blank"
                  >
                    <TwitterIcon className="light" />
                  </a>
                </div>
                <div className="round placeholder">
                    <a 
                      href="https://www.linkedin.com/in/ebenezer-boafo-adjei/" 
                      target="_blank"
                    >
                      <LinkedInIcon className="light" />
                    </a>
                </div>
              </div>
            </div>
            <div className={styles.contact_wrapper}>
              <a
                className="active button inline-flex center" 
                href="mailto:eboafo.adjei@gmail.com" 
                target="_blank"
              >
                <span>
                  <img src="/images/send.svg" alt="image" className="medium icon" />
                </span>
                <span className="caption padded">
                  Contact Me
                </span>
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header
