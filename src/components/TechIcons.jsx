import React from 'react'
import '../styles/TechIcons.css'

export default function TechIcons() {
  return (
    <div id="tech-icons">
        <div className='react-image'>
            <img src="./images/react_image.png" alt="React Logo"/>
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
