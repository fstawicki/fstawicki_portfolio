import styled from "styled-components";

export const StyledCard = styled.a.attrs({})`

    display: block;
    grid-area: ${props => props.area};
    width: 300px;

    text-decoration: none;
       
    border: 1px solid red;
    border-radius: 3%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    :hover{
        cursor: pointer;
    }

    grid-area: ${props => props.area};


    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    .title{
        font-size: 1.5rem;
        letter-spacing: 0.1px;
        font-weight: bold;
        color: white;

        margin: 1.5rem 0 1rem 0;
    }

    .description{
        padding: 0 1rem 1rem 1rem;

        text-align: left;
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
        border-radius: 5%;
    }





`