import React from 'react';

import SkillCard from './UI/SkillCard';

import { StyledSkills } from './styles/Skills.styled';

import htmlLogo from '../assets/images/logos/html5.png';
import cssLogo from '../assets/images/logos/css.png';
import modulesLogo from '../assets/images/logos/cssmoduleslogo.png';
import sassLogo from '../assets/images/logos/Sass.png';
import componentsLogo from '../assets/images/logos/styledcomponents.png';
import typescriptLogo from '../assets/images/logos/Typescriptlogo.png';
import jsLogo from '../assets/images/logos/javascript.png';
import reactLogo from '../assets/images/logos/React.png';
import gitLogo from '../assets/images/logos/git.png';
import vscodeLogo from '../assets/images/logos/vscode.png';

const Skills = () => {
  return (
    <StyledSkills>
        <h3 className='PageTitle'>Technologies I Used:</h3>
        <div className="wrapper">
            <div className="skillsGrid">
                <SkillCard logoSRC={htmlLogo} altName={'HTML logo'} skillName={'HTML'}/>
                <SkillCard logoSRC={cssLogo} altName={'CSS logo'} skillName={'CSS'}/>
                <SkillCard logoSRC={jsLogo} altName={'JavaScript logo'} skillName={'JAVASCRIPT'}/>
                <SkillCard logoSRC={modulesLogo} altName={'CSS Modules logo'} skillName={'CSS MODULES'}/>
                <SkillCard logoSRC={sassLogo} altName={'SASS logo'} skillName={'SASS'}/>
                <SkillCard logoSRC={componentsLogo} altName={'Styled Components logo'} skillName={'STYLED COMPONENTS'}/>
                <SkillCard logoSRC={reactLogo} altName={'React logo'} skillName={'REACT'}/>
                <SkillCard logoSRC={typescriptLogo} altName={'TypeScript logo'} skillName={'TYPESCRIPT'}/>
                <SkillCard logoSRC={gitLogo} altName={'Git logo'} skillName={'GIT'}/>
                <SkillCard logoSRC={vscodeLogo} altName={'VsCode logo'} skillName={'VISUAL STUDIO CODE'}/>
            </div>
        </div>
    </StyledSkills>
  )
}

export default Skills
