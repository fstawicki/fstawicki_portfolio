import styled from "styled-components";

export const StyledButton = styled.button`

    border: none;
    background-color: transparent;
    display: block;

    margin-top: 2rem;

a{
    display: block;
    text-decoration: none;
    padding: ${props => props.padding};
    padding: 1.5rem;
    font-size: 1.2rem;
    border: 1px solid ${ ({theme}) => theme.accent };
    border-radius: 4%;
    background-color: transparent;

    margin-right: ${props => props.marginright};
    margin: ${props => props.margin};

    transition: 0.3s ease;
    color: white;

    :hover{
        background-color: ${({ theme }) => theme.accent};
    }
}



`