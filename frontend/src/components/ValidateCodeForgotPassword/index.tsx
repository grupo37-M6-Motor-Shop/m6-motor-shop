import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Container, Fieldset, Title } from "./styles";
import { schemaValidateCodeForgotPassword } from "../../validations/FormForgotPassword"
import { IValidateCodeForgotPassword } from "../../interfaces/IFormForgotPassword/IFormForgotPassword";

const ValidateCodeForgotPassword = () => {
  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IValidateCodeForgotPassword>({
		resolver: yupResolver(schemaValidateCodeForgotPassword),
	});

  return (
    <Container>
      <Title>
        Validação de código

        <p>
          Digite o código de validação com 6 dígitos enviado à você por email
        </p>
      </Title>
      <Form>
        <Fieldset style={{gap: 0}}>
          <Input
            label="Código"
            type="text"
            placeholder="Ex: 637254"
            register={register}
            name="newPasswordCode"
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
            Validar
          </Button>
        </Fieldset>
      </Form>
    </Container>
  );
}

export default ValidateCodeForgotPassword;
