import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Container, Fieldset, Title } from "./styles";
import { schemaSendEmailForgotPassword } from "../../validations/FormForgotPassword"
import { IFormForgotPassword } from "../../interfaces/IFormForgotPassword/IFormForgotPassword";

const SendEmailForgotPassword = () => {
  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormForgotPassword>({
		resolver: yupResolver(schemaSendEmailForgotPassword),
	});


  return (
    <Container>
      <Title>
        Esqueci minha senha

        <p>
          Para redefinir sua senha, informe seu email cadastrado e lhe enviaremos um email de validação.
        </p>
      </Title>
      <Form>
        <Fieldset style={{gap: 0}}>
          <Input
            label="Email"
            type="text"
            placeholder="Digitar email"
            register={register}
            name="email"
          />
        </Fieldset>

        <Fieldset style={{textAlign: "center", padding: "1rem 0"}}>
          <Button
            color={'whiteFixed'}
            bgcolor={'brand1'}
            component={'big'}
            width={'100%'}
            type="submit"
          >
            Enviar
          </Button>
            
          <Button
            color={'grey0'}
            bgcolor={'grey6'}
            component={'big'}
            width={'100%'}
          >
            Cancelar
          </Button>
        </Fieldset>
      </Form>
    </Container>
  );
}

export default SendEmailForgotPassword;
