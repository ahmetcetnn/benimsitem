import React,{useState} from 'react'
import sun from '../images/sun.png'
import moon from '../images/moon.png'





function Header() {
     const [theme, setTheme]=useState(false)
     
        
     
  return (
    <div>
      <div className={theme ? "light"  : "dark" }>
        <h1>cetn.dev </h1>
        
            <ul 
            id='gece'>
                <img id='moon' 
                 src={sun} 
                 alt='buton'
                 onClick={() => setTheme(!prevTheme)}
            
            /></ul> 
            </div>
        </div>
      
   
  )
}

export default Header
