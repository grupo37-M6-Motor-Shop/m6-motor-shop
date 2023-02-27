import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SendEmailForgotPassword from "../../components/SendEmailForgotPassword";
import ValidateCodeForgotPassword from "../../components/ValidateCodeForgotPassword";
import { Container, Main } from "./styles";

const ForgotPassword = () => {
  return (
    <Container>
      <Header/>
      <Main>
        {/* <SendEmailForgotPassword/> */}
        <ValidateCodeForgotPassword/>
      </Main>
      <Footer/>
    </Container>
  );
}

export default ForgotPassword;
