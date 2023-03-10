import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas: "header" "main" "footer"; 
    grid-template-rows: 11.4rem auto 7.7rem;
`

export const Content = styled.main`
    grid-area: main;
    padding: 3.6rem 4rem;

    > button {
        display: flex;
        align-items: center;
        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 2.4rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 3rem;
        }
    }

    > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 40rem;
        margin: 0 auto;
        text-align: center;

        > img {
            display: flex;
            width: 20.4rem;
            height: 20.4rem;
            margin-right: 2rem;
        }

        > div {
            h1 {
                font-family: "Poppins", "serif";
                font-weight: 500;
                font-size: 2.7rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }

            p {
                font-family: "Poppins", "serif";
                font-weight: 400;
                font-size: 1.6rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                margin-bottom: 2.7rem;
            }

            span {
                max-width: 59rem;
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                justify-content: center;
            }

            button{
                margin-top: 4rem;
                border-radius: 5px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 7px;

                font-family: "Poppins", "serif";
                font-weight: 500;
                font-size: 1.4rem;

            }
        }

        @media(min-width: 820px) {
            display: flex;
            flex-direction: row;
            max-width: 136.6rem;
            justify-content: space-between;
            margin: 4rem auto 0;
            padding: 3.6rem 5rem 0;

            img {
                width: 34rem;
                height: 34rem;
            }

            p {
                text-align: left;
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: start;
            }

            button {
                max-width: 13.2rem;
            }
        }

        @media (min-width: 1000px) {
        gap: 5rem;
            
            img {
                width: 37rem;
                height: 37rem;
            }

            div {
                h1 {
                font-size: 4rem;
                }

                p {
                    font-size: 2.4rem;
                }


                button{
                    font-size: 1.4rem;
                    padding: 0 1rem;
                }
            }

        }
    }

    @media(min-width: 1200px) {
            padding: 3.6rem 10rem 0;
    } 
    
`