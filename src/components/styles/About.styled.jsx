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
        
    }

    .studyContainer,
    .jobsContainer{
        background-color: white;
    }

    .studyContainer *,
    .jobsContainer *{
        color: ${({theme}) => theme.bgcolor};
        font-size: 1.1rem;
    }


`