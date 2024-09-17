import styled from "styled-components";


export const StyledMainPage = styled.div`
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 0.75rem;
    background-color: ${p => p.theme.color.background};
    box-shadow: 4px 0px 14px 5px rgba(227, 255, 168, 0.2);
    padding: 0.75rem;

    
    .wraper{
        width: 100%;
        border: 1px solid ${p => p.theme.color.primary_green_lite};
        border-radius: 0.75rem;
        padding: 0.75rem;
        height: 90.5dvh;

        @media screen and (min-width: 834px) {
            height: 87.5dvh;
            display: flex;
            flex-direction: column;
        }
    }

    .page-title{
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
    }

    .filter-block{
        margin-bottom: 2rem;
    }

    
    .filter-list{
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        line-height: 1.25rem;
    }

    .content-container{
        display: flex;
        flex-direction: column;
        height: 100%;
        flex-grow: 1;
    }

    .small-table{
        border-right: 1px solid ${p => p.theme.color.primary_green_lite};

        & tbody{
            & tr{
                & td:last-child{
                    border-right: none;
                }
            }

            & tr:last-child{
                & td{
                    border-bottom: 1px solid ${p => p.theme.color.primary_green_lite};
                }
            }
        }
    }
`