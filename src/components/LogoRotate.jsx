import React from 'react'
import '../styles/LogoRotate.css'

export default function LogoRotate({image}) {
  return (
    <div id="logo-rotate">
      <img src={image.src} alt={image.name}/>
    </div>
  )
}
