import React from 'react'
import { Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

function ProjectCard( {title, description, imgURL, hasGithubRepo, gitHubURL, hasProjectWriteUp, projectURL} ) {
  return (
        <Col size={12} sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgURL} alt='project img'/>
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    {hasGithubRepo ? 
                        <div>
                        <a href={gitHubURL} target="_blank" rel="noreferrer">                    
                            <button style={{color: '#EAE3D2'}}><u>View GitHub Repo <ArrowRightCircle size={25}/></u></button>
                        </a>
                        </div>
                        :
                        <div></div>
                    }

                    {hasProjectWriteUp ? 
                        <div>
                        <a href={projectURL} target="_blank" rel="noreferrer">                    
                            <button style={{color: '#EAE3D2'}}><u>View Project Details <ArrowRightCircle size={25}/></u></button>
                        </a>
                        </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
        </Col>
  )
}

export default ProjectCard