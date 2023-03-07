import styled from "styled-components";

export const StyledSkills = styled.div`
    

    background-color: ${({theme}) => theme.bgcolor};
    color: white;

    .wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .skillsGrid{

        display: grid;
        grid-template-columns: 150px 150px 150px;
        grid-gap: 50px;

        @media (max-width: 750px){
            grid-template-columns: 150px 150px;
        }
    }

    *{
        ::-moz-selection { /* Code for Firefox */
            color: white;
            background: ${ ({theme}) => theme.accent };
        }
        ::selection {
            color: white;
            background: ${ ({theme}) => theme.accent };
        }
    }

    h3{
        font-size: 3rem;
        text-align: center;
        padding: 8rem 0;

        @media (max-width: 950px){
            padding: 6rem 0;
        }

    }


`;