import React from 'react'
import '../styles/InformationBox.css'
import LogoRotate from './LogoRotate'

export default function InformationBox({job_title, date, company, text_info, technologies, image={src: null, name: ''}, url=''}) {

    const handleClick = () => {
        window.open(url, "_blank")
    }

    return (
        <div id='information-box' onClick={handleClick} style={{pointerEvents: url ? 'auto' : 'none'}}>
            <div className='logo-big-screen' style={{ display: image.src ? '' : 'none' }}>
                <LogoRotate image={image}/>
            </div>
            <div className='container-text description-text'>
                <div className='container-first-text-logo'>
                    <div className='container-first-text'>
                        <div className='date'>
                            {date}
                        </div>
                        <div className='job-title white-font'>
                            {job_title}
                        </div>
                        <div className='company'>
                            {company}
                        </div>
                    </div>
                    <div className='logo-small-screen' style={{ display: image.src ? '' : 'none' }}>
                        <LogoRotate image={image}/>
                    </div>
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
