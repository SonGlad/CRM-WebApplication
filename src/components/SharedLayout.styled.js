import { styled } from "styled-components";


export const StyledContainer = styled.div`
    height: ${props => props.$isloggedin ? '100dvh': '97dvh'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .main{
        display: flex;
    }

    main{
        flex: 1 1 auto;
    }
`