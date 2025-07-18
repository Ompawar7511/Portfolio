import React from 'react'
import './navbar.css'
// import contactimg from '../../assets/'
import logo from'../../assets/logo(1).avif';
import { Link } from 'react-scroll'
// import Intro from '../Intro/intro';
const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <div className="desktopMenu">
       <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Home</Link>
       <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-30} duration={500}className="desktopMenuListItem">Skills</Link>
       <Link activeClass="active" to='project' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Project</Link>
        </div>
        <button onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}className="desktopMenuBtn">
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar
