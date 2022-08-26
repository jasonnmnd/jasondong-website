import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard( {title, description, imgURL} ) {
  return (
        <Col size={12} sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgURL} alt='project img'/>
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
  )
}

export default ProjectCard