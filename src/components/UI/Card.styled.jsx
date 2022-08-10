import styled from "styled-components";

export const StyledCard = styled.a.attrs({})`

    display: block;
    grid-area: ${props => props.area};
    width: 300px;

    text-decoration: none;
       
    border: 1px solid red;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    :hover{
        cursor: pointer;
    }

    grid-area: ${props => props.area};

    .title{
        font-size: 1.5rem;
        text-align: center;
        letter-spacing: 0.1px;
        font-weight: bold;
        color: white;

        padding: 1rem 0;
    }

    .description{
        text-align: center;
        margin-bottom: 0.5rem;
        color: ${({theme}) => theme.greytext};;

    }


    .links{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    a{
        padding: 1rem;
    }

    /* a{
        text-decoration: none;
        color: ${({theme}) => theme.accent};
    }

    a:hover{
        text-decoration: underline;
    } */

        
    .projectImage{
        width: 100%;
        height: 230px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }





`