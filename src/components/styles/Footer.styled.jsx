import styled from "styled-components";

export const StyledFooter = styled.div`
    
    background-color: ${({ theme }) => theme.accent};

    position: relative;

    

    img{
    }
/* 
    .sign{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

        position: absolute;
        bottom: 1rem;
        right: 0;

        width: 50%;
        margin: 0 0 0 auto;

    } */

    p{
        font-size: 1.2rem;
        color: white;
        text-align: center;

        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;

        background-color: ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.greytext};
        z-index: 444;
    }

    a{

        padding-right: 2rem;
        color: white;
        text-align: right;

        position: absolute;
        bottom: 0;
    }


`