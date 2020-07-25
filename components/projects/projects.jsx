import React from 'react'
import Divider from '../divider/divider';
import CaptionWrapper from '../caption-wrapper/caption-wrapper';

const Projects = ({title, children}) => {
  return (
    <div className="content-pad caption-wrapper">
      <CaptionWrapper>
        <h1>{title}</h1>
        <Divider />
        {children}
      </CaptionWrapper>
    </div>
  )
}

export default Projects