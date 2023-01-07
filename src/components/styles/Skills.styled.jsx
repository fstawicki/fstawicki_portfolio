import styled from "styled-components";

export const StyledSkills = styled.div`
    

    background-color: ${({theme}) => theme.bgcolor};
    color: white;

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