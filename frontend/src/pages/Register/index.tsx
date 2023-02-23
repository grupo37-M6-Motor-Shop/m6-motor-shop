import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Input from "../../components/Input";
import InputCheckbox from "../../components/InputCheckbox";
import InputTextArea from "../../components/InputTextArea";
import { Container, ContainerForm, Fieldset, Main, Title } from "./styles";

const Register = () => {
  return (
    <Container>
      <Header/>
      <Main>
        <ContainerForm>
          <Title>
            Cadastro
          </Title>
          <Form>
            <Fieldset style={{gap: 0}}>
              <p>Informações pessoais</p>
              <Input
                label="Nome"
                type="text"
                placeholder="Ex: Samuel Leão"
              />
              <Input
                label="Email"
                type="text"
                placeholder="Ex: samuel@kenzie.com.br"
              />
              <Input
                label="CPF"
                type="text"
                placeholder="000.000.000-00"
              />
              <Input
                label="Celular"
                type="text"
                placeholder="(DDD) 90000-0000"
              />
              <Input
                label="Data de Nascimento"
                type="text"
                placeholder="00/00/00"
              />

              <InputTextArea
                label="Descrição"
                placeholder="Digitar descrição"
              />


            </Fieldset>
            <Fieldset>
              <p>Informações de endereço</p>

              <Input
                label="CEP"
                type="text"
                placeholder="00000.000"
              />

              <Fieldset style={{flexDirection: "row", gap: "0.5rem"}}>
                <Input
                  label="Estado"
                  type="text"
                  placeholder="Digitar Estado"
                />
                
                <Input
                  label="Cidade"
                  type="text"
                  placeholder="Digitar cidade"
                />
              </Fieldset>

              <Input
                label="Rua"
                type="text"
                placeholder="Digitar rua"
              />

              <Fieldset style={{flexDirection: "row", gap: "0.5rem"}}>
              <Input
                label="Número"
                type="text"
                placeholder="Digitar número"
              />
              
              <Input
                label="Complemento"
                type="text"
                placeholder="Ex: apart 307"
              />
              </Fieldset>
            </Fieldset>

            <Fieldset>
              <p>Tipo de conta</p>

              <InputCheckbox name1="Comprador" name2="Anunciante" checked/>

            </Fieldset>

            <Fieldset>
              <Input
                label="Senha"
                type="password"
                placeholder="Digitar senha"
              />
              <Input
                label="Confirmar de Senha"
                type="password"
                placeholder="Digitar senha"
              />
            </Fieldset>

            <Fieldset style={{textAlign: "center", padding: "1rem 0"}}>

              <Button
                color={'whiteFixed'}
                bgcolor={'brand1'}
                component={'big'}
                width={'100%'}
              >
                Finalizar Cadastro
              </Button>
            </Fieldset>
          </Form>
        </ContainerForm>
      </Main>
      <Footer/>
    </Container>
  );
}

export default Register;
