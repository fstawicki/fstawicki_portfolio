import styled from "styled-components";

export const StyledProjects = styled.div`
    
    background-color: ${({theme}) => theme.bgcolor};
    color: white;

    .cardsWrapper{

        /* margin: 0 auto;
        width: 70%; */
        display: grid;
        grid-template-areas:
        ". . card1 card2 card3 . .";
    
        .PageTitle{
            grid-area: PageTitle;
        }
    
    }

    
    h3{
        font-size: 3rem;
        text-align: center;
        padding: 8rem 0 8rem 0;
    }

`