import React from 'react'
import './skills.css'
import programmingImg from '../../assets/programming_language.jpg'
import webDev from '../../assets/web_image.webp'
import backEnd from '../../assets/backend-development.webp'
const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">
            Skill Discription
        </span>
        <span className="SkillDiscription">
            I have good knowledge of programming in Java (Core and Advanced), C, and C++, and understand how to write clean and efficient code. I can build websites using HTML, CSS, and JavaScript, and also create server-side applications using Node.js. I’m also comfortable working with MongoDB, where I can design databases and manage data easily using simple operations.
        </span>
        <div className="skillBars">
           <div className="skillBar">
             <img src={programmingImg} alt="" className="skillBarImg" height="100px" width="100px"/>
             <div className="skillBarText">
                <h2>Programming</h2>
                <p>This is the demo for all language then add the skills which we have u know</p>
             </div>
           </div>
           <div className="skillBar">
             <img src={webDev} alt="" className="skillBarImg" height="100px" width="100px"/>
             <div className="skillBarText">
                <h2>WebDevlopment</h2>
                <p>This is the demo for all language then add the skills which we have u know</p>
             </div>
           </div>
           <div className="skillBar">
             <img src={backEnd} alt="" className="skillBarImg" height="100px"  width="100px"/>
             <div className="skillBarText">
                <h2>BackendDevlopment</h2>
                <p>This is the demo for all language then add the skills which we have u know</p>
             </div>
        </div>
</div>
    </section>
  )
}

export default Skills
