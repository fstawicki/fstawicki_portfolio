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

    a{

        margin: 0 2rem 2rem auto;
        color: white;
        text-align: right;

        display: block;

        text-decoration: none;

    }


`