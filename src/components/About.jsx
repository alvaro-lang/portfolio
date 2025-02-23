import React from 'react'
import '../styles/About.css'

export default function About() {

    return (
        <div id="about">
            <div className='center-text'>
                <div className='presentation-title'>
                    Hey, I'm
                </div>
                <div className='title'>
                    Alvaro Pastor Sellers
                </div>
                <div className='subtitle'>
                    Full Stack Developer
                </div>
                <div className="presentation-text">
                    Computer engineer specialized in software engineering with more than 2 years of experience in full-stack web application development with Python/Django, JavaScript/Vue.js, HTML5 and CSS3. Extensive experience in the software product creation life cycle, as well as: requirements analysis, system design and architecture, product development, unit testing, deployment to production and product maintenance.              
                </div>
            </div>
            <div className='js-image'>
                <img src="./images/js_image.png" alt="JS Logo"/>
            </div>
            <div className='python-image'>
                <img src="./images/python_image.png" alt="Python Logo"/>
            </div>
            <div className='vue-image'>
                <img src="./images/vue_image.png" alt="Vue Logo"/>
            </div>
            <div className='django-image'>
                <img src="./images/django_image.png" alt="Django Logo"/>
            </div>
        </div>
    )
}
