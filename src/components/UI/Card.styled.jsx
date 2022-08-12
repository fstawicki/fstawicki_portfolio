import styled from "styled-components";

export const StyledCard = styled.div`

    justify-self: center;

    display: block;
    grid-area: ${props => props.area};
    width: 350px;

    text-decoration: none;
    
    border: 1px solid ${({theme}) => theme.bgcolor};
    border-bottom: 1px solid white;
    border-radius: 3%;
    background-color: white;
    /*
    rgba(0, 0, 0, 0.45)
    */

    transition: transform 300ms;

    box-shadow: 0 0 0.2rem 0.2rem ${({theme}) => theme.bluewave};
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);

    @media (max-width: 400px){
        width: 300px;
    }

    :hover{
        transform: scale(1.03);
    }

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
        color: ${({theme}) => theme.accent};

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
        height: 210px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 3%;
        
    }

    a{
        background-color: ${({theme}) => theme.accent};

        :hover{
            background-color: ${({theme}) => theme.bluewave};
            border-color: ${({theme}) => theme.bluewave};
        }
    }





`