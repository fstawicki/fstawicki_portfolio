import styled from "styled-components";

export const StyledProjects = styled.div`
    
    background-color: ${({theme}) => theme.bgcolor};
    color: white;

    .cardsWrapper{

        display: grid;
        grid-template-areas:
        "card3 card1 card2";
    
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