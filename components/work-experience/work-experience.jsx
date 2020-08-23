import React from 'react'
import Divider from '../divider/divider';
import CaptionWrapper from '../caption-wrapper/caption-wrapper';

const WorkExperience = () => {
  return (
    <div className="content-pad caption-wrapper">
      <h1>Work Experience</h1>
      <Divider />
      <CaptionWrapper>
        <h3>
          <span className="bold title">Software Engineer - </span>
          <span className="light caption">
            <a href="https://www.apotica.net" target="_blank">Apotica Company Limited</a>
          </span>
        </h3>
        <p>
          Leads a team that builds web applications and maintains existing ones;
          improved team performance and increased productivity by over 50%.
        </p>
        <ul>
          <li>Help in translating business requirements into prototypes and finally into working products.</li>
          <li>Builds frontend sketches with Figma and convert frontend sketches into working web applications.</li>
        </ul>
        <p>
          During my national service, I successfully lead a team of two in the rebuilding of Apotica website.
          I leveraged on CSS3 flexbox, CSS3 grids and HTML5 apis to build a stunning industry level website 
          for Apotica Company Limited. I made the website highly responsive to Computers,
          tablets and mobile devices.
        </p>
        <p>
          I used techniques in search engine optimization to 
          increase the site’s accessibility on the web and increased user retention by about 60%. 
          I successfully hosted the website on a staging server and finally moved it to production.
        </p>
      </CaptionWrapper>
      <CaptionWrapper>
        <h3>
          <span className="bold title">Software Engineer - </span>
          <span className="light caption">
            <a href="http://www.hubkbs.com/">Hub KB.S Company Limited</a>
          </span>
        </h3>
        <p>
          Transformed the company's manual processes into digitised and automated processes.
          Built software applications to manage the company's inventory, sales and customer relationship.
        </p>
        <p>I helped the company to increase production by over 40% and increased its customer base.</p>
      </CaptionWrapper>
      <CaptionWrapper>
        <h3>
          <span className="bold title">Web Development Lead and Instructor - </span>
          <span className="light caption">NUPS-G KNUST Web Team</span>
        </h3>
      <p>
        Lead a team of software developers to build web applications for the Union and maintained existing web applications.
        Tutored and mentored over 100 students to learn web development from beginner level to intermediate level.
      </p>
      </CaptionWrapper>
    </div>
  )
}

export default WorkExperience
