import styled from "styled-components";

export const StyledProjects = styled.div`
    
    background-color: ${({theme}) => theme.bgcolor};
    color: white;

    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
        "PageTitle PageTitle"
        "card card2"
    ;

    .PageTitle{
        grid-area: PageTitle;
    }

    .grid2{
        grid-area: card2;
    } */

    .card{

        grid-area: card;

        width: 300px;
        border: 1px solid red;


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

    }
    
    h3{
        font-size: 3rem;
        text-align: center;
        padding: 3rem 0;
    }

    .projectImage{
        width: 300px;
        height: 300px;
    }


`