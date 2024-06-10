import { StyledHeader } from "./Header.styled";
import { Container } from "../Container/Container";
import { StyledHeaderContainer } from "./Header.styled";
import { AuthNav } from "./AuthNav/AuthNav";
import { Navigation } from "./Navigation/Navigation";
// import { UserMenu } from "./UserMenu/UserMenu";


export const Header =() => {
    return (
        <StyledHeader>
            <Container>
                <StyledHeaderContainer>
                    <Navigation/>
                    <AuthNav/>  
                </StyledHeaderContainer>
            </Container>
        </StyledHeader>
    );
};