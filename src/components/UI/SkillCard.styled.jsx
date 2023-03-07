import styled from "styled-components";

export const SkillCardStyled = styled.div`

    .logoIMG{
        width: 100%;
        height: 150px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    p{
        color: ${({theme}) => theme.greytext};
        font-size: 1.2rem;
        text-align: center;
        padding-top: 1rem;
    }
    


`