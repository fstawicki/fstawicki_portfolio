import styled from "styled-components";

export const StyledJobs = styled.div`

    background-color: ${({theme}) => theme.bgcolor};
/* 
    position: relative; */

    *{
        ::-moz-selection { /* Code for Firefox */
            color: white;
            background: ${ ({theme}) => theme.accent };
        }
        ::selection {
            color: white;
            background: ${ ({theme}) => theme.accent };
        }
    }
    

    ul{
        list-style: none;
    }

    .wave2IMG{
        transform: rotate(180deg);
        /* position: absolute; */
        /* position: absolute; */
    }

    .wrapper{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;

    }

    /*
    .studyContainer{
        margin-left: 2rem;
    } */

    .studyContainer *,
    .jobsContainer *{
        color: ${({theme}) => theme.greytext};
        font-size: 1.1rem;
    }

    .studyContainer,
    .jobsContainer{
        background-color: ${({theme}) => theme.bgcolor};
        /* border: 1px solid ${({theme}) => theme.bluewave}; */
        /* padding: 2rem 0.5rem; */

        z-index: 100;

        .position,
        .uni,
        .tasks{
            margin-bottom: 0.5rem;
        }


        h3{
                font-size: 3rem;
                /* color: ${({theme}) => theme.accent}; */
                color: white;
        }
        

        .jobsListItem{
            margin-top: 2rem;
        }

        .red{
            color: ${({theme}) => theme.accent};
        }

        .tasks{
            color: white;
        }
    }

`