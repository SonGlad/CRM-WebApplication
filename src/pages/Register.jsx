import { Register } from "../components/RegisterPage/Register";
import { RegisterSection } from "../components/Section/Section";
import { Container } from "../components/Container/Container";


const RegisterPage = () => {

    return (
        <RegisterSection>
            <Container>
              <Register/>
            </Container>
        </RegisterSection>
    );
};


export default RegisterPage;