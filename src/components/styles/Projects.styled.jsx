import styled from "styled-components";

export const StyledProjects = styled.div`
    
    background-color: ${({theme}) => theme.bgcolor};
    color: white;

    .cardsWrapper{

        display: grid;
        grid-template-columns: auto repeat(3, 350px) auto;
        grid-row-gap: 3rem;
        grid-column-gap: 2rem;
        grid-template-areas:
        ". card1 card2 card3 ."
        ". card4 . . .";
    
        .PageTitle{
            grid-area: PageTitle;
        }
    
    }

    
    h3{
        font-size: 3rem;
        text-align: center;
        padding: 8rem 0 8rem 0;

        ::-moz-selection { /* Code for Firefox */
            color: white;
            background: ${ ({theme}) => theme.accent };
        }
        ::selection {
            color: white;
            background: ${ ({theme}) => theme.accent };
        }
    }

`