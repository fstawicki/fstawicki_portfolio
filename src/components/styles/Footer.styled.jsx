import styled from "styled-components";

export const StyledFooter = styled.div`
    
    background-color: ${({ theme }) => theme.bgcolor};

    position: relative;

    img{
    }


    .wrapper{

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        width: 100%;
        position: absolute;
        bottom: 0;

        background-color: ${({ theme }) => theme.accent};

        
    }

    p{
        font-size: 1.2rem;
        color: white;
        text-align: center;

        display: block;
        width: 100%;

        color: ${({ theme }) => theme.bgcolor};
    }

    button{

        margin: 0 10rem 2rem auto;
        font-size: 1.1rem;
        color: white;
        text-align: right;
        display: block;
        text-decoration: none;

        padding: 1rem;
        background-color: ${({ theme }) => theme.bluewave};
        border: 1px solid ${({ theme }) => theme.bluewave};
        border-radius: 5%;

        transition: 0.3s ease;

        :hover{
            background-color: ${({ theme }) => theme.bgcolor};
            border: 1px solid ${({ theme }) => theme.bgcolor};
            cursor: pointer;
        }

    }


`