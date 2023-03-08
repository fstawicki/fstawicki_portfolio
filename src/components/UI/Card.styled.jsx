import styled from "styled-components";

export const StyledCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: ${props => props.area};

    justify-self: center;

    display: block;
    grid-area: ${props => props.area};
    width: 350px;

    text-decoration: none;
    
    border: 1px solid ${({theme}) => theme.bgcolor};
    border-bottom: 1px solid white;
    border-radius: 3%;
    background-color: white;

    transition: transform 300ms;

    box-shadow: 0 0 0.2rem 0.2rem ${({theme}) => theme.bluewave};
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);

    @media (max-width: 400px){
        width: 300px;
    }

    :hover{
        transform: scale(1.03);
        cursor: pointer;
    }



    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title{
        font-size: 1.5rem;
        letter-spacing: 0.1px;
        text-align: center;
        font-weight: bold;
        color: ${({theme}) => theme.accent};

        margin: 1.5rem 0 1rem 0;
    }

    .description{
        padding: 0 1rem 1rem 1rem;

        text-align: center;
        color: ${({theme}) => theme.greytext};;

    }

    .links{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .projectImage{
        width: 100%;
        height: 210px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 3%;
        
    }

    a{
        font-size: 1.1rem;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        color: white;
        text-align: center;
        text-decoration: none;

        margin: 1rem 0;

        padding: 1.2rem;
        background-color: ${({ theme }) => theme.accent};
        border: 1px solid ${({ theme }) => theme.accent};
        border-radius: 5%;

        transition: 0.3s ease;
        
        :hover{
            background-color: ${({theme}) => theme.bluewave};
            border-color: ${({theme}) => theme.bluewave};
        }

    }





`