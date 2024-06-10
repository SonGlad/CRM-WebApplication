import {Login} from "../components/LoginPage/Login";
import { LoginSection } from "../components/Section/Section";
import { Container } from "../components/Container/Container";


const LoginPage = () => {

    return(
        <LoginSection>
            <Container>
                <Login/>
            </Container>
        </LoginSection>
    );
};


export default LoginPage;