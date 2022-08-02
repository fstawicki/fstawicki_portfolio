import styled from "styled-components";

export const StyledHeroPage = styled.div`

    background-color: ${({theme}) => theme.bgcolor};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;


    .btnMarginLeft a{
        margin-left: 2rem;
    }

    .container{
        z-index: 444;

        width: 50%;
        margin: 0 0 3rem 10rem;

        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: left;

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
        }
        
        p{
            color: ${ ({theme}) => theme.greytext };
            font-size: 2.5rem;
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

        a{
            
        }

        
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
    

`
