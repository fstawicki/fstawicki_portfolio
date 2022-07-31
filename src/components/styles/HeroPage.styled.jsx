import styled from "styled-components";

export const StyledHeroPage = styled.div`

    background-color: ${({theme}) => theme.bgcolor};
    height: 100vh;


    .introText{

        
        .accent{
            color: ${ ({theme}) => theme.accent };
        }
        
        h1{
            
        }

        p{
            color: ${ ({theme}) => theme.greytext };
        }
    }

`
