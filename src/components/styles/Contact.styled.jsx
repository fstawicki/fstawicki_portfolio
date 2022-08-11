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
}

.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
}

.flexDiv{
    display: flex;
    justify-content: space-between;
    width: 40%;

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


/* .linksDiv{
    margin-left: 10rem;
} */



` 