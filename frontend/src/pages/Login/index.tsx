import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Container, ContainerForm, Fieldset, ForgotPassword, Main, Title } from "./styles";

const Login = () => {
  return (
    <Container>
      <Header/>
      <Main>
        <ContainerForm>
          <Title>
            Login
          </Title>
          <Form>
            <Fieldset style={{gap: 0}}>
              <Input
                label="Usuário"
                type="text"
                placeholder="Digitar usuário"
              />
              <Input
                label="Senha"
                type="password"
                placeholder="Digitar senha"
              />
            </Fieldset>
            <ForgotPassword>
              Esqueci minha senha
            </ForgotPassword>

            <Fieldset style={{textAlign: "center", padding: "1rem 0"}}>
              <Button
                color={'whiteFixed'}
                bgcolor={'brand1'}
                component={'big'}
                width={'100%'}
              >
                Entrar
              </Button>

              Ainda não possui uma conta?
                
              <Button
                color={'grey0'}
                bgcolor={'grey10'}
                border={'grey4'}
                component={'big'}
                width={'100%'}
              >
                Cadastrar
              </Button>
            </Fieldset>
          </Form>
        </ContainerForm>
      </Main>
      <Footer/>
    </Container>
  );
}

export default Login;
