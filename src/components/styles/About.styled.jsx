import styled from "styled-components";

export const StyledAbout = styled.div`

    background-color: ${({theme}) => theme.bluewave};
    color: ${({theme}) => theme.bgcolor};

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    letter-spacing: 0.5px;
    
    padding-top: 3rem;

    *{
        ::-moz-selection { /* Code for Firefox */
                color: ${({theme}) => theme.accent};
                background: ${({theme}) => theme.bgcolor};
            }
            ::selection {
                color: ${({theme}) => theme.accent};
                background: ${({theme}) => theme.bgcolor};
            }
    }

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


            @media (max-width:450px){
                font-size: 2.5rem;
            }
        }

        p{
            margin-bottom: 1rem;
            font-size: 1.2rem;

            @media (max-width:450px){
                font-size: 1.1rem;
            }
        }

        .technologies{
            font-size: 1.1rem;
            margin-left: 2rem;

            @media (max-width:450px){
                font-size: 1rem;
                margin-left: 0;
            }
        }
    }
    

    .myImg{
        width: 285px;
        height: 380px;

        border-radius: 5%;
        box-shadow: 0 0 8px 8px rgba(0,0,0,0.3);
    }


    @media (max-width: 750px){

        flex-direction: column;
        align-items: center;
        justify-content: center;

        .imageDiv{
            display: none;
        }

        .infoText{
            width: 100%;
            padding: 0 3rem;


            @media (max-width: 450px){
                padding: 0 1rem;
            }

        }
    }

`