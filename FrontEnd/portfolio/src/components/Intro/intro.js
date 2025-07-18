import React from 'react'
import './intro.css';
import photo from'../../assets/photo.jpg'
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
       <span className="hello">Hello,</span>
       <span className="introText">I'm<span className="introName">Om</span><br/>Website Designer</span>
       <p className="introPara">I am a web designer and I have experience of devloping the web site and I create the website using REACT.JS </p>
       <a herf=""><button className="btn">Hire Me</button></a>
      </div>
      <img src={photo} alt="" className="bg"/>
    </section>
  )
}

export default Intro
