import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas: "header" "main" "footer";
    grid-template-rows: 11.4rem auto 7.7rem;

    @media(max-width: 399px) {
        > main {
            section {
                    max-width: 35rem;
                    width: 100%;
            }
        }
    }
    
    @media(min-width: 400px) {
        > main {
            section {
                    max-width: 40rem;
                    width: 100%;
            }
        }
    }

    @media(min-width: 500px) {
        > main {
            section {
                    max-width: 50rem;
                    width: 100%;
            }
        }
    }

    @media(min-width: 820px) {
        > main {
            section {
                    max-width: 68rem;
                    width: 100%;
            }
        }
    }

    @media(min-width: 1000px) {
        > main {
            section {
                    max-width: 78rem;
                    width: 100%;
            }
        }
    }

    @media(min-width: 1100px) {
        > main {
            section {
                    max-width: 88rem;
                    width: 100%;
                }
        }
    }

    @media(min-width: 1366px) {
        > main {
            section {
                    max-width: 120rem;
                    width: 100%;
                }
        }
    }
`

export const Content = styled.main`
    grid-area: main;

    width: 100%;
    padding: 0 1.6rem;
    margin: 0 auto;
    overflow: auto;

    > section {
        white-space: nowrap;
        position: relative;
        margin: 0 auto;
        max-width: 120rem;

        
        > div:first-child {
            white-space: nowrap;
            display: flex;
            align-items: center;
            overflow-x: hidden;
            flex-direction: row;

            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
        }
    }
`

export const Scrolling = styled.button`
    position: absolute;
    top: 53.5%;
    transform: translateY(-50%);
    border: none;
    filter: opacity(0.7);
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    height: 31rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.5rem;
    box-shadow: 0 0 3px 3px ${({ theme }) => theme.COLORS.DARK_800};
    z-index: 0.5;

    ${({ direction }) => direction === 'prev' ? `
        left: 0;
    ` : `
        right: 0;
    `}

    :hover {
        filter: opacity(0.9);
    }
`