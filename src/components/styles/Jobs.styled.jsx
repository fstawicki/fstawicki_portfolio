import styled from "styled-components";

export const StyledJobs = styled.div`

    background-color: ${({theme}) => theme.bgcolor};

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
    }

    .wrapper{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;


        @media (max-width: 950px){
            display: block;
            padding: 0 1rem;
            margin: 5rem auto 0 auto;
            width: 70%;

            .studyContainer,
            .jobsContainer{
                width: 100%;

            }

            .studyContainer{
                margin-top: 3rem;
            }
        }

        @media (max-width: 810px){
            width: 80%;
        }

        @media (max-width: 710px){
            width: 90%;
        }

        @media (max-width: 635px){
            width: 100%;
        }

    }


    .studyContainer *,
    .jobsContainer *{
        color: ${({theme}) => theme.greytext};
        font-size: 1.1rem;
    }

    .studyContainer,
    .jobsContainer{
        background-color: ${({theme}) => theme.bgcolor};

        .position,
        .uni,
        .tasks{
            margin-bottom: 0.5rem;
        }


        h3{
                font-size: 3rem;
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