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

        @media (max-width: 1250px){
            grid-template-areas:
            ". card1 card2 ." 
            ". card3 card4 .";
            grid-template-columns: auto 350px 350px auto;
            grid-row-gap: 2rem;
            grid-column-gap: 2rem;
        }

        @media (max-width: 850px){
            grid-template-areas:
                "card1" 
                "card2" 
                "card3" 
                "card4";
            grid-template-columns: 1fr;
            grid-row-gap: 1rem;
            grid-column-gap: 0;
            
        }
    
    }

    a{
        background-color: ${ ({theme}) => theme.accent };

        :hover{
            background-color: ${ ({theme}) => theme.bluewave };
        }
    }
    
    h3{
        font-size: 3rem;
        text-align: center;
        padding: 8rem 0;

        @media (max-width: 950px){
            padding: 6rem 0;
        }

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