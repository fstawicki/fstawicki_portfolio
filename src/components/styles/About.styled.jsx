import styled from "styled-components";

export const StyledAbout = styled.div`

    background-color: ${({theme}) => theme.bluewave};
    color: ${({theme}) => theme.bgcolor};

    display: flex;
    justify-content: space-around;
    align-items: center;
    letter-spacing: 0.5px;
    

    ul{
        list-style:none
    }

    .whitecolor{
        color: white;
        font-weight: bold;
        margin-top: 2rem;
    }


    .infoText{
        width: 50%;

        h2{
            color: white;
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        p{
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }

        .technologies{
            font-size: 1.1rem;
            margin-left: 2rem;
        }
    }
    





`