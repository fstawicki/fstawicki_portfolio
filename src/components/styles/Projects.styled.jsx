import styled from "styled-components";

export const StyledProjects = styled.div`
    
    background-color: ${({theme}) => theme.bgcolor};
    
    color: white;

    .card{
        width: 300px;


        .title{
            font-size: 1.5rem;
            text-align: center;
            letter-spacing: 0.1px;
            font-weight: bold;
            color: ${({theme}) => theme.bluewave};

            padding: 1rem 0;
        }

        .description{
            padding-bottom: 1rem;

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