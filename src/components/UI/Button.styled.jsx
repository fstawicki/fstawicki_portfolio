import styled from "styled-components";

export const StyledButton = styled.button`

        font-size: 1.2rem;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        color: white;
        text-align: center;
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

        @media (max-width: 500px){
            margin-top: 1rem;
            padding: 1.2rem;
            font-size: 1rem;
        }

        @media (max-width: 400px){
            margin-top: 1rem;
            padding: 1.2rem;
            font-size: 1rem;
        }


`