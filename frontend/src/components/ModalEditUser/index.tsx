
import { useForm } from "react-hook-form";
import Form from "../Form";
import Input from "../Input";
import Modal from "../modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdateUser } from "../../validations/FormUpdateUser";
import { Fieldset } from "../../pages/Register/styles";
import InputTextArea from "../InputTextArea";
import { Div } from "../ModalAdCreate/style";
import Button from "../Button";
import { FormUpdateUser } from "../../interfaces/FormUpdateUser/FormUpdateUser";

const ModalEditUser = () => {
  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormUpdateUser>({
		resolver: yupResolver(schemaUpdateUser),
	});

  return (
    <Modal title="Editar Perfil">

			<Form>
        <Fieldset>
          <p>Informações pessoais</p>
          <Input
            label="Nome"
            type="text"
            placeholder="Digitar nome"
            register={register}
            name="name"
            error={errors.name}
          />
          <Input
            label="Email"
            type="text"
            placeholder="samuel@kenzie.com.br"
            register={register}
            name="email"
            error={errors.email}
          />
          <Input
            label="CPF"
            type="text"
            placeholder="000.000.000-09"
            register={register}
            name="cpf"
            error={errors.cpf}
          />
          <Input
            label="Celular"
            type="text"
            placeholder="(024) 99921-2165"
            register={register}
            name="phone"
            error={errors.phone}
          />
          <Input
            label="Data de Nascimento"
            type="text"
            placeholder="09/12/90"
            register={register}
            name="birthday"
            error={errors.birthday}
          />
          <InputTextArea
            label="Descrição"
            name="description"
            placeholder="Digitar descrição"
            register={register}
            error={errors.description}
          />
        </Fieldset>
				<Div>
					<Button
						type="button"
						color={"grey2"}
						bgcolor={"grey6"}
						component={"big"}
						width={"126px"}
            hover={{bgcolor: "grey5"}}
					>
						Cancelar
					</Button>
					<Button
						type="submit"
						color={"whiteFixed"}
						bgcolor={"brand1"}
						component={"big"}
						width={"193px"}
            hover={{bgcolor: "brand2"}}
					>
						Salvar alterações
					</Button>
				</Div>
			</Form>
    </Modal>
  )
}

export default ModalEditUser;
