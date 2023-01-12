import React from 'react'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import ahmet from '../images/ahmet.jpg'

function Midsection() {
  return (
  <div> 
     <div className='mid'>
      <h1>AHMET ÇETİN</h1>
      <h5>Attorney/Developer/Trader</h5>
      <p>Hi there its me Ahmet aka Hepyek.</p> </div>
      <div className='butonlar'>
        <a href='https://twitter.com/coyoteofwallstr' ><img src={twitter} alt='twitter'/></a>
        <a href='https://github.com/ahmetcetnn'target="_blank"><img src={github} alt='github' /></a>
        <a href='https://www.linkedin.com/in/ahmet-%C3%A7etin-1670a6177/'target="_blank"><img src={linkedin} alt='linkedin'/></a>
      </div>
      <img src={ahmet} alt="ahmet" id='ahmet'/>
    </div>
  )
}

export default Midsection
