import React from 'react';
import {SkillCardStyled} from './SkillCard.styled';

const SkillCard = (props) => {
  return (
    <SkillCardStyled>
        <img src={props.logoSRC} alt={props.altName} className="logoIMG" />
        <p className="skillTitle">{props.skillName}</p>
    </SkillCardStyled>
  )
}

export default SkillCard