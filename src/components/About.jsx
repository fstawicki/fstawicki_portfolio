import React from 'react'
import { StyledAbout } from './styles/About.styled'


const About = () => {
  return (
    <StyledAbout>
      <div className="infoText">
        <h2 className="aboutme">About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, excepturi officiis natus consectetur tenetur, aliquid nihil quidem, doloribus quasi error praesentium sed dolor ullam. Necessitatibus, iusto alias! Eveniet tenetur, veritatis cumque blanditiis odit unde, magni quod assumenda corporis ut recusandae dolor aliquid quia nulla cum suscipit velit quam tempora eligendi!</p>
        <p className='accentcolor'>Here are technologies and tools I have worked with before:</p>
        <div className="technologies">
            <ul className="technologiesList">
                <li>👉 React</li>
                <li>👉 Javascript</li>
                <li>👉 HTML</li>
                <li>👉 CSS, SCSS, Styled Components, CSS Modules</li>
                <li>👉 Git</li>
                <li>👉 Figma</li>
                <li>👉 Visual Studio Code, Atom</li>
            </ul>
        </div>
      </div>
      <div className="imageDiv">
        <img src="" alt="Filip Stawicki" className="myImg" />
      </div>
    </StyledAbout>
  )
}

export default About