import styled from "styled-components";

export const StyledContact = styled.div`

*{
    ::-moz-selection { /* Code for Firefox */
        color: white;
        background: ${({theme}) => theme.accent};
    }
    ::selection {
        color: white;
        background: ${({theme}) => theme.accent};
    }
}


background-color: ${({theme}) => theme.bgcolor};

.color-white{
    color: white;
}

.color-accent{
    color: ${({theme}) => theme.accent};
}

ul{
    list-style: none;
}

h3{
    font-size: 3rem;
    text-align: center;
    padding: 8rem 0;

    @media (max-width: 950px){
        padding: 6rem 0;
    }

    @media (max-width: 350px){
        font-size: 2.5rem;
    }
}

.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    @media (max-width: 1450px){

    }
    
    .flexDiv{
        display: flex;
        justify-content: space-between;
        width: 50%;

        @media (max-width: 1450px){
            width: 100%;
            justify-content: space-evenly;
        }
        @media (max-width: 850px){
            flex-direction: column;
            padding: 0 1rem;
            width: 70%;


            .linksDiv{
                margin-top: 2rem;
            }
        }

        @media (max-width: 650px){
            width: 100%;
        }
    
        p{
            text-align: center;
            margin-bottom: 2rem;
            font-size: 1.5rem;

        }
    
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
            color: ${({theme}) => theme.greytext};
    
            font-size: 1.1rem;

            @media (max-width: 650px){
                font-size: 1rem;
            }
    
            a{
                text-decoration: none;
                color: ${({theme}) => theme.bluewave};
                transition: 0.2s ease;
            
                :hover{
                    color: ${({theme}) => theme.accent};
                }
            
            }
    
            span{
                margin-right: 2rem;
            }
    
        }
    }
}


    .btnToTop{

        font-size: 1.2rem;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        color: white;
        text-decoration: none;

        margin-top: 3rem;

        padding: 1.5rem;
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.accent};
        border-radius: 5%;

        transition: 0.3s ease;

        :hover{
            background-color: ${({ theme }) => theme.accent};
            cursor: pointer;
        }

        :active{
            text-decoration: none;
            background-color: transparent;
            border: 1px solid ${({ theme }) => theme.accent}; ;
        }

        @media (max-width: 400px){
            padding: 1rem;
            font-size: 1rem;
        }

    }



` 