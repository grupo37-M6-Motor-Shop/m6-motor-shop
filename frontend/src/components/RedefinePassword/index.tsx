import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Container, Fieldset, Title } from "./styles";
import { schemaRedefinePassword } from "../../validations/FormForgotPassword";
import { IRedefinePassword } from "../../interfaces/IFormForgotPassword/IFormForgotPassword";

const RedefinePassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRedefinePassword>({
		resolver: yupResolver(schemaRedefinePassword),
	});

	return (
		<Container>
			<Title>Redefinir senha</Title>
			<Form>
				<Fieldset style={{ gap: 0 }}>
					<Input
						label="Senha"
						type="password"
						placeholder="Digitar senha"
						register={register}
						name="newPasswordCode"
					/>
					<Input
						label="Confirmar senha"
						type="password"
						placeholder="Digitar senha novamente"
						register={register}
						name="newPasswordCode"
					/>
				</Fieldset>

				<Fieldset style={{ textAlign: "center", padding: "1rem 0" }}>
					<Button
						color={"whiteFixed"}
						bgcolor={"brand1"}
						component={"big"}
						width={"100%"}
						type="submit"
						hover={{ bgcolor: "brand2" }}
					>
						Redefinir senha
					</Button>
				</Fieldset>
			</Form>
		</Container>
	);
};

export default RedefinePassword;
