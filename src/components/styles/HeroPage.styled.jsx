import styled from "styled-components";

export const StyledHeroPage = styled.div`

    background-color: ${({theme}) => theme.bgcolor};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    position: relative;

    .btnMarginLeft a{
        margin-left: 2rem;
    }

    .container{
        z-index: 444;

        width: 50%;
        margin: 0 0 3rem 5rem;

        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: left;

        @media (max-width: 900px){
            width: 70%;
        }

        @media (max-width: 650px){
            width: 100%;
            margin: 0;
            padding: 0 2rem;

        }

        @media (max-width: 450px){
            padding: 0 1rem;

        }

    }

    .waveIMG{
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .introText{

        .accent{
            color: ${ ({theme}) => theme.accent };
            font-size: 1.5rem;

            ::-moz-selection { /* Code for Firefox */
                color: #fff;
                background: ${ ({theme}) => theme.bluewave };
            }
            ::selection {
                color: #fff;
                background: ${ ({theme}) => theme.accent };
            }

        }

        h1{
            font-size: 5rem;
            color: white;

            @media (max-width: 650px){
                font-size: 3rem;
            }
        }
        
        p{
            color: ${ ({theme}) => theme.greytext };
            font-size: 2.5rem;

            @media (max-width: 650px){
                font-size: 1.8rem;
            }
        }

        h1, p{
            margin-bottom: 1rem;
            letter-spacing: 0.5px;

            
            ::-moz-selection { /* Code for Firefox */
                color: #fff;
                background: ${ ({theme}) => theme.bluewave };
            }
            ::selection {
                color: #fff;
                background: ${ ({theme}) => theme.bluewave };
            }

        }

    }

    .buttons{

        display: flex;
        
    }


    @media (max-height: 1000px) {

        .introText{
            h1{
                font-size: 4rem;
            }

            p{
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
            }

            .accent{
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 400px){
        .buttons{
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
    }
    
    a{
        display: block;
        text-decoration: none;
        padding: ${props => props.padding};
        padding: 1.5rem;
        font-size: 1.2rem;
        border: 1px solid ${ ({theme}) => theme.accent };
        border-radius: 4%;
        background-color: transparent;

        margin: 2rem 2rem 0 0;

        transition: 0.3s ease;
        color: white;

        :hover{
            background-color: ${({ theme }) => theme.accent};
            cursor: pointer;
        }
}

    @media (max-width: 400px){
        a{
            padding: 1rem;
            font-size: 1rem;
        }
    }

`
