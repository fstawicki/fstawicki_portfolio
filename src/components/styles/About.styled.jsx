import styled from "styled-components";

export const StyledAbout = styled.div`

    background-color: ${({theme}) => theme.bluewave};

    position: relative;

    ul{
        list-style: none;
    }

    /* .waveIMG{
        transform: rotate(180deg);
        position: absolute;
        top: 0;
        z-index: -1;
    } */

    .wrapper{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
    }

    .studyContainer,
    .jobsContainer{
        background-color: ${({theme}) => theme.bgcolor};
        border: 1px solid ${({theme}) => theme.accent};
        border-radius: 3%;
        padding: 2rem 0.5rem;
    }

    .studyContainer *,
    .jobsContainer *{
        color: white;
        font-size: 1.1rem;
    }


`