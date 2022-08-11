import styled from "styled-components";

export const StyledContact = styled.div`

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
}

.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}

.flexDiv{
    display: flex;
    
}

.flexDiv p{
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.flexDiv li{
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: ${({theme}) => theme.greytext};
}

.linksDiv{
    margin-left: 10rem;
}



` 