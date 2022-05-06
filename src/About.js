import React from "react"
import "./About.css"

function About (){
    return(
        <div>
            
            <div className="about-container">
                <div className="about-details">
                    <h1>Laura Smith</h1>
                    <p>Frontend Developer</p>
                    <a href="laurasmith.website">laurasmith.website</a>
                </div>
                <div class="btn-container"> 
                    <button className="btn btn-left"><i class="btn-icon fa-solid fa-envelope"></i>Email</button>
                    <button className="btn btn-right"><i class="btn-icon fa-brands fa-linkedin"></i>LinkedIn</button>
                </div>
                <article className="article-el">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular 
                    interest in making things simple and automating
                    daily tasks. I try to keep up with security and
                    best practices, and am always looking for new
                    things to learn.</p>
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet 
                    fanatic. Bacon buff. Entrepreneur. Travel geek.
                    Pop culture ninja. Coffee fanatic.</p>
                </article>
            </div>    
        </div>
        
     )
}

export default About;