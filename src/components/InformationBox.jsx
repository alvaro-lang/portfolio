import React from 'react'
import '../styles/InformationBox.css'
import LogoRotate from './LogoRotate'

export default function InformationBox({job_title, date, company, text_info, technologies, image={src: '', name: ''}}) {
  return (
    <div id='information-box'>
        <div className='logo'>
            <LogoRotate image={image}/>
        </div>

        <div className='container-text'>
            <div className='date'>
                {date}
            </div>
            <div className='job-title white-font'>
                {job_title}
            </div>
            <div className='company'>
                {company}
            </div>
            <div className='text-info'>
                <p dangerouslySetInnerHTML={{ __html: text_info }}></p>
            </div>
            <div className='container-grid white-font'>
                {technologies.map((tech, index) => (
                    <div key={index} className='tags retro-color'>
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
